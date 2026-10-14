// Print one section of the page (builder results, journal, diploma). The browser's print
// dialog also offers "save as PDF", so no PDF library and no upload is needed.

export function printSection(el: HTMLElement, title: string): void {
  const root = document.createElement('div');
  root.id = 'print-root';
  const heading = document.createElement('p');
  heading.className = 'small';
  heading.textContent = title;
  root.append(heading, el.cloneNode(true));
  // Cloned form fields lose their typed values; copy them over as plain text.
  const sources = el.querySelectorAll<HTMLTextAreaElement | HTMLInputElement>('textarea, input[type="text"]');
  const targets = root.querySelectorAll<HTMLTextAreaElement | HTMLInputElement>('textarea, input[type="text"]');
  targets.forEach((field, i) => {
    const p = document.createElement('p');
    p.className = 'print-value';
    p.textContent = sources[i]?.value || '—';
    field.replaceWith(p);
  });
  document.body.append(root);
  document.body.classList.add('printing');
  const done = (): void => {
    document.body.classList.remove('printing');
    root.remove();
    window.removeEventListener('afterprint', done);
  };
  window.addEventListener('afterprint', done);
  window.print();
}
