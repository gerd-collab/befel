// Platform feedback, mounted in the shared header, never in individual learning blocks.
// The server owns tracker credentials; only an explicitly submitted report leaves the browser.
import { state, t } from './app';
import { h } from './dom';
import { icon } from './ui';

const MAX_IMAGE_BYTES = 2.5 * 1024 * 1024;
const STATUS_URL = 'https://feedback.gerdwenning.eu/';
let opening = false;
let activeDialog: HTMLDialogElement | null = null;

const canCapture = (): boolean => Boolean(navigator.mediaDevices?.getDisplayMedia)
  && !/Android|iPhone|iPad/i.test(navigator.userAgent);

function toJpeg(source: CanvasImageSource, width: number, height: number): string | null {
  if (!width || !height) return null;
  const scale = Math.min(1, 1600 / Math.max(width, height));
  const canvas = h('canvas', { width: Math.round(width * scale), height: Math.round(height * scale) });
  const context = canvas.getContext('2d');
  if (!context) return null;
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  const url = canvas.toDataURL('image/jpeg', 0.82);
  return url.length * 0.75 <= MAX_IMAGE_BYTES ? url : null;
}

async function captureTab(): Promise<string | null> {
  if (!canCapture()) return null;
  let stream: MediaStream | undefined;
  try {
    // Chromium hints match the CyberSchooling player. Other browsers ignore them.
    const options = {
      video: { displaySurface: 'browser' }, audio: false,
      preferCurrentTab: true, selfBrowserSurface: 'include',
      surfaceSwitching: 'exclude', monitorTypeSurfaces: 'exclude',
    };
    stream = await navigator.mediaDevices.getDisplayMedia(options);
    const video = h('video', { muted: true, playsinline: true });
    video.muted = true;
    video.srcObject = stream;
    await video.play();
    await new Promise((resolve) => setTimeout(resolve, 350));
    return toJpeg(video, video.videoWidth, video.videoHeight);
  } catch {
    return null; // Denying capture must never prevent a report.
  } finally {
    stream?.getTracks().forEach((track) => track.stop());
  }
}

async function fileToJpeg(file: File): Promise<string | null> {
  if (!file.type.startsWith('image/') || file.size > 20 * 1024 * 1024) return null;
  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) return null;
  try { return toJpeg(bitmap, bitmap.width, bitmap.height); }
  finally { bitmap.close(); }
}

export function feedbackButton(): HTMLButtonElement {
  return h('button', {
    type: 'button', class: 'viewer-feedback', 'aria-label': t('fbButton'),
    title: t('fbButton'), 'aria-haspopup': 'dialog',
    onclick: () => { void openFeedback(); },
  }, icon('message'), h('span', { class: 'viewer-feedback-label' }, t('fbButton')));
}

