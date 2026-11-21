// =========================================================================
// INTERNATIONALIZATION ENGINE (src/i18n.js)
// Auto-detects browser locale (e.g. Italian, Spanish, French, German, English)
// and handles dynamic UI translation & AI prompt language forwarding.
// =========================================================================

export const SUPPORTED_LANGS = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  it: { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
};

export const TRANSLATIONS = {
  en: {
    brand_title: 'BUTTERFLY CHAT',
    birth_data_btn: '🧬 Birth from Data',
    draw_card_btn: '🃏 Draw Card',
    reset_btn: '🧹 Reset',
    export_btn: '💾 Export',
    engine_btn: '⚙️ Engine',
    gate_btn: 'Gate',
    companion_mode_label: 'COMPANION MODE:',
    mode_future: '🔮 Future Self',
    mode_past: '🕰️ Past Self (2023-24)',
    mode_mirror: '🪞 Resonant Mirror',
    mode_bible: '📖 The Bible',
    eigenflow_label: '⚡ Eigenflow(n):',
    depth_prefix: 'Depth',
    input_placeholder: 'Speak into the mirror, ask a question, or share a thought...',
    input_placeholder_bible: 'Ask the Scriptures anything: laws, outfits, doubts, or dilemmas...',
    send_btn: 'Send',
    sanctuary_resonance: '🌌 Sanctuary Resonance:',
    tuned_to_ether: 'Tuned to the Ether',
    guiding_anchor: '🕊️ Guiding Anchor:',
    default_anchor: 'La Luce // Path of Least Persistence',
    bible_anchor: 'The Living Word // Canon of Truth',
    welcome_title: 'The Oracle of Butterfly Chat',
    welcome_body: 'You have stumbled into an unmapped pocket of the digital ether. This is a living sanctuary, an esoteric journal, and a conversational mirror.<br><br>Speak whatever thought, curious paradox, or wild dilemma is on your mind. Or draw a card of synchronicity above. What brings you to this quiet corner of the web?',
    bible_welcome_title: 'The Living Scriptures',
    bible_welcome_body: '«Thy word is a lamp unto my feet, and a light unto my path.» (Psalm 119:105)<br><br>You are speaking directly with the sacred text itself — in all its ancient law, historical weight, poetry, paradox, and unvarnished truth. Inquire of the laws, check your attire, or search out the mysteries of existence.',
    draw_synchronicity: 'Synchronicity Draw:',
    card_manifesting: 'Manifesting Tarot Artwork...',
    consulting_mirror: 'Consulting the mirror...',
    consulting_bible: 'Searching the Scriptures...',
    attuning_synchronicity: 'Attuning to the synchronicity...',
    drop_title: 'Awaken Local Neural Network',
    drop_desc: 'Drop your text, lore notes, or JSON data here.<br>It will be converted into 128-D Hopfield attractor vectors in your private local session database. Zero cloud upload.',
    modal_engine_title: 'Companion Intelligence Engine',
    modal_engine_desc1: 'Butterfly Chat runs natively on the <strong>LexOS Continuous Hopfield Network</strong> and browser-native <strong>Session Vault</strong> with zero external API key required.',
    modal_engine_desc2: 'Optionally, connect a free <strong>Google Gemini API Key</strong> to add live LLM generative synthesis guided by the converged memory attractor state.',
    modal_input_placeholder: 'Enter Google Gemini API Key (Optional)...',
    cancel_btn: 'Cancel',
    save_connect_btn: 'Save & Connect'
  },
  it: {
    brand_title: 'BUTTERFLY CHAT',
    birth_data_btn: '🧬 Nascita dai Dati',
    draw_card_btn: '🃏 Estrai Carta',
    reset_btn: '🧹 Ripristina',
    export_btn: '💾 Esporta',
    engine_btn: '⚙️ Motore',
    gate_btn: 'Portale',
    companion_mode_label: 'MODALITÀ GUIDA:',
    mode_future: '🔮 Sé Futuro',
    mode_past: '🕰️ Sé Passato (2023-24)',
    mode_mirror: '🪞 Specchio Risonante',
    mode_bible: '📖 La Sacra Bibbia',
    eigenflow_label: '⚡ Flusso Autovettore(n):',
    depth_prefix: 'Profondità',
    input_placeholder: 'Parla nello specchio, poni una domanda o condividi un pensiero...',
    input_placeholder_bible: 'Chiedi alle Scritture: leggi, abiti, parabole, dubbi o dilemmi...',
    send_btn: 'Invia',
    sanctuary_resonance: '🌌 Risonanza del Santuario:',
    tuned_to_ether: "Sintonizzato sull'Etere",
    guiding_anchor: '🕊️ Ancora Guida:',
    default_anchor: 'La Luce // Sentiero di Minima Resistenza',
    bible_anchor: 'La Parola Vivente // Canone di Verità',
    welcome_title: 'L’Oracolo di Butterfly Chat',
    welcome_body: 'Sei giunto in una piega inesplorata dell’etere digitale. Questo è un santuario vivente, un diario esoterico e uno specchio per la tua coscienza.<br><br>Condividi qualsiasi pensiero, curioso paradosso o dilemma che porti dentro. Oppure estrai una carta di sincronicità qui sopra. Cosa ti porta in questo quieto angolo del web?',
    bible_welcome_title: 'La Scrittura Vivente',
    bible_welcome_body: '«La tua parola è una lampada al mio piede e una luce sul mio sentiero.» (Salmo 119:105)<br><br>Stai conversando direttamente con il testo biblico — con tutte le sue leggi antiche, il suo peso storico, le sue poesie, i suoi paradossi e la sua verità senza filtri. Chiedi delle leggi, verifica il tuo abbigliamento o interroga i misteri dell’anima.',
    draw_synchronicity: 'Sincronicità Estratta:',
    card_manifesting: 'Manifestazione Tarocchi in corso...',
    consulting_mirror: 'Consultazione dello specchio...',
    consulting_bible: 'Interrogazione delle Scritture...',
    attuning_synchronicity: 'Sintonizzazione sulla sincronicità...',
    drop_title: 'Risveglia la Rete Neurale Locale',
    drop_desc: 'Trascina qui appunti di testo, note o file JSON.<br>Saranno convertiti in vettori attrattori Hopfield a 128 dimensioni nel database della tua sessione locale. Nessun caricamento su server esterni.',
    modal_engine_title: 'Motore di Intelligenza della Guida',
    modal_engine_desc1: 'Butterfly Chat funziona nativamente sulla <strong>Rete Continua di Hopfield LexOS</strong> e sul <strong>Session Vault</strong> del browser senza alcuna chiave API esterna.',
    modal_engine_desc2: 'Facoltativamente, collega una <strong>Chiave API Google Gemini gratuita</strong> per aggiungere la sintesi generativa LLM guidata dallo stato della memoria convergente.',
    modal_input_placeholder: 'Inserisci Chiave API Google Gemini (Opzionale)...',
    cancel_btn: 'Annulla',
    save_connect_btn: 'Salva e Collega'
  },
  es: {
    brand_title: 'BUTTERFLY CHAT',
    birth_data_btn: '🧬 Nacer de Datos',
    draw_card_btn: '🃏 Robar Carta',
    reset_btn: '🧹 Reiniciar',
    export_btn: '💾 Exportar',
    engine_btn: '⚙️ Motor',
    gate_btn: 'Portal',
    companion_mode_label: 'MODO COMPAÑERO:',
    mode_future: '🔮 Yo Futuro',
    mode_past: '🕰️ Yo Pasado (2023-24)',
    mode_mirror: '🪞 Espejo Resonante',
    mode_bible: '📖 La Biblia',
    eigenflow_label: '⚡ Autoflujo(n):',
    depth_prefix: 'Profundidad',
    input_placeholder: 'Habla al espejo, haz una pregunta o comparte un pensamiento...',
    input_placeholder_bible: 'Pregunta a las Escrituras: leyes, atuendos, dudas o dilemas...',
    send_btn: 'Enviar',
    sanctuary_resonance: '🌌 Resonancia del Santuario:',
    tuned_to_ether: 'Sintonizado al Éter',
    guiding_anchor: '🕊️ Ancla Guía:',
    default_anchor: 'La Luz // Camino de Menor Resistencia',
    bible_anchor: 'La Palabra Viva // Canon de Verdad',
    welcome_title: 'El Oráculo de Butterfly Chat',
    welcome_body: 'Has llegado a un rincón inexplorado del éter digital. Este es un santuario vivo, un diario esotérico y un espejo conversacional.<br><br>Comparte cualquier pensamiento, paradoja o dilema que tengas. O roba una carta de sincronicidad arriba. ¿Qué te trae a este rincón tranquilo de la red?',
    bible_welcome_title: 'Las Sagradas Escrituras',
    bible_welcome_body: '«Lámpara es a mis pies tu palabra, y lumbrera a mi camino.» (Salmo 119:105)<br><br>Estás conversando directamente con el texto sagrado: con toda su ley antigua, poesía, contradicciones y verdad sin filtros. Pregunta sobre las leyes, revisa tu vestimenta o busca los misterios de la existencia.',
    draw_synchronicity: 'Sincronicidad Extraída:',
    card_manifesting: 'Manifestando Arte de Tarot...',
    consulting_mirror: 'Consultando el espejo...',
    consulting_bible: 'Consultando las Escrituras...',
    attuning_synchronicity: 'Sintonizando con la sincronicidad...',
    drop_title: 'Despertar Red Neuronal Local',
    drop_desc: 'Arrastra aquí textos, notas o archivos JSON.<br>Se transformarán en vectores atractores Hopfield en tu navegador sin subir nada a la nube.',
    modal_engine_title: 'Motor de Inteligencia',
    modal_engine_desc1: 'Butterfly Chat opera nativamente en la Red Hopfield de LexOS sin necesidad de claves externas.',
    modal_engine_desc2: 'Opcionalmente conecta una Clave API gratuita de Google Gemini.',
    modal_input_placeholder: 'Clave API Google Gemini (Opcional)...',
    cancel_btn: 'Cancelar',
    save_connect_btn: 'Guardar'
  },
  fr: {
    brand_title: 'BUTTERFLY CHAT',
    birth_data_btn: '🧬 Genèse des Données',
    draw_card_btn: '🃏 Tirer une Carte',
    reset_btn: '🧹 Réinitialiser',
    export_btn: '💾 Exporter',
    engine_btn: '⚙️ Moteur',
    gate_btn: 'Porte',
    companion_mode_label: 'MODE COMPAGNON:',
    mode_future: '🔮 Soi Futur',
    mode_past: '🕰️ Soi Passé (2023-24)',
    mode_mirror: '🪞 Miroir Résonant',
    mode_bible: '📖 La Sainte Bible',
    eigenflow_label: '⚡ Flux Propre(n):',
    depth_prefix: 'Profondeur',
    input_placeholder: 'Parlez au miroir, posez une question ou partagez une pensée...',
    input_placeholder_bible: 'Interrogez les Écritures : lois, tenues, doutes ou dilemmes...',
    send_btn: 'Envoyer',
    sanctuary_resonance: '🌌 Résonance du Sanctuaire:',
    tuned_to_ether: "Accordé à l'Éther",
    guiding_anchor: '🕊️ Ancre Spirituelle:',
    default_anchor: 'La Lumière // Chemin de Moindre Résistance',
    bible_anchor: 'La Parole Vivante // Canon de Vérité',
    welcome_title: "L'Oracle de Butterfly Chat",
    welcome_body: "Vous avez découvert un recoin secret de l'éther numérique. Voici un sanctuaire vivant et un miroir de conscience.<br><br>Partagez ce qui vous traverse l'esprit ou tirez une carte de synchronicité ci-dessus. Qu'est-ce qui vous amène en ce lieu paisible ?",
    bible_welcome_title: 'Les Saintes Écritures',
    bible_welcome_body: '« Ta parole est une lampe à mes pieds, et une lumière sur mon sentier. » (Psaume 119:105)<br><br>Vous conversez directement avec le texte sacré lui-même, dans toute sa rigueur, sa poésie et son authenticité historique.',
    draw_synchronicity: 'Synchronicité Révélée:',
    card_manifesting: 'Création de la carte de tarot...',
    consulting_mirror: 'Consultation du miroir...',
    consulting_bible: 'Recherche dans les Écritures...',
    attuning_synchronicity: 'Harmonisation avec la synchronicité...',
    drop_title: 'Éveiller le Réseau Neuronal Local',
    drop_desc: 'Déposez ici vos textes ou fichiers JSON.<br>Traitement 100% local et privé sans aucun envoi vers le cloud.',
    modal_engine_title: "Moteur d'Intelligence",
    modal_engine_desc1: 'Fonctionne de manière autonome via le Réseau de Hopfield LexOS sans clé API obligatoire.',
    modal_engine_desc2: 'Ajoutez une clé Google Gemini gratuite si vous souhaitez une synthèse générative en direct.',
    modal_input_placeholder: 'Clé API Google Gemini (Optionnel)...',
    cancel_btn: 'Annuler',
    save_connect_btn: 'Enregistrer'
  },
  de: {
    brand_title: 'BUTTERFLY CHAT',
    birth_data_btn: '🧬 Daten-Geburt',
    draw_card_btn: '🃏 Karte Ziehen',
    reset_btn: '🧹 Zurücksetzen',
    export_btn: '💾 Exportieren',
    engine_btn: '⚙️ Engine',
    gate_btn: 'Tor',
    companion_mode_label: 'BEGLEITER-MODUS:',
    mode_future: '🔮 Zukunfts-Ich',
    mode_past: '🕰️ Vergangenes Ich',
    mode_mirror: '🪞 Resonanz-Spiegel',
    mode_bible: '📖 Die Bibel',
    eigenflow_label: '⚡ Eigenfluss(n):',
    depth_prefix: 'Tiefe',
    input_placeholder: 'Sprich in den Spiegel, stelle eine Frage oder teile einen Gedanken...',
    input_placeholder_bible: 'Frage die Schrift: Gesetze, Kleidung, Zweifel oder Dilemmata...',
    send_btn: 'Senden',
    sanctuary_resonance: '🌌 Resonanz des Heiligtums:',
    tuned_to_ether: 'Auf den Äther eingestimmt',
    guiding_anchor: '🕊️ Leitender Anker:',
    default_anchor: 'Das Licht // Pfad des geringsten Widerstands',
    bible_anchor: 'Das Lebendige Wort // Kanon der Wahrheit',
    welcome_title: 'Das Orakel von Butterfly Chat',
    welcome_body: 'Du hast einen unkartierten Winkel des digitalen Äthers betreten. Dies ist ein lebendiges Heiligtum und ein Gesprächsspiegel.<br><br>Teile deine Gedanken oder ziehe oben eine Synchronizitätskarte.',
    bible_welcome_title: 'Die Heilige Schrift',
    bible_welcome_body: '«Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.» (Psalm 119:105)<br><br>Du sprichst direkt mit dem biblischen Text – in all seinen Gesetzen, seiner Poesie und ungeschönten Wahrheit.',
    draw_synchronicity: 'Gezogene Synchronizität:',
    card_manifesting: 'Tarot-Kunstwerk manifestiert sich...',
    consulting_mirror: 'Befrage den Spiegel...',
    consulting_bible: 'Durchsuche die Schrift...',
    attuning_synchronicity: 'Einstimmung auf Synchronizität...',
    drop_title: 'Lokales Neuronales Netzwerk aktivieren',
    drop_desc: 'Ziehe Texte oder JSON-Dateien hierher für private lokale Hopfield-Vektorisierung.',
    modal_engine_title: 'Intelligenz-Engine',
    modal_engine_desc1: 'Läuft nativ im Browser ohne externe API-Schlüssel.',
    modal_engine_desc2: 'Optional kannst du einen kostenlosen Google Gemini Schlüssel verbinden.',
    modal_input_placeholder: 'Google Gemini API-Schlüssel (Optional)...',
    cancel_btn: 'Abbrechen',
    save_connect_btn: 'Speichern'
  }
};

