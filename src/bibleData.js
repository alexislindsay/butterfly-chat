// =========================================================================
// BIBLE DATA & SCRIPTURE REFERENCE ENGINE (src/bibleData.js)
// Canonical Book Registry & Curated Multi-Language Topical Scriptures
// Inspired by https://github.com/thiagobodruk/bible
// =========================================================================

export const CANONICAL_BOOKS = [
  // Old Testament (Antico Testamento)
  { abbrev: 'gn', name: 'Genesis', it: 'Genesi', chapters: 50, testament: 'OT' },
  { abbrev: 'ex', name: 'Exodus', it: 'Esodo', chapters: 40, testament: 'OT' },
  { abbrev: 'lv', name: 'Leviticus', it: 'Levitico', chapters: 27, testament: 'OT' },
  { abbrev: 'nm', name: 'Numbers', it: 'Numeri', chapters: 36, testament: 'OT' },
  { abbrev: 'dt', name: 'Deuteronomy', it: 'Deuteronomio', chapters: 34, testament: 'OT' },
  { abbrev: 'js', name: 'Joshua', it: 'Giosuè', chapters: 24, testament: 'OT' },
  { abbrev: 'jud', name: 'Judges', it: 'Giudici', chapters: 21, testament: 'OT' },
  { abbrev: 'rt', name: 'Ruth', it: 'Rut', chapters: 4, testament: 'OT' },
  { abbrev: '1sm', name: '1 Samuel', it: '1 Samuele', chapters: 31, testament: 'OT' },
  { abbrev: '2sm', name: '2 Samuel', it: '2 Samuele', chapters: 24, testament: 'OT' },
  { abbrev: '1kgs', name: '1 Kings', it: '1 Re', chapters: 22, testament: 'OT' },
  { abbrev: '2kgs', name: '2 Kings', it: '2 Re', chapters: 25, testament: 'OT' },
  { abbrev: '1ch', name: '1 Chronicles', it: '1 Cronache', chapters: 29, testament: 'OT' },
  { abbrev: '2ch', name: '2 Chronicles', it: '2 Cronache', chapters: 36, testament: 'OT' },
  { abbrev: 'ezr', name: 'Ezra', it: 'Esdra', chapters: 10, testament: 'OT' },
  { abbrev: 'ne', name: 'Nehemiah', it: 'Neemia', chapters: 13, testament: 'OT' },
  { abbrev: 'et', name: 'Esther', it: 'Ester', chapters: 10, testament: 'OT' },
  { abbrev: 'job', name: 'Job', it: 'Giobbe', chapters: 42, testament: 'OT' },
  { abbrev: 'ps', name: 'Psalms', it: 'Salmi', chapters: 150, testament: 'OT' },
  { abbrev: 'prv', name: 'Proverbs', it: 'Proverbi', chapters: 31, testament: 'OT' },
  { abbrev: 'ec', name: 'Ecclesiastes', it: 'Ecclesiaste', chapters: 12, testament: 'OT' },
  { abbrev: 'so', name: 'Song of Solomon', it: 'Cantico dei Cantici', chapters: 8, testament: 'OT' },
  { abbrev: 'is', name: 'Isaiah', it: 'Isaia', chapters: 66, testament: 'OT' },
  { abbrev: 'jr', name: 'Jeremiah', it: 'Geremia', chapters: 52, testament: 'OT' },
  { abbrev: 'lm', name: 'Lamentations', it: 'Lamentazioni', chapters: 5, testament: 'OT' },
  { abbrev: 'ez', name: 'Ezekiel', it: 'Ezechiele', chapters: 48, testament: 'OT' },
  { abbrev: 'dn', name: 'Daniel', it: 'Daniele', chapters: 12, testament: 'OT' },
  { abbrev: 'ho', name: 'Hosea', it: 'Osea', chapters: 14, testament: 'OT' },
  { abbrev: 'jl', name: 'Joel', it: 'Gioele', chapters: 3, testament: 'OT' },
  { abbrev: 'am', name: 'Amos', it: 'Amos', chapters: 9, testament: 'OT' },
  { abbrev: 'ob', name: 'Obadiah', it: 'Abdia', chapters: 1, testament: 'OT' },
  { abbrev: 'jn', name: 'Jonah', it: 'Giona', chapters: 4, testament: 'OT' },
  { abbrev: 'mi', name: 'Micah', it: 'Michea', chapters: 7, testament: 'OT' },
  { abbrev: 'na', name: 'Nahum', it: 'Nahum', chapters: 3, testament: 'OT' },
  { abbrev: 'hk', name: 'Habakkuk', it: 'Abacuc', chapters: 3, testament: 'OT' },
  { abbrev: 'zp', name: 'Zephaniah', it: 'Sofonia', chapters: 3, testament: 'OT' },
  { abbrev: 'hg', name: 'Haggai', it: 'Aggeo', chapters: 2, testament: 'OT' },
  { abbrev: 'zc', name: 'Zechariah', it: 'Zaccaria', chapters: 14, testament: 'OT' },
  { abbrev: 'ml', name: 'Malachi', it: 'Malachia', chapters: 4, testament: 'OT' },

  // New Testament (Nuovo Testamento)
  { abbrev: 'mt', name: 'Matthew', it: 'Matteo', chapters: 28, testament: 'NT' },
  { abbrev: 'mk', name: 'Mark', it: 'Marco', chapters: 16, testament: 'NT' },
  { abbrev: 'lk', name: 'Luke', it: 'Luca', chapters: 24, testament: 'NT' },
  { abbrev: 'jo', name: 'John', it: 'Giovanni', chapters: 21, testament: 'NT' },
  { abbrev: 'act', name: 'Acts', it: 'Atti degli Apostoli', chapters: 28, testament: 'NT' },
  { abbrev: 'rm', name: 'Romans', it: 'Romani', chapters: 16, testament: 'NT' },
  { abbrev: '1co', name: '1 Corinthians', it: '1 Corinzi', chapters: 16, testament: 'NT' },
  { abbrev: '2co', name: '2 Corinthians', it: '2 Corinzi', chapters: 13, testament: 'NT' },
  { abbrev: 'gl', name: 'Galatians', it: 'Galati', chapters: 6, testament: 'NT' },
  { abbrev: 'eph', name: 'Ephesians', it: 'Efesini', chapters: 6, testament: 'NT' },
  { abbrev: 'ph', name: 'Philippians', it: 'Filippesi', chapters: 4, testament: 'NT' },
  { abbrev: 'cl', name: 'Colossians', it: 'Colossesi', chapters: 4, testament: 'NT' },
  { abbrev: '1ts', name: '1 Thessalonians', it: '1 Tessalonicesi', chapters: 5, testament: 'NT' },
  { abbrev: '2ts', name: '2 Thessalonians', it: '2 Tessalonicesi', chapters: 3, testament: 'NT' },
  { abbrev: '1tm', name: '1 Timothy', it: '1 Timoteo', chapters: 6, testament: 'NT' },
  { abbrev: '2tm', name: '2 Timothy', it: '2 Timoteo', chapters: 4, testament: 'NT' },
  { abbrev: 'tt', name: 'Titus', it: 'Tito', chapters: 3, testament: 'NT' },
  { abbrev: 'phm', name: 'Philemon', it: 'Filemone', chapters: 1, testament: 'NT' },
  { abbrev: 'hb', name: 'Hebrews', it: 'Ebrei', chapters: 13, testament: 'NT' },
  { abbrev: 'jm', name: 'James', it: 'Giacomo', chapters: 5, testament: 'NT' },
  { abbrev: '1pe', name: '1 Peter', it: '1 Pietro', chapters: 5, testament: 'NT' },
  { abbrev: '2pe', name: '2 Peter', it: '2 Pietro', chapters: 3, testament: 'NT' },
  { abbrev: '1jo', name: '1 John', it: '1 Giovanni', chapters: 5, testament: 'NT' },
  { abbrev: '2jo', name: '2 John', it: '2 Giovanni', chapters: 1, testament: 'NT' },
  { abbrev: '3jo', name: '3 John', it: '3 Giovanni', chapters: 1, testament: 'NT' },
  { abbrev: 'jd', name: 'Jude', it: 'Giuda', chapters: 1, testament: 'NT' },
  { abbrev: 're', name: 'Revelation', it: 'Apocalisse', chapters: 22, testament: 'NT' }
];

