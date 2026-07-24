/*
 * coruscant.js — CORUSCANT, the crown of the galaxy, in the last years of the
 * Republic.
 *
 * A 200-room area: a vertical slice through the ecumenopolis — the planet-wide
 * city — from the sunlit government heights down through the working levels to
 * the sunless Underworld and the drowned foundations at the bottom of the
 * world. Coruscant is not a city on a planet; it is a planet made city, ten
 * thousand years of building stacked kilometres deep, so that the folk of the
 * upper spires and the folk of the undercity are the same distance apart as
 * two worlds, and know each other about as well.
 *
 * You begin at Westport, one of the great public spaceports, on a busy
 * mid-upper level where the sun still reaches. From the port's turbolift core
 * you may ride UP toward Monument Plaza, the Senate District, and the Jedi
 * Temple, or DOWN through CoCo Town and the Works into the Underworld and the
 * fabled depths of Level 1313.
 *
 * Content, not framework — a MUD zone file. Populated into a shared World by
 * world-data.js, which passes in the builder context and flushes the links.
 *
 * LAYOUT (districts, ordered high to low by the turbolift spine):
 *   senate_*  The Senate District (government heights) ..... 22
 *   temple_*  The Jedi Temple Precinct (bridged to Senate).. 20
 *   plaza_*   Monument Plaza & the Skydecks (upper tourist).. 18
 *   sky_*     Column Commons & the Skylanes (upper-mid) ..... 20
 *   port_*    Westport Spaceport ......................... 22   START
 *   coco_*    CoCo Town (Collective Commerce) .............. 18
 *   uscru_*   The Uscru Entertainment District (bridged) ... 18
 *   works_*   The Works (industrial deep-city) ............. 20
 *   under_*   The Coruscant Underworld (sunless) ........... 22
 *   deep_*    The Undercity & Level 1313 (the bottom) ...... 20
 *                                                            ---
 *                                                            200
 *
 * The turbolift spine (u/d), top to bottom:
 *   senate_transit — plaza_skydeck — sky_nexus — port_nexus —
 *   coco_lift — works_shaft — under_shaft — deep_bottom
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildCoruscant = function buildCoruscant(ctx) {
    const { world, R, room, link } = ctx;

    const coruscant = world.area({
      id: 'coruscant',
      name: 'Coruscant, the Crown of the Galaxy',
      description:
        'The galactic capital: a single city grown to cover a world, from the ' +
        'spires of the Senate to the drowned foundations of the undercity.',
    });

    /* ================================================================= *
     *  I. WESTPORT SPACEPORT  (22) — START. A great public port on a busy
     *     upper-mid level, where a hundred worlds arrive at once.
     * ================================================================= */
    room('port_concourse', 'The Grand Concourse of Westport',
      `A river of travellers pours through the great concourse of Westport under ` +
      `a vaulted ceiling of transparisteel, the honest daylight it lets down a ` +
      `luxury the lower city never tastes. Every species of the galaxy crosses ` +
      `here at once — Rodian, Twi'lek, Wookiee, Gran, human, a thousand others — ` +
      `chased along by the endless calm voice of the announcer naming departures ` +
      `for worlds you have never heard of. Ways lead off in every direction into ` +
      `the machinery of arrival and departure.`);
    room('port_arrivals', 'The Arrivals Hall',
      `A long hall where the newly landed shuffle between guide-holos and ` +
      `queueing rails, blinking in the light, clutching their papers and their ` +
      `children. Hover-porters glide among them touting for coin, and the walls ` +
      `flash welcome in forty scripts, none of which quite prepare a soul for ` +
      `what Coruscant is.`);
    room('port_customs', 'Customs & Immigration',
      `Rows of scanning arches and sour officials in Republic grey, where the ` +
      `Customs Service decides who and what may set foot upon the capital. ` +
      `Contraband is confiscated, permits are stamped or refused, and a great ` +
      `deal depends on whether the officer has yet had their caf.`);
    room('port_lostluggage', 'Lost Luggage & Impound',
      `A cavernous back-room of unclaimed cases, crates, and stranger things, ` +
      `shelved to the ceiling and forgotten. Some have waited years. The clerk ` +
      `has long since stopped wondering what is in them, and pointedly does not ` +
      `watch what walks out.`);
    room('port_droid', 'The Droid Pool',
      `A charging-bay where hired droids stand in ranks, optics dark, waiting to ` +
      `be leased to travellers who cannot read the local scripts. A battered ` +
      `protocol unit keeps itself apart from the labour models, and appears, ` +
      `against all programming, to be lonely.`);
    room('port_departures', 'The Departures Gate',
      `The bright, anxious frontier of leaving: boarding-gates ranked along a ` +
      `curved wall of viewports, each with its own huddle of the impatient and ` +
      `the tearful. Beyond the glass, shuttles rise on blue thrust into the ` +
      `traffic-streams and are gone.`);
    room('port_lounge', 'The First-Class Skylounge',
      `A hush of soft light and softer chairs, walled off from the concourse ` +
      `crush for those who can pay to forget it exists. Serving-droids drift ` +
      `with trays of Alderaanian wine, and the very rich watch the very far ` +
      `stars through a curved wall of crystal, and are bored.`);
    room('port_cantina', "The Spacer's Rest Cantina",
      `A dim, smoky den off the departures gate where the crews between ships ` +
      `drink away the layover, and a weary band plays the same six songs. The ` +
      `bartender pours for a dozen atmospheres of custom without blinking, and ` +
      `keeps a stun-baton and a longer memory beneath the bar.`);
    room('port_atrium', 'The Atrium of a Thousand Worlds',
      `The soaring heart of the terminal, a well of light rising a hundred ` +
      `levels, ringed by galleries and hung with the banners of the Republic's ` +
      `member-worlds — a forest of colours that no one alive could name in full. ` +
      `A ring of turbolifts to the north swallows and disgorges the crowds; ` +
      `above, a control spire; a medbay opens off to the west.`);
    room('port_nexus', 'The Turbolift Core',
      `The vertical spine of Westport: a shaft of gleaming turbolift doors that ` +
      `run the whole depth of the city, from the sunlit decks above to the ` +
      `sublevels no traveller means to visit. A soft chime and a lit arrow mark ` +
      `each car. UP climbs toward the plazas and the government heights; DOWN ` +
      `drops into CoCo Town and, if you keep riding, the dark. The choice, the ` +
      `signage cheerfully insists, is yours.`);
    room('port_tower', 'The Control Spire',
      `The glass crown of Westport, where flight controllers sit ringed by ` +
      `holograms of the sky-traffic — ten thousand craft threaded through their ` +
      `lanes at once, each a life, each a line of light. It is the calmest, ` +
      `most frightening room in the port. One slip here is a fireball forty ` +
      `levels down.`);
    room('port_medbay', "The Traveller's Medbay",
      `A clean white bay where the jet-lagged, the space-sick, and the ` +
      `occasionally-stabbed are patched up by a tireless medical droid. A rack ` +
      `of traveller's kit hangs by the door — the sort of gear a careful soul ` +
      `buys before venturing down-level.`);
    room('port_baywalk', 'The Docking Gallery',
      `A long steel gallery runs the length of the docking bays, its inner wall ` +
      `all viewports onto the berths where freighters and yachts and battered ` +
      `tramp-ships nose in on repulsors. The floor shudders faintly with each ` +
      `landing. Bays open off to either side; a ramp leads down to the working ` +
      `guts of the port.`);
    room('port_bay7', 'Docking Bay Seven',
      `A circular pit of scorched ferrocrete open to the sky-lanes, empty but for ` +
      `the ghost-smell of spent fuel and a single abandoned cargo-sled. The ` +
      `bay-doors stand open to the roar of the traffic above. Anything could ` +
      `land here. Anything has.`);
    room('port_bay12', 'Docking Bay Twelve',
      `A light freighter squats in the bay on its landing-struts, ramp down, ` +
      `venting coolant, her hull a patchwork of a dozen worlds' repairs. Her ` +
      `crew are nowhere in sight and her cargo, by the look of the crates, is ` +
      `not the sort that likes questions.`);
    room('port_bay23', 'Docking Bay Twenty-Three',
      `A quarantine bay, sealed behind a shimmering ray-shield and posted with ` +
      `Customs warnings in red. Something large and organic is crated within, ` +
      `and it is breathing, slowly, and the droids assigned to watch it stand a ` +
      `careful distance back.`);
    room('port_hangar', 'The Long-Haul Hangar',
      `A vast vaulted hangar for the big ships — the bulk-freighters and liners ` +
      `that cannot land above — where gantry-cranes crawl across the roof and ` +
      `sparks rain from the repair-scaffolds. The noise is a physical thing. ` +
      `A fuel reservoir sinks away below; the maintenance decks lie to the south.`);
    room('port_fuel', 'The Fuel-Cell Reservoir',
      `A cathedral of tanks and pipework where the port's hypermatter fuel is ` +
      `stored under pressures that do not bear thinking about. Warning-strobes ` +
      `paint everything a nervous amber, and the workers move slowly, and speak ` +
      `softly, and do not smoke.`);
    room('port_maintenance', 'The Maintenance Underdeck',
      `Below the shine, the honest underside: a grease-black deck of conduit and ` +
      `ductwork where the droids and the sleepless techs keep Westport running. ` +
      `Here the daylight ends for good. A malfunctioning loadlifter drags itself ` +
      `in slow circles, sparking, and no one has had the time to see to it.`);
    room('port_market', 'The Concourse Market',
      `A crush of kiosks selling everything a traveller forgot or never knew they ` +
      `needed — translator-chips, ration-bars, holos of the Senate, knock-off ` +
      `spice, real spice, a cure for every homesickness at a tourist's price. ` +
      `The hawkers can smell a newcomer from three stalls off.`);
    room('port_taxi', 'The Air-Taxi Platform',
      `A jutting open-air platform where the yellow air-taxis idle in a hovering ` +
      `queue, their droid drivers reciting fares in bored monotone. From here a ` +
      `cab will run you clear across the district on the skylanes — down to the ` +
      `neon of the Uscru entertainment strip, if the fare in your pocket is bold ` +
      `enough. Type "board" to hail one.`);
    room('port_security', 'The Sector Security Post',
      `A hard little office of Coruscant Security Force officers, armour scuffed ` +
      `and eyes flat, who keep such order as the port permits. They have seen ` +
      `every scam and most of the crimes, and they process the day's take of ` +
      `pickpockets and smugglers with the weary efficiency of people who know ` +
      `the tide comes in again tomorrow.`);

    link('port_concourse', 'w', 'port_arrivals');
    link('port_concourse', 'e', 'port_departures');
    link('port_concourse', 'n', 'port_atrium');
    link('port_concourse', 's', 'port_baywalk');
    link('port_concourse', 'se', 'port_market');
    link('port_concourse', 'sw', 'port_security');
    link('port_arrivals', 'w', 'port_customs');
    link('port_arrivals', 's', 'port_droid');
    link('port_customs', 's', 'port_lostluggage');
    link('port_departures', 'e', 'port_lounge');
    link('port_departures', 's', 'port_cantina');
    link('port_atrium', 'n', 'port_nexus');
    link('port_atrium', 'e', 'port_tower');
    link('port_atrium', 'w', 'port_medbay');
    link('port_baywalk', 'e', 'port_bay7');
    link('port_baywalk', 'w', 'port_bay12');
    link('port_baywalk', 'se', 'port_bay23');
    link('port_baywalk', 's', 'port_hangar');
    link('port_hangar', 'd', 'port_fuel');
    link('port_hangar', 's', 'port_maintenance');
    link('port_market', 'e', 'port_taxi');
    link('port_market', 's', 'port_cantina');
    link('port_maintenance', 'e', 'port_fuel');
    link('port_security', 's', 'port_lostluggage');

    /* ================================================================= *
     *  II. COLUMN COMMONS & THE SKYLANES  (20) — the upper-mid residential
     *      city, one turbolift ride above the port.
     * ================================================================= */
    room('sky_nexus', 'The Column Commons Transit Nexus',
      `A busy junction of turbolifts, slidewalks, and skytrain platforms where ` +
      `the working-respectable of the upper city change lines on their way to ` +
      `and from the heights. It is loud, clean-ish, and endlessly in motion. ` +
      `The turbolift core runs UP toward Monument Plaza and DOWN to Westport; ` +
      `the Commons proper opens to the north.`);
    room('sky_commons', 'Column Commons',
      `A broad interior plaza carved into the flank of a residential megablock, ` +
      `roofed so high the ceiling is lost in its own haze of exhaust and light. ` +
      `Balconies rise tier on tier around it, strung with laundry and lit ` +
      `windows and the small evidences of a million private lives stacked one ` +
      `atop another. A service-hatch drops to the utility runs below.`);
    room('sky_promenade', 'The Middle Promenade',
      `A tree-lined shopping promenade — the trees synthetic, the light piped ` +
      `down mirror-shafts from the true sky far above — where the middling folk ` +
      `of Coruscant window-shop and pretend, for an hour, to a leisure the ` +
      `upper spires take for granted.`);
    room('sky_skylane', 'The Skylane Overpass',
      `A pedestrian catwalk flung across an open canyon of the city, and through ` +
      `that canyon roars a skylane — five stacked rivers of traffic streaming to ` +
      `the horizon, tail-lights bleeding into one red thread. The wind of their ` +
      `passing tugs at your coat. Do not, the railing sternly advises, lean.`);
    room('sky_platform', 'The Speeder Platform',
      `A public landing-shelf where air-speeders and swoops set down to load and ` +
      `go, their repulsors kicking grit and litter into little storms. A ` +
      `rental-agent hawks battered swoops by the hour to those young or foolish ` +
      `enough to brave the lanes themselves.`);
    room('sky_bridge', 'A Skybridge',
      `A slender enclosed bridge crossing between two megablocks, its floor a ` +
      `pane of transparisteel over a drop that has no visible bottom. Far, far ` +
      `below, the light gives out into a brown murk where the lower city begins. ` +
      `People cross quickly here and do not look down.`);
    room('sky_billboard', 'Behind the Holo-Billboards',
      `A maintenance ledge running behind the giant holo-advertisements that ` +
      `blaze across the block's face, so that from here the smiling twenty-metre ` +
      `models are seen from the back — hollow, flickering, wired into humming ` +
      `projector-banks. It is oddly private, this backstage of the city's ` +
      `dreaming.`);
    room('sky_edge', 'The Unrailed Edge',
      `Where the ledge ends without ceremony — no rail, no warning, just the ` +
      `worn lip of a structure and then nothing, a straight fall through the ` +
      `layered dark to the undercity kilometres down. The updraft here is warm ` +
      `and smells of the deep city. The desperate come here to jump, and the ` +
      `predatory come here to help them.`);
    room('sky_market', 'The Ledge Market',
      `A cramped bazaar wedged onto a structural ledge, stalls of cheap fabric ` +
      `and cheaper food packed rail to rail, the whole of it trembling faintly ` +
      `whenever a big freighter passes overhead. It is the beating, bargaining ` +
      `heart of the Commons, and it never quite closes.`);
    room('sky_pawn', 'The Pawnshop',
      `A grille-fronted den of other people's misfortunes: musical instruments, ` +
      `medals, a wedding-band, a spacer's chrono, a droid's severed head. The ` +
      `Ithorian behind the grille pays little and forgets nothing, and knows to ` +
      `the credit what every grief in the district is worth.`);
    room('sky_cafe', 'The Caf House',
      `A steamy little caf-house where night-shift workers and off-duty ` +
      `constables nurse cups of scalding black caf and mind their own business ` +
      `with great determination. The proprietor, a broad Sullustan, hears ` +
      `everything and repeats nothing, which is why the booths are always full.`);
    room('sky_gambling', 'A Sabacc Den',
      `A back-room thick with smoke and tension where the cards fall and the ` +
      `credits move, and a run of luck can lift a soul a level or sink one to ` +
      `the undercity by dawn. The house dealer's face gives away exactly as ` +
      `much as the house intends, which is nothing.`);
    room('sky_conapts', 'The Conapt Warren',
      `A honeycomb corridor of condominium-apartments, doors identical to the ` +
      `vanishing-point in both directions, each a two-room life behind a ` +
      `number. The corridor smells of a hundred different suppers cooking at ` +
      `once. Somewhere a child is practising a flute, badly, and forever.`);
    room('sky_landing', 'A Residential Landing',
      `A shared landing outside a cluster of conapts, cluttered with pot-plants ` +
      `and a broken droid and the territorial passive-aggression of neighbours ` +
      `stacked too close. An old woman watches from a doorway, taking your ` +
      `measure, ready to withdraw and bolt her door.`);
    room('sky_tenement', 'The Stacked Tenements',
      `Where the Commons frays toward the poor: sagging tenement-galleries, the ` +
      `piped daylight failing, the balconies caged against the drop and against ` +
      `each other. Washing hangs like flags of surrender. This high still, and ` +
      `already the city is beginning to forget these people.`);
    room('sky_flop', 'The Flophouse',
      `A dosshouse of stacked sleep-capsules rented by the shift, where the ` +
      `between-jobs and the down-on-luck buy six hours horizontal for a fistful ` +
      `of credits. The air recycler wheezes. A hand-lettered sign forbids ` +
      `weapons, spice, and dying on the premises, in that order of concern.`);
    room('sky_clinic', 'A Backstreet Clinic',
      `A walk-in clinic with a queue out the door and a droptor droid two ` +
      `centuries out of licence, patching the working poor who cannot reach or ` +
      `afford the shining medcentres above. It does what it can, which is more ` +
      `than the city ever asked it to.`);
    room('sky_shrine', "The Wayfarer's Shrine",
      `A little niche-shrine at a corner of the promenade, layered with the ` +
      `offerings of a dozen faiths — a candle, a coin, a scrap of prayer-cloth, ` +
      `a spacer's charm against the dark between the stars. Folk of every world ` +
      `pause here a moment on their way to somewhere, and are, for that moment, ` +
      `the same.`);
    room('sky_maint', 'The Utility Catwalks',
      `Behind an unmarked hatch, the Commons shows its bones: a lattice of ` +
      `catwalks threading through power-mains, water-pipe, and the great ` +
      `breathing air-ducts that keep the megablock alive. It is hot, and dim, ` +
      `and loud with the machinery of survival.`);
    room('sky_vents', 'The Ventilation Gallery',
      `A tall gallery of roaring intake-fans and dripping condensation-pipe, ` +
      `where the block draws its breath. The grilles are furred with the ` +
      `city's grey lint, and in the warm dark between the ducts the scurriers ` +
      `nest and breed — quick, rat-like scavengers with too many teeth, that ` +
      `have never in their lives seen the sky.`);

    link('sky_nexus', 'n', 'sky_commons');
    link('sky_commons', 'n', 'sky_promenade');
    link('sky_commons', 'e', 'sky_skylane');
    link('sky_commons', 'w', 'sky_market');
    link('sky_commons', 'd', 'sky_maint');
    link('sky_skylane', 'e', 'sky_platform');
    link('sky_skylane', 'n', 'sky_bridge');
    link('sky_platform', 's', 'sky_vents');
    link('sky_bridge', 'e', 'sky_billboard');
    link('sky_billboard', 'e', 'sky_edge');
    link('sky_market', 'w', 'sky_pawn');
    link('sky_market', 's', 'sky_cafe');
    link('sky_cafe', 's', 'sky_gambling');
    link('sky_promenade', 'e', 'sky_conapts');
    link('sky_promenade', 'w', 'sky_tenement');
    link('sky_promenade', 'n', 'sky_shrine');
    link('sky_conapts', 'e', 'sky_landing');
    link('sky_tenement', 'w', 'sky_flop');
    link('sky_tenement', 's', 'sky_clinic');
    link('sky_maint', 'e', 'sky_vents');

    /* ================================================================= *
     *  III. MONUMENT PLAZA & THE SKYDECKS  (18) — the upper, sunlit tourist
     *       band where Coruscant shows itself off.
     * ================================================================= */
    room('plaza_skydeck', 'The Skydeck Terminus',
      `A grand turbolift terminus opening straight onto the light — real, ` +
      `unfiltered sunlight, gasped at by every tourist who steps from the car. ` +
      `The air up here is thin and clean and cold. UP the lifts climb to the ` +
      `Senate District; DOWN they fall to Column Commons and the working city. ` +
      `Monument Plaza opens to the north.`);
    room('plaza_plaza', 'Monument Plaza',
      `The most photographed square on Coruscant, a vast sunlit expanse of pale ` +
      `stone thronged with tourists from a thousand worlds, all pointing their ` +
      `holo-recorders at the one thing on the whole planet that is not ` +
      `city — a bare grey peak of natural rock thrusting up through the ` +
      `pavement at its centre.`);
    room('plaza_umate', 'Umate, the Peak',
      `Here it is: the summit of Umate, highest point of the Manarai Mountains, ` +
      `the only piece of Coruscant's original surface left uncovered — a ` +
      `fenced-off nub of ancient stone, worn smooth by the reverent hands of ` +
      `pilgrims who have touched it for the strange thrill of touching the world ` +
      `itself, the planet beneath the planet-city. A stair climbs to a ` +
      `viewing-tier above.`);
    room('plaza_vista', 'The High Vista',
      `A viewing-tier at the plaza's height, rail upon rail of coin-fed ` +
      `spyglasses trained on the horizon. And what a horizon: the city runs ` +
      `unbroken to the curve of the world in every direction, spires beyond ` +
      `spires beyond spires, gold in the low sun, until the eye simply gives ` +
      `up. There is no green anywhere. There is no end.`);
    room('plaza_promenade', 'The Grand Promenade',
      `A ceremonial avenue of banners and fountains linking the plaza to the ` +
      `embassy quarter, patrolled by immaculate Senate Guards in blue and ` +
      `swept clean each hour by silent droids. Everything here is arranged to ` +
      `say: this is the heart of a galaxy, and it is in good hands.`);
    room('plaza_holozone', 'The Holo-Zone',
      `A dazzle of civic holograms the size of buildings — the Republic cog ` +
      `turning in the air, a smiling recruitment appeal for the Judicial Forces, ` +
      `a history of the capital told in light to a bored school-group. The ` +
      `children are more interested in the pigeons, which are also, on ` +
      `inspection, holograms.`);
    room('plaza_observation', 'The Skylane Observation Rail',
      `A curved rail where visitors watch the aircar traffic wheel and stream ` +
      `through the towers below, a spectacle the locals never notice and the ` +
      `off-worlders cannot stop watching. A guide-droid recites the numbers — ` +
      `so many million craft aloft at this instant — until the figures stop ` +
      `meaning anything at all.`);
    room('plaza_embassyrow', 'Embassy Row',
      `A dignified terrace of planetary embassies and consulates, each flying ` +
      `its world's colours, each a little sovereign island of somewhere-else ` +
      `dropped into the capital. Aides hurry between them clutching datapads, ` +
      `and the quiet business of ten thousand worlds is transacted behind ` +
      `polite closed doors.`);
    room('plaza_curio', 'The Curio Arcade',
      `A glittering arcade of shops selling Coruscant to itself: models of the ` +
      `Senate, snow-globes of a world that has never snowed, "genuine" ` +
      `Manarai stone chipped illegally from Umate, and holos of every monument ` +
      `you have just walked past. It is expensive, and cheerful, and faintly ` +
      `sad.`);
    room('plaza_sculpture', 'The Sculpture Garden',
      `A terrace of monumental sculpture gifted by member-worlds over the ` +
      `centuries — abstract Muunilinst bronze, a weeping Alderaanian figure, a ` +
      `thing of light and mist that no one can quite explain. Tourists pose ` +
      `before them, understanding none, and are content.`);
    room('plaza_fountain', 'The Fountain of the Core',
      `A grand fountain whose central jet is lit to a column of blue-white — ` +
      `the galactic Core, the guides say, from which the Republic's light ` +
      `spreads. Coins of five hundred worlds glimmer on its floor, thrown by ` +
      `wishers, dredged nightly by the city, wished again tomorrow.`);
    room('plaza_transitway', 'The Transitway',
      `A broad moving slidewalk carrying the plaza's crowds toward the museums ` +
      `and the checkpoint, its handrails worn smooth. Buskers work the edges — a ` +
      `Bith flautist, a spice-eyed juggler, a legless veteran with a cup and a ` +
      `medal and a story no one stops to hear.`);
    room('plaza_checkpoint', 'The Security Checkpoint',
      `A polite but absolute barrier of scanning-arches and armoured Senate ` +
      `Guards, dividing the tourist plaza from the sensitive districts beyond. ` +
      `Papers are checked, weapons noted, faces matched against lists no ` +
      `traveller is permitted to see. Most are waved through. Some are quietly ` +
      `not.`);
    room('plaza_museum', 'The Galactic Museum',
      `The grand steps and pillared front of the Galactic Museum, keeper of the ` +
      `Republic's long memory — the relics of a thousand civilisations, some ` +
      `still living, some dust ten thousand years. School-groups file up the ` +
      `steps; scholars argue in the porticoes; the past waits patiently within.`);
    room('plaza_gallery', 'The Hall of the Republic',
      `A solemn gallery of the Museum where the Republic tells its own story in ` +
      `statue and holo and gilded word — the founding, the great peace, the long ` +
      `wisdom of the Senate. It is a magnificent account, and true in most of ` +
      `its particulars, and it leaves a very great deal carefully unsaid.`);
    room('plaza_memorial', 'The Memorial of the Fallen',
      `A quiet sunken court walled in dark stone, graven with names — the ` +
      `Judicial officers, the peacekeepers, the countless small heroes of a ` +
      `galaxy's long ordering. Fresh flowers lie at the foot of it always, and ` +
      `here, uniquely in the plaza, the tourists fall silent of their own ` +
      `accord.`);
    room('plaza_skygarden', 'The Sky-Garden',
      `A rare and costly luxury: a true garden, real soil trucked up from ` +
      `agriworlds, real trees drinking real sun, tended by a small army of ` +
      `gardeners for the refreshment of a city that has forgotten what growing ` +
      `things are. It is roped off. One admires it from the path.`);
    room('plaza_cafe', 'The Terrace Café',
      `An open-air café at the garden's edge, all white cloth and impossible ` +
      `prices, where the well-heeled sip and are seen. From the terrace the ` +
      `whole gold sweep of the upper city lies open, and one may spend a small ` +
      `fortune on a pastry for the privilege of the view.`);

    link('plaza_skydeck', 'n', 'plaza_plaza');
    link('plaza_plaza', 'n', 'plaza_umate');
    link('plaza_plaza', 'e', 'plaza_promenade');
    link('plaza_plaza', 'w', 'plaza_transitway');
    link('plaza_plaza', 'sw', 'plaza_fountain');
    link('plaza_plaza', 'ne', 'plaza_holozone');
    link('plaza_plaza', 'nw', 'plaza_memorial');
    link('plaza_umate', 'u', 'plaza_vista');
    link('plaza_promenade', 'e', 'plaza_embassyrow');
    link('plaza_promenade', 's', 'plaza_curio');
    link('plaza_embassyrow', 'n', 'plaza_observation');
    link('plaza_holozone', 'e', 'plaza_observation');
    link('plaza_curio', 's', 'plaza_sculpture');
    link('plaza_transitway', 'w', 'plaza_checkpoint');
    link('plaza_checkpoint', 's', 'plaza_museum');
    link('plaza_museum', 's', 'plaza_gallery');
    link('plaza_fountain', 's', 'plaza_skygarden');
    link('plaza_skygarden', 'e', 'plaza_cafe');

    /* ================================================================= *
     *  IV. THE SENATE DISTRICT  (22) — the government heights; the top of
     *      the turbolift spine.
     * ================================================================= */
    room('senate_transit', 'The Senate District Skyport',
      `The uppermost turbolift terminus, a soaring hall of white marble and ` +
      `Republic blue where the powerful and their servants arrive to govern a ` +
      `galaxy. The light here is the purest on Coruscant, and the guards the ` +
      `most watchful. The lifts run DOWN toward Monument Plaza and the city ` +
      `below; the great rotunda plaza lies north.`);
    room('senate_rotundaplaza', 'The Rotunda Plaza',
      `A ceremonial plaza of vast proportion, laid out to make a senator feel ` +
      `both exalted and very small, dominated by the mushroom-domed bulk of the ` +
      `Senate Rotunda ahead. Speeders of state settle and rise; aides scurry; ` +
      `protesters are kept, by law and by guard, at a decorous and inaudible ` +
      `distance.`);
    room('senate_rotunda', 'The Grand Convocation Chamber',
      `The Senate Rotunda: a colossal drum enclosing a vertigo of tiered ` +
      `boxes — a thousand and more, one for each delegation, ranked around a ` +
      `central well from floor to distant dome. When the Senate sits, the ` +
      `boxes detach and float out over the void on repulsors to be heard. Empty ` +
      `now, it is merely the largest indoor silence in the galaxy.`);
    room('senate_chamber', "The Chancellor's Podium",
      `The Supreme Chancellor's own dais, rising on its hydraulic column from the ` +
      `floor of the Rotunda to command the whole vast chamber — the single point ` +
      `on which, when the Senate sits, a thousand worlds' eyes converge. From ` +
      `here one voice can fill the drum. From here, lately, it increasingly ` +
      `does. A stair climbs to the speaker's box above.`);
    room('senate_podium', "The Speaker's Box",
      `The high box from which the debate is chaired, wired to every delegation ` +
      `and every recording eye in the Republic. The view down into the chamber ` +
      `is dizzying and total. Whoever holds this box holds the floor, and ` +
      `whoever holds the floor, in these anxious days, seems somehow always to ` +
      `be holding a little more.`);
    room('senate_executive', 'The Republic Executive Building',
      `The seat of the Chancellery, a monolith of authority linked to the ` +
      `Rotunda by covered ways, its corridors thick with functionaries, ` +
      `Judicial officers, and the particular hush of real power going quietly ` +
      `about its work. A great deal of the galaxy is decided behind these ` +
      `understated doors.`);
    room('senate_chancellorhall', 'The Chancellor\'s Antechamber',
      `A long panelled hall where senators, generals, and supplicants wait ` +
      `their turn for an audience, watched over by red-robed guards who never ` +
      `speak and never blink. The waiting is itself a kind of message. Some have ` +
      `waited here so long they have forgotten what they came to ask.`);
    room('senate_chancelleroffice', 'The Chancellor\'s Office',
      `A grand circular office walled in curving viewports, the whole gold ` +
      `sprawl of the capital laid out beyond like a thing owned. It is ` +
      `austere and warm at once, calculated to reassure. On the desk, the ` +
      `ordinary business of extraordinary power; on the walls, the art of ` +
      `worlds; in the air, very faintly, the sense of being watched back.`);
    room('senate_republicalobby', 'The 500 Republica Lobby',
      `The marbled lobby of 500 Republica, the most exclusive address in the ` +
      `galaxy — a single vertical village of the ultra-rich and the ` +
      `ultra-powerful, senators and magnates and at least one Chancellor stacked ` +
      `in ascending privilege. The concierge droid assesses your worth in a ` +
      `glance and finds it, politely, wanting.`);
    room('senate_republica', 'A 500 Republica Apartment',
      `A senatorial apartment of appalling good taste, all imported stone and ` +
      `hovering art and windows that frame the sunset like a possession. Real ` +
      `flowers, real quiet, real distance from everything real. From this ` +
      `height the trouble in the streets below is not so much invisible as ` +
      `simply beneath consideration.`);
    room('senate_republicasuite', 'The Penthouse Terrace',
      `The crowning terrace of 500 Republica, above which there is only sky and ` +
      `the traffic of the truly untouchable. The city falls away on all sides in ` +
      `a gulf of gold light. Deals are struck up here that never touch a ` +
      `datapad, in voices too low and too certain to be overheard.`);
    room('senate_avenue', 'The Avenue of Delegations',
      `A processional avenue linking the Rotunda to the diplomatic quarter, ` +
      `lined with the standards of the Republic's oldest worlds and busy with ` +
      `the endless coming and going of governance. It is grand, and cold, and ` +
      `entirely without a place to simply sit.`);
    room('senate_diplomaticrow', 'Diplomatic Row',
      `A discreet terrace of grace-and-favour residences where senators and ` +
      `their entourages are housed at the Republic's expense and one another's ` +
      `scrutiny. Every window watches every other. The gardens are exquisite ` +
      `and entirely for show.`);
    room('senate_embassy', 'The Grand Embassy',
      `The chief embassy of one of the Core's great worlds, a palace in ` +
      `miniature where diplomacy is conducted over spice-wine and long ` +
      `memories. An ambassador smiles a great deal here, and concedes nothing, ` +
      `and reports everything, upward, to powers even this building does not ` +
      `name.`);
    room('senate_annex', 'The Committee Annex',
      `A warren of hearing-rooms and sub-committee chambers where the real, ` +
      `unglamorous work of the Senate grinds on — appropriations, ` +
      `trade-tariffs, the slow strangling of a border dispute in procedure. The ` +
      `galaxy is governed less from the great Rotunda than from rooms like ` +
      `this, that no holocam ever visits.`);
    room('senate_committee', 'A Sub-Committee Chamber',
      `A windowless committee room smelling of cold caf and colder ambition, ` +
      `its long table ringed by the aides who actually write what senators ` +
      `merely say. Here a clause is buried, a rider is slipped, a world's fate ` +
      `is decided by three tired beings at the fourth hour of a session no one ` +
      `will remember.`);
    room('senate_press', 'The Newsfeed Gallery',
      `A cramped, frantic gallery of holojournalists and their hovering ` +
      `recorder-eyes, where the Republic's official truth is manufactured and ` +
      `the unofficial one is whispered. The reporters trade rumours like ` +
      `currency and file their careful stories, and the ones who file careless ` +
      `ones tend, lately, not to file for long.`);
    room('senate_guardpost', 'The Senate Guard Post',
      `The muster-station of the Senate Guard, blue-caped and ancient in office, ` +
      `who have warded the Republic's lawmakers for a thousand years. They are ` +
      `courteous, immaculate, and entirely serious, and they are aware, in the ` +
      `way old soldiers are, that something in the district's mood has begun to ` +
      `change.`);
    room('senate_monument', 'The Column of the Republic',
      `A soaring commemorative column crowned with the Republic's cog-and-stars, ` +
      `raised a thousand years ago to a peace that has held, more or less, ever ` +
      `since. Lately the more-or-less has grown louder. Its shadow falls across ` +
      `the avenue like the finger of a very patient clock.`);
    room('senate_pool', 'The Reflecting Pool',
      `A long formal pool mirroring the Rotunda and the sky, its still water a ` +
      `rare mercy of open space in the district. Senators walk its margin to ` +
      `think, or to be seen thinking, and the pigeons — real ones, here — drink ` +
      `at its edge, indifferent to a galaxy.`);
    room('senate_archiveswing', 'The Senate Archives Wing',
      `The Senate's own records-hall, deep in tape-spools and data-cores and ` +
      `the dust of a thousand years of minutes, motions, and buried scandals. ` +
      `The archivists are old and dry and know exactly where the bodies are ` +
      `filed, and have learned the hard way never to say so aloud.`);
    room('senate_skywalk', 'The Temple Skywalk',
      `An open ceremonial bridge arcing from the Senate heights across a gulf of ` +
      `bright air toward the great ziggurat of the Jedi Temple, whose five ` +
      `spires stand aloof on their own plateau to the east. It is the shortest ` +
      `road between the two powers that have kept the Republic — and, some say, ` +
      `the widest.`);

    link('senate_transit', 'n', 'senate_rotundaplaza');
    link('senate_rotundaplaza', 'n', 'senate_rotunda');
    link('senate_rotundaplaza', 'e', 'senate_avenue');
    link('senate_rotundaplaza', 'w', 'senate_executive');
    link('senate_rotundaplaza', 'nw', 'senate_pool');
    link('senate_rotundaplaza', 'se', 'senate_press');
    link('senate_rotundaplaza', 'sw', 'senate_guardpost');
    link('senate_rotunda', 'n', 'senate_chamber');
    link('senate_chamber', 'u', 'senate_podium');
    link('senate_chamber', 'e', 'senate_annex');
    link('senate_chamber', 'w', 'senate_committee');
    link('senate_executive', 'w', 'senate_chancellorhall');
    link('senate_chancellorhall', 'n', 'senate_chancelleroffice');
    link('senate_avenue', 'e', 'senate_diplomaticrow');
    link('senate_avenue', 'n', 'senate_monument');
    link('senate_avenue', 's', 'senate_republicalobby');
    link('senate_diplomaticrow', 'e', 'senate_embassy');
    link('senate_republicalobby', 'e', 'senate_republica');
    link('senate_republica', 'u', 'senate_republicasuite');
    link('senate_pool', 'w', 'senate_archiveswing');
    link('senate_monument', 'n', 'senate_skywalk');

    /* ================================================================= *
     *  V. THE JEDI TEMPLE PRECINCT  (20) — bridged to the Senate heights.
     * ================================================================= */
    room('temple_gates', 'The Temple Gates',
      `The western skywalk sets you down before the Temple's outer gates — a ` +
      `pair of bronzium doors four storeys tall, graven with the crest of the ` +
      `Jedi Order, standing open in a silence that is somehow louder than the ` +
      `city behind you. Two Temple Guards flank them, faceless behind masked ` +
      `helms, and regard you without hostility and without welcome.`);
    room('temple_processional', 'The Processional Way',
      `A long ascending avenue lined with the weathered statues of the Order's ` +
      `ancient Masters, their features softened by ten thousand years of ` +
      `Coruscant's acid air, each gazing down the way with the same patient, ` +
      `unnerving calm. Your footsteps are very loud here. Nothing else is.`);
    room('temple_ziggurat', 'The Base of the Ziggurat',
      `The foot of the great ziggurat itself, its terraced flanks climbing away ` +
      `into their own height, crowned by the five spires that are Coruscant's ` +
      `oldest silhouette. The stone underfoot is worn in a broad path by the ` +
      `feet of a hundred generations of Jedi. You feel, standing here, very new.`);
    room('temple_precinct', 'The Temple Precinct',
      `The inner precinct, hushed and vast, where robed figures cross on ` +
      `unhurried errands and the noise of the galaxy simply stops at the ` +
      `threshold. There is a weight to the air here that has nothing to do with ` +
      `the mass of stone overhead, and everything to do with what has been ` +
      `thought within these walls for ten thousand years.`);
    room('temple_greathall', 'The Great Hall of the Temple',
      `A soaring hall of pale stone and slanting light where the Order gathers ` +
      `and the paths of the Temple meet. Younglings hurry through in files, ` +
      `Knights confer in low voices, and here and there a lone figure sits in a ` +
      `stillness so complete they might be part of the architecture. A Temple ` +
      `Guard stands watch, pike grounded, eyes everywhere.`);
    room('temple_knighthood', 'The Hall of Knighthood',
      `A circular chamber where padawans are made Knights — where a braid is ` +
      `cut, and a lightsaber lit in a ring of drawn blades, and a child's ` +
      `apprenticeship ends. The walls hold no ornament. None is needed. Even ` +
      `empty, the room remembers every vow ever spoken in it.`);
    room('temple_archives', 'The Jedi Archives',
      `The great library of the Order, four halls of glowing data-spines ` +
      `receding into blue-lit distance, the accumulated knowledge of ten ` +
      `thousand years of watching the galaxy think. Busts of the Lost Twenty ` +
      `keep vigil down the aisles. If it is known, the archivists will tell ` +
      `you, it is here — a certainty that has, once or twice, been wrong.`);
    room('temple_councilspire', 'The Council Spire',
      `The tallest of the Temple's five towers, a slender climb of stone ` +
      `enclosing the stair to the High Council, its windows framing the whole ` +
      `blazing sweep of the capital. To ascend it is to feel the city fall away ` +
      `beneath your concerns, which is, perhaps, the point.`);
    room('temple_councilchamber', 'The High Council Chamber',
      `A circle of twelve seats beneath a ring of tall windows, open to the sky ` +
      `on every side, where the masters of the Order sit to weigh the fate of ` +
      `the galaxy against the promptings of the Force. The seats are empty now, ` +
      `but the circle holds its charge, and you find you have lowered your ` +
      `voice, and cannot say to whom.`);
    room('temple_meditation', 'The Room of a Thousand Fountains',
      `The Order's green heart: a vast internal wilderness of falling water and ` +
      `climbing vine and mossy stone, terraced up and down through many levels, ` +
      `alive with birdsong and the endless soft roar of the fountains. It is ` +
      `the one place in all Coruscant where a soul may be genuinely, restfully ` +
      `lost.`);
    room('temple_gardens', 'The Meditation Gardens',
      `A quieter garden-terrace off the great hall of fountains, raked gravel ` +
      `and still pools and the pruned, ancient trees under which the Jedi come ` +
      `to sit with their own minds. A young padawan sits cross-legged by the ` +
      `water, brow furrowed, very much still learning to be still.`);
    room('temple_fountainroom', 'The Fountain of the Order',
      `A domed grotto where a single great fountain rises and falls in perfect ` +
      `time, its sound arranged over centuries to still the racing mind. Masters ` +
      `come here before hard decisions. The water has heard a great many of ` +
      `them, and keeps its counsel, and falls.`);
    room('temple_dormitory', 'The Padawan Dormitories',
      `Rows of spare, identical sleeping-cells where the Order's apprentices ` +
      `lodge, each cell holding a cot, a chest, a single window, and the ` +
      `carefully-taught habit of needing nothing more. A few personal ` +
      `smugglings — a stone from a homeworld, a scrap of drawing — betray the ` +
      `children beneath the discipline.`);
    room('temple_refectory', 'The Refectory',
      `A long plain hall where the Order eats in common, the food simple and the ` +
      `talk quiet, Master and youngling at the same board. The clatter of ` +
      `utensils and the murmur of a hundred low conversations is, somehow, one ` +
      `of the most peaceful sounds in the Temple.`);
    room('temple_salle', 'The Training Salle',
      `A high vaulted hall where the Order learns the sword — younglings at ` +
      `their first stumbling forms with training-sabers, Knights sparring in a ` +
      `blur of light and hum, a Master correcting a wrist with a single word. ` +
      `A rack of practice-blades stands by the door, powered low, for the ` +
      `bruising of pride rather than flesh.`);
    room('temple_younglings', 'The Younglings\' Hall',
      `A bright, cluttered hall where the Order's smallest — the ` +
      `newly-brought, the barely-walking, gathered from a thousand worlds — are ` +
      `taught and minded and, when the crèche-masters aren't looking, are ` +
      `simply children, shrieking and tumbling in the oldest game in the ` +
      `galaxy.`);
    room('temple_hangar', 'The Temple Hangar',
      `A great hangar cut into the ziggurat's flank, where the Order's ` +
      `starfighters and transports rest ready, and a maintenance crew of ` +
      `astromechs bustles beneath them. From here a Jedi launches to whatever ` +
      `corner of the Republic has, this week, gone wrong — and the list of ` +
      `such corners, the crews mutter, grows longer.`);
    room('temple_spirecatwalk', 'The Spire Catwalk',
      `A dizzying open catwalk strung between two of the Temple's spires, ` +
      `hundreds of metres of nothing beneath the grille underfoot, the whole ` +
      `capital wheeling below. The wind sings in the guy-wires. Only the ` +
      `sure-footed and the sure-hearted have any business here.`);
    room('temple_comms', 'The Communications Centre',
      `A domed chamber high in a spire, ringed with holo-transceivers linking ` +
      `the Temple to Jedi scattered across ten thousand worlds. Blue figures ` +
      `flicker in and out — a report from a war-zone, a plea from a border ` +
      `world, a silence where a report should be. The room is very rarely ` +
      `quiet, and never, lately, glad.`);
    room('temple_servicebay', 'The Temple Service Bay',
      `The utilitarian underside of the sacred: a service bay of power-couplings, ` +
      `waste-reclamation, and patient maintenance droids, where even a Temple ` +
      `proves to be, in the end, a very large building that must be plumbed. A ` +
      `service-lift connects up to the hangar; the noise of the city seeps in ` +
      `faintly here at the precinct's edge.`);

    link('temple_gates', 'n', 'temple_processional');
    link('temple_processional', 'n', 'temple_ziggurat');
    link('temple_ziggurat', 'n', 'temple_precinct');
    link('temple_precinct', 'n', 'temple_greathall');
    link('temple_precinct', 'e', 'temple_gardens');
    link('temple_precinct', 'w', 'temple_refectory');
    link('temple_precinct', 'u', 'temple_councilspire');
    link('temple_greathall', 'e', 'temple_knighthood');
    link('temple_greathall', 'w', 'temple_archives');
    link('temple_councilspire', 'u', 'temple_councilchamber');
    link('temple_councilspire', 'e', 'temple_spirecatwalk');
    link('temple_spirecatwalk', 'e', 'temple_comms');
    link('temple_gardens', 'e', 'temple_fountainroom');
    link('temple_gardens', 's', 'temple_meditation');
    link('temple_refectory', 's', 'temple_dormitory');
    link('temple_dormitory', 's', 'temple_younglings');
    link('temple_knighthood', 'e', 'temple_salle');
    link('temple_archives', 'd', 'temple_servicebay');
    link('temple_servicebay', 's', 'temple_hangar');

    /* ================================================================= *
     *  VI. CoCo TOWN  (18) — Collective Commerce, a working mid-level just
     *      below the spaceport.
     * ================================================================= */
    room('coco_lift', 'The CoCo Town Lift Station',
      `A grimy but honest turbolift station where the day-shift and the ` +
      `night-shift pass each other on the platforms, faces grey with the ` +
      `deep-city pallor of folk who see the real sun on holiday if at all. UP ` +
      `climbs to Westport and the bright decks; DOWN falls to the Works and ` +
      `worse. CoCo Town's main street runs north.`);
    room('coco_street', 'The CoCo Town Main Street',
      `A canyon-street of Collective Commerce — CoCo Town — where small ` +
      `manufactories, cheap eateries, and the honest working poor of the middle ` +
      `city crowd elbow to elbow under a permanent ceiling of the levels above. ` +
      `The light is artificial and the air is warm and used, but the place has ` +
      `a scrappy, unkillable life to it.`);
    room('coco_diner', "Dex's Diner",
      `A chrome-and-vinyl diner steamy with grease and gossip, presided over by ` +
      `a vast four-armed Besalisk cook who flips gorg-and-egg with all four ` +
      `hands and knows every soul who comes through his door. It is the friendliest ` +
      `room in the middle city, and the best-informed, and the food, against ` +
      `all odds, is excellent.`);
    room('coco_junction', 'The Foundry Junction',
      `A soot-black junction where the street forks toward the working guts of ` +
      `the district — the small foundries and machine-shops whose hammering ` +
      `never stops, whose glow paints the underside of the levels above a dull ` +
      `and constant red. A ganger leans on a wall here, watching who passes ` +
      `toward the entertainment strip.`);
    room('coco_foundry', 'A Small Foundry',
      `A cramped independent foundry, all roar and glare and running sweat, ` +
      `where a handful of workers pour and cast alloy for the great factories ` +
      `that will take the credit. The heat is a wall you push through. The men ` +
      `and women here are proud, and tired, and old before their time.`);
    room('coco_machineshop', 'The Machine-Shop',
      `A precise, oily din of lathes and press-droids turning out the endless ` +
      `small parts a galaxy runs on — bolts, couplings, the ten thousand ` +
      `nameless pieces of everything. The machinist, one eye a cybernetic ` +
      `implant, can make or mend near anything, for a fair price and a fairer ` +
      `story.`);
    room('coco_refinerygate', 'The Refinery Gate',
      `The barred gate of a mid-city refinery, its stacks venting a chemical ` +
      `haze that stings the eyes and gilds the sunset that never reaches here. ` +
      `Guards check the workers in and out and search their bags on the way ` +
      `out, on principle, and find, most days, exactly the resentment they are ` +
      `cultivating.`);
    room('coco_tapcafe', 'The Tapcafe',
      `A low-ceilinged tapcafe where the shift-workers drink thin ale and ` +
      `stronger things, and the day's grievances are aired over sticky tables. ` +
      `The bartender keeps the taps flowing and the politics quiet, or tries ` +
      `to; the mood in CoCo Town, lately, does not want to stay quiet.`);
    room('coco_tenement', 'A Worker\'s Tenement',
      `A stacked hive of worker-housing, families crammed three-generation-deep ` +
      `into single rooms, the corridors loud with children and cooking and the ` +
      `endless negotiation of too many lives too close. It is hard, and it is ` +
      `home, and its people would fight anyone who said the first to their face.`);
    room('coco_freightdepot', 'The Freight Depot',
      `A clangorous depot where cargo-droids load and unload the freight-haulers ` +
      `that keep the district fed and supplied, crates stacked in swaying ` +
      `canyons under failing glow-panels. Things fall off the back of haulers ` +
      `here with some regularity, and are gone before they hit the ground.`);
    room('coco_ganglane', 'Gang Lane',
      `A narrow side-lane the constables have quietly ceded, tagged wall to wall ` +
      `with the sigils of the local crews, where the district's youth prove ` +
      `themselves in the only arena left to them. A gang tough blocks the way ` +
      `with the boredom of someone who has done this many times and expects to ` +
      `do it again.`);
    room('coco_junkstall', 'The Junk Stall',
      `A wonderful, teetering stall of salvage — droid parts, ship-scrap, ` +
      `mystery boxes, a hyperdrive motivator of dubious provenance — presided ` +
      `over by a Jawa-descended trader who will sell you anything and guarantee ` +
      `nothing. Treasure and trash are shelved here without distinction, which ` +
      `is, the trader insists, the whole point.`);
    room('coco_speedergarage', 'The Speeder Garage',
      `A repair-garage of half-gutted airspeeders on hydraulic lifts, the floor ` +
      `a slick of coolant and dropped tools. The mechanic can coax another year ` +
      `out of any wreck, and has strong, unsolicited opinions about your ` +
      `choices, your associates, and the state of the Republic.`);
    room('coco_workerhall', 'The Workers\' Hall',
      `A shabby meeting-hall hung with faded guild-banners, where the district's ` +
      `labour meets to grumble, organise, and, increasingly, to plan. A speaker ` +
      `is always at the rostrum and the mood is always warm, and there are, ` +
      `these days, faces at the back taking careful note of who attends.`);
    room('coco_powerstation', 'The Substation',
      `A caged and humming power-substation feeding the district's insatiable ` +
      `machines, its transformers ticking with heat behind warning-signs no one ` +
      `reads any more. When it fails, as it does, whole levels go dark at once, ` +
      `and the district learns again how thin the margin of its comfort is.`);
    room('coco_alley', 'A Back Alley',
      `A dank service-alley behind the tenements, strung with dripping pipe and ` +
      `blocked with refuse, where the district conducts the business it would ` +
      `rather the main street didn't see. It stinks, and it is dark, and it is, ` +
      `by long custom, best walked briskly and looked at not at all.`);
    room('coco_overpass', 'The Overpass',
      `A pedestrian overpass slung across the main street, offering a rare ` +
      `middling view down the whole soot-and-neon canyon of CoCo Town. Buskers ` +
      `and beggars work it, and lookouts loiter on it, and from up here the ` +
      `district looks almost, in the failing light, like somewhere a person ` +
      `might choose to be.`);
    room('coco_uscrubridge', 'The Uscru Bridge',
      `A short, gaudy connecting-span where honest CoCo Town gives way to the ` +
      `sleazier glamour next door — the first neon of the Uscru entertainment ` +
      `district bleeding pink and green across the threshold to the east. The ` +
      `crowd changes here: fewer lunch-pails, more trouble, and a great deal ` +
      `more perfume.`);

    link('coco_lift', 'n', 'coco_street');
    link('coco_street', 'n', 'coco_junction');
    link('coco_street', 'e', 'coco_diner');
    link('coco_street', 'w', 'coco_tapcafe');
    link('coco_street', 'se', 'coco_overpass');
    link('coco_junction', 'e', 'coco_foundry');
    link('coco_junction', 'w', 'coco_workerhall');
    link('coco_junction', 'n', 'coco_uscrubridge');
    link('coco_foundry', 'e', 'coco_machineshop');
    link('coco_machineshop', 's', 'coco_refinerygate');
    link('coco_workerhall', 'w', 'coco_powerstation');
    link('coco_diner', 's', 'coco_freightdepot');
    link('coco_freightdepot', 'e', 'coco_speedergarage');
    link('coco_tapcafe', 's', 'coco_tenement');
    link('coco_tenement', 's', 'coco_alley');
    link('coco_alley', 'e', 'coco_junkstall');
    link('coco_overpass', 's', 'coco_ganglane');

    /* ================================================================= *
     *  VII. THE USCRU ENTERTAINMENT DISTRICT  (18) — the neon strip, bridged
     *       to CoCo Town and reachable by air-taxi from the port.
     * ================================================================= */
    room('uscru_strip', 'The Uscru Strip',
      `The great blazing spine of the entertainment district: a canyon-street ` +
      `drowned in holo-neon, clubs and cantinas and worse stacked ten deep up ` +
      `both walls, the crowd a roiling costume-ball of every species and vice ` +
      `the galaxy has invented. The air-taxis put down on a platform here from ` +
      `across the district — type "board" to hail one back. It is loud, it is ` +
      `beautiful, and it is not, under the paint, remotely safe.`);
    room('uscru_outlander', 'The Outlander Club',
      `The district's most notorious club, a cavern of throbbing music and ` +
      `shifting light where the well-heeled slum and the low-born prey on them, ` +
      `and everyone, everyone, is looking for someone. The bouncer is a Gamorrean ` +
      `the size of a speeder, and the real business is done, as always, in the ` +
      `dark at the back.`);
    room('uscru_gamblinghall', 'The Gambling Hall',
      `A blaze of a casino floor — sabacc, jubilee wheels, dejarik for high ` +
      `stakes — where fortunes cross the felt all night and the house, serene ` +
      `behind its odds, takes its patient tithe of every one. The drinks are ` +
      `free, which should tell a thinking being everything they need to know.`);
    room('uscru_opera', 'The Galaxies Opera House',
      `An island of true splendour amid the sleaze: a great opera house of ` +
      `floating tiers and shimmering water-ballet, where the powerful come to ` +
      `be cultured and to be seen and, in the private boxes, to whisper the ` +
      `evening's real transactions over the aria. The art is genuine. So, ` +
      `mostly, is the danger.`);
    room('uscru_operafoyer', 'The Opera Foyer',
      `A gilded foyer of mirrors and marble where the opera's patrons preen ` +
      `between the acts, senators and syndicate-lords and their glittering ` +
      `companions circling one another in the oldest dance of all. A great ` +
      `deal is decided here in glances, and nothing whatever is said aloud.`);
    room('uscru_sticksalley', 'Deathstick Alley',
      `A crooked, low-lit alley where the deathstick-dealers work the shadows, ` +
      `pressing their bright poison on the young and the lost with a murmured ` +
      `word. The users drift through it hollow-eyed and already half-gone. It ` +
      `is the strip's open secret, and its quiet shame, and its steadiest ` +
      `trade.`);
    room('uscru_cantina', 'A Strip Cantina',
      `A serviceable cantina off the main drag, band in the corner, sabacc in ` +
      `the back, a clientele that keeps its blasters loose and its business ` +
      `private. A slow night here can turn fast, and everyone drinking knows ` +
      `it, and drinks anyway, watching the door.`);
    room('uscru_upperbar', 'The Upper Bar',
      `A mezzanine bar overlooking the cantina floor, favoured by those who ` +
      `prefer to watch a room before they enter it — bounty hunters, fixers, ` +
      `the professionally cautious. From up here the whole sad comedy of the ` +
      `strip plays out below, and the watchers nurse one drink and miss ` +
      `nothing.`);
    room('uscru_dancehall', 'The Dance Hall',
      `A pulsing hall where the beautiful and the bought move in the strobing ` +
      `dark, twi'lek dancers on the raised stages and credits changing hands in ` +
      `the press. It is joyous and desperate at once, a great engine for the ` +
      `manufacture of forgetting, and it runs, on the strip's stolen hours, ` +
      `all night and every night.`);
    room('uscru_holojoint', 'The Holo-Joint',
      `A dim parlour of private booths where patrons plug into holo-dreams ` +
      `tailored to any appetite, and drift out hours later blinking and poorer ` +
      `and not quite sure what day it is. The attendant swaps the used ` +
      `dream-chips with the incurious efficiency of someone who has seen every ` +
      `fantasy the galaxy holds and been moved by none.`);
    room('uscru_arena', 'The Fighting Pit',
      `A sunken pit ringed by roaring tiers where the desperate and the ` +
      `enslaved fight for the crowd's coin and pleasure — fist and vibroblade ` +
      `and worse. The sand is dark and does not clean. The bookmakers work the ` +
      `rail, and the house takes its cut of the blood as calmly as of the ` +
      `betting.`);
    room('uscru_spiceden', 'The Spice Den',
      `A hazed, cushioned den where the wealthier addicts take their spice in ` +
      `something like comfort, sprawled in the smoke of a dozen worlds' ` +
      `narcotics, chasing oblivion up the price-ladder as far as their credit ` +
      `will carry them. The den-mother watches over them like a patient ` +
      `spider, and extends credit, and calls it in.`);
    room('uscru_backroom', 'The Back Room',
      `The locked back room where the strip's real ownership does its ` +
      `accounting — the protection, the trafficking, the long grey ledgers of ` +
      `the syndicate that takes a cut of everything for a hundred levels around. ` +
      `Strangers do not come here twice; some do not come here once and leave. ` +
      `The air smells of credits and cold intent.`);
    room('uscru_pazaakden', 'The Pazaak Den',
      `A cardsharp's den where pazaak is played for stakes that ruin, the ` +
      `side-decks palmed and the marks reeled in by charm and cheated by ` +
      `sleight. A run of the cards here has left more than one high-flyer ` +
      `walking home to the undercity, and the dealers wear their marks' losses ` +
      `as jewellery.`);
    room('uscru_bountypost', 'The Bounty Post',
      `A grim little office where the strip's freelance justice is transacted: ` +
      `a board of glowing bounty-pucks, a Trandoshan clerk who takes no ` +
      `interest in your reasons, and a clientele of hunters who take no ` +
      `interest in anything but the price. Names go up here. Some of them come ` +
      `back down, collected.`);
    room('uscru_flophotel', 'The By-The-Hour Hotel',
      `A tired hotel of rented rooms and no questions, where the strip's ` +
      `liaisons and hideouts are conducted behind thin doors. The desk-droid ` +
      `has had its memory-core "adjusted" so many times it can barely recall ` +
      `the hour, which is, of course, exactly the service on offer.`);
    room('uscru_neonalley', 'Neon Alley',
      `A side-alley canyon so dense with signage that it has no darkness at all, ` +
      `every surface a blaze of shifting colour advertising pleasures legal and ` +
      `otherwise. It connects the strip back toward CoCo Town to the west. The ` +
      `light is relentless and beautiful, and it hides, in plain sight, ` +
      `absolutely everything.`);
    room('uscru_rooftop', 'The Rooftop',
      `A cluttered club-rooftop of humming vent-stacks and forgotten furniture, ` +
      `where the strip's workers slip up for a stolen breath of the warm, ` +
      `smog-thick air. The neon glows up from below like a fire in a well, and ` +
      `the traffic streams overhead, and for a moment, up here, the strip is ` +
      `almost quiet.`);

    link('uscru_strip', 'e', 'uscru_outlander');
    link('uscru_strip', 'w', 'uscru_operafoyer');
    link('uscru_strip', 'n', 'uscru_neonalley');
    link('uscru_strip', 's', 'uscru_cantina');
    link('uscru_strip', 'se', 'uscru_gamblinghall');
    link('uscru_strip', 'sw', 'uscru_bountypost');
    link('uscru_operafoyer', 'w', 'uscru_opera');
    link('uscru_outlander', 'e', 'uscru_dancehall');
    link('uscru_outlander', 's', 'uscru_holojoint');
    link('uscru_gamblinghall', 's', 'uscru_pazaakden');
    link('uscru_cantina', 's', 'uscru_upperbar');
    link('uscru_upperbar', 'e', 'uscru_spiceden');
    link('uscru_spiceden', 's', 'uscru_backroom');
    link('uscru_neonalley', 'n', 'uscru_rooftop');
    link('uscru_neonalley', 'e', 'uscru_sticksalley');
    link('uscru_bountypost', 's', 'uscru_arena');
    link('uscru_holojoint', 's', 'uscru_flophotel');

    /* ================================================================= *
     *  VIII. THE WORKS  (20) — the industrial deep-city; here the sun is a
     *        rumour and the machines never sleep.
     * ================================================================= */
    room('works_shaft', 'The Works Freight-Lift',
      `A brute of an industrial turbolift, all rust and warning-klaxons, sized ` +
      `for cargo-sleds and the shift-gangs that ride down with them into the ` +
      `Works. This is the edge of the deep city: below here the daylight has ` +
      `never once reached. UP returns to CoCo Town; DOWN drops toward the ` +
      `Underworld. The factory-floor lies north.`);
    room('works_gate', 'The Works Gate',
      `A cyclopean blast-door standing open on the industrial district the ` +
      `whole upper city depends on and never thinks of — the Works, where ` +
      `Coruscant's power is generated and its air scrubbed and its endless ` +
      `machines maintained. A watch-post guards the threshold; the roar of ` +
      `industry rolls out to meet you.`);
    room('works_mainfloor', 'The Main Factory Floor',
      `A factory floor of appalling scale, machines the size of buildings ` +
      `labouring in ranks beneath a sky of catwalks and crane-rails, the din a ` +
      `physical pressure on the skull. Sparks fall like slow rain. The few ` +
      `human workers move like ants among the mechanisms, tending gods of ` +
      `iron that have long since stopped needing them.`);
    room('works_assembly', 'The Assembly Line',
      `An endless conveyor bearing half-built machines past the welding-arms ` +
      `and the rivet-guns, the same forty motions performed forever by droids ` +
      `and the handful of workers too poor to be replaced by them. The line ` +
      `never stops. To stop the line is the one unforgivable sin of the Works.`);
    room('works_foundry', 'The Great Foundry',
      `A hell of molten metal, vats of glowing alloy tipped and poured by ` +
      `remote, the heat rolling off in waves that warp the air to liquid. The ` +
      `pour-crews work in heat-suits at the edge of endurance, and the light of ` +
      `the metal is the closest thing to a sunrise the deep city ever sees.`);
    room('works_smelter', 'The Smelter',
      `A towering smelter where the district's endless scrap is fed to the ` +
      `flame and reborn as ingot, the ore-conveyors grinding up out of the dark ` +
      `below. The heat and the fume are murderous. Men have gone into the ` +
      `smelter, over the years, by accident and otherwise, and the Works has ` +
      `not slowed its pour to notice.`);
    room('works_droidworks', 'The Droid Foundry',
      `A production-line of droids building droids — labour-units, ` +
      `sentinel-units, the patient mechanical children of the deep city, ` +
      `stamped and wired and woken by the thousand. Something here is not quite ` +
      `right: a reactivated unit down the line has turned from its station and ` +
      `is regarding you with an attention no worker-droid should have.`);
    room('works_reactorhall', 'The Reactor Hall',
      `A vaulted hall enclosing the district's great fusion reactor, a caged ` +
      `sun humming behind metres of shielding, the source of the power the ` +
      `upper city burns without a thought. The air crawls on the skin. Sentinel ` +
      `droids patrol the gantries, and their attention, when it falls on you, ` +
      `is cold and complete.`);
    room('works_coolant', 'The Coolant Galleries',
      `Freezing galleries of pipe and condensation where the reactor's coolant ` +
      `runs in shrieking torrents, the cold a shock after the foundry's hell. ` +
      `Ice rimes the valves. A slip on the rimed catwalk here ends in the ` +
      `coolant-race below, and the coolant-race ends nowhere good.`);
    room('works_conveyor', 'The Conveyor Tunnels',
      `A maze of belt-conveyors carrying ore and scrap and finished goods ` +
      `through the district's guts in the dark, the belts groaning under their ` +
      `endless loads. It is easy to get turned around in here, following the ` +
      `belts, and easier still to be carried somewhere you did not mean to go.`);
    room('works_controlroom', 'The Control Room',
      `A grimy control-room overlooking the main floor, ranked with ` +
      `flickering monitor-screens and switch-banks, where a skeleton crew of ` +
      `overseers runs the whole roaring district on too little sleep. A ` +
      `heavy-duty blaster hangs by the door — the overseers' concession to what ` +
      `sometimes comes up from below.`);
    room('works_generator', 'The Generator Wing',
      `A wing of thundering generators converting the reactor's fury into the ` +
      `power that lights a world, the machines so large that the workers who ` +
      `tend them ride little rail-carts along their flanks. The floor thrums ` +
      `hard enough to blur the vision. Speech is impossible. Everything is ` +
      `understood in signs.`);
    room('works_scrapfloor', 'The Scrap Floor',
      `A vast sorting-floor where the city's endless refuse is picked over by ` +
      `droid and man alike, the salvage stacked in reeking mountains under ` +
      `failing light. The scrap-pickers are the poorest of the Works, and the ` +
      `most territorial, and they have found, in the mountains, things they do ` +
      `not talk about.`);
    room('works_pipeworks', 'The Pipeworks',
      `A drowned-sounding warren of the great pipes that carry the district's ` +
      `water, waste, and steam, dripping and echoing and warm as a fever. ` +
      `Somewhere a valve hisses; somewhere else, water falls a long way in the ` +
      `dark. It would be a very easy place to hide a thing, or to lose one.`);
    room('works_catwalks', 'The High Catwalks',
      `A giddy web of catwalks slung high across the main floor, the machines ` +
      `dwindling to toys below and the crane-rails passing close overhead. The ` +
      `grille sways. The rail is thin. From up here the Works is almost ` +
      `beautiful, a landscape of fire and iron, if one can forget the drop.`);
    room('works_ductvault', 'The Duct Vault',
      `A cathedral-sized vault where the district's air-ducts converge, the ` +
      `great fans moving air with a sound like a held breath, the space so ` +
      `vast the far wall is lost in haze. Things nest in the high ducts. The ` +
      `maintenance crews go up armed, in pairs, and come down, mostly, the ` +
      `same.`);
    room('works_abandonedline', 'The Abandoned Line',
      `A production-line long shut down and left to rust where it stopped, the ` +
      `half-built machines on the dead conveyor gathering the dust of decades. ` +
      `The silence here, after the roar, is unnerving. The Works does not ` +
      `dismantle what it abandons; it simply builds on, and lets the dark ` +
      `close over the leavings.`);
    room('works_sublevel', 'The Works Sublevel',
      `A low, flooded sublevel beneath the abandoned line, ankle-deep in warm ` +
      `black water, the ceiling pressing close and the machinery-noise reduced ` +
      `to a distant heartbeat through the floors above. This is the true ` +
      `bottom of the Works, where it begins to bleed into the Underworld ` +
      `proper. A freight-lift sinks away below.`);
    room('works_freightlift', 'The Deep Freight-Lift',
      `A heavy freight-platform at the base of a shaft that drops out of the ` +
      `Works and into the sunless levels beneath, worn and greasy and rated for ` +
      `loads no one asks about. Down that shaft the machine-noise finally dies, ` +
      `and something older and quieter takes its place. Few who work the Works ` +
      `will ride it willingly.`);
    room('works_watchpost', 'The Watch-Post',
      `A fortified watch-post at the district's gate, manned by weary security ` +
      `who guard the Works against the things that climb up out of the deep ` +
      `city as much as against theft. Their spotlights sweep the dark below. ` +
      `They have seen what comes up, and they do not, on the whole, sleep ` +
      `well.`);

    link('works_shaft', 'n', 'works_gate');
    link('works_gate', 'n', 'works_mainfloor');
    link('works_gate', 'e', 'works_watchpost');
    link('works_mainfloor', 'n', 'works_assembly');
    link('works_mainfloor', 'e', 'works_foundry');
    link('works_mainfloor', 'w', 'works_conveyor');
    link('works_mainfloor', 'se', 'works_catwalks');
    link('works_mainfloor', 'ne', 'works_droidworks');
    link('works_foundry', 'e', 'works_smelter');
    link('works_assembly', 'n', 'works_reactorhall');
    link('works_reactorhall', 'e', 'works_controlroom');
    link('works_reactorhall', 'w', 'works_generator');
    link('works_reactorhall', 'n', 'works_coolant');
    link('works_conveyor', 'w', 'works_scrapfloor');
    link('works_scrapfloor', 's', 'works_pipeworks');
    link('works_catwalks', 's', 'works_ductvault');
    link('works_ductvault', 's', 'works_abandonedline');
    link('works_abandonedline', 'd', 'works_sublevel');
    link('works_sublevel', 'e', 'works_freightlift');

    /* ================================================================= *
     *  IX. THE CORUSCANT UNDERWORLD  (22) — the sunless levels, where the
     *      law is a rumour and Black Sun is the government.
     * ================================================================= */
    room('under_shaft', 'The Drop-Shaft',
      `The turbolift gives out here, at the top of the true Underworld, and ` +
      `what waits is a battered drop-shaft lift that the deep-city folk share ` +
      `with the damp and the dark. No daylight has touched these levels in ten ` +
      `thousand years. UP climbs back toward the Works and the living city; ` +
      `DOWN falls to the very bottom of the world. The undermarket lies north.`);
    room('under_plaza', 'The Underworld Plaza',
      `A great sunless cavern-plaza roofed by the underside of the city above, ` +
      `lit by the cold blue of a thousand failing glow-strips and the sign-glare ` +
      `of the dives that ring it. The crowd is furtive, armed, and various ` +
      `beyond the upper city's imagining. This is the capital of the ` +
      `down-below, and it fears nothing but Black Sun.`);
    room('under_market', 'The Undermarket',
      `A black bazaar where anything at all may be bought — spice, slaves, ` +
      `stolen tech, forbidden weapons, information, silence — the stalls lit by ` +
      `smuggled glow-globes and the dealers alert as prey. No credit-chits ` +
      `here; the coin is hard currency and harder favours, and the one rule is ` +
      `that there are no rules the syndicate has not sold you.`);
    room('under_spicehall', 'The Spice Hall',
      `A long low hall of spice-dens where the deep city takes its poison ` +
      `without the strip's pretence of glamour — just the pipe, the haze, and ` +
      `the slow surrender, bodies laid out in tiers like cargo. A spice-mad ` +
      `wretch lurches from the smoke toward you, past reason, past mercy, wanting ` +
      `only.`);
    room('under_cantina', 'The Undercantina',
      `A cave of a cantina hacked from the city's foundations, its clientele the ` +
      `hard core of the down-below — smugglers, gunrunners, deserters, and ` +
      `things that were once people. The band plays something in a mode the ` +
      `surface never invented. Deals are made here that surface only later, as ` +
      `bodies.`);
    room('under_den', 'The Fence\'s Den',
      `A cluttered den where the Underworld's premier fence weighs stolen ` +
      `glory — Senate silver, temple relics, the jewels off a corpse still warm ` +
      `above — and pays a tenth of worth in untraceable coin. He forgets your ` +
      `face as a professional courtesy, and remembers your business forever, as ` +
      `professional insurance.`);
    room('under_tunnels', 'The Sub-Tunnels',
      `A branching dark of ancient service-tunnels, the walls sweating, the ` +
      `glow-strips dead, the only light what you bring. Down here the map ends ` +
      `and instinct begins. Things live in these tunnels that have never had a ` +
      `name because no one who met them lived to coin one.`);
    room('under_sublevelstreet', 'The Sublevel Street',
      `A whole buried street of a city swallowed centuries ago by the levels ` +
      `built above it, its shopfronts and doorways still standing in the ` +
      `eternal dark, inhabited now by the deep city's poor. The stars that once ` +
      `shone on this street are a hundred storeys and ten thousand years away.`);
    room('under_ganghideout', 'The Vigo\'s Court',
      `A fortified redoubt hung with looted finery, where the local Vigo of ` +
      `Black Sun — the syndicate that truly rules these levels — holds his ` +
      `sable court among his gunmen and his grovellers. He is soft-spoken, ` +
      `beautifully dressed, and the most dangerous being for a kilometre in any ` +
      `direction, and he is, just now, looking at you with polite, terrible ` +
      `interest.`);
    room('under_chopshop', 'The Chop-Shop',
      `A grease-black chop-shop where stolen speeders and hotter goods are ` +
      `stripped to anonymous parts in minutes, the cutting-torches never cold. ` +
      `The boss deals in vibroblades on the side, good ones, off a rack by the ` +
      `wall, and asks no more about your need for one than you ask about the ` +
      `provenance of his stock.`);
    room('under_medclinic', 'The Cut-Rate Clinic',
      `A back-alley clinic of stained tables and a surgical droid with a ` +
      `scavenged conscience, where the down-below get patched, cut, or ` +
      `quietly disappeared, no questions logged and no authorities called. It ` +
      `has saved more lives than the Works has, and ended a fair few to order, ` +
      `and it does not distinguish overmuch between the trades.`);
    room('under_waterworks', 'The Waterworks',
      `A dripping vault of the ancient cisterns and mains that water the ` +
      `levels above, the deep city's one indispensable service, tended by a ` +
      `guild of water-rats who know every pipe for kilometres and guard the ` +
      `knowledge with their lives. The water moves through the dark with a ` +
      `sound like whispering, and the whispering, some swear, answers back.`);
    room('under_mycowarren', 'The Fungus Farms',
      `A cavern warren of luminous fungus-racks, sickly and beautiful, where the ` +
      `deep city grows the grey food that keeps it alive — mushrooms fed on the ` +
      `waste that falls from above, harvested by the pale and the patient. It is ` +
      `the closest thing to a farm on all Coruscant, and it has never once seen ` +
      `the sun.`);
    room('under_refugeecamp', 'The Refugee Camp',
      `A shanty-sprawl of the fallen and the fled — folk sunk from the levels ` +
      `above by ruin or crime, and off-worlders dumped here by traffickers and ` +
      `left to rot, crowded into tents and packing-crates in the dark. They ` +
      `have nothing and nowhere below to fall to, and the syndicate farms their ` +
      `desperation like a crop.`);
    room('under_oldrail', 'The Dead Rail-Line',
      `The rusted platform of a subterranean rail long abandoned, its tunnels ` +
      `mouthing black in both directions, the tracks vanishing into a dark that ` +
      `the deep city agrees, without ever discussing it, not to enter. Something ` +
      `still runs on this line, some nights. It is not a train.`);
    room('under_station', 'The Undercity Station',
      `A cavernous derelict transit-station, its grand old fixtures looted to ` +
      `the bolts, its concourse a squatters' warren of firelight and watchful ` +
      `eyes. Once the pride of a level that had pride; now a waystation for ` +
      `everything and everyone the city above has flushed downward and forgotten.`);
    room('under_crematory', 'The Crematory',
      `A grim furnace-chamber where the down-below burn their dead — and, for a ` +
      `fee and no questions, the dead of others — the flames roaring day and ` +
      `night behind an iron door. The ash goes into the deep, with the rest of ` +
      `what the levels above prefer not to know they produce.`);
    room('under_shrine', 'The Underworld Shrine',
      `A strange shrine grown up in the dark, plastered with the offerings of a ` +
      `people the light forgot — to whatever gods might reach this deep, or to ` +
      `no god, only to the memory of a sky. Folk come here to pray for a way ` +
      `up, or simply for the vision of one, and the candle-smoke climbs, and ` +
      `does not reach it.`);
    room('under_deadmanswalk', "Dead Man's Walk",
      `A notorious stretch of dark where the syndicate leaves its examples ` +
      `hanging, and where the desperate lie in wait for the unwary — the single ` +
      `most murderous span of walkway in the deep city, avoided by everyone with ` +
      `sense and traversed only by those with none, or no choice, or business of ` +
      `their own in blood.`);
    room('under_thievesnest', 'The Thieves\' Nest',
      `A rat-run redoubt of the deep city's cutthroats and cutpurses, a warren ` +
      `of stolen goods and stolen faces where Black Sun's enforcers keep the ` +
      `peace with a boot and a blade. An enforcer looms in the passage, ` +
      `syndicate colours on his arm, weighing whether you are prey, or ` +
      `payment, or a problem to be solved.`);
    room('under_sewer', 'The Great Sewer',
      `A colossal sewer-tunnel carrying the filth of a world's worth of city ` +
      `through the dark in a slow black river, the stench a solid thing, the ` +
      `echoes endless. Things live in the sewer that the sewer has shaped — ` +
      `pale, eyeless, patient. A cthon, they are called, when they are called ` +
      `anything, and one is unfolding from the muck ahead.`);
    room('under_pit', 'The Bottomless Pit',
      `A ragged rent in the floor of the Underworld where some ancient collapse ` +
      `opened a shaft straight down into the drowned foundations, breathing up ` +
      `a cold, wet, mineral dark. The deep city throws its worst secrets down ` +
      `here and hears nothing come back. A slick descent leads down into the ` +
      `undercity, for those with a reason terrible enough.`);

    link('under_shaft', 'n', 'under_plaza');
    link('under_plaza', 'n', 'under_market');
    link('under_plaza', 'e', 'under_sublevelstreet');
    link('under_plaza', 'w', 'under_tunnels');
    link('under_plaza', 'se', 'under_station');
    link('under_plaza', 'ne', 'under_cantina');
    link('under_plaza', 'nw', 'under_shrine');
    link('under_market', 'n', 'under_den');
    link('under_market', 'e', 'under_spicehall');
    link('under_sublevelstreet', 'e', 'under_chopshop');
    link('under_sublevelstreet', 's', 'under_deadmanswalk');
    link('under_tunnels', 'w', 'under_waterworks');
    link('under_tunnels', 's', 'under_sewer');
    link('under_station', 's', 'under_oldrail');
    link('under_cantina', 'e', 'under_ganghideout');
    link('under_spicehall', 's', 'under_medclinic');
    link('under_deadmanswalk', 's', 'under_thievesnest');
    link('under_waterworks', 's', 'under_mycowarren');
    link('under_shrine', 's', 'under_crematory');
    link('under_oldrail', 'w', 'under_refugeecamp');
    link('under_sewer', 'd', 'under_pit');

    /* ================================================================= *
     *  X. THE UNDERCITY & LEVEL 1313  (20) — the bottom of the world, where
     *     the city meets its own drowned foundations.
     * ================================================================= */
    room('deep_bottom', 'The Foundation Lift',
      `The last lift, at the very bottom of everything — a cage of scavenged ` +
      `parts that groans on a cable no one has inspected in a lifetime, come to ` +
      `rest on the foundation-rock of the world. There is no down from here but ` +
      `by falling. UP is the only way home, ten thousand storeys of it. The ` +
      `notorious Level 1313 opens to the north.`);
    room('deep_l1313', 'Level 1313',
      `The most infamous address on Coruscant: a byword in the whole galaxy for ` +
      `everything the shining capital pretends it does not contain. A black ` +
      `bazaar of the ultimate down-below, lit by scavenged fire, where ` +
      `bounty-hunters, gangs, slavers, and worse conduct the business the light ` +
      `would kill them for. Here, at the bottom, the mask is finally, entirely ` +
      `off.`);
    room('deep_oldcity', 'The Buried City',
      `The streets of a city that stood on the surface of Coruscant when the ` +
      `stars still shone on it — colonnades and plazas and the fronts of ` +
      `once-proud buildings, entombed now beneath ten thousand years of the ` +
      `city that grew on their roofs. The dead down here outnumber the living ` +
      `of the world above, and lie undisturbed, and are envied.`);
    room('deep_ruins', 'The Ancient Ruins',
      `Ruins older than the Republic, older than record, a broken geometry of a ` +
      `civilisation that raised Coruscant's first stone and left nothing but ` +
      `these bones and a chill that is not entirely the cold. Something was ` +
      `worshipped here once. The something, the deep city whispers, may not ` +
      `have entirely left.`);
    room('deep_forgottenstation', 'The Forgotten Station',
      `A transit-station so deep and so long-dead that even the down-below has ` +
      `forgotten its name, its tunnels caved and its concourse a drift of dust ` +
      `and older debris. The dark here has a texture. The silence listens. ` +
      `Nothing living should be down here, and the certainty that something is ` +
      `grows with every step.`);
    room('deep_wasteshafts', 'The Waste Shafts',
      `The bottom of the great shafts down which the entire city above voids its ` +
      `refuse — a slow, reeking, endless rain of the world's leavings, piled ` +
      `into hills that shift and settle and, now and then, disgorge something ` +
      `that was thrown away still breathing. The scavengers work the slopes, and ` +
      `do not look up.`);
    room('deep_scavcamp', 'The Scavengers\' Camp',
      `A firelit camp of the undercity scavengers — pale, cave-adapted folk who ` +
      `have lived so many generations in the dark that the surface is only a ` +
      `legend to them, and a frightening one. They pick the falling waste for ` +
      `treasure and trade it up the levels they will never climb, and they ` +
      `regard a stranger from above as something between a marvel and a meal.`);
    room('deep_granddroid', 'The Derelict',
      `The vast rusted hulk of some titanic ancient droid or war-machine, fallen ` +
      `or dumped here in an age past reckoning, its carcass grown into a warren ` +
      `of scavenger-dens and shrine-nooks. Children of the camp play in the ` +
      `cavern of its skull. Whatever it was built to do, it did it long ago, ` +
      `and to whom no one now can say.`);
    room('deep_cultwarren', 'The Cult Warren',
      `A warren of niches and guttering flame where a down-below cult keeps its ` +
      `mad, patient vigil — worshippers of the dark, or of the something in the ` +
      `ruins, or of the sky they have never seen and have made a terrible god ` +
      `of. They do not welcome interruption. They do, sometimes, welcome ` +
      `sacrifice.`);
    room('deep_prophetden', 'The Prophet\'s Den',
      `A reeking den where a self-anointed prophet of the depths raves to a ` +
      `huddle of the lost, spinning the undercity's fears into scripture, ` +
      `promising a rising, a reckoning, a day the bottom shall be uppermost. ` +
      `Some of it is madness. Some of it, in the dark, at the bottom of ` +
      `everything, sounds unnervingly like sense.`);
    room('deep_boneyard', 'The Boneyard',
      `A field of the dead the size of a district — the fallen of the undercity, ` +
      `and the fallen from far above, come to rest at last on the world's floor, ` +
      `bones without number in the dark. The scavengers give it a wide berth. ` +
      `The cult does not. Something feeds here, and grows, and it is not the ` +
      `fungus.`);
    room('deep_crusher', 'The Trash Compactor',
      `A titanic ancient compactor into which the waste-shafts feed, its ` +
      `hydraulic walls closing and grinding on a cycle older than the Republic, ` +
      `its floor a slurry of pulped refuse and dark water. Things live in the ` +
      `slurry, waiting out the crush in the gaps of the cycle. So, if they must, ` +
      `do the scavengers, and they count the seconds.`);
    room('deep_rootlevel', 'The Root Level',
      `Where the city's deepest structural roots grip the bedrock of the world — ` +
      `column-roots the width of towers, sunk into the living stone, bearing the ` +
      `unthinkable weight of everything above. Water seeps between them, cold ` +
      `and black and ancient. This is the true floor of Coruscant. There is ` +
      `nothing built below.`);
    room('deep_coldsea', 'The Cold Sea',
      `A black subterranean sea, still and cold and older than the city, filling ` +
      `the drowned foundations to a horizon of dark water lost in dark air. ` +
      `Nothing should live in it. Everything, the undercity swears, does. Pale ` +
      `shapes move beneath the oily surface, unhurried, and the ripples reach ` +
      `the shore a long time after.`);
    room('deep_cistern', 'The Great Cistern',
      `A vast flooded cistern where the deep water gathers before it is pumped, ` +
      `at unimaginable cost, all the way up to the living city, the surface of ` +
      `it a black mirror under a ceiling lost in dark. The pumps thud, far off. ` +
      `The water is very deep, and very cold, and it is not, entirely, ` +
      `still.`);
    room('deep_dianoga', 'The Dianoga Pool',
      `A stagnant pool at the bottom of the cistern-works, the water a scummed ` +
      `and reeking black — and something vast moves beneath it, a single baleful ` +
      `eye breaking the surface on a fleshy stalk, then the slow uncoiling of ` +
      `tentacles thick as a man's waist. A dianoga, grown monstrous in the deep ` +
      `dark on a diet of everything the city drops.`);
    room('deep_mawmouth', 'The Maw',
      `The lair of the thing the whole undercity fears and will not name: a ` +
      `flooded cavern reeking of rot and old death, its floor littered with the ` +
      `picked bones of everything foolish enough to come this deep. From the ` +
      `black water rises the elder of the dianogas, ancient and enormous and ` +
      `patient as the rock, and it has been waiting, in the dark, for a very ` +
      `long time, for you.`);
    room('deep_blackpit', 'The Black Pit',
      `A perfectly lightless shaft dropping away from the foundations into ` +
      `something below the bottom of the world — a place the maps insist cannot ` +
      `exist, since there is nothing beneath the bedrock, and yet here it ` +
      `breathes, cold and slow, up out of the dark. The undercity throws things ` +
      `in. The undercity does not lean over the edge to watch them fall.`);
    room('deep_abyssledge', 'The Abyss Ledge',
      `A last crumbling ledge above the black pit, the edge of the mapped world, ` +
      `where the boldest scavengers dangle lines into the dark below and haul up, ` +
      `now and again, things that gleam and things that scream and things best ` +
      `cut loose to fall back. Beyond here there is no floor, no name, and no ` +
      `returning. You have reached the very bottom of Coruscant.`);

    link('deep_bottom', 'n', 'deep_l1313');
    link('deep_l1313', 'n', 'deep_oldcity');
    link('deep_l1313', 'e', 'deep_forgottenstation');
    link('deep_l1313', 'w', 'deep_scavcamp');
    link('deep_l1313', 'se', 'deep_foundations');
    link('deep_oldcity', 'n', 'deep_ruins');
    link('deep_oldcity', 'e', 'deep_cultwarren');
    link('deep_forgottenstation', 's', 'deep_wasteshafts');
    link('deep_scavcamp', 's', 'deep_granddroid');
    link('deep_foundations', 's', 'deep_rootlevel');
    link('deep_rootlevel', 's', 'deep_coldsea');
    link('deep_coldsea', 'e', 'deep_cistern');
    link('deep_cistern', 'e', 'deep_dianoga');
    link('deep_ruins', 'n', 'deep_boneyard');
    link('deep_wasteshafts', 's', 'deep_crusher');
    link('deep_cultwarren', 'e', 'deep_prophetden');
    link('deep_granddroid', 's', 'deep_abyssledge');
    link('deep_dianoga', 's', 'deep_mawmouth');
    link('deep_foundations', 'e', 'deep_blackpit');

    // deep_foundations is referenced above; declare it here in the Undercity set.
    room('deep_foundations', 'The Foundations',
      `The load-bearing foundations of the ecumenopolis, a lightless forest of ` +
      `structural columns marching away into the dark in every direction, each ` +
      `bearing a city's weight, each older than most worlds' histories. The air ` +
      `is dead and cold and tastes of ten thousand years. Water lies black ` +
      `between the columns, and the way sinks further still to the south, and ` +
      `opens east onto a pit that should not be.`);

    /* ================================================================= *
     *  THE TURBOLIFT SPINE — the vertical thread the whole area hangs on.
     *  Each link is a turbolift ride between level-bands; the reciprocal
     *  (up) exit is created automatically.
     * ================================================================= *
     *      senate_transit   (government heights)   TOP
     *          |  d
     *      plaza_skydeck    (Monument Plaza)
     *          |  d
     *      sky_nexus        (Column Commons)
     *          |  d
     *      port_nexus       (Westport — START band)
     *          |  d
     *      coco_lift        (CoCo Town)
     *          |  d
     *      works_shaft      (The Works)
     *          |  d
     *      under_shaft      (the Underworld)
     *          |  d
     *      deep_bottom      (the Undercity)         BOTTOM
     */
    link('senate_transit', 'd', 'plaza_skydeck');
    link('plaza_skydeck', 'd', 'sky_nexus');
    link('sky_nexus', 'd', 'port_nexus');
    link('port_nexus', 'd', 'coco_lift');
    link('coco_lift', 'd', 'works_shaft');
    link('works_shaft', 'd', 'under_shaft');
    link('under_shaft', 'd', 'deep_bottom');

    // The two horizontal bridges to the off-spine districts.
    link('senate_skywalk', 'e', 'temple_gates');   // Senate heights -> Jedi Temple
    link('coco_uscrubridge', 'e', 'uscru_neonalley'); // CoCo Town -> Uscru strip

    /* ================================================================= *
     *  Inhabitants: starting kit, folk to talk to, and foes to blood a
     *  blaster on — scaling from the safe upper decks to the deadly deep.
     * ================================================================= */

    // --- Starting kit, found around Westport where a traveller equips ---
    R.port_lostluggage.add(world.item({
      name: "spacer's blaster pistol",
      keywords: ['blaster', 'pistol', 'gun', 'spacer'],
      short: "An unclaimed spacer's blaster pistol lies in an impounded case.",
      description:
        'A plain, well-used sidearm of the sort every honest freighter-hand ' +
        'carries and every dishonest one carries two of. The charge-pack reads ' +
        'most of the way full. No one has claimed the case in months.',
      weight: 2,
      damage: [3, 6],
      accuracy: 1,
    }));
    R.port_medbay.add(world.item({
      name: 'armorweave jacket',
      keywords: ['jacket', 'armorweave', 'armour', 'armor'],
      short: 'A traveller\'s armorweave jacket hangs on the kit-rack.',
      description:
        'A hard-wearing jacket lined with blast-dampening armorweave, the sort ' +
        'the wary buy before they go down-level. Scuffed, sturdy, and a great ' +
        'deal better than shirtsleeves where you are going.',
      weight: 3,
      armor: 2,
    }));

    // --- Better gear, earned by going deeper ---
    R.works_controlroom.add(world.item({
      name: 'heavy blaster pistol',
      keywords: ['heavy', 'blaster', 'pistol'],
      short: "An overseer's heavy blaster pistol hangs by the door.",
      description:
        'A brutal slab of a sidearm, over-charged and under-regulated, the kind ' +
        'the Works overseers keep for what climbs up out of the dark. It kicks ' +
        'like a gundark and hits like one too.',
      weight: 4,
      damage: [5, 9],
      accuracy: 2,
    }));
    R.under_chopshop.add(world.item({
      name: 'vibroblade',
      keywords: ['vibroblade', 'blade', 'knife', 'vibro'],
      short: 'A vibroblade sits on the rack, humming faintly.',
      description:
        'A wicked short blade whose edge shivers at ultrasonic speed, parting ' +
        'armour and flesh with equal ease. A favourite of the down-below, where ' +
        'a blaster-bolt draws the wrong kind of attention.',
      weight: 2,
      damage: [4, 8],
      accuracy: 1,
    }));
    R.deep_granddroid.add(world.item({
      name: 'durasteel vibro-axe',
      keywords: ['vibro-axe', 'axe', 'vibroaxe', 'durasteel'],
      short: 'A scavenger\'s durasteel vibro-axe leans in the derelict\'s hollow.',
      description:
        'A heavy two-handed axe salvaged and re-edged with a vibro-cell, its ' +
        'haft wound in gripwire, its blade notched from hard, dark use. It is ' +
        'the undercity\'s answer to everything with teeth.',
      weight: 7,
      damage: [6, 11],
      accuracy: 1,
    }));
    // A quiet nod, low-powered, for those who climb the Temple:
    R.temple_salle.add(world.item({
      name: 'training lightsaber',
      keywords: ['lightsaber', 'saber', 'sabre', 'training'],
      short: 'A training lightsaber rests in the practice-rack, its blade set low.',
      description:
        'A padawan\'s practice-blade, its plasma throttled to bruise rather than ' +
        'burn — though "bruise", from a lightsaber, is a relative term. To hold ' +
        'it lit is to feel the faint, humming pull of a weapon older than the ' +
        'Republic, and to understand why they never let the young keep them.',
      weight: 1,
      damage: [4, 8],
      accuracy: 2,
    }));

    // --- Peaceful folk (talk to them) ---
    R.port_droid.add(world.mob({
      name: 'protocol droid',
      keywords: ['droid', 'protocol', 'threepio'],
      short: 'A tarnished protocol droid brightens hopefully as you pass.',
      description:
        'A golden protocol unit gone dull with wear, fluent in six million ' +
        'forms of communication and lonely in every one of them, waiting to be ' +
        'hired by someone who needs the galaxy translated.',
      xp: 0,
      dialogue:
        'Oh, thank the Maker, a traveller! Might I be of service? I am fluent ' +
        'in the customs of a thousand worlds — including, if I may, the custom ' +
        'of NOT taking the turbolift all the way down. Nothing good lives at ' +
        'the bottom, sir or madam. Nothing good at all.',
    }));
    R.port_cantina.add(world.mob({
      name: 'grizzled spacer',
      keywords: ['spacer', 'pilot', 'freighter'],
      short: 'A grizzled spacer nurses a drink and watches the door.',
      description:
        'A weathered freighter-hand with a blaster-burn scar and a thousand ' +
        'parsecs in her eyes, between ships and between troubles, drinking the ' +
        'layover slowly.',
      xp: 0,
      dialogue:
        'Coruscant. Whole galaxy runs on it and nobody wants to land here. ' +
        'Word of advice, groundling — the shine\'s all up top. You go down the ' +
        'lift looking for work, make sure you can shoot before you can\'t stop.',
    }));
    R.coco_diner.add(world.mob({
      name: 'diner cook',
      keywords: ['cook', 'besalisk', 'dex'],
      short: 'The four-armed cook leans over the counter, all business and warmth.',
      description:
        'A vast, jovial Besalisk with four flour-dusted arms and an ear to every ' +
        'rumour in the middle city, flipping breakfast and dispensing wisdom in ' +
        'equal measure across a counter worn smooth by decades of elbows.',
      xp: 0,
      dialogue:
        'Hah! New face! Sit, eat, the gorg-and-egg\'s fresh. You want to know ' +
        'anything about anything down these levels, you ask old Dex. You want ' +
        'to STAY healthy, you don\'t ask about Black Sun. Now — what\'ll it be?',
    }));
    R.temple_gardens.add(world.mob({
      name: 'Jedi padawan',
      keywords: ['padawan', 'jedi', 'apprentice'],
      proper: true,
      short: 'A young padawan sits in meditation by the water, braid over one shoulder.',
      description:
        'A youth in the coarse robes of the Order, a padawan\'s braid at the ' +
        'temple, brow knotted in the honest effort of a mind still learning to ' +
        'be quiet. The Force is a small, bright, uncertain thing in them yet.',
      xp: 0,
      dialogue:
        'Peace. You feel it too, don\'t you — how the Temple is quieter than it ' +
        'should be? My master says the Force is clouded, that we cannot see as ' +
        'we once did. She says it as though it were the weather. But I have ' +
        'seen her face when she thinks I am not looking.',
    }));
    R.senate_press.add(world.mob({
      name: 'holojournalist',
      keywords: ['journalist', 'reporter', 'holojournalist'],
      short: 'A sharp-eyed holojournalist works the gallery, recorder-eye orbiting.',
      description:
        'A quick, tired reporter with a hovering recorder-eye and the particular ' +
        'wariness of someone who has learned which stories are safe to file and ' +
        'which are safe only to know.',
      xp: 0,
      dialogue:
        'Off the record? The Chancellor asks for emergency powers again next ' +
        'session. On the record, it\'s "a temporary measure in troubled times." ' +
        'I\'ve filed the on-the-record version. The other one I keep in my ' +
        'head, where the censors can\'t reach it. Yet.',
    }));
    R.under_market.add(world.mob({
      name: 'information broker',
      keywords: ['broker', 'information', 'informant'],
      short: 'A hooded broker leans in a doorway, missing nothing.',
      description:
        'A still, watchful figure who deals in the one commodity the Underworld ' +
        'values above spice or blood — knowing things — and who has, folded ' +
        'somewhere on their person, a secret to hang half the levels above.',
      xp: 0,
      dialogue:
        'Everything\'s for sale down here, friend, and I sell the map to it. ' +
        'The Vigo runs these levels — Black Sun, you understand — and even the ' +
        'law up top pays him his cut and calls it order. You want to go deeper ' +
        'than his court? Then you want to go past everything that\'s still ' +
        'pretending to be a person.',
    }));

    // --- The Vigo of Black Sun: a talkable power, and a fearsome fight ---
    R.under_ganghideout.add(world.mob({
      name: 'Black Sun vigo',
      keywords: ['vigo', 'sun', 'lord', 'boss'],
      proper: true,
      short: 'The Black Sun vigo regards you from his looted throne, unhurried.',
      description:
        'The Vigo: overlord of these sunless levels for Black Sun, the syndicate ' +
        'that runs the deep city and half the shadows of the bright one. He is ' +
        'soft-voiced, exquisitely dressed, and entirely without mercy — the ' +
        'most dangerous being between here and the surface, and aware of it.',
      level: 8,
      maxHp: 70,
      stats: { str: 15, dex: 17, con: 16, int: 17 },
      damage: [6, 12],
      armor: 3,
      xp: 300,
      dialogue:
        'Welcome to my levels, surface-thing. Everyone who breathes down here ' +
        'breathes because I permit it — the dealers, the gangs, the little ' +
        'law that visits. You may go deeper if you like. Past my court there is ' +
        'only the dark, and the things the dark keeps, and I do not tax the ' +
        'dead. Do give the dianogas my regards.',
    }));

    // --- Hostiles, for the blooding of new blasters ---
    R.sky_vents.add(world.mob({
      name: 'scurrier',
      keywords: ['scurrier', 'rat', 'vermin'],
      short: 'A scurrier bares too many teeth from the ductwork.',
      description:
        'A quick, rat-like scavenger the size of a large cat, grey and ' +
        'sharp-toothed, that has bred in the city\'s vents for so many ' +
        'generations it has never seen the sky and would fear it if it did.',
      hostile: true,
      level: 1,
      maxHp: 10,
      stats: { str: 9, dex: 14, con: 9, int: 3 },
      damage: [1, 4],
      xp: 20,
      respawns: 40,
    }));
    R.port_maintenance.add(world.mob({
      name: 'malfunctioning loadlifter',
      keywords: ['loadlifter', 'droid', 'loader'],
      short: 'A malfunctioning loadlifter droid lurches at anything that moves.',
      description:
        'A heavy cargo-droid with a corrupted logic-core, its warning-strobe ' +
        'stuck on and its manipulator-claws snapping at random. It has crushed ' +
        'two crates and a supervisor\'s foot this shift, and it is not done.',
      hostile: true,
      level: 1,
      maxHp: 14,
      stats: { str: 14, dex: 8, con: 12, int: 2 },
      damage: [2, 5],
      armor: 1,
      xp: 30,
      respawns: 60,
    }));
    R.sky_edge.add(world.mob({
      name: 'ledge-jumper',
      keywords: ['jumper', 'mugger', 'thug'],
      short: 'A ledge-jumper eyes your purse, and the long drop past it.',
      description:
        'A gaunt predator who works the unrailed edges where the desperate ' +
        'come to jump, helping them on their way for whatever falls out of ' +
        'their pockets. Quick, and cold, and comfortable with heights.',
      hostile: true,
      level: 2,
      maxHp: 20,
      stats: { str: 12, dex: 15, con: 11, int: 8 },
      damage: [3, 6],
      xp: 45,
      respawns: 70,
    }));
    R.coco_ganglane.add(world.mob({
      name: 'gang tough',
      keywords: ['tough', 'ganger', 'thug'],
      short: 'A gang tough cracks his knuckles and blocks the lane.',
      description:
        'A hard young CoCo Town ganger in colours, all swagger and scar-tissue, ' +
        'proving himself the only way the district has left him — on whoever ' +
        'wanders down the wrong lane.',
      hostile: true,
      level: 2,
      maxHp: 24,
      stats: { str: 14, dex: 12, con: 13, int: 8 },
      damage: [3, 6],
      armor: 1,
      xp: 50,
      respawns: 70,
    }));
    R.works_droidworks.add(world.mob({
      name: 'reactivated battle droid',
      keywords: ['battle', 'droid', 'b1'],
      short: 'A reactivated battle droid clanks around to face you, weapon rising.',
      description:
        'A war-surplus combat droid pulled from the foundry\'s scrap and ' +
        'jolted back to a half-life, its blaster-arm twitching, its vocabulator ' +
        'looping a single flat query: "roger, roger." It does not remember ' +
        'the war. It remembers how to shoot.',
      hostile: true,
      level: 3,
      maxHp: 30,
      stats: { str: 13, dex: 12, con: 14, int: 6 },
      damage: [4, 7],
      armor: 2,
      xp: 80,
      respawns: 90,
    }));
    R.works_reactorhall.add(world.mob({
      name: 'sentinel droid',
      keywords: ['sentinel', 'droid', 'guard'],
      short: 'A sentinel droid pivots on its gantry, optics locking onto you.',
      description:
        'A heavy security droid of the Works, armour-plated and armed for ' +
        'intruders, its single red optic sweeping the reactor hall with cold, ' +
        'patient thoroughness. It has decided you do not belong here. It is ' +
        'correct.',
      hostile: true,
      level: 4,
      maxHp: 40,
      stats: { str: 16, dex: 11, con: 15, int: 8 },
      damage: [4, 9],
      armor: 3,
      xp: 110,
      respawns: 120,
    }));
    R.under_spicehall.add(world.mob({
      name: 'spice-mad wretch',
      keywords: ['wretch', 'addict', 'spice'],
      short: 'A spice-mad wretch lurches from the smoke, past all reason.',
      description:
        'A being burned hollow by spice, wild-eyed and unfeeling, driven by an ' +
        'appetite the drug has left where a mind used to be. It feels no pain, ' +
        'and no fear, and no mercy, and it is coming for you.',
      hostile: true,
      level: 3,
      maxHp: 28,
      stats: { str: 14, dex: 13, con: 12, int: 4 },
      damage: [3, 7],
      xp: 75,
      respawns: 90,
    }));
    R.under_thievesnest.add(world.mob({
      name: 'Black Sun enforcer',
      keywords: ['enforcer', 'gunman', 'syndicate'],
      short: 'A Black Sun enforcer steps into the passage, syndicate colours on his arm.',
      description:
        'A professional killer in the Vigo\'s service, calm and well-armed and ' +
        'entirely untroubled by conscience, who keeps the deep city\'s peace ' +
        'the syndicate\'s way — with a blade first and questions never.',
      hostile: true,
      level: 4,
      maxHp: 42,
      stats: { str: 15, dex: 14, con: 14, int: 11 },
      damage: [5, 9],
      armor: 2,
      xp: 120,
      respawns: 120,
    }));
    R.under_sewer.add(world.mob({
      name: 'cthon',
      keywords: ['cthon', 'thing', 'crawler'],
      short: 'A pale, eyeless cthon unfolds from the muck, tasting the air.',
      description:
        'A cthon: a pale, eyeless, long-limbed predator shaped by ten thousand ' +
        'years of the sunless sewers, all reach and grip and patient hunger, ' +
        'that pulls the unwary down into the black water and is never seen to ' +
        'eat, only to feed.',
      hostile: true,
      level: 5,
      maxHp: 50,
      stats: { str: 17, dex: 13, con: 15, int: 5 },
      damage: [5, 10],
      armor: 2,
      xp: 160,
      respawns: 150,
    }));
    R.deep_dianoga.add(world.mob({
      name: 'dianoga',
      keywords: ['dianoga', 'tentacle', 'eye'],
      short: 'A dianoga\'s eyestalk breaks the scum, and the tentacles follow.',
      description:
        'A dianoga grown huge in the drowned dark, a knot of grey tentacles ' +
        'about a single fleshy eye, that lives in the deep water and takes ' +
        'whatever the deep water is given. It is old, and blind but for the one ' +
        'eye, and hungry in the total way of things that have never once been ' +
        'full.',
      hostile: true,
      level: 6,
      maxHp: 58,
      stats: { str: 18, dex: 10, con: 16, int: 4 },
      damage: [6, 10],
      armor: 2,
      xp: 200,
      respawns: 180,
    }));
    R.deep_mawmouth.add(world.mob({
      name: 'the elder dianoga',
      keywords: ['elder', 'dianoga', 'maw'],
      proper: true,
      short: 'The elder dianoga rises from the black water, vast beyond reckoning.',
      description:
        'The thing the undercity will not name: the eldest of the dianogas, ' +
        'grown over unrecorded centuries into a horror the size of a ship, a ' +
        'living cavern of tentacle and eye and appetite that has fed on ' +
        'everything the whole world above has ever dropped, and has never yet ' +
        'been fed enough.',
      hostile: true,
      level: 8,
      maxHp: 72,
      stats: { str: 19, dex: 11, con: 18, int: 5 },
      damage: [7, 12],
      armor: 3,
      xp: 320,
      respawns: 240,
    }));

    // --- The air-taxi: board at the port platform to skim to the Uscru strip ---
    R.port_taxi.ferry = {
      toId: 'uscru_strip',
      moored: 'A yellow air-taxi idles at the platform, driver-droid waiting',
      crossing: [
        'You climb into the air-taxi and name your destination; the droid ' +
          'chirps a fare and drops off the platform into the roaring lanes.',
        'The cab threads the skylane traffic in white-knuckle silence, spires ' +
          'wheeling past close enough to touch, the whole gaudy vertical city ' +
          'streaming by in a blur of neon and advertisement and drop.',
        'It banks hard and settles at last onto a landing above the Uscru ' +
          'strip, the entertainment district\'s light washing up pink and green ' +
          'from the canyon below. Fare paid, the droid is already lifting away.',
      ],
    };

    // --- ...and board again on the strip to ride back to Westport ---
    R.uscru_strip.ferry = {
      toId: 'port_taxi',
      moored: 'A yellow air-taxi hovers at the strip\'s landing, meter running',
      crossing: [
        'You flag down an air-taxi off the strip and fold yourself into the ' +
          'back; the droid pulls out into the lanes without a word.',
        'The neon falls away behind and the cab climbs through the stacked ' +
          'traffic toward the brighter decks, the smog thinning, a hint of the ' +
          'true daylight growing ahead.',
        'It sets you down on the Westport air-taxi platform, the spaceport\'s ' +
          'honest light almost a shock after the strip, the announcer\'s voice ' +
          'drifting out to greet you with the departures of a hundred worlds.',
      ],
    };

    return {
      area: coruscant,
      startId: 'port_concourse',
    };
  };
})(typeof window !== 'undefined' ? window : this);
