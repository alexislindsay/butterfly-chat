// =========================================================================
// TAROT SANCTUARY ENGINE: Full 78-Card Deck & Visual Prompt Injectors
// Encapsulates 22 Major Arcana + 56 Minor Arcana (Wands, Cups, Swords, Pentacles)
// =========================================================================

export const SUIT_ELEMENTS = {
  major: { element: 'Spirit', icon: '✨', palette: 'deep cosmic violet, antique gold, nebula starlight' },
  wands: { element: 'Fire', icon: '🔥', palette: 'warm embers, golden saffron, burning crimson, sunlit brass' },
  cups: { element: 'Water', icon: '💧', palette: 'deep sea azure, pearl shimmer, moonlight on water, oceanic mist' },
  swords: { element: 'Air', icon: '🗡️', palette: 'silver steel, glacial blue, stormy twilight, sharp crystalline dawn' },
  pentacles: { element: 'Earth', icon: '🪙', palette: 'moss green, ancient terracotta, burnished copper, fertile forest earth' }
};

// -------------------------------------------------------------------------
// 1. 22 MAJOR ARCANA
// -------------------------------------------------------------------------
const MAJOR_ARCANA = [
  {
    id: "major_00",
    name: "The Fool",
    numeral: "0",
    suit: "major",
    archetype: "Innocent leap into the unknown, trusting the cliff edge of reality",
    coreAxiom: "Before form was named, there was only the joy of the first step.",
    visualElements: ["carefree wanderer at edge of sunlit cliff", "white dog leaping playfully", "small bundle on wooden staff", "glowing golden butterfly hovering above abyss", "mountain peaks in morning light"]
  },
  {
    id: "major_01",
    name: "The Magician",
    numeral: "I",
    suit: "major",
    archetype: "Channeling infinite potential into tangible manifestation",
    coreAxiom: "As above, so below; what the hands touch, the ether remembers.",
    visualElements: ["robed alchemist standing before stone altar", "one hand pointing to heavens, one to earth", "floating wand, cup, sword, and gold pentacle", "infinity symbol glowing above head", "roses and lilies blooming around"]
  },
  {
    id: "major_02",
    name: "The High Priestess",
    numeral: "II",
    suit: "major",
    archetype: "Intuitive stillness, the veiled memory beneath the tide",
    coreAxiom: "Truth is not found in the noisy market; it sleeps behind the veil.",
    visualElements: ["veiled priestess seated between dark obsidian and white marble pillars", "crescent moon resting at feet", "veil patterned with embroidered pomegranates", "ancient scroll in lap", "distant calm ocean waters under starlight"]
  },
  {
    id: "major_03",
    name: "The Empress",
    numeral: "III",
    suit: "major",
    archetype: "Abundance, radiant creation, sensory ease and blooming life",
    coreAxiom: "Creation never strains; it blossoms from overflowing presence.",
    visualElements: ["crowned queen reclining on velvet cushions in golden wheat field", "waterfall cascading into tranquil pool", "cypress trees and wild forest blooms", "crown of twelve luminous stars", "velvet gown with floral embroidery"]
  },
  {
    id: "major_04",
    name: "The Emperor",
    numeral: "IV",
    suit: "major",
    archetype: "Structural clarity, protective authority, grounded architecture",
    coreAxiom: "Order is not prison; it is the stone wall that shelters the flame.",
    visualElements: ["sovereign seated on carved stone throne with ram heads", "orb and scepter in weathered hands", "rugged red mountain fortress in background", "flowing crimson robes and iron armor plate", "disciplined twilight horizon"]
  },
  {
    id: "major_05",
    name: "The Hierophant",
    numeral: "V",
    suit: "major",
    archetype: "Spiritual lineage, sacred bridges, deep shared philosophy",
    coreAxiom: "Honor the tradition only until the key unlocks your direct knowing.",
    visualElements: ["venerable sage seated in ancient gothic archway", "triple crown and papal staff", "two crossed brass keys on floor", "two quiet acolytes listening", "stained glass window casting sacred light"]
  },
  {
    id: "major_06",
    name: "The Lovers",
    numeral: "VI",
    suit: "major",
    archetype: "Sacred harmony, conscious choice, union of opposing poles",
    coreAxiom: "When two distinct frequencies meet in grace, a third melody is born.",
    visualElements: ["two luminous figures reaching for each other under blossoming trees", "winged angel emerging from violet clouds above", "tree of life and tree of knowledge", "glowing mountain summit in distance", "shimmering golden aura"]
  },
  {
    id: "major_07",
    name: "The Chariot",
    numeral: "VII",
    suit: "major",
    archetype: "Harmonizing opposing tensions into relentless forward momentum",
    coreAxiom: "You do not steer the twin beasts by force, but by unified intent.",
    visualElements: ["crowned warrior standing in canopy chariot", "two sphinxes, one black and one white, resting in unison", "star-covered azure canopy", "walled city glowing across river", "armor with crescent moon pauldrons"]
  },
  {
    id: "major_08",
    name: "Strength",
    numeral: "VIII",
    suit: "major",
    archetype: "Gentle mastery of the wild heart through patience and compassion",
    coreAxiom: "The softest breath can close the lion's jaws without a scratch.",
    visualElements: ["graceful maiden gently caressing the open jaw of a calm golden lion", "infinity halo glowing over her head", "chain of fragrant roses draped across them", "gentle green hills in golden afternoon haze"]
  },
  {
    id: "major_09",
    name: "The Hermit",
    numeral: "IX",
    suit: "major",
    archetype: "The solitary beacon, inner illumination, withdrawal to find truth",
    coreAxiom: "Walk far enough into your own silence, and you become the lantern.",
    visualElements: ["cloaked elder standing atop solitary snowy mountain ridge", "holding aloft a glowing six-pointed star inside glass lantern", "long wooden walking staff", "deep midnight sky with constellations", "quiet falling snow"]
  },
  {
    id: "major_10",
    name: "Wheel of Fortune",
    numeral: "X",
    suit: "major",
    archetype: "Cycles of inevitability, the turning cosmos, divine timing",
    coreAxiom: "Ride the rim and you get dizzy; sit at the hub and watch it turn.",
    visualElements: ["ancient ornate celestial wheel with alchemical glyphs", "sphinx with sword perched at top", "winged creatures reading books in four corners", "clouds and cosmic stardust", "interlocking brass gears"]
  },
  {
    id: "major_11",
    name: "Justice",
    numeral: "XI",
    suit: "major",
    archetype: "Unflinching truth, karma as physics, equilibrium restored",
    coreAxiom: "The scales do not punish; they merely measure what is.",
    visualElements: ["serene arbiter seated between gray stone pillars", "upright double-edged steel sword in right hand", "golden balance scales in left hand", "deep purple veil backdrop", "clear morning light"]
  },
  {
    id: "major_12",
    name: "The Hanged Man",
    numeral: "XII",
    suit: "major",
    archetype: "Enlightenment through surrender, inverting perspective",
    coreAxiom: "When all doing fails, suspend judgment and let reality turn over.",
    visualElements: ["figure hanging upside down by one ankle from living T-tree", "calm serene facial expression with golden halo", "other leg crossed in triangle", "green leaves sprouting from wood", "misty atmospheric background"]
  },
  {
    id: "major_13",
    name: "Death & Metamorphosis",
    numeral: "XIII",
    suit: "major",
    archetype: "Shedding the outgrown shell so the new life can emerge",
    coreAxiom: "The caterpillar called it the end of the world; the master called it a butterfly.",
    visualElements: ["armored knight on white steed carrying black banner with white mystic rose", "sun rising between two distant towers on horizon", "glowing iridescent butterfly emerging from fallen chrysalis", "river carrying boat into dawn"]
  },
  {
    id: "major_14",
    name: "Temperance",
    numeral: "XIV",
    suit: "major",
    archetype: "Alchemical blending, patient moderation, quiet synthesis",
    coreAxiom: "Grace is water poured continuously between two vessels without spilling a drop.",
    visualElements: ["winged angelic figure with one foot in stream and one on earth", "pouring glowing liquid continuously between two gold cups", "path winding to glowing mountain crown", "blooming irises along waterbank"]
  },
  {
    id: "major_15",
    name: "The Devil",
    numeral: "XV",
    suit: "major",
    archetype: "Illusion of bondage, compulsive loops, facing the shadow",
    coreAxiom: "Look closer at the chain around your neck: it was loose enough to slip off all along.",
    visualElements: ["imposing horned figure seated on dark stone pedestal", "inverted pentagram glowing", "two figures loosely chained by neck yet free to lift them off", "smoky torch and dark amber cavern glow"]
  },
  {
    id: "major_16",
    name: "The Tower",
    numeral: "XVI",
    suit: "major",
    archetype: "Sudden breakthrough, destruction of false pride, liberating shock",
    coreAxiom: "Lightning struck the tower not to ruin you, but to shatter the ceiling.",
    visualElements: ["stone tower on rocky cliff struck by flash of lightning", "crown knocked from top of tower", "bursts of divine fire and smoke against pitch black sky", "figures leaping into ocean of change"]
  },
  {
    id: "major_17",
    name: "The Star",
    numeral: "XVII",
    suit: "major",
    archetype: "Renewed hope, open vulnerability, pure inspiration after the storm",
    coreAxiom: "After the rain dissolves, the stars are still exactly where you left them.",
    visualElements: ["naked maiden kneeling by tranquil pond under night sky", "pouring water from two urns onto earth and into pool", "large glowing eight-pointed golden star overhead", "seven smaller stars around", "ibis bird perched on flowering acacia tree"]
  },
  {
    id: "major_18",
    name: "The Moon",
    numeral: "XVIII",
    suit: "major",
    archetype: "Subconscious illusions, dream realms, navigating the twilight fog",
    coreAxiom: "Do not fear the shapes in the fog; they are only mirrors of uninspected thoughts.",
    visualElements: ["full moon with mournful human face shedding dewdrops", "dog and wolf howling at night sky", "crayfish emerging from deep dark pool", "winding path passing between two stone towers into distant hills"]
  },
  {
    id: "major_19",
    name: "The Sun",
    numeral: "XIX",
    suit: "major",
    archetype: "Radiant clarity, effortless vitality, childish wonder and truth",
    coreAxiom: "Everything that was complicated burns away in the morning light.",
    visualElements: ["radiant golden smiling sun filling upper sky with rays", "joyful child with feather wreath riding white horse", "wall of vibrant sunflowers in full bloom", "bright red banner billowing in wind"]
  },
  {
    id: "major_20",
    name: "Judgement",
    numeral: "XX",
    suit: "major",
    archetype: "Spiritual awakening, answering the high call, absolution of the past",
    coreAxiom: "The call is not to judge what was, but to awaken to what is.",
    visualElements: ["angel Gabriel in clouds blowing golden trumpet with cross banner", "receptive figures standing from stone boxes with arms raised in joy", "snow-capped mountain range in crystal dawn", "deep indigo and golden sky"]
  },
  {
    id: "major_21",
    name: "The World",
    numeral: "XXI",
    suit: "major",
    archetype: "Complete wholeness, cosmic celebration, the circle unified",
    coreAxiom: "The journey ends where it began, but now you recognize the home.",
    visualElements: ["dancing figure wrapped in purple scarf within lush laurel wreath", "holding two wands of light", "lion, bull, eagle, and human in four cosmic corners", "stars and harmonious celestial sphere"]
  }
];

