export const quadrants = ['entwicklung'];
export const radarName = 'TYPONiels';
export const radarUrl = 'https://radar.typoniels.de';

export function assetUrl(file) {
  return `/assets/${file}`
}

export const getPageNames = (radar) => {
  return [
      'index',
      'liste',
      'datenschutz',
      'impressum',
      'technologien',
    ...quadrants,
    ...getItemPageNames(radar.items),
  ]
};

export const getItemPageNames = (items) => items.map(item => `${item.quadrant}/${item.name}`);

export const rings = [
    'services',
     'infobox',
    'frameworks',
     'frontend',
     'backend',
    'tools',
    'methoden',
     'systeme',
     'sprachen',
    'typo3',
    'referenzen',
     'extensions',
     'design'
];

const messages = {
  // 'typo3-world': 'Content Management mit TYPO3',
  'entwicklung': {
      title: 'Moderne Webentwicklung',
      subtitle: 'Code. Commit. Test. Deploy.',
      image: '',
      shortteaser: 'Die Technologie-Übersicht wird aktuell inhaltlich überarbeitet und steht daher nur eingeschränkt zur Verfügung. Mehr Infos zu Technologien und Tools erhalten Sie in meine Wissensdatenbank unter ' +
      '<a target="_blank" class="text-dark text-underline" href="https://wissen.typoniels.de">wissen.typoniels.de</a>.',
      teaser: 'mit den richtigen Tools, Methoden und Technologien.'
  }
};

export const translate = (key) => (messages[key]['title'] || '-');
export const messageHelper = (key, field) => (messages[key][field] || '-');

// export const cleanTextHelper = (key) => (key.replace(/(<([^>]+)>)/ig,""));
export const cleanTextHelper = (key, lettercount) => {
    if(key) {
        var plaintext = key.replace(/(<([^>]+)>)/ig,"");
        var text = plaintext.length > lettercount ? plaintext.substring(0,lettercount) + "..." : text;
    } else {
        var text = 'Für diesen Beitrag wurde leider noch kein Text hinterlegt.';
    }
    return text;
};

// tip = tip.length > 12 ? tip.substring(0,12) + "..." : tip;
export function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == 'undefined') return false;
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 1200;
}

const formatRelease = (release) => moment(release, 'YYYY-MM-DD').format('MMM YYYY');