/*
 * miyako.js — MIYAKO, capital of Yamato, the Empire of the Morning Sun.
 *
 * Far to the east across the Sunrise Sea, months' sail from the western
 * kingdoms, lies the closed empire the sailors of Empyrean call Zipang — the
 * land of gold and locked doors — but which its own people name Yamato, the
 * Sunlit Realm. It is Kaelinu's answer to imperial Japan: an archipelago that
 * has sealed itself against the outer world, penned its handful of tolerated
 * "sea-barbarians" on a single fan-shaped island, banned their guns and their
 * gods and their books, and turned inward into an exquisite, rigid, frozen
 * perfection — a whole civilization holding its breath, and half-aware that one
 * day the black ships will come and it will have to let it out.
 *
 * Its capital, Miyako ("the Capital"), is a castle-town of concentric rings:
 * the Shogun's great keep at the heart, the sword-bearing warrior caste spiralled
 * about it by rank, the teeming merchant Low City below, and the temples and
 * shrines banked at the edges like a wall of prayer. Two powers share it — the
 * Radiant Emperor, a living god descended from the sun-mother Amateru, who
 * reigns in sacred seclusion and rules nothing; and the Shogun, lord of the
 * tent-government, who rules everything and is descended from nobody. Over it
 * all, on a clear day, floats the white cone of Mount Shiratake.
 *
 * Content, not framework — a MUD zone file, populated into the shared World by
 * world-data.js. Reached from Empyrean by the great eastern ship: board at the
 * Sea-Gate there, arrive at the Company Anchorage here, and board again to sail
 * the long way home.
 *
 * LAYOUT (districts):
 *   low_*   The Low City (the merchant & artisan town) ........ 26   START
 *   bay_*   The Harbor & the Fan-Island (the sealed port) ..... 18   the ship
 *   road_*  The Great Bridge & the Riverside ................. 16
 *   sam_*   The Warriors' Quarter (samurai & daimyo) ......... 22
 *   cas_*   The White Heron Keep (the Shogun & the Bakufu) ... 22
 *   pal_*   The Ninefold Enclosure (the Radiant Emperor) ..... 18
 *   wil_*   The Willow-World (the floating pleasure-quarter) .. 22
 *   tem_*   The Temple District (the Way of Silence) ......... 20
 *   shr_*   The Shrine Precinct (the Way of the Kami) ........ 16
 *   out_*   The Outer Wards (the fringes & the Untouched) .... 20
 *                                                              ---
 *                                                              200
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildMiyako = function buildMiyako(ctx) {
    const { world, R, room, link } = ctx;

    const miyako = world.area({
      id: 'miyako',
      name: 'Miyako, Capital of the Morning Sun',
      description:
        'The capital of Yamato — the closed empire the west calls Zipang — a ' +
        'castle-town on the Sunrise Sea, beneath the white cone of Mount ' +
        'Shiratake.',
    });

    /* ================================================================= *
     *  I. THE LOW CITY  (26) — the merchant & artisan town. START.
     * ================================================================= */
    room('low_odori', 'The Great Avenue',
      `The broad beaten thoroughfare of the Low City, the shitamachi where the ` +
      `common folk of Miyako live loud and close beneath the far white walls of ` +
      `the castle. Blue shop-curtains snap in the wind, each dyed with its ` +
      `house-crest; wooden clogs clatter on the packed earth; a ballad-seller, a ` +
      `tofu-man, a wandering monk with his begging-bowl all cross in the one ` +
      `breath. Above the tile roofs, remote as a rumour, floats the snow-cone of ` +
      `Mount Shiratake.`);
    room('low_gofuku', 'The Draper\'s Row',
      `The street of the great cloth-houses, where bolts of silk and cotton are ` +
      `flung open across the matted floors for kneeling customers — and where a ` +
      `certain famous house has done the unthinkable and priced its goods in ` +
      `plain figures, cash only, no haggling and no credit, and grown so rich by ` +
      `it that the lords themselves owe it money. The clerks move like a shoal, ` +
      `and nothing, nothing, is free.`);
    room('low_lacquer', 'The Lacquerers\' Alley',
      `A hush of a lane where the lacquer-masters work, coat upon coat of the ` +
      `tree's black sap dried in dust-free dark, a single box the labour of a ` +
      `year — bowls and trays and inro that seem cut from solidified night, ` +
      `dusted with gold into herons, waves, a single fallen leaf. To hurry the ` +
      `work is to ruin it, and the lacquerers have forgotten how to hurry.`);
    room('low_paper', 'The Paper-Makers\' Street',
      `Here the mulberry-bark paper of the realm is made and sold — paper strong ` +
      `as cloth and soft as skin, that walls the houses, screens the rooms, ` +
      `wraps the gifts, and takes the poet's brush. Sheets hang drying like ` +
      `pale flags. A whole civilization, it is said, could be folded out of what ` +
      `this street sells in a morning.`);
    room('low_fan', 'The Fan-Makers\'',
      `A shop of fans past counting — the folding fan, an invention of the realm, ` +
      `carried by every hand from the emperor to the fishwife: painted with ` +
      `plum-blossom or a single line of verse, snapped open to flirt, to signal, ` +
      `to cool, to command a stage or a battlefield. The maker pleats the paper ` +
      `with a thumbnail worn to a blade.`);
    room('low_umbrella', 'The Umbrella-Makers\'',
      `Oiled-paper umbrellas hang open to dry in their scores, a ceiling of ` +
      `translucent moons, each stretched on a starburst of split bamboo. In the ` +
      `long rains the whole Low City blooms with them, and a hundred thousand ` +
      `citizens walk the streets each under a small private sky.`);
    room('low_fishmarket', 'The Fish Market',
      `The morning market at the bridge-foot, and the belly of Miyako: slabs of ` +
      `silver and rose, tuna quartered like felled trees, live eels writhing in ` +
      `the tubs, and the auctioneer's strange sung chant over it all. By the ` +
      `fourth hour it is a lake of scale and melt-water and the sellers are ` +
      `counting coppers; by the fifth it is scrubbed to bare wet wood, waiting ` +
      `for the tide of dawn to fill it again.`);
    room('low_sushi', 'The Sushi Stall',
      `A plank counter behind a short curtain, where a single silent master ` +
      `presses the morning's raw fish onto fingers of vinegared rice and sets ` +
      `each piece, wordless, before you to be eaten at once with the hand — ` +
      `fast food for the fast city, the freshest thing in the realm, gone in two ` +
      `bites. He judges you by how you eat. Most are found wanting.`);
    room('low_wellyard', 'The Tenement Well-Yard',
      `The muddy communal yard behind a run of nagaya — the long, thin, ` +
      `paper-walled row-houses where the poor of the Low City are packed a ` +
      `family to a room, wall to shared wall. About the one well the wives ` +
      `gossip and scold and mind each other's children, and the whole ` +
      `overheard life of the common people is lived here, out loud, with nothing ` +
      `hidden but what cannot be helped.`);
    room('low_shrine', 'The Neighborhood Shrine',
      `A tiny shrine wedged between the tenements, no bigger than a sentry-box, ` +
      `where the ward keeps its own small guardian-kami with a rope of straw, a ` +
      `pair of stone foxes, and a saucer of rice. The children are told the kami ` +
      `sees everything they do. The children mostly believe it, which is the ` +
      `whole quiet genius of the arrangement.`);
    room('low_smiths', 'The Swordsmiths\' Lane',
      `A lane that rings and glows: the forges of the sword-smiths, whose folded ` +
      `steel is the pride and the terror of the realm. A blade is a soul, they ` +
      `say, and the smith purifies himself before the fire as a priest before ` +
      `an altar, folding the hot metal upon itself ten thousand times. What ` +
      `leaves this lane can shear a floating silk or a kneeling man with the ` +
      `same indifferent grace. Commoners may look. They may not buy.`);
    room('low_pot', 'The Potters\' Row',
      `Kilns and cluttered shelves of the potters, from rough tea-bowls prized ` +
      `for their very flaws to porcelain so fine the light comes through it. The ` +
      `tea-masters come here to hunt the one imperfect bowl that will humble a ` +
      `perfect room, and pay a farmer's fortune for a cup a farmer would throw ` +
      `at a dog.`);
    room('low_firetower', 'The Fire-Watch Tower',
      `A tall ladder-tower of black timber with a bronze bell at its head, ` +
      `manned day and night — for Miyako is a city of paper and wood packed ` +
      `tight, and fire is its oldest, hungriest god. The firemen, tattooed and ` +
      `swaggering, do not douse the flames so much as tear down the houses ` +
      `before them; the great blazes are called, with a shrug, "the flowers of ` +
      `the capital," and they bloom every winter.`);
    room('low_gate', 'The Ward Gate',
      `A stout wooden gate closing off the ward's main lane — for each ` +
      `neighborhood of the Low City locks itself behind such gates at the ` +
      `night-bell, and the gate-keeper in his little box notes who comes and ` +
      `goes. A watchman's clapper and a coil of rope hang ready. Beyond, the ` +
      `road runs out toward the temple lands at the city's edge.`);
    room('low_rice', 'The Rice Exchange',
      `The clamorous heart of the realm's true currency — for wealth in Yamato ` +
      `is reckoned not in coin but in rice, and here the brokers scream and ` +
      `signal over bales not yet planted, buying and selling the coming ` +
      `harvest, the harvest after, a drought, a glut, a rumour of either. It is ` +
      `the first market in the world to trade a thing that does not yet exist, ` +
      `and it feeds and ruins whole provinces without a single grain changing ` +
      `hands.`);
    room('low_sake', 'The Sake Brewers\' Lane',
      `A lane fragrant with steaming rice and the sweet reek of fermentation, ` +
      `where the brewers make the rice-wine of the realm in great cedar vats, ` +
      `and hang a ball of cedar-fronds above the door — green for the new brew, ` +
      `browning as it matures, the whole calendar of the craft written in a ` +
      `dying sphere of leaves. Within, men grow honest, then poetic, then ` +
      `horizontal, in the immemorial order.`);
    room('low_apoth', 'The Apothecary',
      `A wall of small wooden drawers, a thousand of them, each labelled in ` +
      `flowing script and holding some root, bark, dried lizard, or powdered ` +
      `horn of the mainland pharmacopeia. The apothecary reads your pulse at ` +
      `both wrists, considers the balance of your humours and the season of the ` +
      `year, and compounds a bitter paper twist of a cure that may even, now and ` +
      `then, be one.`);
    room('low_print', 'The Print-Sellers\'',
      `Bright racks of woodblock prints — pictures of the floating world, ` +
      `churned out by the thousand for a few coppers each: the great courtesans ` +
      `in their finery, the kabuki stars in mid-snarl, the thirty-six views of ` +
      `Mount Shiratake, and the shameless "spring pictures" kept under the ` +
      `counter. It is the art of the common people, disposable and immortal, ` +
      `and the lords pretend to despise it and collect it in secret.`);
    room('low_puppet', 'The Puppet Theatre',
      `A hall of the great puppets — each near life-size and worked by three ` +
      `black-hooded masters in full view, who somehow vanish from your eye ` +
      `within a minute, leaving only the doll, weeping, raging, choosing death ` +
      `for love. A chanter wails the tale and a single plucked string drives it ` +
      `like a heartbeat. Grown men sob here at the sorrows of carved wood, and ` +
      `are not ashamed.`);
    room('low_storyteller', 'The Storyteller\'s Hall',
      `A low, packed room where a lone teller kneels on a cushion with a fan and ` +
      `a folded cloth for all his properties, and becomes, by turns, an army, a ` +
      `ghost, a fool, a lord — the long comic tales and the long sad ones, told ` +
      `for the price of a bowl of tea. The whole crowd leans as one, breathes ` +
      `as one, and roars as one at the turn that everyone saw coming and no one ` +
      `wished to.`);
    room('low_moneychanger', 'The Money-Changers\'',
      `The counting-house of the money-changers, who weigh the realm's chaos of ` +
      `gold, silver, and strung copper against the sacred standard of rice, and ` +
      `grow quietly, enormously powerful doing it — for the sword-caste despises ` +
      `money and the money-caste, and so has let the despised merchants gather ` +
      `the whole purse of the empire into their soft, patient, abacus-clicking ` +
      `hands. The road up toward the warriors' quarter begins here.`);
    room('low_inn', 'The Great Inn',
      `A rambling wooden inn about a courtyard, where the traveller sheds his ` +
      `sandals at the step, soaks in the deep bath, and sleeps on the floor ` +
      `beneath a quilt, waited on kneeling — for hospitality in Yamato is a ` +
      `precise and beautiful art, and the guest is a small god for a night. ` +
      `Merchants up from the provinces trade the road's news over trays of ` +
      `pickles and steaming rice.`);
    room('low_bath', 'The Bath-House',
      `The neighborhood sento, a steamy wooden hall where the whole ward comes ` +
      `at day's end to scrub cold and clean at the taps and then poach, wordless ` +
      `and scarlet, in the scalding communal tub. Rank and coin are left with ` +
      `the clothes at the door; in the water the magistrate and the ditch-digger ` +
      `are only two red faces in the same fog. It is the most equal room in the ` +
      `empire, and the least talked about.`);
    room('low_noodle', 'The Noodle-Stalls',
      `A huddle of night-stalls under paper lanterns, the buckwheat noodles ` +
      `slapped steaming into bowls of dark broth for the workman on his way home, ` +
      `slurped standing in the cold with a great and proper noise — for silence ` +
      `over noodles, here, is a kind of insult to the cook. The lantern-light, ` +
      `the steam, the slurping dark: this is the Low City's own small heaven.`);
    room('low_tea', 'The Tea-Sellers\' Street',
      `A street of tea, from the everyday roasted twig-brew of the poor to the ` +
      `powdered jade tea whisked to froth for the connoisseur. A famous old ` +
      `tea-house here has hung the same reed blind for sixty years, and the ` +
      `regulars would riot if it were changed. To sit, to sip, to say little, to ` +
      `watch the street: the realm has built a whole philosophy on it.`);
    room('low_barber', 'The Topknot Barber',
      `The stall of the hair-dresser, who shaves the crown and oils and folds ` +
      `the topknot that every man of the realm wears by his station — for the ` +
      `precise shape of the knot announces your caste, your trade, your very ` +
      `politics, to any eye that knows the code, and every eye does. To lose ` +
      `the topknot is to lose the self; the ronin's, unkempt and adrift, is a ` +
      `disgrace worn on the head.`);

    link('low_odori', 'n', 'low_gofuku');
    link('low_odori', 's', 'low_fishmarket');
    link('low_odori', 'e', 'low_smiths');
    link('low_odori', 'w', 'low_rice');
    link('low_odori', 'ne', 'low_print');
    link('low_odori', 'nw', 'low_moneychanger');
    link('low_odori', 'se', 'low_bath');
    link('low_odori', 'sw', 'low_noodle');
    link('low_gofuku', 'n', 'low_lacquer');
    link('low_gofuku', 'e', 'low_paper');
    link('low_gofuku', 'w', 'low_fan');
    link('low_fan', 'n', 'low_umbrella');
    link('low_fishmarket', 's', 'low_sushi');
    link('low_fishmarket', 'e', 'low_wellyard');
    link('low_wellyard', 's', 'low_shrine');
    link('low_smiths', 'e', 'low_pot');
    link('low_smiths', 's', 'low_firetower');
    link('low_firetower', 'e', 'low_gate');
    link('low_rice', 'w', 'low_sake');
    link('low_rice', 's', 'low_apoth');
    link('low_print', 'n', 'low_puppet');
    link('low_print', 'e', 'low_storyteller');
    link('low_moneychanger', 'w', 'low_inn');
    link('low_noodle', 's', 'low_tea');
    link('low_tea', 'w', 'low_barber');
    // Gateways out of the Low City:
    link('low_fishmarket', 'w', 'road_bridge');    // the Great Bridge
    link('low_moneychanger', 'n', 'sam_gate');     // the Warriors' Quarter
    link('low_gate', 'e', 'tem_gate');             // the Temple District
    link('low_wellyard', 'e', 'out_gate');         // the Outer Wards

    /* ================================================================= *
     *  II. THE HARBOR & THE FAN-ISLAND  (18) — the sealed port. The ship.
     * ================================================================= */
    room('bay_wharf', 'The Company Anchorage',
      `A deep-water berth apart from the rest, where the one foreign ship the ` +
      `realm suffers to come — the great western carrack, months out from ` +
      `Empyrean across the Sunrise Sea — lies under the guns of a shore-battery ` +
      `and the eyes of a hundred officials. Her strange high hull and her ` +
      `red-haired crew are a wonder and an offence. This is the single needle's ` +
      `eye through which all the outer world is let, drop by grudging drop, into ` +
      `the closed empire of Yamato.`);
    room('bay_gate', 'The Sea-Gate Barrier',
      `A guarded barrier of black timber where every arrival is stopped, ` +
      `numbered, and searched to the skin — for the realm is sealed against the ` +
      `world, and the officials hunt with grim thoroughness for the forbidden: a ` +
      `western gun, a foreign coin, a hidden book, above all the smuggled emblem ` +
      `of the barbarians' banned religion. Pass their scrutiny, or do not pass ` +
      `at all.`);
    room('bay_teahouse', 'The Farewell Teahouse',
      `A quiet teahouse above the water where partings are drunk to — for a ` +
      `voyage beyond the barrier islands is, in the mind of the realm, a kind of ` +
      `small death, the traveller passing out of the ordered world into the ` +
      `formless sea. They serve the parting cup here, and watch the sails until ` +
      `they sink, and rarely speak of what lies past the horizon at all.`);
    room('bay_customs', 'The Inspection House',
      `A hall of kneeling clerks where the ship's every bale is opened, ` +
      `inventoried, taxed, and translated — for no foreigner may speak directly ` +
      `to a subject of the realm, and every word must pass through the sworn ` +
      `interpreters. Silk, sugar, clocks, and telescopes are weighed against the ` +
      `realm's gold and porcelain, and the whole grudging trade of two worlds is ` +
      `funnelled across these low writing-tables.`);
    room('bay_bridge', 'The Fan Bridge',
      `The single short bridge to the Fan-Island, gated at both ends and guarded ` +
      `always — the one thread that ties the caged foreigners to the realm. No ` +
      `barbarian crosses it inward without a warrant and a guard; no subject ` +
      `crosses it outward without leave and suspicion. Beneath, the tide sucks ` +
      `at the piles, indifferent to which side is the prison.`);
    room('bay_fan', 'The Fan Island',
      `A small, fan-shaped island of made land in the harbor, walled and moated ` +
      `and watched, where the sea-barbarians the realm tolerates are penned — a ` +
      `whole foreign world compressed to a single street of tall strange houses, ` +
      `a flagstaff, a cannon or two for salutes, and a horizon of guards. They ` +
      `live here as honoured prisoners, kept for their trade and their ` +
      `knowledge, and forbidden to so much as die on the sacred soil beyond the ` +
      `bridge.`);
    room('bay_factory', 'The Barbarians\' Factory',
      `The trading-post on the island: warehouses of western goods, a ` +
      `counting-room, and the cramped lodgings of the foreign merchants, who ` +
      `pass their sealed years here dreaming of home and growing rich. On the ` +
      `wall hangs a map of the whole world — a forbidden object anywhere else in ` +
      `the realm — on which Yamato is a scatter of small far islands at the ` +
      `edge, and not, as every subject is taught, the ordered centre of all ` +
      `that is.`);
    room('bay_interpreters', 'The Interpreters\' Guild',
      `The hall of the hereditary interpreters, a closed caste who alone are ` +
      `permitted to learn the barbarians' tongues, and who guard the privilege ` +
      `like a treasure and a curse — for they are the realm's one window on the ` +
      `world, and are watched the more closely for it. They translate the ship's ` +
      `manifests, the shogun's questions, the smuggled scraps of western ` +
      `science, and know, better than any lord, exactly how large the outside ` +
      `truly is.`);
    room('bay_quarantine', 'The Quarantine Sheds',
      `Long low sheds where new arrivals and suspect cargo are held apart until ` +
      `the officials are satisfied — of their health, their papers, their ` +
      `freedom from contraband faith. Men have waited out whole seasons here, ` +
      `staring across the water at a country they have crossed the world to ` +
      `enter and may not yet touch.`);
    room('bay_road', 'The Harbor Road',
      `The road that climbs from the wharves up into the city proper, lined with ` +
      `the offices of the port and the go-downs of the merchants who grow fat on ` +
      `the sea. Porters trot down it under swaying loads; palanquins of ` +
      `officials sway up it; and the salt smell of the harbor gives way, ` +
      `street by street, to the wood-smoke and cooking and dust of Miyako.`);
    room('bay_wharves', 'The Merchant Wharves',
      `The busy domestic wharves, where the coasting-junks and the great ` +
      `river-barges of the realm load and unload — rice from the provinces, ` +
      `timber, charcoal, roof-tiles, the endless supply of a city that eats a ` +
      `province a year. No foreign keel touches here; this is the realm feeding ` +
      `itself, a vast closed circulation, and it means to keep it so.`);
    room('bay_fishmarket', 'The Harbor Market',
      `A rough quayside market where the night's catch is sold straight off the ` +
      `boats before it can travel up to the great market at the bridge — the ` +
      `cheapest, freshest, ugliest fish in Miyako, sold by bawling brown men to ` +
      `bawling brown wives, and the gulls screaming judgement over all.`);
    room('bay_nets', 'The Net-Menders\' Strand',
      `A pebbled strand where the fisher-folk spread their nets to dry and mend, ` +
      `brown hands flying with the wooden needle, and the old ones who can no ` +
      `longer put to sea sit in the sun and knot and remember. The children play ` +
      `at the tide-line among the drawn-up boats, and learn the water early, and ` +
      `fear it rightly.`);
    room('bay_watchtower', 'The Harbor Watchtower',
      `A timber tower over the harbor mouth, where the watch keeps its glass ` +
      `always to the eastern sea — for the deepest fear of the realm is a sail ` +
      `on that horizon that it did not summon, the black ships of some western ` +
      `power come to break the seal by force. They have not come. The watch ` +
      `never sleeps. Everyone knows they will come.`);
    room('bay_shrine', 'The Shrine of the Sea-Kami',
      `A weathered little shrine to the laughing god of the fishers and the ` +
      `tides, hung with the offerings of those who go down to the sea: a wooden ` +
      `fish, a coil of rope, a prayer for the safe return of a boat that, this ` +
      `season, did not return. The sea gives, and the sea keeps; the shrine ` +
      `bargains with it daily, and does not always win.`);
    room('bay_junks', 'The Junk Anchorage',
      `A crowded backwater where the coasting-junks lie three deep, their ` +
      `matting sails furled, their crews living aboard in a floating village of ` +
      `washing-lines and cook-smoke and squalling babies. Whole families are ` +
      `born, wed, and buried on these decks and never own a foot of the land ` +
      `they trade along.`);
    room('bay_saltworks', 'The Salt-Flats',
      `A grid of shallow evaporation-pans along the shore, where the sea is let ` +
      `in, penned, and left to the sun until only the salt remains, raked into ` +
      `glittering ridges by workers bent double all the long white day. Salt is ` +
      `life and salt is money, and the salt-tax is one more thread in the net the ` +
      `realm keeps over its people.`);
    room('bay_lighthouse', 'The Beacon Point',
      `A stone-based brazier-tower on the harbor headland, where a fire of pine ` +
      `is lit at dusk to guide the coasters home past the reef — no great western ` +
      `lens here, only fire and faith and a keeper who has fed the flame forty ` +
      `years and can name every rock in the roads by the sound the swell makes ` +
      `breaking on it in the dark.`);

    link('bay_wharf', 'e', 'bay_gate');
    link('bay_gate', 'e', 'bay_customs');
    link('bay_gate', 'n', 'bay_teahouse');
    link('bay_customs', 'e', 'bay_road');
    link('bay_customs', 'n', 'bay_bridge');
    link('bay_customs', 's', 'bay_quarantine');
    link('bay_bridge', 'n', 'bay_fan');
    link('bay_fan', 'e', 'bay_factory');
    link('bay_fan', 'w', 'bay_interpreters');
    link('bay_road', 'e', 'bay_wharves');
    link('bay_road', 'n', 'bay_watchtower');
    link('bay_road', 's', 'bay_shrine');
    link('bay_road', 'ne', 'bay_junks');
    link('bay_wharves', 'e', 'bay_fishmarket');
    link('bay_wharves', 's', 'bay_nets');
    link('bay_wharves', 'n', 'bay_lighthouse');
    link('bay_junks', 'e', 'bay_saltworks');

    // The great eastern ship home: board at the Anchorage to sail to Empyrean.
    R.bay_wharf.ferry = {
      toId: 'quai_watergate',
      moored: 'The western carrack lies at the deep berth, taking on the tide',
      crossing: [
        'You show your warrant, submit to a last search, and are rowed out to ' +
          'the great foreign ship riding at her lonely anchor.',
        'She weighs, and stands out past the guard-junks and the barrier ' +
          'islands, and Miyako — the white cone of Shiratake above it — sinks ' +
          'slowly into the haze of the closed realm behind.',
        'Then there is only the Sunrise Sea, week upon week of it: the long ' +
          'swell, the flying fish, the storms that lay her over till the sea ' +
          'stands in the scuppers, the endless grey patience of the deep water. ' +
          'Slowly the stars wheel to a westron sky.',
        'At the last a green coast lifts, and the ship works up a widening river ' +
          'into the coal-smoke and the church-bells, and warps in at the ' +
          'Sea-Gate stairs of Empyrean, half a world from where you sailed.',
      ],
    };

    /* ================================================================= *
     *  III. THE GREAT BRIDGE & THE RIVERSIDE  (16)
     * ================================================================= */
    room('road_bridge', 'The Great Bridge',
      `The high arched bridge of dark cypress that vaults the Ōkawa, the great ` +
      `river, at the heart of the Low City — the busiest span in the realm and ` +
      `its very centre, for from a lacquered post at its foot every distance in ` +
      `Yamato is measured, and every road in the empire is only the count of ` +
      `so many miles from this one plank. The crowd upon it never thins. It is ` +
      `the zero of the world.`);
    room('road_zero', 'The Zero-Post',
      `The lacquered milestone-post at the bridge-foot from which all the ` +
      `realm's roads are reckoned — a plain black pillar that a thousand ` +
      `travellers a day touch for luck without a glance. From here the Five ` +
      `Great Roads run out to the far provinces, each mile of each measured from ` +
      `this spot, so that the whole empire is, in a sense, only a set of ` +
      `distances from a post in Miyako.`);
    room('road_fishfoot', 'The Bridge-Foot Market',
      `A jostle of stalls crammed onto the approach to the bridge, selling to ` +
      `the endless crowd: grilled skewers, cups of tea, straw sandals, charms, ` +
      `broadsheets, a moment's shade. The pickpockets work it like a trade, ` +
      `which it is, and the bridge-wardens move the beggars on, and move them on ` +
      `again, in a slow eternal dance.`);
    room('road_riverside', 'The Riverside',
      `The embankment of the Ōkawa, a broad willow-shaded walk above the brown ` +
      `sliding water, where the city comes to stroll and cool and be seen. ` +
      `Ferrymen call their fares from the stairs; a raft of felled timber slides ` +
      `by downstream; and across the water the roofs of Miyako climb tier on ` +
      `tier toward the far white castle. The harbor road runs down to the west.`);
    room('road_blossom', 'The Blossom Embankment',
      `A raised bank planted the length of it with cherry trees — bare black ` +
      `claws in winter, but in the brief mad week of spring a rolling surf of ` +
      `pink against which the whole city goes gently insane, spreading its mats ` +
      `beneath the boughs to drink and sing and weep at the beauty of a thing ` +
      `that will be brown mush in ten days. The realm loves the blossom the more ` +
      `because it falls. It is the closest thing it has to a creed.`);
    room('road_teahouse', 'The Riverside Teahouse',
      `A teahouse on stilts over the water, its river-room open on three sides ` +
      `to the breeze and the view, where one may take tea and sweets and the ` +
      `slow passage of the boats, and, of an evening, a discreet supper with ` +
      `company hired by the hour to be charming. The most civilized idleness in ` +
      `the realm is practised here, and it is not idle at all.`);
    room('road_willowbank', 'The Willow Bank',
      `A dim embankment of drooping willows where the lantern-lit boats put in ` +
      `for the Willow-World beyond — the last stretch of the ordinary city ` +
      `before the moat and the great gate of the pleasure-quarter. Men come this ` +
      `way with their faces half-hidden and their purses full, and go back the ` +
      `other way at dawn with neither.`);
    room('road_boathouse', 'The Pleasure-Boat House',
      `A boathouse of the roofed river-craft that the wealthy hire for parties ` +
      `on the water — floating rooms of lantern and lacquer, poled out into the ` +
      `cool of the current for an evening of music, wine, and moon-viewing, ` +
      `screened from the vulgar shore. On summer nights the river is a slow ` +
      `procession of these little golden worlds.`);
    room('road_ferry', 'The River Ferry',
      `A ferry-landing where a flat-bottomed boat is poled back and forth across ` +
      `the Ōkawa for a copper a head, in the reaches where there is no bridge — ` +
      `and there are few bridges, by the shogun's design, for a river uncrossed ` +
      `is a moat against rebellion. The ferryman knows every regular, every ` +
      `secret, and, it is said, every corpse the river has offered up.`);
    room('road_firework', 'The Firework Stand',
      `A riverside ground of the pyrotechnists, who in the great summer ` +
      `river-festival fill the night over the Ōkawa with chrysanthemums of fire ` +
      `while a hundred thousand throats cry out as one — the rival houses ` +
      `answering shell for shell, the crowd shouting the names of their ` +
      `favourites into the smoke. For one night the closed realm looks up, and ` +
      `gasps, and is happy.`);
    room('road_east', 'The East Road Post',
      `The first post-station of the Eastern Highroad, the greatest of the Five ` +
      `Roads, where it sets out from the capital toward the distant provinces — ` +
      `a bustle of porters, palanquin-bearers, packhorses, and the endless ` +
      `come-and-go of the forced processions of the lords. Here begins the long, ` +
      `beautiful, exhausting road that every daimyo in the realm must tread, ` +
      `back and forth, all his life.`);
    room('road_north', 'The North Road Post',
      `Where the Northern Highroad branches away toward the snow-country and the ` +
      `far frontier — a rougher, colder road, walked by pilgrims, exiles, and ` +
      `the pelt-traders of the northern tribes the empire has never wholly ` +
      `subdued. The inns here sell fur and firewater, and the talk is of wolves ` +
      `and worse.`);
    room('road_pine', 'The Avenue of Pines',
      `The highroad runs out of the city between double ranks of ancient ` +
      `pines, planted a century ago for shade and beauty and kept trimmed by ` +
      `decree — a green tunnel down which the great processions wind, and the ` +
      `humble traveller trudges, and the light falls in long bars across the ` +
      `worn stones. The realm makes even its roads a work of art, and even its ` +
      `art a means of control.`);
    room('road_milestone', 'The First Milestone',
      `A mound and a marker one league out, where the city truly ends and the ` +
      `country begins — the point at which a traveller stops and looks back at ` +
      `the whole grey-and-white sprawl of Miyako under its smoke, the castle ` +
      `floating at its heart, Shiratake floating above it, and knows himself, at ` +
      `last, to be leaving.`);
    room('road_shrine', 'The Traveller\'s Shrine',
      `A wayside shrine to the road-guardian, a pair of rough stone figures ` +
      `garlanded with the straw sandals of grateful travellers who have come so ` +
      `far unrobbed. A traveller claps twice, bows, leaves a coin or a sandal, ` +
      `and sets his face to the long road — for the roads of the realm are ` +
      `beautiful and watched and very, very long.`);

    link('road_bridge', 's', 'road_zero');
    link('road_bridge', 'w', 'road_riverside');
    link('road_bridge', 'n', 'road_east');
    link('road_zero', 'e', 'road_fishfoot');
    link('road_riverside', 's', 'road_blossom');
    link('road_riverside', 'n', 'road_boathouse');
    link('road_blossom', 'e', 'road_teahouse');
    link('road_blossom', 's', 'road_willowbank');
    link('road_boathouse', 'e', 'road_ferry');
    link('road_boathouse', 'n', 'road_firework');
    link('road_east', 'e', 'road_north');
    link('road_east', 'n', 'road_barrier');
    link('road_north', 'n', 'road_pine');
    link('road_pine', 'n', 'road_milestone');
    link('road_milestone', 'e', 'road_shrine');
    // Gateways off the riverside:
    link('road_riverside', 'w', 'bay_road');       // the Harbor
    link('road_willowbank', 's', 'wil_gate');      // the Willow-World
    // (road_barrier is the checkpoint on the road up to the Shrine Precinct)
    room('road_barrier', 'The Great Barrier',
      `A fortified checkpoint astride the highroad where it climbs from the city ` +
      `toward the shrine-hills — the dread sekisho, where the shogun's wardens ` +
      `search every traveller under the standing law of the realm: "no guns to ` +
      `enter the capital, and no women to leave it." For the lords' wives and ` +
      `children are held here as hostages against their fathers, and a woman on ` +
      `the outbound road without a sealed pass is a rebellion in the making. The ` +
      `wardens are courteous, and thorough, and armed.`);
    link('road_barrier', 'n', 'shr_torii');        // the Shrine Precinct

    /* ================================================================= *
     *  IV. THE WARRIORS' QUARTER  (22) — samurai & daimyo.
     * ================================================================= */
    room('sam_gate', 'The Warriors\' Gate',
      `A guarded gate where the teeming Low City ends and the hushed, ordered ` +
      `world of the sword-caste begins — long white walls, wide swept streets, ` +
      `and a sudden quiet, for the two-sworded men who dwell within do not ` +
      `haggle, do not hurry, and do not suffer the crowd. A commoner passes here ` +
      `on sufferance, eyes down, and is glad to pass on.`);
    room('sam_odori', 'The Avenue of Mansions',
      `A broad, silent avenue between the endless white walls of the daimyo ` +
      `mansions — the yashiki of the great lords, each a walled town of its own, ` +
      `their long barrack-fronts pierced by a single stern gate. It is the ` +
      `stillest wealthy street in the realm, its silence enforced by the ` +
      `knowledge that behind every wall are men whose trade is the sword and ` +
      `whose law is their own.`);
    room('sam_gatehouse2', 'The Inner Barrier',
      `A second, sterner barrier before the castle moat, where none passes ` +
      `toward the keep without rank and warrant. The guards kneel at their posts ` +
      `with the eerie stillness of the well-drilled, and the great white towers ` +
      `of the shogun's castle rise beyond, close now, floating above their moat ` +
      `like a vision of a heron about to take wing.`);
    room('sam_stable', 'The Riding-Ground',
      `A raked sand ground where the mounted samurai school their horses and ` +
      `themselves in the old disciplines — the wheeling charge, the bow drawn ` +
      `from the gallop, the arrow loosed at the small wooden target as horse and ` +
      `man flow as one. It is half war-craft and half religion, and the ` +
      `hoof-thunder on the sand is the oldest music of the caste.`);
    room('sam_dojo', 'The Fencing School',
      `A bare-floored hall loud with the crack of wooden swords and the roar of ` +
      `the fencers' cries, where the young bushi are ground down and built back ` +
      `up in the way of the blade. The master sits in silence at the head of the ` +
      `hall; a word from him is worth a year. On the wall hangs the school's one ` +
      `commandment, brushed huge: THE BLADE THAT KILLS, THE BLADE THAT GIVES ` +
      `LIFE, ARE ONE.`);
    room('sam_archery', 'The Archery Range',
      `A long covered range where the archers loose the tall asymmetric bow of ` +
      `the realm at the distant round target — but the mark, the master will ` +
      `tell you, is not the point; the point is the drawing, the breath, the ` +
      `release, the self forgotten in the arc of it. A man may spend a life here ` +
      `and count it well spent if, once, an arrow leaves him without his ` +
      `willing it.`);
    room('sam_ronin', 'The Ronin\'s Doss',
      `A cheap lodging on the quarter's ragged edge, where the ronin gather — ` +
      `the "wave-men," samurai whose lords have fallen or cast them off, adrift ` +
      `now like waves with no shore, their topknots wild, their fine manners ` +
      `frayed, their two swords the last of their honour and often the first ` +
      `thing pawned. They drink, and brood on old wrongs, and hire out their ` +
      `blades, and are the most dangerous men in Miyako precisely because they ` +
      `have nothing left to lose.`);
    room('sam_yashiki1', 'The Gate of a Great House',
      `The single formal gate of a daimyo's mansion — a roofed and studded ` +
      `nagaya-gate, its guardroom windows blind to the street, its lord's crest ` +
      `stark above the lintel. Through this eye of the needle the whole life of ` +
      `the great house passes, ranked and announced; and a caller of the wrong ` +
      `degree waits at it, sometimes, until he dies of it.`);
    room('sam_yashiki2', 'The Mansion Forecourt',
      `Within the gate, a raked gravel forecourt before the great house's ` +
      `entrance-hall, where visitors are received according to a code of ` +
      `standing so fine that a mat's width nearer the dais is a triumph and a ` +
      `step too far is death. Every stone is placed, every pine is bent by ` +
      `decades of the gardener's wire. Nothing here is accidental, least of all ` +
      `the intimidation.`);
    room('sam_yashiki3', 'The Reception Hall',
      `A great matted hall of sliding painted screens — gold-ground tigers and ` +
      `pines and cranes — where the lord receives, seated before an alcove ` +
      `holding one scroll and one flower, chosen for the season and the guest. ` +
      `The screens can be slid away to throw hall and garden into one, or slid ` +
      `to for a murder; the same beautiful paper walls the realm's whole art of ` +
      `power. A sacred avenue leads west toward the Emperor's enclosure.`);
    room('sam_garden', 'The Lord\'s Garden',
      `A stroll-garden of borrowed distance and studied wildness — a pond shaped ` +
      `to a word, a hill raised to hide the next view and reveal it, a stone ` +
      `set just so, a whole imagined landscape folded into an acre behind the ` +
      `wall. It is meant to be walked slowly, and read, like a poem; and like a ` +
      `poem it is the discipline of a lifetime made to look like ease.`);
    room('sam_hostage', 'The Hostage Quarters',
      `The inner apartments where the lord's wife and heir dwell the year ` +
      `round — for by the shogun's iron custom every daimyo must leave his ` +
      `family in the capital when he returns to his lands, hostages against his ` +
      `loyalty, and must himself attend the shogun in alternate years, the ` +
      `ruinous march back and forth draining his treasury and his rebellion ` +
      `alike. Gilded, guarded, and never free, the great ladies of the realm ` +
      `keep their long captivity with perfect grace.`);
    room('sam_school', 'The Domain School',
      `A school kept by a great house for the sons of its retainers, where the ` +
      `young bushi are drilled in the mainland classics, the histories, the ` +
      `calligraphy, and above all the Way of the Warrior — the code of loyalty, ` +
      `honour, and unhesitating death that binds the caste. They chant the old ` +
      `sages in unison, and learn that to serve is to be, and that the flower ` +
      `of the warrior is to fall.`);
    room('sam_smith', 'The Sword-Polisher',
      `The studio of the polisher, a craft as revered as the smith's own — for ` +
      `the finished blade is brought here to be ground and burnished through ` +
      `fifteen grades of stone until the very grain of the folded steel, the ` +
      `"ground" and the tempered "blade-pattern," stand out like moonlit water. ` +
      `The polisher reads a sword's whole history in its surface, and will not ` +
      `be hurried, and works kneeling, in silence, at the soul of the realm.`);
    room('sam_armorer', 'The Armorer',
      `The workshop of the armorer, who laces the lord's harness of lacquered ` +
      `iron scales into a thing at once monstrous and exquisite — the ` +
      `horned helm, the grimacing war-mask, the great skirts of plate, all bound ` +
      `in silk cords of the house's colours. Hung on its stand, empty, the ` +
      `armor keeps the shape of a crouching man, and seems only to be waiting.`);
    room('sam_shrine', 'The War-God\'s Shrine',
      `The quarter's shrine to the kami of war and the bow, where the warriors ` +
      `come before a duel or a campaign to clap and bow and ask the god's ` +
      `favour — and where the same god is thanked, after, by the survivors, in ` +
      `a silence heavier than any battlefield. The votive plaques here are ` +
      `painted with horses and arrows and, more and more of late, with the ` +
      `single word: PEACE.`);
    room('sam_graves', 'The Warriors\' Cemetery',
      `A grove of moss and stone lanterns and the tall grave-markers of the ` +
      `sword-caste, ranked in death as in life. In one corner, tended fresh, lie ` +
      `the graves of a band of retainers who avenged their wronged lord and then, ` +
      `to the law's command and their own code's, opened their bellies to a ` +
      `man — and are worshipped now as the very flower of loyalty, their story ` +
      `wept over in every theatre in the realm.`);
    room('sam_seppuku', 'The Court of the Last Duty',
      `A small, immaculate, gravelled court kept for one purpose — the ` +
      `performance of the last duty, seppuku, the honourable death by one's own ` +
      `hand that the caste holds finer than any dishonour. A white mat, a low ` +
      `stand for the short sword, a screen: the whole grave etiquette of ending ` +
      `oneself is here reduced to a terrible, beautiful simplicity. It is swept, ` +
      `always, and ready.`);
    room('sam_watch', 'The Watch-Post',
      `A guard-post of the samurai police who keep the sword-caste's own order — ` +
      `for a commoner's crime is a magistrate's business, but a warrior answers ` +
      `to warriors. They lounge with their iron truncheons and their catch-poles ` +
      `and their air of bored lethal competence, and note, without seeming to, ` +
      `every face that passes into the quarter.`);
    room('sam_lane', 'The Retainers\' Row',
      `A humbler lane of the lower bushi — the foot-soldiers and clerks and ` +
      `poor cousins of the sword-caste, who keep up the two swords and the shaved ` +
      `pate and the fierce pride on a stipend of rice that shrinks each year ` +
      `against the merchants' rising prices. Their gates are plain, their gardens ` +
      `small and perfect, and their poverty is a matter of the most rigid ` +
      `honour, and no small bitterness.`);
    room('sam_well', 'The Samurai Well',
      `A stone well in a corner of the quarter, where even the sword-caste must ` +
      `draw water — though a servant does the drawing, and the samurai only ` +
      `waits, straight-backed, hand near hilt from a habit older than thought. ` +
      `A camellia leans over the wall and drops its heavy red flowers whole, ` +
      `like severed heads, onto the swept stones.`);
    room('sam_teahouse', 'The Martial Teahouse',
      `A spare tea-room where the warriors take the Way of Tea — for the caste ` +
      `that lives by the sword reveres also this: the low door that humbles ` +
      `every rank to a crawl, the single flower, the bowl turned just so, the ` +
      `whole world narrowed to one perfect, impermanent hour of shared silence. ` +
      `The same hand that will kill without a tremor whisks the green froth with ` +
      `a monk's devotion. The realm sees no contradiction. The realm is the ` +
      `contradiction.`);

    link('sam_gate', 'n', 'sam_odori');
    link('sam_odori', 'n', 'sam_gatehouse2');
    link('sam_odori', 'e', 'sam_dojo');
    link('sam_odori', 'w', 'sam_yashiki1');
    link('sam_odori', 'ne', 'sam_school');
    link('sam_odori', 'nw', 'sam_shrine');
    link('sam_odori', 'se', 'sam_watch');
    link('sam_odori', 'sw', 'sam_lane');
    link('sam_gatehouse2', 'e', 'sam_stable');
    link('sam_dojo', 'e', 'sam_archery');
    link('sam_dojo', 's', 'sam_ronin');
    link('sam_yashiki1', 'w', 'sam_yashiki2');
    link('sam_yashiki2', 'w', 'sam_yashiki3');
    link('sam_yashiki2', 'n', 'sam_garden');
    link('sam_yashiki2', 's', 'sam_hostage');
    link('sam_school', 'n', 'sam_smith');
    link('sam_smith', 'e', 'sam_armorer');
    link('sam_shrine', 'w', 'sam_graves');
    link('sam_graves', 's', 'sam_seppuku');
    link('sam_lane', 'w', 'sam_well');
    link('sam_lane', 's', 'sam_teahouse');
    // Gateways:
    link('sam_gatehouse2', 'n', 'cas_otemon');     // the castle
    link('sam_yashiki3', 'w', 'pal_gate');         // the Emperor's enclosure

    /* ================================================================= *
     *  V. THE WHITE HERON KEEP  (22) — the Shogun & the Bakufu.
     * ================================================================= */
    room('cas_otemon', 'The Great Gate',
      `The main gate of the shogun's castle: a colossal iron-studded portal set ` +
      `in a dog-leg of cyclopean stone walls, so that an attacker who breaches ` +
      `the first gate is trapped in a killing-box beneath the second. The ` +
      `fitted granite blocks, house-sized and jointed without mortar, seem the ` +
      `work of giants. The guards' eyes pass over you and find you, correctly, ` +
      `beneath their notice.`);
    room('cas_bridge', 'The Moat Bridge',
      `A wooden bridge across the broad inner moat, whose black water mirrors ` +
      `the white towers so perfectly that the castle seems to float on its own ` +
      `reflection, doubled, a heron and its shadow. Swans move on the water. The ` +
      `bridge is timber, not stone, by design — a thing that can be fired and ` +
      `dropped in an hour, should the unthinkable come knocking.`);
    room('cas_moat', 'The Inner Moat',
      `The still green moat within the walls, wide as a lake, planted at its ` +
      `margins with iris and patrolled by the castle's swans and, less ` +
      `visibly, its guards. Great carp move in the depths, some (the keepers ` +
      `swear) old enough to have watched the castle raised. To fall in ` +
      `uninvited is to be fished out, if lucky, by men with very hard eyes.`);
    room('cas_ninomaru', 'The Second Bailey',
      `The second ring of the castle, a spacious ward of guard-barracks, ` +
      `offices, and a famous garden, where the machinery of the shogun's ` +
      `government has its lesser desks. Officials hurry on their errands with ` +
      `the self-important glide of men close to power; the click of an abacus ` +
      `and the whisper of the writing-brush are the true weapons stored here.`);
    room('cas_guard', 'The Guardhouse',
      `The barrack-hall of the hatamoto, the "bannermen" — the shogun's own ` +
      `sworn guard, the elite of the sword-caste, who hold their lives at his ` +
      `word and their honour above their lives. They drill, they wait, they ` +
      `watch; the corridors of the keep are lined, at need, with them, kneeling, ` +
      `motionless, a wall of loyal steel that no assassin has yet passed.`);
    room('cas_armory', 'The Armory',
      `Racks upon lacquered racks of the shogunate's arms — the long spears, the ` +
      `pole-arms with their cruel curved blades, the matchlock guns kept oiled ` +
      `and counted and, by policy, from ever growing too numerous, for the realm ` +
      `has looked hard at what the gun did elsewhere and chosen, almost alone in ` +
      `the world, to freeze it. The sword still rules here. It is meant to, ` +
      `forever.`);
    room('cas_stable', 'The War-Stables',
      `The stables of the shogun's warhorses, stocky and fierce, groomed to a ` +
      `gloss and exercised daily against a war that has not come in living ` +
      `memory and may never come again — for the great peace the shogunate ` +
      `keeps is its whole justification, and its slow poison. The grooms polish ` +
      `harness that will likely never see a field, with a devotion undimmed by ` +
      `the fact.`);
    room('cas_garden', 'The Strolling Garden',
      `A vast landscape-garden within the walls, a whole province in miniature — ` +
      `its ponds standing for seas, its raked gravel for rivers, its clipped ` +
      `hills for the mountains of the realm, each turn of the path composing a ` +
      `new perfect view. The shogun walks here to think, and to be seen to be ` +
      `calm, and the gardeners tend a serenity that is itself a kind of ` +
      `statecraft.`);
    room('cas_teahouse', 'The Garden Teahouse',
      `A tiny thatched tea-hut set among the garden's pines, reached by a path ` +
      `of stepping-stones laid to slow the foot and still the mind, its doorway ` +
      `so low that even the shogun must bow and crawl to enter — for in the ` +
      `tea-room, the fiction runs, all are equal before the bowl. Here the ` +
      `deadliest men in the realm have unbent, for the space of a whisked cup, ` +
      `into something almost like peace.`);
    room('cas_shrine', 'The Castle Shrine',
      `A small shrine to the guardian-kami of the keep, tended by the castle's ` +
      `own priest, where the fortunes of the shogunate are prayed for and the ` +
      `foundation-spirits appeased. It is said a living soul was once buried in ` +
      `the great wall's base to hold the castle up — a "human pillar" — and that ` +
      `on still nights the shrine-lamp gutters when there is no wind, and no one ` +
      `will speak of why.`);
    room('cas_honmaru', 'The Main Bailey',
      `The innermost ward, the sacred heart of the castle, where the great ` +
      `palace-halls of the shogun spread their grey tiled roofs beneath the ` +
      `soaring white keep. Here the realm is truly ruled — not by the god-emperor ` +
      `in his enclosure across the city, but here, in these matted halls, by the ` +
      `Lord of the Tent and his council. The very gravel is raked to a hush.`);
    room('cas_keep', 'The White Heron Keep',
      `The great tower itself, five soaring roofs of white plaster and grey tile ` +
      `stacked like the spread wings of a heron poised to fly — the tallest and ` +
      `most beautiful thing made by the hands of the realm, and the most ` +
      `feared. It has never been attacked, never been needed, and dominates the ` +
      `whole city and the whole imagination of the empire simply by standing ` +
      `there, white and perfect, above its black moat.`);
    room('cas_keeptop', 'The Tower Summit',
      `The topmost chamber of the keep, its shuttered windows opening on the ` +
      `whole of Miyako laid out below like a painted map — the grid of the ` +
      `wards, the coil of the Ōkawa, the far glint of the sea, and, floating ` +
      `serene above it all, the white cone of Mount Shiratake. From here one man ` +
      `may see, if not everything, then the appearance of everything, which in ` +
      `the art of the realm is very nearly the same.`);
    room('cas_ooku', 'The Inner Chambers',
      `The sealed women's palace, the great harem of the shogunate, where alone ` +
      `among all the realm's men the shogun may pass — a hidden world of ` +
      `hundreds of women, wives and consorts and their armies of attendants, ` +
      `governed by its own iron etiquette and its own deadly intrigues. More ` +
      `than one succession has been decided in these perfumed rooms, and more ` +
      `than one shogun quietly ruled from them.`);
    room('cas_ohiroma', 'The Great Audience Hall',
      `A vast hall of a thousand mats, its ceiling coffered in gold, where the ` +
      `shogun receives the assembled lords of the realm in ranks that stretch ` +
      `away into the shadowed distance — and a daimyo's whole standing is written ` +
      `in how many mat-lengths from the dais he is permitted to bow his forehead ` +
      `to the floor. The silence, when the shogun enters, is the silence of ` +
      `three hundred lords not daring to breathe.`);
    room('cas_shoin', 'The Shogun\'s Study',
      `The shogun's own study, an exquisite room of sliding screens painted with ` +
      `a single vast pine, a writing-alcove, staggered shelves of lacquer and ` +
      `books — the very model of the realm's ideal of cultivated power. Here the ` +
      `Lord of the Tent reads the endless reports of his spies, brushes the ` +
      `curt orders that move provinces, and cultivates the calm that is his ` +
      `chief instrument of rule.`);
    room('cas_council', 'The Council Chamber',
      `The chamber of the Council of Elders, the handful of great hereditary ` +
      `retainers who are the true government of the realm — the Bakufu, the ` +
      `"tent-government," a name kept from the war-camps of the founding shoguns ` +
      `though the tent has been white stone for centuries. Here, in murmured ` +
      `agreement over trays of tea, the fate of thirty million souls is settled ` +
      `by half a dozen grave old men.`);
    room('cas_metsuke', 'The Office of the Eyes',
      `The bureau of the metsuke, the shogun's censors and secret inspectors — ` +
      `"the Eyes" — whose informers stand in every market and whose reports ` +
      `reach into every domain, watching for the one thing the realm cannot ` +
      `abide: change. Forbidden books, foreign ideas, a lord grown too rich or ` +
      `too loved, a whisper of the barbarians' faith — all are noted here, in a ` +
      `flat clerk's hand, and dealt with, quietly, at leisure.`);
    room('cas_treasury', 'The Gold Vault',
      `The shogunal treasury, where the great oval gold koban are stacked in ` +
      `their thousands behind iron and oath — the sinew of the tent-government, ` +
      `won from the gold-mountains the realm guards more jealously than any ` +
      `secret. It was gold that gave Zipang its western name and its western ` +
      `legend; and it is gold, the elders know, that will one day bring the ` +
      `black ships down upon them.`);
    room('cas_archive', 'The Record House',
      `A fireproof storehouse of the shogunate's records — the domain-registers, ` +
      `the census of every soul by caste and creed, the endless documentation of ` +
      `a realm that governs by knowing precisely where everyone belongs and ` +
      `permitting no one to be anywhere else. To be unrecorded here is not to ` +
      `exist; to be misrecorded is to be, at a stroke of the brush, unmade.`);
    room('cas_kitchen', 'The Great Kitchens',
      `The castle's cavernous kitchens, where an army of cooks prepares the ` +
      `shogun's table and the daily feeding of the vast household — the tasters ` +
      `sampling each dish twice against poison, the finest rice in the realm ` +
      `steaming in its cedar tubs, the sea's best laid out raw on beds of ` +
      `shaved ice run down from the mountain. Nothing here is merely food. ` +
      `Everything is protocol.`);
    room('cas_wellyard', 'The Castle Well',
      `A deep, sweet, secret well within the innermost ward — for a castle that ` +
      `may one day be besieged must never thirst, and this water, guarded and ` +
      `pure, is the keep's held breath against a war that peace has made almost ` +
      `unimaginable. A stone dragon spouts it into a mossy basin, endlessly, ` +
      `into the long quiet of the great peace.`);

    link('cas_otemon', 'n', 'cas_bridge');
    link('cas_bridge', 'n', 'cas_ninomaru');
    link('cas_bridge', 'e', 'cas_moat');
    link('cas_ninomaru', 'n', 'cas_honmaru');
    link('cas_ninomaru', 'e', 'cas_guard');
    link('cas_ninomaru', 'w', 'cas_garden');
    link('cas_guard', 'e', 'cas_armory');
    link('cas_guard', 's', 'cas_stable');
    link('cas_garden', 'w', 'cas_teahouse');
    link('cas_garden', 's', 'cas_shrine');
    link('cas_honmaru', 'n', 'cas_keep');
    link('cas_honmaru', 'e', 'cas_ohiroma');
    link('cas_honmaru', 'w', 'cas_council');
    link('cas_honmaru', 'ne', 'cas_kitchen');
    link('cas_honmaru', 'nw', 'cas_wellyard');
    link('cas_keep', 'u', 'cas_keeptop');
    link('cas_keep', 'e', 'cas_ooku');
    link('cas_ohiroma', 'e', 'cas_shoin');
    link('cas_council', 'w', 'cas_metsuke');
    link('cas_council', 's', 'cas_treasury');
    link('cas_treasury', 'w', 'cas_archive');

    /* ================================================================= *
     *  VI. THE NINEFOLD ENCLOSURE  (18) — the Radiant Emperor.
     * ================================================================= */
    room('pal_gate', 'The Vermilion Gate',
      `A gate of deep cinnabar red, the threshold of the imperial enclosure, ` +
      `guarded by court nobles in the antique robes of a thousand years ago — ` +
      `for here the shogun's iron world gives way to something older, stranger, ` +
      `and more useless: the sacred seclusion of the Radiant Emperor, the living ` +
      `god who reigns over all and rules nothing at all. The very colours ` +
      `change. Time changes. You lower your eyes.`);
    room('pal_avenue', 'The Sacred Avenue',
      `A broad avenue of raked white gravel between walls of aged cypress, so ` +
      `still that your own footfall seems an impertinence. No merchant, no ` +
      `soldier, no noise of the getting-and-spending world reaches here. This ` +
      `is the approach to the oldest continuous thing in the empire — a line of ` +
      `god-emperors unbroken, they swear, since the sun-mother's grandchild ` +
      `first came down to rule the reed-plains.`);
    room('pal_kagura', 'The Kagura Stage',
      `An open cypress stage where the sacred dances are performed for the ` +
      `kami — slow, masked, immemorial, a music of flute and drum older than the ` +
      `realm's memory of itself. It was to lure the sun-goddess Amateru from the ` +
      `cave where she hid the world in darkness, the oldest tale runs, that the ` +
      `first such dance was danced; and the emperor is her blood, and the ` +
      `dancing has never stopped.`);
    room('pal_enclosure', 'The Ninefold Enclosure',
      `The heart of the imperial palace, a serene compound of low cypress halls ` +
      `with sweeping bark roofs, screened court within court within court — the ` +
      `"Ninefold Enclosure," so deep in its wrappings of wall and rank and ` +
      `ritual that the god at its centre is scarcely glimpsed by living eyes. It ` +
      `is poorer than the shogun's castle, and older, and infinitely more ` +
      `sacred, and knows it, and waits.`);
    room('pal_grove', 'The Sacred Grove',
      `An ancient grove within the walls, the trees roped with the white ` +
      `paper-and-straw of the kami, never felled, never pruned, left to their ` +
      `own slow sacred wildness in the very heart of the ordered capital — a ` +
      `patch of the first forest, the god-time, preserved like a held breath at ` +
      `the centre of everything.`);
    room('pal_shrine', 'The Inner Shrine',
      `The holiest place in the enclosure: a small, plain, perfect shrine of ` +
      `unpainted cypress, dedicated to Amateru the sun-mother, ancestress of the ` +
      `imperial line — a building so sacred it is rebuilt identically every ` +
      `generation and the old one dismantled, so that it is always new and ` +
      `always immeasurably old at once. Only the emperor and the highest priests ` +
      `may approach. You may not.`);
    room('pal_regent', 'The Regent\'s Chambers',
      `The apartments of the regent, the great court noble who "assists" the ` +
      `emperor — which is to say, in the long stretches when the emperor is a ` +
      `child or merely a symbol, speaks and rules in his sacred name. For a ` +
      `thousand years the true power at court has been the regent's, and the ` +
      `regent's family's, a shadow-dynasty behind the divine one, and the game ` +
      `of it is played still, in whispers, over incense.`);
    room('pal_scribes', 'The Bureau of Records',
      `The office of the court chroniclers, who keep the imperial annals in the ` +
      `stately old mainland script — the reign-names, the omens, the rites, the ` +
      `poems, the unbroken sacred story of the line. Here history is not what ` +
      `happened but what is written to have happened, and the two have parted ` +
      `company so long ago that no one now can tell, or would dare to.`);
    room('pal_court', 'The Court of the Chrysanthemum',
      `The formal court of the imperial house, whose emblem is the ` +
      `sixteen-petalled chrysanthemum, the sun made flower. Here the court ` +
      `nobles in their lacquered black caps and trailing robes conduct the ` +
      `endless ceremonial year — the rites for the seasons, the stars, the ` +
      `harvest, the dead — a civilization's whole memory kept alive as pure ` +
      `performance, exquisite and powerless and old beyond telling.`);
    room('pal_throne', 'The Hall of the Morning',
      `The imperial throne-hall, where the Radiant Emperor sits — when he sits ` +
      `at all — behind a bamboo blind, that no common eye may look upon the face ` +
      `of the living god. He is the Son of the Morning, descended of the sun; ` +
      `every calendar, every reign-name, every harvest-rite flows from his ` +
      `sacred person; and he owns, in plain fact, nothing, commands nothing, and ` +
      `has not left this enclosure in the memory of anyone alive.`);
    room('pal_regalia', 'The Hall of the Three Treasures',
      `The shrine-hall of the imperial regalia — the mirror, the sword, and the ` +
      `curved jewel, handed down (the faith holds) from the sun-goddess herself ` +
      `to the first emperor, the very proof and vessel of the divine right to ` +
      `reign. No one living has seen all three. They are wrapped, and wrapped ` +
      `again, and worshipped unseen; and whoever holds them is emperor, and ` +
      `whoever does not, is not, however many swords he commands.`);
    room('pal_gate2', 'The Cloud Gallery',
      `A long roofed corridor of polished cypress, its floor a "nightingale ` +
      `floor" cunningly built to chirp and sing beneath the lightest foot, so ` +
      `that no assassin may cross it unheard. It links the sacred halls, and its ` +
      `music of betraying birdsong under every step is the sound of a court that ` +
      `has feared the knife in the dark for a thousand quiet years.`);
    room('pal_poetry', 'The Hall of Poetry',
      `A hall where the courtiers practise the one art the powerless court has ` +
      `raised above all others — the thirty-one-syllable verse, the little ` +
      `perfect poem of season and longing and the sad passing of things. ` +
      `Emperors have been judged by their verses and marriages made by them; a ` +
      `misplaced word here outweighs a battle; and the whole doomed refinement ` +
      `of the court distils, at last, into a single line about a falling leaf.`);
    room('pal_music', 'The Hall of Elegant Music',
      `The hall of the court orchestra, keepers of the most ancient music in the ` +
      `realm — the slow, strange, ceremonial court-music, all reed-organ drone ` +
      `and gong and stately measure, brought from the mainland a thousand years ` +
      `ago and frozen note-perfect ever since. It is played for the kami and the ` +
      `emperor and almost no one else, and to hear it is to hear time itself ` +
      `holding very still.`);
    room('pal_ladies', 'The Ladies\' Court',
      `The apartments of the court ladies, behind their screens and blinds — the ` +
      `most cultivated women in the world, who in the long idle centuries of the ` +
      `powerless court perfected the arts of scent, of dress, of the coded ` +
      `love-letter, and, greatest of all, of the written tale, so that the ` +
      `realm's first and finest novel was brushed by a lady of this very court, ` +
      `behind a blind, about exactly such a world as this.`);
    room('pal_garden', 'The Moon-Viewing Garden',
      `A garden made not for the sun but the moon — its pale sand and white ` +
      `flowers and still water composed to hold and multiply the moonlight, with ` +
      `a raised platform from which the court views the autumn moon and vies to ` +
      `praise it best in verse. The realm has raised the appreciation of ` +
      `beautiful, useless, passing things to the summit of its civilization, and ` +
      `nowhere higher than here.`);
    room('pal_pond', 'The Mirror Pond',
      `A still pond of dark water, banked with iris and stone, that holds the ` +
      `halls and the moon and the drifting cloud so perfectly it seems a second ` +
      `sky sunk in the earth. A single crane may stand in it for an hour without ` +
      `stirring the reflected world. The court comes to sit and look, and to ` +
      `feel, in the doubled stillness, the pleasant, cultivated sorrow it prizes ` +
      `above joy.`);
    room('pal_pavilion', 'The Golden Pavilion',
      `A three-storied pavilion sheathed in gold leaf, standing at the pond's ` +
      `edge and burning its own reflection into the water — the one extravagance ` +
      `of the austere court, a retreat for contemplation so beautiful it stops ` +
      `the breath. A gold phoenix spreads its wings on the roof-ridge, facing ` +
      `the sunrise, the emblem of a realm that calls itself the origin of the ` +
      `morning and has shut its doors against the day.`);

    link('pal_gate', 'w', 'pal_avenue');
    link('pal_avenue', 'w', 'pal_enclosure');
    link('pal_avenue', 'n', 'pal_kagura');
    link('pal_enclosure', 'w', 'pal_court');
    link('pal_enclosure', 'n', 'pal_grove');
    link('pal_enclosure', 's', 'pal_regent');
    link('pal_grove', 'w', 'pal_shrine');
    link('pal_regent', 's', 'pal_scribes');
    link('pal_court', 'w', 'pal_throne');
    link('pal_court', 'n', 'pal_poetry');
    link('pal_court', 's', 'pal_ladies');
    link('pal_court', 'nw', 'pal_garden');
    link('pal_throne', 'w', 'pal_regalia');
    link('pal_throne', 'n', 'pal_gate2');
    link('pal_poetry', 'w', 'pal_music');
    link('pal_garden', 'w', 'pal_pond');
    link('pal_pond', 'n', 'pal_pavilion');

    /* ================================================================= *
     *  VII. THE WILLOW-WORLD  (22) — the floating pleasure-quarter.
     * ================================================================= */
    room('wil_gate', 'The Great Gate',
      `The single great gate of the Willow-World, the walled and moated ` +
      `pleasure-quarter — the one door in and the one door out, watched day and ` +
      `night, through which a man passes out of the rigid caste-bound realm into ` +
      `the "floating world," where for a night, and a price, the merchant may ` +
      `outrank the samurai and everyone is only as good as their wit and their ` +
      `purse. A single willow leans over the gate. Beyond it, the ordinary laws ` +
      `of the empire politely suspend themselves.`);
    room('wil_nakanocho', 'The Central Boulevard',
      `The great central avenue of the quarter, planted down its spine with ` +
      `cherry trees that are dug up and replaced, blossoming, each spring and ` +
      `hauled away when they fade — for the floating world will suffer nothing ` +
      `to be seen dying. Teahouses and assignation-houses line it, lantern on ` +
      `lantern; the air is music and powder and sandalwood; and the whole ` +
      `glittering, ruinous machinery of pleasure hums around you.`);
    room('wil_procession', 'The Courtesan\'s Walk',
      `The stretch of the boulevard where the great courtesans process to their ` +
      `evening appointments — the stately, impossibly slow figure-of-eight ` +
      `glide, towering on lacquered clogs a foot high, robed in a fortune of ` +
      `silk, hair a scaffold of tortoiseshell pins, attended by a train of ` +
      `child-maids and lantern-bearers. The crowd falls silent to watch a woman ` +
      `worth a daimyo's ransom walk fifty yards to sell an evening of her ` +
      `company.`);
    room('wil_oiran', 'The High Courtesan\'s House',
      `The establishment of the great tayū, the highest courtesans — artists, ` +
      `not merely women for sale, schooled from childhood in music, poetry, ` +
      `calligraphy, the tea-ceremony, the art of conversation and the crueller ` +
      `art of refusal, for a tayū chooses her patron and may reject a lord. To ` +
      `be received here is a triumph; to be ruined here is a tradition; and the ` +
      `beautiful captives at its heart are the most celebrated and least free ` +
      `women in the realm.`);
    room('wil_ageya', 'The House of Assignation',
      `The grandest of the assignation-houses, where a patron of means engages ` +
      `a great courtesan not for an hour but for an evening's elaborate ` +
      `courtship — the banquet, the music, the games, the poems, the slow ` +
      `ritual approach across two or three ruinous meetings before any favour is ` +
      `so much as hinted. To buy the floating world's love, one must first, ` +
      `expensively, pretend it cannot be bought.`);
    room('wil_parlor', 'The Latticed Parlor',
      `A lantern-lit room fronted by a wooden lattice open to the street, behind ` +
      `which the lower courtesans sit displayed in their finery for the ` +
      `strolling men to appraise — a cruel, gorgeous shop-window of the ` +
      `floating world, the women within playing the samisen, smoking, feigning ` +
      `indifference, each hoping to be chosen and dreading it. Behind the paint, ` +
      `the eyes do the real, exhausted business of survival.`);
    room('wil_teahouse1', 'The Introducing Teahouse',
      `A discreet teahouse where a patron is vetted, advised, and introduced — ` +
      `for one does not simply walk up to a great courtesan; one is presented, ` +
      `through the teahouse mistress, who knows every purse and pedigree in the ` +
      `quarter and takes her cut of the whole slow dance. She is the true broker ` +
      `of the floating world, all smiles and steel, and forgets nothing and ` +
      `no one.`);
    room('wil_teahouse2', 'The Lantern Teahouse',
      `A humbler teahouse of the middling sort, where clerks and small merchants ` +
      `spend an evening above their station — a few cups, a hired song, the ` +
      `company of a witty woman who will laugh at their jokes for the price of ` +
      `the sake. It is cheaper here, and warmer, and sadder, and more honest ` +
      `about what it is, which the grand houses never are.`);
    room('wil_kabuki', 'The Grand Kabuki Theatre',
      `The great popular theatre of the realm, a roaring house of colour and ` +
      `spectacle where the ` +
      `kabuki stars — idols of the whole city — strike their frozen poses to a ` +
      `crash of wooden clappers and the crowd screams their house-names in ` +
      `ecstasy. Ghosts fly on wires, stages revolve, villains snarl, lovers die ` +
      `beautifully; it is loud, gaudy, sublime, and disreputable, and the ` +
      `authorities have banished it out here to the quarter's edge and cannot ` +
      `for their lives kill its hold on the people's heart.`);
    room('wil_hanamichi', 'The Flower-Way',
      `The raised walkway that runs from the stage out through the very midst of ` +
      `the seated crowd — the "flower-way," down which the great actors make ` +
      `their entrances and their long, held, thunderous exits, close enough to ` +
      `touch, so that the audience is not watching the drama but standing in the ` +
      `road of it. When a star pauses here, mid-pose, the whole packed house ` +
      `stops breathing at once.`);
    room('wil_greenroom', 'The Actors\' Greenroom',
      `Behind the stage, the crowded tiring-room of the players — a fume of ` +
      `wig-glue and face-paint and nerves, where men become gods, demons, and, ` +
      `most prized of all, women: for by law no woman may tread the kabuki ` +
      `stage, and the female roles are held by the onnagata, men who study a ` +
      `womanhood more perfect than any woman's, on stage and, some, all their ` +
      `lives. Here they sit, half-transformed, neither and both.`);
    room('wil_geisha', 'The Geisha House',
      `The house of the geisha — the "arts-persons," and not to be confused, on ` +
      `pain of the mistress's cold fury, with the courtesans: these women sell ` +
      `not their bodies but their accomplishment, the flawless dance, the ` +
      `samisen, the razor wit, the art of making an evening turn to gold. They ` +
      `are the living museum of the realm's refinement, and the discreet ` +
      `keepers of half its secrets.`);
    room('wil_music', 'The Samisen School',
      `A room loud, then suddenly exquisite, with the three-stringed samisen — ` +
      `the plangent, biting, unmistakable voice of the floating world, taught ` +
      `here to the apprentice geisha and courtesans from childhood by a severe ` +
      `blind mistress who hears a wrong note before it is played. The instrument ` +
      `weeps and mocks and seduces, all in the one plucked phrase, and no sound ` +
      `says "the pleasure-quarter" so instantly to a subject of the realm.`);
    room('wil_noh', 'The Mirror Stage',
      `An austere theatre utterly unlike the kabuki's riot next door — the noh, ` +
      `the aristocrats' drama: a bare cypress stage, a painted pine, a single ` +
      `masked figure moving with unbearable slowness through a story of ghosts ` +
      `and longing and the sorrow of the world, to a keening flute and the sharp ` +
      `cries of the drummers. Where the kabuki shouts, the noh withholds; and in ` +
      `the withholding, the initiated find a grief too deep for the louder ` +
      `stage.`);
    room('wil_masks', 'The Mask-Carver\'s',
      `The studio of the noh mask-carver, where the small cypress masks are ` +
      `cut — the young woman, the old man, the demon, the vengeful ghost — each ` +
      `carved so subtly that a tilt of the actor's head turns joy to grief, the ` +
      `whole soul of the drama living in a fixed face that seems, impossibly, to ` +
      `change. The finished masks hang watching from the wall, and the carver ` +
      `speaks to them, and they, very nearly, answer.`);
    room('wil_kimono', 'The Kimono House',
      `A house of the floating world's finery — the towering robes of the ` +
      `courtesans, layer on silken layer, embroidered with cranes and waves and ` +
      `whole autumn hillsides in gold thread, worth more than the house that ` +
      `sells them. Here a courtesan's wealth and rank are worn on the back, ` +
      `quite literally; and here, too, a ruined patron's gifts are quietly ` +
      `pawned back, the same silk sold twice, thrice, as fortunes rise and set.`);
    room('wil_pawn', 'The Pawnshop',
      `A discreet, iron-doored pawnshop at the quarter's heart, doing the ` +
      `floating world's truest business — for pleasure here is bought on credit ` +
      `and paid for in ruin, and to this counter come the sword pledged for a ` +
      `night's folly, the heirloom, the last good robe, the deed to the shop. ` +
      `The pawnbroker weighs it all with a jeweller's eye and a moneylender's ` +
      `heart, and is the one man in the Willow-World who never, ever loses.`);
    room('wil_print', 'The Print-Studio',
      `The studio of an ukiyo-e master, where the images of the floating world ` +
      `are drawn to be cut and printed by the thousand — the reigning courtesan, ` +
      `the idol actor, caught in a few sure lines and sold cheap to every ` +
      `love-struck clerk in the realm. It is the quarter photographing itself, ` +
      `endlessly, into fame and immortality, one cheap bright sheet at a time.`);
    room('wil_moat', 'The Black-Ditch',
      `The stagnant moat that girdles the whole quarter — the "black-ditch," ` +
      `crossed only at the one guarded gate, that pens the courtesans within as ` +
      `surely as any prison wall, for they are bought children, indentured for ` +
      `years, and the moat is there less to keep the city out than to keep them ` +
      `in. Its black water has closed over more than one girl who chose it above ` +
      `another dawn inside the walls.`);
    room('wil_nighthawk', 'The Night-Hawks\' Row',
      `A mean, lightless lane against the moat where the lowest of the floating ` +
      `world ply their trade — the "night-hawks," the unlicensed streetwalkers, ` +
      `old before their time, plying the shadows the lantern-light does not ` +
      `reach. Here the glamour of the quarter falls away entirely, and only its ` +
      `machinery is left, grinding on in the dark. Rough men work this row, and ` +
      `rougher business.`);
    room('wil_infirmary', 'The Courtesans\' Infirmary',
      `A grim back-room where the sick of the quarter are tended, after a ` +
      `fashion — for the floating world uses its women up, and the diseases of ` +
      `the trade go untreated behind the paint until they cannot be hidden, and ` +
      `then the girl is quietly moved here, and then, quietly, elsewhere. The ` +
      `nurse is kind and tired and has seen it all a thousand times.`);
    room('wil_temple', 'The Requiem Temple',
      `A small, poor temple just without the black-ditch, where the courtesans ` +
      `who die in service — young, in debt, unmourned by families that sold ` +
      `them — are brought and buried without rite or name, tumbled into the ` +
      `common ground. The "throw-away temple," the quarter calls it. A single ` +
      `priest chants for them all. Now and then a former patron leaves a flower, ` +
      `and cannot, afterward, say quite why.`);

    link('wil_gate', 's', 'wil_nakanocho');
    link('wil_gate', 'e', 'wil_moat');
    link('wil_nakanocho', 's', 'wil_procession');
    link('wil_nakanocho', 'e', 'wil_teahouse1');
    link('wil_nakanocho', 'w', 'wil_kabuki');
    link('wil_nakanocho', 'ne', 'wil_geisha');
    link('wil_nakanocho', 'nw', 'wil_noh');
    link('wil_nakanocho', 'se', 'wil_kimono');
    link('wil_nakanocho', 'sw', 'wil_print');
    link('wil_procession', 's', 'wil_oiran');
    link('wil_procession', 'e', 'wil_ageya');
    link('wil_procession', 'w', 'wil_parlor');
    link('wil_teahouse1', 's', 'wil_teahouse2');
    link('wil_kabuki', 'n', 'wil_hanamichi');
    link('wil_kabuki', 's', 'wil_greenroom');
    link('wil_geisha', 'e', 'wil_music');
    link('wil_noh', 'w', 'wil_masks');
    link('wil_kimono', 's', 'wil_pawn');
    link('wil_moat', 'n', 'wil_infirmary');
    link('wil_moat', 's', 'wil_nighthawk');
    link('wil_infirmary', 'e', 'wil_temple');

    /* ================================================================= *
     *  VIII. THE TEMPLE DISTRICT  (20) — the Way of Silence.
     * ================================================================= */
    room('tem_gate', 'The Temple Gate',
      `A colossal two-storied gate of weathered timber marking the edge of the ` +
      `temple-lands — for the shogun, with an eye to more than piety, banked the ` +
      `great temples in a ring at the city's rim, a soft wall of prayer and ` +
      `firebreak and, at need, barracks. Two fierce guardian-giants glower from ` +
      `their niches. Beyond, the noise of the Low City fails, and the incense ` +
      `and the crows take over.`);
    room('tem_approach', 'The Pilgrim\'s Approach',
      `A long avenue of moss and stone lanterns climbing gently toward the great ` +
      `temple, lined with the gates of a dozen lesser sub-temples, each with its ` +
      `own small hall and graveyard and resident recluse. Pilgrims in white ` +
      `climb it telling their beads; the crows argue overhead; and the whole ` +
      `weight of the mainland's imported faith of stillness settles on the ` +
      `shoulders like a cool grey robe.`);
    room('tem_market', 'The Temple-Gate Market',
      `A cheerful, worldly market that has grown up, as they always do, at the ` +
      `holy gate — stalls of pilgrim-charms, prayer-beads, grilled dumplings, ` +
      `and cheap toys, for the crowds who come as much for the fair as the faith. ` +
      `The monks look on with practised tolerance. Salvation and a good day out, ` +
      `the realm has long understood, are not enemies.`);
    room('tem_teahouse', 'The Pilgrim\'s Teahouse',
      `A rest-house for the footsore faithful, all open reed-blinds and the ` +
      `smell of roasting tea, where pilgrims ease their feet, share the road's ` +
      `gossip, and eat the temple's famous sweet bean-cakes before the long ` +
      `climb up among the halls. The old woman who keeps it has poured tea for ` +
      `three generations of the devout and heard the confessions the monks ` +
      `never will.`);
    room('tem_nuns', 'The Nunnery',
      `A quiet walled convent of the shaven sisters, who have renounced the ` +
      `floating world for the still one — some in true devotion, some the ` +
      `cast-off wives and widows the realm has no other place for, some hiding ` +
      `from a marriage or a grief. They keep their garden and their offices and ` +
      `their peace, and ask the world only to be forgotten, which it obligingly ` +
      `is.`);
    room('tem_kannon', 'The Hall of Mercy',
      `A hall of the many-armed goddess of compassion, whose thousand gilded ` +
      `hands each hold a tool to save a drowning soul — the most beloved figure ` +
      `of the imported faith, to whom the desperate cry when all else fails. The ` +
      `hall is thick with the smoke of ten thousand petitions; the goddess ` +
      `regards them all with the same downcast, infinite, half-smiling calm.`);
    room('tem_jizo', 'The Jizo Field',
      `A field of small stone guardians, the jizo, protectors of travellers and ` +
      `of dead children — row upon row of little round-faced figures, and before ` +
      `each a red bib and a pinwheel and a heap of stones, left by grieving ` +
      `mothers to help their lost infants across the underworld river. The ` +
      `pinwheels turn in the wind, a soft clatter of small souls, and it is the ` +
      `saddest and gentlest ground in Miyako.`);
    room('tem_main', 'The Great Temple',
      `The vast main hall of the temple of the Serene One — the Awakened ` +
      `teacher of the mainland faith — its dim gold-glimmering interior heavy ` +
      `with incense and the drone of chanted sutra, its great serene image ` +
      `seated in the half-dark above the flames of a thousand candles. Here the ` +
      `realm's other soul is kept: not the bright kami of the living world, but ` +
      `the still, deep, mainland promise of release from it altogether.`);
    room('tem_buddha', 'The Hall of the Great Image',
      `A hall built around a single colossal bronze image of the Serene One, ` +
      `sitting three storeys high in eternal calm, green-black and vast, its ` +
      `half-closed eyes gazing over the heads of the ant-small faithful into ` +
      `some peace beyond the reach of the whole striving realm. A grown man may ` +
      `stand within the curl of its bronze hand. It has watched the city burn ` +
      `and rebuild a dozen times without the smallest change of expression.`);
    room('tem_bell', 'The Bell of Hours',
      `A great bronze temple-bell hung in an open tower, struck not with a ` +
      `clapper but with a swung wooden beam — and its huge, slow, brazen note, ` +
      `tolling the hours across the whole capital, is the very voice of time in ` +
      `Miyako, by which the city wakes, works, and sleeps. On the last night of ` +
      `the year it is struck one hundred and eight times, once for each of the ` +
      `sins that bind the soul, to ring the realm clean into the new.`);
    room('tem_incense', 'The Incense Hall',
      `A side-hall where the great bronze censer smokes eternally, and the ` +
      `faithful waft the healing smoke over an aching shoulder, a failing eye, a ` +
      `worried head, in the gentle old belief that the temple's incense mends ` +
      `what it touches. The air is a blue fog of sandalwood; the prayers rise ` +
      `with it; and a way leads on to the ground of the dead.`);
    room('tem_pagoda', 'The Five-Storied Pagoda',
      `A soaring pagoda of five diminishing roofs, built to enshrine a relic of ` +
      `the Serene One and to draw the eye and the soul upward — and built, too, ` +
      `with the realm's uncanny cunning in wood, on a single great central pillar ` +
      `that hangs free and sways against the storm and the earth-shudder, so ` +
      `that the tower dances where a rigid one would fall. It has stood a ` +
      `thousand years of quakes by the grace of knowing how to bend.`);
    room('tem_zen', 'The Meditation Hall',
      `A long, bare, immaculate hall where the monks sit in ranks facing the ` +
      `blank wall, seeking in stillness and aching legs and the sharp corrective ` +
      `stick across the shoulders the sudden wordless waking the mainland faith ` +
      `calls its whole aim. Nothing hangs here, nothing is taught, nothing is ` +
      `said; the silence is the sermon, and it is very loud.`);
    room('tem_garden', 'The Dry Garden',
      `A garden without a single living plant — only a rectangle of raked white ` +
      `gravel and a handful of moss-footed stones, placed so that from no ` +
      `vantage can all of them be seen at once. It is not a garden to walk in ` +
      `but to sit before, for years, until the raked gravel becomes the sea, the ` +
      `stones the islands, and the mind, at last, the still water between. It is ` +
      `the emptiest and fullest place in the realm.`);
    room('tem_gohyaku', 'The Hall of Five Hundred Saints',
      `A dim hall crowded with five hundred stone images of the enlightened ` +
      `disciples, and no two faces alike — one laughing, one weeping, one asleep, ` +
      `one lost in thought, one that (the pilgrims swear) is the very likeness of ` +
      `someone they have loved and lost. It is said that among the five hundred ` +
      `every soul may find its own face, if it looks long enough, and dares.`);
    room('tem_abbot', 'The Abbot\'s Quarters',
      `The spare, exquisite rooms of the abbot, all bare wood and one hanging ` +
      `scroll of a single brushed circle — the emptiness that is fullness — where ` +
      `the old master receives the great and the questing alike and answers ` +
      `their heaviest questions with a word, a laugh, a pour of tea, or nothing ` +
      `at all. He owns two robes and a bowl and is, quite possibly, the freest ` +
      `man in the empire.`);
    room('tem_sutra', 'The Sutra Repository',
      `A storehouse of the whole imported scripture, thousands of scrolls in a ` +
      `great revolving octagonal case — for it is taught that to give the case ` +
      `one full turn, though you read not a word, earns the merit of reading all ` +
      `it holds. The illiterate and the hurried push the mighty wheel around with ` +
      `a groan of old wood, and bow, and go, shriven by machinery, and who is to ` +
      `say they are wrong.`);
    room('tem_cemetery', 'The Temple Cemetery',
      `A hillside of the dead beneath the pines, terrace upon terrace of stone ` +
      `stupas and mossy markers, the family graves tended with fresh water, ` +
      `flowers, and a splash poured over the stone for the thirst of the dead. ` +
      `The great families lie near the halls, the poor further out among the ` +
      `bamboo; but the moss, in time, comes for all the names alike, and the ` +
      `temple finds this, on the whole, consoling.`);
    room('tem_charnel', 'The Charnel Ground',
      `A walled ground of the crematory-fires, where the dead of the district ` +
      `are given to the flame and the smoke goes up thin and grey among the ` +
      `pines — for the mainland faith burns its dead and gathers the bones, ` +
      `passing them hand to chopstick to urn in a rite that teaches, better than ` +
      `any sermon, the impermanence at the root of everything the realm ` +
      `believes. The attendants work gently, and speak low, and are never idle.`);
    room('tem_waterfall', 'The Purification Falls',
      `A cold cascade in the wooded temple-hill, where ascetics and the ` +
      `troubled stand beneath the pounding water at the freezing hour before ` +
      `dawn, chanting through chattering teeth, to scour the body and shock the ` +
      `spirit clean. It is a discipline, a penance, and a cure, and the water ` +
      `does not care which; it only falls, and falls, off the world's cold ` +
      `shoulder, forever.`);

    link('tem_gate', 'e', 'tem_approach');
    link('tem_gate', 's', 'tem_market');
    link('tem_market', 'e', 'tem_teahouse');
    link('tem_market', 's', 'tem_nuns');
    link('tem_approach', 'e', 'tem_main');
    link('tem_approach', 'n', 'tem_kannon');
    link('tem_approach', 's', 'tem_jizo');
    link('tem_main', 'n', 'tem_buddha');
    link('tem_main', 'e', 'tem_bell');
    link('tem_main', 's', 'tem_incense');
    link('tem_main', 'ne', 'tem_pagoda');
    link('tem_main', 'se', 'tem_zen');
    link('tem_incense', 'e', 'tem_cemetery');
    link('tem_cemetery', 's', 'tem_charnel');
    link('tem_charnel', 'e', 'tem_waterfall');
    link('tem_zen', 'e', 'tem_garden');
    link('tem_zen', 's', 'tem_abbot');
    link('tem_garden', 'e', 'tem_gohyaku');
    link('tem_abbot', 'e', 'tem_sutra');

    /* ================================================================= *
     *  IX. THE SHRINE PRECINCT  (16) — the Way of the Kami.
     * ================================================================= */
    room('shr_torii', 'The Great Torii',
      `A towering gateway of vermilion timber straddling the road — the torii, ` +
      `two uprights and a sweeping double lintel, that marks the threshold ` +
      `between the ordinary world and the dwelling of the kami. To pass beneath ` +
      `it is to step, by the oldest faith of the realm, out of the profane and ` +
      `into the sacred; and the air, whether by grace or long suggestion, does ` +
      `seem to change as you do.`);
    room('shr_avenue', 'The Avenue of a Thousand Torii',
      `A path that climbs the hill through an unbroken tunnel of vermilion ` +
      `torii, gate behind gate behind gate, each the gift of a grateful ` +
      `merchant or lord, so close-set that the daylight comes through in ` +
      `flickering red bars and the whole ascent is a passage through a living ` +
      `throat of the sacred. There is no counting them. "A thousand" is only the ` +
      `word the realm uses for "beyond number."`);
    room('shr_inari', 'The Fox Shrine',
      `A shrine to the rice-kami and to fortune, guarded by pairs of carved ` +
      `stone foxes — the god's sly messengers — with bibs of faded red about ` +
      `their necks and a key or a jewel in their jaws. The merchants throng it, ` +
      `for it grants worldly luck; and the foxes, the old tales warn, are not ` +
      `always stone, and not always kind, and a man who mocks them on this hill ` +
      `may find his road home strangely long.`);
    room('shr_approach', 'The Sando',
      `The broad gravel approach to the shrine proper, swept each dawn into ` +
      `raked perfection, walked always a little to the side — for the centre of ` +
      `the path, by custom, is the way of the god, and no mere mortal treads it. ` +
      `Stone lanterns march to either hand; a great old tree, roped and revered, ` +
      `leans across the way; and the crunch of the gravel underfoot is the ` +
      `sound of arrival.`);
    room('shr_temizu', 'The Purification Basin',
      `A stone basin of clear water fed by a bamboo spout, where every ` +
      `worshipper must first purify — rinse the left hand, the right, the mouth, ` +
      `the ladle's own handle, in the fixed and ancient order — for one does not ` +
      `approach the kami unclean. The water is cold off the hill and endlessly ` +
      `running, and the little rite of it settles the mind as surely as it ` +
      `cleans the hands.`);
    room('shr_ema', 'The Votive Wall',
      `A wall and racks hung thick with ema — small wooden plaques on which the ` +
      `faithful brush their prayers and hang them for the kami to read: a safe ` +
      `birth, a good harvest, a passed examination, a straying husband's return, ` +
      `a sick child's life. Thousands of them clack softly together in the wind, ` +
      `a whole city's hopes and fears written small and left swinging in the ` +
      `weather.`);
    room('shr_haiden', 'The Hall of Worship',
      `The open-fronted hall of worship, where the people make their offering — ` +
      `toss a coin into the slatted box, ring the great bell-rope to wake the ` +
      `god, bow twice, clap twice, pray, and bow once more, the plain democratic ` +
      `rite of the whole realm, performed by emperor and beggar in the selfsame ` +
      `form. Beyond it, screened, unenterable, waits the dwelling of the kami ` +
      `itself.`);
    room('shr_honden', 'The Inner Sanctuary',
      `The innermost sanctuary, the honden, the actual dwelling of the kami — a ` +
      `small, high, cypress-roofed hall entered by no one but the highest priest, ` +
      `and by him only rarely and in awe, for within, in a wrapped and shadowed ` +
      `secrecy, resides the god's own vessel, a mirror, a sword, a stone, that no ` +
      `layman has ever seen or ever will. The whole vast precinct exists to ` +
      `wrap this one small hidden thing in reverence.`);
    room('shr_sun', 'The Shrine of Amateru',
      `The high shrine of Amateru, the sun-goddess, from whom the imperial line ` +
      `descends and on whose sacred person the whole legitimacy of the realm is ` +
      `founded — for the emperor is her blood, and Yamato is her land, and the ` +
      `rising sun on every banner is her face. Her shrine is plain past all the ` +
      `others, unpainted cypress and white gravel, and holds, they say, her own ` +
      `mirror, in which one might see the goddess, or oneself, or the whole ` +
      `bright reason the empire believes it is the centre of the world.`);
    room('shr_grove', 'The Sacred Grove',
      `The primeval grove behind the shrine, its greatest trees girdled with the ` +
      `sacred straw rope and strips of white paper, marking each as the ` +
      `dwelling of a kami — never to be cut, never to be entered idly, a ` +
      `standing island of the god-haunted first forest. The light here is green ` +
      `and old; the silence has a texture; and even the boldest visitor finds ` +
      `himself, without deciding to, walking softer and speaking lower.`);
    room('shr_stone', 'The Founding Stone',
      `A great rough boulder deep in the grove, roped and revered, the very ` +
      `stone (the priests hold) on which the kami first alighted when the ` +
      `islands were young — the sacred zero of the realm's spirit, as the ` +
      `bridge-post is the zero of its roads. Pilgrims touch it and are, they ` +
      `feel, connected for a heartbeat to the whole unbroken chain of the ` +
      `god-time. It is only a stone. It is not, at all, only a stone.`);
    room('shr_kagura', 'The Kagura Stage',
      `An open stage where the shrine-maidens perform the kagura, the sacred ` +
      `dance for the gods — a slow, precise, trance-holding weaving of bells and ` +
      `fan and streaming sleeve, unchanged in a thousand years, danced not for ` +
      `an audience but for the kami themselves, who are held to delight in it. ` +
      `The mortals watching are, at best, permitted to overhear a conversation ` +
      `with the divine.`);
    room('shr_miko', 'The Maidens\' Hall',
      `The hall of the miko, the shrine-maidens in their white robes and ` +
      `vermilion skirts, who sweep the sacred ground, sell the charms and ` +
      `oracles, dance the kagura, and in the old days spoke, entranced, with the ` +
      `very voice of the kami. Now they are mostly the daughters of the priests, ` +
      `serving their years before marriage; but the old power clings to the ` +
      `office, and now and then, still, one of them goes strange, and speaks, ` +
      `and is believed.`);
    room('shr_priest', 'The Priests\' Hall',
      `The residence and office of the kannushi, the shrine-priests, who tend ` +
      `the kami and mediate between god and realm — performing the purifications ` +
      `and the seasonal rites, naming the newborn, blessing the new house and ` +
      `the new boat and the new venture. They keep the oldest thing in Yamato ` +
      `alive: not a doctrine, for the Way of the Kami has almost none, but a way ` +
      `of standing, cleansed and grateful, in a world thick with gods.`);
    room('shr_fete', 'The Festival Ground',
      `A broad open ground before the shrine where the great festival is held — ` +
      `and for a few roaring days a year the solemn precinct erupts into the ` +
      `realm's fiercest joy: the god is carried out among the people in his ` +
      `portable shrine, jolted and heaved and half-drowned in the sweating, ` +
      `shouting, ecstatic crowd, that the kami may bless the streets and the ` +
      `people may, for once, lay violent loving hands upon their god.`);
    room('shr_mikoshi', 'The Palanquin House',
      `The house of the mikoshi — the portable shrine, a small golden palace on ` +
      `carrying-poles, kept here in the dark between festivals like a sleeping ` +
      `god. At festival it is loaded with the kami's spirit and hoisted onto a ` +
      `hundred straining shoulders to be run, deliberately reeling and ` +
      `careening, through the streets, for the god (it is held) enjoys nothing ` +
      `so much as being shaken half to pieces by those who love him.`);

    link('shr_torii', 'n', 'shr_avenue');
    link('shr_avenue', 'n', 'shr_approach');
    link('shr_avenue', 'e', 'shr_inari');
    link('shr_avenue', 'w', 'shr_fete');
    link('shr_approach', 'n', 'shr_haiden');
    link('shr_approach', 'e', 'shr_temizu');
    link('shr_approach', 'w', 'shr_ema');
    link('shr_haiden', 'n', 'shr_honden');
    link('shr_haiden', 'e', 'shr_kagura');
    link('shr_haiden', 'w', 'shr_miko');
    link('shr_honden', 'n', 'shr_sun');
    link('shr_sun', 'e', 'shr_grove');
    link('shr_grove', 's', 'shr_stone');
    link('shr_miko', 's', 'shr_priest');
    link('shr_fete', 's', 'shr_mikoshi');

    /* ================================================================= *
     *  X. THE OUTER WARDS  (20) — the fringes & the Untouched.
     * ================================================================= */
    room('out_gate', 'The Ward Barrier',
      `A last shabby barrier at the edge of the ordered city, where the swept ` +
      `wards give out to the sprawling, half-legal fringe — the ground of the ` +
      `things the realm needs and will not look at: the wrestlers and the ` +
      `firemen, the day-labourers and the beggars, and, further out, the ` +
      `Untouched who handle its death. The gatekeeper's nose wrinkles at all who ` +
      `pass outward, and he is not wrong.`);
    room('out_market', 'The Night Market',
      `A raucous sprawl of night-stalls under smoking torches, where the fringe ` +
      `eats, drinks, gambles, and brawls when the respectable wards have bolted ` +
      `their gates — grilled offal and cheap spirit and the click of dice in a ` +
      `dozen illegal games, and a fight, most nights, for the pure joy of it. ` +
      `It is the Low City with the manners off, and it is, many would tell you, ` +
      `the more honest for it.`);
    room('out_flophouse', 'The Doss-House',
      `A verminous flophouse where the day-labourers and the down-and-out rent a ` +
      `patch of floor by the night for a few coppers, packed body to body under ` +
      `the low black beams — the fishermen between voyages, the porters between ` +
      `loads, the ruined, the drifting, the hunted. A single lamp gutters. The ` +
      `snoring is a tide. In the morning they will queue again for whatever work ` +
      `the city grudges them.`);
    room('out_labor', 'The Day-Labor Yard',
      `A bare yard where the labour-brokers hire the day's muscle at dawn — the ` +
      `porters, diggers, and haulers who build and feed the city and own no ` +
      `part of it, chosen or passed over on a foreman's whim, the unchosen ` +
      `drifting off to beg or worse. Here the realm's beautiful order shows its ` +
      `underside: the vast, anonymous, expendable labour on whose bent backs the ` +
      `whole exquisite thing is carried.`);
    room('out_beltower', 'The Drum-Tower',
      `A tall timber tower bearing a great drum, the fringe's own fire-watch and ` +
      `time-keeper, whose booming marks the hours out here where the temple bell ` +
      `comes faint. The watch scans the tinder-dry sprawl for the first curl of ` +
      `smoke and beats the alarm that sends the tattooed firemen running. In a ` +
      `city of paper, this drum is, quite literally, the difference between a ` +
      `ward and an ash-heap.`);
    room('out_smith', 'The Nail-Smith',
      `A humble smithy of the common iron the sword-lane would scorn — nails, ` +
      `hinges, pots, hoes, the cheap hard necessities of a hundred thousand ` +
      `poor households, hammered out by a soot-black smith who will never fold a ` +
      `blade or sign his name to one, and feeds his family better than the proud ` +
      `sword-makers uptown, and knows it, and keeps the knowledge behind his ` +
      `teeth.`);
    room('out_sumo', 'The Sumo Ring',
      `A roofed arena about a raised ring of pounded clay, where the great ` +
      `wrestlers grapple — mountains of disciplined flesh who throw salt to ` +
      `purify the ring, stamp to crush the demons of the earth, and then collide ` +
      `in a heartbeat's furious effort that the crowd of thousands has waited an ` +
      `hour of ritual to see. It is sport, and it is worship, and the champions ` +
      `are demigods with the appetites of ten men and the balance of dancers.`);
    room('out_stable', 'The Wrestlers\' Stable',
      `The training-stable where the young wrestlers are raised, in a brutal ` +
      `pit-hierarchy of dawn practice, gigantic meals, and utter obedience to ` +
      `the stable-master and their seniors — for a champion is grown here from a ` +
      `farm-boy over hard years of being thrown down and made to rise. The ` +
      `great pot of protein-stew simmers all day. The thud of falling giants ` +
      `never stops.`);
    room('out_kite', 'The Kite-Fliers\' Field',
      `An open field where, in the sharp winds of the new year, the kite-battles ` +
      `are fought — great painted paper warriors and demons and carp hauled ` +
      `roaring into the sky, their strings dressed with powdered glass to saw ` +
      `through a rival's line and send it fluttering down to the scrambling ` +
      `children below. For a few bright cold days the whole grey sky over the ` +
      `fringe is at war, and the fringe, for once, is looking up.`);
    room('out_bath', 'The Great Bath-House',
      `A cavernous public bath-house of the fringe, cheaper and rowdier than the ` +
      `neat wards' sento — the labourers boiling the day's filth away in the ` +
      `great steaming tubs, the masseurs cracking backs, and, up the back ` +
      `stairs, other trades plied in the steam. It is warmth and gossip and a ` +
      `brief animal comfort at the day's cold end, and the one luxury the ` +
      `poorest man can just afford.`);
    room('out_horse', 'The Horse-Market',
      `A muddy market of packhorses and the cheap nags that haul the city's ` +
      `carts, where the horse-copers practise the immemorial frauds of their ` +
      `kind on buyers who practise the immemorial suspicions of theirs. The ` +
      `beasts are worked to death in this city and replaced without sentiment; ` +
      `and the dead ones go, quietly, to the Untouched beyond, who waste ` +
      `nothing.`);
    room('out_firewatch', 'The Fire-Ruins',
      `A whole blackened ward, burned in the last of the great fires and not yet ` +
      `rebuilt — a field of charred posts, ash, and the odd surviving stone ` +
      `storehouse standing scorched amid the desolation. Squatters shelter in ` +
      `the ruins; scavengers pick them; and the city, which will raise it all ` +
      `again within the year exactly as before, regards its own ashes with the ` +
      `weary calm of long habit. The flowers of the capital bloom, and the ` +
      `capital sweeps up, and plants them again.`);
    room('out_untouched', 'The Ward of the Untouched',
      `A ward set apart, unmarked on the official maps, where the Untouched ` +
      `dwell — the outcaste caste, born to it and bound to it, who do the work ` +
      `the realm holds unclean and cannot do without: the leather and the ` +
      `slaughter, the tending of the dead, the carrying-out of its executions. ` +
      `They may not marry out, worship at the common shrines, or walk certain ` +
      `streets by day; and the beautiful order of the realm rests, in the end, ` +
      `on their permanent, hereditary, load-bearing shame.`);
    room('out_leather', 'The Tanners\' Pit',
      `The reeking yards of the Untouched leather-workers, who cure the hides ` +
      `the sword-caste will wear as armour and never think to thank them for — ` +
      `the pits of lime and dung and steeping skin, the racks of drying leather, ` +
      `the stench that marks the ward from a street away. Their craft is ` +
      `essential and their touch, the realm insists, is pollution; and both ` +
      `things are believed at once, without the smallest discomfort, by everyone ` +
      `but them.`);
    room('out_charcoal', 'The Charcoal-Burners\' Yard',
      `A yard of smouldering earth-kilns where the charcoal is burned that ` +
      `cooks the realm's rice and warms its braziers and fires its forges — the ` +
      `burners black as their product, tending the slow smother of the mounds ` +
      `day and night, for to let one breathe wrong is to lose a week's work in a ` +
      `gout of useless flame. It is hot, filthy, watchful work, and it heats a ` +
      `city that will not look at the men who heat it.`);
    room('out_temple', 'The Beggars\' Temple',
      `A poor, half-ruined temple that the fringe keeps for its own — for the ` +
      `great houses of prayer at the city's edge are not, in practice, for the ` +
      `Untouched and the destitute, and so the outcast keep their own broken ` +
      `hall, their own patient half-forgotten god, and tend him with a devotion ` +
      `the rich temples could not buy. He is a god who does not mind the smell ` +
      `of them, which is more than the realm can say.`);
    room('out_lepers', 'The Lepers\' Hut',
      `A shunned row of huts at the very edge of everything, where the ` +
      `leprous — cast out even by the outcast — live on the alms left at a ` +
      `distance and the mercy of the beggars' temple. They ring a small bell to ` +
      `warn the whole and are otherwise as good as dead to the realm, which has ` +
      `a place, precise and pitiless, for every soul, and for these has appointed ` +
      `the place of the already-departed.`);
    room('out_execution', 'The Execution Ground',
      `A bleak fenced ground where the realm does its killing — the beheadings, ` +
      `and the rarer, dreadful crucifixions upon the standing posts, carried out ` +
      `by the Untouched before whatever crowd cares to watch, as public lesson ` +
      `and public warning. Justice in Yamato is swift, certain, and shown; the ` +
      `posts are seldom long empty; and the ground has drunk so much that ` +
      `nothing, they say, will grow on it but a single stubborn, blood-dark ` +
      `iris.`);
    room('out_gibbet', 'The Head-Board',
      `A raised board by the highroad where the severed heads of the executed ` +
      `are displayed with a placard of their crimes — the traitor, the arsonist, ` +
      `the master-thief — gazing sightless at the traffic as the realm's plain ` +
      `statement of what it does to those who break its order. The crows are ` +
      `patient and unafraid. Travellers glance, and shudder, and are meant to, ` +
      `and walk a little more carefully into the beautiful, watchful city ` +
      `beyond.`);
    room('out_pauper', 'The Pauper\'s Grave',
      `A raw field where the nameless dead of the fringe are buried without rite ` +
      `or marker — the flophouse corpse, the drowned unknown, the executed ` +
      `whose kin dare not claim them — tumbled into the common pit by the ` +
      `Untouched and covered over, to make room, always, for more. A single ` +
      `weathered jizo keeps watch over the lot of them, its stone face patient, ` +
      `its red bib long since rotted to a thread.`);

    link('out_gate', 'e', 'out_market');
    link('out_gate', 'n', 'out_sumo');
    link('out_gate', 's', 'out_bath');
    link('out_market', 'e', 'out_flophouse');
    link('out_market', 'n', 'out_beltower');
    link('out_market', 's', 'out_smith');
    link('out_flophouse', 's', 'out_labor');
    link('out_sumo', 'e', 'out_stable');
    link('out_sumo', 'n', 'out_kite');
    link('out_bath', 'e', 'out_horse');
    link('out_bath', 's', 'out_firewatch');
    link('out_firewatch', 's', 'out_untouched');
    link('out_untouched', 'e', 'out_leather');
    link('out_untouched', 's', 'out_execution');
    link('out_untouched', 'w', 'out_temple');
    link('out_leather', 'n', 'out_charcoal');
    link('out_temple', 's', 'out_lepers');
    link('out_execution', 'e', 'out_gibbet');
    link('out_execution', 's', 'out_pauper');

    /* ================================================================= *
     *  Inhabitants: a few placed items and folk, peaceful and otherwise.
     * ================================================================= */

    // Commoner's starting kit — for no commoner may carry a warrior's blade.
    R.low_firetower.add(world.item({
      name: 'hardwood bo staff',
      keywords: ['bo', 'staff', 'stave', 'pole'],
      short: 'A fireman\'s hardwood bo staff leans against the tower-ladder.',
      description:
        'A six-foot stave of seasoned oak, banded with iron — the weapon the ' +
        'law allows a commoner, when the sword-caste keeps steel to itself. In ' +
        'trained hands it has humbled more than one arrogant blade.',
      weight: 3,
      damage: [3, 6],
      accuracy: 1,
    }));
    R.out_flophouse.add(world.item({
      name: 'quilted jacket',
      keywords: ['jacket', 'quilted', 'coat', 'armor', 'armour'],
      short: 'A labourer\'s thick quilted jacket hangs on a peg.',
      description:
        'A heavy jacket of many-layered quilted cotton, proof against the cold ' +
        'and, at a pinch, against a glancing blade — the closest thing to ' +
        'armour a man of no rank may honestly wear.',
      weight: 3,
      armor: 2,
    }));

    // Peaceful folk (talk to them).
    R.bay_interpreters.add(world.mob({
      name: 'hereditary interpreter',
      keywords: ['interpreter', 'translator'],
      short: 'A guild interpreter studies you with careful, guarded eyes.',
      description:
        'A neat, watchful man of the closed interpreter-caste, one of the very ' +
        'few in the realm permitted to speak the barbarians\' tongues — and ' +
        'watched, for the privilege, more closely than any spy.',
      xp: 0,
      dialogue:
        'You come off the western ship? Then speak through me, or not at all — ' +
        'the law is the law. And a word of counsel, traveller: in Yamato, the ' +
        'wise man says less than he knows, and knows more than he shows.',
    }));
    R.low_tea.add(world.mob({
      name: 'old tea-master',
      keywords: ['tea-master', 'master', 'host'],
      short: 'An old tea-master kneels by the hearth, whisk in hand.',
      description:
        'A serene old man in a plain grey robe, keeper of the Way of Tea, whose ' +
        'every unhurried motion — the fold of a cloth, the turn of a bowl — is ' +
        'the study of a lifetime made to look like nothing at all.',
      xp: 0,
      dialogue:
        'Sit. Take the bowl in both hands, turn it so, drink. One meeting, one ' +
        'chance — we shall not, you and I, share this exact cup again. That is ' +
        'the whole of it, and the whole of everything.',
    }));
    R.tem_abbot.add(world.mob({
      name: 'old monk',
      keywords: ['monk', 'abbot', 'priest'],
      short: 'The old abbot sits before a scroll bearing a single brushed circle.',
      description:
        'A small, bald, bright-eyed old man in two patched robes, who has sat ' +
        'so long before the blank wall that he seems to have worn a hole in the ' +
        'world and found it peaceful on the far side.',
      xp: 0,
      dialogue:
        'You have crossed half the world to arrive exactly where you stand. The ' +
        'blossom falls; the bell sounds; nothing is kept. Drink your tea, ' +
        'traveller, while it is hot. There is no other teaching.',
    }));
    R.wil_geisha.add(world.mob({
      name: 'geisha',
      keywords: ['geisha', 'woman', 'artist'],
      short: 'A geisha kneels tuning her samisen, powder-pale and unreadable.',
      description:
        'An arts-woman of the floating world, exquisite and armoured in grace, ' +
        'who sells the perfect evening and never, ever herself, and knows more ' +
        'of the great men of the realm than their own councils do.',
      xp: 0,
      dialogue:
        'A western face — how the patrons would pay to see it across a fan. Here ' +
        'we sell the evening, my dear, never the morning. Buy the dream and go ' +
        'home happy; only a fool tries to keep it.',
    }));

    // Hostile things, for the blooding of a staff.
    R.sam_ronin.add(world.mob({
      name: 'masterless ronin',
      keywords: ['ronin', 'wave-man', 'samurai', 'swordsman'],
      short: 'A ragged ronin lurches up, hand dropping to his worn hilt.',
      description:
        'A masterless samurai gone to seed — topknot unkempt, robe stained, ' +
        'pride raw as a wound — who has drunk away his honour and would sell ' +
        'his blade, or use it on a stranger, for the price of the next cup.',
      hostile: true,
      level: 4,
      maxHp: 34,
      stats: { str: 15, dex: 16, con: 13, int: 10 },
      damage: [4, 8],
      armor: 1,
      xp: 95,
      respawns: 60,
    }));
    R.wil_nighthawk.add(world.mob({
      name: 'street bravo',
      keywords: ['bravo', 'tough', 'kabukimono'],
      short: 'A swaggering street bravo blocks the lane, grinning.',
      description:
        'A gaudy, dangerous idler of the sort that infests the quarter\'s dark ' +
        'edges — outlandishly dressed, spoiling for a fight, a short blade in ' +
        'his sash and no law out here to stay his hand.',
      hostile: true,
      level: 2,
      maxHp: 18,
      stats: { str: 13, dex: 13, con: 11, int: 8 },
      damage: [2, 6],
      xp: 45,
      respawns: 50,
    }));
    R.bay_junks.add(world.mob({
      name: 'wharf rat',
      keywords: ['rat', 'vermin'],
      short: 'A fat wharf rat bares its teeth from among the mooring-ropes.',
      description:
        'A bold, bloated rat grown huge on the spillage of the anchorage, quite ' +
        'unafraid of a lone pair of legs.',
      hostile: true,
      level: 1,
      maxHp: 10,
      stats: { str: 9, dex: 14, con: 9, int: 3 },
      damage: [1, 4],
      xp: 20,
      respawns: 40,
    }));
    R.out_sumo.add(world.mob({
      name: 'grand champion',
      keywords: ['champion', 'wrestler', 'yokozuna', 'sumo'],
      short: 'The grand champion stamps and throws salt, and eyes you mildly.',
      description:
        'A mountain of a man, the reigning grand champion of the ring — a ' +
        'demigod of disciplined flesh with the balance of a dancer and the ' +
        'weight of an ox. He fights only in the ring, by ritual, but a fool ' +
        'might challenge him even so.',
      hostile: false,
      level: 7,
      maxHp: 80,
      stats: { str: 20, dex: 12, con: 19, int: 8 },
      damage: [6, 11],
      armor: 1,
      xp: 260,
      respawns: 150,
    }));

    return {
      area: miyako,
      startId: 'low_odori',
    };
  };
})(typeof window !== 'undefined' ? window : this);
