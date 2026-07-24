/*
 * world-data.js — THE CITY OF MOURNFALL.
 *
 * A single 158-room area: a city caught between worlds, in the Far-Land at the
 * end of everything, roofed by an obsidian dome that holds back the Void. This
 * file is content, not framework — it reads like a MUD zone file: rooms are
 * created by id into a table, then stitched together with exits. The framework
 * (js/*.js) does all the actual work.
 *
 * LAYOUT (districts, roughly from the world-gate outward):
 *   gate_*   The Worldgate / Threshold ...... 10   arrival between worlds
 *   con_*    The Obsidian Concourse ..........  8   the spine avenue
 *   high_*   Highmournt (the Dome-Crown) ..... 22   the wealthy, intact quarter
 *   ash_*    The Ashmarket ................... 20   the great bazaar
 *   cin_*    The Cinder Wards ................ 26   slums under the broken dome
 *   quay_*   The Voidquays ................... 16   moorings at the dome's rim
 *   sep_*    The Sepulchre District .......... 16   temples to the End
 *   pale_*   The Pale Assembly ............... 12   the wardens and their law
 *   under_*  The Undermourn .................. 18   catacombs and undercity
 *   gut_*    The Guttering Rows .............. 10   the working poor's tenements
 *                                              ---
 *                                              158
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildWorld = function buildWorld() {
    const world = new MUD.World();

    const mournfall = world.area({
      id: 'mournfall',
      name: 'The City of Mournfall',
      description:
        'A city between worlds, under an obsidian dome, at the end of ' +
        'everything.',
    });

    // Room table + terse builders. Every `room()` call joins the active area.
    const R = Object.create(null);
    function room(id, title, description, spec) {
      spec = spec || {};
      spec.id = id;
      spec.title = title;
      spec.description = description;
      R[id] = world.room(spec);
      return R[id];
    }
    // Links are collected and applied after every room exists, so districts
    // may reference each other's rooms regardless of definition order.
    const pendingLinks = [];
    function link(a, dir, b, opts) {
      pendingLinks.push([a, dir, b, opts]);
    }
    function flushLinks() {
      for (const [a, dir, b, opts] of pendingLinks) {
        if (!R[a]) throw new Error('link from missing room: ' + a);
        if (!R[b]) throw new Error('link to missing room: ' + b);
        R[a].link(dir, R[b], opts);
      }
    }

    /* ================================================================= *
     *  A. THE WORLDGATE / THRESHOLD  (10)
     *  Where travellers step in from other worlds. The one border in
     *  creation that is guarded from the inside.
     * ================================================================= */
    room('gate_arrival', 'The Threshold Stone',
      `You stand on the Threshold Stone, a disc of grey basalt worn to a mirror ` +
      `by the feet of a hundred thousand arrivals. There is no door behind you — ` +
      `only the memory of one, already closing, already forgotten. Ahead the ` +
      `Winnowing Hall opens to the north, its lamps the colour of old amber. A ` +
      `sign, cut in nine languages and one that is only a smell, reads: WELCOME ` +
      `TO MOURNFALL. GO NO FURTHER OUT THAN IN.`);
    room('gate_customs', 'The Winnowing Hall',
      `A long hall of black brick where the newly-arrived are counted, weighed, ` +
      `and asked their business. Warden-clerks work from lecterns bolted to the ` +
      `floor, their ledgers chained shut. The air smells of ink and cold iron. ` +
      `Ways lead off east to the toll-office and west to a small bright shrine.`);
    room('gate_hall', 'The Hall of a Thousand Doors',
      `The ceiling is lost in shadow, and every wall is doors — oak, iron, coral, ` +
      `bone, a door of standing water, a door that is only a painting of a door. ` +
      `None of them open. They are the arrivals of ages past, sealed the instant ` +
      `their travellers crossed, hung here as a museum of ways that will not come ` +
      `again. A stair descends into the undercroft; the queue continues north.`);
    room('gate_queue', "The Pilgrim's Queue",
      `Rope-lines of tarnished velvet zig-zag across the floor, though there is ` +
      `no crowd today — only you, and the patient silence of a place built for ` +
      `multitudes. Names of the waiting are chalked on a great slate and, one by ` +
      `one, wiped away. The ramp up lies north.`);
    room('gate_shrine', "The Traveller's Shrine",
      `A niche of white stone, almost painfully clean amid all this black brick. ` +
      `A single candle burns in a cup of entropy-glass, its flame leaning always ` +
      `inward, away from the dome. Pilgrims leave here the last coin of their old ` +
      `world; the little bowl is full of currencies that no longer buy anything.`);
    room('gate_office', "The Warden's Toll-Office",
      `A cramped booth stacked to the rafters with confiscations: a caged wind, a ` +
      `jar of somebody's name, a sword that weeps. The toll for entry was paid in ` +
      `the crossing, the notice says, and cannot be refunded, because the thing ` +
      `you paid with was your certainty of the way home.`);
    room('gate_wait', 'The Waiting Cloisters',
      `A colonnade around a dry courtyard, where those denied entry and those ` +
      `not yet granted it sit out their days. The benches are worn to the shape ` +
      `of patience. Someone has scratched, over and over into the stone: SOON, ` +
      `SOON, SOON.`);
    room('gate_undercroft', 'The Gate Undercroft',
      `Beneath the Hall of Doors, a vaulted cellar where the machinery of arrival ` +
      `is housed — great brass drums wound with cable, ticking down. This is ` +
      `where the sealed doors are lowered when their travellers are done with ` +
      `them. It smells of grease and endings.`);
    room('gate_ramp', 'The Rising Ramp',
      `A broad ramp of fitted flagstones climbs toward daylight — or what passes ` +
      `for it here: the grey, even, sourceless glow that fills the dome. Your ` +
      `footsteps echo ahead of you, as if the city were repeating your arrival to ` +
      `itself. The great arch waits at the top.`);
    room('gate_arch', 'The Obsidian Arch',
      `The threshold of the city proper: an arch of polished obsidian a hundred ` +
      `feet high, so black it seems less a thing than an absence cut in the shape ` +
      `of a gate. Through it, the Obsidian Concourse runs away north into the ` +
      `heart of Mournfall. Above, for the first time, you see the dome itself — a ` +
      `vast unbroken curve of black glass, and beyond it, nothing at all.`);

    link('gate_arrival', 'n', 'gate_customs');
    link('gate_customs', 'n', 'gate_hall');
    link('gate_customs', 'e', 'gate_office');
    link('gate_customs', 'w', 'gate_shrine');
    link('gate_hall', 'n', 'gate_queue');
    link('gate_hall', 'e', 'gate_wait');
    link('gate_hall', 'd', 'gate_undercroft');
    link('gate_queue', 'n', 'gate_ramp');
    link('gate_ramp', 'n', 'gate_arch');

    /* ================================================================= *
     *  B. THE OBSIDIAN CONCOURSE  (8)
     *  The city's spine: a grand black avenue from the gate to the Crown.
     * ================================================================= */
    room('con_south_end', 'The Lower Concourse',
      `The great avenue begins here in black flagstones veined with silver, wide ` +
      `enough for a legion to march abreast, empty enough that you can hear the ` +
      `dome hum. To the east, a meaner gate leads down toward the Cinder Wards, ` +
      `where the smoke is. The Concourse itself runs on to the north.`);
    room('con_2', 'The Concourse of Black Glass',
      `The avenue widens, its paving so glossy it doubles the grey sky beneath ` +
      `your feet, so that you seem to walk between two identical nothings. Statues ` +
      `of the city's founders line the way, each with its face deliberately, ` +
      `patiently chiselled off. A lamplit walk branches east.`);
    room('con_plaza', 'The Mournfall Plaza',
      `The heart of the city: a vast circular plaza where every road in Mournfall ` +
      `eventually confesses it was going. At its centre stands the Weeping ` +
      `Fountain; around its rim, the districts open like the hours of a clock — ` +
      `the Ashmarket east, the Sepulchre west, the long climb to Highmournt north, ` +
      `and the Lower Concourse back the way you came.`);
    room('con_4', 'The Upper Concourse',
      `The avenue tilts gently upward now, toward the Crown. The buildings to ` +
      `either side grow taller and prouder, their windows glazed with real glass, ` +
      `not the entropy kind — a quiet, brutal way of saying whose district this is ` +
      `becoming. A colonnade opens to the east.`);
    room('con_north_end', 'The Concourse Head',
      `Here the Concourse ends at the foot of a rising terrace of pale stone: the ` +
      `border of Highmournt, the Dome-Crown, where the wealthy live nearest the ` +
      `unbroken glass. The alabaster gate stands open to the north, guarded more ` +
      `by the price of being here than by any warden.`);
    room('con_fountain', 'The Weeping Fountain',
      `A fountain of nine tiers, each carved as a cupped pair of hands passing ` +
      `water down to the next. But no water rises to fill the top; instead the ` +
      `dome itself weeps a slow condensation of cold light that trickles, hand to ` +
      `hand, down to a black basin, and vanishes. The city drinks the sorrow of ` +
      `its own sky.`);
    room('con_gallery', 'The Colonnade of the Lost',
      `A shaded arcade whose columns are hung, top to bottom, with small brass ` +
      `plaques — one for every traveller who arrived in Mournfall and never found ` +
      `a way onward. There is no more room on the columns. The newer plaques are ` +
      `nailed over the old.`);
    room('con_lamps', "The Lamplighter's Walk",
      `A narrow service walk where the city's lamps are trimmed and refuelled. ` +
      `The lamplighters burn no oil — they carry cupped flames from the Traveller's ` +
      `Shrine and coax them, reluctant, into the glass. A lamplighter's ladder ` +
      `leans unused against the wall.`);

    link('gate_arch', 'n', 'con_south_end');
    link('con_south_end', 'n', 'con_2');
    link('con_2', 'n', 'con_plaza');
    link('con_2', 'e', 'con_lamps');
    link('con_plaza', 'n', 'con_4');
    link('con_plaza', 'nw', 'con_fountain');
    link('con_plaza', 'ne', 'con_gallery');
    link('con_4', 'n', 'con_north_end');

    /* ================================================================= *
     *  C. HIGHMOURNT — THE DOME-CROWN  (22)
     *  The wealthy quarter, up the hill, beneath the flawless obsidian.
     * ================================================================= */
    room('high_gate', 'The Alabaster Gate',
      `A gate of white marble, kept so clean it seems to disapprove of you. Beyond ` +
      `it the streets are swept, the air is filtered, and the dome overhead is ` +
      `perfect and whole — not a crack, not a patch, not a single pane of ` +
      `entropy-glass. Here, the rich buy the oldest luxury in Mournfall: an ` +
      `unbroken sky.`);
    room('high_way1', 'The Crownway',
      `The main promenade of Highmournt, paved in white stone flecked with mica so ` +
      `it glitters like a memory of stars — which is the point, for no real stars ` +
      `have ever been seen from here. Manor gates line the east; the hanging ` +
      `gardens spill green over their walls to the west.`);
    room('high_manorgate', 'The Vesperine Manor Gate',
      `Wrought-iron gates worked into the shape of a setting sun, the sigil of ` +
      `House Vesperine — the oldest family in Mournfall, who claim to remember the ` +
      `city's founding and to have arranged it. The gates are open. The Vesperines ` +
      `have not feared a thief in three hundred years.`);
    room('high_foyer', 'The Vesperine Foyer',
      `A hall of hushed grey velvet and portraits whose eyes have been painted ` +
      `closed, every one. A grand stair rises to the solar. The house is warm, ` +
      `and smells faintly of extinguished candles, and is utterly, expensively ` +
      `silent.`);
    room('high_solar', 'The Vesperine Solar',
      `The highest sitting-room of the manor, its windows angled up at the dome so ` +
      `the family may take their tea beneath the flawless glass. On a side table, ` +
      `an orrery turns — but its little worlds all orbit an empty socket where the ` +
      `sun-bead has been removed and, the story goes, never replaced.`);
    room('high_gardens', 'The Hanging Gardens of Mourn',
      `Terraces of impossible green cascade down the manor walls: ferns, ` +
      `night-blooming vines, trees that fruit in the grey half-light. Nothing here ` +
      `is native to the Far-Land. Every seed was carried in by a traveller and ` +
      `never carried out, and so the gardens are, in their way, another kind of ` +
      `refugee.`);
    room('high_conserv', 'The Glassflower Conservatory',
      `Under a vault of the clearest crystal grow the glassflowers — blooms of ` +
      `spun entropy-glass that the Vesperine gardeners cultivate like orchids. ` +
      `They open at no light and close at no dark; they simply, slowly, ring, a ` +
      `sound like distant grief, when someone who is going to die walks past.`);
    room('high_peacock', 'The Peacock Walk',
      `A curving path between clipped hedges where the highborn stroll to be seen. ` +
      `Servants sweep the gravel smooth behind each promenading pair, so that no ` +
      `one need ever see another's footprints, or be reminded that anyone came ` +
      `this way before them.`);
    room('high_square', 'The Argent Square',
      `The social centre of the Crown: a square of silver-grey stone ringed by ` +
      `galleries, libraries, and the discreet luxuries of the rich. A private ` +
      `stair climbs up to the Pale Assembly, where the wardens make the law that ` +
      `the people of this square wrote. Every road here is a good address.`);
    room('high_gallery', 'The Gilt Gallery',
      `A long room of gold-framed paintings, all of them landscapes — mountains, ` +
      `oceans, sunlit fields — none of which exist anywhere the buyers can go. ` +
      `Mournfall's rich collect views. It is the one thing the dome cannot sell ` +
      `them, and so the only thing worth owning.`);
    room('high_court', 'The Court of Pale Roses',
      `A cloistered court where roses the colour of ash climb a trellis of black ` +
      `iron. They have no scent and never wilt, having been bred past the need for ` +
      `either. A chapel door opens to the south.`);
    room('high_chapel', 'The Private Chapel of the Vesperines',
      `A small, cold chapel where the old family keeps its private faith. There is ` +
      `no altar — only a window of clear glass set into the floor, looking down ` +
      `through the terrace and the rock, at nothing, at the Void the whole city ` +
      `floats above. The Vesperines, it seems, worship what is under them.`);
    room('high_market', 'The High Bazaar',
      `Not a market so much as a row of quiet doors, each opening on a single ` +
      `merchant who deals in one perfect thing: one vintage, one perfume, one ` +
      `hour of another person's remembered summer, decanted and sold by the sip. ` +
      `Prices are not displayed. If you must ask, you may not.`);
    room('high_library', 'The Umbral Library',
      `Shelves rise into darkness, holding the books the city would rather forget ` +
      `it owns: founding charters, arrival-ledgers, the true count of the cracks ` +
      `in the dome. A single lamp burns at a reading desk. The librarian is not ` +
      `here, but her spectacles lie folded on an open page, still warm.`);
    room('high_way2', 'The Upper Crownway',
      `The promenade climbs on toward the highest point in the city. The manors ` +
      `give way to institutions — the baths, the astronomers, the terraces from ` +
      `which the wealthy watch the lower city smoke. The obsidian baths steam ` +
      `gently to the east.`);
    room('high_baths', 'The Obsidian Baths',
      `Pools of black water sunk into black stone, heated by no fire anyone will ` +
      `name. The bathers lie very still, half-submerged, their eyes closed, ` +
      `letting the warmth persuade them for an hour that they are somewhere with a ` +
      `sun. Attendants move among them, silent as steam.`);
    room('high_way3', 'The Crownway Head',
      `The top of the promenade, a windless height where the dome comes down close ` +
      `enough to touch — and people do touch it, leaving the glass smudged with ` +
      `the oil of a thousand fingertips, as if to reassure themselves it is still ` +
      `there. The Starless Spire rises to the north.`);
    room('high_terrace', 'The Domewatch Terrace',
      `A balustraded terrace built for one purpose: to look out and down over all ` +
      `of Mournfall — the Concourse, the market smoke, the patched and glittering ` +
      `wound of the Cinder Wards far below. From up here, in the even grey light, ` +
      `the broken quarter almost looks like it is set with jewels.`);
    room('high_overlook', 'The Highmournt Overlook',
      `A quieter vantage, half-forgotten, where the balustrade has gone unswept. ` +
      `Someone has been coming here to sit alone: a cold cup, a folded coat, and a ` +
      `long telescope aimed not down at the city but up, and outward, through the ` +
      `dome, at the dark that has no stars to find.`);
    room('high_spirefoot', 'The Foot of the Starless Spire',
      `The base of a slender black tower, the tallest structure in the city, home ` +
      `to Mournfall's astronomers — who study a sky that has never held a light. ` +
      `A spiral stair climbs into the dark. The stair-rail is worn smooth by hands ` +
      `going up hopeful and coming down otherwise.`);
    room('high_ascent', "The Astronomer's Ascent",
      `Halfway up the spire, the stair passes a landing crowded with abandoned ` +
      `instruments — astrolabes for stars that never rose, charts of a firmament ` +
      `left blank, a great brass telescope turned uselessly against the inside of ` +
      `the dome. The astronomers keep climbing anyway. It is a kind of faith.`);
    room('high_oculus', 'The Oculus',
      `The top of the Starless Spire, a glass cupola pressed right against the ` +
      `dome's apex. Here the obsidian thins to near-transparency, and you can see ` +
      `it at last, plainly: the Void. Not black — black is a colour. This is the ` +
      `place where colour, and distance, and the very idea of "out there" simply ` +
      `stop. The astronomers watch it in shifts, so that it is never, ever ` +
      `watched by no one.`);

    link('con_north_end', 'n', 'high_gate');
    link('high_gate', 'n', 'high_way1');
    link('high_way1', 'n', 'high_square');
    link('high_way1', 'e', 'high_manorgate');
    link('high_way1', 'w', 'high_gardens');
    link('high_manorgate', 'n', 'high_foyer');
    link('high_foyer', 'n', 'high_solar');
    link('high_gardens', 'w', 'high_conserv');
    link('high_gardens', 's', 'high_peacock');
    link('high_square', 'n', 'high_way2');
    link('high_square', 'e', 'high_gallery');
    link('high_square', 'w', 'high_court');
    link('high_square', 'ne', 'high_market');
    link('high_square', 'nw', 'high_library');
    link('high_court', 's', 'high_chapel');
    link('high_way2', 'n', 'high_way3');
    link('high_way2', 'e', 'high_baths');
    link('high_way3', 'n', 'high_spirefoot');
    link('high_way3', 'e', 'high_terrace');
    link('high_way3', 'w', 'high_overlook');
    link('high_spirefoot', 'u', 'high_ascent');
    link('high_ascent', 'u', 'high_oculus');

    /* ================================================================= *
     *  D. THE ASHMARKET  (20)
     *  The great bazaar, where the between-worlds trade is done.
     * ================================================================= */
    room('ash_gate', 'The Ashmarket Gate',
      `A gate of grey timber, greasy with the smoke of ten thousand cook-fires, ` +
      `hung with the severed sign-boards of failed stalls as a warning to the ` +
      `hopeful. Beyond, a wall of noise: the Ashmarket, where anything that has ` +
      `ever been carried between worlds is, sooner or later, for sale.`);
    room('ash_row1', "Cindermonger's Row",
      `The first row of the market, dense with braziers and the folk who sell ` +
      `their coals — for fire is precious in a city with no sun and no forests, ` +
      `and a merchant's whole fortune may be a barrow of good hot embers. Spice ` +
      `tiers rise to the north; the rag-and-bolt sprawls south.`);
    room('ash_spice', 'The Spice Tiers',
      `Stepped shelves of open sacks climb overhead, and the air is a wall of ` +
      `scent: peppers from a world of red deserts, salt from a drowned one, and ` +
      `the grey ash-spice of the Far-Land itself, which tastes of nothing and is ` +
      `sprinkled on everything, so the eater may pretend the flavour was stolen ` +
      `by grief.`);
    room('ash_cloth', 'The Rag-and-Bolt',
      `Bolts of cloth and heaps of secondhand clothes, sorted less by size than by ` +
      `the world they came from. The clothiers can read a stranger's origin from ` +
      `their hem in a heartbeat, and price accordingly. Nothing here was woven in ` +
      `Mournfall. Nothing here can be worn home.`);
    room('ash_beggar', "Beggar's Corner",
      `A sheltered nook where the market's beggars work the crowd with practised ` +
      `patter, each with a story sadder and less true than the last. They are ` +
      `licensed, taxed, and organised — the Ashmarket permits nothing so ` +
      `disorderly as free charity — and they part a stranger from their coin as ` +
      `neatly as any stallholder, and with better manners.`);
    room('ash_cross', 'The Ashmarket Cross',
      `The crossroads at the market's heart, where four aisles meet under a ` +
      `tattered canopy of stitched-together sails. A crier stands on a barrel ` +
      `shouting the day's prices, the day's rumours, and the day's dead, in that ` +
      `order, for the same coin. Ways run off in every direction.`);
    room('ash_meat', 'The Shambles',
      `The meat-market, though what hangs here on the hooks came from no farm you ` +
      `would recognise. Pale things, finned things, a haunch that still faintly ` +
      `glows. The butchers wear masks, and do not answer questions about ` +
      `provenance. In Mournfall, one learns not to ask what one is eating, only ` +
      `whether it is fresh.`);
    room('ash_charm', 'The Charm-Warren',
      `A cramped burrow of stalls selling luck, protection, and lies: nails from ` +
      `the dome, splinters of true doors, vials of a traveller's last certain ` +
      `memory of home. Most are frauds. A few are not, and those are the ones you ` +
      `should be most afraid to buy.`);
    room('ash_smith', 'The Cinder-Forge Lane',
      `A lane of small forges, their fires begged and bought at ruinous cost, ` +
      `where smiths work metal that came from broken worlds — steel that hums, ` +
      `iron that remembers being a plough. The hammering never stops. It is the ` +
      `nearest thing Mournfall has to a heartbeat.`);
    room('ash_scriv', "The Scrivener's Nook",
      `A quiet corner of ink and patience, where scriveners write the letters no ` +
      `one can deliver: to mothers in vanished countries, to selves who stayed ` +
      `behind. The letters are filed, not sent. The scriveners charge for the ` +
      `writing, and let the customer believe the rest.`);
    room('ash_well', 'The Ashwell',
      `A public well ringed with worn stone, though it draws no water — it draws ` +
      `the dome's weeping, funnelled down through pipes from the Concourse ` +
      `fountain. The queue here is long and silent. A cup of city-water costs a ` +
      `coin, and tastes, everyone agrees, of somebody else's tears.`);
    room('ash_auction', 'The Auction Block',
      `A raised platform of black wood, gavel-scarred, where the market sells its ` +
      `rarest lots: a caged birdsong, a working compass (useless here, and thus ` +
      `priceless), the deed to a house in a city that no longer exists. The ` +
      `auctioneer takes bids in coin, in years, and in secrets.`);
    room('ash_row2', "Farlander's Row",
      `The far aisle, where the strangest goods drift in — the wares of travellers ` +
      `so lately arrived they still expect to leave, selling off their world's ` +
      `treasures for a fraction of nothing. The prices are heartbreaking. The ` +
      `regulars call it the Row of Bad Bargains, and shop there gleefully.`);
    room('ash_exotic', 'The Between-Worlds Stalls',
      `Stalls of the genuinely impossible: a bottled thunderstorm, a coin that ` +
      `always comes up heads for the honest, a mirror that shows the room you'd be ` +
      `in if you'd made one different choice. Browsing is free. The looking, ` +
      `sometimes, is the whole price.`);
    room('ash_food', 'The Ember Kitchens',
      `A tight run of cook-stalls and standing counters, all steam and sizzle and ` +
      `argument. Here the ash-spice is not a garnish but a religion, and every ` +
      `broth is a small defiance: a bowl of warmth, in the cold at the end of ` +
      `everything. A sable teahouse curtains itself off to the east.`);
    room('ash_teahouse', 'The Sable Teahouse',
      `Behind heavy black drapes, a hush of low tables and lower voices, where the ` +
      `market's business is truly done — over tea so dark it seems poured from the ` +
      `dome itself. Deals, marriages, and murders are all arranged here in the ` +
      `same murmur, and sealed the same way: by drinking, and saying nothing.`);
    room('ash_alley', "Thief's Slip",
      `A crooked gap between stalls, barely a shoulder wide, where the market's ` +
      `cutpurses vanish and its stolen goods reappear a little later, a little ` +
      `cheaper. The walls are greasy with the passage of quick bodies. It is not, ` +
      `strictly, a road. It is more of an argument the buildings are having.`);
    room('ash_end', 'The Far End of the Market',
      `The bazaar thins out into hard-packed dirt and the smell of pack-beasts. ` +
      `This is where caravans form and dissolve — though no caravan in Mournfall ` +
      `goes anywhere but around the ring of the dome and back. To the south, the ` +
      `Guttering Rows begin; to the north, the caravanserai.`);
    room('ash_caravan', 'The Caravanserai',
      `A great yard for loading and lodging, ringed with stables for beasts that ` +
      `came from a hundred worlds and will die in this one. Drovers sleep in the ` +
      `straw with one hand on their goods. They speak of the road as if it led ` +
      `somewhere. It is a comfortable thing to pretend.`);
    room('ash_shrine', "The Merchant's Shrine to the Ledger",
      `A little shrine where the market prays — not to a god, but to a great chained ` +
      `Ledger, its pages the tally of every debt in Mournfall. The devout come to ` +
      `add a coin and read their balance. The Ledger, they believe, is the only ` +
      `thing in the city that keeps a perfectly honest account of the ending.`);

    link('con_plaza', 'e', 'ash_gate');
    link('ash_gate', 'e', 'ash_row1');
    link('ash_row1', 'e', 'ash_cross');
    link('ash_row1', 'n', 'ash_spice');
    link('ash_row1', 's', 'ash_cloth');
    link('ash_row1', 'nw', 'ash_beggar');
    link('ash_cross', 'e', 'ash_row2');
    link('ash_cross', 'n', 'ash_meat');
    link('ash_cross', 's', 'ash_charm');
    link('ash_cross', 'ne', 'ash_smith');
    link('ash_cross', 'se', 'ash_scriv');
    link('ash_cross', 'sw', 'ash_well');
    link('ash_cross', 'nw', 'ash_auction');
    link('ash_row2', 'n', 'ash_exotic');
    link('ash_row2', 's', 'ash_food');
    link('ash_row2', 'se', 'ash_alley');
    link('ash_food', 'e', 'ash_teahouse');
    link('ash_row2', 'e', 'ash_end');
    link('ash_end', 'n', 'ash_caravan');
    link('ash_end', 'se', 'ash_shrine');

    /* ================================================================= *
     *  E. THE CINDER WARDS  (26)
     *  The slums, under the broken dome patched with entropy-glass.
     * ================================================================= */
    room('cin_gate', 'The Cinder Gate',
      `The gate down into the poor quarter is no gate at all now, just the stubs of ` +
      `one, the ironwork long since sold. The light changes as you pass under it — ` +
      `warmer, wronger — because here the dome is broken, and mended in patches of ` +
      `entropy-glass that stain the grey day the colour of a bruise. A watch-post ` +
      `slumps to the east.`);
    room('cin_high', 'Cinderway',
      `The main street of the Wards, if street is the word for this trampled runnel ` +
      `of ash and slush between leaning houses. Overhead the dome is a crazy quilt ` +
      `of black glass and glowing entropy-patch, and where the patches meet the ` +
      `old obsidian, thin cold draughts of Void-air sigh down into the street. The ` +
      `people here have learned not to look up.`);
    room('cin_smoke', 'Smokestack Lane',
      `A lane throttled with the smoke of a hundred illegal stoves, where the poor ` +
      `burn what they can — rags, bones, letters, the legs of chairs — because the ` +
      `Ashmarket's coals are for people with coin. The smoke has nowhere to go. It ` +
      `pools against the patched dome and comes back down as a black, greasy ` +
      `snow.`);
    room('cin_tenement1', 'The Leaning Tenements',
      `Houses of scavenged brick and driftwood lean over the lane until their ` +
      `upper storeys nearly kiss, blotting out the sick light. They are stacked ` +
      `six families deep and climbing. A ladder-stair scales the outside to the ` +
      `rookery above.`);
    room('cin_tenement2', 'The Rookery',
      `The top of the tenements, a warren of lofts and lean-tos built right up ` +
      `against a great scabbed patch of entropy-glass. The children born up here ` +
      `have never known dark, for the patch glows all night — a soft, sourceless, ` +
      `dying light that the mothers say ages a baby's eyes before its first ` +
      `year.`);
    room('cin_cross', 'The Broken Cross',
      `The crossroads of the Wards, beneath the largest patch of all — a whole ` +
      `pane of the dome gone, and filled with a slab of entropy-glass the size of ` +
      `a cathedral roof. It hums. It leaks a light like a held breath. Everyone ` +
      `who lives here has, at least once, stood beneath it and wondered how long ` +
      `the patch will hold.`);
    room('cin_glassward', 'The Entropy-Glass Ward',
      `The place the patchers work: a yard of racks and cooling-frames where raw ` +
      `entropy-glass is poured, shaped, and hauled up to seal the sky. The stuff ` +
      `is a paradox made solid — glass spun from the very Void it holds back, so ` +
      `that the cure and the disease are the same substance. The glaziers wear ` +
      `blindfolds. They work, they say, better by touch, and live longer for not ` +
      `seeing what they pour.`);
    room('cin_gutter', 'The Runnel',
      `A sunken channel meant to carry off the city's weeping-water, long since ` +
      `clogged into a standing sink of grey filth. Children fish it for dropped ` +
      `coins and worse. A blind alley, the Weeping Wynd, kinks away to the west.`);
    room('cin_pyre', 'The Common Pyre',
      `A perpetual fire in a great iron cradle, where the Wards burn their dead — ` +
      `for the ground here is only a crust over the Void, and cannot be dug for ` +
      `graves. The pyre-keeper feeds it day and night. The smoke goes up, meets ` +
      `the dome, and comes back down as ash, and so the dead of Mournfall never ` +
      `entirely leave.`);
    room('cin_still', 'The Rotgut Still',
      `A shack of tarred boards from which a copper still emits a smell that could ` +
      `strip a name. Here they brew "voidwater" — a spirit distilled, allegedly, ` +
      `from the condensation off the entropy-patches. It is almost certainly ` +
      `poison. It is certainly the cheapest way to be warm in the Wards, and the ` +
      `queue is never short.`);
    room('cin_apoth', "The Bonesetter's Door",
      `A low door marked with a hand-print in dried blood, past which a bonesetter ` +
      `plies a brisk trade in the Wards' endless small catastrophes. She takes ` +
      `payment in kind and asks no questions, and keeps, on a high shelf, a row of ` +
      `jars holding the things she has pulled out of people who stood too long ` +
      `under a failing patch.`);
    room('cin_shrine', 'The Shrine of Broken Glass',
      `The Wards keep their own faith here, in a shrine built entirely of dome- ` +
      `shards: a jagged grotto of black glass and glowing entropy, sharp as a ` +
      `mouth. The poor pray not for salvation but for the patches to hold one more ` +
      `night. Their prayers are scratched into the glass with fingernails. Some ` +
      `are answered. That is the terrifying part.`);
    room('cin_low', 'Lower Cinderway',
      `The street slumps downhill toward the dome's very rim, and the patches grow ` +
      `denser, the obsidian scarcer, until you seem to walk beneath a ceiling of ` +
      `frozen twilight. A road bends west toward the Voidquays; a stair drops ` +
      `into the dark of the Undermourn; the scrap-market clatters to the east.`);
    room('cin_market', 'The Scrap Market',
      `Not a market of goods but of pieces — a flat of blankets on the mud, each ` +
      `spread with the disassembled remains of better days: single boots, bent ` +
      `nails, a doll's head, a key to a lock in another world. Everything has a ` +
      `price. Nothing has a use. It is the purest economy in the city.`);
    room('cin_court', "The Beggar-King's Court",
      `A wide sunken yard, once a cistern, now the throne-room of the Wards' own ` +
      `crooked sovereign. Ragged folk cluster around a seat of piled scrap, atop ` +
      `which sits whoever is currently the Beggar-King — a title held for exactly ` +
      `as long as one can hold it. He taxes the beggars, protects the beggars, and ` +
      `hangs the beggars, and is, all told, a fairer ruler than the Crown.`);
    room('cin_well', 'The Foul Well',
      `A well gone bad, its water shot through with threads of entropy-light that ` +
      `curl in the bucket like living things. The Ward-folk are forbidden to drink ` +
      `it and drink it anyway, when the Ashwell's queue is too long and the ` +
      `children are crying. It is said to grant strange dreams. It is known to ` +
      `grant strange deaths.`);
    room('cin_gate2', 'The Guttergate',
      `A crumbled arch marking the boundary between the Cinder Wards and the ` +
      `slightly-less-desperate Guttering Rows above. The distinction matters ` +
      `enormously to the people on either side of it, and not at all to anyone ` +
      `looking down from the Crown. The Rows lie up and to the north.`);
    room('cin_watch', 'The Slumwatch Post',
      `A fortified box where the city's wardens keep their reluctant eye on the ` +
      `Wards — from inside, with the door barred. They do not patrol here after ` +
      `the light thickens. Their duty, as they understand it, is not to protect ` +
      `the Wards but to make sure whatever is wrong with the Wards stays in the ` +
      `Wards.`);
    room('cin_alley1', 'Ashcat Alley',
      `A dead-end crook of a lane, home to the ash-cats — lean, soot-grey, ` +
      `six-toed things that the Ward-folk neither own nor feed but would never ` +
      `harm, for the cats hunt the other things that come down through the failing ` +
      `patches at night. A dozen eyes watch you from the dark. None of them ` +
      `blink.`);
    room('cin_alley2', 'The Weeping Wynd',
      `A cramped, perpetually damp alley where the dome's condensation runs down ` +
      `the walls in cold rivulets and never dries. Moss grows here — real, green, ` +
      `stubborn moss, the only wild living thing for miles — and the Ward-children ` +
      `come to press their faces against it and remember, or invent, a world with ` +
      `grass.`);
    room('cin_orphan', 'The Ember Orphanage',
      `A tall, cold house crammed with the children the city could not account ` +
      `for — the lost of lost travellers, born between worlds and belonging to ` +
      `none. The matron keeps a single stove burning and teaches them the one ` +
      `lesson Mournfall has: that the way out is a story, and stories are still ` +
      `worth telling.`);
    room('cin_doss', 'The Dosshouse',
      `A long shed of rope-beds rented by the half-night, where those with a coin ` +
      `but no roof sleep in shifts, back to back, breath to breath. A lantern of ` +
      `entropy-glass hangs from the ridgepole, and by its dying light you can see ` +
      `that every sleeper faces the same way — inward, away from the walls, away ` +
      `from the dome.`);
    room('cin_forge', "The Tinker's Bellows",
      `A back-alley smithy where a tinker mends the unmendable for the folk who ` +
      `cannot afford the Ashmarket forges. Her fire is a single precious coal, ` +
      `kept alive for years, passed to her by her mother, who had it from hers. ` +
      `To let it die, here, would be a kind of murder.`);
    room('cin_edge', 'The Cinder Verge',
      `The street simply ends: the flagstones crack, tilt, and give way to a ` +
      `railing of scavenged iron, beyond which is the great wound of the quarter. ` +
      `The air here tastes of the outside — of nothing, of the space where taste ` +
      `has not been invented. A foul well festers to the east.`);
    room('cin_breach', 'The Great Breach',
      `Here the dome is simply gone. A hole the size of a market-square, where ` +
      `whole panes of obsidian fell away in some long-ago calamity, patched now ` +
      `with a single vast sheet of entropy-glass slung across the gap on chains of ` +
      `cooling iron. Through it, close enough to touch, is the Void — and the glass ` +
      `between you and the end of everything is thin, and warm, and ringing very ` +
      `softly, like a wineglass a moment before it breaks.`);

    link('con_south_end', 'e', 'cin_gate');
    link('cin_gate', 's', 'cin_high');
    link('cin_gate', 'e', 'cin_watch');
    link('cin_high', 's', 'cin_cross');
    link('cin_high', 'e', 'cin_tenement1');
    link('cin_high', 'w', 'cin_smoke');
    link('cin_high', 'se', 'cin_alley1');
    link('cin_tenement1', 'u', 'cin_tenement2');
    link('cin_tenement1', 'n', 'cin_orphan');
    link('cin_smoke', 'w', 'cin_forge');
    link('cin_cross', 's', 'cin_low');
    link('cin_cross', 'e', 'cin_glassward');
    link('cin_cross', 'w', 'cin_gutter');
    link('cin_cross', 'se', 'cin_pyre');
    link('cin_cross', 'sw', 'cin_still');
    link('cin_cross', 'ne', 'cin_apoth');
    link('cin_cross', 'nw', 'cin_shrine');
    link('cin_gutter', 'w', 'cin_alley2');
    link('cin_low', 's', 'cin_edge');
    link('cin_low', 'e', 'cin_market');
    link('cin_low', 'w', 'cin_quayroad');
    link('cin_low', 'se', 'cin_doss');
    link('cin_low', 'd', 'under_stair1');
    link('cin_market', 'e', 'cin_court');
    link('cin_court', 'n', 'cin_gate2');
    link('cin_edge', 's', 'cin_breach');
    link('cin_edge', 'e', 'cin_well');

    /* ================================================================= *
     *  F. THE VOIDQUAYS  (16)
     *  Moorings at the rim of the dome, where the voidships put in.
     * ================================================================= */
    room('cin_quayroad', 'The Quay Road',
      `A causeway of black stone running out to the dome's very edge, slick with ` +
      `the cold sweat of the glass. The buildings here turn their backs on the ` +
      `Void and huddle toward the city. Ahead, the quaygate and the moorings; ` +
      `behind, the Cinder Wards you came from.`);
    room('quay_gate', 'The Quaygate',
      `The gate to the Voidquays, its lintel carved with the names of ships that ` +
      `went out and did not come back — which is all of them, eventually. A ` +
      `harbour-bell hangs here, rung not to welcome ships in but to count them ` +
      `out. Warehouses loom north; a tavern leaks light and noise to the south.`);
    room('quay_esplanade', 'The Rimwalk',
      `A broad promenade along the inside of the dome, where the glass curves down ` +
      `to meet the stone and the Void presses close against it, an arm's length ` +
      `away, forever. People walk here at dusk — the Wards' one free pleasure — to ` +
      `stroll beside the end of everything and feel, by contrast, briefly alive.`);
    room('quay_pier1', 'The North Mooring',
      `A pier of iron thrust out through a valved gap in the dome, where a voidship ` +
      `lies moored: a lightless hull rigged with sails of stretched entropy-glass ` +
      `that catch not wind but the slow tide of nothing. Stevedores unload crates ` +
      `of salvage hauled from the drifting wrecks of other cities that fell before ` +
      `Mournfall.`);
    room('quay_pier2', 'The South Mooring',
      `A quieter pier, its berth empty, the mooring-rings furred with cold. A ` +
      `single old voidsailor sits at the end of it, legs over the edge above the ` +
      `Void, mending a net that could catch nothing, waiting for a ship that ` +
      `everyone but he knows is not coming back.`);
    room('quay_deep', 'The Deep Mooring',
      `The lowest berth, where the dome dips nearest the Void and the entropy-glass ` +
      `is so thin it is nearly not there. This is where the boldest — or the most ` +
      `desperate — captains dock, to trade with things that come to the glass from ` +
      `the outside. The port-wardens do not come down here. Nobody makes them.`);
    room('quay_hulk', 'The Beached Hulk',
      `A dead voidship dragged up onto the stone and given over to the living: its ` +
      `hull sawn into rooms, its hold a chapel, its crow's nest a widow's watch. ` +
      `Whole families are born and die aboard a ship that will never sail again, ` +
      `and speak, without irony, of "the voyage."`);
    room('quay_customs', 'The Harbour Wardenage',
      `The port authority, a squat blockhouse where cargo is tallied and crews are ` +
      `counted in and out — always fewer out than in. The wardens here keep a ` +
      `second, private ledger of the things that have tried to come in through the ` +
      `moorings wearing the faces of drowned sailors. It is a longer book than ` +
      `they would like.`);
    room('quay_lighthouse', 'The Dark Pharos',
      `A lighthouse that shines, impossibly, outward — a beam of gathered ` +
      `lamp-flame flung through the dome and into the Void, not to warn ships off ` +
      `the rocks (there are no rocks) but to give returning captains a single ` +
      `point of "here" to steer for in a place with no directions. A stair winds ` +
      `up to the lamp.`);
    room('quay_lamp', 'The Pharos Lamp-Room',
      `The top of the lighthouse, a glass room around a single great flame — the ` +
      `oldest continuous fire in Mournfall, older than the dome's first crack, ` +
      `fed hand to hand across generations of keepers. Through the outward glass ` +
      `you watch the beam plunge into the Void and simply... stop, swallowed, ` +
      `giving no light back. The keepers tend it anyway. Someone might be out ` +
      `there. Someone might be steering home.`);
    room('quay_warehouse', 'The Bonded Warehouses',
      `Long cold sheds of salvage: the plundered goods of dead worlds, stacked to ` +
      `the rafters and taxed to the hilt. Crates stencilled in the scripts of ` +
      `civilisations that no longer have anyone to read them. A whole aisle is ` +
      `just doors, salvaged doors, hundreds of them, opening on nothing, bound ` +
      `for the Hall at the gate.`);
    room('quay_drydock', 'The Drydock',
      `A cradle of black timber where a voidship is under repair, its hull ` +
      `stripped to the ribs. The shipwrights caulk the seams not with tar but with ` +
      `entropy-glass, melted and troweled hot, so that the ships that sail the ` +
      `Void are patched with the very same substance as the sky that keeps the ` +
      `Void out. Nobody finds this reassuring.`);
    room('quay_ropewalk', 'The Ropewalk',
      `A long, narrow shed where the quay's rope is laid — not hemp, for nothing ` +
      `grows here, but spun from the hair of the dead, collected at the Common ` +
      `Pyre and twisted into cable said never to fray. A voidship rigged with ` +
      `Mournfall rope, the sailors say, is crewed by everyone who ever died ` +
      `waiting to leave.`);
    room('quay_chandler', "The Void-Chandler's",
      `A chandlery stocked for voyages into nothing: sealed air in leather ` +
      `bladders, jars of "here" (dirt from the city, to remind a crew what ground ` +
      `is), and the little lead weights sailors swallow before sailing, so the ` +
      `Void cannot convince their bodies they have no down.`);
    room('quay_shrine', 'The Shrine of Safe Return',
      `A shrine hung so thick with offerings — carved ships, locks of hair, ` +
      `wedding rings — that the idol beneath them cannot be seen. It is the ` +
      `busiest shrine in Mournfall and the least answered. Everyone here has ` +
      `someone out in the Void. Nobody here has had them come back.`);
    room('quay_market', 'The Fishless Market',
      `A market square where a fish-market ought to be, and is not, for the Void ` +
      `holds no fish, no water, no anything to catch. Instead the quay-folk sell ` +
      `what the moorings bring: salvage, rumour, and "sky-catch" — the strange ` +
      `cold things that sometimes drift up against the entropy-glass from outside ` +
      `and are, very carefully, harvested.`);

    link('cin_quayroad', 'w', 'quay_gate');
    link('quay_gate', 'w', 'quay_esplanade');
    link('quay_gate', 'n', 'quay_warehouse');
    link('quay_gate', 's', 'quay_tavern');
    link('quay_esplanade', 'n', 'quay_pier1');
    link('quay_esplanade', 's', 'quay_pier2');
    link('quay_esplanade', 'w', 'quay_customs');
    link('quay_esplanade', 'nw', 'quay_market');
    link('quay_pier1', 'n', 'quay_ropewalk');
    link('quay_pier2', 's', 'quay_deep');
    link('quay_pier2', 'e', 'quay_hulk');
    link('quay_customs', 'w', 'quay_lighthouse');
    link('quay_customs', 's', 'quay_chandler');
    link('quay_lighthouse', 'u', 'quay_lamp');
    link('quay_warehouse', 'n', 'quay_shrine');
    link('quay_warehouse', 'e', 'quay_drydock');

    // The quay tavern (declared here so the gate's south link resolves).
    room('quay_tavern', 'The Drowned Star',
      `The last tavern before the end of the world, and it knows it. Voidsailors, ` +
      `stevedores, and the merely hopeless drink here beneath a ceiling painted ` +
      `with a night sky none of them has ever seen. The landlord keeps a lamp lit ` +
      `in the window for every ship still out. Tonight there are more lamps than ` +
      `there is room, and the whole place burns like a small, defiant star.`);

    /* ================================================================= *
     *  G. THE SEPULCHRE DISTRICT  (16)
     *  The temples, where a city at the end of everything keeps its faiths.
     * ================================================================= */
    room('sep_gate', 'The Lychgate',
      `A roofed gate of grey stone, the traditional pause between the city of the ` +
      `living and the district of the last things. Bells hang silent overhead, ` +
      `rung only for the dead. The Procession Way leads west into a hush that ` +
      `the market's noise cannot follow.`);
    room('sep_way', 'The Procession Way',
      `A wide, slow avenue meant for funerals, worn in two ruts by the wheels of ` +
      `ten thousand biers. Cypress-shaped pillars of black iron line it, since no ` +
      `cypress will grow. The Cathedral of Last Light rises to the north; a ` +
      `smaller chapel keeps its own strange hours to the south.`);
    room('sep_temple1', 'The Cathedral of Last Light',
      `The great temple of Mournfall's chief faith — the worship of the End not as ` +
      `a terror but as the one certainty, the only promise the universe has ever ` +
      `kept. Its spire is tipped with a shard of the dome, so that the building ` +
      `points at the Void and calls it God. The nave opens ahead; a belfry climbs ` +
      `above.`);
    room('sep_nave', 'The Nave of Ashes',
      `A vast, cold nave whose floor is not stone but packed grey ash — the mingled ` +
      `remains of every worshipper who chose to be scattered here, walked upon by ` +
      `the living as a sacrament of humility. The congregation kneels in it. The ` +
      `altar of the Long Dark waits to the north; a reliquary and a crypt-stair ` +
      `flank the aisle.`);
    room('sep_altar', 'The Altar of the Long Dark',
      `The high altar is a slab of unpolished obsidian with nothing upon it — no ` +
      `idol, no candle, no cloth. The priests teach that the End needs no ` +
      `image, for it is the one thing every eye will see. Above it, a window of ` +
      `perfectly clear glass frames a circle of pure Void, and the faithful gaze ` +
      `into it until they weep, or smile, or both.`);
    room('sep_reliquary', 'The Reliquary of Endings',
      `A treasury of last things, kept in cases of entropy-glass: the final breath ` +
      `of the first Warden, sealed in a vial; the last page of a world's last ` +
      `book; a clock that stopped at the exact instant its city died. The ` +
      `reliquary's holiest relic is an empty case, labelled only: YOURS, IN TIME.`);
    room('sep_crypt', 'The Crypt Stair',
      `A wide stair spiralling down into cold and dark, the mouth of the ` +
      `catacombs that undermine the whole district. Grief-worn and torch-lit, it ` +
      `descends toward the Undermourn, where the true dead of Mournfall are laid ` +
      `in their thousands, tier upon tier.`);
    room('sep_bell', 'The Belfry of Mourning',
      `The bell-chamber atop the cathedral, hung with a single vast bell cast from ` +
      `the melted-down keepsakes of the bereaved — rings, lockets, coins — so that ` +
      `when it tolls for the dead, it tolls in the voice of everything the living ` +
      `gave up. It is ringing, very faintly, now. It is always ringing. Someone in ` +
      `Mournfall is always dying.`);
    room('sep_temple2', 'The Chapel of the Turning',
      `A round chapel of the rival faith — the Turners, who hold that the End is ` +
      `not an end but a wheel, that the Void is a womb, that everything that falls ` +
      `out of the dome falls, eventually, back in somewhere else. The two temples ` +
      `have not spoken in a century. Both may be right. Neither can be proven ` +
      `until it is too late to say so.`);
    room('sep_ossuary', 'The Ossuary Walk',
      `A colonnade whose every surface is bones, arranged with terrible artistry — ` +
      `arches of femurs, rosettes of knucklebone, a chandelier of jaws. The ` +
      `Turners built it not as a memento of death but as a promise: here are the ` +
      `pieces, it says, waiting to be turned again into something.`);
    room('sep_close', 'The Cloister Close',
      `A quiet green — or grey — quadrangle enclosed by the district's lesser ` +
      `houses: the scriptorium, the almshouse, the garden of the grey sisters. ` +
      `A well of clear weeping-water stands at the centre, the only water in ` +
      `Mournfall the priests will swear is clean.`);
    room('sep_garden', 'The Garden of Sere',
      `A garden cultivated to perfect death: beds of dried flowers, gravel raked ` +
      `into the patterns of frost, a single tree of black iron whose "leaves" are ` +
      `the name-tags of the mourned. The grey sisters tend it daily, pruning what ` +
      `does not wither fast enough. It is, in its awful way, beautiful.`);
    room('sep_charnel', 'The Charnel House',
      `A cold hall where the newly dead are washed and wrapped before the pyre or ` +
      `the crypt. The washers work in silence, with great tenderness, and speak to ` +
      `the dead as they work — telling them the small news of the city, so that no ` +
      `one crosses over feeling they left in the middle of the story.`);
    room('sep_scriptorium', 'The Scriptorium of the End',
      `A hall of desks where the End-priests copy and recopy the one book of their ` +
      `faith: the Necrologue, the running record of everything that has ended, ` +
      `which can never be finished because the world keeps ending more. The scribes ` +
      `race extinction with a quill. They are, so far, losing gracefully.`);
    room('sep_almshouse', 'The Almshouse of Grey Sisters',
      `A refuge run by the grey sisters for those the city has finished with — the ` +
      `dying, the mad, the ones who arrived and simply gave up. The sisters ask ` +
      `nothing, promise nothing, and stay. In a city built on the certainty of the ` +
      `End, theirs is the quiet heresy of tending the middle.`);
    room('sep_font', 'The Font of Cinders',
      `A baptismal font filled not with water but with fine grey ash, in which the ` +
      `End-faithful anoint their newborns — a thumbprint of cinder on the brow, to ` +
      `mark that this new life, too, is on loan. The parents weep. The priests ` +
      `smile. In Mournfall these are not opposite things.`);

    link('con_plaza', 'w', 'sep_gate');
    link('sep_gate', 'w', 'sep_way');
    link('sep_way', 'w', 'sep_close');
    link('sep_way', 'n', 'sep_temple1');
    link('sep_way', 's', 'sep_temple2');
    link('sep_way', 'nw', 'sep_font');
    link('sep_temple1', 'n', 'sep_nave');
    link('sep_temple1', 'u', 'sep_bell');
    link('sep_nave', 'n', 'sep_altar');
    link('sep_nave', 'e', 'sep_reliquary');
    link('sep_nave', 'w', 'sep_crypt');
    link('sep_temple2', 's', 'sep_ossuary');
    link('sep_close', 'w', 'sep_garden');
    link('sep_close', 's', 'sep_charnel');
    link('sep_close', 'n', 'sep_scriptorium');
    link('sep_close', 'nw', 'sep_almshouse');

    /* ================================================================= *
     *  H. THE PALE ASSEMBLY  (12)
     *  The seat of the wardens, above Highmournt, who keep the dome and law.
     * ================================================================= */
    room('pale_gate', 'The Pale Gate',
      `A gate of bleached bone-white stone at the top of the city, where the ` +
      `wardens rule. There are no guards — only a line painted on the threshold, ` +
      `and the understanding, bred into every citizen, of what happens to those ` +
      `who cross it uninvited. You cross it. The Assembly Court opens beyond.`);
    room('pale_court', 'The Assembly Court',
      `A severe courtyard of white flags and black pillars, where petitioners wait ` +
      `and wardens pass without meeting their eyes. Everything here is designed to ` +
      `make a citizen feel small and the law feel large. It works. The Hall of ` +
      `Wardens looms to the north.`);
    room('pale_hall', 'The Hall of Wardens',
      `A great cold chamber ringed with tiered seats of black stone, where the ` +
      `wardens of Mournfall convene to govern the ungovernable: how to ration ` +
      `fire, whom to let in, which cracks in the dome to fix and which to let go. ` +
      `Above, a private watch; ahead, the dais where sentence is passed.`);
    room('pale_dais', 'The Obsidian Dais',
      `A raised platform of black glass at the hall's head, from which the ` +
      `First Warden speaks. It is angled, cunningly, so that anyone standing on it ` +
      `is reflected upside-down in the floor below — a reminder, the wardens say, ` +
      `that all authority in Mournfall hangs over the same abyss as everyone ` +
      `else.`);
    room('pale_seal', 'The Chamber of the Seal',
      `The most guarded room in the city: a vault where the Great Seal is kept — ` +
      `the master-working of entropy-glass magic from which all the dome's patches ` +
      `draw their strength. It is a slab of glass no bigger than a door, ringed by ` +
      `blindfolded wardens who have sworn never to look at it, for to understand ` +
      `how it holds the Void back is, they believe, to weaken it.`);
    room('pale_wardens', "The Wardens' Barracks",
      `Spare stone cells and a long hall where the city's enforcers eat, sleep, ` +
      `and are made. The wardens are recruited young from every district — even the ` +
      `Wards — and taught one loyalty above blood or home: to the dome, and to the ` +
      `holding of it. A warden has no family. The dome is the family.`);
    room('pale_cells', 'The Quiet Cells',
      `The wardens' prison: a row of soundproofed stone rooms where the city keeps ` +
      `those it cannot hang and will not free. There is no torture here, and no ` +
      `mercy either — only the quiet, and the grey light, and time, which in ` +
      `Mournfall is the cruelest warden of them all.`);
    room('pale_archive', 'The Hall of Records',
      `The bureaucratic heart of the city: aisles of ledgers recording every ` +
      `arrival, every death, every crack and patch in the dome since the founding. ` +
      `The wardens believe that to lose the count is to lose the city, and so the ` +
      `clerks here never rest, tallying Mournfall's slow subtraction toward zero.`);
    room('pale_vault', 'The Sealed Vault',
      `A deep vault behind the archive where the most dangerous records are kept: ` +
      `the true maps of the dome's failing, the projections, the year — computed ` +
      `and recomputed and never spoken aloud — when the patches will no longer be ` +
      `enough. The door is triple-locked. The knowledge inside is the one thing ` +
      `the wardens fear more than the Void.`);
    room('pale_watch', 'The High Watch',
      `A gallery running along the top of the Hall, its windows angled up at the ` +
      `dome so the wardens on duty may keep the whole curve of the sky in view at ` +
      `once. Charts on the walls mark every crack in red. There is a great deal of ` +
      `red, and the newest marks are not near the Wards, where cracks belong, but ` +
      `here, high, over the Crown.`);
    room('pale_seal_gallery', "The Petitioner's Gallery",
      `A cramped public gallery where citizens may, once a year, address the ` +
      `Assembly. Most come to beg for fire, or entry for a stranded relative, or a ` +
      `patch for their failing patch. The wardens listen from behind a screen, ` +
      `and answer in writing, weeks later, in the negative, in a hand too fine to ` +
      `read.`);
    room('pale_tower', 'The Warden-Spire',
      `The highest point of the Pale Assembly and thus of all Mournfall — a slim ` +
      `watchtower from which a lone warden keeps the eternal vigil, watching the ` +
      `dome for the crack that will be the last one. The post is a punishment and ` +
      `an honour both. The view is of everything the city is, and the nothing it ` +
      `holds off, and nobody stands this watch twice without being changed.`);

    link('high_square', 'u', 'pale_gate');
    link('pale_gate', 'n', 'pale_court');
    link('pale_court', 'n', 'pale_hall');
    link('pale_court', 'e', 'pale_wardens');
    link('pale_court', 'w', 'pale_archive');
    link('pale_court', 'sw', 'pale_seal_gallery');
    link('pale_hall', 'n', 'pale_dais');
    link('pale_hall', 'u', 'pale_watch');
    link('pale_dais', 'n', 'pale_seal');
    link('pale_wardens', 'e', 'pale_cells');
    link('pale_archive', 'w', 'pale_vault');
    link('pale_watch', 'u', 'pale_tower');

    /* ================================================================= *
     *  I. THE UNDERMOURN  (18)
     *  The catacombs and undercity beneath the streets and the dead.
     * ================================================================= */
    room('under_stair1', 'The Cinder Stair',
      `A rough stair hacked down through the crust the city is built on, descending ` +
      `from the Cinder Wards into a colder, older dark. The walls change from ` +
      `patched brick to raw black stone, and then to something that is not stone ` +
      `at all, but the packed-together edge of the Void itself, holding its ` +
      `breath.`);
    room('under_cryptmouth', 'The Crypt Mouth',
      `The catacombs proper begin here, where the Sepulchre's crypt-stair debouches ` +
      `into a vaulted gallery lined floor to ceiling with the niched dead. They ` +
      `are stacked with care, name-plated, tended — Mournfall reveres its dead, ` +
      `having so little else that stays. A passage leads down and in.`);
    room('under_hub', 'The Sunken Crossing',
      `A junction of tunnels where the paths of the dead, the desperate, and the ` +
      `criminal all cross. An old boundary-stone marks it, carved with a map of a ` +
      `city that is not quite Mournfall — an earlier draft, perhaps, or a ` +
      `warning. Ways run off in every direction, and down.`);
    room('under_ossuary1', 'The First Ossuary',
      `The uppermost bone-vault, still orderly, still visited — families come down ` +
      `to sit with their niched dead and share the news. Candles of rendered fat ` +
      `gutter in a thousand alcoves. The dead outnumber the living in Mournfall a ` +
      `hundredfold, and down here, that arithmetic is felt.`);
    room('under_ossuary2', 'The Deep Ossuary',
      `Older, deeper, forgotten: a vault where the name-plates have crumbled and ` +
      `no one comes, so that the dead here have achieved the second death, the ` +
      `real one, of being no longer mourned. The End-priests hold this to be the ` +
      `truest peace. It does not feel peaceful. It feels like being alone.`);
    room('under_cistern', 'The Weeping Cistern',
      `A great underground reservoir catching the dome's condensation as it seeps ` +
      `down through the whole city — a black mirror of a lake, so still it doubles ` +
      `the vaulted ceiling perfectly, so that you seem to stand at the waist of an ` +
      `hourglass of stone. Drips fall. Each one takes an age.`);
    room('under_sewer1', "The King's Runnel",
      `The main drain of Mournfall, a brick-vaulted river of the city's cast-offs, ` +
      `named for a Beggar-King who ruled these tunnels before the wardens drove ` +
      `him up into the light. The current runs one way only: down, toward the rim, ` +
      `toward the Void, carrying the city's waste out of the world entirely.`);
    room('under_sewer2', 'The Choked Drain',
      `A side-drain clogged with the strange sediment of a strange city: bones, ` +
      `coins, teeth, the small insoluble residue of lives. Something has made a ` +
      `nest of it. The something is not here now. It has, you notice, taken its ` +
      `leavings with it, which is not what animals do.`);
    room('under_market', 'The Grey Market',
      `A black market in the truest dark, where the Undermourn's dwellers trade the ` +
      `things the Ashmarket won't touch — void-glass unlicensed, records stolen ` +
      `from the Pale vaults, ways (they whisper) that are not sealed. The sellers ` +
      `keep no light on their faces. You buy on trust, and there is no such thing.`);
    room('under_shrine', 'The Forgotten Shrine',
      `A shrine to a god whose name is worn from the stone, older than the ` +
      `End-faith, older maybe than the dome — a squat, patient idol with too many ` +
      `hands, cupped upward as if to catch something falling. The undercity folk ` +
      `still leave it offerings, not knowing what it is, on the sound reasoning ` +
      `that it was here first.`);
    room('under_warren', 'The Bone Warren',
      `A maze of narrow ways gnawed through the packed catacomb-fill, home to the ` +
      `undercity's outcasts — the exiles, the hunted, the born-below who have never ` +
      `once seen the grey day. They are pale as the bones they live among, and ` +
      `kinder than the city above, having nothing left to lose but each other.`);
    room('under_pool', 'The Still Pool',
      `A perfectly round pool of water so clear and so motionless it might be a ` +
      `hole in the floor. The Turner faithful creep down here in secret to gaze ` +
      `into it, believing it looks through to the underside of the dome — that if ` +
      `you drown here, you fall up, out, and around, and are born again on the far ` +
      `side of everything. Several have tested this. None have reported back.`);
    room('under_vault', "The Pauper's Vault",
      `Where the Wards bury the dead they cannot afford to burn — stacked in the ` +
      `cold without name-plate or candle, wrapped in sacking, given at least the ` +
      `dignity of the dark. A grave-warden keeps a tally on the wall in chalk. He ` +
      `has run out of wall, and started again over the oldest marks.`);
    room('under_tunnel1', 'The Long Dark',
      `A tunnel that runs straight and level and much too far, past all the reasons ` +
      `a tunnel should exist, toward no destination the maps admit. Your footsteps ` +
      `stop echoing after a while, as though the dark were absorbing them, keeping ` +
      `them. The air smells, very faintly, of the outside.`);
    room('under_tunnel2', 'The Weeping Passage',
      `The walls here run with cold water and something colder — a slow weeping of ` +
      `the dome's own substance, this deep, which should not be possible, which ` +
      `means the crack that feeds it goes down further than anyone has dared to ` +
      `chart. The passage narrows ahead, toward a smell of old fur and older ` +
      `hunger.`);
    room('under_nest', 'The Ghoul-Nest',
      `A reeking hollow of gnawed bone and nested rag, den to the pale, patient ` +
      `things that live on the city's dead and, when the dead run short, on the ` +
      `city's living. They are not here in the daylight hours. They are somewhere ` +
      `above you, in the walls, waiting for the grey to thicken. You should not be ` +
      `here when it does.`);
    room('under_deep', 'The Undermost Deep',
      `The lowest reachable point of Mournfall, a cavern where the floor is a ` +
      `single unbroken sheet of the dome's black glass — for the dome is not a ` +
      `roof, you understand now, but a shell, a bubble, and the city floats inside ` +
      `it, and this is its underside, and beneath the glass, an inch away, is the ` +
      `Void that is above you too. There is no up here. There is only in, and ` +
      `out.`);
    room('under_gate', 'The Sealed Undergate',
      `Set into the deepest wall: a door. An old door, of no world's make, ringed ` +
      `with warding-glyphs in the wardens' hand and chained and sealed and welded ` +
      `shut. It does not lead further down. The undercity legend — which the ` +
      `wardens have killed to suppress — is that it leads out, truly out, the one ` +
      `unsealed way in all creation, and that the city bricked it up not to keep ` +
      `something from coming in, but to keep everyone from leaving.`);

    link('under_stair1', 'd', 'under_hub');
    link('sep_crypt', 'd', 'under_cryptmouth');
    link('under_cryptmouth', 'd', 'under_ossuary1');
    link('under_ossuary1', 'e', 'under_ossuary2');
    link('under_ossuary1', 'ne', 'under_hub');
    link('under_hub', 'n', 'under_sewer1');
    link('under_hub', 'e', 'under_market');
    link('under_hub', 'w', 'under_shrine');
    link('under_hub', 's', 'under_tunnel1');
    link('under_hub', 'd', 'under_deep');
    link('under_sewer1', 'n', 'under_cistern');
    link('under_sewer1', 'e', 'under_sewer2');
    link('under_cistern', 'n', 'under_pool');
    link('under_market', 'e', 'under_warren');
    link('under_shrine', 'w', 'under_vault');
    link('under_tunnel1', 's', 'under_tunnel2');
    link('under_tunnel2', 's', 'under_nest');
    link('under_deep', 'd', 'under_gate');

    /* ================================================================= *
     *  J. THE GUTTERING ROWS  (10)
     *  The tenements of the working poor, between market and slum.
     * ================================================================= */
    room('gut_gate', 'The Guttergate (Ash Side)',
      `The upper boundary of the Rows, where the Ashmarket's dirt lane gives onto ` +
      `the tenements of the folk who feed the market — the porters, the ` +
      `pyre-tenders, the ten thousand hands that keep Mournfall's small machine ` +
      `turning. It is poor here, but it is not the Wards, and the people are ` +
      `fiercely proud of the difference.`);
    room('gut_row', 'Tallow Row',
      `A steep street of narrow tenements, each with its stoop scrubbed and its ` +
      `single window boxed with a struggling grey herb. Washing strung between the ` +
      `houses catches the drip of the dome. This is the respectable poverty of ` +
      `Mournfall: cold, cramped, and clinging with both hands to its dignity.`);
    room('gut_house1', "The Chandler's Tenement",
      `A tall thin house given over to a family of tallow-chandlers who render the ` +
      `fat and pour the cheap candles that light half the lower city. The whole ` +
      `place smells of it — a warm, animal, greasy smell that the children carry ` +
      `on their clothes and that the girls, they say, can never quite wash out ` +
      `before a dance.`);
    room('gut_house2', "The Widow's Lodging",
      `A lodging-house of small clean rooms let to the widows of voidsailors, who ` +
      `keep each other company through the long grey years of not-quite-knowing. ` +
      `Each door has a lamp beside it, lit against a return. Some of the lamps ` +
      `have been burning for thirty years. Their keepers do not discuss it.`);
    room('gut_court', 'Marrow Court',
      `A tight communal court where the Rows do their living out of doors — ` +
      `gossiping, quarrelling, minding each other's children, sharing a single ` +
      `precious brazier turn by turn. It is the warmest place in the lower city, ` +
      `not for the fire, but for the fact that here, at least, nobody is alone at ` +
      `the end of everything.`);
    room('gut_low', 'Lower Tallow Row',
      `The street descends toward the boundary with the Cinder Wards, and the ` +
      `houses lean a little harder, the herbs in the windows die a little more. ` +
      `Still the Rows insist they are not the Wards. A public pump stands to the ` +
      `west; the drying yard opens south; and a broken arch drops away toward the ` +
      `slums.`);
    room('gut_pump', 'The Common Pump',
      `A hand-pump over a shared cistern, the social hinge of the lower Rows, where ` +
      `every quarrel and courtship in the neighbourhood is conducted in the queue. ` +
      `The water is grey but honest. A notice, much amended, sets out the order of ` +
      `households; the order of households is the true constitution of the Rows.`);
    room('gut_yard', 'The Drying Yard',
      `A soot-blackened yard hung with lines of laundry that never quite dry in ` +
      `the damp of the dome, so that the Rows go always a little clammy. Children ` +
      `play among the sheets, ghost-fighting. Beyond the wall, the light turns ` +
      `bruise-coloured: the Wards, and their patched and dangerous sky.`);
    room('gut_chapel', 'The Little Chapel of Embers',
      `A one-room chapel the Rows built with their own hands, keeping a homely ` +
      `middle way between the grand End-faith and the Wards' desperate glass-cult: ` +
      `they tend a small perpetual ember and pray, simply, for one more ordinary ` +
      `day. It is the least fashionable theology in Mournfall, and quietly the ` +
      `most practised.`);
    room('gut_attic', "The Poets' Attic",
      `A cramped garret under the tenement eaves where the Rows' dreamers gather — ` +
      `clerks and washerwomen and off-shift porters who write, by rushlight, the ` +
      `poems no one will publish. They read them aloud to each other and to the ` +
      `dome. It is generally agreed to be a foolish way to spend a cold night, and ` +
      `the attic is generally full.`);

    link('ash_end', 's', 'gut_gate');
    link('gut_gate', 's', 'gut_row');
    link('gut_row', 's', 'gut_low');
    link('gut_row', 'e', 'gut_house1');
    link('gut_row', 'w', 'gut_house2');
    link('gut_row', 'se', 'gut_court');
    link('gut_low', 's', 'gut_yard');
    link('gut_low', 'w', 'gut_pump');
    link('gut_low', 'sw', 'cin_gate2');
    link('gut_yard', 'e', 'gut_chapel');
    link('gut_yard', 'u', 'gut_attic');

    /* ================================================================= *
     *  A little life: a few items and inhabitants, placed for flavour.
     * ================================================================= */
    R.cin_breach.add(world.item({
      name: 'shard of entropy-glass',
      keywords: ['shard', 'glass', 'entropy', 'entropy-glass'],
      short: 'A loose shard of entropy-glass lies here, faintly ringing.',
      description:
        'A splinter of the substance that patches the dome — cold, heavy, and ' +
        'never quite still, as though it half-remembers being the Void. It ' +
        'throws a light that has no source and casts no shadow.',
      weight: 1,
      onGet(player, game) {
        game.print('The shard is deathly cold, and hums against your palm ' +
          'like a struck glass.');
      },
    }));

    R.gate_shrine.add(world.item({
      name: 'guttering candle',
      keywords: ['candle', 'light', 'flame'],
      short: 'A candle in a cup of entropy-glass leans its flame inward.',
      description:
        'A stub of tallow in an entropy-glass cup. Its flame bends always ' +
        'away from the dome, as if it, too, would rather not look outward.',
      weight: 1,
    }));

    R.gate_customs.add(world.mob({
      name: 'warden-clerk',
      keywords: ['warden', 'clerk'],
      short: 'A warden-clerk works at a chained lectern, not looking up.',
      description:
        'A grey-uniformed clerk of the wardens, ageless in the way of people ' +
        'who have stamped too many ledgers. A brass badge reads only: COUNT.',
      dialogue:
        "Name, world of origin, and business. No — don't tell me your " +
        'destination. Nobody here has one.',
    }));

    R.cin_court.add(world.mob({
      name: 'Beggar-King',
      keywords: ['beggar', 'king', 'beggar-king'],
      proper: true,
      short: 'The Beggar-King slouches on his throne of scrap, watching you.',
      description:
        'A wiry, watchful man in a coat of stitched rags and stolen medals, ' +
        'crowned with a bent circlet of dome-wire. He rules the Wards with a ' +
        'fairness the Crown has never managed.',
      hostile: false,
      maxHp: 40,
      hp: 40,
      dialogue(player) {
        return "Down here we don't ask where you're going, friend. We ask " +
          "what you'll give to stay warm one more night. Welcome to the real " +
          'Mournfall.';
      },
    }));

    R.high_oculus.add(world.mob({
      name: 'old astronomer',
      keywords: ['astronomer', 'watcher', 'old'],
      short: 'An old astronomer keeps her vigil at the glass, back to you.',
      description:
        'Bent and patient, wrapped against a cold that has nothing to do with ' +
        'temperature, she watches the Void so that it is never watched by no ' +
        'one. Her eyes are the palest thing about her.',
      dialogue:
        "Ninety years I've watched it, and it has never once looked back. " +
        'That is the mercy. Pray it lasts.',
    }));

    flushLinks();
    world.setStart(R.gate_arrival);
    return { world, mournfall, R };
  };
})(typeof window !== 'undefined' ? window : this);
