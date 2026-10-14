// Freely licensed photographs from Wikimedia Commons. Each file was scaled down and
// converted to WebP (1600 px and 800 px wide); the credits page lists author and license.

import { l, type L } from './types';

export interface ImageInfo {
  alt: L;
  title: string;
  author: string;
  license: string;
  licenseUrl?: string;
  page: string;
  /** CSS object-position for crops. */
  pos?: string;
}

export const IMAGES = {
  'lighthouse-storm': {
    alt: l('Vågor slår över en fyr i storm', 'Wellen schlagen über einen Leuchtturm im Sturm', 'Waves crashing over a lighthouse in a storm'),
    title: 'Isla de Mouro, waves crashing over lighthouse',
    author: 'José Manuel Blanco',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Isla_de_Mouro,_waves_crashing_over_lighthouse.jpg',
    pos: '50% 45%',
  },
  binnacle: {
    alt: l('Rorkult, kompasshus och maskintelegraf från ett fartyg', 'Steuerrad, Kompasshaus und Maschinentelegraf eines Schiffs', 'Ship’s wheel, binnacle and engine telegraph'),
    title: 'Ship Binnacle',
    author: 'Worldwidewebb77',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Ship_Binnacle.jpg',
    pos: '45% 55%',
  },
  rowing: {
    alt: l('Ett roddarlag i takt på vattnet', 'Eine Rudermannschaft im Gleichtakt auf dem Wasser', 'A rowing crew pulling in time on the water'),
    title: 'Harvard Rowing Crew at Henley 2004',
    author: 'Wikimedia Commons',
    license: 'Public domain',
    page: 'https://commons.wikimedia.org/wiki/File:Harvard_Rowing_Crew_at_Henley_2004_-2.JPG',
    pos: '60% 55%',
  },
  windlass: {
    alt: l('Ankarspel och ankarkätting på ett fartyg', 'Ankerwinde und Ankerkette an Bord', 'Windlass and anchor chain on board'),
    title: 'ARTHUR B. HOMER Windlass & Anchor Chain',
    author: 'Gary Todd',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    page: 'https://commons.wikimedia.org/wiki/File:ARTHUR_B._HOMER_Windlass_%26_Anchor_Chain.jpg',
  },
  'compass-deck': {
    alt: l('Magnetkompass på ett fartygsdäck mot havet', 'Magnetkompass auf einem Schiffsdeck vor dem Meer', 'Magnetic compass on a ship’s deck facing the sea'),
    title: 'Magnetic compass deck',
    author: '---=XEON=--- (Panoramio)',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Magnetic_compass_deck_-_panoramio.jpg',
  },
  'cargo-sevensky': {
    alt: l('Ett lastfartyg ligger för ankar på redden', 'Ein Frachtschiff liegt vor Anker auf der Reede', 'A cargo ship lying at anchor in the roads'),
    title: 'General cargo ship ‘Seven Sky’ at the anchorage of the Port of Haifa',
    author: 'DmitTrix',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    page: 'https://commons.wikimedia.org/wiki/File:General_cargo_ship_%27Seven_Sky%27_(IMO_9141637)_at_the_anchorage_of_the_Port_of_Haifa,_Israel_-_2023-10-13_(DSC1055_-_DSC1084;_G%27MIC_Median_Blend_of_30_photos,_vignetting_removal,_crop_5472x2736px).guetzli.jpg',
    pos: '70% 50%',
  },
  'rope-coil': {
    alt: l('En prydligt upprullad tamp på ett trädäck', 'Ein ordentlich aufgeschossenes Tau auf Holzdeck', 'A neatly coiled rope on a wooden deck'),
    title: 'Rope coil on deck',
    author: 'Matt Haggerty (Unsplash)',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Rope_coil_on_deck_(Unsplash).jpg',
  },
  'cargo-express': {
    alt: l('Ett lastfartyg på väg ut ur hamnen', 'Ein Frachtschiff beim Auslaufen aus dem Hafen', 'A cargo ship leaving harbour'),
    title: 'Sea Cargo Express',
    author: 'Alan Jamieson',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Sea_Cargo_Express_(27135992134).jpg',
  },
  'nar-lighthouse': {
    alt: l('När fyr på Gotland', 'Leuchtturm När auf Gotland', 'När lighthouse on Gotland'),
    title: 'När lighthouse',
    author: 'Jumilla',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    page: 'https://commons.wikimedia.org/wiki/File:N%C3%A4r_lighthouse_(7881618336).jpg',
    pos: '50% 35%',
  },
  wheelhouse: {
    alt: l('Styrhytten på ångfartyget Turso', 'Das Steuerhaus des Dampfschiffs Turso', 'The wheelhouse of the steamship Turso'),
    title: 'Wheelhouse of SS Turso',
    author: 'Antti Leppänen',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Wheelhouse_of_SS_Turso.jpg',
  },
  'scout-tents': {
    alt: l('Tält på ett scoutläger, historisk bild', 'Zelte in einem Pfadfinderlager, historisches Foto', 'Tents at a scout camp, historical photograph'),
    title: 'Boy Scout camp at Belair showing tents',
    author: 'State Government Photographer (State Library of South Australia)',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Boy_Scout_camp_at_Belair_showing_tents(GN09944).jpg',
  },
  'wheel-loader': {
    alt: l('En hjullastare på en arbetsplats', 'Ein Radlader auf einer Baustelle', 'A wheel loader on a work site'),
    title: 'Kawasaki Front Loader',
    author: 'Fletcher',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Kawasaki_Front_Loader.jpg',
  },
  'signal-flags': {
    alt: l('Signalflaggor i ett flaggställ ombord', 'Signalflaggen in einem Flaggenschrank an Bord', 'Signal flags in a flag locker on board'),
    title: 'Signal flags on a warship',
    author: '總統府 (Office of the President, Taiwan)',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Signal_flags_on_a_warship_of_ROCN_20201218.jpg',
  },
  'anchor-chain': {
    alt: l('Länkar i en grov ankarkätting', 'Glieder einer schweren Ankerkette', 'Links of a heavy anchor chain'),
    title: 'Anchor chain (cable)',
    author: 'Bernard Spragg',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Anchor_chain_(cable)._(9769053784).jpg',
  },
  'drydock-barge': {
    alt: l('Ett fartyg i torrdocka', 'Ein Schiff im Trockendock', 'A vessel in dry dock'),
    title: 'Tank Barge GM 11105 in Dry Dock',
    author: 'GuavaTrain',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Tank_Barge_GM_11105_in_Dry_Dock.jpg',
  },
  bollards: {
    alt: l('Förtöjningstamp runt rostiga pollare', 'Festmacher um rostige Poller', 'Mooring rope around rusty bollards'),
    title: 'Rusty bollards',
    author: 'Luiz Carlos',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Rusty_bollards.jpg',
  },
  workshop: {
    alt: l('En gammal snickeriverkstad med verktyg', 'Eine alte Schreinerwerkstatt mit Werkzeug', 'An old joinery workshop with tools'),
    title: 'Schreinerwerkstatt Boos, Aulendorf',
    author: 'Andreas Praefcke',
    license: 'Public domain',
    page: 'https://commons.wikimedia.org/wiki/File:Schreinerwerkstatt_Boos_Aulendorf.jpg',
  },
  'hull-painting': {
    alt: l('En varvsarbetare målar ett fartygsskrov', 'Ein Werftarbeiter streicht einen Schiffsrumpf', 'A dock worker painting a ship’s hull'),
    title: 'A dock worker painting a ship’s hull, Auckland',
    author: 'Jorge Royan',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    page: 'https://commons.wikimedia.org/wiki/File:A_dock_worker_painting_a_ship%27s_hull,_Auckland_-_0294.jpg',
    pos: '30% 50%',
  },
  'sunrise-blacksea': {
    alt: l('Soluppgång över havet', 'Sonnenaufgang über dem Meer', 'Sunrise over the sea'),
    title: 'Sunrise over the Black Sea',
    author: 'Alexandru Panoiu',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    page: 'https://commons.wikimedia.org/wiki/File:Sunrise_over_the_Black_Sea.jpg',
    pos: '50% 60%',
  },
  'chart-culebra': {
    alt: l('Ett sjökort', 'Eine Seekarte', 'A nautical chart'),
    title: 'Culebra Nautical chart',
    author: 'NOAA, Office of Coast Survey',
    license: 'Public domain',
    page: 'https://commons.wikimedia.org/wiki/File:Culebra_Nautical_chart.png',
  },
  'flag-table': {
    alt: l('Tabell över internationella signalflaggor', 'Tafel der internationalen Signalflaggen', 'Table of international signal flags'),
    title: 'Uusimaa Turku 2011 signal flag table',
    author: 'MKFI',
    license: 'Public domain',
    page: 'https://commons.wikimedia.org/wiki/File:Uusimaa_Turku_2011_signal_flag_table.JPG',
  },
} satisfies Record<string, ImageInfo>;

export type ImageKey = keyof typeof IMAGES;

export function imageInfo(key: string): ImageInfo | undefined {
  return (IMAGES as Record<string, ImageInfo>)[key];
}