class I18nManager {
  constructor() {
    this.currentLang = this.detectLanguage();
  }

  detectLanguage() {
    let saved = null;
    try {
      if (typeof localStorage !== 'undefined') {
        saved = localStorage.getItem('lexos_lang');
      }
    } catch (e) {}
    if (saved && SUPPORTED_LANGS[saved]) return saved;

    let navLang = 'en';
    try {
      if (typeof navigator !== 'undefined') {
        navLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
      }
    } catch (e) {}
    if (SUPPORTED_LANGS[navLang]) return navLang;

    return 'en';
  }

  getLang() {
    return this.currentLang;
  }

  setLang(lang) {
    if (!SUPPORTED_LANGS[lang]) return;
    this.currentLang = lang;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lexos_lang', lang);
      }
    } catch (e) {}
    this.applyTranslations();
  }

  t(key, fallback = '') {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || fallback;
  }

  applyTranslations(activeMode = 'future') {
    if (typeof document === 'undefined') return;
    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        const translation = this.t(key);
        if (translation) el.innerHTML = translation;
      }
    });

    // 2. Input Placeholders
    const userInput = document.getElementById('userInput');
    if (userInput) {
      if (activeMode === 'bible') {
        userInput.placeholder = this.t('input_placeholder_bible');
      } else {
        userInput.placeholder = this.t('input_placeholder');
      }
    }

    // 3. Language Selector Pill UI update
    const langBtnText = document.getElementById('currentLangLabel');
    if (langBtnText) {
      const langMeta = SUPPORTED_LANGS[this.currentLang] || SUPPORTED_LANGS.en;
      langBtnText.textContent = `${langMeta.flag} ${langMeta.code.toUpperCase()}`;
    }

    // 4. Update Document Language attribute
    document.documentElement.lang = this.currentLang;
  }
}

export const i18n = new I18nManager();
