/*
 * nalhutta.js — NAL HUTTA, "Hutta", the Hutt homeworld: the landing quarter.
 *
 * A 100-room area, and the most openly unfinished of the three — by design.
 * The brief is explicit: for now Nal Hutta contains only the place you land
 * (Bilbousa Spaceport) and a slice of the city around it, with the rest of the
 * capital — and the whole swamp-world beyond — left as sealed gates, boarded
 * causeways, and horizons pointing at content not yet built. This is a
 * beachhead on the Hutt homeworld, meant to be expanded a great deal.
 *
 * Nal Hutta is the Hutts' own poisoned jewel: a swamp-world terraformed,
 * strip-mined, and choked into "the Glorious Jewel" of Huttese boast, its skies
 * a permanent smog, its bogs industrial and lethal, its native peoples long
 * since enslaved or driven under. Its capital is Bilbousa, a low sprawl of
 * domes and mud where the kajidics keep their homeworld estates. You arrive by
 * Hutt shuttle from Nar Shaddaa, set down at the Bilbousa Spaceport; a terminal
 * there runs the shuttle back up to the Moon.
 *
 * Content, not framework. Populated into the shared World by world-data.js,
 * which wires the cross-world transit.
 *
 * LAYOUT (districts):
 *   nal_port_*     Bilbousa Spaceport (landing) ......... 24   ARRIVE / to Moon
 *   nal_baz_*      The Bilbousa Bazaar .................. 20
 *   nal_quarter_*  The Hutt Quarter (an estate's edge) .. 18
 *   nal_slum_*     The Worker Warrens .................. 20
 *   nal_swamp_*    The Swamp Fringe (the city's edge) .. 18
 *                                                         ---
 *                                                         100
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildNalHutta = function buildNalHutta(ctx) {
    const { world, R, room, link } = ctx;

    const nal = world.area({
      id: 'nalhutta',
      name: 'Nal Hutta, the Glorious Jewel',
      description:
        'The swamp homeworld of the Hutts — poisoned, boastful, and cruel — and ' +
        'its capital of Bilbousa, of which only the landing quarter is yet built.',
    });

    /* ================================================================= *
     *  I. BILBOUSA SPACEPORT  (24) — where you land, and where the shuttle
     *     runs back up to Nar Shaddaa.
     * ================================================================= */
    room('nal_port_arrival', 'The Bilbousa Landing Pad',
      `The Hutt shuttle sets down on a stained ferrocrete pad under Nal Hutta's ` +
      `permanent brown sky, the air thick as soup and sweet-rotten with swamp ` +
      `and industry. This is the homeworld of the Hutts: no neon carnival like ` +
      `the Moon above, just a low, heavy, humid sprawl of domes and mud that ` +
      `calls itself, without irony, the Glorious Jewel.`);
    room('nal_port_concourse', 'The Spaceport Concourse',
      `A humid, low-domed concourse where offworld business arrives to grovel ` +
      `before the Hutts in their own swamp, herded past cartel officials and ` +
      `idols of the Hutt pantheon. A transit terminal stands against the far ` +
      `wall, offering the shuttle back up to Nar Shaddaa — the only easy way off ` +
      `this world.`);
    room('nal_port_gate', 'The Spaceport Gate',
      `The great mud-brick gate where the spaceport gives onto Bilbousa proper, ` +
      `guarded by cartel muscle and hung with the sigils of the ruling kajidic. ` +
      `Beyond it the capital's bazaar seethes; the smell of the city rolls in to ` +
      `meet you, and it is not an improvement.`);
    room('nal_port_customs', 'The Customs Dome',
      `A domed hall where Hutt customs assess the arriving — which is to say, ` +
      `decide what to confiscate and what to tax, both to the cartel's profit. ` +
      `The officials are slow, bored, and immovable, and the queue has learned ` +
      `not to hurry them.`);
    room('nal_port_taxoffice', 'The Tribute Office',
      `A grim little office where every offworlder is relieved of a "landing ` +
      `tribute" to the ruling Hutt, posted nowhere and refused at one's peril. ` +
      `The clerk is a Niktan of infinite patience and no mercy, and the receipt, ` +
      `he notes, guarantees nothing.`);
    room('nal_port_market', 'The Portside Market',
      `A cramped market of the freshly-landed and the freshly-needed — swamp-gear, ` +
      `breath-masks, charge-cells, and food a careful being inspects twice. The ` +
      `vendors price the offworlder by the sweat on his brow and the panic in ` +
      `his eyes.`);
    room('nal_port_cantina', 'The Landing Cantina',
      `A dim, sweating cantina where offworld crews brace themselves before ` +
      `going into the city and drown their relief after coming out. The drink is ` +
      `local and vicious, and the regulars watch every newcomer as a Hutt watches ` +
      `a debt.`);
    room('nal_port_docks', 'The Cargo Docks',
      `Berths for the freighters that carry the homeworld's grim trade — spice, ` +
      `slaves, and the strip-mined wealth of the bogs — loaded by the indentured ` +
      `under the eye of cartel foremen. The work never stops, and neither, ` +
      `visibly, do the workers.`);
    room('nal_port_berth2', 'The Private Berth',
      `A guarded berth reserved for the yachts of visiting kajidic dignitaries, ` +
      `kept clean and quiet and apart from the common traffic. The ships here ` +
      `are worth a district, and are watched a great deal better than one.`);
    room('nal_port_hangar', 'The Repair Hangar',
      `A gantry-hung hangar where ships are patched for the run back offworld, ` +
      `the mechanics a mix of the indentured and the merely trapped. Coolant ` +
      `drips; sparks fall; the work is grudging and just good enough.`);
    room('nal_port_fuelyard', 'The Fuel Yard',
      `A reeking yard of fuel-tanks and cracked pipe under the brown sky, the ` +
      `hypermatter sold at the cartel's price to ships desperate to leave. The ` +
      `strobes flash unheeded; here, the danger is simply the weather of the ` +
      `place.`);
    room('nal_port_impound', 'The Impound Cage',
      `A caged yard of ships and cargo seized against unpaid tribute, slowly ` +
      `stripped by the guards who seized them. Every hull in here belonged to ` +
      `someone who thought the Hutt was bluffing.`);
    room('nal_port_smugglerdock', 'The Quiet Dock',
      `An unlisted berth down a service-tunnel where the cartel's own quiet ` +
      `cargo moves, unweighed and unquestioned. The crews here do not meet your ` +
      `eye; the fixer in the shadows takes note of yours.`);
    room('nal_port_droidbay', 'The Droid Pool',
      `A charging-bay of leased and labouring droids, optics dark, waiting to be ` +
      `hired to offworlders who cannot read the Huttese scripts or stomach the ` +
      `Huttese air. A protocol unit apologises reflexively to everyone who ` +
      `passes.`);
    room('nal_port_medbay', 'The Spaceport Medbay',
      `A clinic of stained cots and a wheezing med-droid, patching the ` +
      `swamp-sick and the newly-arrived whose lungs have not made peace with ` +
      `Nal Hutta's air. It does what it can, and charges for it, and does not ` +
      `promise.`);
    room('nal_port_shrine', 'The Hutt Idol',
      `A niche holding a fat, gilded idol of the Hutt pantheon, before which the ` +
      `superstitious of the port leave coin and the desperate leave prayers. The ` +
      `idol smiles its boneless smile and promises, like the Hutts, nothing at ` +
      `all.`);
    room('nal_port_control', 'The Control Tower',
      `A low control-tower threading the port's traffic through the smog by ` +
      `instrument and bribe, half its board squawking codes that do not match ` +
      `their ships. The controllers are paid to be incurious, and are very good ` +
      `at their jobs.`);
    room('nal_port_guardpost', 'The Cartel Guard-Post',
      `A fortified post of cartel enforcers who keep the port's order the Hutt ` +
      `way — protecting the tribute and ignoring the rest. A Gamorrean watches ` +
      `the arrivals with slow, tusked suspicion.`);
    room('nal_port_catwalk', 'The Port Catwalks',
      `A web of catwalks over the port's lower workings, the brown sky pressing ` +
      `low overhead and the mud gleaming far below. The whole structure ticks ` +
      `and settles in the heat like a thing digesting.`);
    room('nal_port_flophouse', 'The Port Flophouse',
      `A warren of rented sleep-slots for the stranded and the between-ships, the ` +
      `air thick enough to chew and the locks a polite fiction. A credit buys ` +
      `six hours; sleeping through them unrobbed costs extra.`);
    room('nal_port_checkpoint', 'The Inner Checkpoint',
      `A cartel checkpoint metering who passes deeper into the port complex, ` +
      `lightening travellers of whatever seems worth the taking. The guards are ` +
      `bored and casually grasping, and the queue does not argue twice.`);
    room('nal_port_lift', 'The Port Turbolift',
      `A slow freight-lift down into the spaceport's sub-levels, most of its ` +
      `floor-buttons dark. The nearest under-level still answers; the deeper ` +
      `ones are sealed against whatever the swamp sends up.`);
    room('nal_port_underport', 'The Under-Port',
      `A dim, flooded sub-level beneath the pads, warm swamp-water underfoot and ` +
      `the drip of the port breathing above. The homeworld's true, wet dark ` +
      `begins here.`);
    // EXPANSION: nal_port_ramp stubs onto the spaceport's unbuilt lower complex.
    room('nal_port_ramp', 'The Barred Ramp',
      `A down-ramp into the deeper port complex — and, a few metres on, a cartel ` +
      `blast-door, sealed and swamp-slick and plainly not meant to open. What ` +
      `lies deeper in Bilbousa Spaceport is not yet built for you to reach.`);

    link('nal_port_concourse', 'sw', 'nal_port_arrival');
    link('nal_port_concourse', 'n', 'nal_port_gate');
    link('nal_port_concourse', 'e', 'nal_port_customs');
    link('nal_port_concourse', 'w', 'nal_port_market');
    link('nal_port_concourse', 's', 'nal_port_cantina');
    link('nal_port_concourse', 'ne', 'nal_port_control');
    link('nal_port_concourse', 'nw', 'nal_port_medbay');
    link('nal_port_concourse', 'se', 'nal_port_guardpost');
    link('nal_port_customs', 'e', 'nal_port_taxoffice');
    link('nal_port_customs', 'n', 'nal_port_checkpoint');
    link('nal_port_market', 's', 'nal_port_docks');
    link('nal_port_market', 'w', 'nal_port_smugglerdock');
    link('nal_port_docks', 's', 'nal_port_hangar');
    link('nal_port_docks', 'e', 'nal_port_berth2');
    link('nal_port_hangar', 'w', 'nal_port_fuelyard');
    link('nal_port_smugglerdock', 's', 'nal_port_impound');
    link('nal_port_cantina', 'e', 'nal_port_flophouse');
    link('nal_port_control', 'n', 'nal_port_droidbay');
    link('nal_port_medbay', 'w', 'nal_port_shrine');
    link('nal_port_guardpost', 'e', 'nal_port_catwalk');
    link('nal_port_catwalk', 's', 'nal_port_lift');
    link('nal_port_lift', 'd', 'nal_port_underport');
    link('nal_port_underport', 'e', 'nal_port_ramp');

    /* ================================================================= *
     *  II. THE BILBOUSA BAZAAR  (20) — the slice of the capital you land in.
     * ================================================================= */
    room('nal_baz_gate', 'The Bazaar Gate',
      `The spaceport gate lets out into the Bilbousa Bazaar, the beating, ` +
      `haggling heart of the Hutt capital, a low sprawl of stalls and mud-brick ` +
      `under the brown sky. The noise, the stink, and the sheer massed appetite ` +
      `of the place hit like a wall.`);
    room('nal_baz_plaza', 'The Bazaar Plaza',
      `The central plaza of the bazaar, ringed by the awnings of a hundred ` +
      `trades, thronged with beings buying and selling everything the Hutt ` +
      `worlds produce and consume. Ways run off to the Hutt quarter, the ` +
      `warrens, and the swamp-edge; the rest of Bilbousa lies beyond, unbuilt ` +
      `and waiting.`);
    room('nal_baz_market', 'The Goods Market',
      `Rows of stalls of hard goods, swamp-produce, and offworld luxury, the ` +
      `merchants sharp and the prices sharper. Everything is negotiable, and ` +
      `everything is watched, and the cartel takes its cut of it all.`);
    room('nal_baz_spicestall', 'The Spice Stall',
      `A curtained stall where spice of every grade is weighed in a shimmer of ` +
      `narcotic dust, the homeworld's foulest and most profitable trade sold in ` +
      `plain daylight. The seller is serene; the buyers are hollow; the Hutts ` +
      `grow fat.`);
    room('nal_baz_slaveblock', 'The Slave Block',
      `A raised block, chains and all, where the cartel sells the trafficked and ` +
      `the debt-bound under the eye of a bored auctioneer — the Hutts' oldest ` +
      `and most casual cruelty, conducted like any other commerce. It is the ` +
      `homeworld with its mask entirely off.`);
    room('nal_baz_weaponstall', 'The Weapon Stall',
      `A stall of blasters and blades sold openly to anyone with coin, the ` +
      `Trandoshan proprietor demonstrating an edge on his own scaled thumb. On ` +
      `Nal Hutta the only weapons-law is who the Hutt permits to be armed.`);
    room('nal_baz_dealer', 'The Goods Dealer',
      `A fixer's stall where harder-to-find goods are sourced for a deposit and ` +
      `no questions, the shelves a smuggler's promise. Given a day, the dealer ` +
      `swears, he can find anything on any of the Hutt worlds.`);
    room('nal_baz_moneychanger', 'The Money-Changer',
      `A grille-fronted booth where offworld credits are changed into the hard ` +
      `currency and cartel scrip the homeworld actually runs on, at a rate that ` +
      `is frank robbery. The changer weighs every coin and trusts none.`);
    room('nal_baz_caravan', 'The Caravan Yard',
      `A muddy yard where the swamp-caravans form up to carry trade out to the ` +
      `Hutt estates and mining-camps beyond the city, their beasts of burden ` +
      `groaning in the heat. The drovers know roads that are not on any map, and ` +
      `keep it that way.`);
    room('nal_baz_foodstalls', 'The Food Stalls',
      `A reeking row of food-stalls grilling swamp-catch and stranger things, ` +
      `the smoke thick and the fare a gamble. Offworlders eat here on a dare; ` +
      `the locals eat here from habit and iron stomachs.`);
    room('nal_baz_cantina', 'The Bazaar Cantina',
      `A low cantina at the bazaar's edge where deals are struck over local ` +
      `liquor and the day's trade is gossiped into legend. The bartender hears ` +
      `everything, and sells the good parts to the information-broker two stalls ` +
      `down.`);
    room('nal_baz_junk', 'The Junk Stall',
      `A teetering stall of salvage and offworld cast-offs, droid parts and ` +
      `ship-scrap and mystery crates, run by a Jawa clan far from home. Treasure ` +
      `and trash are heaped together; sorting them is the customer's problem.`);
    room('nal_baz_shrine', 'The Bazaar Idol',
      `A gilded Hutt idol presiding over the bazaar's commerce, garlanded with ` +
      `the offerings of the superstitious hoping for a good day's trade. It ` +
      `smiles upon the buying and the selling and the slaving with equal, ` +
      `boneless serenity.`);
    room('nal_baz_overlook', 'The Bazaar Overlook',
      `A low rise at the bazaar's edge with a view out over the smog-choked ` +
      `sprawl of Bilbousa — mud-domes to a brown horizon, the Hutt estates ` +
      `humped on their rises, the swamp glinting foul beyond. Most of what you ` +
      `see, you cannot yet walk to.`);
    room('nal_baz_alley', 'A Bazaar Alley',
      `A crooked mud-alley off the main press where the light thins and the ` +
      `frank business is done — the deal, the threat, the quiet knife. It smells ` +
      `of the swamp and worse, and is best crossed briskly.`);
    room('nal_baz_backlane', 'The Back Lane',
      `A back lane of shuttered workshops and cartel storerooms, quiet and ` +
      `watched, where the bazaar keeps what it would rather the plaza did not ` +
      `see. Strangers are noted here, and remembered.`);
    room('nal_baz_fountain', 'The Oily Fountain',
      `A sunken plaza-fountain running with water the colour of weak caf, more ` +
      `industrial run-off than water, ringed by beings who use it anyway for ` +
      `want of better. On Nal Hutta, this passes for a civic amenity.`);
    // The bazaar's gateways to the quarter, the warrens, and the swamp.
    room('nal_baz_quarterway', 'The Estate Road',
      `A guarded road climbing east toward the humped estates of the Hutt ` +
      `quarter, the mud-brick giving way to imported stone the nearer it draws ` +
      `to the kajidic's ground. The traffic thins to the permitted and the ` +
      `summoned.`);
    room('nal_baz_slumway', 'The Warren Road',
      `A descending road west into the worker-warrens, the crowd greying and ` +
      `thinning to the indentured and the enslaved who keep Bilbousa running. ` +
      `The cartel checkpoints watch who goes down, and care little who does ` +
      `not come back.`);
    room('nal_baz_swampway', 'The Swamp Causeway',
      `A raised causeway leading southeast out of the city toward the swamp ` +
      `fringe, the mud-brick petering out into stilts and reed and the vast, ` +
      `foul, breathing bog that is most of Nal Hutta. The Glorious Jewel, up ` +
      `close.`);

    link('nal_baz_gate', 'n', 'nal_baz_plaza');
    link('nal_baz_plaza', 'n', 'nal_baz_market');
    link('nal_baz_plaza', 'e', 'nal_baz_quarterway');
    link('nal_baz_plaza', 'w', 'nal_baz_slumway');
    link('nal_baz_plaza', 'ne', 'nal_baz_foodstalls');
    link('nal_baz_plaza', 'nw', 'nal_baz_shrine');
    link('nal_baz_plaza', 'se', 'nal_baz_swampway');
    link('nal_baz_plaza', 'sw', 'nal_baz_overlook');
    link('nal_baz_plaza', 'd', 'nal_baz_fountain');
    link('nal_baz_market', 'n', 'nal_baz_spicestall');
    link('nal_baz_market', 'e', 'nal_baz_weaponstall');
    link('nal_baz_market', 'w', 'nal_baz_moneychanger');
    link('nal_baz_spicestall', 'n', 'nal_baz_slaveblock');
    link('nal_baz_weaponstall', 's', 'nal_baz_dealer');
    link('nal_baz_moneychanger', 'w', 'nal_baz_caravan');
    link('nal_baz_foodstalls', 'e', 'nal_baz_cantina');
    link('nal_baz_cantina', 'e', 'nal_baz_junk');
    link('nal_baz_overlook', 's', 'nal_baz_alley');
    link('nal_baz_alley', 'e', 'nal_baz_backlane');
    // Spaceport -> Bazaar.
    link('nal_port_gate', 'n', 'nal_baz_gate');

    /* ================================================================= *
     *  III. THE HUTT QUARTER  (18) — the edge of a kajidic's estate.
     * ================================================================= */
    room('nal_quarter_gate', 'The Estate Gate',
      `A grand mud-and-marble gate marking where common Bilbousa ends and the ` +
      `ground of the ruling kajidic begins, flanked by cartel guards and the ` +
      `statuary of a Hutt clan's long greed. The air past it is, pointedly, a ` +
      `little cleaner.`);
    room('nal_quarter_court', 'The Estate Court',
      `A broad court of imported stone before the estate proper, kept ` +
      `immaculate by the enslaved for the pleasure of a Hutt who rarely looks at ` +
      `it. Everything here was bought with the misery of the warrens below, and ` +
      `remembers none of it.`);
    room('nal_quarter_palacegate', 'The Palace Doors',
      `The great doors of the kajidic's homeworld palace, humid and vast and ` +
      `guarded by things that do not blink, chased with the crest of the ruling ` +
      `clan. Beyond them the Hutt keeps its state; the doors open for the ` +
      `useful, the summoned, and the doomed.`);
    room('nal_quarter_audience', "The Hutt's Estate Hall",
      `A vast, humid hall where the estate's Hutt lord sprawls on a dais of ` +
      `cushions and coin, receiving supplicants with the flat, boneless patience ` +
      `of a creature that has never once been told no. Here, on the homeworld, ` +
      `the Hutts are not merely rich; they are sovereign, and they know it in ` +
      `every ounce of their bulk.`);
    room('nal_quarter_vault', 'The Estate Vault',
      `A guarded vault of the clan's homeworld wealth — spice, gems, and the ` +
      `deeds and debts that own half of Bilbousa — behind blast-doors and worse. ` +
      `The guards have no loyalty but the coin, and no duty but the door.`);
    room('nal_quarter_harem', 'The Pleasure Court',
      `A gilded court of the Hutt's kept companions and captives, decorated as ` +
      `lavishly as they are owned, smiling because they must. It is the ` +
      `homeworld's cruelty in its finest dress.`);
    room('nal_quarter_garden', 'The Estate Garden',
      `A walled garden of the swamp's few tolerable growths and many imported ` +
      `ones, tended by slaves for a Hutt's idle glance. On a poisoned world, a ` +
      `green space is the ultimate boast of wealth, and it is guarded like one.`);
    room('nal_quarter_pool', 'The Bask-Pool',
      `A vast warm mud-pool where the Hutt lord suns its bulk among lesser ` +
      `sycophant-Hutts, attended by nervous slaves with fans and delicacies. To ` +
      `be admitted to the bask is favour; to disturb it is death.`);
    room('nal_quarter_guardhall', 'The Guard Hall',
      `The muster of the estate guard — Gamorreans, Nikto, and worse, armed for ` +
      `a war and loyal to the payroll. A Gamorrean the size of a swamp-beast ` +
      `blocks the inner way, axe grounded, small eyes fixed on you with slow ` +
      `hostility.`);
    room('nal_quarter_kitchens', 'The Estate Kitchens',
      `Steaming kitchens laboring to feed a Hutt's monstrous appetite, staffed ` +
      `by the enslaved and the terrified, the fare exotic and endless. The head ` +
      `cook keeps a taster, and the taster keeps his will made.`);
    room('nal_quarter_dungeon', 'The Estate Dungeon',
      `Cells beneath the estate where the Hutt keeps its debtors and its ` +
      `displeasures, the dark low with the sound of the forgotten. The gaoler is ` +
      `fed well and sleeps soundly and has learned to hear nothing.`);
    room('nal_quarter_slavepen', 'The Slave Pens',
      `Barred pens where the estate's chattel are held between labours, the ` +
      `overseers casual with the shock-prod and the whip. It is the engine that ` +
      `drives everything above it, and everything above it is arranged never to ` +
      `look at it.`);
    room('nal_quarter_gallery', 'The Trophy Gallery',
      `A gallery of the clan's plunder across generations — art, armour, and the ` +
      `carbon-frozen shapes of enemies made ornament. The Hutts collect ` +
      `everything, forget nothing, and forgive less than nothing at all.`);
    room('nal_quarter_terrace', 'The Estate Terrace',
      `A terrace above the swamp-haze with the whole brown sprawl of Bilbousa ` +
      `laid out below, the city a low smudge under the permanent smog. From up ` +
      `here the Glorious Jewel looks almost bearable, which is the only angle ` +
      `from which it does.`);
    room('nal_quarter_fountain', 'The Estate Fountain',
      `A costly fountain of actual clean water, filtered at ruinous expense from ` +
      `the poisoned swamp, splashing in a court where a Hutt may hear it and be ` +
      `soothed. Its worth would ransom a warren; it exists so a Hutt need not ` +
      `think of the warren at all.`);
    room('nal_quarter_majordomo', "The Majordomo's Office",
      `A trim office where the estate's majordomo — a sleek, harried Twi'lek — ` +
      `runs the whole vast machinery of a Hutt's homeworld affairs, from the ` +
      `spice-ledgers to the slave-rolls. He is the second most powerful being ` +
      `in the quarter, and the most nervous, for good reason.`);
    room('nal_quarter_landing', 'The Estate Landing',
      `A guarded pad for the kajidic's own yachts and the comings and goings the ` +
      `cartel would rather went unseen. The ships here are worth more than the ` +
      `whole warren district, and are watched a great deal better.`);
    // EXPANSION: nal_quarter_seam opens onto the estate's unbuilt inner palace.
    room('nal_quarter_seam', 'The Sealed Wing',
      `A sealed inner wing of the palace, doors chased in gold and guarded by ` +
      `silence, beyond which the Hutt's true sanctum and the deeper estate are ` +
      `said to lie. They do not open for you. What waits there is not yet built ` +
      `for you to find.`);

    link('nal_quarter_gate', 'e', 'nal_quarter_court');
    link('nal_quarter_court', 'n', 'nal_quarter_palacegate');
    link('nal_quarter_court', 'e', 'nal_quarter_garden');
    link('nal_quarter_court', 's', 'nal_quarter_guardhall');
    link('nal_quarter_court', 'ne', 'nal_quarter_gallery');
    link('nal_quarter_court', 'nw', 'nal_quarter_terrace');
    link('nal_quarter_court', 'se', 'nal_quarter_majordomo');
    link('nal_quarter_court', 'sw', 'nal_quarter_landing');
    link('nal_quarter_palacegate', 'n', 'nal_quarter_audience');
    link('nal_quarter_audience', 'e', 'nal_quarter_vault');
    link('nal_quarter_audience', 'w', 'nal_quarter_harem');
    link('nal_quarter_audience', 'n', 'nal_quarter_pool');
    link('nal_quarter_garden', 'e', 'nal_quarter_fountain');
    link('nal_quarter_guardhall', 'w', 'nal_quarter_kitchens');
    link('nal_quarter_kitchens', 's', 'nal_quarter_dungeon');
    link('nal_quarter_dungeon', 's', 'nal_quarter_slavepen');
    link('nal_quarter_terrace', 'w', 'nal_quarter_seam');
    // Bazaar -> Hutt Quarter.
    link('nal_baz_quarterway', 'e', 'nal_quarter_gate');

    /* ================================================================= *
     *  IV. THE WORKER WARRENS  (20) — those who keep Bilbousa running.
     * ================================================================= */
    room('nal_slum_gate', 'The Warren Gate',
      `A cartel checkpoint marking where Bilbousa's respectable ground ends and ` +
      `the worker-warrens begin, metering the indentured and the enslaved who ` +
      `keep the city alive. The guards watch who descends; few watch who does ` +
      `not climb back.`);
    room('nal_slum_warren', 'The Warren',
      `A honeycomb sprawl of mud-brick hovels stacked and burrowed into the ` +
      `city's underside, teeming with the workers, indentured, and outright ` +
      `slaves who do Bilbousa's labour and share none of its wealth. It is loud, ` +
      `close, and doggedly, defiantly alive.`);
    room('nal_slum_market', 'The Warren Market',
      `A market of the almost-nothing, where the poor sell the poor a mended ` +
      `tool, a day's work, a twist of spice, a bowl of swamp-stew. The cartel ` +
      `taxes even this, and the tax-collector goes escorted.`);
    room('nal_slum_dealer', 'The Spice Hatch',
      `A barred hatch where the warren buys its oblivion by the twist, the ` +
      `dealer weighing the dust behind armourglass and dead eyes. The queue is ` +
      `patient and hollow and never short, for the warren has much to forget.`);
    room('nal_slum_mess', 'The Labour Mess',
      `A long trestle mess where the indentured are fed the grey minimum that ` +
      `keeps them working, ladled out under the eye of an overseer counting ` +
      `heads and hours. The food is fuel, and the workers are machinery, and the ` +
      `cartel does the sums accordingly.`);
    room('nal_slum_den', 'The Rest Den',
      `A dim den where the off-shift workers snatch what rest and rough comfort ` +
      `the warren allows, packed close, sleeping in their boots. It is not much. ` +
      `It is theirs, more or less, which in the warren is a great deal.`);
    room('nal_slum_bunkrows', 'The Bunk Rows',
      `Endless rows of communal bunks where the warren sleeps in shifts, ` +
      `possessions clutched, the whole reeking dormitory breathing as one tired ` +
      `body. Privacy is a word from another world.`);
    room('nal_slum_firebarrel', 'The Fire-Barrel Circle',
      `A ring of burning barrels where the warren gathers after the shift to ` +
      `share warmth, rumour, and the memory of freedom for those who ever had ` +
      `it. It is the warren's hearth, and its parliament, and it is watched.`);
    room('nal_slum_medtent', 'The Warren Med-Tent',
      `An overwhelmed med-tent where a failing droid and a kind-eyed slave with ` +
      `stolen training hold back injury and swamp-fever with almost nothing. ` +
      `They save who they can, and the cartel does not trouble to help, since ` +
      `the workers are cheap to replace.`);
    room('nal_slum_chapel', 'The Warren Shrine',
      `A shrine of the enslaved peoples' own mingled faiths — the old gods of ` +
      `the Evocii and a dozen conquered worlds, crowded onto one shelf and ` +
      `prayed to in whispers for a deliverance that never comes. The smoke ` +
      `climbs; the Hutts do not notice.`);
    room('nal_slum_pens', 'The Labour Pens',
      `Barred holding-pens where the enslaved are mustered before the day's ` +
      `labour and returned after it, the overseers free with the shock-prod. ` +
      `Here the homeworld's foundation is laid bare: the Glorious Jewel is built ` +
      `on this.`);
    room('nal_slum_overseer', "The Overseer's Post",
      `A caged post where a cartel overseer keeps the tally of labour and ` +
      `punishment, both in the same cold ledger. He works the warren by the only ` +
      `management the Hutts respect, and sleeps behind a locked and guarded ` +
      `door.`);
    room('nal_slum_foundry', 'The Warren Foundry',
      `A cramped, roaring foundry where the warren's labour is spent casting and ` +
      `smelting for the cartel's profit, the heat murderous and the safety ` +
      `nonexistent. Workers go into the foundry, one way and another, and the ` +
      `line does not slow to notice.`);
    room('nal_slum_well', 'The Warren Well',
      `A single filtered well serving the whole warren, rationed and guarded, ` +
      `the one thing on this poisoned world the workers cannot do without and ` +
      `cannot make. Whoever holds the well holds the warren, and the cartel ` +
      `holds the well.`);
    room('nal_slum_alley', 'A Warren Alley',
      `A dark mud-slot between hovels where the warren conducts what it hides ` +
      `from the overseers — a whispered plot, a stolen meal, a knife settled in ` +
      `the dark. It stinks of the swamp and desperation, and it is best walked ` +
      `fast.`);
    room('nal_slum_tunnel', 'The Under-Warren',
      `A branching tunnel beneath the warren where the hunted and the runaway ` +
      `hide from the overseers in a dark the cartel enters only in numbers. It ` +
      `is dangerous, and it is dark, and for some it is the only freedom the ` +
      `homeworld allows.`);
    room('nal_slum_sewer', 'The Warren Sewer',
      `A reeking drain carrying the warren's filth out toward the swamp, its ` +
      `ledges home to things that have adapted to it. The stench is a solid ` +
      `thing; the dark is worse; something moves in the black water.`);
    room('nal_slum_pit', 'The Sump',
      `A stagnant sump where the sewer pools before it drains to the bog, the ` +
      `water a scummed and reeking black. Something lairs in it, drawn up from ` +
      `the swamp, and the warren throws it what it must to keep it fed and ` +
      `distant.`);
    room('nal_slum_rooftop', 'The Warren Roofs',
      `A precarious runway of warren rooftops under the low brown sky, the ` +
      `estates humped bright and distant on their rise. The roof-runners cross ` +
      `here, and the desperate hide, and the whole hard sprawl of the labour ` +
      `district lies open below.`);
    // EXPANSION: nal_slum_seam opens onto the warrens' unbuilt lower depths.
    room('nal_slum_seam', 'The Collapsed Way',
      `A collapsed passage deeper into the warren's underside, choked with ` +
      `rubble and posted with a cartel warning. Whatever the lower warrens hold, ` +
      `the way to them is blocked — for now, and not forever.`);

    link('nal_slum_gate', 'w', 'nal_slum_warren');
    link('nal_slum_warren', 'n', 'nal_slum_market');
    link('nal_slum_warren', 's', 'nal_slum_mess');
    link('nal_slum_warren', 'w', 'nal_slum_bunkrows');
    link('nal_slum_warren', 'ne', 'nal_slum_chapel');
    link('nal_slum_warren', 'nw', 'nal_slum_medtent');
    link('nal_slum_warren', 'se', 'nal_slum_pens');
    link('nal_slum_warren', 'sw', 'nal_slum_well');
    link('nal_slum_warren', 'd', 'nal_slum_tunnel');
    link('nal_slum_warren', 'u', 'nal_slum_rooftop');
    link('nal_slum_market', 'e', 'nal_slum_dealer');
    link('nal_slum_mess', 'e', 'nal_slum_den');
    link('nal_slum_bunkrows', 's', 'nal_slum_firebarrel');
    link('nal_slum_pens', 's', 'nal_slum_overseer');
    link('nal_slum_pens', 'e', 'nal_slum_foundry');
    link('nal_slum_well', 's', 'nal_slum_alley');
    link('nal_slum_alley', 'e', 'nal_slum_seam');
    link('nal_slum_tunnel', 'd', 'nal_slum_sewer');
    link('nal_slum_sewer', 'e', 'nal_slum_pit');
    // Bazaar -> Worker Warrens.
    link('nal_baz_slumway', 'w', 'nal_slum_gate');

    /* ================================================================= *
     *  V. THE SWAMP FRINGE  (18) — the poisoned edge of the Glorious Jewel.
     * ================================================================= */
    room('nal_swamp_gate', 'The Causeway End',
      `The city's causeway runs out here at the swamp's edge, mud-brick giving ` +
      `way to stilt and reed and the vast, foul, breathing bog beyond. This is ` +
      `Nal Hutta unadorned: the Glorious Jewel is a poisoned marsh, and here it ` +
      `stops pretending otherwise.`);
    room('nal_swamp_causeway', 'The Stilt Causeway',
      `A raised walkway of ancient piling threading out over the bog, the ` +
      `mud sucking and gulping below, insects rising in humming columns in the ` +
      `heavy air. The stilt-villages of the swamp-folk cling to the causeway's ` +
      `length, wary of the city and warier of you.`);
    room('nal_swamp_bog', 'The Open Bog',
      `The open marsh proper, a horizon of black water and reed and drifting ` +
      `chemical haze, the surface breaking now and then with a bubble of ` +
      `swamp-gas or something worse. Nothing about it is safe, and nothing ` +
      `about it is as empty as it looks.`);
    room('nal_swamp_toxpool', 'The Tox-Pool',
      `A pool where the city's run-off gathers into a shimmering, iridescent ` +
      `poison, the reeds around it dead and the air above it wavering. Things ` +
      `still live in it — things the poison has changed — and they do not love ` +
      `the light.`);
    room('nal_swamp_nest', 'The Bog Nest',
      `A hummock of piled reed and mud where something large has made its lair, ` +
      `the ground littered with cracked shell and picked bone. The swamp-folk ` +
      `give it a wide berth; the thing within regards all trespass as delivery.`);
    room('nal_swamp_stilts', 'The Stilt-Village',
      `A clinging village of the swamp-folk — the homeworld's dispossessed ` +
      `natives and the city's cast-outs — built on piling over the bog, poor ` +
      `and proud and profoundly unwelcoming to Bilbousa and all its works. They ` +
      `have survived the Hutts by being beneath notice, and mean to keep it so.`);
    room('nal_swamp_hut', "The Elder's Hut",
      `A stilt-hut of the village elder, hung with the charms and remembrances ` +
      `of a people the Hutts drove to the margins of their own world. The elder ` +
      `keeps the old ways and the old grievances, and watches the city's ` +
      `hunger creep, year on year, a little nearer the reeds.`);
    room('nal_swamp_mudflat', 'The Mudflats',
      `A vast reeking flat of tidal swamp-mud, cracked and steaming under the ` +
      `brown sky, worked at low water by scavengers digging for swamp-catch and ` +
      `salvage. The mud takes the unwary and does not give them back.`);
    room('nal_swamp_refinery', 'The Bog Refinery',
      `A cartel refinery hunched at the swamp's edge, sucking up the bog's ` +
      `chemical wealth and voiding its poison straight back into the marsh — the ` +
      `very engine of Nal Hutta's ruin, running day and night. The workers here ` +
      `do not last long, and are not meant to.`);
    room('nal_swamp_pier', 'The Fishing Pier',
      `A rickety pier where the swamp-folk land their catch of bog-crawlers and ` +
      `worse, the planks slick with mud and scale. It is hard, poisoned work, ` +
      `and it feeds the village, and it is the village's own, which is more than ` +
      `the Hutts allow them elsewhere.`);
    room('nal_swamp_landing', 'The Skiff Landing',
      `A muddy landing where the flat-bottomed swamp-skiffs put in, the only way ` +
      `to cross the deep bog for those who know the channels. The skiff-folk ` +
      `guard those channels with their lives, for the map of the marsh is the ` +
      `one thing the Hutts have never managed to take from them.`);
    room('nal_swamp_reeds', 'The Reed Beds',
      `A whispering maze of reed taller than a Wookiee, the paths through it ` +
      `known only to the swamp-folk and lost in a dozen steps to anyone else. ` +
      `The reeds hide the village's secrets, and its refugees, and, now and ` +
      `then, its ambushes.`);
    room('nal_swamp_path', 'The Hidden Path',
      `A near-invisible path winding deeper into the swamp on hummocks of firm ` +
      `ground, marked by signs only the initiated can read. It leads on toward ` +
      `the wild heart of Nal Hutta — a country of bog and ruin and old, ` +
      `patient danger that no map has yet dared to chart.`);
    room('nal_swamp_ruin', 'The Sunken Ruin',
      `The half-drowned ruin of something older than the Hutts' coming — ` +
      `mud-slick stone raised by the world's first people, the Evocii, before ` +
      `they were driven under. The swamp-folk hold it sacred and sorrowful, and ` +
      `come here to remember what was taken.`);
    room('nal_swamp_fisherhuts', 'The Fisher Huts',
      `A cluster of stilt-huts where the swamp's fishers dry their poisoned ` +
      `catch and mend their nets, the smoke hanging low in the wet air. They ` +
      `trade with the city at arm's length and trust it not at all.`);
    room('nal_swamp_shrine', 'The Swamp Shrine',
      `A shrine of the swamp-folk sunk half into the mud, older and stranger ` +
      `than anything in the Hutt city, garlanded with reed and bone. It honours ` +
      `the marsh itself, and the drowned world beneath it, in a faith the ` +
      `conquerors never troubled to understand.`);
    room('nal_swamp_overlook', 'The Reed Overlook',
      `A low rise of firm ground above the reeds, looking back at Bilbousa ` +
      `humped brown and smoking against the sky, and out the other way at the ` +
      `endless swamp swallowing the horizon. Most of what lies out there is not ` +
      `yet built — the wild bulk of a whole poisoned world, waiting.`);
    // EXPANSION: nal_swamp_deepbog opens onto the unbuilt wilds of Nal Hutta.
    room('nal_swamp_deepbog', 'The Edge of the Deep Bog',
      `The hidden path gives out at the edge of the deep bog, where the mapped ` +
      `swamp ends and the true wilderness of Nal Hutta begins — a drowned, ` +
      `poisoned immensity of ruin and reed and older things, stretching on past ` +
      `all knowing. There is no way further, yet. The world beyond the reeds is ` +
      `a promise the map has not yet kept.`);

    link('nal_swamp_gate', 's', 'nal_swamp_causeway');
    link('nal_swamp_causeway', 's', 'nal_swamp_bog');
    link('nal_swamp_causeway', 'e', 'nal_swamp_stilts');
    link('nal_swamp_causeway', 'w', 'nal_swamp_mudflat');
    link('nal_swamp_causeway', 'se', 'nal_swamp_pier');
    link('nal_swamp_causeway', 'sw', 'nal_swamp_reeds');
    link('nal_swamp_causeway', 'ne', 'nal_swamp_fisherhuts');
    link('nal_swamp_causeway', 'nw', 'nal_swamp_shrine');
    link('nal_swamp_bog', 's', 'nal_swamp_toxpool');
    link('nal_swamp_toxpool', 'e', 'nal_swamp_nest');
    link('nal_swamp_stilts', 'e', 'nal_swamp_hut');
    link('nal_swamp_mudflat', 'w', 'nal_swamp_refinery');
    link('nal_swamp_pier', 's', 'nal_swamp_landing');
    link('nal_swamp_reeds', 's', 'nal_swamp_path');
    link('nal_swamp_path', 's', 'nal_swamp_deepbog');
    link('nal_swamp_fisherhuts', 'e', 'nal_swamp_ruin');
    link('nal_swamp_shrine', 'w', 'nal_swamp_overlook');
    // Bazaar -> Swamp Fringe.
    link('nal_baz_swampway', 'se', 'nal_swamp_gate');

    /* ================================================================= *
     *  Inhabitants — a light population; the homeworld is to be built out.
     * ================================================================= */

    // --- Bonus gear ---
    R.nal_baz_weaponstall.add(world.item({
      name: 'blaster carbine',
      keywords: ['carbine', 'blaster', 'rifle'],
      short: 'A blaster carbine rests on the weapon-stall rack.',
      description:
        'A sturdy two-hand blaster carbine of Hutt-market make, inelegant and ' +
        'reliable and sold to anyone with the coin. It hits harder than a ' +
        'pistol and asks no questions about your intentions.',
      weight: 5,
      damage: [5, 9],
      accuracy: 1,
    }));

    // --- Folk to talk to ---
    R.nal_quarter_majordomo.add(world.mob({
      name: "the majordomo",
      keywords: ['majordomo', 'twilek', 'steward'],
      proper: true,
      short: 'The harried majordomo looks up from his ledgers, already calculating.',
      description:
        'A sleek, sweating Twi\'lek who runs a Hutt lord\'s entire homeworld ' +
        'estate and lives every hour one mistake from the dungeon below. He is ' +
        'clever, frightened, and endlessly, professionally polite.',
      xp: 0,
      dialogue:
        'You have business with his Excellency? Everyone has business with his ' +
        'Excellency; that is what a Hutt is for. A word of counsel, offworlder, ' +
        'freely given: on Nal Hutta the Hutts are not merely rich. They are the ' +
        'law, the land, and the last word. Bow low, pay your tribute, and do ' +
        'not — ever — make one of them look small.',
    }));
    R.nal_swamp_hut.add(world.mob({
      name: 'swamp elder',
      keywords: ['elder', 'evocii', 'swamp'],
      short: 'The swamp elder watches you from the shadow of the hut, unreadable.',
      description:
        'An age-bent elder of the swamp-folk, keeper of a people the Hutts drove ' +
        'to the margins of their own world, hung with charms against the city ' +
        'and its hunger. There is a long, patient grief in them, and something ' +
        'harder underneath.',
      xp: 0,
      dialogue:
        'You come from the city, offworlder, and the city is the Hutts, and the ' +
        'Hutts are a sickness this world caught long ago. They named it a jewel ' +
        'and made it a grave. We remember when the reeds ran clean. We are ' +
        'patient, we of the swamp. The bog outlasts everything. Even them.',
    }));

    // --- Hostiles ---
    R.nal_slum_overseer.add(world.mob({
      name: 'slave overseer',
      keywords: ['overseer', 'slaver', 'foreman'],
      short: 'A slave overseer turns, shock-prod crackling, to see who dares.',
      description:
        'A brutal cartel foreman grown fat and cruel on absolute power over the ' +
        'warren\'s enslaved, shock-prod in hand and ledger in mind. He has never ' +
        'been defied, and the prospect makes him almost eager.',
      hostile: true,
      level: 4,
      maxHp: 40,
      stats: { str: 15, dex: 12, con: 14, int: 9 },
      damage: [4, 8],
      armor: 2,
      xp: 120,
      respawns: 110,
    }));
    R.nal_quarter_guardhall.add(world.mob({
      name: 'Gamorrean guard',
      keywords: ['gamorrean', 'guard', 'pig'],
      short: 'A Gamorrean guard levels a vibro-axe and grunts a warning.',
      description:
        'A slab of green muscle in kajidic harness, tusked and small-eyed and ' +
        'utterly without doubt, paid to keep the estate\'s peace with an axe and ' +
        'no mercy whatsoever.',
      hostile: true,
      level: 6,
      maxHp: 56,
      stats: { str: 18, dex: 10, con: 17, int: 5 },
      damage: [6, 11],
      armor: 3,
      xp: 220,
      respawns: 150,
    }));
    R.nal_swamp_nest.add(world.mob({
      name: 'bog-horror',
      keywords: ['bog-horror', 'horror', 'beast', 'creature'],
      short: 'A bog-horror heaves up out of the mud, jaws wide and dripping.',
      description:
        'A swamp-thing grown huge and wrong in Nal Hutta\'s poisoned bogs, all ' +
        'armoured hide and reaching limb and appetite, that lairs in the reeds ' +
        'and takes whatever the swamp delivers. The chemical marsh has made it ' +
        'something no clean world ever bred.',
      hostile: true,
      level: 5,
      maxHp: 52,
      stats: { str: 17, dex: 12, con: 16, int: 4 },
      damage: [5, 10],
      armor: 2,
      xp: 170,
      respawns: 160,
    }));

    return {
      area: nal,
      arrivalId: 'nal_port_arrival',    // where the Nar Shaddaa shuttle lands
      returnId: 'nal_port_concourse',   // where the shuttle back to the Moon is
    };
  };
})(typeof window !== 'undefined' ? window : this);