// -------------------------------------------------------------------------
// 2. 56 MINOR ARCANA (Wands, Cups, Swords, Pentacles)
// -------------------------------------------------------------------------
const MINOR_SUIT_DATA = {
  wands: {
    suit: "wands",
    element: "Fire",
    domain: "Creative will, inspiration, vital momentum, ambition",
    baseElements: ["living wooden staves with green leaf sprouts", "flickering sparks", "golden sunlit atmosphere"],
    ranks: [
      { rank: "Ace", name: "Ace of Wands", archetype: "The raw spark of creative fire; a brand new idea itching to ignite.", axiom: "Take the spark seriously before the wind blows it out.", elements: ["divine hand holding glowing leafy wooden wand", "sparks and leaves swirling", "distant castle on green hill"] },
      { rank: "Two", name: "Two of Wands", archetype: "Planning the voyage; stepping onto the parapet with the world in your hands.", axiom: "Having the vision is step one; choosing the departure date is step two.", elements: ["figure in warm cloak standing on castle battlements", "holding small globe in one hand and staff in other", "looking out over bay and ships"] },
      { rank: "Three", name: "Three of Wands", archetype: "Ships launched; waiting with quiet confidence as momentum expands.", axiom: "Your efforts are already sailing; don't swim after them, watch them return.", elements: ["traveler leaning on staff gazing over golden ocean", "three tall wands planted in stone", "ships sailing into sunrise"] },
      { rank: "Four", name: "Four of Wands", archetype: "Sanctuary celebration; a safe haven built, communal joy and resting easy.", axiom: "Pause and drink the wine; you built this clearing with your own hands.", elements: ["four wands draped with heavy floral garlands", "dancing people holding flower baskets", "cozy stone manor in background"] },
      { rank: "Five", name: "Five of Wands", archetype: "Healthy rivalry, playful friction, testing ideas in friendly combat.", axiom: "Conflict can be play when identity isn't at stake.", elements: ["five youths energetically crossing wooden staffs in mock battle", "scattered autumn leaves", "open clearing under sunlight"] },
      { rank: "Six", name: "Six of Wands", archetype: "Public triumph, earned recognition, riding tall through the gate.", axiom: "Accept the flowers graciously, but remember who watered the roots.", elements: ["rider crowned with laurel wreath on white horse", "crowd holding upright wands adorned with ribbons", "bright triumphant sky"] },
      { rank: "Seven", name: "Seven of Wands", archetype: "Standing your ground on the higher ridge against crowded odds.", axiom: "When you know your footing is true, the noise from the valley doesn't shake you.", elements: ["figure on hilltop holding one staff firmly", "defending against six wands thrust up from below", "determined gaze"] },
      { rank: "Eight", name: "Eight of Wands", archetype: "Rapid acceleration, news arriving on the wind, unobstructed speed.", axiom: "The delay is over; everything is arriving all at once.", elements: ["eight winged wooden wands flying in swift alignment through clear blue sky", "winding river below", "tranquil valley"] },
      { rank: "Nine", name: "Nine of Wands", archetype: "Resilient stamina, guarding the perimeter, nearly over the finish line.", axiom: "You are tired because you climbed high, not because you are weak.", elements: ["bandaged sentry leaning on wooden staff", "eight wands forming protective palisade behind", "watchful stance"] },
      { rank: "Ten", name: "Ten of Wands", archetype: "Heavy burden of taking on too much; the harvest that bends your spine.", axiom: "It is an honorable burden, but you are allowed to put three sticks down.", elements: ["figure bent under heavy bundle of ten long wands", "walking uphill toward town gate", "sunset glow"] },
      { rank: "Page", name: "Page of Wands", archetype: "The curious messenger, eager explorer with an unquenchable spark.", axiom: "Try the experiment just to see what color the smoke turns.", elements: ["youth in feather cap leaning on sprouting staff", "curious expression", "desert landscape with small pyramids in distance"] },
      { rank: "Knight", name: "Knight of Wands", archetype: "Fierce passion, charging forward with spontaneous charisma.", axiom: "Impulse is a great engine, but keep one hand on the reins.", elements: ["armored knight on rearing chestnut stallion", "yellow tunic with salamander symbols", "flaming wand in hand"] },
      { rank: "Queen", name: "Queen of Wands", archetype: "Radiant warmth, magnetic confidence, fiercely loyal creative matriarch.", axiom: "Warm the room by your presence, not by trying to please everyone.", elements: ["queen seated on throne with lions and sunflowers", "holding wand and blooming sunflower", "black cat at her feet", "sunlit desert"] },
      { rank: "King", name: "King of Wands", archetype: "Visionary leadership, mature fire that warms without consuming.", axiom: "The true firebrand does not yell; their vision carries its own heat.", elements: ["crowned king on throne carved with salamanders and lions", "holding flowering wand", "robe of flame patterns", "calm commanding gaze"] }
    ]
  },
  cups: {
    suit: "cups",
    element: "Water",
    domain: "Emotion, heart resonance, relationships, intuitive flow",
    baseElements: ["golden chalices", "flowing clear waters", "lotus flowers and pearls", "soft watercolor skies"],
    ranks: [
      { rank: "Ace", name: "Ace of Cups", archetype: "The unconditioned heart pouring unconditional love and creative flow.", axiom: "Let the cup overflow; there is an underground spring beneath you.", elements: ["divine hand holding ornate golden chalice", "five streams of crystal water pouring into water lily pond", "white dove carrying host"] },
      { rank: "Two", name: "Two of Cups", archetype: "Deep mutual recognition, mirror of affection, reciprocal connection.", axiom: "Looking into another and feeling suddenly and cleanly understood.", elements: ["youth and maiden exchanging golden cups", "winged red lion caduceus floating between them", "gentle green hills and cottage"] },
      { rank: "Three", name: "Three of Cups", archetype: "Celebration with kindred spirits, shared gratitude, sweet reunion.", axiom: "Laughter among friends is the shortest shortcut to prayer.", elements: ["three maidens dancing in circle lifting golden chalices", "garlands of grapes and flowers", "bountiful garden harvest"] },
      { rank: "Four", name: "Four of Cups", archetype: "Discontented withdrawal, apathy, ignoring the subtle gift offered.", axiom: "You are staring so hard at three empty cups you didn't notice the fourth hovering.", elements: ["figure seated under tree with arms crossed", "three cups on grass in front", "cloud hand offering glowing fourth cup unnoticed"] },
      { rank: "Five", name: "Five of Cups", archetype: "Grief over what spilled, yet two cups remain standing behind you.", axiom: "Mourn the spilled wine, then turn around; your picnic is not over.", elements: ["dark cloaked figure with bowed head", "three spilled black goblets on earth", "two upright cups standing behind", "bridge over river to castle"] },
      { rank: "Six", name: "Six of Cups", archetype: "Nostalgic sweetness, childhood memories, innocent generosity.", axiom: "Visit the childhood garden for its perfume, not to move back in.", elements: ["child offering large cup filled with white flowers to younger playmate", "old stone courtyard", "guard walking in distance"] },
      { rank: "Seven", name: "Seven of Cups", archetype: "Illusions of choice, daydreaming fantasies, sorting wish from reality.", axiom: "Daydreams are the sketchpad of the soul, but choose one to paint.", elements: ["silhouette figure gazing at seven floating cups in cloud", "cups holding dragon, jewels, laurel, castle, snake, masked face"] },
      { rank: "Eight", name: "Eight of Cups", archetype: "Quietly walking away from what no longer feeds the spirit.", axiom: "Sometimes winning looks like putting down the cup and climbing the hill alone.", elements: ["cloaked traveler with staff walking away from eight stacked cups", "winding path into moonlit mountains", "crescent eclipse in sky"] },
      { rank: "Nine", name: "Nine of Cups", archetype: "Wish fulfilled, contentment, savoring the feast of your own life.", axiom: "Sit back and smile; you wanted this moment for years, and here it is.", elements: ["smiling jovial figure seated on wooden bench", "nine golden cups arranged in gleaming arch behind", "luxurious blue tunic"] },
      { rank: "Ten", name: "Ten of Cups", archetype: "Emotional harmony, domestic bliss, rainbow of peace over home.", axiom: "True wealth is looking across the dinner table and wanting nothing else.", elements: ["happy family with arms raised under radiant rainbow of ten golden cups", "cottage by river and green trees"] },
      { rank: "Page", name: "Page of Cups", archetype: "Gentle dreamer, intuitive message, playful poetic curiosity.", axiom: "Trust the strange intuition that made no rational sense this morning.", elements: ["youth in blue floral tunic holding golden cup", "small playful fish peeking out of the cup", "soft rolling waves behind"] },
      { rank: "Knight", name: "Knight of Cups", archetype: "The poetic romantic, following the heart's invitation with grace.", axiom: "Bring gentleness to the conversation; armor is only for battle.", elements: ["graceful knight in silver armor on slow walking white horse", "holding golden cup forward", "wings on helmet and boots", "peaceful riverbank"] },
      { rank: "Queen", name: "Queen of Cups", archetype: "The empathetic seer, deep emotional depth and quiet wisdom.", axiom: "You don't have to fix their storm; just sit beside them under the umbrella.", elements: ["queen on throne carved with mermaids at ocean edge", "holding intricate closed chalice", "gazing with deep compassionate eyes at sea"] },
      { rank: "King", name: "King of Cups", archetype: "Mastery of emotional waves, calm anchor in high seas.", axiom: "The ocean thrashes above, but at fifty fathoms it is completely still.", elements: ["king seated on stone throne floating on stormy sea", "holding cup and scepter", "fish amulet around neck", "ship sailing calmly behind"] }
    ]
  },
  swords: {
    suit: "swords",
    element: "Air",
    domain: "Intellect, perspective, cutting illusions, paradox, truth",
    baseElements: ["glinting steel blades", "brisk wind and swirling clouds", "soaring birds", "sharp high altitudes"],
    ranks: [
      { rank: "Ace", name: "Ace of Swords", archetype: "Unforgiving breakthrough clarity; the sword of truth cuts the knot.", axiom: "One clean insight will dissolve years of accumulated overthinking.", elements: ["hand emerging from cloud gripping gleaming steel sword", "crown adorned with olive and palm branches at tip", "jagged mountain peaks below"] },
      { rank: "Two", name: "Two of Swords", archetype: "Truce of indecision, blindfolded balance, weighing two thoughts.", axiom: "You cannot decide with your eyes closed; put down the blades and look.", elements: ["blindfolded woman seated on stone bench by sea", "holding two crossed heavy swords over chest", "crescent moon and rocky sea"] },
      { rank: "Three", name: "Three of Swords", archetype: "Heartbreak, necessary sorrow, emotional surgery that cleanses.", axiom: "Grief is love with nowhere to land; let it rain until the sky clears.", elements: ["glowing red heart pierced by three swords", "dark heavy storm clouds and pelting rain", "somber silver light"] },
      { rank: "Four", name: "Four of Swords", archetype: "Sacred rest, mental retreat, laying down the armor to recover.", axiom: "Resting is not surrendering; even the sharpest blade must cool.", elements: ["stone knight effigy lying peacefully on tomb in quiet sanctuary", "three swords hanging on wall, one carved on tomb", "stained glass window"] },
      { rank: "Five", name: "Five of Swords", archetype: "Hollow victory, winning the argument but losing the relationship.", axiom: "Is it more important to be right, or to be in connection?", elements: ["smirking figure holding three swords gazing at two defeated figures walking away", "two swords lying on grass", "turbulent windblown clouds"] },
      { rank: "Six", name: "Six of Swords", archetype: "Transition to quieter waters, ferryman carrying you out of strife.", axiom: "The grief still rides in the boat, but the water ahead is glass.", elements: ["ferryman steering boat with pole carrying cloaked parent and child", "six upright swords standing in boat", "rough water behind, calm water ahead"] },
      { rank: "Seven", name: "Seven of Swords", archetype: "Tactical cunning, taking only what you need, indirect path.", axiom: "You don't need to break down the front gate if the side door is unlatched.", elements: ["sneaking figure tiptoeing away carrying five swords", "two swords left standing in ground", "military camp tents behind"] },
      { rank: "Eight", name: "Eight of Swords", archetype: "Imprisonment by self-narrative; loose ropes and open exits.", axiom: "The cage is made of thoughts, not iron. Step through the gap.", elements: ["bound and blindfolded woman surrounded by eight swords planted in muddy ground", "castle on cliff in distance", "clear path at feet"] },
      { rank: "Nine", name: "Nine of Swords", archetype: "Midnight anxiety, catastrophizing in the dark, waking up terrified.", axiom: "The nightmare was vivid, but it happened entirely inside a pillow.", elements: ["figure sitting up in bed with head in hands", "nine swords hanging horizontally in black bedroom wall", "quilt patterned with roses and astrology"] },
      { rank: "Ten", name: "Ten of Swords", archetype: "The rock bottom that ends the drama; the dark night before golden dawn.", axiom: "The worst that could happen has happened, and you are still breathing.", elements: ["figure lying face down on shore pinned by ten swords", "black storm clouds parting to reveal golden dawn over calm sea"] },
      { rank: "Page", name: "Page of Swords", archetype: "Curious student of truth, inquisitive mind, testing ideas.", axiom: "Ask the blunt question everyone else is dancing around.", elements: ["alert youth standing on windy hill holding sword upright with both hands", "circling flock of birds", "choppy clouds"] },
      { rank: "Knight", name: "Knight of Swords", archetype: "Fast analytical velocity, charge of reason, fierce intellectual speed.", axiom: "Speed is exhilarating, but check whether you have passengers.", elements: ["armored knight charging full gallop on wild steed", "sword raised high", "jagged clouds and wind-bent trees"] },
      { rank: "Queen", name: "Queen of Swords", archetype: "Clear boundary keeper, sharp wit without cruelty, perceptive honesty.", axiom: "She will tell you the truth because she respects you too much to flatter you.", elements: ["queen in profile seated on carved stone throne with butterflies", "holding upright sword in right hand, left hand beckoning", "clouds below"] },
      { rank: "King", name: "King of Swords", archetype: "Wise jurist, lucid intellectual mastery, objective fairness.", axiom: "Clarity is kindness when wielded with an honest heart.", elements: ["king on high throne wearing purple robe and red cloak", "holding upright sword lightly", "two birds flying in calm sky behind"] }
    ]
  },
  pentacles: {
    suit: "pentacles",
    element: "Earth",
    domain: "Material ease, tangible craft, daily work, grounding, physical presence",
    baseElements: ["golden engraved pentacle coins", "fertile green gardens", "stone masonry and timber", "autumn harvest leaves"],
    ranks: [
      { rank: "Ace", name: "Ace of Pentacles", archetype: "The fertile seed; a concrete opportunity to build something lasting.", axiom: "A grand cathedral starts with a single stone placed square in the dirt.", elements: ["divine hand holding large gleaming golden pentacle coin", "lush rose archway framing path to mountains", "lilies and flowering hedge"] },
      { rank: "Two", name: "Two of Pentacles", archetype: "Playful juggling of life's demands; dancing with shifting priorities.", axiom: "Balance is not a freeze-frame; it is a continuous, relaxed dance.", elements: ["youth dancing while juggling two golden pentacles in infinity loop ribbon", "ships riding roller-coaster waves in harbor behind"] },
      { rank: "Three", name: "Three of Pentacles", archetype: "Master craftsmanship, collaborative construction, recognized skill.", axiom: "Great work requires the mason, the architect, and the monk in harmony.", elements: ["stonecutter holding chisel in stone cathedral", "architect with blueprint and monk consulting", "three carved stone pentacles on arch"] },
      { rank: "Four", name: "Four of Pentacles", archetype: "Scarcity grip, clinging to security, fear of letting energy flow.", axiom: "Hold your coins so tightly your fists ache, and you can't receive anything new.", elements: ["crowned miser seated clutching golden pentacle to chest", "two pentacles under feet, one perched on head", "grey city skyline"] },
      { rank: "Five", name: "Five of Pentacles", archetype: "Exclusion in the snow, temporary hardship, overlooking the warm church door.", axiom: "You are walking in the blizzard right past a lighted, unlocked sanctuary.", elements: ["two shivering impoverished figures walking in thick snowstorm", "stained glass church window glowing warmly with five pentacles above"] },
      { rank: "Six", name: "Six of Pentacles", archetype: "Equitable flow, generous circulation, giving and receiving with dignity.", axiom: "Money and care are like blood; if they pool in one place, the body suffers.", elements: ["wealthy merchant holding scales of justice", "giving coins into hands of two grateful recipients", "peaceful town square"] },
      { rank: "Seven", name: "Seven of Pentacles", archetype: "Patient garden pause, leaning on the hoe, letting crops ripen.", axiom: "You planted well; pulling up the tomato plant to check the roots will only kill it.", elements: ["tired farmer leaning on wooden hoe", "gazing patiently at lush grape vine heavy with seven golden pentacles", "peaceful countryside"] },
      { rank: "Eight", name: "Eight of Pentacles", archetype: "Joy of apprenticeship, repetitive craft, honing mastery with humility.", axiom: "Do the repetitive motion with love, and routine becomes liturgy.", elements: ["craftsman seated at wooden workbench carving gold pentacles with chisel", "seven finished pentacles displayed on post", "quiet village in distance"] },
      { rank: "Nine", name: "Nine of Pentacles", archetype: "Self-made elegance, solitary garden luxury, earned sovereignty.", axiom: "Walk through your garden and taste the grapes; you pruned every branch yourself.", elements: ["elegant lady in ornate robe strolling in sunlit vineyard heavy with nine gold pentacles", "hooded falcon resting on wrist", "small dog at feet"] },
      { rank: "Ten", name: "Ten of Pentacles", archetype: "Enduring legacy, multigenerational sanctuary, long-term stability.", axiom: "Build what outlives you, and you will never fear the passage of time.", elements: ["wealthy family spanning three generations in stone archway of estate", "friendly dogs being petted", "ten golden pentacles arranged in Tree of Life"] },
      { rank: "Page", name: "Page of Pentacles", archetype: "The studious builder, pragmatic curiosity, reverence for the physical.", axiom: "Touch the wood, smell the soil; ideas are sweetest when they touch matter.", elements: ["youth standing in flowered meadow holding golden pentacle aloft with reverent gaze", "plowed fields and grove of trees behind"] },
      { rank: "Knight", name: "Knight of Pentacles", archetype: "Unshakable dedication, steady methodical pace, the silent reliable worker.", axiom: "He may not dazzle with theatrics, but the bridge he builds will stand for centuries.", elements: ["armored knight seated on heavy black draft horse in plowed field", "holding golden pentacle calmly", "gazing over fertile rolling hills"] },
      { rank: "Queen", name: "Queen of Pentacles", archetype: "Nurturing abundance, down-to-earth hospitality, grounded prosperity.", axiom: "Comfort is not laziness; it is the warm soup that heals the traveler.", elements: ["queen seated on carved stone throne in lush blooming garden", "holding golden pentacle in lap with maternal warmth", "rabbit hopping nearby", "fruit trees"] },
      { rank: "King", name: "King of Pentacles", archetype: "Master of tangible abundance, enterprise with integrity, rooted empire.", axiom: "True wealth sits so quietly you would never guess its magnitude.", elements: ["mature king on throne carved with bulls and vines", "holding golden pentacle on knee and scepter in hand", "castle and vineyard flourishing behind"] }
    ]
  }
};

