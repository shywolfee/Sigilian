/*
 * narshaddaa.js — NAR SHADDAA, the Smugglers' Moon, in orbit of Nal Hutta.
 *
 * A 150-room area — and, deliberately, NOT a finished one. Nar Shaddaa is meant
 * to grow: whole sectors of the moon are sketched here as far as their gates and
 * left with sealed lifts, dark stairs, and "not-yet-mapped" seams pointing on
 * into levels a later pass will build. What is here is real and fully walkable;
 * what is beyond the seams is a promise.
 *
 * Nar Shaddaa is Coruscant's dark twin: another ecumenopolis, another
 * kilometres-deep vertical city — but where Coruscant is the seat of law, the
 * Smugglers' Moon is the seat of its absence. It belongs, as everything in the
 * Hutt sky belongs, to the Hutts, and it runs on spice, contraband, refugees,
 * and neon. You arrive by transit from Coruscant's Westport, set down at a
 * docking berth; from another berth in the same sector, a Hutt shuttle runs
 * down to the homeworld itself, Nal Hutta.
 *
 * Content, not framework. Populated into the shared World by world-data.js,
 * which also wires the cross-world transit terminals.
 *
 * LAYOUT (districts):
 *   nard_*  The Docking Sector (spaceport) .......... 24   ARRIVE / to Nal Hutta
 *   narp_*  The Promenade (the neon spine) .......... 24
 *   narc_*  The Corellian Sector ................... 18
 *   narf_*  The Refugee Sector ..................... 18
 *   nars_*  The Slums (the lower city) ............. 18
 *   narr_*  The Red-Light Sector .................. 14
 *   narh_*  The Hutt Heights (the palaces) ........ 16
 *   nari_*  The Factory District (the Meltdown) .... 18
 *                                                    ---
 *                                                    150
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildNarShaddaa = function buildNarShaddaa(ctx) {
    const { world, R, room, link } = ctx;

    const nar = world.area({
      id: 'narshaddaa',
      name: 'Nar Shaddaa, the Smugglers\' Moon',
      description:
        'The vertical city-moon of the Hutts, in orbit of Nal Hutta: a ' +
        'kilometres-deep sprawl of neon, contraband, and the galaxy\'s cast-offs.',
    });

    /* ================================================================= *
     *  I. THE DOCKING SECTOR  (24) — where you arrive, and where the Hutt
     *     shuttle to Nal Hutta berths.
     * ================================================================= */
    room('nard_arrival', 'Berth Forty-Four',
      `The transit from Coruscant sets you down on a scarred landing-pad open to ` +
      `Nar Shaddaa's ochre murk, the moon's endless city climbing away in every ` +
      `direction into smog and neon. The clean order of the Republic is a world ` +
      `and a memory behind you; here the air tastes of fuel and something ` +
      `sweeter and worse, and no one asks to see your papers.`);
    room('nard_concourse', 'The Docking Concourse',
      `A grimy, teeming concourse where the moon's arrivals are funnelled past ` +
      `touts, thieves, and the idols of a dozen creeds, under a ceiling of dead ` +
      `glow-panels and live wiring. This is the crossroads of the sector — and, ` +
      `at its heart, a battered transit terminal offering the long ride back up ` +
      `to Coruscant, for those who have already had enough.`);
    room('nard_huttberth', 'The Hutt Shuttle Berth',
      `A separate, better-guarded berth where a squat Hutt-cartel shuttle idles ` +
      `on its struts, ready to run the short hop down the gravity well to the ` +
      `homeworld. Gamorreans in cartel sashes wave the cargo through and the ` +
      `questions away. A transit terminal here books passage to Nal Hutta ` +
      `itself.`);
    room('nard_customs', 'The Bribe-Gate',
      `What passes for customs on the Smugglers' Moon: a gate, a scale, and an ` +
      `official whose price is posted nowhere and negotiable everywhere. Duty is ` +
      `assessed by the cut of your coat and the size of your escort, and paid, ` +
      `always, in hand.`);
    room('nard_market', 'The Dockside Market',
      `A crush of stalls hawking the freshly-smuggled and the freshly-stolen — ` +
      `ration-packs, charge-cells, spice cut with worse, a hundred things that ` +
      `fell off a hundred ships. The vendors keep one hand on the goods and one ` +
      `on a hold-out blaster.`);
    room('nard_cantina', "The Spacer's Last Cantina",
      `A low, loud dive where the crews between runs drink to forget the last ` +
      `job and steel for the next, the band too loud and the drinks too strong ` +
      `and everyone armed. It is the first honest welcome the moon offers, which ` +
      `tells you what the moon is.`);
    room('nard_control', 'The Traffic Control Nest',
      `A cramped booth of flickering scopes where a sweating controller threads ` +
      `the sector's chaotic traffic by instinct and prayer, bribed to look ` +
      `elsewhere as often as to look at all. Half the ships on his board are ` +
      `squawking transponder-codes that belong to vessels long since scrapped.`);
    room('nard_medbay', 'The Back-Alley Medbay',
      `A patch-up shop of stained cots and a surgical droid with more scavenged ` +
      `parts than its patients, where blaster-burns and knife-wounds are closed ` +
      `for coin and no report. It never closes, because on Nar Shaddaa the ` +
      `custom never stops coming.`);
    room('nard_catwalk', 'The Docking Catwalks',
      `A web of rusted catwalks strung between the berths, high over a drop into ` +
      `the sector's lower dark, the neon of the Promenade glowing up through the ` +
      `grating. The wind here reeks of exhaust and carries, faintly, the sound ` +
      `of the whole moon at its endless trade.`);
    room('nard_impound', 'The Impound Yard',
      `A caged yard of seized ships and cargo, held against unpaid berth-fees or ` +
      `unpaid bribes, slowly stripped by the very guards who impounded them. ` +
      `Everything in here has a story, and every story ends the same way: someone ` +
      `didn't pay the Hutt.`);
    room('nard_blackdock', 'The Black Dock',
      `An unlisted berth down a service-tunnel where the serious cargo moves — ` +
      `spice, weapons, people — under tarps and cover of the sector's studied ` +
      `blindness. The crews here don't meet your eye, and the fixer in the ` +
      `shadows notes your face against the day it might be worth something.`);
    room('nard_bay88', 'Docking Bay Eighty-Eight',
      `A round berth where a battered freighter crouches on her struts, ramp ` +
      `down, her crew nowhere and her cargo-hold humming with something that ` +
      `should not be running in an empty ship. Best not to ask. Best not to ` +
      `linger.`);
    room('nard_bay17', 'Docking Bay Seventeen',
      `An empty scorched berth, its previous tenant departed in a hurry and some ` +
      `haste — the deck still littered with dropped cargo and a dark stain no ` +
      `one has troubled to clean. Whatever the deal was, it went bad here, and ` +
      `recently.`);
    room('nard_hangar', 'The Cargo Hangar',
      `A cavernous hangar of gantry-cranes and stacked containers, where the ` +
      `sector's honest freight — such as it is — is loaded and lost. Loader-droids ` +
      `trundle in the gloom, and the foreman takes his cut of everything that ` +
      `moves through, on principle.`);
    room('nard_fuelyard', 'The Fuel Yard',
      `A reeking yard of hypermatter tanks and cracked pipe, the fuel sold at a ` +
      `smuggler's premium to ships that cannot risk a licensed depot. The ` +
      `strobes flash their warnings to no one; here, the danger is simply ` +
      `weather.`);
    room('nard_flophouse', 'The Dock Flophouse',
      `A warren of rented sleep-slots for the between-ships and the down-on-luck, ` +
      `the air thick and the locks flimsy and the neighbours worse. A credit ` +
      `buys six hours; a few more buy the manager's promise not to sell you out ` +
      `while you sleep.`);
    room('nard_droidbay', 'The Droid-Stripping Bay',
      `A grease-black bay where droids of every make are broken for parts, their ` +
      `memory-cores wiped or, more profitably, read and sold. The dismantled ` +
      `optics watch from the shelves. A protocol unit's head, still lit, still ` +
      `talking, pleads quietly with anyone who passes.`);
    room('nard_smugglershole', "The Smuggler's Hole",
      `A back-room dive behind the cantina where the real deals are struck in ` +
      `low voices and lower light, and a wrong word draws steel before it draws ` +
      `breath. A dock thug leans by the door, sizing the newcomer for a mark.`);
    room('nard_pawnshop', 'The Dock Pawnshop',
      `A grille-fronted shop of other people's desperation — a spacer's medal, a ` +
      `child's toy, a blaster still warm — bought low and sold lower by a ` +
      `Toydarian who forgets nothing and forgives less. Now and then a genuine ` +
      `prize surfaces in the clutter, for the sharp-eyed.`);
    room('nard_gaming', 'The Chance-Cube Den',
      `A smoky den of chance-cubes and sabacc where a run of luck can buy a berth ` +
      `off this moon and a run of the other kind can sink a soul to its lowest ` +
      `level by dawn. The house cheats; everyone knows; everyone plays.`);
    room('nard_lift', 'The Dock Turbolift',
      `A freight turbolift dropping away toward the sector's under-levels, its ` +
      `panel a constellation of lit and dead floor-buttons — most of them dead. ` +
      `Only the nearest levels still answer the call; the deep ones are sealed, ` +
      `or worse.`);
    room('nard_underdock', 'The Under-Dock',
      `A dim, flooded sub-level beneath the berths, ankle-deep in run-off and ` +
      `loud with the drip of the city breathing above. The honest dark of the ` +
      `moon begins here.`);
    // EXPANSION: nard_ramp is a stub onto the sector's unbuilt lower levels.
    room('nard_ramp', 'The Sealed Ramp',
      `A broad down-ramp into the deeper docking levels — and, a few metres on, a ` +
      `cartel blast-door, welded and warning-striped, barring the way. Whatever ` +
      `is down there, the Hutts have decided you have no business with it. Not ` +
      `yet.`);

    link('nard_concourse', 'sw', 'nard_arrival');
    link('nard_concourse', 'n', 'nard_gate');
    link('nard_concourse', 'e', 'nard_customs');
    link('nard_concourse', 'w', 'nard_market');
    link('nard_concourse', 's', 'nard_cantina');
    link('nard_concourse', 'ne', 'nard_control');
    link('nard_concourse', 'nw', 'nard_medbay');
    link('nard_concourse', 'se', 'nard_catwalk');
    link('nard_customs', 'e', 'nard_huttberth');
    link('nard_customs', 's', 'nard_blackdock');
    link('nard_blackdock', 'w', 'nard_bay88');
    link('nard_blackdock', 's', 'nard_bay17');
    link('nard_market', 's', 'nard_impound');
    link('nard_market', 'w', 'nard_droidbay');
    link('nard_impound', 's', 'nard_hangar');
    link('nard_hangar', 'w', 'nard_fuelyard');
    link('nard_cantina', 'e', 'nard_smugglershole');
    link('nard_cantina', 's', 'nard_flophouse');
    link('nard_flophouse', 's', 'nard_pawnshop');
    link('nard_pawnshop', 's', 'nard_gaming');
    link('nard_catwalk', 's', 'nard_lift');
    link('nard_lift', 'd', 'nard_underdock');
    link('nard_underdock', 'e', 'nard_ramp');
    // The sector's one door onto the rest of the moon.
    room('nard_gate', 'The Sector Gate',
      `The great neon-crowned arch where the docking sector gives onto the ` +
      `Promenade — the moon's blazing main artery, roaring with light and hawkers ` +
      `and the massed appetite of a whole world's worth of vice. Step through, ` +
      `and Nar Shaddaa proper takes you in.`);

    /* ================================================================= *
     *  II. THE PROMENADE  (24) — the neon spine; the moon's main artery.
     * ================================================================= */
    room('narp_gate', 'The Promenade Gate',
      `The docking-sector arch opens on the Promenade in a wall of light and ` +
      `noise — a canyon-street drowned in holo-neon, packed rail to rail with ` +
      `every species and swindle in the galaxy. This is the shopfront of the ` +
      `Smugglers' Moon, and everything in the window is for sale, including you.`);
    room('narp_plaza', 'The Great Promenade',
      `The blazing heart of Nar Shaddaa: a vast neon concourse where the moon ` +
      `comes to buy, sell, gawk, and prey, the crowd a slow river under a sky of ` +
      `advertisement. Ways run off it to every sector of the city, up into the ` +
      `Hutt heights and down into the dark.`);
    room('narp_marketrow', 'Market Row',
      `A long arcade of stalls and shopfronts selling the moon's endless ` +
      `contraband under the honest fiction of legitimate trade, the barkers' ` +
      `patter a wall of sound. If it exists in the galaxy, it can be had here, ` +
      `at a price and with no receipt.`);
    room('narp_foodcourt', 'The Food Court',
      `A reeking, wonderful sprawl of food-stalls dishing the cuisine of a ` +
      `thousand worlds off greasy grills, half of it unidentifiable and most of ` +
      `it, against the odds, delicious. Spacers eat standing, watching their ` +
      `backs and their bowls.`);
    room('narp_holoarcade', 'The Holo-Arcade',
      `A dazzling arcade of games, holo-dreams, and rigged amusements that eat ` +
      `credits like a hungry thing, loud with synthetic triumph and real ` +
      `despair. The prizes are junk and the machines are honest about nothing.`);
    room('narp_cantinastrip', 'The Cantina Strip',
      `A run of cantinas shoulder to shoulder, each thumping its own music into ` +
      `the street, the doorways breathing smoke and spilled light. A being could ` +
      `drink from one end to the other and never sober, and many, visibly, are ` +
      `trying.`);
    room('narp_cantina1', "The Blaster's Roll Cantina",
      `A serviceable cantina off the strip, sabacc in the back and a bounty ` +
      `board by the door, its clientele the moon's freelance dangerous. The ` +
      `bartender pours without judgement and remembers without fail.`);
    room('narp_pazaak', 'The Pazaak Parlour',
      `A cardsharp's parlour where the side-decks are palmed and the marks are ` +
      `charmed and fleeced in equal measure. The dealers wear their winnings, ` +
      `and their winnings, mostly, used to belong to someone who sat where you ` +
      `are sitting.`);
    room('narp_bazaar', 'The Grand Bazaar',
      `A labyrinth bazaar spilling off the Promenade, so dense with stalls and ` +
      `alleys that a soul could vanish into it and never surface — and, the ` +
      `stories go, some have. Every third merchant is a fence and every fifth is ` +
      `a fraud, and the trick is telling which.`);
    room('narp_junkshop', 'The Junk Emporium',
      `A teetering emporium of salvage — droid parts, ship-scrap, mystery ` +
      `crates, a hyperdrive of dubious pedigree — where a Jawa clan trades ` +
      `treasure and trash without distinction. The good stuff is buried; that, ` +
      `the Jawas insist, is the fun.`);
    room('narp_infobroker', 'The Information Stall',
      `An unmarked stall hung with dead comm-gear where the moon's premier ` +
      `broker of secrets holds court, dealing the one Nar Shaddaa commodity ` +
      `worth more than spice — knowing things. Every word has a price. So does ` +
      `every silence.`);
    room('narp_bountyboard', 'The Bounty Board',
      `A great flickering board of bounty-pucks where the moon's hunters browse ` +
      `the galaxy's most-wanted like a menu, and a Trandoshan clerk takes his ` +
      `cut of every collection. Names go up. Fewer come down.`);
    room('narp_weaponshop', 'The Weapon Bazaar',
      `A blazing shop of blasters, blades, and heavier things the Republic would ` +
      `faint to see for sale so openly, racked wall to wall and sold to anyone ` +
      `with the coin. The Rodian proprietor test-fires into a scarred back wall ` +
      `and grins at every purchase.`);
    room('narp_spicestall', 'The Spice Stall',
      `A curtained stall where spice of every world and grade is weighed and ` +
      `sold, the air a shimmer of narcotic dust, the buyers hollow and the ` +
      `seller serene. It is the moon's true currency, and it is everywhere, and ` +
      `it eats everyone in the end.`);
    room('narp_dancers', "The Dancers' Landing",
      `A raised platform where the Promenade's dancers work the crowd for coin ` +
      `and worse, twi'lek and human and stranger, beautiful and bought. The ` +
      `patrons watch hungry from below, and the handlers watch the patrons, and ` +
      `everyone is counting.`);
    room('narp_alley', 'A Promenade Alley',
      `A side-slot off the bright main drag where the light gives out and the ` +
      `real business is done — the deal, the threat, the quiet knife. It stinks ` +
      `and it is dark and it is best crossed briskly. A stair drops from its far ` +
      `end toward the factory levels.`);
    room('narp_shrine', "The Wanderer's Shrine",
      `A niche-shrine layered with the offerings of the moon's countless ` +
      `faiths — a candle, a coin, a spacer's charm — where the far-from-home ` +
      `pause a moment before the appetite of Nar Shaddaa swallows them again. It ` +
      `is, improbably, the quietest spot on the Promenade.`);
    room('narp_overlook', 'The Neon Overlook',
      `A rail at the Promenade's edge looking down the sheer neon canyon into ` +
      `the moon's lower dark, the city falling away kilometres past the reach of ` +
      `the light. Somewhere down there the Slums begin; somewhere below that, ` +
      `things the moon does not name.`);
    // The Promenade's gateways to the sectors (some are stairs and lifts).
    room('narp_corellianway', 'The Corellian Way',
      `A rowdy off-street hung with the green-and-white of Corellia, loud with ` +
      `engine-talk and old grievances, leading east into the moon's stubborn ` +
      `Corellian enclave. The accents thicken; the welcome sharpens.`);
    room('narp_refugeeway', 'The Refugee Way',
      `A crowded, wretched off-street where the moon's newest arrivals — the ` +
      `fled, the sold, the dumped — trudge west into the Refugee Sector, past the ` +
      `crimps and the recruiters who wait for exactly them.`);
    room('narp_redlightway', 'The Red-Light Way',
      `A throbbing side-canyon washed in scarlet holo-glow, all promise and ` +
      `menace, leading down into the Red-Light Sector where the moon sells the ` +
      `last things it has left to sell.`);
    room('narp_slumstair', 'The Slum Stair',
      `A broad, filthy down-stair where the Promenade's neon fails and the lower ` +
      `city begins, the crowd thinning to the furtive and the desperate as it ` +
      `descends toward the Slums.`);
    room('narp_huttlift', 'The Hutt Turbolift',
      `An ornate, cartel-guarded turbolift — the only clean thing in sight — ` +
      `rising to the Hutt Heights above, where the moon's owners keep their ` +
      `palaces above the stink of the trade that pays for them. It admits the ` +
      `invited, the useful, and the bold.`);
    room('narp_factorystair', 'The Factory Stair',
      `A grim industrial stair spiralling down from the Promenade's underside ` +
      `toward the Meltdown — the factory levels — the air thickening with heat ` +
      `and fume with every step down. Few go down for pleasure; fewer come up ` +
      `for it.`);

    link('narp_gate', 'n', 'narp_plaza');
    link('narp_plaza', 'n', 'narp_marketrow');
    link('narp_plaza', 'e', 'narp_corellianway');
    link('narp_plaza', 'w', 'narp_refugeeway');
    link('narp_plaza', 'ne', 'narp_bazaar');
    link('narp_plaza', 'nw', 'narp_shrine');
    link('narp_plaza', 'se', 'narp_redlightway');
    link('narp_plaza', 'sw', 'narp_overlook');
    link('narp_plaza', 'u', 'narp_huttlift');
    link('narp_plaza', 'd', 'narp_slumstair');
    link('narp_marketrow', 'n', 'narp_foodcourt');
    link('narp_marketrow', 'e', 'narp_weaponshop');
    link('narp_marketrow', 'w', 'narp_spicestall');
    link('narp_foodcourt', 'n', 'narp_holoarcade');
    link('narp_holoarcade', 'e', 'narp_cantinastrip');
    link('narp_cantinastrip', 'e', 'narp_cantina1');
    link('narp_cantina1', 's', 'narp_pazaak');
    link('narp_bazaar', 'e', 'narp_junkshop');
    link('narp_bazaar', 'n', 'narp_infobroker');
    link('narp_infobroker', 'e', 'narp_bountyboard');
    link('narp_weaponshop', 's', 'narp_dancers');
    link('narp_spicestall', 's', 'narp_alley');
    link('narp_alley', 'd', 'narp_factorystair');
    // Docking Sector -> Promenade.
    link('nard_gate', 'n', 'narp_gate');

    /* ================================================================= *
     *  III. THE CORELLIAN SECTOR  (18) — a stubborn spacer enclave.
     * ================================================================= */
    room('narc_gate', 'The Corellian Gate',
      `A battered arch daubed with the bloodstripe colours of Corellia, marking ` +
      `where the moon's Corellian expatriates have carved out a sector of their ` +
      `own and hold it, loudly, against all comers. Engine-grease and old pride ` +
      `hang thick in the air.`);
    room('narc_plaza', 'The Corellian Plaza',
      `A rough-and-ready plaza that is half street-market, half shipyard, half ` +
      `argument — Corellians being generous with their halves. Spacers swap ` +
      `runs and insults, a swoop guns its engine somewhere, and everyone is ` +
      `related to a smuggler, if not one themselves.`);
    room('narc_shipyard', 'The Backstreet Shipyard',
      `A cramped yard where light freighters are patched, souped, and ` +
      `illegally modified by mechanics who could coax a jump out of a scrapheap. ` +
      `The work is fast, filthy, and better than it has any right to be.`);
    room('narc_docks', 'The Corellian Docks',
      `Private berths for the sector's own ships, jealously guarded, where the ` +
      `Corellian crews keep their vessels and their secrets. A stranger asking ` +
      `too many questions here does not ask a third.`);
    room('narc_guildhall', "The Spacers' Guildhall",
      `A smoky hall where the sector's pilots and smugglers keep a rough guild — ` +
      `sharing charts, splitting jobs, settling scores by rules older than any ` +
      `law. Membership is by reputation, and reputation here is earned the hard ` +
      `way.`);
    room('narc_dealer', 'The Parts Dealer',
      `A cave of ship-parts legitimate and otherwise, presided over by a dealer ` +
      `who can find any component in the galaxy given a day and a deposit, and ` +
      `won't ask which ship it came off. The shelves are a smuggler's ` +
      `wonderland.`);
    room('narc_market', 'The Corellian Market',
      `A market of hard goods and harder liquor, the stalls run by families who ` +
      `have worked this stretch for generations and defend it like blood. The ` +
      `whiskey is real Corellian, or close enough to start a fight over.`);
    room('narc_smithy', 'The Weaponsmith',
      `A sparks-and-hammer shop where a Corellian smith forges and modifies ` +
      `blades and blaster-frames to order, cursing cheerfully over the anvil. ` +
      `The work is honest, which on this moon is itself a kind of miracle.`);
    room('narc_cantina', 'The Bloodstripe Cantina',
      `The sector's own cantina, walls hung with pilot's trophies and the ` +
      `bloodstripe banner, the drink strong and the songs sentimental and the ` +
      `brawls affectionate. Outsiders drink here on sufferance and good ` +
      `behaviour.`);
    room('narc_backlot', 'The Speeder Lot',
      `A lot of half-stripped airspeeders and swoops for sale or salvage, the ` +
      `ground slick with coolant and dropped bolts. The dealer will sell you ` +
      `anything with an engine and swear it'll fly, once.`);
    room('narc_tavern', "The Dockrat's Tavern",
      `A dim tavern for the sector's grease-monkeys and dock-rats, thick with ` +
      `engine-talk and the particular gossip of people who know exactly whose ` +
      `ship is carrying what. A good ear buys a lot here for the price of a ` +
      `round.`);
    room('narc_chapel', 'The Two-Godfist Shrine',
      `A little shrine to the old Corellian luck, all clenched fists and ` +
      `spacer's charms, where pilots come to bless a risky run. The offerings ` +
      `are engine-parts and spent charge-cells, and the prayers are brief and ` +
      `profane and heartfelt.`);
    room('narc_garage', 'The Chop-Garage',
      `A garage where hot speeders are stripped to anonymous parts in minutes, ` +
      `the torches never cold, the paperwork never troubled. It is an open ` +
      `secret the sector protects, because half the sector uses it.`);
    room('narc_bunkhouse', "The Spacer's Bunkhouse",
      `A clean-ish bunkhouse for crews laid over between runs, run by a widow ` +
      `who keeps the peace with a scattergun and a mother's glare. It is the ` +
      `safest sleep on the moon, which is not saying a great deal.`);
    room('narc_tenement', 'The Corellian Tenement',
      `Stacked family housing where the sector's generations live loud and ` +
      `close, laundry strung across the light-wells, children underfoot, the ` +
      `whole warren fiercely, defensively home. Outsiders are watched to the ` +
      `door and back.`);
    room('narc_lift', 'The Sector Turbolift',
      `A rattling turbolift down toward the sector's lower reaches, half its ` +
      `buttons dead. The living ones reach a swoop-track a level down; the dead ` +
      `ones reach places the sector has stopped talking about.`);
    room('narc_swooptrack', 'The Swoop Track',
      `A lower-level swoop-racing track, a lethal circuit of girders and gaps ` +
      `where the sector's young burn their fear and sometimes themselves for the ` +
      `crowd's coin. The betting is heavy and the safety is nonexistent.`);
    // EXPANSION: narc_seam stubs onto the Corellian sector's unbuilt depths.
    room('narc_seam', 'The Boarded Passage',
      `A passage deeper into the sector — boarded over, tagged with a warning in ` +
      `three languages, and plainly not meant to be opened. Whatever the ` +
      `Corellians walled off down here, they walled it off well. For now, it ` +
      `stays shut.`);

    link('narc_gate', 'e', 'narc_plaza');
    link('narc_plaza', 'n', 'narc_shipyard');
    link('narc_plaza', 'e', 'narc_guildhall');
    link('narc_plaza', 's', 'narc_market');
    link('narc_plaza', 'ne', 'narc_cantina');
    link('narc_plaza', 'nw', 'narc_tavern');
    link('narc_plaza', 'se', 'narc_garage');
    link('narc_plaza', 'sw', 'narc_tenement');
    link('narc_plaza', 'd', 'narc_lift');
    link('narc_shipyard', 'n', 'narc_docks');
    link('narc_guildhall', 'e', 'narc_dealer');
    link('narc_market', 'w', 'narc_smithy');
    link('narc_cantina', 'e', 'narc_backlot');
    link('narc_tavern', 'w', 'narc_chapel');
    link('narc_garage', 's', 'narc_bunkhouse');
    link('narc_tenement', 's', 'narc_seam');
    link('narc_lift', 'd', 'narc_swooptrack');
    // Promenade -> Corellian Sector.
    link('narp_corellianway', 'e', 'narc_gate');

    /* ================================================================= *
     *  IV. THE REFUGEE SECTOR  (18) — the fled, the sold, the dumped.
     * ================================================================= */
    room('narf_gate', 'The Refugee Gate',
      `A choked gate where the moon's newest wretched pour in — war-fled, ` +
      `debt-sold, or simply dumped here by traffickers and abandoned — into a ` +
      `sector built of packing-crate and desperation. The crimps and recruiters ` +
      `wait just inside, smiling.`);
    room('narf_camp', 'The Refugee Camp',
      `A vast shanty-sprawl of tents and salvage-shacks under a low ceiling of ` +
      `dead ductwork, teeming with the displaced of a hundred worlds who have ` +
      `nowhere left to fall to but here. It is loud with grief and children and ` +
      `the ceaseless small commerce of the truly poor.`);
    room('narf_mess', 'The Charity Mess',
      `A long trestle mess where an offworld aid-order ladles thin protein-gruel ` +
      `to a queue that never ends, doing what small good it can against an ocean ` +
      `of need. The volunteers are exhausted and kind and losing.`);
    room('narf_soupline', 'The Soup Line',
      `The tail of the mess-queue, snaking out into the camp — hours of standing ` +
      `for a bowl, and a whole economy of held places, sold places, and ` +
      `swindles conducted along its length. Here the sector trades its only ` +
      `wealth: patience.`);
    room('narf_waterline', 'The Water Line',
      `A single dripping stand-pipe serving thousands, guarded and rationed and ` +
      `fought over, the one indispensable thing the sector cannot make or ` +
      `smuggle. Whoever controls the water controls the camp, and everyone knows ` +
      `who that is.`);
    room('narf_market', 'The Scrap Market',
      `A market of the almost-nothing — a mended boot, a day's labour, a ` +
      `child's toy, a story — where the destitute sell the destitute what little ` +
      `there is. It is the honest bottom of the galaxy's economy, and the Hutts ` +
      `tax even this.`);
    room('narf_smugglersden', "The Passage-Broker's Den",
      `A den where the desperate bargain for passage off the moon with brokers ` +
      `who take everything and promise anything and deliver, mostly, to the ` +
      `slavers. The contracts are written to be broken; the breaking is the ` +
      `business.`);
    room('narf_medtent', 'The Med-Tent',
      `An overwhelmed med-tent where an offworld medic and a failing droid hold ` +
      `back fever and famine with nothing and less, triaging by a arithmetic no ` +
      `one should have to do. They save who they can and grieve the rest, ` +
      `nightly.`);
    room('narf_elder', "The Elder's Tent",
      `A patched tent where an old refugee — elder, judge, and memory of a ` +
      `drowned homeworld — keeps the customs and the grievances of a scattered ` +
      `people alive. The young come for rulings; the desperate, for hope; both ` +
      `leave with a little.`);
    room('narf_checkpoint', 'The Cartel Checkpoint',
      `A cartel checkpoint metering who leaves the sector and lightening them of ` +
      `whatever they carry, on the theory that the destitute are always hiding ` +
      `something. The guards are bored and casually cruel, and the queue does ` +
      `not complain twice.`);
    room('narf_recruiters', "The Recruiters' Stall",
      `A too-friendly stall where crimps and mercenary recruiters — and, behind ` +
      `a thinner curtain, slavers — sign the desperate to contracts they cannot ` +
      `read for futures they will not survive. A slaver-crimp works the queue, ` +
      `all warm words and cold eyes.`);
    room('narf_orphanage', 'The Camp Orphanage',
      `A crowded shelter of the sector's countless orphaned and abandoned ` +
      `children, run by a handful of the tireless and the near-saintly on ` +
      `nothing at all. The children are watched, always — by the guardians, ` +
      `and by the recruiters who count them like a crop.`);
    room('narf_bunkrows', 'The Bunk Rows',
      `Endless rows of stacked communal bunks where the camp sleeps in shifts, ` +
      `possessions clutched, doors nonexistent, the whole reeking dormitory ` +
      `breathing as one uneasy body through the moon's false night.`);
    room('narf_firebarrel', 'The Fire-Barrel Circle',
      `A ring of scavenged barrels burning what will burn, where the sector ` +
      `gathers after dark to share warmth, rumour, and the stories of the worlds ` +
      `they lost. It is the closest thing the camp has to a hearth, and it is ` +
      `guarded like one.`);
    room('narf_chapel', "The Refugees' Shrine",
      `A shrine of a dozen mingled faiths, the gods of a dozen drowned ` +
      `homeworlds crowded onto one shelf, prayed to in a dozen tongues for the ` +
      `same one thing: a way out, or a way home, or simply another day. The ` +
      `smoke climbs and does not answer.`);
    room('narf_tunnels', 'The Under-Camp Tunnels',
      `Service-tunnels beneath the camp where the sector hides what it must — ` +
      `contraband, fugitives, children the recruiters want — in a warren the ` +
      `cartel guards will not enter without numbers. It is dark, and dangerous, ` +
      `and safer, for some, than the light.`);
    // EXPANSION: narf_deep / narf_refuse open onto the sector's unbuilt sub-levels.
    room('narf_deep', 'The Deep Warren',
      `The tunnels bottom out in a black warren where the sector's most hunted ` +
      `go to disappear, and mostly do. The ways branch on into a dark no one ` +
      `here has mapped and no one sane will follow — not yet.`);
    room('narf_refuse', 'The Refuse Drift',
      `A reeking drift of the camp's cast-off, picked over by the poorest of the ` +
      `poor for anything that might be sold or eaten. Beyond it the sub-levels ` +
      `run on into dark the sector leaves, for now, to itself.`);

    link('narf_gate', 'w', 'narf_camp');
    link('narf_camp', 'n', 'narf_mess');
    link('narf_camp', 's', 'narf_market');
    link('narf_camp', 'w', 'narf_medtent');
    link('narf_camp', 'ne', 'narf_chapel');
    link('narf_camp', 'nw', 'narf_orphanage');
    link('narf_camp', 'se', 'narf_checkpoint');
    link('narf_camp', 'sw', 'narf_bunkrows');
    link('narf_camp', 'd', 'narf_tunnels');
    link('narf_mess', 'n', 'narf_waterline');
    link('narf_mess', 'e', 'narf_soupline');
    link('narf_market', 'e', 'narf_smugglersden');
    link('narf_medtent', 'w', 'narf_elder');
    link('narf_checkpoint', 'e', 'narf_recruiters');
    link('narf_bunkrows', 's', 'narf_firebarrel');
    link('narf_tunnels', 'd', 'narf_deep');
    link('narf_deep', 'e', 'narf_refuse');
    // Promenade -> Refugee Sector.
    link('narp_refugeeway', 'w', 'narf_gate');

    /* ================================================================= *
     *  V. THE SLUMS  (18) — the lower city, where the neon fails.
     * ================================================================= */
    room('nars_gate', 'The Slum Landing',
      `The slum-stair bottoms out on a broken landing where the Promenade's ` +
      `light dies for good and the lower city begins — a warren of decay and ` +
      `menace stacked into the moon's failing depths. The air is colder here, ` +
      `and watched.`);
    room('nars_street', 'The Lower Street',
      `A canyon-street of the lower city, its glow-strips guttering, its ` +
      `shopfronts barred, its crowd furtive and armed. This is where the moon ` +
      `keeps what it would rather not see — and what would rather not be seen.`);
    room('nars_market', 'The Grey Market',
      `A market of the stolen and the dangerous, no pretence of legitimacy left, ` +
      `the goods laid out on ragged cloth and the prices settled in menace as ` +
      `much as coin. Everything here has been someone else's, recently.`);
    room('nars_dealer', 'The Spice Dealer',
      `A barred hatch where the lower city buys its oblivion by the twist, the ` +
      `dealer weighing the dust behind armourglass and dead eyes. The queue is ` +
      `patient and hollow and never, ever short.`);
    room('nars_ganghall', 'The Gang Hall',
      `A gutted storefront claimed as a gang's headquarters, tagged floor to ` +
      `ceiling, hung with looted trophies and casual threat. A hardened ` +
      `gangster holds the door, weighing whether you are custom, prey, or ` +
      `trouble.`);
    room('nars_squat', 'The Squat',
      `A collapsed block squatted by the sector's homeless in a honeycomb of ` +
      `salvaged shelter, every doorway a household, every stairwell a border. ` +
      `Territory here is measured in metres and defended in blood.`);
    room('nars_cantina', 'The Sinkhole Cantina',
      `A cave of a cantina at the bottom of the lower city's social ladder, its ` +
      `clientele the truly dangerous and the truly done. The music is a dirge ` +
      `and the drink is poison and the exits are watched.`);
    room('nars_bridge', 'The Rag Bridge',
      `A rickety span of salvage flung across an open drop between two failing ` +
      `blocks, hung with drying rags and desperate washing. Below, the moon ` +
      `falls away into dark; cross quickly, and hold what you value.`);
    room('nars_chopshop', 'The Chop-Shop',
      `A grease-black shop where hot speeders and hotter goods are stripped to ` +
      `anonymous parts, the cutting-torches never cold. Good blades turn up on ` +
      `the wall-rack here, off the books and no questions asked.`);
    room('nars_den', "The Thieves' Den",
      `A rat-run redoubt of the lower city's cutthroats, a warren of stolen ` +
      `goods and stolen faces where the gangs keep an uneasy peace with blade ` +
      `and boot. Strangers are weighed in a glance and remembered longer.`);
    room('nars_shrine', 'The Broken Shrine',
      `A defiled shrine given over to the lower city's own crooked faith, its ` +
      `gods defaced and repurposed, its offerings knives and spent cells and the ` +
      `occasional prayer for a mark or a mercy. Something is worshipped here. ` +
      `It is not kind.`);
    room('nars_alley', 'A Dead Alley',
      `A dead-end slot where the lower city leaves its warnings and its ` +
      `leavings, the walls dark with old trouble. It is the kind of place a ` +
      `careful soul checks twice before entering and never enters at all.`);
    room('nars_rooftop', 'The Slum Rooftops',
      `A precarious runway of slum rooftops under the massed underbelly of the ` +
      `Promenade far above, the neon a bruised glow through the smog. The ` +
      `roof-runners cross here, and the desperate hide, and the drop is a ` +
      `constant, patient presence.`);
    room('nars_sewer', 'The Slum Sewer',
      `A great reeking drain carrying the lower city's filth into the dark, its ` +
      `ledges home to things that have adapted to it. The stench is a wall; the ` +
      `echoes go on forever; something moves in the black water.`);
    room('nars_tunnel', 'The Service Tunnel',
      `A branching maintenance tunnel long abandoned by maintenance, the walls ` +
      `sweating, the dark absolute beyond your light. Down here the sector's map ` +
      `ends and instinct takes over.`);
    room('nars_pit', 'The Fighting Pit',
      `A sunken pit ringed by a baying lower-city crowd, where the desperate and ` +
      `the captured fight for coin and survival on dark sand that does not ` +
      `clean. The bookmakers work the rail; the house takes its cut of the ` +
      `blood.`);
    room('nars_lift', 'The Broken Turbolift',
      `A dead turbolift prised open and repurposed as a squat and a lookout, its ` +
      `shaft dropping away into a dark that swallows a dropped stone without a ` +
      `sound. The way down waits; nothing sane takes it.`);
    // EXPANSION: nars_deeper opens onto the moon's unbuilt undercity.
    room('nars_deeper', 'The Descent',
      `Past the broken lift the shaft-ladder drops on into the moon's true ` +
      `undercity — the sunless bottom levels of Nar Shaddaa, where even the ` +
      `Slums will not go. The rungs vanish into a cold, breathing dark that no ` +
      `one has yet charted. Another day, perhaps. Not this one.`);

    link('nars_gate', 'n', 'nars_street');
    link('nars_street', 'n', 'nars_market');
    link('nars_street', 'e', 'nars_ganghall');
    link('nars_street', 'w', 'nars_cantina');
    link('nars_street', 'ne', 'nars_den');
    link('nars_street', 'nw', 'nars_shrine');
    link('nars_street', 'se', 'nars_chopshop');
    link('nars_street', 'sw', 'nars_alley');
    link('nars_street', 'd', 'nars_sewer');
    link('nars_street', 'u', 'nars_rooftop');
    link('nars_market', 'e', 'nars_dealer');
    link('nars_ganghall', 'e', 'nars_squat');
    link('nars_cantina', 'w', 'nars_bridge');
    link('nars_sewer', 'd', 'nars_tunnel');
    link('nars_tunnel', 'e', 'nars_pit');
    link('nars_bridge', 'w', 'nars_lift');
    link('nars_lift', 'd', 'nars_deeper');
    // Promenade -> Slums.
    link('narp_slumstair', 'd', 'nars_gate');

    /* ================================================================= *
     *  VI. THE RED-LIGHT SECTOR  (14) — the last things the moon sells.
     * ================================================================= */
    room('narr_gate', 'The Red-Light Gate',
      `A scarlet-washed arch pulsing with holographic promise, marking where the ` +
      `moon peddles its oldest trades. The light is warm and the intent is cold, ` +
      `and everyone who passes under it is either buying, selling, or being ` +
      `sold.`);
    room('narr_strip', 'The Scarlet Strip',
      `A canyon-street drowned in red neon, clubs and dens and cribs stacked up ` +
      `both walls, the barkers murmuring their catalogue of appetites to the ` +
      `passing crowd. It is beautiful and desperate and utterly without mercy.`);
    room('narr_club', 'The Velvet Sarlacc',
      `The strip's flagship pleasure-club, a cavern of shifting light and slow ` +
      `music where the moon's coin comes to be parted from its owners in ` +
      `comfort. The hosts are lovely and attentive and counting every second.`);
    room('narr_backroom', 'The Club Back-Room',
      `The locked room behind the club where the real business is done — the ` +
      `deals, the debts, the quiet disappearances — under the ownership of ` +
      `interests that reach all the way up to the Heights. Few come here ` +
      `uninvited. Fewer leave unchanged.`);
    room('narr_cantina', 'The Crimson Cantina',
      `A red-lit cantina where the strip's workers drink between shifts and the ` +
      `patrons prowl, the music a slow ache and the mood a held breath. Deals of ` +
      `every kind are struck in its booths.`);
    room('narr_bar', 'The Long Bar',
      `A mirror-backed bar running the length of a low room, tended by a ` +
      `many-armed Besalisk who pours for a dozen appetites at once and hears ` +
      `every confession the strip has to make. Nothing said here surprises him ` +
      `any more.`);
    room('narr_parlor', 'The Sabacc Parlour',
      `A plush parlour where the strip's high-rollers gamble away what the clubs ` +
      `left them, the felt soft and the stakes savage. A run of luck is the only ` +
      `way out of this sector that doesn't cost more than it pays.`);
    room('narr_den', 'The Dream Den',
      `A hazed den of holo-dreams and spice-visions where patrons plug into ` +
      `tailored oblivions and surface hours later, poorer and emptier and ` +
      `already aching for the next. The attendant swaps the chips with the ` +
      `boredom of someone who has seen every fantasy and believed in none.`);
    room('narr_dancers', "The Dancers' Stage",
      `A raised stage where the strip's dancers work the red dark for the ` +
      `crowd's coin and the handlers' cut, watched hungrily from every side. ` +
      `Beauty is the product here, and it is bought and sold and used up like ` +
      `any other.`);
    room('narr_dealer', 'The Back-Stage Dealer',
      `A shadow behind the stage dealing the spice that keeps the strip's ` +
      `workers working and the strip's patrons spending, the true engine of the ` +
      `whole red economy. The dealer smiles like a friend and books like a ` +
      `creditor.`);
    room('narr_stage', 'The Grand Stage',
      `The strip's great performance-hall, all crimson velvet and shifting ` +
      `light, where the moon's famed acts play to a packed and paying house. The ` +
      `spectacle is genuine; so, in the wings, is the exploitation that mounts ` +
      `it.`);
    room('narr_hotel', 'The By-The-Hour Hotel',
      `A tired hotel of thin doors and no questions, where the strip's liaisons ` +
      `and hideouts are conducted side by side. The desk-droid's memory has been ` +
      `wiped so often it barely knows the hour, which is the entire service.`);
    room('narr_alley', 'The Scarlet Alley',
      `A side-slot off the strip where the light thins and the trade turns ` +
      `frankly ugly, the cribs meaner and the menace closer to the surface. It ` +
      `is the strip with the paint scraped off.`);
    // EXPANSION: narr_seam opens onto the sector's unbuilt lower cribs.
    room('narr_seam', 'The Curtained Stair',
      `A curtained stair down toward the strip's lowest levels — and, a few ` +
      `steps on, a locked grille and a bored guard who is paid not to explain. ` +
      `What the sector keeps below, it keeps for itself. For now, the way is ` +
      `barred.`);

    link('narr_gate', 'e', 'narr_strip');
    link('narr_strip', 'n', 'narr_club');
    link('narr_strip', 'e', 'narr_cantina');
    link('narr_strip', 's', 'narr_parlor');
    link('narr_strip', 'ne', 'narr_stage');
    link('narr_strip', 'nw', 'narr_hotel');
    link('narr_strip', 'se', 'narr_alley');
    link('narr_strip', 'sw', 'narr_dancers');
    link('narr_club', 'e', 'narr_backroom');
    link('narr_cantina', 'e', 'narr_bar');
    link('narr_parlor', 'w', 'narr_den');
    link('narr_dancers', 's', 'narr_dealer');
    link('narr_alley', 's', 'narr_seam');
    // Promenade -> Red-Light Sector.
    link('narp_redlightway', 'se', 'narr_gate');

    /* ================================================================= *
     *  VII. THE HUTT HEIGHTS  (16) — the palaces of the moon's owners.
     * ================================================================= */
    room('narh_lift', 'The Heights Turbolift',
      `The cartel turbolift opens on a different world: the Hutt Heights, where ` +
      `the air is filtered clean and the neon is replaced by the cold gleam of ` +
      `real wealth. Guards in cartel finery note your arrival and your business, ` +
      `and the stink of the trade below is, up here, only a distant idea.`);
    room('narh_plaza', 'The Heights Plaza',
      `A serene plaza of imported stone and floating light, kept immaculate for ` +
      `the moon's owners and their guests, so far above the Promenade that the ` +
      `city's roar is a hush. Everything here was bought with the misery below, ` +
      `and none of it remembers.`);
    room('narh_palace', 'The Palace Approach',
      `A grand approach to the local kajidic's palace, lined with the trophies ` +
      `of a Hutt clan's long greed — statuary, captured banners, a frozen ` +
      `debtor or two displayed as art. The doors ahead are guarded by things ` +
      `that do not blink.`);
    room('narh_throne', "The Hutt's Audience Hall",
      `A vast, humid hall where the local Hutt lord sprawls on a dais of ` +
      `cushions and coin, vast and patient and cruel, receiving supplicants ` +
      `with the boneless calm of something that has never once been refused. ` +
      `He is the owner of everything you have seen, and he is bored, and boredom ` +
      `in a Hutt is a dangerous weather.`);
    room('narh_vault', 'The Kajidic Vault',
      `A guarded vault of the clan's obscene wealth — spice, gems, coin, and the ` +
      `debts and deeds that own half the moon — behind blast-doors and worse. ` +
      `The guards here have no other duty and no other loyalty, and are paid ` +
      `accordingly.`);
    room('narh_harem', 'The Pleasure Court',
      `A gilded court of the Hutt's kept companions and captives, beautiful and ` +
      `trapped, decorated as lavishly as they are owned. It is the cruelty of ` +
      `the moon in its finest dress, and it smiles because it must.`);
    room('narh_court', "The Courtiers' Gallery",
      `A gallery where the Hutt's hangers-on — advisors, spies, favour-seekers, ` +
      `and rivals — circle one another in the endless soft war of the palace. ` +
      `Every smile is a knife in a sheath, and the sheath is thin.`);
    room('narh_kitchens', 'The Palace Kitchens',
      `Steaming kitchens laboring to feed a Hutt's monstrous appetite, the ` +
      `staff a mix of the enslaved and the terrified, the fare exotic and ` +
      `endless. A poisoner's dream, the cooks joke, and do not laugh.`);
    room('narh_dungeon', 'The Palace Dungeon',
      `Cells beneath the palace where the Hutt keeps its debtors, rivals, and ` +
      `amusements, the dark loud with the low sound of the forgotten. The ` +
      `gaoler is fed better than the fed, and sleeps well.`);
    room('narh_garden', 'The Roof Garden',
      `A costly roof-garden of offworld plants drinking piped and filtered light ` +
      `far above the smog, a green impossibility maintained for a Hutt who ` +
      `rarely troubles to look at it. It is roped, tended, and profoundly ` +
      `lonely.`);
    room('narh_terrace', 'The Overlook Terrace',
      `A terrace at the palace's edge with the whole neon abyss of Nar Shaddaa ` +
      `spread beneath it, the city a river of light kilometres down. From up ` +
      `here the moon looks almost beautiful, which is the only angle from which ` +
      `it does.`);
    room('narh_guardpost', 'The Palace Guard-Post',
      `The muster of the palace guard — Gamorreans, Weequay, and worse, armed ` +
      `for a war and loyal to the coin. A Gamorrean the size of a speeder blocks ` +
      `the way, axe grounded, small eyes fixed on you with slow, certain ` +
      `hostility.`);
    room('narh_gallery', 'The Trophy Gallery',
      `A gallery of the clan's plunder across generations — art, armour, the ` +
      `carbon-frozen shapes of enemies made ornament. The Hutts collect ` +
      `everything, and forget nothing, and forgive less than nothing at all.`);
    room('narh_skybox', 'The Sky-Box',
      `A private repulsor-box perched above the palace, from which the Hutt ` +
      `watches its swoop-races and its blood-sports and its city, remote and ` +
      `absolute. Access is a mark of terrifying favour, or of being about to ` +
      `become the entertainment.`);
    room('narh_landing', 'The Private Landing',
      `A guarded landing-pad for the palace's own yachts and the comings and ` +
      `goings the cartel would rather no one saw. The ships here are worth more ` +
      `than the whole Refugee Sector, and are watched a great deal better.`);
    // EXPANSION: narh_seam opens onto the Heights' unbuilt inner palace.
    room('narh_seam', 'The Sealed Doors',
      `A pair of vast sealed doors deeper into the palace, chased in gold and ` +
      `guarded by silence, beyond which the Hutt's true inner sanctum is said to ` +
      `lie. They do not open for you. Whatever waits behind them waits, for now, ` +
      `unbuilt and unbreached.`);

    link('narh_lift', 'n', 'narh_plaza');
    link('narh_plaza', 'n', 'narh_palace');
    link('narh_plaza', 'e', 'narh_court');
    link('narh_plaza', 'w', 'narh_garden');
    link('narh_plaza', 'ne', 'narh_gallery');
    link('narh_plaza', 'nw', 'narh_terrace');
    link('narh_plaza', 'se', 'narh_guardpost');
    link('narh_plaza', 'sw', 'narh_landing');
    link('narh_plaza', 'u', 'narh_skybox');
    link('narh_palace', 'n', 'narh_throne');
    link('narh_throne', 'e', 'narh_vault');
    link('narh_throne', 'w', 'narh_harem');
    link('narh_court', 'e', 'narh_kitchens');
    link('narh_kitchens', 's', 'narh_dungeon');
    link('narh_garden', 'w', 'narh_seam');
    // Promenade -> Hutt Heights (up).
    link('narp_huttlift', 'u', 'narh_lift');

    /* ================================================================= *
     *  VIII. THE FACTORY DISTRICT  (18) — "the Meltdown", the moon's guts.
     * ================================================================= */
    room('nari_gate', 'The Meltdown Gate',
      `The factory stair bottoms out at a heat-warped gate into the Meltdown — ` +
      `the moon's industrial guts, where the cartel's forbidden manufacture ` +
      `roars on in the dark. The air is a hot chemical soup, and the sun, if ` +
      `there were one, would never reach here.`);
    room('nari_floor', 'The Factory Floor',
      `A vast floor of hammering machines and pouring metal, worked by droids ` +
      `and by the enslaved and indentured too cheap to replace, the din a ` +
      `physical weight. Whatever is made here, the cartel does not want it made ` +
      `in the light.`);
    room('nari_watchpost', "The Overseers' Watch-Post",
      `A caged post where the cartel overseers watch the floor through ` +
      `armourglass, quotas in one hand and shock-prods in the other. They keep ` +
      `the line moving by the only management theory the Meltdown knows.`);
    room('nari_assembly', 'The Assembly Line',
      `An endless conveyor of half-built machines past the welding-arms and the ` +
      `worked-to-death, the same motions forever, the line the one thing in the ` +
      `Meltdown that must never stop. To stop the line is the unforgivable sin.`);
    room('nari_droidline', 'The Droid Line',
      `A production-line of droids building droids — labour-units, war-surplus ` +
      `frames given new and worse purpose, the patient mechanical children of ` +
      `the cartel. A newly-woken unit turns from its station and fixes on you ` +
      `with an attention it was not built to have.`);
    room('nari_foundry', 'The Foundry',
      `A hell of molten metal poured by remote, the heat rolling off in waves ` +
      `that warp the air, the pour-crews laboring at the edge of endurance. The ` +
      `glow of the metal is the closest thing to daylight the Meltdown offers.`);
    room('nari_overseer', "The Overseer's Office",
      `A grimy office where the district's overseer keeps the ledgers of what is ` +
      `made and who is spent making it, both entered in the same cold hand. The ` +
      `safe is heavy; the conscience is not.`);
    room('nari_reactor', 'The Reactor Room',
      `A vaulted room enclosing the district's caged fusion-plant, the power that ` +
      `drives the whole roaring Meltdown, humming behind its shielding like a ` +
      `held scream. The air crawls; the guards are droids; the danger is ` +
      `absolute.`);
    room('nari_coolant', 'The Coolant Galleries',
      `Freezing galleries of shrieking coolant-pipe, the cold a shock after the ` +
      `foundry's hell, the catwalks rimed and treacherous. A slip here ends in ` +
      `the race below, and the race ends nowhere at all.`);
    room('nari_control', 'The Control Room',
      `A grimy control-room of flickering screens overseeing the district, run ` +
      `by a skeleton crew on too little sleep and too much stim. A heavy blaster ` +
      `hangs by the door, for what the Meltdown occasionally produces by ` +
      `accident.`);
    room('nari_scrap', 'The Scrap Floor',
      `A sorting-floor where the moon's endless refuse is picked for anything the ` +
      `foundry can eat, the salvage stacked in reeking mountains. The ` +
      `scrap-pickers are the lowest of the low, and the most territorial, and ` +
      `they have found things in the mountains they will not discuss.`);
    room('nari_dump', 'The Slag Dump',
      `A dump of cooling slag and toxic tailings vented from the foundry, the ` +
      `ground crusted and steaming, nothing living that should be. And yet ` +
      `something has adapted even to this, and leaves tracks in the crust.`);
    room('nari_catwalk', 'The High Catwalks',
      `A giddy web of catwalks over the factory floor, the machines dwindling to ` +
      `toys below and the crane-rails passing close overhead. The grille sways; ` +
      `the rail is thin; the drop is patient.`);
    room('nari_vats', 'The Chemical Vats',
      `Ranked vats of the caustic chemistry the Meltdown runs on, fuming and ` +
      `bubbling behind warnings no one reads, the walkways between them slick ` +
      `and narrow. The reek alone could drop the unwary; the vats themselves ` +
      `ask only one mistake.`);
    room('nari_pipes', 'The Pipe Warren',
      `A drowned-sounding warren of the district's great pipes, dripping and ` +
      `echoing and fever-warm, carrying water, waste, and worse through the dark. ` +
      `It would be an easy place to hide a body, or to become one.`);
    room('nari_sublevel', 'The Sublevel',
      `A low, flooded sublevel beneath the Meltdown, warm black water underfoot ` +
      `and the machine-noise reduced to a heartbeat through the floors above. ` +
      `Here the district begins to bleed into the moon's true undercity.`);
    // EXPANSION: nari_deep opens onto the moon's unbuilt deep-industry levels.
    room('nari_deep', 'The Sealed Sublevels',
      `The sublevel narrows to a bulkhead the cartel has sealed and posted, ` +
      `beyond which the Meltdown's deepest and most secret manufacture is said ` +
      `to run. The way on is welded shut. Whatever the Hutts make down there, ` +
      `they are not ready for you to see it — and it is not yet built for you ` +
      `to find.`);

    link('nari_gate', 'n', 'nari_floor');
    link('nari_gate', 'e', 'nari_watchpost');
    link('nari_floor', 'n', 'nari_assembly');
    link('nari_floor', 'e', 'nari_foundry');
    link('nari_floor', 'w', 'nari_scrap');
    link('nari_floor', 'ne', 'nari_droidline');
    link('nari_floor', 'nw', 'nari_control');
    link('nari_floor', 'se', 'nari_catwalk');
    link('nari_floor', 'sw', 'nari_vats');
    link('nari_assembly', 'n', 'nari_reactor');
    link('nari_reactor', 'e', 'nari_coolant');
    link('nari_foundry', 'e', 'nari_overseer');
    link('nari_scrap', 'w', 'nari_dump');
    link('nari_droidline', 'n', 'nari_lift_stub');
    link('nari_catwalk', 's', 'nari_pipes');
    link('nari_pipes', 'd', 'nari_sublevel');
    link('nari_sublevel', 'e', 'nari_deep');
    // Promenade -> Factory District (down).
    link('narp_factorystair', 'd', 'nari_gate');
    // A short freight-lift stub off the droid line (kept simple for now).
    room('nari_lift_stub', 'The Freight Lift',
      `A heavy freight-lift serving the droid line, its cage rated for loads no ` +
      `one logs. It rises to the assembly floor and drops toward the sealed ` +
      `sublevels, and hums, when it moves, with more strain than a lift its size ` +
      `should bear.`);
    link('nari_lift_stub', 'd', 'nari_sublevel');

    /* ================================================================= *
     *  Inhabitants — a light population for now; the moon is to be peopled
     *  further as its sectors are built out.
     * ================================================================= */

    // --- Bonus gear (arrivals come already equipped from Coruscant) ---
    R.nard_pawnshop.add(world.item({
      name: 'hold-out blaster',
      keywords: ['hold-out', 'holdout', 'blaster', 'pistol'],
      short: 'A hold-out blaster sits under the pawnshop grille.',
      description:
        'A tiny, spiteful little sidearm made to hide in a sleeve or a boot, ' +
        'the smuggler\'s insurance policy. It has, by the wear on it, been an ' +
        'unpleasant surprise to a good many people.',
      weight: 1,
      damage: [3, 6],
      accuracy: 2,
    }));
    R.nars_chopshop.add(world.item({
      name: 'serrated vibroblade',
      keywords: ['vibroblade', 'blade', 'serrated', 'knife'],
      short: 'A serrated vibroblade lies on the chop-shop rack.',
      description:
        'A wicked, ugly blade, its edge shivering at ultrasonic speed and its ' +
        'serrations filed for cruelty rather than craft. A lower-city favourite, ' +
        'and off the books.',
      weight: 2,
      damage: [4, 8],
      accuracy: 1,
    }));

    // --- Folk to talk to ---
    R.nard_cantina.add(world.mob({
      name: 'Twi\'lek bartender',
      keywords: ['bartender', 'twilek', 'twi\'lek', 'barkeep'],
      short: 'A lekku-crowned bartender polishes a glass and watches the room.',
      description:
        'A sharp-eyed Twi\'lek who has tended this bar through a hundred deals ' +
        'gone wrong, and knows to the credit what every soul in the room is ' +
        'worth and how long they are likely to stay it.',
      xp: 0,
      dialogue:
        'Fresh off the Coruscant transit, are you? Wear it less. Down here the ' +
        'clean ones get noticed, and getting noticed on the Moon is how you ' +
        'end up owing a Hutt. Drink up, keep your credits deep, and don\'t sign ' +
        'anything in the Refugee Sector.',
    }));
    R.narp_infobroker.add(world.mob({
      name: 'information broker',
      keywords: ['broker', 'information', 'informant'],
      short: 'A hooded broker waits amid dead comm-gear, missing nothing.',
      description:
        'A still, patient dealer in the one thing the Moon values above spice: ' +
        'knowing things. Every question has a price, and the broker has, folded ' +
        'away, answers that could unmake half the Heights.',
      xp: 0,
      dialogue:
        'Everything on the Moon connects, friend, and I sell the map. The Hutt ' +
        'in the Heights owns this sector; the shuttle at the Hutt berth runs ' +
        'down to Nal Hutta, where the fat ones sit in their swamp and call it a ' +
        'jewel. You want to go down there? Bring more than credits. Bring luck.',
    }));

    // --- The Hutt lord: a talkable power, guarded by a fearsome fight ---
    R.narh_throne.add(world.mob({
      name: 'the Hutt lord',
      keywords: ['hutt', 'lord', 'kajidic'],
      proper: true,
      short: 'The Hutt lord sprawls upon his dais of coin, vast and unhurried.',
      description:
        'The owner of the sector and much of what you have walked through to ' +
        'reach him: a mountain of patient, boneless appetite coiled on a dais ' +
        'of cushions and plunder, regarding you with the flat, ancient calm of ' +
        'a creature that has outlived every threat it ever met.',
      xp: 0,
      dialogue:
        'Bargon wan chee kospah. A newcomer, and clean — how novel. You amuse ' +
        'me, little offworlder, and that is the only reason you still breathe ' +
        'my air. Go where you like on my Moon. Take the shuttle down to the ' +
        'homeworld if you dare. But remember whose sky you are standing under.',
    }));

    // --- Hostiles, scaling by depth ---
    R.nard_smugglershole.add(world.mob({
      name: 'dock thug',
      keywords: ['thug', 'tough', 'mugger'],
      short: 'A dock thug peels off the wall to block your way.',
      description:
        'A scarred piece of dockside muscle who works the arriving marks for ' +
        'whatever they are careless enough to carry, and enjoys the work more ' +
        'than the pay.',
      hostile: true,
      level: 2,
      maxHp: 20,
      stats: { str: 13, dex: 12, con: 12, int: 8 },
      damage: [3, 6],
      xp: 45,
      respawns: 70,
    }));
    R.narf_recruiters.add(world.mob({
      name: 'slaver-crimp',
      keywords: ['crimp', 'slaver', 'recruiter'],
      short: 'A slaver-crimp turns his cold smile on you.',
      description:
        'A soft-spoken trafficker in the desperate, all warm words and colder ' +
        'eyes, who signs the fleeing to contracts that end in a Hutt\'s hold. He ' +
        'has decided you might fetch a price, one way or another.',
      hostile: true,
      level: 4,
      maxHp: 36,
      stats: { str: 13, dex: 14, con: 13, int: 12 },
      damage: [4, 8],
      armor: 1,
      xp: 110,
      respawns: 110,
    }));
    R.nars_ganghall.add(world.mob({
      name: 'lower-city gangster',
      keywords: ['gangster', 'ganger', 'thug'],
      short: 'A lower-city gangster fingers a blaster and eyes you.',
      description:
        'A hardened product of the Slums, colours on his arm and murder in his ' +
        'ledger, holding the gang\'s door against the world. He has done this ' +
        'many times, and expects to do it many more.',
      hostile: true,
      level: 4,
      maxHp: 40,
      stats: { str: 14, dex: 14, con: 14, int: 9 },
      damage: [4, 9],
      armor: 2,
      xp: 120,
      respawns: 110,
    }));
    R.nari_droidline.add(world.mob({
      name: 'reactivated war droid',
      keywords: ['war', 'droid', 'battle'],
      short: 'A reactivated war droid clanks around, weapon-arm rising.',
      description:
        'A war-surplus combat frame pulled from the line and jolted into a ' +
        'half-life, its blaster-arm twitching and its logic looping on a single ' +
        'directive: eliminate. It does not remember the war it was built for. It ' +
        'remembers how to end you.',
      hostile: true,
      level: 3,
      maxHp: 32,
      stats: { str: 14, dex: 12, con: 14, int: 6 },
      damage: [4, 7],
      armor: 2,
      xp: 80,
      respawns: 100,
    }));
    R.narh_guardpost.add(world.mob({
      name: 'Gamorrean guard',
      keywords: ['gamorrean', 'guard', 'pig'],
      short: 'A Gamorrean guard hefts a vibro-axe and grunts a challenge.',
      description:
        'A slab of green muscle in cartel harness, tusked and small-eyed and ' +
        'entirely without doubt, paid to keep the palace\'s peace with a ' +
        'vibro-axe and a total absence of mercy.',
      hostile: true,
      level: 6,
      maxHp: 56,
      stats: { str: 18, dex: 10, con: 17, int: 5 },
      damage: [6, 11],
      armor: 3,
      xp: 220,
      respawns: 150,
    }));

    return {
      area: nar,
      arrivalId: 'nard_arrival',      // where the Coruscant transit lands
      returnId: 'nard_concourse',     // where the transit back to Coruscant is
      huttBerthId: 'nard_huttberth',  // where the transit to Nal Hutta is
    };
  };
})(typeof window !== 'undefined' ? window : this);
