/*
 * lunden.js — LUNDEN, capital of the Kingdom of Albeon, upon Kaelinu.
 *
 * Across the narrow sea called the Sleeve from Empyrean lies Albeon — the
 * island kingdom that is to our England what the Seven-Star Empire is to our
 * France. Its capital, Lunden, sprawls along the tidal river Tamis: a city of
 * coal-smoke and fog, of trade and Parliament and cold reformed faith, older
 * and freer and dirtier than gilded Empyrean, and endlessly, cheerfully sure
 * that it is the better place.
 *
 * Where Empyrean venerates the Heptad — the seven stars of imperial heaven —
 * Albeon long ago broke with the continental Church and keeps its own hard
 * creed: the Church of the Lone Star, which holds that a soul answers to one
 * light alone, and needs no priest of the Seven to read it. Two churches, two
 * skies, one narrow sea between.
 *
 * Content, not framework — a MUD zone file, populated into the shared World by
 * world-data.js. Reachable from Empyrean by the cross-Sleeve packet (board at
 * the Custom-House there; arrive at the Packet-Stairs here, and board again to
 * return).
 *
 * LAYOUT (districts):
 *   city_*   The City & the Chepe (the walled mercantile heart) . 24   START
 *   tor_*    The Ravenkeep (the royal fortress by the river) .... 20
 *   pool_*   The Pool & Wapping (the docklands) ................. 20   the ferry
 *   river_*  The Great Bridge & the Tamis ...................... 14
 *   west_*   Westmyn (the Crown & the Moot) .................... 22
 *   suth_*   The Suthwork (theatres, stews & prisons) .......... 22
 *   strand_* The Strand & the Inns (law, the press, palaces) ... 22
 *   smith_*  Smithsfield & the Shambles (market, gaol, gallows). 20
 *   rook_*   The Rookery of Gyles (the slum) ................... 18
 *   wend_*   The West End (the fashionable new town) ........... 18
 *                                                                ---
 *                                                                200
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildLunden = function buildLunden(ctx) {
    const { world, R, room, link } = ctx;

    const lunden = world.area({
      id: 'lunden',
      name: 'Lunden, of the Kingdom of Albeon',
      description:
        'The capital of Albeon, sprawled in coal-smoke along the tidal Tamis, ' +
        'across the Sleeve from the Seven-Star Empire.',
    });

    /* ================================================================= *
     *  I. THE CITY & THE CHEPE  (24) — the walled mercantile heart. START.
     * ================================================================= */
    room('city_cross', 'The Great Chepe',
      `The roaring commercial heart of Lunden, where the broad market-street of ` +
      `the Chepe runs east and west through the old walled City and every second ` +
      `soul is trying to sell you the other. Signboards hang three deep overhead, ` +
      `a gaudy forest of them, creaking in the coal-smoke; under your boots the ` +
      `cobbles are worn to grease by a thousand years of custom. This is the ` +
      `Square Mile, the money-changing middle of the kingdom, and it never stands ` +
      `still.`);
    room('city_cheapside', 'West Chepe',
      `The western reach of the great market-street, lined with the bow-fronted ` +
      `shops of the mercers and goldsmiths, their windows a-glitter behind ` +
      `leaded glass. A conduit runs with water, or something like it, at the ` +
      `kerb. Apprentices bawl their masters' wares — "What d'ye lack? What d'ye ` +
      `lack?" — at every passing coat.`);
    room('city_ludgate', 'Ludgate',
      `The old western gate in the Lunden Wall, a squat stone arch black with ` +
      `centuries of smoke, through which the road runs out toward the Strand and ` +
      `Westmyn beyond. A debtors' cell is built into the gate itself, and a ` +
      `grating at pavement-level through which the prisoners beg the passers-by, ` +
      `in the name of the Lone Star, for a coin toward their bread.`);
    room('city_goldsmiths', "Goldsmiths' Row",
      `A street of the goldsmiths who are, quietly, becoming something more: for ` +
      `here a merchant may leave his coin for safe-keeping and take a paper note ` +
      `in its place, and the notes have begun to pass hand to hand as good as ` +
      `gold. The whole airy edifice of Albeon's new banking is being invented on ` +
      `this street, on trust and ink, and nobody is quite sure it will hold.`);
    room('city_poultry', 'The Poultry',
      `The eastern reach of the Chepe, named for the poulterers long since ` +
      `crowded out by the compting-houses. A dark little prison, the Compter, ` +
      `looms over it, for debtors and drunks and the occasional inconvenient ` +
      `pamphleteer. Traffic snarls here in a permanent bad temper of carts, ` +
      `chairmen, and drovers.`);
    room('city_stocks', 'The Stocks Market',
      `A market held about a set of stocks and a pillory, so that a citizen may ` +
      `buy his mutton and pelt a short-weighing baker in the one convenient ` +
      `errand. The Walbrook, one of Lunden's buried rivers, runs somewhere ` +
      `beneath the paving, and on a still day you can hear it complaining. The ` +
      `way south leads down to the Great Bridge.`);
    room('city_walbrook', 'The Walbrook',
      `A crooked lane following the course of a river that is no longer there — ` +
      `the Walbrook, bricked over and sunk to a sewer, that once split the City ` +
      `in two. The oldest temples of Lunden are said to lie drowned beneath it. ` +
      `The lane is always damp, and smells of cold stone and older water.`);
    room('city_mercers', "Mercers' Hall",
      `The hall of the mercers, greatest of the City's guilds, dealers in silk ` +
      `and fine cloth and, increasingly, in the fate of the kingdom — for the ` +
      `guild-masters of Lunden lend the Crown its wars and set, between ` +
      `themselves, the price of everything. The Maiden of the Mercers gazes down ` +
      `from the gable, serene above the getting and spending.`);
    room('city_guildhall', 'The Guildhall',
      `The seat of the City's own stubborn government, which answers to no ` +
      `Crown-appointed lord but to the merchants themselves — a right bought and ` +
      `bled for over centuries and guarded like a strongbox. Two painted giants, ` +
      `Gof and Magog, flank the great hall, the legendary founders of Lunden, ` +
      `keeping their watch over an assembly of grocers who have humbled kings.`);
    room('city_aldersgate', 'Aldersgate',
      `A northern gate of the old wall, where the City frays out toward the open ` +
      `ground of Smithsfield beyond. Refugees came through here once, whole ` +
      `congregations of them, fleeing the fires of the continental Church; their ` +
      `descendants weave silk in the lanes within, and speak Albeon with the ` +
      `ghost of another tongue.`);
    room('city_wall', 'The Lunden Wall',
      `A surviving stretch of the ancient city wall, Latian work at its base — ` +
      `great squared courses laid by an empire two thousand years dead — patched ` +
      `above with every century's cheaper stone. Houses lean against it, using it ` +
      `for a fourth wall. Lunden has never quite decided whether to preserve it ` +
      `or quarry it, and so does both.`);
    room('city_bishopsgate', 'Bishopsgate',
      `A gate on the north-east road, hung with the arms of the Lone-Star bishops ` +
      `who once held sway here. Beyond it the road runs out to the villages and, ` +
      `eventually, to the whole green length of Albeon. A carrier's inn stands ` +
      `just within, its yard a chaos of waggons loading for every shire in the ` +
      `kingdom.`);
    room('city_exchange', 'The Exchange',
      `The bourse of Lunden: a great arcaded court where the merchants of all ` +
      `Albeon and half the world meet at noon to make and break each other. Under ` +
      `these arches a man may insure a ship, corner a market, or ruin a rival ` +
      `between two chimes of the bell. The babel of tongues — Albeon, Empyrean, ` +
      `the guttural trade-cant of the north seas — is the true anthem of the ` +
      `kingdom.`);
    room('city_steelyard', 'The Steelyard',
      `The walled riverside enclave of the Esterling merchants — the hard-dealing ` +
      `traders of the northern leagues, who keep their own laws, their own ` +
      `weigh-house, and their own grim cheer behind these gates. Their steel and ` +
      `their silver built half the City. A lane runs down from here to the Pool ` +
      `and the wharves.`);
    room('city_coffee', "The Star Coffee-House",
      `A low-beamed, smoke-fogged room where the true business of Lunden is ` +
      `done — for over a penny dish of the bitter black brew the merchants read ` +
      `the shipping-lists, the underwriters lay their bets on which hulls will ` +
      `come home, and the whole apparatus of news, rumour, and marine insurance ` +
      `hums along on caffeine and gossip. A boy bawls the names of ships sighted ` +
      `off the coast.`);
    room('city_counting', 'Counting-House Row',
      `A quiet street of narrow-fronted counting-houses, where the clerks toil at ` +
      `high desks by candlelight, adding the kingdom's wealth into long columns ` +
      `until their eyes fail. It is the least romantic street on Kaelinu and, ` +
      `penny by inked penny, very nearly the most powerful.`);
    room('city_leadenhall', 'Leadenhall Market',
      `A great lead-roofed market of poulterers, cheesemongers, and dealers in ` +
      `hides and wool, built over the buried heart of Latian Lunden — for the ` +
      `basilica of the old empire lies under these very stones, its ghost the ` +
      `template of every market since. The road east from here runs down to the ` +
      `Ravenkeep by the river.`);
    room('city_conduit', 'The Great Conduit',
      `A public fountain-house of carved stone where the water-carriers fill their ` +
      `yoked pails and the servant-girls trade the neighbourhood's news. On days ` +
      `of triumph or coronation it is made to run with wine, and the Chepe ` +
      `becomes, for an afternoon, a brief and staggering paradise.`);
    room('city_paulsyard', "Paul's Yard",
      `The churchyard of the great cathedral, and the beating heart of Albeon's ` +
      `book-trade: every wall and cranny is a bookseller's stall, every stall a ` +
      `nest of sermons, satires, ballads, and the fresh dangerous pamphlets the ` +
      `presses of the Strand fling out by the thousand. The cathedral of the Lone ` +
      `Star rears over it all, vast and sooty and serene.`);
    room('city_cathedral', 'The Cathedral of the Lone Star',
      `The mother-church of Albeon's reformed faith, a mountain of pale stone ` +
      `crowned with a single great dome — for Albeon worships one star, not ` +
      `seven, and its cathedral makes the point in stone: no cluttered heaven ` +
      `here, but one vast clean vault and one high light. It is proud, and cold, ` +
      `and magnificent, and smells of the coal-smoke that is slowly eating it.`);
    room('city_nave', 'The Long Nave',
      `The nave is less a place of prayer than a public thoroughfare — "Paul's ` +
      `Walk," where lawyers meet clients, gallants show their clothes, servants ` +
      `are hired, and news is traded beneath the indifferent vaulting. The Lone ` +
      `Star's own house has become the busiest gossip-shop in Lunden, and the ` +
      `clergy have long since given up minding.`);
    room('city_choir', 'The Choir of the Lone Star',
      `Beyond the screen, the working church reasserts itself: carved stalls, a ` +
      `high cold altar, and above it a single gilded star where the continental ` +
      `Sept would blaze with seven. The reformed offices are sung here plain and ` +
      `stern, in the Albeon tongue and not Old Latian — a small revolution, once, ` +
      `that men were burned over.`);
    room('city_crypt', 'The Crypt of Kings',
      `A low, vast crypt beneath the cathedral, where the great of Albeon lie — ` +
      `admirals and poets and one or two kings — under blackened marble, keeping ` +
      `a cool damp company. Masons work here always, for the cathedral is forever ` +
      `settling, forever being shored, forever quietly at war with the soft ` +
      `Lunden clay beneath it.`);
    room('city_dome', 'The Whispering Gallery',
      `A narrow gallery running round the inside of the great dome, dizzyingly ` +
      `high, where a word breathed to the wall runs clear round the curve and ` +
      `into a stranger's ear a hundred feet away. Lovers and conspirators both ` +
      `have learned to distrust it. From the outer rail, all Lunden lies below ` +
      `under its pall of smoke, and the Tamis loops through it like a dropped ` +
      `grey ribbon.`);

    link('city_cross', 'w', 'city_cheapside');
    link('city_cross', 'e', 'city_poultry');
    link('city_cross', 'n', 'city_guildhall');
    link('city_cross', 's', 'city_exchange');
    link('city_cross', 'nw', 'city_paulsyard');
    link('city_cross', 'ne', 'city_leadenhall');
    link('city_cross', 'sw', 'city_conduit');
    link('city_cross', 'se', 'city_coffee');
    link('city_cheapside', 'w', 'city_ludgate');
    link('city_cheapside', 'n', 'city_goldsmiths');
    link('city_poultry', 'e', 'city_stocks');
    link('city_poultry', 'n', 'city_mercers');
    link('city_stocks', 'e', 'city_walbrook');
    link('city_guildhall', 'n', 'city_aldersgate');
    link('city_guildhall', 'e', 'city_bishopsgate');
    link('city_aldersgate', 'w', 'city_wall');
    link('city_exchange', 's', 'city_steelyard');
    link('city_coffee', 's', 'city_counting');
    link('city_paulsyard', 'w', 'city_cathedral');
    link('city_cathedral', 'n', 'city_nave');
    link('city_cathedral', 'd', 'city_crypt');
    link('city_cathedral', 'u', 'city_dome');
    link('city_nave', 'n', 'city_choir');
    // Gateways out of the City:
    link('city_leadenhall', 'e', 'tor_gate');       // the Ravenkeep
    link('city_steelyard', 's', 'pool_gate');       // the Pool & docklands
    link('city_stocks', 's', 'river_bridgegate');   // the Great Bridge
    link('city_ludgate', 'w', 'strand_gate');       // the Strand & the Inns
    link('city_aldersgate', 'n', 'smith_gate');     // Smithsfield

    /* ================================================================= *
     *  II. THE RAVENKEEP  (20) — the royal fortress by the river.
     * ================================================================= */
    room('tor_gate', 'The Lion Gate',
      `The land-gate of the Ravenkeep, Lunden's ancient river-fortress — palace, ` +
      `prison, arsenal, mint, and menagerie all at once, and a threat to the City ` +
      `at its back for six hundred years. A moth-eaten lion paces a cage beside ` +
      `the gate, the last sad wonder of the royal beast-house, and eyes you as ` +
      `you pass with a hunger the bars have not quite starved.`);
    room('tor_ward', 'The Outer Ward',
      `A broad cobbled ward between the double walls, ringed with the lodgings of ` +
      `warders and the workshops of the armourers. Ravens stalk the stones, ` +
      `insolent and enormous, and a warder in his old-fashioned scarlet will tell ` +
      `you, for a coin, that should the ravens ever leave, the Keep will fall, ` +
      `and the kingdom with it. He half believes it. So, in his bones, do you.`);
    room('tor_white', 'The White Tower',
      `The great square keep at the fortress's heart, Latian-white beneath the ` +
      `grime, raised by a conquering king to sit on the neck of a conquered city ` +
      `and never quite forgiven for it. Its walls are fifteen feet of stone. ` +
      `Inside, cold spiral stairs climb past hall and chapel and armoury into the ` +
      `long memory of the Crown.`);
    room('tor_hall', 'The Great Hall',
      `A vaulted hall within the keep, hung with the tattered banners of old ` +
      `wars and the antique arms of dead kings. It is little used now — the Crown ` +
      `prefers the comforts of Westmyn — and the hall keeps a museum-cold ` +
      `grandeur, echoing to the tramp of the sightseeing and the guard.`);
    room('tor_throne', "The King's Lodging",
      `The royal apartments, kept in readiness for a sovereign who no longer ` +
      `comes, where each new monarch lodges only for the single night before the ` +
      `coronation, as custom grimly demands. The bed is made. The fire is laid. ` +
      `The room waits, year on year, for a guest it dreads.`);
    room('tor_jewels', 'The Jewel House',
      `Behind a grille of iron thicker than a wrist, upon black velvet, burn the ` +
      `regalia of Albeon: the crown, the orb, the star-tipped sceptre, and the ` +
      `great white gem called the Sea-Drop, plunder of some drowned kingdom. A ` +
      `keeper watches them, and watches you watch them, and has watched so long ` +
      `he no longer sees the jewels at all — only the hands.`);
    room('tor_armoury',  'The Armoury',
      `A long gallery bristling with the accumulated iron of the Crown: pikes in ` +
      `their thousands, racked muskets, the fantastical engraved harness of ` +
      `tourneying kings, and a line of mounted knights in steel that have not ` +
      `held a living rider in three hundred years. It smells of oil and old ` +
      `violence.`);
    room('tor_ravens', "The Raven's Walk",
      `A stretch of the inner ward given over to the fortress ravens, great ` +
      `glossy birds with clipped wings and clever, ancient eyes, tended and fed ` +
      `and — the warders will not quite say it — feared. They are the kingdom's ` +
      `luck made flesh, and they know it, and they walk the royal stones as if ` +
      `they and not the King held the freehold.`);
    room('tor_wall', 'The Wall-Walk',
      `The battlemented walk atop the inner wall, from which the whole fortress ` +
      `lies below — the white keep, the green, the black river-gate — and beyond ` +
      `the walls, the masts of the Pool and the smoking sprawl of Lunden. The ` +
      `wind off the Tamis is raw and smells of salt, tar, and low tide.`);
    room('tor_green', 'Tower Green',
      `A deceptively pleasant square of grass within the walls, and the most ` +
      `dreadful ground in Albeon — for here the great were beheaded in private, ` +
      `spared the mob's eyes at Tower Hill: queens, favourites, a saint or two. ` +
      `A low rail marks the spot. The grass grows very green upon it, and the ` +
      `ravens will not walk there.`);
    room('tor_chapel', 'The Chapel of St Alric',
      `A small, plain chapel-royal within the walls, beneath whose floor the ` +
      `headless great are bundled without ceremony — the most illustrious company ` +
      `of the unquiet dead in the kingdom. The chaplain conducts his offices ` +
      `above them briskly, as a man does who would rather not dwell on his ` +
      `congregation below.`);
    room('tor_scaffold', 'The Scaffold, Tower Hill',
      `Just without the walls, the public scaffold on Tower Hill, where those too ` +
      `great for the common gallows but not great enough for the private Green ` +
      `met the axe before a paying, jeering, weeping crowd. The stands are struck ` +
      `now between executions. The straw is fresh. It is, always, kept ready.`);
    room('tor_menagerie', 'The Royal Menagerie',
      `The King's beast-house, a reeking arc of cages holding the tribute of a ` +
      `hundred conquests: lions gone grey, a pacing wolf, a "camelopard" with its ` +
      `impossible neck, and a great sad bear that was taught, once, to fish the ` +
      `river for the amusement of a prince. Lunden pays a penny, or a cat or dog ` +
      `to feed the lions, and gawps.`);
    room('tor_mint', 'The Royal Mint',
      `A clangorous range of workshops between the walls where the coin of Albeon ` +
      `is struck under lock and armed eye — the sovereign, the shilling, the ` +
      `worn brown pennies of the poor. The moneyers are a jealous freemasonry, ` +
      `and the smell of hot metal and the hammer-thump of the presses never ` +
      `entirely stop.`);
    room('tor_bloody', 'The Bloody Tower',
      `A grim gate-tower over the river-entrance, named for a murder never ` +
      `solved — two royal children, it is whispered, smothered here in the dark ` +
      `for a crown. The name has stuck and the guides have grown fat on it. Below, ` +
      `a stair drops to the cells; through the arch, the black water of the ` +
      `Traitors' Gate laps the steps.`);
    room('tor_cells', 'The Prison Lodgings',
      `Cold stone chambers where the Crown's more distinguished prisoners are ` +
      `kept — a philosopher, a fallen minister, a bishop of the wrong star. The ` +
      `walls are carved deep with their inscriptions: coats of arms, calendars ` +
      `of days, prayers, and the patient, elaborate work of men with nothing to ` +
      `spend but time.`);
    room('tor_rack', 'The Question Chamber',
      `A windowless undercroft holding the engines of the Question — the rack ` +
      `chief among them, a bed of oak and iron that has stretched confessions ` +
      `from the stubborn and the innocent alike. The Crown maintains it is ` +
      `scarcely used, and that only by warrant. The chains, you notice, are ` +
      `worn bright.`);
    room('tor_traitors', "Traitors' Gate",
      `A wide, low water-gate where the river reaches under the wall, its ` +
      `portcullis green with weed. By this gate the accused were brought in by ` +
      `barge at the turning tide, that they might read their doom in its very ` +
      `approach. Few who passed beneath this arch passed back out under their own ` +
      `power, and the water knows it, and moves slow.`);
    room('tor_moat', 'The Moat',
      `The broad fortress moat, no longer flooded but a rank green ditch of ` +
      `nettle and refuse, the warders' cabbages growing in the old riverbed. It ` +
      `is being drained for good, the engineers say, on account of the fever it ` +
      `breeds. The ravens hunt frogs in it, and the small drowned history of the ` +
      `place surfaces, now and then, in the mud.`);
    room('tor_wharf', 'The Tower Wharf',
      `The fortress's own wharf along the river, where the guns are mounted that ` +
      `salute a coronation or a victory, and thunder out the deaths of kings. ` +
      `The Pool crowds close beyond, a jostling of hulls; upriver looms the Great ` +
      `Bridge; and the tide runs by, brown and enormous and patient, carrying ` +
      `Lunden's business out to the sea.`);

    link('tor_gate', 'e', 'tor_ward');
    link('tor_ward', 'e', 'tor_white');
    link('tor_ward', 'n', 'tor_ravens');
    link('tor_ward', 's', 'tor_wharf');
    link('tor_ward', 'ne', 'tor_menagerie');
    link('tor_ward', 'nw', 'tor_green');
    link('tor_ward', 'se', 'tor_bloody');
    link('tor_ward', 'sw', 'tor_moat');
    link('tor_white', 'n', 'tor_hall');
    link('tor_white', 'u', 'tor_armoury');
    link('tor_hall', 'e', 'tor_throne');
    link('tor_hall', 'w', 'tor_jewels');
    link('tor_ravens', 'e', 'tor_wall');
    link('tor_green', 'w', 'tor_chapel');
    link('tor_green', 'n', 'tor_scaffold');
    link('tor_menagerie', 'e', 'tor_mint');
    link('tor_bloody', 'd', 'tor_cells');
    link('tor_bloody', 's', 'tor_traitors');
    link('tor_cells', 'e', 'tor_rack');

    /* ================================================================= *
     *  III. THE POOL & WAPPING  (20) — the docklands, and the ferry.
     * ================================================================= */
    room('pool_gate', 'Thames Street',
      `A dark, close, tar-reeking street running behind the wharves, jammed with ` +
      `porters, draymen, and the endless traffic of a port — for through this ` +
      `unglamorous lane passes half the trade of the world, bale by cursing bale. ` +
      `The river is a presence you feel before you see it: the cold, the gulls, ` +
      `the forest of masts glimpsed down every alley to the south.`);
    room('pool_quay', 'The Legal Quays',
      `The strip of licensed wharf where, by ancient monopoly, all dutiable goods ` +
      `must be landed — and so the most crowded few hundred yards in Albeon, a ` +
      `chaos of cranes, cargo, and swearing that has not paused, day or night, ` +
      `in living memory. Everything the kingdom eats, wears, drinks, or smokes ` +
      `comes ashore here, and is taxed before it dries.`);
    room('pool_custom', 'The Custom House',
      `A long stone hall of high desks and hunched officers, where the King's ` +
      `duty is reckoned on every hogshead and bale, and the honest merchant and ` +
      `the smuggler are, in the officers' weary view, merely the same man on ` +
      `different days. The Long Room hums with tallying. Fortunes are made and ` +
      `unmade in the difference between what is declared and what is landed.`);
    room('pool_packet', 'The Packet-Stairs',
      `A flight of green weed-slick stairs down to a landing where the cross- ` +
      `Sleeve packet ties up — the long grey passage over the open sea and up the ` +
      `Sequane to Empyrean, in the Seven-Star Empire. Emigrants, merchants, ` +
      `spies, and the merely curious wait here among their bundles for the tide, ` +
      `eyeing the low southern horizon where another kingdom, another sky, and ` +
      `another star begin.`);
    room('pool_billings', 'Byllingsgate',
      `The great fish-market of Lunden, and the foulest-mouthed square in the ` +
      `kingdom — for the fishwives of Byllingsgate curse in a dialect so ` +
      `magnificent that "to talk Byllingsgate" is Albeon's byword for ` +
      `eloquent abuse. The stones run with brine and scale; the racket of the ` +
      `selling is a wall of sound; and the smell, frankly, arrives before you do.`);
    room('pool_pool', 'The Pool of Lunden',
      `The great anchorage below the Bridge, where the sea-going ships can come ` +
      `no further up the river and so gather, hull to hull, mast to mast, in such ` +
      `a press that a nimble thief might cross from bank to bank on their decks ` +
      `without wetting a boot. It is a floating forest, a floating city, the ` +
      `richest few acres of water on Kaelinu, and it stinks gloriously of the ` +
      `whole trading world.`);
    room('pool_wapping', 'Wapping High Street',
      `A long, low waterside street of chandlers, slop-sellers, boarding-houses, ` +
      `and taverns, entirely given over to the sea and the men it uses up. Every ` +
      `second face is a sailor's, from every port under heaven; every second door ` +
      `is a public house; and the whole reeling, salt-crusted length of it lives ` +
      `by the tide and dies by it.`);
    room('pool_execution', 'Execution Dock',
      `A grim set of river-stairs where the Admiralty hangs its pirates and ` +
      `mutineers — not on dry land, for their crimes were the sea's, but here at ` +
      `the low-water mark, that three tides may wash over the corpse before it is ` +
      `cut down. A short rope and a slow death, by custom, for the sea's ` +
      `outlaws. The gulls attend every one.`);
    room('pool_warehouse', 'The Bonded Warehouses',
      `Cliffs of blank brick warehouse rising sheer from the water, their loft- ` +
      `doors and hoist-beams stark against the smoke, holding the bonded riches ` +
      `of the trade under the Crown's lock until the duty is paid. Sugar, ` +
      `tobacco, tea, and spice sleep here by the thousand ton, guarded like ` +
      `bullion, which in effect they are.`);
    room('pool_spice', 'The Spicery Wharf',
      `A wharf where the ships of the far east disgorge their fragrant cargo, and ` +
      `the very air is worth money — pepper, clove, nutmeg, and the tea that ` +
      `Albeon has made its national vice. Ragged children scavenge the spilled ` +
      `sweepings between the cobbles, and go home smelling, for one evening, ` +
      `like the wealth of the Indies.`);
    room('pool_coal', 'The Coalyards',
      `Black mountains of sea-coal, shipped down from the northern fields to feed ` +
      `the million hearths and forges of Lunden — the fuel that warms the city, ` +
      `works its iron, and, day by day, chokes it grey. The heavers are black to ` +
      `the eye-whites, and cough a cough the whole district knows, and drink to ` +
      `drown it.`);
    room('pool_ropewalk', 'The Ropewalk',
      `An impossibly long, narrow shed where the rope for the ships is walked and ` +
      `laid — the spinners pacing backward the whole quarter-mile as the strands ` +
      `twist, a craft measured in furlongs. A ship of the line, they say, swings ` +
      `on twenty miles of Lunden rope, every fathom of it walked out by hand in ` +
      `this shadowy gallery.`);
    room('pool_dock', 'The Dry Dock',
      `A great pit of a dock, gated against the tide, where a merchantman sits ` +
      `high and dry on her keel-blocks, ribs bared for the shipwrights' mallets. ` +
      `The reek of pitch and oakum hangs thick. Men swarm the hull like ants on a ` +
      `carcass, and the blows of a hundred caulking-irons beat out the true ` +
      `pulse of the port.`);
    room('pool_gauge', "The Gauger's Office",
      `A cramped office where the excise-gaugers keep their dipping-rods and ` +
      `their ledgers, measuring the King's due out of every cask that lands. ` +
      `They are bribed, threatened, drowned, and occasionally promoted, and hold ` +
      `the whole smuggling trade of the south coast in a permanent, profitable, ` +
      `unspoken stalemate.`);
    room('pool_tavern', 'The Prospect',
      `A famous riverside tavern on ancient piles, its flagged floor slanting ` +
      `with the years, its gallery hanging out over the Tamis so that a man may ` +
      `drink and watch the whole trade of the world slide by beneath his boots. ` +
      `Captains, thieves, and pardoned pirates lean at its rail. The beer is ` +
      `good; the company is worse; the view is the finest in Lunden.`);
    room('pool_stairs', 'Wapping Old Stairs',
      `A worn flight of river-stairs where the watermen tout for fares — "Oars! ` +
      `Oars! Sculls!" — and the outbound sailor takes his last unsteady leave of ` +
      `the shore and whoever waits weeping upon it. More partings have been said ` +
      `on these green steps than in any church in Albeon.`);
    room('pool_sufferance', 'The Sufferance Wharves',
      `The lesser wharves, licensed only "on sufferance" to land the goods the ` +
      `Legal Quays cannot hold, and watched the closer for it. Here the trade ` +
      `runs a little shadier, the duty a little vaguer, and the line between ` +
      `merchant and smuggler thins to the width of a customs-man's blind eye.`);
    room('pool_hermitage', 'The Hermitage Dock',
      `A small tidal dock where the coasters and the coal-brigs lie up, named ` +
      `for a holy hermit's cell long since drowned under warehouse and wharf. At ` +
      `low tide the mud is a treasure-ground for the mudlarks — ragged children ` +
      `who wade it for coal, nails, rope, and the drowned oddments of the river's ` +
      `endless traffic.`);
    room('pool_press', 'The Press-Yard',
      `A grim yard by the water where the Navy's press-gangs bring their catch — ` +
      `for the King's ships are hungry for men, and take them where they find ` +
      `them: the drunk, the outbound, the merely unlucky, knocked on the head in ` +
      `a Wapping tavern and waking to the roll of a man-o'-war and a life they ` +
      `never chose. The gate is barred. The weeping outside it never quite stops.`);
    room('pool_gibbet', 'Gibbet Point',
      `A bleak spit at the river's bend where a hanged pirate swings in an iron ` +
      `cage, tarred against the weather, turned slowly by the wind as a warning ` +
      `to every outbound crew: this is where the sweet trade ends. The bones ` +
      `have been there so long the gulls have lost interest. The rivermen doff ` +
      `their caps, from habit, or from something older.`);

    link('pool_gate', 's', 'pool_quay');
    link('pool_quay', 's', 'pool_pool');
    link('pool_quay', 'e', 'pool_custom');
    link('pool_quay', 'w', 'pool_billings');
    link('pool_quay', 'se', 'pool_packet');
    link('pool_quay', 'ne', 'pool_warehouse');
    link('pool_quay', 'sw', 'pool_coal');
    link('pool_custom', 'e', 'pool_gauge');
    link('pool_billings', 'w', 'pool_stairs');
    link('pool_warehouse', 'e', 'pool_spice');
    link('pool_pool', 'e', 'pool_wapping');
    link('pool_pool', 's', 'pool_gibbet');
    link('pool_wapping', 'e', 'pool_execution');
    link('pool_wapping', 'n', 'pool_tavern');
    link('pool_wapping', 's', 'pool_sufferance');
    link('pool_execution', 'e', 'pool_hermitage');
    link('pool_tavern', 'e', 'pool_ropewalk');
    link('pool_sufferance', 'e', 'pool_dock');
    link('pool_dock', 's', 'pool_press');

    // The cross-Sleeve packet home: board at the Packet-Stairs to sail to Empyrean.
    R.pool_packet.ferry = {
      toId: 'quai_customs',
      moored: 'The Empyrean packet lies at the stairs, taking on the tide',
      crossing: [
        'You pay the fare and step down into the packet-boat.',
        'She warps out into the Pool and turns her bow downriver, threading the ' +
          'anchored fleet, and Lunden falls astern in a slow grey smother of ' +
          'coal-smoke and gulls.',
        'The open Sleeve heaves under you, cold and colourless, for a long ' +
          'while. Then the water narrows to a river-mouth, the banks close in ' +
          'green and ordered, and the packet labours up the Sequane toward the ' +
          'gilded haze of Empyrean and the stairs of the Custom-House.',
      ],
    };

    /* ================================================================= *
     *  IV. THE GREAT BRIDGE & THE TAMIS  (14)
     * ================================================================= */
    room('river_bridgegate', 'The Bridge Gate',
      `The stone gate at the City end of the Great Bridge, its arch a bottleneck ` +
      `of carts and drovers and cursing chairmen, for this is the one dry way ` +
      `across the Tamis and the whole traffic of two banks funnels through it. ` +
      `Above the arch, weathered to anonymity on their iron spikes, the heads of ` +
      `old traitors keep their long watch over the getting and spending below.`);
    room('river_bridge1', 'The Great Bridge — North Span',
      `You are on the Bridge, and would never know it — for it is built over, ` +
      `both sides, with tall timbered houses that lean and meet overhead, making ` +
      `a dim roofed street with the river hidden entirely beneath your feet. Only ` +
      `the shudder of the current in the piers, up through the boards, and the ` +
      `cold breath from the gaps, remind you that you walk upon the water.`);
    room('river_bridge2', 'The Great Bridge — The Chapel Pier',
      `The bridge widens at its heart to a little square about a chapel — for the ` +
      `bridge is old enough to have its own church, dedicated to a martyr, where ` +
      `travellers give thanks for the crossing not yet made. Below, the water ` +
      `races through the narrow arches with a sound like the sea in a cave.`);
    room('river_bridge3', 'The Great Bridge — Nonsuch House',
      `Here stands the marvel of the bridge: a great gaudy house of carved and ` +
      `gilded timber, brought over in pieces from the Empire and pegged together ` +
      `without a single nail, straddling the roadway on its painted galleries. ` +
      `Its owners charge the curious a penny to gawp. The bridge, like Lunden, ` +
      `wears its wealth where all may see and none may touch.`);
    room('river_drawbridge', 'The Drawbridge Gate',
      `A second, grimmer gate near the southern end, with a drawbridge that has ` +
      `not been raised in a century and a spiked parapet that is never, ever ` +
      `empty. This is where the heads of the executed are set — parboiled and ` +
      `tarred against the weather, a slow black gallery of the kingdom's ` +
      `enemies, gazing out over the river they betrayed or served. A stair drops ` +
      `to the starlings below.`);
    room('river_bridge_south', 'The Bridge Foot',
      `The southern end of the Great Bridge, where it comes to earth at last in ` +
      `the disreputable liberties of the Suthwork. The character of the crowd ` +
      `changes as you cross the line: rougher, freer, out from under the City's ` +
      `sober eye. The stews and playhouses and bear-gardens of the south bank ` +
      `begin here.`);
    room('river_starlings', 'The Starlings',
      `Down among the great boat-shaped piers — the "starlings" — that carry the ` +
      `bridge, where the twenty narrow arches so throttle the Tamis that the ` +
      `pent water falls through them in a roaring six-foot race. To "shoot the ` +
      `bridge" by boat at the wrong tide is to die, and many have; the ` +
      `watermen cross themselves, or the reformed equivalent, and go the long ` +
      `way round.`);
    room('river_conduit', 'The Water-Wheels',
      `Great creaking waterwheels are slung between the northern arches, turned ` +
      `by the mad race of the tide, driving the pumps that push river-water up ` +
      `into the pipes of the City. It is an ingenious, deafening, filthy ` +
      `arrangement — Lunden drinks, in effect, the Tamis it has just been ` +
      `using — and nobody has thought of anything better.`);
    room('river_stairs', 'The Old Swan Stairs',
      `A busy set of river-stairs just above the bridge, where the prudent ` +
      `disembark to walk round the deadly starlings rather than shoot them, and ` +
      `the watermen do a brisk trade in the fearful. "Oars!" they bawl, and ` +
      `"Sculls!", and quarrel over fares with the eloquence of Byllingsgate.`);
    room('river_watermen', "The Watermen's Hall",
      `The guild-hall of the watermen and wherrymen who are Lunden's true ` +
      `thoroughfare — for before the bridges there was only the river, and ten ` +
      `thousand small boats still ply it, a floating multitude of ferrymen with ` +
      `the sharpest tongues and the strongest backs in Albeon. Their apprentices ` +
      `row the long years out before they win their freedom of the tide.`);
    room('river_fleet', 'The Fleet Ditch',
      `The mouth of the Fleet, a river fallen from grace — once clear, now the ` +
      `open, reeking, black-flowing sewer that drains the west of Lunden into the ` +
      `Tamis, choked with the filth of tanneries, slaughter-yards, and worse. It ` +
      `is a byword for corruption, a poets' target and a public shame, and every ` +
      `few years someone swears it will be arched over. It never is.`);
    room('river_frost', 'The Frost Fair',
      `In the hard winters the tide-slack Tamis freezes above the bridge, and ` +
      `Lunden, with its genius for turning anything into a market, holds a fair ` +
      `upon the ice — booths and bonfires, a roasting ox, a printing-press ` +
      `striking souvenirs, whole streets of revelry on the frozen river. Today ` +
      `the ice is thin, and the booths stand empty and creaking, waiting for the ` +
      `cold or the thaw.`);
    room('river_bankside', 'The Bankside Stairs',
      `River-stairs on the south shore below the bridge, along the notorious ` +
      `Bankside, where the watermen land their fares for the stews and the ` +
      `playhouses and ask no questions about the errand. The mud at low water is ` +
      `black and sucking, and gives up strange things, and the mudlarks work it ` +
      `even here, even now.`);
    room('river_bridgehouse', 'The Bridge-House',
      `The counting-house and yard of the Bridge estate, that ancient ` +
      `corporation which owns the Great Bridge, maintains it, and grows fat on ` +
      `its rents and tolls. Masons and carpenters keep it in eternal repair, for ` +
      `the bridge is forever crumbling into the race below, and forever, at ` +
      `enormous cost, being saved.`);

    link('river_bridgegate', 's', 'river_bridge1');
    link('river_bridgegate', 'w', 'river_fleet');
    link('river_bridge1', 's', 'river_bridge2');
    link('river_bridge1', 'e', 'river_stairs');
    link('river_bridge2', 's', 'river_bridge3');
    link('river_bridge3', 's', 'river_drawbridge');
    link('river_drawbridge', 's', 'river_bridge_south');
    link('river_drawbridge', 'd', 'river_starlings');
    link('river_starlings', 'e', 'river_conduit');
    link('river_bridge_south', 'e', 'river_bankside');
    link('river_stairs', 'n', 'river_watermen');
    link('river_fleet', 'w', 'river_frost');
    link('river_bankside', 'e', 'river_bridgehouse');
    // Gateway across the river:
    link('river_bridge_south', 's', 'suth_gate');

    /* ================================================================= *
     *  V. WESTMYN  (22) — the Crown & the Moot.
     * ================================================================= */
    room('west_gate', 'The King Street Gate',
      `A painted gate straddling the road where the City's liberties end and the ` +
      `royal quarter of Westmyn begins — the seat of the Crown, the Moot, and the ` +
      `law. The traffic thins to coaches and clerks and black-gowned advocates; ` +
      `the very air puts on airs. Ahead, the rambling brick sprawl of the ` +
      `Whitehall spreads between the road and the river.`);
    room('west_whitehall', 'The Whitehall',
      `The great disorderly palace of the Crown: not one building but a whole ` +
      `smoky village of them, a thousand-odd rooms of courtiers, clerks, ` +
      `kitchens, and intrigue sprawled between the road and the Tamis, added to ` +
      `by every reign and coherent to none. To be "at Whitehall" is to be at the ` +
      `centre of the kingdom, hopelessly lost, and probably being watched.`);
    room('west_banquet', 'The Banqueting House',
      `The one piece of cold classical grandeur in the Whitehall's brick muddle — ` +
      `a single great hall of Empire proportion, its ceiling a painted apotheosis ` +
      `of kings ascending into a starry glory. It is used for the highest ` +
      `ceremony, and once, memorably, for a scaffold: a king stepped out of that ` +
      `first-floor window to his own beheading, and Albeon has never quite ` +
      `stopped arguing about it since.`);
    room('west_privy', 'The Privy Chamber',
      `The inner rooms where the sovereign lives less publicly, guarded by rank ` +
      `and custom, admitting only those with the entrée — a currency dearer than ` +
      `gold at this court. Here the real business is done, in the pauses of ` +
      `cards and the intervals of music, by those close enough to murmur in the ` +
      `royal ear.`);
    room('west_presence', 'The Presence Chamber',
      `The throne-room of Albeon, under a canopy of state embroidered with the ` +
      `Lone Star. It is grand, but with a wary, mortgaged grandeur — for the ` +
      `kings of Albeon rule by the sufferance of the Moot and the money of the ` +
      `City, and the throne, for all its gilding, sits upon a bargain that both ` +
      `sides are always, quietly, renegotiating.`);
    room('west_guard', "The Yeomen's Hall",
      `The guard-hall of the Yeomen of the Body, the sovereign's ancient ` +
      `bodyguard, in their scarlet and gold — great bluff men with halberds and ` +
      `an unassailable sense of their own dignity, who have guarded the royal ` +
      `person since before anyone can remember and intend to go on doing so ` +
      `regardless of who happens to be sitting on the throne this decade.`);
    room('west_horse', 'The Horse Guards',
      `A parade-ground and guardhouse where the mounted household troops keep ` +
      `their glittering, useless vigil, and the changing of the guard is ` +
      `performed for the tourists with a solemnity that would suit a coronation. ` +
      `The horses are magnificent. The whole thing is theatre, and Albeon, which ` +
      `loves a show it can pretend to disdain, adores it.`);
    room('west_park', "The King's Park",
      `A long green royal park between the palaces, with a straight canal where ` +
      `the King feeds his waterfowl and the court takes the air, and pelicans — a ` +
      `gift from some ambassador — stalk the lawns with a lordly disdain. After ` +
      `dark it is another place entirely, and the Watch patrols it with a ` +
      `lantern and a sigh.`);
    room('west_moot', 'The Motehall',
      `The seat of the Moot, the great council of Albeon — the Witan of old ` +
      `grown into a Parliament that taxes the kingdom, makes its laws, and, on a ` +
      `famous day or two, has unmade its kings. Here the Lords and the Commons ` +
      `contend, and the true, jealous, bloody-minded liberty of Albeon lives: ` +
      `the right of the ruled to argue back.`);
    room('west_lords', 'The Hall of Peers',
      `The chamber of the Lords Spiritual and Temporal, all crimson and gilt ` +
      `beneath the throne, where the bishops of the Lone Star and the great ` +
      `hereditary lords deliberate at their leisure. The Woolsack — a plain ` +
      `stuffed cushion of wool — sits at the centre, to remind the peers, they ` +
      `say, on what humble trade the whole proud kingdom was built.`);
    room('west_commons', 'The Hall of Commons',
      `A cramped, plain, ferociously combative chamber where the elected of ` +
      `Albeon sit knee to knee on hard benches and shout each other down — the ` +
      `real engine of the kingdom, that holds the Crown's purse-strings and is ` +
      `not afraid to pull them tight. It is small, and shabby, and the most ` +
      `dangerous room in the realm.`);
    room('west_westhall', 'Westmyn Hall',
      `A vast and ancient hall under a miraculous roof of oak, hammer-beamed and ` +
      `soaring, the greatest span in Albeon — the stone heart of Westmyn, where ` +
      `kings are feasted, tried, and now and then condemned. Booksellers and ` +
      `law-stationers keep stalls along its walls, so that the majesty of the law ` +
      `is conducted amid a market's cheerful din.`);
    room('west_courts', 'The Courts of Law',
      `Curtained-off corners of the great hall where the high courts of the ` +
      `kingdom sit — a huddle of bewigged judges, sweating advocates, and ` +
      `terrified suitors, all conducted in a thicket of precedent and Old Latian ` +
      `tags designed, a cynic might think, chiefly to keep the lawyers fed. ` +
      `Justice grinds here exceeding slow, and exceeding dear.`);
    room('west_exchequer', 'The Exchequer',
      `The Crown's treasury and counting-house, where the King's revenue is ` +
      `received and reckoned — antique and stubborn, still keeping half its ` +
      `accounts by notched tally-sticks of hazel-wood, split between payer and ` +
      `treasury, as it has since the conquest. The vaults below are stuffed with ` +
      `centuries of these wooden receipts, dry as tinder, and no one dares burn ` +
      `them.`);
    room('west_abbey', 'The Abbey of the Lone Star',
      `The royal abbey, and the soul of the kingdom's ceremony — for here every ` +
      `sovereign of Albeon is crowned and most are buried, in a soaring reformed ` +
      `pile that keeps the old shape of devotion under its new stern creed. It is ` +
      `a forest of monuments, a stone book of the nation's dead, and it smells of ` +
      `cold incense and older stone.`);
    room('west_nave', 'The Abbey Nave',
      `The high nave soars overhead, its slender pillars drawing the eye up and ` +
      `up to the one distant vault, as the reformed faith would draw the soul to ` +
      `its one distant star. The floor is a pavement of the illustrious dead. You ` +
      `cannot take a step in Westmyn Abbey without walking on somebody who ` +
      `mattered.`);
    room('west_coronation', 'The Sanctuary',
      `The crossing before the high altar, where the coronations are made — and ` +
      `there, worn and battered and priceless, stands the Coronation Chair, a ` +
      `plain oak throne with a rough grey stone locked beneath its seat: the ` +
      `Stone of Albeon, seized in some old war, on which every king must sit to ` +
      `be a king at all. A conquered kingdom's holy rock, become the seat of the ` +
      `conqueror. Nobody dares give it back.`);
    room('west_tombs', 'The Kings\' Chapel',
      `A dense and gorgeous chapel behind the altar, roofed with fan-vaulting so ` +
      `fine it seems to have been breathed rather than built, and crowded with ` +
      `the gilded tombs of the royal dead — kings and queens lying in bronze and ` +
      `marble, hand in hand, gazing up forever at a ceiling of stone lace.`);
    room('west_cloister', 'The Abbey Cloister',
      `A grave arcaded cloister about a square of worn grass, the quiet joint ` +
      `between the abbey and its vanished monastery. The flags are the lids of ` +
      `graves; the walls remember plainsong. Choristers cut across it at a run, ` +
      `late for the office, their surplices flying, six centuries of small boys ` +
      `late for exactly the same thing.`);
    room('west_chapter', 'The Chapter House',
      `A beautiful octagonal room where the abbey's monks once met in council — ` +
      `and where, for want of anywhere better, the Commons of Albeon first sat ` +
      `apart to argue, so that the rude beginnings of Parliament were cradled ` +
      `under this vaulted ceiling. A single slim pillar holds up the whole ` +
      `spreading roof, which is, one clerk observed, a fair emblem of the Crown.`);
    room('west_almonry', 'The Sanctuary Almonry',
      `The precinct of the old right of sanctuary, where once a fugitive from the ` +
      `Crown's justice might claim the abbey's protection and live untouchable in ` +
      `its shadow — a nest of debtors, felons, and desperate men that the law ` +
      `could not enter and would not forget. The right is abolished now, but the ` +
      `crooked lanes keep their lawless memory, and their unsavoury tenants.`);
    room('west_stairs', 'The Westmyn Stairs',
      `The royal landing-stairs on the Tamis, hung with the standards of state, ` +
      `where the sovereign takes barge for the river-processions that Albeon ` +
      `loves — a gilded shallop, oars flashing, cannon thudding from the Tower ` +
      `downstream. Today the stairs are quiet, the tide sucking at the green ` +
      `steps, a single wherry waiting for a fare that has not come.`);

    link('west_gate', 'w', 'west_whitehall');
    link('west_whitehall', 'w', 'west_moot');
    link('west_whitehall', 'n', 'west_horse');
    link('west_whitehall', 's', 'west_banquet');
    link('west_whitehall', 'nw', 'west_park');
    link('west_whitehall', 'sw', 'west_stairs');
    link('west_whitehall', 'ne', 'west_guard');
    link('west_banquet', 's', 'west_privy');
    link('west_privy', 's', 'west_presence');
    link('west_moot', 'w', 'west_westhall');
    link('west_moot', 'n', 'west_lords');
    link('west_moot', 's', 'west_commons');
    link('west_westhall', 'w', 'west_abbey');
    link('west_westhall', 'n', 'west_courts');
    link('west_westhall', 's', 'west_exchequer');
    link('west_abbey', 'n', 'west_nave');
    link('west_nave', 'n', 'west_coronation');
    link('west_nave', 'e', 'west_tombs');
    link('west_nave', 'w', 'west_cloister');
    link('west_cloister', 's', 'west_chapter');
    link('west_cloister', 'w', 'west_almonry');

    /* ================================================================= *
     *  VI. THE SUTHWORK  (22) — theatres, stews & prisons, south bank.
     * ================================================================= */
    room('suth_gate', 'The Bridge Foot, Suthwork',
      `The southern approach to the Great Bridge, where the Borough of Suthwork ` +
      `begins — the City's rowdy, unruly, unregarded back-yard, beyond the reach ` +
      `of its sober aldermen and glad of it. This is the place Lunden comes to do ` +
      `what it will not do at home: to drink, to gamble, to watch blood spilled ` +
      `for sport, and to see a play.`);
    room('suth_borough', 'The Borough High Street',
      `A broad, mired thoroughfare lined with the great galleried coaching-inns ` +
      `where the roads of the whole south country come to rest — a perpetual ` +
      `churn of waggons, drovers, pilgrims, and players. It is the first Lunden ` +
      `the traveller sees, and the last, and it wears its welcome loud and its ` +
      `prices high.`);
    room('suth_tabard', 'The Tabard Inn',
      `A famous rambling inn about a galleried yard, from which, generations ` +
      `back, a company of pilgrims once set out for a martyr's shrine, telling ` +
      `tales to speed the road — and one of them wrote the tales down, and made ` +
      `the inn immortal. Ostlers bawl in the yard; a poet drinks in the corner, ` +
      `certain he will do the same, and mostly wrong.`);
    room('suth_tavern', 'The George',
      `A galleried coaching-inn of tier upon tier of open wooden balconies about ` +
      `a cobbled yard — and, in the yard, when the players come, a stage: for the ` +
      `inns of Suthwork were Albeon's first theatres, the crowd hanging from the ` +
      `galleries and packing the mud below. The ghost of a hundred plays hangs ` +
      `in the smoke of it.`);
    room('suth_market', 'The Borough Market',
      `A tumbling, teeming market under the shadow of the church, where the ` +
      `produce of the south country is sold to feed the city across the water — ` +
      `and where, in the crush and the calling, a Suthwork childhood is spent ` +
      `learning which barrows to rob and which costers to run from.`);
    room('suth_physic', "The Surgeons' Hall",
      `The hall of the barber-surgeons and the new anatomists, hard by the ` +
      `hospitals — for Suthwork, being cheap and lying handy to the gallows for ` +
      `its raw material, has become the place where Albeon learns the inside of ` +
      `the human frame. Skeletons hang in the windows. The resurrection-men do a ` +
      `quiet trade at the back door, and no one asks whose grandmother this was.`);
    room('suth_kingsbench', "The King's Bench Prison",
      `A great sprawling debtors' gaol, half prison and half squalid town — for ` +
      `a prisoner with money may rent a decent room, keep a family, even run a ` +
      `shop within the walls, while the penniless rot in the common side. It is ` +
      `Albeon's whole cruel bargain in one building: everything, even ` +
      `imprisonment, is softer if you can pay.`);
    room('suth_stews', 'The Bankside Stews',
      `The riverside lane of the licensed brothels — the "stews," whitewashed and ` +
      `signed like taverns, that have plied the oldest trade under the eye of ` +
      `Church and Crown for so long that the very ground is a byword. The ` +
      `bishops across the water took the rents for centuries and called it ` +
      `charity. Lunden has always known exactly what it is, and looked away, and ` +
      `taken the money.`);
    room('suth_bear', 'The Bear-Garden',
      `A round, roofless, roaring arena of raked wooden stands about a stake and ` +
      `a pit, where a chained bear is set upon by mastiffs before a howling, ` +
      `betting crowd — the beloved brutal sport of Albeon, high and low alike. ` +
      `The old bears have names the crowd knows and cheers. The smell of blood ` +
      `and sawdust and hot bodies is the smell of a Suthwork holiday.`);
    room('suth_bull', 'The Bull-Ring',
      `A smaller ring beside the bear-garden where the bulls are baited, and the ` +
      `dogs tossed and gored to the crowd's delight. Between the beast-shows the ` +
      `prizefighters take the sand — bare fists, no rounds, till one man cannot ` +
      `stand — and the same crowd bets on the same blood, and goes home hoarse ` +
      `and happy.`);
    room('suth_globe', 'The Star Playhouse',
      `The great round playhouse, open to the sky, three tiers of galleries ` +
      `about a bare thrust stage — the wooden O where Albeon's players hold the ` +
      `mirror up to the age, and two thousand souls, from the penny groundlings ` +
      `in the pit to the lords in the boxes, hang on a poet's words. A flag flies ` +
      `when there is a play. There is a play today. All Suthwork is coming.`);
    room('suth_tiring', 'The Tiring-House',
      `Behind the stage, the players' tiring-house — a chaos of costume, cue, and ` +
      `nerves, where kings are made of borrowed velvet and murdered queens wait, ` +
      `smoking, for their entrance. The great and terrible speeches of the age ` +
      `are born in this cramped and shabby room, three minutes before they shake ` +
      `the pit to tears.`);
    room('suth_pit', "The Groundlings' Pit",
      `The bare earthen yard before the stage, where for a single penny the ` +
      `apprentices, sailors, and serving-girls stand shoulder to shoulder in all ` +
      `weathers to see the play — the "groundlings," who crack nuts, heckle the ` +
      `villains, weep at the deaths, and are the truest, sharpest audience in ` +
      `Albeon, and know it.`);
    room('suth_rose', 'The Rose Playhouse',
      `An older, smaller, dingier playhouse, the Star's shabby rival, its yard ` +
      `sinking into the marsh and its takings with it. Yet great plays were made ` +
      `on these rough boards before the Star was dreamed of, and the old players ` +
      `who haunt its tap will tell you, at length and for a drink, that the ` +
      `theatre died the day it grew respectable.`);
    room('suth_marshalsea', 'The Marshalsea',
      `A cramped and evil debtors' prison, a byword for petty tyranny, where a ` +
      `man may be locked for a debt of a few shillings and kept till he rots, ` +
      `unable to earn the sum that would free him — a perfect little engine of ` +
      `despair. Whole families are born, and grown, and buried within its walls, ` +
      `having committed no crime but poverty.`);
    room('suth_clink', 'The Clink',
      `A small, ancient, private prison of the old bishop's liberty, so ` +
      `notorious in its cruelty that its name has become the kingdom's slang for ` +
      `any gaol at all — to be "in the clink." It holds the debtors and the ` +
      `heretics of the Liberty in a damp riverside dark, and the tide, at the ` +
      `spring, comes up through the floor of the lowest cells.`);
    room('suth_winchester', 'The Liberty of the Mitre',
      `The precinct of the old continental bishops, who held this stretch of the ` +
      `south bank as a private liberty outside the City's law — and grew rich ` +
      `licensing the very stews and gaming the City forbade. Their ruined palace ` +
      `still stands, a great rose-window gaping at the sky, a monument to the ` +
      `long and profitable marriage of piety and vice.`);
    room('suth_crossbones', 'The Crossbones',
      `A forlorn, unconsecrated burial-ground where the outcast dead of the ` +
      `Liberty were tipped into the clay — the "geese" of the stews, the ` +
      `paupers, the unbaptised, all those the Lone Star's kirk would not have in ` +
      `holy earth. The gate is hung, always, with rags and ribbons and cheap ` +
      `tokens, left by the living for the forgotten. Someone still remembers. ` +
      `Someone always does.`);
    room('suth_lane', "Dead Man's Place",
      `A dank lane behind the stews, cheap and dangerous, where the players and ` +
      `the "geese" and the failed and the hunted take their lodgings among the ` +
      `dye-vats and the tenter-grounds. A great poet is said to have lodged here ` +
      `once, and died poor, and no one is quite sure which house, and so they ` +
      `have gilded none of them.`);
    room('suth_hops', 'The Hop-Market',
      `A fragrant quarter of hop-factors and their towering warehouses, for the ` +
      `hops of the whole south country come here to feed the thirst of Lunden — ` +
      `and Lunden's thirst is a wonder of the age. The smell of hops hangs green ` +
      `and bitter over the streets, and the brewers' drays thunder day and night ` +
      `across the bridge.`);
    room('suth_hospital', "St Thomas's Spital",
      `A great charitable hospital run by the reformed sisters, where the sick ` +
      `poor of the south bank are nursed and the young surgeons learn their ` +
      `bloody trade — a place of mercy and mortality in equal measure, its wards ` +
      `long and clean and crowded, its churchyard fuller every year, and its ` +
      `doors, like the river, never shut.`);
    room('suth_tannery', 'The Bermon Tanneries',
      `A stinking maze of tan-pits, glue-works, and hide-sheds along the marshy ` +
      `southern edge, where the district's poorest labour in a stench that has ` +
      `become their birthright — for the noxious trades the City will not suffer ` +
      `within its walls are all shouldered off across the water onto Suthwork, ` +
      `which takes them, and the wage, and the smell, and asks only that the pay ` +
      `come regular.`);

    link('suth_gate', 's', 'suth_borough');
    link('suth_borough', 's', 'suth_market');
    link('suth_borough', 'e', 'suth_tabard');
    link('suth_borough', 'w', 'suth_stews');
    link('suth_borough', 'ne', 'suth_marshalsea');
    link('suth_borough', 'nw', 'suth_clink');
    link('suth_borough', 'se', 'suth_hops');
    link('suth_borough', 'sw', 'suth_hospital');
    link('suth_tabard', 'e', 'suth_tavern');
    link('suth_market', 's', 'suth_physic');
    link('suth_physic', 'w', 'suth_kingsbench');
    link('suth_stews', 'w', 'suth_bear');
    link('suth_stews', 's', 'suth_winchester');
    link('suth_stews', 'n', 'suth_lane');
    link('suth_stews', 'nw', 'suth_globe');
    link('suth_bear', 's', 'suth_bull');
    link('suth_globe', 's', 'suth_tiring');
    link('suth_globe', 'w', 'suth_pit');
    link('suth_pit', 's', 'suth_rose');
    link('suth_winchester', 's', 'suth_crossbones');
    link('suth_hospital', 's', 'suth_tannery');

    /* ================================================================= *
     *  VII. THE STRAND & THE INNS  (22) — law, the press, palaces.
     * ================================================================= */
    room('strand_gate', 'Temple Bar',
      `The old gate marking where the City's jurisdiction ends and the Crown's ` +
      `city of Westmyn begins — a stone arch above the road, its spikes, like the ` +
      `Bridge's, dressed on bad days with a traitor's head. By custom the ` +
      `sovereign halts here and asks the City's leave to enter its own capital, ` +
      `and the City, with elaborate courtesy, grants it. Both sides remember why ` +
      `the courtesy is necessary.`);
    room('strand_fleetst', 'Fleet Street',
      `A roaring artery between the City and the courts, and the throbbing heart ` +
      `of the Albeon press — for here the newspapers and the pamphlets and the ` +
      `endless inky commentary of a free and quarrelsome kingdom are written, ` +
      `set, and flung to the four winds. Every tavern is a debating-club and ` +
      `every garret a print-shop. It is loud, it is scurrilous, and it is, ` +
      `dangerously, unafraid.`);
    room('strand_grubst', 'Grub Street',
      `A shabby lane, byword for the hack and the hungry, where the failed poets ` +
      `and starving scribblers grind out the ballads, libels, and last-dying- ` +
      `speeches that feed the presses and, barely, themselves. To be "of Grub ` +
      `Street" is to be poor and clever and for hire, and half the great names ` +
      `of Albeon letters began, and swore they never began, right here.`);
    room('strand_press', 'The Printing-Houses',
      `A clamorous court of printing-houses, the presses thumping, the ` +
      `apprentices black to the elbow, the wet sheets strung to dry like ` +
      `washing — the machine that has done more to shake the thrones of Kaelinu ` +
      `than any army. What is set in type here by midnight is read in every ` +
      `coffee-house by noon, and denied in every palace by dusk.`);
    room('strand_taverns', 'The Devil Tavern',
      `A famous Fleet Street tavern, panelled and smoke-cured, where the wits and ` +
      `poets keep their club and hold their court, coining the reputations and ` +
      `cutting the throats — figuratively, mostly — of the age's literature over ` +
      `sack and sea-coal fire. To be praised at this table is to be made; to be ` +
      `mocked at it is to be unmade; and the difference is often a single ` +
      `well-turned line.`);
    room('strand_temple', 'The Temple',
      `A grave and beautiful precinct of courts, gardens, and chambers running ` +
      `down to the river — one of the great Inns of Court, where the advocates of ` +
      `Albeon are bred, lodged, and fed, and the law is learned less from books ` +
      `than from dinners. It was the seat, ages past, of the star-knights, whose ` +
      `round church still stands, and whose ghost of martial discipline the ` +
      `barristers have exchanged for the longer war of litigation.`);
    room('strand_templechurch', 'The Temple Church',
      `A strange and ancient round church, built in the shape of a far shrine by ` +
      `the vanished order of star-knights, its floor laid with the worn stone ` +
      `effigies of armoured men, legs crossed, hands on hilts, sleeping out the ` +
      `centuries. The lawyers hurry past them to their chambers, treading on ` +
      `crusaders, thinking of briefs.`);
    room('strand_hall', 'The Middle Hall',
      `The great dining-hall of the Inn, under a hammer-beam roof, where the ` +
      `students of the law must eat their way to the bar — for a man is called to ` +
      `plead not by examination but by dinners, so many terms of them, at these ` +
      `long oak tables. A single vast table below the dais is made, they say, ` +
      `from the hatch of a great explorer's ship. The law dines well upon the ` +
      `age of discovery.`);
    room('strand_gardens', 'The Temple Gardens',
      `Trim gardens sloping to the river, where the barristers pace and confer ` +
      `among the roses — and where, an old tale runs, two factions of a royal ` +
      `quarrel once plucked a white rose and a red from these very beds to mark ` +
      `their sides, and so gave a generation of civil war its badges. The roses ` +
      `bloom on, indifferent, red and white together.`);
    room('strand_stairs', 'The Temple Stairs',
      `Quiet river-stairs at the foot of the Temple gardens, where the lawyers ` +
      `take boat for Westmyn Hall and the courts, gliding upriver with their ` +
      `clerks and their bags of briefs. A waterman dozes at his oars, waiting for ` +
      `a fare, the tide chuckling at the green stone below him.`);
    room('strand_fleetbridge', 'The Fleet Bridge',
      `A bridge over the reeking Fleet ditch, where Fleet Street crosses the open ` +
      `sewer that gave it its name and holds its nose to do so. Ballad-sellers ` +
      `and quack-doctors work the crush of the crossing, and the black water ` +
      `slides beneath, carrying the west of Lunden's filth down to the patient ` +
      `Tamis.`);
    room('strand_fleetprison', 'The Fleet Prison',
      `A grim old debtors' gaol beside the ditch, whose prisoners beg through a ` +
      `street-grate — "Pity the poor debtors!" — and whose chaplain will, for a ` +
      `fee, marry any couple with no questions asked, so that the "Fleet ` +
      `marriage" has become a scandal and a convenience across the kingdom. Even ` +
      `a prison, in Lunden, finds its trade.`);
    room('strand_strand', 'The Strand',
      `The grand curving street that links the City to Westmyn, once a line of ` +
      `river-palaces of the great, their water-gates opening on the Tamis — now ` +
      `a bustle of fine shops, coffee-houses, and the coaches of the fashionable. ` +
      `It is the seam of Lunden, where money meets power meets pleasure, and ` +
      `everyone who is anyone is, sooner or later, seen upon it.`);
    room('strand_somerset', 'Somerset House',
      `A great classical palace along the river, built by the Crown for the ` +
      `business of the state — the navy office, the stamp office, the learned ` +
      `societies — a whole town of gilded bureaucracy under one enormous roof. ` +
      `Its river-terrace looks out over the Tamis; its corridors hum with the ` +
      `slow, papery, indispensable work of governing.`);
    room('strand_savoy', 'The Savoy',
      `The rambling remnant of a once-royal palace, fallen through the centuries ` +
      `to a warren of chapel, hospital, barracks, and lodging — a "liberty" with ` +
      `its own odd privileges, sheltering an unlikely mix of soldiers, ` +
      `pensioners, and the discreetly hiding. Its little chapel still marries and ` +
      `buries whoever asks, keeping its own quiet counsel between the palaces.`);
    room('strand_coffee', 'The Rainbow Coffee-House',
      `One of the great Strand coffee-houses, where a penny at the door buys a ` +
      `dish of coffee, the run of the newspapers, and a seat at whichever ` +
      `endless argument suits your trade — poetry at this table, stock-jobbing at ` +
      `that, the fate of nations at the fire. The coffee-house is Albeon's true ` +
      `parliament, and it never rises.`);
    room('strand_maypole', 'The Maypole in the Strand',
      `A towering painted maypole, a landmark and a scandal — for the sterner ` +
      `sort of the reformed faith would have it down as a heathen relic, and the ` +
      `people, who like a dance and dislike being preached at, keep putting it ` +
      `back up. It stands today, garlanded and defiant, a wooden argument between ` +
      `Albeon's joylessness and its joy.`);
    room('strand_charing', 'Charing Cross',
      `The great hinge of Lunden, where the Strand, the road to Westmyn, and the ` +
      `way up to the new West End all meet about a weathered stone cross — raised ` +
      `by a grieving king, ages back, at the last resting-place of his queen's ` +
      `funeral journey. From this cross, by custom, all distances from Lunden are ` +
      `measured. It is, quite literally, where everywhere else begins.`);
    room('strand_lincoln', "Lincoln's Inn",
      `Another of the great Inns of Court, a dignified brick quadrangle of ` +
      `chambers and hall and chapel, where the law breeds its serjeants amid a ` +
      `collegiate calm. Clerks scurry with tied bundles of documents; a pupil ` +
      `reads a brief on a bench beneath a plane tree; and the slow, expensive, ` +
      `interminable machinery of Albeon justice turns over quietly in the sun.`);
    room('strand_fields', "Lincoln's Inn Fields",
      `The largest square in Lunden, a great green rectangle beside the Inn — a ` +
      `place of fashionable strollers and duelling gallants by day, of footpads ` +
      `by night, and, on its black days, of the scaffold: for public executions ` +
      `of the notable have been staged on this grass, watched from every ` +
      `surrounding window at a good price. A lane runs north from here toward the ` +
      `rookery of Gyles.`);
    room('strand_barbers', 'The Barber-Surgeons',
      `The hall of the old joint company of barbers and surgeons, before the ` +
      `two trades fell out and parted — for once the man who cut your hair also ` +
      `cut your leg, and the striped pole, red for blood and white for bandage, ` +
      `still marks the shops. A dissected figure, painted, presides over the ` +
      `stair, a memento of the days when a shave and an amputation cost much the ` +
      `same.`);
    room('strand_wig', "The Serjeants' Inn",
      `A small, close, exclusive inn of the highest order of advocates, the ` +
      `serjeants-at-law, who alone might plead in the highest court and dined ` +
      `apart in a hush of precedence. The wig-makers and law-stationers cluster ` +
      `about it, dressing the law in horsehair and vellum, and charging, like ` +
      `everyone else in this quarter, by the hour.`);

    link('strand_gate', 'w', 'strand_fleetst');
    link('strand_fleetst', 'w', 'strand_strand');
    link('strand_fleetst', 'n', 'strand_grubst');
    link('strand_fleetst', 's', 'strand_temple');
    link('strand_fleetst', 'nw', 'strand_taverns');
    link('strand_fleetst', 'sw', 'strand_fleetbridge');
    link('strand_grubst', 'n', 'strand_press');
    link('strand_fleetbridge', 's', 'strand_fleetprison');
    link('strand_temple', 's', 'strand_templechurch');
    link('strand_temple', 'e', 'strand_hall');
    link('strand_temple', 'w', 'strand_gardens');
    link('strand_gardens', 's', 'strand_stairs');
    link('strand_strand', 'w', 'strand_charing');
    link('strand_strand', 'n', 'strand_lincoln');
    link('strand_strand', 's', 'strand_somerset');
    link('strand_strand', 'nw', 'strand_coffee');
    link('strand_strand', 'sw', 'strand_savoy');
    link('strand_strand', 'se', 'strand_maypole');
    link('strand_lincoln', 'n', 'strand_fields');
    link('strand_lincoln', 'e', 'strand_wig');
    link('strand_fields', 'w', 'strand_barbers');
    // Gateways off the Strand:
    link('strand_charing', 'w', 'west_gate');    // Westmyn
    link('strand_charing', 'n', 'wend_gate');    // the West End
    link('strand_fields', 'n', 'rook_gate');     // the Rookery of Gyles

    /* ================================================================= *
     *  VIII. SMITHSFIELD & THE SHAMBLES  (20) — market, gaol, gallows.
     * ================================================================= */
    room('smith_gate', 'Aldersgate Bars',
      `The straggling edge of the City just beyond the wall, where the built ` +
      `streets give out to the great open ground of Smithsfield — a place of ` +
      `market and mob, of cattle and burnings, that has watered its grass with ` +
      `blood of every kind for eight hundred years, and grazes beasts on it ` +
      `still.`);
    room('smith_field', 'Smithsfield',
      `A wide, muddy, trampled field, the great livestock market of Lunden, where ` +
      `on market-days the bawling of ten thousand doomed beasts and the roaring ` +
      `of their drovers make a din to wake the dead beneath it — and there are ` +
      `many, for this same field has hosted the tournament, the fair, the ` +
      `gallows, and the burning-stake, turn and turn about, through all the ` +
      `kingdom's history.`);
    room('smith_shambles', 'The Shambles',
      `A reeking lane of butchers hard by the market, its gutters a red sludge, ` +
      `its air thick with flies and the iron reek of the block — for the beasts ` +
      `of Smithsfield are killed and dressed on the spot, and what the fine folk ` +
      `will eat as mutton begins its journey here, in the sawdust and the ` +
      `screaming.`);
    room('smith_pie', 'Pie Corner',
      `A corner marked by the gilded figure of a fat little boy, set where the ` +
      `Great Fire of Lunden, ages back, at last burned itself out — having ` +
      `begun, the pious noted, at a baker's, and ended at Pie Corner, which the ` +
      `preachers took for a judgement upon the sin of gluttony, and the ` +
      `cook-shops took for excellent free advertising.`);
    room('smith_barts', "St Bart's Spital",
      `A great and ancient hospital beside the field, founded by an old monk's ` +
      `vision, that has tended the sick and broken of Lunden through plague, ` +
      `fire, and famine and tends them yet. Beneath its stern reformed ` +
      `administration the old mercy persists: its doors, like death's, are open ` +
      `to all, and turn none away for want of a fee.`);
    room('smith_grave', 'The Fosse',
      `A walled and grassed-over ground near the hospital, quiet and level and ` +
      `wrong — for here, in the great dying-times, the plague-dead were tipped by ` +
      `the cartload into pits too deep and too crowded for names. Nothing is ` +
      `built here, and nothing grazed. The grass grows rank and dark, and the ` +
      `Lunden that hurries past has agreed, without a word, not to remember why.`);
    room('smith_cloth', 'Cloth Fair',
      `A cramped huddle of ancient houses and the drapers' stalls of the old ` +
      `cloth fair, where for centuries the wool-trade of Albeon — the trade that ` +
      `made the kingdom rich — was bought and sold under charter and holiday ` +
      `license. The fair is shrunk to a memory now, but the crooked timber lanes ` +
      `remember, and the smell of raw wool still hangs in the oldest yards.`);
    room('smith_bailey', 'The Old Bailey',
      `The Sessions House, the great criminal court of Lunden, hard by the gaol ` +
      `for convenience — a short, grim walk from dock to cell to gallows. Its ` +
      `court is strewn with sweet herbs and sharp vinegar against the gaol-fever ` +
      `the prisoners bring in with them, a fever that has, now and then, carried ` +
      `off judge and jury along with the accused. Justice here is swift, public, ` +
      `and cheap of everything but mercy.`);
    room('smith_dock', "The Prisoners' Dock",
      `The bare rail where the accused stand to be tried, a mirror set above them ` +
      `to throw the daylight on their faces that the court may read their guilt — ` +
      `or their terror, which the law does not trouble to distinguish. A dozen ` +
      `may be tried in a morning, and sentenced by noon, and a rope is a cheap ` +
      `and rapid argument.`);
    room('smith_newgate', 'Newgate Prison',
      `The great gaol of Lunden, a black fortress of misery whose very name is a ` +
      `dread — cold, cramped, fever-ridden, and ruled less by its keepers than by ` +
      `the brutal freemasonry of its own inmates. The rich buy comfort on the ` +
      `Master's Side; the poor rot and die on the Common. Over the gate, the ` +
      `irons of the hanged are sometimes hung to dry.`);
    room('smith_condemned', 'The Condemned Hold',
      `A dark stone cell for those under sentence of death, where the ` +
      `chaplain — the "Ordinary" — attends the doomed, takes down their ` +
      `confessions, and sells them, printed, as their last dying speeches before ` +
      `the body is cold. On the eve of a hanging the bellman comes to the grate ` +
      `at midnight and tolls his handbell, and bids the condemned repent, for ` +
      `they die tomorrow.`);
    room('smith_pressyard', 'The Press-Yard',
      `A grim yard of the gaol where the law's last cruelty was done — for a ` +
      `prisoner who would not plead, and so cheat the Crown of his forfeited ` +
      `goods, was pressed beneath a board and slowly heaped with iron until he ` +
      `spoke or died. Men chose the weights, and the silence, and left their ` +
      `families the estate. The stones remember the price of it.`);
    room('smith_tyburn', 'The Tyburn Road',
      `The long, dreadful road west along which the condemned are carted from ` +
      `Newgate to the gallows — a jeering, drinking, holiday procession of the ` +
      `whole low city, the cart pausing at the taverns for the doomed man's last ` +
      `pint, the crowd pelting or cheering as the mood takes them. It is Lunden's ` +
      `grimmest festival, and its best-attended.`);
    room('smith_gallows', 'The Triple Tree',
      `The great triangular gallows at the road's bleak end, three tall posts ` +
      `joined in a triangle, from which a dozen and more may swing at once before ` +
      `a fairground multitude of thirty thousand — pie-men, pickpockets, ` +
      `ballad-sellers, and the weeping few. The bodies are cut down and carried ` +
      `off, some to the anatomists, some to grieving arms, some to the gibbet by ` +
      `the road. Then the crowd goes home, and the fair packs up, until the next.`);
    room('smith_charter', 'The Charterhouse',
      `A grave and gracious old foundation, a former monastery turned almshouse ` +
      `and school, where decayed gentlemen live out their days in quiet quadrangles ` +
      `and poor scholars are bred up for the university. It is an island of ` +
      `stillness beside the roaring field, its chapel cool, its cloister mossed, ` +
      `its bounty the guilty conscience of a rich man made stone.`);
    room('smith_bedlam', 'Bethlam Hospital',
      `The hospital for the mad — "Bedlam," a word the kingdom has made its own ` +
      `for any scene of raving chaos. Behind its long façade the incurable are ` +
      `chained and strawed, and, in a horror the age thinks merely amusing, shown ` +
      `to the public for a penny, who come to laugh at the ravings as at a ` +
      `bear-baiting. The keepers rattle their keys. The noise from within does ` +
      `not bear describing.`);
    room('smith_cells_bed', "The Incurables' Ward",
      `A long stone gallery of cells where the worst afflicted are kept, some ` +
      `chained to the wall, some sunk past all reach in their private dark. A ` +
      `few, on the better days, are lucid, and speak with a terrible sanity of ` +
      `the world that put them here. The visitors do not linger by those cells. ` +
      `They came to laugh, and a sane voice in Bedlam is no laughing thing.`);
    room('smith_elms', 'The Elms',
      `A stand of old elms at the field's edge, under which the earlier ages of ` +
      `Lunden did their burning — for heretics, chiefly, of whichever faith was ` +
      `losing that decade's argument, martyrs of the Seven and martyrs of the ` +
      `Lone Star both, ash upon the same ground. A stone marks the spot, worn ` +
      `nearly smooth. The elms have grown very tall, and very dark.`);
    room('smith_pens', 'The Cattle Pens',
      `A maze of hurdled pens where the beasts are held before market, bawling ` +
      `their fear into the smoke — bullocks, sheep, and squealing swine driven ` +
      `on the hoof from every shire in Albeon to die for the city's supper. The ` +
      `drovers doze on the rails with their dogs, and the mud is a thing beyond ` +
      `mere mud, and has been, here, for a thousand years.`);
    room('smith_horse', 'The Horse-Pool',
      `A muddy pool at the corner of the field where the horse-copers water and ` +
      `show their beasts, and cheat the buyers with the immemorial tricks of the ` +
      `trade — the drugged nag that seems fresh, the aged mouth filed young. To ` +
      `buy a horse at Smithsfield, the saying runs, is to buy a lawsuit with legs.`);

    link('smith_gate', 'n', 'smith_field');
    link('smith_field', 'n', 'smith_barts');
    link('smith_field', 'e', 'smith_shambles');
    link('smith_field', 'w', 'smith_bailey');
    link('smith_field', 'ne', 'smith_cloth');
    link('smith_field', 'nw', 'smith_charter');
    link('smith_field', 'se', 'smith_elms');
    link('smith_field', 'sw', 'smith_pens');
    link('smith_barts', 'n', 'smith_grave');
    link('smith_shambles', 'e', 'smith_pie');
    link('smith_bailey', 'w', 'smith_newgate');
    link('smith_bailey', 's', 'smith_dock');
    link('smith_newgate', 's', 'smith_condemned');
    link('smith_newgate', 'n', 'smith_pressyard');
    link('smith_condemned', 'w', 'smith_tyburn');
    link('smith_tyburn', 'w', 'smith_gallows');
    link('smith_charter', 'n', 'smith_bedlam');
    link('smith_bedlam', 'e', 'smith_cells_bed');
    link('smith_pens', 's', 'smith_horse');

    /* ================================================================= *
     *  IX. THE ROOKERY OF GYLES  (18) — the slum.
     * ================================================================= */
    room('rook_gate', 'Seven Dials',
      `A junction where seven mean streets meet at a single leaning pillar, like ` +
      `a foul star fallen into the mud — the gateway to the Rookery of Gyles, the ` +
      `most notorious slum in Albeon, where the Watch comes in numbers or not at ` +
      `all. Seven ways run off into seven kinds of dark, and every one of them ` +
      `is watching you.`);
    room('rook_court', 'The Rookery',
      `The black heart of the slum, a court so hemmed and overbuilt that the sky ` +
      `is a grey rag far above — a warren of rotting tenements, honeycombed with ` +
      `hidden doors and cross-passages and rooftop runs, where a hunted man may ` +
      `vanish between one breath and the next and the law simply gives up at the ` +
      `threshold. Ragged children swarm the stairs. Every one is a lookout.`);
    room('rook_hollow', 'The Holy Land',
      `The slum's own bitter name for its worst quarter — a lightless maze of ` +
      `courts within courts, where whole families share a single room and a ` +
      `single window looks on a single privy, and the poor of the poor sink out ` +
      `of the city's sight entirely. There is more life crammed into this ` +
      `sunless acre than into a shire, and less of it is meant to last.`);
    room('rook_cellar', 'The Cellar-Dwellings',
      `A row of flooded cellars let by the night to those who cannot rise even to ` +
      `a garret — whole households living below the street in the wet dark, the ` +
      `Fleet's seepage rising through the floor, the children pale as things ` +
      `grown under a stone. It is the bottom of Lunden, the very floor of the ` +
      `kingdom's wealth, and the rent is still, somehow, collected.`);
    room('rook_yard', "Dyott's Yard",
      `A blind court off the Holy Land, its one entrance a covered passage a ` +
      `shoulder wide — a natural fortress of the poor, easily barred against the ` +
      `Watch and easily fled by the roofs. The washing that never dries hangs ` +
      `across it in grey ranks, and behind every broken window someone is ` +
      `watching the mouth of the passage.`);
    room('rook_gin', 'The Gin-Palace',
      `A gaudy, gaslit gin-shop, brilliant and terrible amid the surrounding ` +
      `squalor — for gin is the shortest way out of the Rookery, and the ` +
      `cheapest, "drunk for a penny, dead drunk for twopence," and the palace ` +
      `does a roaring trade in oblivion. Mothers dose their babies quiet with it. ` +
      `The whole slum staggers on this bright poison.`);
    room('rook_kidney', 'The Kidney-Pie Stall',
      `A greasy night-stall where a coster sells hot pies of uncertain kidney to ` +
      `the reeling and the ravenous — a penny a pie, and best not to enquire too ` +
      `closely, in a district where the cats grow scarce whenever trade is brisk. ` +
      `It is, God help the eater, the best-smelling corner of the Rookery.`);
    room('rook_flash', 'The Flash-Ken',
      `The thieves' own public house, a low crib where the light-fingered ` +
      `fraternity drinks, boasts, and does its business in flash-cant no honest ` +
      `ear can follow. Stolen goods change hands under the table; a fiddler ` +
      `scrapes; and a stranger who cannot give the right word at the door had far ` +
      `better not have knocked.`);
    room('rook_beggars', "Beggars' Roost",
      `A doss and school for the beggars of Lunden, who ply their trade here as an ` +
      `organised craft — for the sham-sailor, the fainting-fit, the borrowed ` +
      `baby, and the pitiful sign are all taught, hired out, and taxed by the ` +
      `masters of the Roost. At day's end the "blind" count their takings and the ` +
      `"lame" dance a jig, and the honest citizen's charity is reckoned up like ` +
      `any other day's wage.`);
    room('rook_pawn', 'The Dolly-Shop',
      `An unlicensed pawnshop and fence, its window a museum of the ` +
      `desperate — a wedding-ring, a soldier's medal, a child's single shoe — ` +
      `where the Rookery raises a few pence on whatever it has left, and buys ` +
      `back, at ruin, whatever the thieves have lifted. The dolly-man asks no ` +
      `questions and keeps two sets of books, and is, in his way, the truest ` +
      `banker in Lunden.`);
    room('rook_church', 'St Gyles-in-the-Fields',
      `The parish church that gives the rookery its name, marooned now in the ` +
      `squalor it was built to shepherd, its yard packed with the paupers' dead. ` +
      `By an old custom it is here the condemned carts halt on the road to the ` +
      `gallows, and the parish gives each doomed man a great bowl of ale — the ` +
      `"St Gyles Bowl," his last drink this side of the drop.`);
    room('rook_pound', 'The Pound',
      `A railed corner by the church where, by that grim old custom, the ` +
      `Tyburn-bound cart pauses and the St Gyles Bowl is handed up to the ` +
      `condemned — the last kindness of a hard city, a quart of ale between a ` +
      `man and eternity. The crowd drinks the health of the dying, who drink ` +
      `their own, and the cart rolls on west into the last of the afternoon.`);
    room('rook_lane', 'Church Lane',
      `A vile, narrow, tumbledown lane behind the church, the very sink of the ` +
      `Rookery, where the houses are props and patches and the smell is a ` +
      `physical weight. And yet children play in it, and a woman sings at a ` +
      `window, and the human refuses, even here, even now, to be only wretched. ` +
      `That, more than the misery, is the thing that stays with you.`);
    room('rook_doss', 'The Twopenny Hangover',
      `A doss-house of the lowest sort, where for a penny you may sleep sitting ` +
      `on a bench, and for twopence lean forward onto a rope stretched before it, ` +
      `slung there like washing till the keeper cuts it down at dawn and tips the ` +
      `whole snoring row awake at once. The very bottom rung of Lunden's ladder, ` +
      `and there is always, always a queue for it.`);
    room('rook_school', 'The Academy',
      `A garret where a wheedling old master keeps his "academy" — a school of ` +
      `young thieves, drilled in the picking of pockets on a coat hung with bells, ` +
      `fed thin and worked clever and bound to him by fear and a crooked ` +
      `affection both. They are quick, and loyal, and doomed, and he loves them ` +
      `better, in his fashion, than the parish ever did.`);
    room('rook_nook', "Rats' Castle",
      `A notorious tenement, tall and black and rotten, the strongest thieves' ` +
      `hold in the Rookery — so warrened and watched that no officer of the law ` +
      `has climbed its stairs and come down again the same day. Its name is a ` +
      `boast and a warning. Something scuttles in the dark of its lower passages, ` +
      `and it is not, always, rats.`);
    room('rook_privy', 'The Common Midden',
      `A festering yard of shared privies and heaped refuse serving a hundred ` +
      `crowded rooms, the source of half the fevers of the Rookery and the whole ` +
      `of its stench. The night-soil men come too seldom and charge too much, and ` +
      `the midden grows, and the children play beside it because there is nowhere ` +
      `else, and the cholera waits in it, patient as rent.`);
    room('rook_well', 'The Broad Street Pump',
      `The public pump that gives the Rookery its water, drawing cool and clear ` +
      `and sweet from deep below the reeking streets — and drawing, unknown to ` +
      `the parched thousands who bless it, straight through the seepage of a ` +
      `leaking cesspit, so that in the bad summers it deals out the flux and the ` +
      `cholera with an even, invisible hand. They queue for it, and thank it, and ` +
      `die of it, and cannot think why.`);

    link('rook_gate', 'n', 'rook_court');
    link('rook_court', 'n', 'rook_hollow');
    link('rook_court', 'e', 'rook_gin');
    link('rook_court', 'w', 'rook_flash');
    link('rook_court', 'ne', 'rook_pawn');
    link('rook_court', 'nw', 'rook_church');
    link('rook_court', 'se', 'rook_doss');
    link('rook_court', 'sw', 'rook_nook');
    link('rook_hollow', 'n', 'rook_cellar');
    link('rook_hollow', 'e', 'rook_yard');
    link('rook_gin', 'e', 'rook_kidney');
    link('rook_flash', 'w', 'rook_beggars');
    link('rook_church', 'w', 'rook_pound');
    link('rook_pound', 's', 'rook_lane');
    link('rook_doss', 'e', 'rook_school');
    link('rook_nook', 's', 'rook_privy');
    link('rook_nook', 'e', 'rook_well');

    /* ================================================================= *
     *  X. THE WEST END  (18) — the fashionable new town.
     * ================================================================= */
    room('wend_gate', 'The Hay-Market',
      `The ragged seam where the old city gives way to the new — a broad street ` +
      `still smelling of the hay and horses sold along it, but rising fast into ` +
      `the modish West End, where Lunden's money goes to build itself squares of ` +
      `clean brick well upwind of the coal-smoke and the poor. The theatres and ` +
      `the fine shops crowd in; the mud gives way to paving; the future is being ` +
      `laid out here in straight and hopeful lines.`);
    room('wend_square', "The King's Square",
      `A great new residential square of identical brick mansions about a railed ` +
      `garden — the height of the fashionable town, where the quality keep their ` +
      `Lunden houses and their carriages and their careful distance from the city ` +
      `that pays for it all. It is clean, and quiet, and correct, and just a ` +
      `little dull, which is precisely the point.`);
    room('wend_stjames', "St Alric's Palace",
      `A rambling brick palace of the Crown, low and unassuming beside the ` +
      `Whitehall's sprawl, but the true working seat of the court — for it is ` +
      `here the sovereign holds the levees and the drawing-rooms at which a ` +
      `career is made by a nod. To be "presented at St Alric's" is to exist; not ` +
      `to be, is not.`);
    room('wend_gallery', 'The Print-Shop',
      `A crowded window before which a laughing crowd forever gathers — for here ` +
      `hang the satirical prints, the savage coloured caricatures in which the ` +
      `whole kingdom, from the King to the Grand Coësre of a foreign slum, is ` +
      `mocked without mercy or restraint. It is Albeon's dearest liberty made ` +
      `visible: the right to draw the mighty as fools, and sell it for a ` +
      `shilling in a shop window.`);
    room('wend_pallmall', 'Pell-Mell',
      `A handsome, broad, straight street named for a vanished ball-game, now ` +
      `the very spine of clubland — a parade of coffee-houses, chocolate-houses, ` +
      `and discreet gentlemen's clubs where the West End gambles, dines, and ` +
      `governs at its leisure. The gas-lamps, newest wonder of the age, march ` +
      `down it in a double line, and Lunden comes at dusk simply to see them lit.`);
    room('wend_chocolate', "White's Chocolate-House",
      `The most exclusive of the clubs, begun as a chocolate-house and hardened ` +
      `into an institution, where the young bloods of the aristocracy game away ` +
      `their acres by candlelight with a studied, ruinous indifference. The ` +
      `betting-book lies open on the table: wagers on births, deaths, ` +
      `marriages, the fall of ministries, and, once, on which of two raindrops ` +
      `would first reach the bottom of the window.`);
    room('wend_pleasure', 'The Spring Gardens',
      `Famous pleasure-gardens on the town's edge, a fairyland of lamplit walks, ` +
      `orchestras, supper-boxes, and fireworks, where for a shilling all ranks ` +
      `mingle of a summer evening under ten thousand lights — the duchess and the ` +
      `milliner, the prince and the pickpocket, promenading the same gravel in a ` +
      `warm democratic dark. The dark walks beyond the lamps see other business, ` +
      `and the gardens, wisely, keep no lanterns there.`);
    room('wend_arcade', 'The Piazza',
      `An arcaded square in the Empire manner, the first of its kind in Lunden, ` +
      `built by a great lord and never quite becoming what he hoped — for the ` +
      `fashionable drifted west, and the market crept in, and the elegant piazza ` +
      `now shelters flower-women, coffee-stalls, and the raffish overflow of the ` +
      `theatres in a cheerful, faded grandeur.`);
    room('wend_garden', 'The Garden Market',
      `A boisterous market of fruit, flowers, and vegetables that has colonised ` +
      `the once-genteel piazza, its barrows and baskets heaped with the green ` +
      `country come to town. The flower-girls work the theatre crowds with ` +
      `violets and sharp tongues; the porters carry impossible towers of baskets ` +
      `on their heads; and the whole bright, bawling chaos runs from before dawn ` +
      `till the players' crowds spill out at midnight.`);
    room('wend_theatre', 'The Theatre Royal',
      `A great patent playhouse, one of the two in the kingdom licensed to play ` +
      `the drama — a gilded, candlelit, five-tiered horseshoe of boxes where ` +
      `Lunden comes as much to be an audience to itself as to the stage. Riots ` +
      `have been fought in this pit over the price of a seat, and the players ` +
      `have learned to duck. Tonight the great tragedian plays. The house is ` +
      `sold to the walls.`);
    room('wend_greenroom', 'The Green Room',
      `The players' retiring-room behind the stage, hung with green baize and ` +
      `thick with paint, sweat, and gossip, where the gods and monsters of the ` +
      `stage sit smoking in their finery between the acts and the fashionable are ` +
      `admitted, for a consideration, to worship. Reputations are made here, and ` +
      `hearts lost, and both, generally, regretted.`);
    room('wend_auction', 'The Auction Rooms',
      `Genteel rooms where the movables of the fallen and the dead are knocked ` +
      `down under the hammer — the library of a ruined lord, the jewels of a ` +
      `bankrupt beauty, the whole gilded wreckage of overreach passing quietly ` +
      `to new hands. The auctioneer's patter is a small art. Half the West End ` +
      `furnishes itself, discreetly, on the misfortunes of the other half.`);
    room('wend_coffee', 'The Grecian Coffee-House',
      `A coffee-house frequented by the learned and the pedantic — scholars, ` +
      `lawyers of an antiquarian bent, and members of the learned societies, who ` +
      `dispute Old Latian etymology and the orbits of the fixed stars over their ` +
      `dishes with a heat the stock-jobbers reserve for money. A duel was once ` +
      `fought in the yard, it is said, over a point of grammar.`);
    room('wend_assembly', 'The Assembly Rooms',
      `Grand public rooms hired out for the balls, routs, and concerts of the ` +
      `season, all chandeliers and chalked floors and the long anxious warfare of ` +
      `the marriage-market — for here the daughters of the ambitious are ` +
      `displayed, and matched, and the whole gilded machinery of who-may-marry- ` +
      `whom turns to the scrape of the fiddles till the small hours.`);
    room('wend_bagnio', 'The Bagnio',
      `A "bathing-house" of the Empire fashion, offering hot baths, cupping, and ` +
      `sweating to the respectable by day — and, by the discreet upper doors, a ` +
      `good deal more to the fashionable by night, for a bagnio is where the West ` +
      `End keeps the assignations it will not keep at home. The porter has the ` +
      `finest memory in Lunden, and the firmest discretion, and both are for ` +
      `sale.`);
    room('wend_church', "St Empen's-in-the-Fields",
      `A handsome new church with a soaring spire and a great columned portico, ` +
      `set where the town meets the open ground — the parish church of the ` +
      `palaces, but with a wide reformed charity, keeping a crypt open to the ` +
      `poor and the lost of the West End even as the quality roll up to its doors ` +
      `in their carriages. One star for duchess and crossing-sweep alike, says ` +
      `the reformed creed; the church, at least, half means it.`);
    room('wend_almshouse', "The Actors' Almshouse",
      `A modest foundation, endowed by the players themselves, that shelters the ` +
      `old and broken of the stage — the tragedians outlived by their triumphs, ` +
      `the beauties whom time un-cast. They sit in the little garden rehearsing ` +
      `the great roles to the roses, word-perfect still, and the profession, ` +
      `which forgets so fast, remembers its own here at least until they die.`);
    room('wend_mews', 'The Royal Mews',
      `Great royal stables about a cobbled yard, where the Crown's carriage- ` +
      `horses and the fabulous gilt state-coach are kept — a coach so encrusted ` +
      `with gold and painting that it is worth a warship, and used but once a ` +
      `reign, and drawn out for the coronation to trundle the new sovereign, ` +
      `terrified and glittering, through the roaring streets.`);

    link('wend_gate', 'n', 'wend_square');
    link('wend_square', 'n', 'wend_pallmall');
    link('wend_square', 'e', 'wend_arcade');
    link('wend_square', 'w', 'wend_stjames');
    link('wend_square', 'ne', 'wend_coffee');
    link('wend_square', 'nw', 'wend_assembly');
    link('wend_square', 'se', 'wend_church');
    link('wend_square', 'sw', 'wend_mews');
    link('wend_pallmall', 'e', 'wend_chocolate');
    link('wend_pallmall', 'n', 'wend_pleasure');
    link('wend_stjames', 'w', 'wend_gallery');
    link('wend_arcade', 'e', 'wend_garden');
    link('wend_garden', 'n', 'wend_theatre');
    link('wend_garden', 's', 'wend_auction');
    link('wend_theatre', 'e', 'wend_greenroom');
    link('wend_assembly', 'w', 'wend_bagnio');
    link('wend_church', 'e', 'wend_almshouse');

    /* ================================================================= *
     *  Inhabitants: a few placed items and folk, peaceful and otherwise.
     * ================================================================= */

    // Starting kit, for the fresh-off-the-packet.
    R.rook_flash.add(world.item({
      name: 'rusty cutlass',
      keywords: ['cutlass', 'sword', 'rusty', 'blade'],
      short: 'A rusty cutlass has been left leaning in the corner.',
      description:
        'A sailor\'s heavy chopping blade, red with neglect but honest steel ' +
        'beneath. It has settled more than one dockside argument.',
      weight: 3,
      damage: [3, 6],
      accuracy: 1,
    }));
    R.pool_wapping.add(world.item({
      name: 'tarred sea-coat',
      keywords: ['sea-coat', 'coat', 'jacket', 'armor', 'armour'],
      short: 'A heavy tarred sea-coat hangs forgotten on a hook.',
      description:
        'A sailor\'s coat of canvas stiff with tar, near proof against wind, ' +
        'water, and a glancing blade alike.',
      weight: 4,
      armor: 2,
    }));

    // Peaceful folk (talk to them).
    R.city_coffee.add(world.mob({
      name: 'underwriter',
      keywords: ['underwriter', 'merchant', 'broker'],
      short: 'An underwriter scans the shipping-list over his coffee.',
      description:
        'A sharp, ink-stained man of business who will insure your voyage, your ' +
        'cargo, or your life, at a price computed to the last farthing of your ' +
        'chances of surviving it.',
      xp: 0,
      dialogue:
        'Empyrean? I\'ll write you a policy on the crossing, friend, but read ' +
        'the small clauses. The Sleeve is short and the underwriters of Lunden ' +
        'are shorter still.',
    }));
    R.pool_packet.add(world.mob({
      name: 'packet-master',
      keywords: ['packet-master', 'master', 'boatman', 'ferryman'],
      short: 'The packet-master leans at the stairs, watching the tide.',
      description:
        'A weathered, tar-handed man who has run the Sleeve crossing more times ' +
        'than he can count, and reads the sky and the water like a ledger.',
      xp: 0,
      dialogue:
        'Bound for Empyrean? Step aboard and say the word "board" — I\'ll have ' +
        'you up the Sequane on the tide. Mind, it\'s a grey old crossing, and ' +
        'the Empire counts your coin twice at the far end.',
    }));
    R.suth_globe.add(world.mob({
      name: 'strolling player',
      keywords: ['player', 'actor', 'tragedian'],
      short: 'A strolling player runs his lines beneath the empty stage.',
      description:
        'A lean, carrying-voiced man in a borrowed cloak, half in this world ' +
        'and half in whatever kingdom the afternoon\'s tragedy requires of him.',
      xp: 0,
      dialogue:
        'All Lunden\'s a stage, friend, and the Suthwork the pit of it. Stay ' +
        'for the play — we murder a king this afternoon, and the groundlings ' +
        'do so love a murdered king.',
    }));

    // Hostile things, for the blooding of blades.
    R.rook_nook.add(world.mob({
      name: 'garrotter',
      keywords: ['garrotter', 'thief', 'footpad'],
      short: 'A garrotter uncoils from the dark of the stair, cord in hand.',
      description:
        'A silent, wiry killer of the Rookery, who works the dark with a length ' +
        'of knotted cord and a quick knee in the back, and asks for your purse ' +
        'only after he has your throat.',
      hostile: true,
      level: 2,
      maxHp: 18,
      stats: { str: 12, dex: 14, con: 11, int: 9 },
      damage: [2, 6],
      xp: 45,
      respawns: 50,
    }));
    R.rook_well.add(world.mob({
      name: 'rookery rat',
      keywords: ['rat', 'vermin'],
      short: 'A great rookery rat bares yellow teeth by the pump.',
      description:
        'A monstrous rat, bold and cholera-quick, grown fat on the filth of the ' +
        'Holy Land and unafraid of anything on two legs.',
      hostile: true,
      level: 1,
      maxHp: 10,
      stats: { str: 9, dex: 14, con: 9, int: 3 },
      damage: [1, 4],
      xp: 20,
      respawns: 40,
    }));
    R.tor_menagerie.add(world.mob({
      name: 'baiting-bear',
      keywords: ['bear', 'baiting-bear'],
      short: 'A great scarred bear surges to the length of its chain, roaring.',
      description:
        'A huge old brown bear, half-blind and wholly furious, scarred by a ' +
        'lifetime of the baiting-pit and the mastiffs\' teeth. The chain is ' +
        'stout. It is not, perhaps, stout enough.',
      hostile: false,
      level: 5,
      maxHp: 60,
      stats: { str: 18, dex: 8, con: 17, int: 4 },
      damage: [5, 11],
      armor: 2,
      xp: 200,
      respawns: 150,
    }));

    return {
      area: lunden,
      startId: 'city_cross',
    };
  };
})(typeof window !== 'undefined' ? window : this);