async function openFeedback(): Promise<void> {
  if (opening || activeDialog) return;
  opening = true;
  // Freeze the original screen before capture or any asynchronous work.
  const context = {
    view: new URLSearchParams(location.hash.slice(1)).get('screen') || 'home',
    title: document.querySelector('main h1')?.textContent || document.title,
    viewport: `${innerWidth}×${innerHeight}`,
    screen: `${screen.width}×${screen.height}`,
    userAgent: navigator.userAgent, lang: state.lang, theme: state.theme,
  };
  try {
    let screenshot = await captureTab();
    let sending = false;
    let capturing = false;
    const dialog = h('dialog', { class: 'fb-dialog no-print', 'aria-labelledby': 'fb-title' });
    activeDialog = dialog;
    const error = h('p', { class: 'fb-error', role: 'alert', hidden: true });
    const showError = (message: string): void => { error.textContent = message; error.hidden = !message; };
    const close = (): void => { if (!sending && !capturing) dialog.close(); };
    const closeButton = (): HTMLButtonElement => h('button', {
      type: 'button', class: 'btn ghost', onclick: close,
    }, t('fbCancel'));

    const text = h('textarea', {
      id: 'fb-text', name: 'text', rows: 5, minlength: 5, maxlength: 2000, required: true,
      placeholder: t('fbPlaceholderBug'), 'aria-describedby': 'fb-note',
    });
    const label = h('label', { class: 'fb-label', for: 'fb-text' }, t('fbTextBug'));
    const kinds = h('fieldset', { class: 'fb-kinds' },
      h('legend', null, t('fbKind')),
      (['bug', 'idea'] as const).map((kind) => h('label', { class: 'fb-kind' },
        h('input', {
          type: 'radio', name: 'category', value: kind, required: true,
          onchange: () => {
            label.textContent = t(kind === 'idea' ? 'fbTextIdea' : 'fbTextBug');
            text.placeholder = t(kind === 'idea' ? 'fbPlaceholderIdea' : 'fbPlaceholderBug');
          },
        }),
        h('span', null, h('span', { 'aria-hidden': 'true' }, kind === 'bug' ? '🐞' : '💡'), t(kind === 'bug' ? 'fbBug' : 'fbIdea')),
      )),
    );
    const preview = h('img', { class: 'fb-shot-img', alt: t('fbShotAlt'), hidden: true });
    const noShot = h('p', { class: 'fb-note' }, t(canCapture() ? 'fbNoShot' : 'fbNoShotMobile'));
    const remove = h('button', {
      type: 'button', class: 'btn quiet', hidden: true,
      onclick: () => { screenshot = null; renderShot(); },
    }, t('fbRemove'));
    const capture = h('button', {
      type: 'button', class: 'btn quiet', hidden: !canCapture(),
      onclick: async () => {
        if (sending || capturing) return;
        capturing = true;
        dialog.close();
        try { screenshot = (await captureTab()) || screenshot; }
        finally {
          dialog.showModal();
          capturing = false;
          renderShot();
          capture.focus();
        }
      },
    }, t('fbCapture'));
    const file = h('input', {
      type: 'file', accept: 'image/*', class: 'sr-only', id: 'fb-file',
      onchange: async () => {
        const selected = file.files?.[0];
        file.value = '';
        if (!selected) return;
        try {
          const url = await fileToJpeg(selected);
          if (!url) { showError(t('fbFileError')); return; }
          screenshot = url;
          renderShot();
          showError('');
        } catch { showError(t('fbFileError')); }
      },
    });
    const upload = h('label', { class: 'fb-upload' }, h('span', null, t('fbAttach')), file);
    function renderShot(): void {
      preview.hidden = !screenshot;
      if (screenshot) preview.src = screenshot; else preview.removeAttribute('src');
      noShot.hidden = Boolean(screenshot);
      remove.hidden = !screenshot;
      capture.textContent = t(screenshot ? 'fbRecapture' : 'fbCapture');
    }

    const send = h('button', { type: 'submit', class: 'btn' }, t('fbSend'));
    const form = h('form', { class: 'fb-form', novalidate: true },
      h('div', { class: 'fb-head' },
        h('h2', { id: 'fb-title' }, t('fbTitle')),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': t('fbCancel'), onclick: close }, '×'),
      ),
      h('p', { class: 'fb-context small muted' }, context.title),
      kinds, label, text,
      h('div', { class: 'fb-shot' }, preview, noShot,
        h('div', { class: 'fb-shot-actions' }, capture, upload, remove)),
      h('p', { id: 'fb-note', class: 'fb-note' }, t('fbNote')), error,
      h('div', { class: 'fb-actions' }, closeButton(), send),
    );
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (sending || capturing) return;
      const category = new FormData(form).get('category');
      if (!category) { showError(t('fbNeedKind')); kinds.querySelector('input')?.focus(); return; }
      if (text.value.trim().length < 5) { showError(t('fbNeedText')); text.focus(); return; }
      sending = true;
      showError('');
      send.textContent = t('fbSending');
      form.setAttribute('aria-busy', 'true');
      form.querySelectorAll<HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement>('input, button, textarea')
        .forEach((control) => { control.disabled = true; });
      try {
        const response = await fetch('/api/feedback', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category, text: text.value.trim(), screenshot, context }),
          signal: AbortSignal.timeout(45000),
        });
        const result = await response.json();
        if (!response.ok) {
          showError(t(response.status === 429 ? 'fbRateLimit' : response.status === 503 ? 'fbUnavailable' : 'fbSendError'));
          return;
        }
        if (!result.reference) throw new Error('Missing receipt');
        const done = h('div', { class: 'fb-done' },
          h('h2', { id: 'fb-title', tabindex: -1 }, t('fbThanks')),
          h('p', null, result.number ? t('fbThanksNumber', { number: result.number }) : t('fbThanksText')),
          h('p', null, t('fbReference'), ' ', h('strong', { class: 'fb-reference' }, result.reference)),
          result.attachmentFailed ? h('p', { class: 'fb-error' }, t('fbAttachmentFailed')) : null,
          h('p', { class: 'fb-note' }, t('fbStatusHint')),
          h('div', { class: 'fb-actions' },
            h('a', { class: 'btn ghost', href: STATUS_URL, target: '_blank', rel: 'noopener' }, t('fbStatusLink')),
            h('button', { type: 'button', class: 'btn', onclick: close }, t('fbDone')),
          ),
        );
        dialog.replaceChildren(done);
        done.querySelector<HTMLElement>('h2')?.focus();
      } catch { showError(t('fbSendError')); }
      finally {
        sending = false;
        form.removeAttribute('aria-busy');
        send.textContent = t('fbSend');
        form.querySelectorAll<HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement>('input, button, textarea')
          .forEach((control) => { control.disabled = false; });
      }
    });
    dialog.addEventListener('cancel', (event) => { if (sending || capturing) event.preventDefault(); });
    dialog.addEventListener('close', () => {
      if (capturing) return;
      dialog.remove();
      activeDialog = null;
      document.querySelector<HTMLButtonElement>('.viewer-feedback')?.focus();
    });
    dialog.append(form);
    document.body.append(dialog);
    renderShot();
    dialog.showModal();
  } finally { opening = false; }
}