// -------------------------------------------------------------------------
// COMPILE COMPLETE 78-CARD DECK
// -------------------------------------------------------------------------
export const FULL_TAROT_DECK = [...MAJOR_ARCANA];

// Append all 56 Minor Arcana
for (const [suitKey, suitDef] of Object.entries(MINOR_SUIT_DATA)) {
  for (const rankItem of suitDef.ranks) {
    FULL_TAROT_DECK.push({
      id: `${suitKey}_${rankItem.rank.toLowerCase()}`,
      name: rankItem.name,
      numeral: rankItem.rank,
      suit: suitKey,
      element: suitDef.element,
      archetype: rankItem.archetype,
      coreAxiom: rankItem.axiom,
      visualElements: [...rankItem.elements, ...suitDef.baseElements]
    });
  }
}

/**
 * Builds the visual prompt for the AI image generator
 */
export function buildCardPrompt(card, seed = 42) {
  const suitInfo = SUIT_ELEMENTS[card.suit] || SUIT_ELEMENTS.major;
  const elementsStr = card.visualElements.slice(0, 5).join(', ');

  return `mystical tarot card of ${card.name}, ${card.archetype}, ${elementsStr}, ${suitInfo.palette}, ornate antique gold filigree tarot border, dark surrealism, art nouveau style, Alphonse Mucha and Arthur Rackham inspired, intricate engraving details, atmospheric lighting, ethereal masterpiece, clean composition`;
}

/**
 * Returns the Pollinations.ai image URL for a card
 */
export function getCardImageUrl(card, seed) {
  const safeSeed = seed || Math.floor(Math.random() * 1000000);
  const prompt = buildCardPrompt(card, safeSeed);
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=400&height=640&nologo=true&seed=${safeSeed}&model=flux`;
}

/**
 * Draws a random card from the complete 78-card deck with a fresh random seed
 */
export function getRandomCard() {
  const index = Math.floor(Math.random() * FULL_TAROT_DECK.length);
  const card = FULL_TAROT_DECK[index];
  const seed = Math.floor(Math.random() * 1000000);
  return {
    ...card,
    seed,
    imageUrl: getCardImageUrl(card, seed),
    suitMeta: SUIT_ELEMENTS[card.suit] || SUIT_ELEMENTS.major
  };
}