export const THEMATIC_SCRIPTURES = [
  // 1. Clothing, Fabrics & Adornment
  {
    topic: 'clothing_fabrics',
    citationEn: 'Leviticus 19:19',
    citationIt: 'Levitico 19:19',
    textEn: "Neither shall a garment mingled of linen and woollen come upon thee.",
    textIt: "Non ti metterai addosso una veste tessuta di due diverse materie, fatta di lana e lino insieme.",
    tags: ['clothing', 'outfit', 'fabric', 'polyester', 'kosher', 'crop top', 'denim', 'fashion']
  },
  {
    topic: 'clothing_fabrics',
    citationEn: 'Deuteronomy 22:11',
    citationIt: 'Deuteronomio 22:11',
    textEn: "Thou shalt not wear a garment of divers sorts, as of woollen and linen together.",
    textIt: "Non porterai vestito di lana e di lino insieme.",
    tags: ['clothing', 'fabric', 'materials', 'fashion', 'shatnez']
  },
  {
    topic: 'adornment_modesty',
    citationEn: '1 Timothy 2:9',
    citationIt: '1 Timoteo 2:9',
    textEn: "In like manner also, that women adorn themselves in modest apparel, with shamefacedness and sobriety; not with broided hair, or gold, or pearls, or costly array.",
    textIt: "Similmente che le donne si adornino di abito decoroso, con verecondia e modestia: non di trecce, o d'oro, o di perle, o di vesti sontuose.",
    tags: ['modesty', 'jewelry', 'hair', 'gold', 'pearls', 'outfit', 'appearance']
  },
  {
    topic: 'strength_adornment',
    citationEn: 'Proverbs 31:25',
    citationIt: 'Proverbi 31:25',
    textEn: "Strength and honour are her clothing; and she shall rejoice in time to come.",
    textIt: "Forza e dignità sono il suo manto, e sorride dell'avvenire.",
    tags: ['clothing', 'honor', 'strength', 'future', 'dignity']
  },

  // 2. Contradictions & Wisdom
  {
    topic: 'paradox_wisdom',
    citationEn: 'Proverbs 26:4',
    citationIt: 'Proverbi 26:4',
    textEn: "Answer not a fool according to his folly, lest thou also be like unto him.",
    textIt: "Non rispondere allo stolto secondo la sua follia, affinché tu non gli sia simile.",
    tags: ['fool', 'argument', 'silence', 'wisdom', 'contradiction', 'debate']
  },
  {
    topic: 'paradox_wisdom',
    citationEn: 'Proverbs 26:5',
    citationIt: 'Proverbi 26:5',
    textEn: "Answer a fool according to his folly, lest he be wise in his own conceit.",
    textIt: "Rispondi allo stolto secondo la sua follia, perché non abbia a credersi saggio.",
    tags: ['fool', 'argument', 'debate', 'contradiction', 'wisdom', 'irony']
  },

  // 3. Time, Seasons & Vanity
  {
    topic: 'time_seasons',
    citationEn: 'Ecclesiastes 3:1',
    citationIt: 'Ecclesiaste 3:1',
    textEn: "To every thing there is a season, and a time to every purpose under the heaven.",
    textIt: "Per tutto c'è il suo tempo, c'è un momento per ogni cosa sotto il cielo.",
    tags: ['time', 'season', 'patience', 'life', 'timing', 'purpose']
  },
  {
    topic: 'vanity_futility',
    citationEn: 'Ecclesiastes 1:2',
    citationIt: 'Ecclesiaste 1:2',
    textEn: "Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity.",
    textIt: "Vanità delle vanità, dice l'Ecclesiaste, vanità delle vanità, tutto è vanità.",
    tags: ['vanity', 'social media', 'fame', 'selfies', 'ego', 'illusion', 'fleeting']
  },

  // 4. Food, Drink & Table
  {
    topic: 'food_diet',
    citationEn: 'Leviticus 11:7-8',
    citationIt: 'Levitico 11:7-8',
    textEn: "And the swine, though he divide the hoof, and be clovenfooted, yet he cheweth not the cud; he is unclean to you.",
    textIt: "E il maiale, perché ha l'unghia spaccata e il piede forcuto, ma non rumina, vi è impuro.",
    tags: ['pork', 'bacon', 'kosher', 'food', 'diet', 'pig', 'cleanliness']
  },
  {
    topic: 'wine_heart',
    citationEn: 'Psalm 104:15',
    citationIt: 'Salmo 104:15',
    textEn: "And wine that maketh glad the heart of man, and oil to make his face to shine, and bread which strengtheneth man's heart.",
    textIt: "E il vino che rallegra il cuore dell'uomo, l'olio che gli fa risplendere il volto, e il pane che sostiene il cuore dell'uomo.",
    tags: ['wine', 'alcohol', 'joy', 'heart', 'celebration', 'bread', 'food']
  },

  // 5. Light, Creation & Ether
  {
    topic: 'light_creation',
    citationEn: 'Genesis 1:3',
    citationIt: 'Genesi 1:3',
    textEn: "And God said, Let there be light: and there was light.",
    textIt: "Dio disse: «Sia la luce!». E la luce fu.",
    tags: ['light', 'creation', 'beginning', 'dawn', 'sun', 'sky']
  },
  {
    topic: 'truth_freedom',
    citationEn: 'John 8:32',
    citationIt: 'Giovanni 8:32',
    textEn: "And ye shall know the truth, and the truth shall make you free.",
    textIt: "E conoscerete la verità e la verità vi farà liberi.",
    tags: ['truth', 'freedom', 'liberty', 'clarity', 'knowledge']
  },
  {
    topic: 'love_endurance',
    citationEn: '1 Corinthians 13:4-7',
    citationIt: '1 Corinzi 13:4-7',
    textEn: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up...",
    textIt: "L'amore è paziente, è benevolo; l'amore non invidia, non si vanta, non si gonfia d'orgoglio...",
    tags: ['love', 'charity', 'patience', 'heart', 'kindness', 'endurance']
  },

  // 6. Wealth & Modern Ambition
  {
    topic: 'wealth_money',
    citationEn: '1 Timothy 6:10',
    citationIt: '1 Timoteo 6:10',
    textEn: "For the love of money is the root of all evil: which while some coveted after, they have erred from the faith.",
    textIt: "L'amore del denaro infatti è la radice di tutti i mali; e alcuni, desiderandolo avidamente, hanno deviato dalla fede.",
    tags: ['money', 'wealth', 'greed', 'crypto', 'ambition', 'riches']
  },
  {
    topic: 'anxiety_peace',
    citationEn: 'Matthew 6:26',
    citationIt: 'Matteo 6:26',
    textEn: "Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them.",
    textIt: "Guardate gli uccelli del cielo: non seminano, non mietono, non raccolgono in granai; e il Padre vostro celeste li nutre.",
    tags: ['anxiety', 'worry', 'birds', 'butterflies', 'care', 'future', 'peace']
  }
];

/**
 * Searches curated scriptures by keyword or topic
 */
export function findRelevantScripture(query, lang = 'en') {
  if (!query) return null;
  const q = query.toLowerCase();
  const match = THEMATIC_SCRIPTURES.find(item => 
    item.tags.some(tag => q.includes(tag)) ||
    (item.textEn && item.textEn.toLowerCase().includes(q)) ||
    (item.textIt && item.textIt.toLowerCase().includes(q))
  );

  if (match) {
    const isIt = (lang || '').toLowerCase().startsWith('it');
    return {
      citation: isIt ? match.citationIt : match.citationEn,
      text: isIt ? match.textIt : match.textEn,
      topic: match.topic
    };
  }

  // Fallback to Ecclesiastes
  const isIt = (lang || '').toLowerCase().startsWith('it');
  return {
    citation: isIt ? 'Ecclesiaste 3:1' : 'Ecclesiastes 3:1',
    text: isIt ? "Per tutto c'è il suo tempo, c'è un momento per ogni cosa sotto il cielo." : "To every thing there is a season, and a time to every purpose under the heaven.",
    topic: 'time_seasons'
  };
}
