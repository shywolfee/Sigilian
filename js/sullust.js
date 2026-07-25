/*
 * sullust.js — SULLUST, the volcanic company-world of the SoroSuub Corporation.
 *
 * A 100-room area, and — like the Hutt worlds — a beachhead meant to grow: only
 * the capital's spaceport and the districts around it are built, with sealed
 * shafts and unlit galleries marking where the rest of the honeycombed planet
 * waits for a later pass. The writing does not stint; Sullust earns it.
 *
 * Sullust is a world turned inside out. Its surface is a hell — a blistered,
 * sulphur-choked skin of lava-fields and ash-storms under a sky the colour of a
 * bruise, lethal to breathe and hot enough to cook a droid, swept by pyroclastic
 * gales that scour the rock to glass. So the Sullustans live *beneath* it, in a
 * vast, ancient, ever-growing warren of natural lava-tubes and hollowed magma-
 * chambers, a subterranean civilisation of cool green-lit caverns kilometres
 * down where the planet's fury becomes, instead, the planet's power. They are a
 * jowled, huge-eyed, soft-spoken people who never forget a path once walked —
 * every Sullustan carries the whole map of the underworld in their head — and
 * they have made of their buried world one of the richest in the sector.
 *
 * Richest, and least free. Nearly the whole of Sullust — its mines, its cities,
 * its power, its air, its people's livelihoods — belongs to one entity: the
 * SoroSuub Corporation, a megacombine that processes the planet's minerals and
 * gases, builds its famous staryachts and landspeeders and HoloNet gear, and
 * governs Sullust in all but name from its executive spires. To live on Sullust
 * is, very nearly, to work for SoroSuub, and to breathe SoroSuub's scrubbed and
 * metered air, and to owe SoroSuub, in the end, for both.
 *
 * You reach it by transit from Coruscant, set down in the shielded landing-
 * cavern of the capital's port; a terminal there books the long ride home.
 *
 * Content, not framework. Populated into the shared World by world-data.js,
 * which wires the cross-world transit.
 *
 * LAYOUT (districts):
 *   sul_port_*  The Pinyumb Spaceport (the landing-cavern) ...... 24   ARRIVE
 *   sul_city_*  Pinyumb (the capital cavern-city) ............... 24
 *   sul_mine_*  The Deep Workings (mines & geothermal taps) ..... 18
 *   sul_soro_*  The SoroSuub Spire (corporate headquarters) ..... 16
 *   sul_deep_*  The Underdeep (wild caverns & the springs) ...... 18
 *                                                                 ---
 *                                                                 100
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildSullust = function buildSullust(ctx) {
    const { world, R, room, link } = ctx;

    const sullust = world.area({
      id: 'sullust',
      name: 'Sullust, the Buried World',
      description:
        'The volcanic company-world of the SoroSuub Corporation, its people ' +
        'living kilometres beneath a lethal surface in cool, green-lit caverns.',
    });

    /* ================================================================= *
     *  I. THE PINYUMB SPACEPORT  (24) — the shielded landing-cavern, where
     *     offworld traffic is received and the surface is held at bay.
     * ================================================================= */
    room('sul_port_concourse', 'The Landing-Cavern Concourse',
      `You step off the transit into cool, filtered, mineral-tasting air and a ` +
      `hush that comes as a shock after Coruscant's roar. This is the great ` +
      `landing-cavern of Pinyumb, a magma-chamber the size of a cathedral hollowed ` +
      `and dressed in SoroSuub grey, its curved rock ceiling lost in soft green ` +
      `glow-strip light. Sullustans move through it in unhurried numbers, ` +
      `jowled and huge-eyed and quiet, and every one of them, you sense, knows ` +
      `exactly where they are going. A transit terminal against the far wall ` +
      `books the long climb back to the Core.`);
    room('sul_port_arrival', 'The Reception Berth',
      `The berth where the offworld shuttle set you down, a ferrocrete apron ` +
      `sealed behind a triple set of blast-shields that stand between this cool ` +
      `haven and the murderous surface far above. A SoroSuub greeting-holo loops ` +
      `its welcome in forty languages, thanking you for visiting Sullust and ` +
      `reminding you, sweetly, that the air you are breathing is a corporate ` +
      `product and its continued supply a corporate courtesy.`);
    room('sul_port_gate', 'The Pinyumb Gate',
      `A grand rock-cut gateway, its lintel graven with the interlocked-S sigil ` +
      `of SoroSuub, where the spaceport gives onto the capital cavern beyond. ` +
      `Through it you can see Pinyumb itself falling away in tiers of green-lit ` +
      `terraces down the flank of a chamber so vast its far wall is a haze of ` +
      `distance. The warm updraught from the deep city smells of stone, machine-oil, ` +
      `and the faint sulphur that is the taste of the whole world.`);
    room('sul_port_customs', 'The Customs Gallery',
      `A long gallery of scanning-arches and courteous SoroSuub officials in ` +
      `corporate grey, where arrivals are logged, assessed, and — always — sold ` +
      `something. Sullust keeps no immigration law of its own; there is only ` +
      `company policy, applied with a smile, and the quiet understanding that on ` +
      `this world the Corporation is the law, the landlord, and the air.`);
    room('sul_port_bond', 'The Bonding Office',
      `A panelled office where offworld traders post the bonds and licences ` +
      `SoroSuub requires of anyone who would do business on its world. The clerk, ` +
      `a Sullustan of monumental patience, explains that every transaction on ` +
      `Sullust is, in some measure, a transaction with SoroSuub, and that this ` +
      `is not tyranny but simply *efficiency* — a word the Corporation says the ` +
      `way a priest says grace.`);
    room('sul_port_checkpoint', 'The Inner Checkpoint',
      `A security checkpoint of polite corporate guards and less polite scanners, ` +
      `dividing the public concourse from the workings beyond. Weapons are noted, ` +
      `faces matched, permits verified against lists no visitor may see. Most are ` +
      `waved through with a company blessing; a few are drawn quietly aside, and ` +
      `their names go into a ledger that never forgets.`);
    room('sul_port_sorooffice', 'The Arrivals Liaison',
      `A bright office where a SoroSuub liaison-officer meets persons of ` +
      `commercial interest, dispensing hospitality, brochures, and the subtle ` +
      `pressure of a Corporation that would very much like to know your business ` +
      `and, ideally, to become your partner in it. The caf is excellent. Nothing ` +
      `here is free, least of all the caf.`);
    room('sul_port_market', 'The Concourse Market',
      `A tidy market of SoroSuub-branded everything — ration-packs, breath-filters, ` +
      `glow-lamps, models of the Luxury 3000 landspeeder, chips of polished ` +
      `Sullustan lava-glass — arranged with corporate neatness beneath the green ` +
      `light. Even the black market here wears a name-tag; the Corporation takes ` +
      `its cut of the smuggling too, and files it under sundries.`);
    room('sul_port_outfitter', 'The Surface Outfitter',
      `A shop of the gear a mad soul needs to walk the surface and live an hour: ` +
      `sealed heat-suits, rebreathers, reflective cowls, ash-goggles, all SoroSuub-` +
      `made and SoroSuub-priced. The proprietor sells it with the cheerful ` +
      `fatalism of one who has fitted out many surface expeditions and greeted ` +
      `rather fewer of them coming back.`);
    room('sul_port_impound', 'The Impound Vault',
      `A rock-cut vault of seized cargo and contraband, held against unpaid bonds ` +
      `or failed inspections, catalogued to the gram. SoroSuub does not steal — ` +
      `SoroSuub *impounds*, and levies storage, and in the fullness of time ` +
      `auctions, to itself, at a price it also sets. It is all very legal, and ` +
      `all very much the same.`);
    room('sul_port_docks', 'The Cargo Docks',
      `Berths where the freighters that carry Sullust's wealth offworld — refined ` +
      `metals, bottled gases, finished tech — are loaded by patient labour-droids ` +
      `and patient Sullustans under the green glow. The tonnage that leaves this ` +
      `cavern in a day would ransom a small world. Almost none of it stays.`);
    room('sul_port_berth', 'The Yacht Berth',
      `A pristine berth for the SoroSuub staryachts the Corporation builds and ` +
      `sells to the galaxy's rich — long, gleaming, absurd vessels, moored here ` +
      `for demonstration and delivery. A salesbeing hovers, ready to explain the ` +
      `financing to anyone who lingers, and to anyone who does not.`);
    room('sul_port_hangar', 'The Repair Hangar',
      `A gantry-hung hangar cut into the cavern wall, where offworld ships are ` +
      `serviced by SoroSuub crews to SoroSuub standards at SoroSuub rates. The ` +
      `work is genuinely superb — this is a world that builds staryachts — and ` +
      `the bill is a thing of beauty in its own right.`);
    room('sul_port_fuel', 'The Fuel Cistern',
      `A vault of processed hypermatter and volatile gas drawn up from the deep ` +
      `workings, stored under pressures the strobing amber warnings do not ` +
      `oversell. Sullust sits atop an ocean of energy, and here a little of it is ` +
      `bottled for sale; the technicians move slowly and speak softly and are ` +
      `very, very careful.`);
    room('sul_port_cantina', 'The Cavern Cantina',
      `A snug, low-ceilinged cantina carved into the rock, warm with glow-light ` +
      `and the murmur of Sullustan talk, where port workers and offworld crews ` +
      `drink the local fungus-beer and the potent SoroSuub spirits. It is one of ` +
      `the few rooms on Sullust that does not feel entirely owned, and the ` +
      `Corporation, wisely, lets it be.`);
    room('sul_port_flop', 'The Company Hostel',
      `A clean, spare, faintly institutional hostel of rented rock-cells for ` +
      `crews and transients, run by SoroSuub to SoroSuub's exacting and joyless ` +
      `standard. The sheets are crisp, the rates are fair, and a soft corporate ` +
      `voice wishes you a productive rest and reminds you of the checkout hour.`);
    room('sul_port_control', 'The Traffic Control Vault',
      `A domed vault of holographic sky-traffic, where SoroSuub controllers ` +
      `thread the descending ships down through the surface storms and the shield-` +
      `gauntlet into the cavern, blind but for their instruments. It is the most ` +
      `nerve-wracked room in the port; a mishandled approach does not crash — it ` +
      `*vents*, and the whole cavern with it.`);
    room('sul_port_droidbay', 'The Droid Bay',
      `A charging-bay of leased labour- and guide-droids, optics dark, waiting to ` +
      `be hired to offworlders who lack a Sullustan's flawless memory for the ` +
      `endless tunnels. A worn pit-droid insists, to anyone who passes, that it ` +
      `knows a shortcut to the springs, and is, the port agrees, not to be ` +
      `believed.`);
    room('sul_port_medbay', 'The Decompression Medbay',
      `A white bay where the surface-burned, the gas-poisoned, and the ` +
      `pressure-sick are treated by a SoroSuub medical droid of unsettling ` +
      `competence. Most of its custom is offworlders who mistook Sullust's ` +
      `hospitality for safety, and learned, briefly and expensively, otherwise.`);
    room('sul_port_decon', 'The Decontamination Lock',
      `A grim little airlock-chamber of hissing sprays and stinging light, where ` +
      `anyone come in off the surface is scoured of ash, toxin, and the clinging ` +
      `sulphur before they may rejoin the clean deep air. The process is ` +
      `thorough, undignified, and absolutely not optional.`);
    room('sul_port_gallery', 'The Observation Gallery',
      `A rock-cut gallery walled with metres of shielded transparisteel, the one ` +
      `place in the port a soul may look upon the surface and survive it. Beyond ` +
      `the glass: a nightmare of black lava-plains and glowing fissures under an ` +
      `ash-dark sky, a pyroclastic wind flaying the rock, the far volcanoes ` +
      `bleeding light. Sullustans bring their children here to teach them why ` +
      `they live below.`);
    room('sul_port_lift', 'The Port Turbolift',
      `A broad SoroSuub turbolift, its cage of polished lava-glass, connecting the ` +
      `port to the levels above and the workings below. A calm corporate voice ` +
      `names each level as it passes, and the deepest names it will speak are not ` +
      `the deepest that exist — some buttons on the panel are dark, and lettered ` +
      `in a script the company no longer uses.`);
    room('sul_port_sublevel', 'The Port Underlevel',
      `A dim service-level beneath the concourse, all conduit and cool seeping ` +
      `water and the deep, patient thrum of the geothermal plant far below. Here ` +
      `the corporate polish gives out to bare working rock, and the real, ancient ` +
      `Sullust — the buried world the company merely rents — begins to show ` +
      `through.`);
    // EXPANSION: sul_port_seam stubs onto the port's unbuilt deep sublevels.
    room('sul_port_seam', 'The Sealed Shaft',
      `A rough shaft dropping away toward the port's deepest sublevels — and, a ` +
      `few metres down, a SoroSuub bulkhead, sealed, lettered CLOSED BY ORDER, ` +
      `and older than the men who ordered it. The company keeps a great many ` +
      `doors like this. What is behind them is not yet built for you to find.`);

    link('sul_port_concourse', 'sw', 'sul_port_arrival');
    link('sul_port_concourse', 'n', 'sul_port_gate');
    link('sul_port_concourse', 'e', 'sul_port_customs');
    link('sul_port_concourse', 'w', 'sul_port_market');
    link('sul_port_concourse', 's', 'sul_port_cantina');
    link('sul_port_concourse', 'ne', 'sul_port_control');
    link('sul_port_concourse', 'nw', 'sul_port_medbay');
    link('sul_port_concourse', 'se', 'sul_port_gallery');
    link('sul_port_customs', 'e', 'sul_port_bond');
    link('sul_port_customs', 'n', 'sul_port_checkpoint');
    link('sul_port_checkpoint', 'e', 'sul_port_sorooffice');
    link('sul_port_market', 's', 'sul_port_docks');
    link('sul_port_market', 'w', 'sul_port_outfitter');
    link('sul_port_docks', 's', 'sul_port_hangar');
    link('sul_port_docks', 'e', 'sul_port_berth');
    link('sul_port_hangar', 'w', 'sul_port_fuel');
    link('sul_port_outfitter', 's', 'sul_port_impound');
    link('sul_port_cantina', 'e', 'sul_port_flop');
    link('sul_port_control', 'n', 'sul_port_droidbay');
    link('sul_port_medbay', 'w', 'sul_port_decon');
    link('sul_port_gallery', 's', 'sul_port_lift');
    link('sul_port_lift', 'd', 'sul_port_sublevel');
    link('sul_port_sublevel', 'e', 'sul_port_seam');

    /* ================================================================= *
     *  II. PINYUMB  (24) — the capital cavern-city, terraced down the flank
     *      of a magma-chamber the size of a small sky.
     * ================================================================= */
    room('sul_city_gate', 'The Terraces of Pinyumb',
      `The city opens before you: Pinyumb, capital of Sullust, built in green-lit ` +
      `tiers down the curved wall of a chamber so vast that clouds — real clouds, ` +
      `wrung from the cool deep air — drift below you across the gulf. Bridges ` +
      `and cable-cars thread the void; waterfalls of run-off silver the far wall; ` +
      `and everywhere the soft glow of a million glow-strips holds back a dark ` +
      `that has never once known a sun.`);
    room('sul_city_plaza', 'The Grand Plaza',
      `The heart of Pinyumb, a broad terrace-plaza of dressed lava-stone where ` +
      `the cavern-city's citizens gather beneath a suspended SoroSuub sun-lamp — ` +
      `a great golden disc that gives, for twelve hours a day, a warmth and light ` +
      `the surface would kill to provide. Fountains play; children chase; and the ` +
      `Sullustans move through it all with the unhurried certainty of a people ` +
      `who have never, in ten thousand years, been lost in their own city.`);
    room('sul_city_concourse2', 'The Great Concourse',
      `A soaring commercial concourse cut back into the living rock, its shopfronts ` +
      `and galleries rising tier on tier toward a ceiling hazed with distance and ` +
      `light. This is the buried world showing off: prosperous, orderly, and ` +
      `almost eerily clean, a whole civilisation's high street built where, on any ` +
      `sane planet, there would be only solid stone.`);
    room('sul_city_promenade', 'The Glowstone Promenade',
      `A wide promenade paved in polished glowstone that gives back the lamp-light ` +
      `underfoot, lined with cafés where Sullustans linger over fungus-caf and ` +
      `watch the cable-cars cross the gulf. It is a good place to understand ` +
      `Sullust: comfortable, wealthy, watchful, and entirely, contentedly owned.`);
    room('sul_city_forum', "The Citizens' Forum",
      `An amphitheatre of tiered rock seats where Pinyumb debates the small matters ` +
      `SoroSuub permits it to decide — festival dates, cavern upkeep, the naming ` +
      `of new tunnels. The great matters are decided in the Spire, and everyone ` +
      `knows it, and the forum meets anyway, keeping the shape of a self-rule the ` +
      `company hollowed out long ago.`);
    room('sul_city_mediacenter', 'The HoloNet House',
      `A blazing hall of holoscreens and transmission-gear, for Sullust is a great ` +
      `maker of HoloNet equipment and SoroSuub a great maker of the news that runs ` +
      `on it. The company's own channels play on every wall, bright and reassuring ` +
      `and endless, reporting a Sullust that is prosperous, contented, and never ` +
      `in any doubt at all.`);
    room('sul_city_market', 'The Cavern Market',
      `A bustling market where the produce of the deep world is sold — pale cavern-` +
      `fungus in a hundred varieties, blind cave-fish, mineral waters, the ` +
      `sweet-sharp glowmoss the Sullustans prize. Offworlders wrinkle their noses; ` +
      `the locals shop with the discernment of a people who have made cuisine of ` +
      `the dark.`);
    room('sul_city_garden', 'The Fungus Gardens',
      `Terraced grow-caverns of luminous cultivated fungus, rank on rank of it in ` +
      `every colour that glows, tended by soft-handed Sullustan farmers under ` +
      `their own gentle light. It is beautiful and strange and faintly funereal, a ` +
      `harvest that has never seen rain, and it feeds a world.`);
    room('sul_city_shrine', 'The Shrine of the First Delvers',
      `A rock-cut shrine to the ancestors the Sullustans revere above any god — ` +
      `the First Delvers, who fled the burning surface into the dark ten thousand ` +
      `years ago and found, instead of a grave, a world. Their names are carved ` +
      `in a spiral that winds back into the rock further than any lamp reaches, ` +
      `and the living come to add their own, and to remember the way down.`);
    room('sul_city_cantina', 'The Deepglow Cantina',
      `A warm, dim cantina beloved of Pinyumb's off-shift workers, its walls a ` +
      `single slab of natural glowstone that bathes the room in soft amber. The ` +
      `fungus-beer is famous, the company songs are melancholy and sly, and here, ` +
      `if anywhere on Sullust, a careful ear might catch a word the Corporation ` +
      `would rather went unsaid.`);
    room('sul_city_clinic', 'The Public Clinic',
      `A clean, calm SoroSuub clinic where the citizens of Pinyumb receive the ` +
      `competent, metered care that is one of their wages, tended by medical ` +
      `droids and unfailingly polite Sullustan nurses. It is genuinely good. It ` +
      `is also, like the air and the light and the water, a thing the company ` +
      `gives and the company can, in principle, take away.`);
    room('sul_city_housing', 'The Hab-Terraces',
      `Tiers of neat rock-cut dwellings climbing the cavern wall, each with its ` +
      `glow-lamp and its balcony over the gulf, home to the Sullustan families who ` +
      `keep the company's world turning. The doors stand open in the deep-city ` +
      `way; a people who share one dark and one air have little use for locks, and ` +
      `a great deal of use for one another.`);
    room('sul_city_atrium', 'The Family Atrium',
      `A shared atrium at the heart of a housing-cluster, where several ` +
      `generations of a Sullustan clan-family live around a common hearth-lamp and ` +
      `the children learn the tunnels by heart before they learn to read. A ` +
      `grandmother watches from a stone bench, and greets you by a name she has ` +
      `decided suits you, and will never, now, forget.`);
    room('sul_city_terrace', 'The Overhang Terrace',
      `A dizzy terrace jutting over the cavern's gulf, where lovers and thinkers ` +
      `come to sit with their legs over a kilometre of green-lit air. The clouds ` +
      `drift below; the far wall glimmers; and the whole impossible buried city ` +
      `hangs in its own soft light like a thing dreamed rather than dug.`);
    room('sul_city_exchange', 'The Commodities Exchange',
      `A frantic hall of traders and tickers where the wealth of Sullust — metals, ` +
      `gases, refined rare-earths, SoroSuub stock itself — is bought and sold in a ` +
      `roar. It is the one place in Pinyumb the Sullustans raise their soft voices, ` +
      `and the numbers on the great board are, in the end, the true government of ` +
      `the world.`);
    room('sul_city_museum', 'The Museum of the Deep',
      `A hushed museum of Sullust's long burial — the tools of the First Delvers, ` +
      `the maps of vanished tunnels, the bones of the great blind beasts the early ` +
      `folk fought for the caverns. A whole history without a single image of the ` +
      `sky, for the people who made it have, for ten thousand years, done without ` +
      `one.`);
    room('sul_city_academy', 'The SoroSuub Academy',
      `A gleaming corporate academy where Sullust's clever young are trained — ` +
      `and, gently, bound — to the company that will employ them, body and loyalty, ` +
      `for life. The teaching is excellent and the horizon is precisely as wide as ` +
      `SoroSuub requires, which is to say: the width of Sullust, and the company ` +
      `that owns it.`);
    room('sul_city_reservoir', 'The Deep Reservoir',
      `A vast still black lake of filtered water held in a lower cavern, the city's ` +
      `throat and lifeblood, its surface a perfect dark mirror troubled only by the ` +
      `drip of the deep rock. Sullustans come here to be quiet. The water is very ` +
      `cold, and very pure, and very old, and it does not care for the company at ` +
      `all.`);
    room('sul_city_soroway', 'The Executive Approach',
      `A grand ascending gallery, cleaner and colder than the rest of the city, ` +
      `climbing toward the SoroSuub Spire whose lit windows crown the cavern's ` +
      `heights. The traffic here is all corporate — grey suits, guarded lifts, the ` +
      `hush of real power — and the ordinary citizen turns back at its foot ` +
      `without being told.`);
    room('sul_city_mineway', "The Miners' Descent",
      `A broad, worn, warm passage sloping down and away from the bright city ` +
      `toward the deep workings, the walls sweating, the air thickening with heat ` +
      `and the smell of hot rock. Shift-crews trudge up and down it in their ` +
      `scarred gear, and the deeper you look the redder the light becomes, until ` +
      `the green city-glow gives way to the sullen glow of the planet's own fire.`);
    room('sul_city_deepway', 'The Old Stair',
      `A neglected rock-cut stair spiralling down out of the city toward the wild ` +
      `caverns below — the Underdeep, where SoroSuub's tidy world gives out to the ` +
      `real one. The company has run lights along it, grudgingly, and posted a ` +
      `sign about permits, and the Sullustans go down it anyway, on their own old ` +
      `errands, into the dark they came from.`);
    room('sul_city_hall', 'The Assembly Hall',
      `A grand rock-cut hall where Pinyumb's forum meets in session and the city ` +
      `holds its festivals under the sun-lamp's noon, the walls carved with the ` +
      `spiral-histories of the cavern-city. It is a proud room, and an honest one, ` +
      `and it is very careful never to assemble about anything SoroSuub has not ` +
      `already agreed to.`);
    room('sul_city_gallery', 'The Sky-Lamp Gallery',
      `A high gallery level with the great suspended sun-lamp itself, close enough ` +
      `to feel its warmth on your face — the nearest thing to standing in daylight ` +
      `that Sullust allows. Engineers tend it on their gantries like priests at an ` +
      `altar, for when the lamp fails, as it rarely does, the whole city ` +
      `remembers, all at once, that it lives in a cave.`);
    room('sul_city_overlook', 'The High Overlook',
      `The topmost public terrace of Pinyumb, from which the whole cavern-city ` +
      `falls away beneath you in tiers of green and gold light down into drifting ` +
      `cloud, the bridges like spider-silk, the far wall a wall of stars that are ` +
      `only windows. It is one of the great sights of the sector, and no offworld ` +
      `holo has ever done it justice, because no holo can hold the silence.`);

    link('sul_city_gate', 'n', 'sul_city_plaza');
    link('sul_city_plaza', 'n', 'sul_city_concourse2');
    link('sul_city_plaza', 'e', 'sul_city_soroway');
    link('sul_city_plaza', 'w', 'sul_city_mineway');
    link('sul_city_plaza', 'ne', 'sul_city_forum');
    link('sul_city_plaza', 'nw', 'sul_city_market');
    link('sul_city_plaza', 'se', 'sul_city_cantina');
    link('sul_city_plaza', 'sw', 'sul_city_housing');
    link('sul_city_plaza', 'd', 'sul_city_deepway');
    link('sul_city_plaza', 'u', 'sul_city_gallery');
    link('sul_city_concourse2', 'n', 'sul_city_promenade');
    link('sul_city_concourse2', 'e', 'sul_city_reservoir');
    link('sul_city_promenade', 'n', 'sul_city_academy');
    link('sul_city_promenade', 'e', 'sul_city_exchange');
    link('sul_city_promenade', 'w', 'sul_city_museum');
    link('sul_city_forum', 'e', 'sul_city_hall');
    link('sul_city_forum', 'n', 'sul_city_mediacenter');
    link('sul_city_market', 'n', 'sul_city_shrine');
    link('sul_city_market', 'w', 'sul_city_garden');
    link('sul_city_cantina', 'e', 'sul_city_clinic');
    link('sul_city_housing', 's', 'sul_city_atrium');
    link('sul_city_atrium', 'e', 'sul_city_terrace');
    link('sul_city_gallery', 'u', 'sul_city_overlook');
    // Spaceport -> Pinyumb.
    link('sul_port_gate', 'n', 'sul_city_gate');

    /* ================================================================= *
     *  III. THE DEEP WORKINGS  (18) — the mines and geothermal taps where
     *       Sullust's fury is turned to Sullust's fortune.
     * ================================================================= */
    room('sul_mine_gate', 'The Workings Gate',
      `The miners' descent bottoms out at a heavy blast-gate into the deep ` +
      `workings, the air beyond it hot and close and loud with the deep percussion ` +
      `of the machines. Here the cool green city is only a memory; the light is ` +
      `the red of hot rock and warning-strobe, and the whole world's wealth is ` +
      `torn, groaning, out of the dark.`);
    room('sul_mine_hub', 'The Workings Junction',
      `A great rough-hewn junction where the tunnels of the deep workings meet, ` +
      `hung with SoroSuub signage and thick power-cable, the floor gritty with ` +
      `ore-dust. Ore-trains rumble through on rock-cut rails, and the shift-crews ` +
      `pass in their scarred heat-gear, faces streaked, eyes bright in the gloom.`);
    room('sul_mine_tunnel', 'The Ore Tunnels',
      `A branching maze of mining tunnels driven deep into the mineral-rich rock, ` +
      `the walls seamed with the metals SoroSuub grows rich upon, the dark absolute ` +
      `beyond your lamp. A Sullustan crew works a face somewhere ahead, and their ` +
      `soft song comes back down the tunnel changed and doubled, the oldest music ` +
      `of the buried world.`);
    room('sul_mine_drill', 'The Drilling Face',
      `The live face of the workings, where a monstrous SoroSuub boring-rig chews ` +
      `into virgin rock in a shriek of dust and sparks, extending the endless ` +
      `warren another metre into the dark. The rig-crew watch their gauges and ` +
      `their footing; the deep rock is under pressure here, and it does not always ` +
      `consent to be dug.`);
    room('sul_mine_crystal', 'The Crystal Grotto',
      `A pocket the drilling opened into a natural grotto of enormous mineral ` +
      `crystals, faceted and faintly glowing, that the miners have left standing ` +
      `out of a reverence older than the company. SoroSuub has assessed their ` +
      `value and scheduled their extraction; the miners have, so far and quietly, ` +
      `arranged for the schedule to slip.`);
    room('sul_mine_ore', 'The Ore-Sorting Floor',
      `A clangorous floor where the raw ore comes up from the faces to be crushed, ` +
      `sorted, and fed to the refinery, the conveyors groaning under their loads. ` +
      `Sorting-droids pick the streams with tireless speed, and a human overseer ` +
      `watches the assay-readouts with the fixed attention of a man whose bonus ` +
      `rides on every gram.`);
    room('sul_mine_gaswell', 'The Gas Wells',
      `A capped forest of well-heads where SoroSuub draws up the volatile gases ` +
      `that pool in the deep rock — fuels, propellants, rarer and stranger vapours ` +
      `bound for offworld labs. The air here is metered constantly; a single bad ` +
      `reading empties the whole gallery in seconds, and the crews have learned to ` +
      `run before they think.`);
    room('sul_mine_refinery', 'The Ore Refinery',
      `A hell of furnaces and crucibles where the sorted ore is smelted and ` +
      `refined, the heat a physical wall, the molten metal's glare the only ` +
      `daylight the deep workings know. It is here the buried rock becomes the ` +
      `bright ingots that ransom the sector, and here that the company's wealth is ` +
      `truly, ferociously made.`);
    room('sul_mine_foreman', "The Shift-Foreman's Office",
      `A cramped, hot office overlooking the sorting floor, where the shift-foreman ` +
      `keeps the quotas and the safety-log in the same weary hand. He is a ` +
      `Sullustan of the old kind, loyal to his crew before his company, and he ` +
      `carries, behind his corporate manner, the entire map of the workings and a ` +
      `long, unspoken tally of the men the quotas have cost.`);
    room('sul_mine_pumps', 'The Pump Gallery',
      `A thundering gallery of the great pumps that hold the deep workings clear of ` +
      `the hot water forever seeping up from below, their labour ceaseless and ` +
      `their failure unthinkable. When the pumps stop, the workings drown; so the ` +
      `pumps do not stop, and the pump-crews keep a vigil older and grimmer than ` +
      `any the Spire above would recognise.`);
    room('sul_mine_geothermal', 'The Geothermal Tap',
      `A cathedral of pipe and turbine where SoroSuub taps the planet's own molten ` +
      `heart for the power that lights the cavern-cities and drives the whole ` +
      `world's industry. The heat and the noise are stupendous; through a ` +
      `shielded port you can see the tap-shaft glowing down into the actual magma, ` +
      `the fire the First Delvers fled, harnessed now to serve their heirs.`);
    room('sul_mine_vent', 'The Vent Shafts',
      `A junction of the great vent-shafts that carry the workings' killing heat ` +
      `and fume up and out to the murderous surface, roaring like a gale. It is ` +
      `the deep world exhaling; stand in the draught and you feel the whole ` +
      `planet breathe, and smell, faint and far, the sulphur of the hell above.`);
    room('sul_mine_catwalk', 'The Refinery Catwalks',
      `A giddy web of catwalks flung across the refinery's fiery gulf, the crucibles ` +
      `glaring far below, the heat rising in visible waves. The grille burns ` +
      `through a boot; the rail is too hot to grip; and the crews cross at a run, ` +
      `and do not, ever, look down into the light.`);
    room('sul_mine_lava', 'The Lava Gallery',
      `A gallery driven perilously near a live lava-tube, its inner wall glowing a ` +
      `dull, breathing red, the rock warm as a living thing to the hand. This is ` +
      `the frontier of the workings, where the company's greed and the planet's ` +
      `fire meet and negotiate, metre by dangerous metre, over who shall have the ` +
      `deep rock.`);
    room('sul_mine_sublevel', 'The Flooded Sublevel',
      `A drowned sublevel beneath the workings, warm black water to the knee, the ` +
      `pumps' distant thunder the only sound. The company abandoned this level to ` +
      `the seep years ago; the water has claimed it, and something, the crews ` +
      `mutter, has claimed the water.`);
    room('sul_mine_cavein', 'The Cave-In',
      `A tunnel choked to the roof by an old collapse, shored and abandoned and ` +
      `left as it fell, with — the shift-log notes, and the crews do not speak — ` +
      `a crew still behind it. The Sullustans have made it a quiet memorial; a ` +
      `single glow-lamp burns here always, and no one works within earshot.`);
    room('sul_mine_lift', 'The Ore Lift',
      `A brutal ore-lift, all rust and counterweight, hauling the deep world's ` +
      `wealth up toward the refinery and the crews down toward the faces. It groans ` +
      `on a cable no one has replaced in a lifetime, and rides, the miners say, on ` +
      `equal parts steel and faith.`);
    // EXPANSION: sul_mine_seam stubs onto the workings' unbuilt deep faces.
    room('sul_mine_seam', 'The Sealed Face',
      `The flooded sublevel ends at a face SoroSuub sealed and struck from the ` +
      `charts — for what reason the company files do not say and the foreman will ` +
      `not guess. The seal is old, and the water laps against it, and whatever ` +
      `lies beyond is not yet dug for you to reach.`);

    link('sul_mine_gate', 'w', 'sul_mine_hub');
    link('sul_mine_hub', 'n', 'sul_mine_tunnel');
    link('sul_mine_hub', 'w', 'sul_mine_geothermal');
    link('sul_mine_hub', 'ne', 'sul_mine_ore');
    link('sul_mine_hub', 'nw', 'sul_mine_refinery');
    link('sul_mine_hub', 's', 'sul_mine_foreman');
    link('sul_mine_hub', 'sw', 'sul_mine_pumps');
    link('sul_mine_hub', 'd', 'sul_mine_lava');
    link('sul_mine_tunnel', 'n', 'sul_mine_drill');
    link('sul_mine_tunnel', 'e', 'sul_mine_crystal');
    link('sul_mine_ore', 'e', 'sul_mine_gaswell');
    link('sul_mine_geothermal', 's', 'sul_mine_vent');
    link('sul_mine_refinery', 'n', 'sul_mine_catwalk');
    link('sul_mine_catwalk', 'e', 'sul_mine_lift');
    link('sul_mine_lava', 'd', 'sul_mine_sublevel');
    link('sul_mine_sublevel', 'e', 'sul_mine_seam');
    link('sul_mine_pumps', 's', 'sul_mine_cavein');
    // Pinyumb -> Deep Workings.
    link('sul_city_mineway', 'w', 'sul_mine_gate');

    /* ================================================================= *
     *  IV. THE SoroSuub SPIRE  (16) — the corporate headquarters, and the
     *      true government of the world.
     * ================================================================= */
    room('sul_soro_gate', 'The Spire Gate',
      `The executive approach ends at the doors of the SoroSuub Spire, a ` +
      `stalagmite of dressed stone and lit glass rising from the cavern floor to ` +
      `its distant roof, every window an office, every office a decision that ` +
      `moves a world. Corporate guards in immaculate grey admit the useful and ` +
      `the summoned; the air within is cool, and filtered, and faintly, ` +
      `expensively perfumed.`);
    room('sul_soro_lobby', 'The Grand Lobby',
      `A lobby of hushed magnificence — polished lava-glass, a floor map of Sullust ` +
      `rendered in inlaid ore, a slow holographic model of the whole SoroSuub ` +
      `combine turning in the air like a small galaxy. It is designed to make a ` +
      `visitor feel the reach of the company, and it succeeds; you feel, standing ` +
      `here, exactly as small as you are meant to.`);
    room('sul_soro_atrium', 'The Executive Atrium',
      `A soaring internal atrium walled in offices, green with real imported ` +
      `plants drinking real imported light, the murmur of corporate business ` +
      `rising from it like a tide. This is the nerve-centre of a combine that ` +
      `spans the sector, and it hums with the quiet, relentless confidence of ` +
      `people who have never once doubted that the world is theirs to arrange.`);
    room('sul_soro_boardroom', 'The Boardroom',
      `A long dark room of a single stone table and a wall of window onto the ` +
      `cavern-city far below, where the board of SoroSuub decides the fate of ` +
      `Sullust between the caf and the vote. No holocams reach here; the true ` +
      `government of the world is conducted in this quiet, and recorded, if at ` +
      `all, in the memories of Sullustans who will never, ever forget it.`);
    room('sul_soro_exec', "The Chief Executive's Office",
      `The great circular office at the Spire's height, walled in curving glass ` +
      `that holds the whole green gulf of Pinyumb like a possession — because it ` +
      `is one. Here the head of SoroSuub governs a world without ever standing ` +
      `for its office, an emperor who calls himself a Chief Executive and rules, ` +
      `by the ledger, more absolutely than any king.`);
    room('sul_soro_vault', 'The Corporate Vault',
      `A blast-doored vault of the combine's dearest secrets — the ore-assays, the ` +
      `patents, the deeds that own the planet's every cavern, the long grey ledgers ` +
      `of who owes SoroSuub and for what. It is the true treasury of Sullust, and ` +
      `it holds no gold; the gold is out in the world, working. What it holds is ` +
      `ownership, which is better.`);
    room('sul_soro_security', 'The Security Office',
      `The nerve-centre of SoroSuub's private security — a corporate army in all ` +
      `but name, badged and armed and answerable to no law but the board's. A wall ` +
      `of monitors watches every public cavern on the world at once, and the ` +
      `officers watch the watchers, and somewhere, always, a quiet decision is ` +
      `being taken about someone who has become inconvenient.`);
    room('sul_soro_comms', 'The Communications Suite',
      `A domed suite of transceivers linking the Spire to SoroSuub's holdings ` +
      `across the sector, blue with the flicker of a hundred distant offices ` +
      `reporting in. From here the combine speaks with one voice to a dozen worlds, ` +
      `and listens, and files, and decides — the whole vast reach of it run, in ` +
      `the end, from this one cool room in the dark.`);
    room('sul_soro_lab', 'The Design Laboratory',
      `A bright laboratory where SoroSuub's famed engineers dream up the ` +
      `staryachts, landspeeders, and HoloNet gear that carry the company's name ` +
      `across the galaxy. Prototypes gleam on the benches, half-real; the ` +
      `Luxury 3000 was born in a room like this, and something here, under a ` +
      `dust-sheet, may be the next thing the galaxy learns it cannot live without.`);
    room('sul_soro_server', 'The Data Core',
      `A frigid vault of humming data-cores holding the accumulated knowledge — and ` +
      `the accumulated leverage — of the whole combine, cooled by the deep world's ` +
      `own cold water. To hold this room would be to hold Sullust; SoroSuub knows ` +
      `it, and the door is the most heavily guarded on the planet, and the ` +
      `guards themselves are watched.`);
    room('sul_soro_foundry', 'The Model Foundry',
      `A jewel-box workshop where the Spire's own artisans build the exquisite ` +
      `presentation-models and bespoke prototypes the board gifts to the sector's ` +
      `powerful, each a small marvel of Sullustan craft. Here the company's ` +
      `ruthlessness wears its finest clothes, and a landspeeder becomes a work of ` +
      `art, and a bribe becomes a masterpiece.`);
    room('sul_soro_cafeteria', 'The Executive Refectory',
      `A refectory of quiet good taste where the Spire's officers dine on offworld ` +
      `delicacies flown in at a cost that would feed a mining-cavern, served by ` +
      `soft-footed staff who see everything and repeat nothing. The talk is all ` +
      `numbers and names, and the numbers are worlds, and the names are people, ` +
      `and no one at the table quite remembers the difference.`);
    room('sul_soro_archives', 'The Corporate Archives',
      `A cool, ordered vault of the combine's institutional memory — every ` +
      `contract, every survey, every quiet acquisition of a rival or a right, ` +
      `filed and cross-filed by clerks with the flawless Sullustan memory the ` +
      `company prizes above loyalty. Nothing SoroSuub has ever done is forgotten ` +
      `here; the archive is the company's conscience, in the sense that it is the ` +
      `only place its sins are kept, and the last place they will ever be read.`);
    room('sul_soro_gallery', "The Founders' Gallery",
      `A portrait-gallery of the men and women who built SoroSuub from a single ` +
      `mine into a power that owns a world, their painted eyes following the ` +
      `visitor down the hall. The official history hangs here in oil and gilt, ` +
      `heroic and seamless, and leaves unmentioned, as such histories do, the ` +
      `great many people it was built upon.`);
    room('sul_soro_terrace', 'The Executive Terrace',
      `A private terrace near the Spire's crown, hung over the whole gulf of ` +
      `Pinyumb, where the powerful of SoroSuub take the cool air and the long view ` +
      `and decide, over glasses of something old, the small adjustments that ` +
      `remake lives by the thousand far below. From up here the city is a board, ` +
      `and the citizens are pieces, and the game is very quiet and never ends.`);
    // EXPANSION: sul_soro_seam stubs onto the Spire's unbuilt upper sanctum.
    room('sul_soro_seam', 'The Sealed Suite',
      `A sealed executive suite beyond the vault, its door unmarked and its ` +
      `purpose known to a handful, behind which the combine's deepest business is ` +
      `said to be done. It does not open for you. Whatever the board keeps here, ` +
      `it is not yet built for you to learn.`);

    link('sul_soro_gate', 'e', 'sul_soro_lobby');
    link('sul_soro_lobby', 'n', 'sul_soro_atrium');
    link('sul_soro_atrium', 'e', 'sul_soro_archives');
    link('sul_soro_lobby', 'e', 'sul_soro_security');
    link('sul_soro_lobby', 's', 'sul_soro_cafeteria');
    link('sul_soro_lobby', 'ne', 'sul_soro_comms');
    link('sul_soro_lobby', 'nw', 'sul_soro_gallery');
    link('sul_soro_atrium', 'n', 'sul_soro_boardroom');
    link('sul_soro_boardroom', 'n', 'sul_soro_exec');
    link('sul_soro_security', 'e', 'sul_soro_lab');
    link('sul_soro_lab', 'e', 'sul_soro_server');
    link('sul_soro_lab', 's', 'sul_soro_foundry');
    link('sul_soro_gallery', 'w', 'sul_soro_terrace');
    link('sul_soro_exec', 'e', 'sul_soro_vault');
    link('sul_soro_vault', 'e', 'sul_soro_seam');
    // Pinyumb -> SoroSuub Spire.
    link('sul_city_soroway', 'e', 'sul_soro_gate');

    /* ================================================================= *
     *  V. THE UNDERDEEP  (18) — the wild caverns below the company's world,
     *     and the famed mineral springs.
     * ================================================================= */
    room('sul_deep_gate', 'The Threshold of the Underdeep',
      `The old stair ends at a natural rift where SoroSuub's lights finally give ` +
      `out and the wild Underdeep begins — the true, untamed cave-world the ` +
      `Sullustans came from and never wholly left. The air changes: colder, ` +
      `wetter, alive with the drip and echo of unmapped dark. Beyond here the ` +
      `company's writ thins to nothing, and the buried world belongs, again, to ` +
      `itself.`);
    room('sul_deep_cavern', 'The Great Under-Cavern',
      `A natural cavern of staggering size, its roof and floor a frozen storm of ` +
      `stalactite and stalagmite, lit only by the pale glow of the living rock and ` +
      `the moss that clings to it. No company hand shaped this; it is Sullust as ` +
      `it was before the Delvers, and standing in its cold and its silence you ` +
      `understand why a people might have knelt to it, and stayed.`);
    room('sul_deep_warren', 'The Old Warren',
      `A honeycomb of ancient dwelling-caves, the first homes of the First Delvers, ` +
      `their walls still bearing the smoke-stains and hand-marks of ten thousand ` +
      `years ago. Some Sullustans live here yet, the old-blooded and the ` +
      `company-shy, keeping the first ways in the first dark, and they regard a ` +
      `visitor from the bright city as very nearly an offworlder.`);
    room('sul_deep_fungus', 'The Wild Fungus Forest',
      `A cavern grown wild with luminous fungus taller than a man, a silent forest ` +
      `of soft light in every impossible colour, uncultivated and unowned. The ` +
      `spores drift like slow snow; the glow shifts as you move; and somewhere in ` +
      `the deep of it, the old folk say, the fungus grows in patterns that are not ` +
      `quite random, and not quite a language, and best not read too long.`);
    room('sul_deep_glowfield', 'The Glowfield',
      `A vast slow cataract of bioluminescent slime-mould sheeting down a cavern ` +
      `wall in curtains of blue-green light, beautiful and faintly breathing. The ` +
      `Sullustans harvest its glow-essence by hand for their lamps and their ` +
      `medicine, and leave, always, more than they take, by a courtesy older than ` +
      `the company that would have stripped it bare.`);
    room('sul_deep_spring', 'The Springs of Piringiisi',
      `The famed mineral springs of the deep world: a grotto of steaming, ` +
      `jewel-blue pools terraced down the rock, the water rich with the planet's ` +
      `warmth and the planet's minerals, curling the air with fragrant vapour. ` +
      `Sullustans have bathed here since before they had cities; it is the one ` +
      `luxury of the buried world that even SoroSuub has never dared to charge ` +
      `for, and the one place on Sullust where everyone, for an hour, is equal.`);
    room('sul_deep_pool', 'The Deepest Pool',
      `The lowest and hottest of the Piringiisi pools, a still blue eye of ` +
      `mineral water so clear it seems to have no bottom, though the old folk swear ` +
      `it does, and that things have gone down to find it and not come back up. ` +
      `The steam wreathes; the warmth soaks bone-deep; and the silence here is the ` +
      `oldest thing on the world.`);
    room('sul_deep_lake', 'The Sightless Lake',
      `A great subterranean lake stretching away into total dark, its black water ` +
      `flat and cold and patient, home to the pale blind fish and stranger things ` +
      `the deep has shaped without light. No lamp can find its far shore. The ` +
      `Sullustans do not swim here, and do not fish here, and lower their voices ` +
      `here without quite knowing why.`);
    room('sul_deep_grotto', 'The Echo Grotto',
      `A grotto so perfectly shaped that a whisper thrown against its far wall ` +
      `comes back a chorus, a hundredfold and changed, so that a single Sullustan ` +
      `may sing here and be answered by a choir. The old folk come to speak with ` +
      `the ancestors in this way, and to listen, and now and then to hear, in the ` +
      `returning voices, a word they did not say.`);
    room('sul_deep_shrine', 'The Deep Shrine',
      `A shrine older than Pinyumb, older than SoroSuub, older than memory — a ` +
      `natural spire of glowing rock the First Delvers found and knew, at once, to ` +
      `be holy. No image, no idol, only the living light of the deep world itself, ` +
      `and the spiral of names wound up it, and the sense, strong here as nowhere ` +
      `else, of a world that was a refuge before it was a mine.`);
    room('sul_deep_market', 'The Free Market',
      `A cavern where the company-shy of the Underdeep trade the old way — glow-` +
      `essence, wild fungus, cave-fish, memory and rumour — with no SoroSuub tag ` +
      `on any of it. It is the one market on Sullust the company does not skim, ` +
      `because the company does not, quite, dare come down here to try. Its ` +
      `existence is a small, stubborn freedom, and everyone in it knows the ` +
      `price of losing it.`);
    room('sul_deep_still', 'The Fungus Still',
      `A cave thick with the fumes of a fungus-still, where a wild-bearded ` +
      `Sullustan brews the fierce clear spirit the deep folk drink and the bright ` +
      `city buys under the counter. He offers you a cup with the grave courtesy of ` +
      `the Underdeep, and watches, with huge dark amused eyes, to see whether the ` +
      `offworlder can take it. (The offworlder, mostly, cannot.)`);
    room('sul_deep_nest', 'The Beast-Cave',
      `A fouled cavern, bone-littered and rank, where one of the deep world's ` +
      `great blind predators dens — a rockcrawler, pale and eyeless and long as a ` +
      `speeder, that the First Delvers fought for these caverns and the deep folk ` +
      `still, now and then, must fight again. Something vast shifts in the dark at ` +
      `the back, and tastes the air, and knows you are not Sullustan.`);
    room('sul_deep_tunnels', 'The Unmapped Tunnels',
      `A branching dark where even the Sullustan gift for never forgetting a path ` +
      `meets its limit, for these tunnels change — the deep rock shifts, the seeps ` +
      `open and close new ways — and no map, however perfect the memory that holds ` +
      `it, stays true for long. Only the boldest of the deep folk go far in here, ` +
      `and they go marking the walls behind them, and they do not go alone.`);
    room('sul_deep_chasm', 'The Sounding Chasm',
      `A black chasm splitting the cavern floor, so deep that a dropped stone ` +
      `falls beyond hearing, breathing up a cold draught from a dark below the ` +
      `deep. The Sullustans have flung a single rope-bridge across it and named it, ` +
      `simply, the Sounding, for the way it swallows sound — and, they say, the ` +
      `way, on the worst nights, it gives a little back.`);
    room('sul_deep_bridge', 'The Rope-Bridge',
      `A swaying span of woven cable and slats crossing the Sounding Chasm, the ` +
      `cold updraught tugging at it, the dark falling away to nothing beneath. ` +
      `Cross carefully, and quietly; the deep folk hold that the chasm listens, ` +
      `and that it is best not to give it a name to remember you by.`);
    room('sul_deep_deepway2', 'The Descending Way',
      `A worn way winding on down and away from the shrine, toward the deeper ` +
      `Underdeep the old folk speak of only obliquely — the true bottom of the ` +
      `world, where the caverns give out and the fire begins again. Few living ` +
      `Sullustans have gone down it far. Fewer still have come back up with much ` +
      `to say.`);
    // EXPANSION: sul_deep_abyss stubs onto the unbuilt lower Underdeep.
    room('sul_deep_abyss', 'The Edge of the Deep Dark',
      `The descending way ends at a ledge above a dark that is not a chasm but an ` +
      `absence, where the mapped Underdeep gives out and the true, nameless bottom ` +
      `of Sullust begins — a cold immensity the deep folk will not describe and the ` +
      `company does not admit exists. There is no way further, yet. What waits ` +
      `below is not yet dug for you to find.`);

    link('sul_deep_gate', 'd', 'sul_deep_cavern');
    link('sul_deep_cavern', 'n', 'sul_deep_warren');
    link('sul_deep_cavern', 'e', 'sul_deep_fungus');
    link('sul_deep_cavern', 'w', 'sul_deep_spring');
    link('sul_deep_cavern', 'ne', 'sul_deep_grotto');
    link('sul_deep_cavern', 'nw', 'sul_deep_shrine');
    link('sul_deep_cavern', 's', 'sul_deep_tunnels');
    link('sul_deep_cavern', 'se', 'sul_deep_market');
    link('sul_deep_warren', 'n', 'sul_deep_still');
    link('sul_deep_fungus', 'e', 'sul_deep_glowfield');
    link('sul_deep_spring', 'w', 'sul_deep_pool');
    link('sul_deep_spring', 's', 'sul_deep_lake');
    link('sul_deep_grotto', 'e', 'sul_deep_nest');
    link('sul_deep_tunnels', 's', 'sul_deep_chasm');
    link('sul_deep_chasm', 's', 'sul_deep_bridge');
    link('sul_deep_shrine', 's', 'sul_deep_deepway2');
    link('sul_deep_deepway2', 'd', 'sul_deep_abyss');
    // Pinyumb -> Underdeep.
    link('sul_city_deepway', 'd', 'sul_deep_gate');

    /* ================================================================= *
     *  Inhabitants — a light population for now; the world is to be peopled
     *  further as its deeper caverns are built out.
     * ================================================================= */

    // --- Bonus gear ---
    R.sul_port_outfitter.add(world.item({
      name: 'SoroSuub blaster',
      keywords: ['blaster', 'sorosuub', 'pistol'],
      short: 'A boxed SoroSuub blaster pistol sits on the outfitter\'s shelf.',
      description:
        'A precise, over-engineered SoroSuub sidearm, machined to the company\'s ' +
        'famous tolerances and packaged with a warranty longer than its barrel. ' +
        'It is, characteristically, both excellent and slightly more than you ' +
        'meant to spend.',
      weight: 2,
      damage: [4, 7],
      accuracy: 2,
    }));
    R.sul_mine_foreman.add(world.item({
      name: 'miner\'s fusioncutter',
      keywords: ['fusioncutter', 'cutter', 'tool'],
      short: 'A heavy miner\'s fusioncutter leans in the corner.',
      description:
        'A brutal rock-cutting tool of Sullustan make, its fusion-edge meant for ' +
        'stone but perfectly, terribly willing to part flesh. Heavy, ugly, and ' +
        'reassuring in the dark.',
      weight: 6,
      damage: [5, 10],
      accuracy: 1,
    }));

    // --- Folk to talk to ---
    R.sul_port_sorooffice.add(world.mob({
      name: 'SoroSuub liaison',
      keywords: ['liaison', 'officer', 'sorosuub', 'official'],
      short: 'A smiling SoroSuub liaison rises to greet you, datapad ready.',
      description:
        'An impeccably groomed corporate officer, human and warm and entirely ' +
        'made of company, who greets every arrival as a valued potential partner ' +
        'and files them, afterward, under a heading only the Spire ever sees.',
      xp: 0,
      dialogue:
        'Welcome to Sullust! On behalf of the SoroSuub Corporation — which is to ' +
        'say, on behalf of Sullust, there being, between us, no meaningful ' +
        'difference — may I say how glad we are you\'ve come. The air is our ' +
        'gift, the light is our gift, and the opportunities, friend, are ' +
        'boundless. Do let me tell you about our staryachts.',
    }));
    R.sul_deep_warren.add(world.mob({
      name: 'old delver',
      keywords: ['delver', 'sullustan', 'elder'],
      short: 'An old Sullustan watches you from a hand-marked cave-mouth.',
      description:
        'An age-jowled Sullustan of the old blood, huge dark eyes bright in the ' +
        'gloom, who keeps the first ways in the first dark and holds the whole ' +
        'unmapped Underdeep in a memory the company would give a great deal to ' +
        'read.',
      xp: 0,
      dialogue:
        'You come from the bright city, offworlder — I smell the lamp-oil on you. ' +
        'The company thinks it owns this world. It owns the *top* of it, the ' +
        'thin sweet crust where the light is. Down here is older. Down here ' +
        'remembers the fire we fled, and the dark that took us in, and it does ' +
        'not answer to any ledger. Mind the beast-cave. Mind the chasm. And ' +
        'never, ever, tell the dark your name.',
    }));

    // --- Hostiles ---
    R.sul_mine_sublevel.add(world.mob({
      name: 'malfunctioning mining droid',
      keywords: ['droid', 'mining', 'digger'],
      short: 'A mining droid grinds around, cutter-arm sparking, logic gone wrong.',
      description:
        'A heavy SoroSuub excavation-droid abandoned to the flooded dark, its ' +
        'logic-core corroded past reason, its rock-cutter still live and still ' +
        'hungry for something to cut. It no longer knows stone from flesh, and ' +
        'has stopped caring to.',
      hostile: true,
      level: 3,
      maxHp: 32,
      stats: { str: 15, dex: 10, con: 14, int: 3 },
      damage: [4, 8],
      armor: 2,
      xp: 85,
      respawns: 100,
    }));
    R.sul_soro_security.add(world.mob({
      name: 'SoroSuub security trooper',
      keywords: ['trooper', 'guard', 'security', 'sorosuub'],
      short: 'A SoroSuub security trooper levels a blaster and orders you to halt.',
      description:
        'A member of SoroSuub\'s private corporate army, armoured in company grey ' +
        'and answerable to no law but the board\'s, trained to remove ' +
        'inconveniences quickly and file them quietly. You have become an ' +
        'inconvenience.',
      hostile: true,
      level: 5,
      maxHp: 46,
      stats: { str: 14, dex: 15, con: 14, int: 11 },
      damage: [5, 9],
      armor: 3,
      xp: 150,
      respawns: 130,
    }));
    R.sul_deep_nest.add(world.mob({
      name: 'rockcrawler',
      keywords: ['rockcrawler', 'crawler', 'beast', 'predator'],
      short: 'A pale, eyeless rockcrawler pours out of the dark, tasting the air.',
      description:
        'A great blind cave-predator of the deep world, pale and chitinous and ' +
        'long as a speeder, all reaching limb and grinding mouth, that hunts the ' +
        'dark by scent and tremor and has fed on the buried world since before ' +
        'the Delvers came. It knows you are not Sullustan. It does not mind.',
      hostile: true,
      level: 6,
      maxHp: 58,
      stats: { str: 18, dex: 12, con: 16, int: 4 },
      damage: [6, 11],
      armor: 2,
      xp: 210,
      respawns: 160,
    }));

    return {
      area: sullust,
      arrivalId: 'sul_port_arrival',    // where the Coruscant transit lands
      returnId: 'sul_port_concourse',   // where the transit back to Coruscant is
    };
  };
})(typeof window !== 'undefined' ? window : this);
