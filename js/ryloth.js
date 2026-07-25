/*
 * ryloth.js — RYLOTH, the harsh homeworld of the Twi'leks.
 *
 * A 100-room area, and — like Sullust and the Hutt worlds — a beachhead built
 * to grow: only the spaceport-city carved into the Shak'ar Mountains and the
 * districts around it are here, with sealed passages and storm-scoured horizons
 * marking the vast rest of the world, left for a later pass. The writing does
 * not stint; Ryloth has earned its griefs the hard way, and they are worth
 * telling.
 *
 * Ryloth is a world of extremes bolted to a slow, cruel rhythm. It turns on its
 * axis so ponderously that one hemisphere bakes for a small eternity beneath a
 * merciless sun — the Bright Lands, a hell of glass-flat desert and rolling
 * heat-storms that flay stone to sand — while the far side freezes in a night
 * just as long, and only a narrow ring of habitable twilight wanders slowly
 * between them, a moving band of bearable air. So the Twi'leks, like the
 * Sullustans, went into the rock: their settlements are honeycombs bored into
 * the mountains of the twilight zone, cool caves against the killing day, from
 * which they mine the pale spice called ryll and endure, clan by clan, a world
 * that has never once been kind to them.
 *
 * The Twi'leks are a beautiful, various, ancient people — skin in every hue from
 * pale blue to deep crimson, twin lekku (head-tails) that speak a silent
 * language of their own — and they are, across the galaxy, a byword for two
 * things: their music and grace, and their bondage. For Ryloth's oldest and
 * bitterest export is not ryll but its own daughters and sons, taken by slavers
 * and, to the world's lasting shame, sold sometimes by Twi'leks themselves —
 * the head-clans trading the powerless to buy the powerful a little peace. It
 * is a world of fierce clan-honour and quiet clan-guilt, of hospitality that
 * would give a stranger its last water and a politics that would sell its own
 * children, and it wears both truths without flinching.
 *
 * You reach it by transit from Coruscant, set down in the mountain-carved
 * starport of Kala'uun; a terminal there books the long ride home.
 *
 * Content, not framework. Populated into the shared World by world-data.js,
 * which wires the cross-world transit.
 *
 * LAYOUT (districts):
 *   ryl_port_*  The Kala'uun Starport (carved into the mountain) .. 24   ARRIVE
 *   ryl_city_*  Kala'uun (the cave-city of the twilight) .......... 24
 *   ryl_mine_*  The Ryll Mines (the pale-spice workings) ......... 18
 *   ryl_clan_*  The Head-Clan's Hold (the seat of clan power) .... 16
 *   ryl_waste_*  The Bright Lands (the storm-scoured surface) .... 18
 *                                                                  ---
 *                                                                  100
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildRyloth = function buildRyloth(ctx) {
    const { world, R, room, link } = ctx;

    const ryloth = world.area({
      id: 'ryloth',
      name: 'Ryloth, the Twin-Sunned Grief',
      description:
        'The harsh homeworld of the Twi\'leks: a slow-turning world of killing ' +
        'day and freezing night, its people burrowed into the twilight mountains.',
    });

    /* ================================================================= *
     *  I. THE KALA'UUN STARPORT  (24) — bored into the flank of a mountain,
     *     the world's door and the world's shame both pass through it.
     * ================================================================= */
    room('ryl_port_concourse', "The Kala'uun Concourse",
      `You step off the transit into a great vaulted hall bored straight into ` +
      `living mountain rock, cool and dim after the shuttle's glare, loud with the ` +
      `echo of a hundred tongues. This is the Kala'uun Starport, the chief door of ` +
      `Ryloth, hacked into the Shak'ar Mountains by generations of Twi'lek hands; ` +
      `its walls are hung with clan-banners and its air is thick with dust, ` +
      `incense, and the particular tension of a place where much is bought and ` +
      `sold that should not be. A transit terminal against the wall books the ` +
      `long ride back to the Core.`);
    room('ryl_port_arrival', 'The Arrival Cavern',
      `The rock-cut bay where the offworld shuttle set you down, its mouth sealed ` +
      `against the day by a great blast-shutter that only opens in the cool of the ` +
      `wandering twilight. A faded mural covers one wall — Twi'lek dancers, ` +
      `mountains, a double sun — half-hopeful and half-mourning, the work of some ` +
      `long-dead hand that wanted the first thing a visitor saw of Ryloth to be ` +
      `its beauty, and not its grief.`);
    room('ryl_port_gate', 'The Starport Gate',
      `A broad rock-cut gate, its arch carved with the interlaced lekku-script of ` +
      `a dozen clans, where the starport gives onto the cave-city of Kala'uun ` +
      `beyond. Through it drifts the smell of cook-fires, ryll-dust, and dressed ` +
      `stone, and the sound of a distant, aching Twi'lek song. Beyond the gate ` +
      `the mountain opens into a city; behind you, the door to the stars.`);
    room('ryl_port_customs', 'The Customs Warren',
      `A cramped warren of rock-cut booths where Ryloth's tangled authorities — ` +
      `clan-wardens, spice-guild men, and whoever has paid the most this cycle — ` +
      `assess the coming and the going. There is no single law here, only a market ` +
      `in permissions, and the trick, as everywhere on Ryloth, is knowing which ` +
      `hand to fill and how full.`);
    room('ryl_port_checkpoint', "The Warden's Checkpoint",
      `A checkpoint manned by clan-wardens in mismatched armour, metering who ` +
      `passes deeper into Kala'uun and lightening them, in the old Rylothi way, of ` +
      `a "toll" that is however much they judge you able to pay. They are not ` +
      `cruel, exactly — only poor, and proud, and long past expecting the galaxy ` +
      `to deal fairly with their world.`);
    room('ryl_port_slavepost', 'The Bonding Post',
      `A grim rock-cut office hung with chain and euphemism, where the starport's ` +
      `foulest trade wears its paperwork: the "bonding" and "indenture" and ` +
      `"clan-transfer" of Twi'leks sold offworld, the slavers' business done in ` +
      `daylight because no one here has the power, or in some cases the will, to ` +
      `stop it. It is the shame of Ryloth transacted at a desk, and the clerk does ` +
      `not meet your eyes, and does not stop working.`);
    room('ryl_port_guildoffice', 'The Spice-Guild Office',
      `A well-kept office, richer than its neighbours, where the ryll spice-guild ` +
      `licenses the mines and skims the trade that is the twilight world's one ` +
      `clean fortune. The guild-factor is smooth and offworld-tailored and ` +
      `precise, and speaks of tonnage and purity and price, and never once of the ` +
      `lungs it costs to dig.`);
    room('ryl_port_market', 'The Starport Bazaar',
      `A close, thronging bazaar filling a side-cavern with stalls of ryll, ` +
      `dried heat-fruit, clan-weave cloth, offworld salvage, and cheap charms ` +
      `against the storms. Twi'leks of every hue haggle in the lekku-language and ` +
      `the trade-tongue at once, and the noise and colour and smell of it is the ` +
      `first thing about Ryloth that is purely, defiantly alive.`);
    room('ryl_port_outfitter', 'The Storm Outfitter',
      `A stall of the gear a soul needs to cross the Bright Lands and live: ` +
      `reflective robes, sand-veils, water-recyclers, and the wide Rylothi ` +
      `heat-cloak that has saved more lives than any medicine. The old Twi'lek who ` +
      `sells them has crossed the storms herself, by the scars, and prices honest, ` +
      `and throws in advice worth more than the goods.`);
    room('ryl_port_impound', 'The Impound Cave',
      `A caged cavern of seized cargo and cooling ships, held against unpaid tolls ` +
      `or the wrong clan crossed, slowly disappearing into the pockets of whoever ` +
      `holds the keys this cycle. On Ryloth, possession is nine-tenths of a law ` +
      `that has only the one-tenth, and that one for sale.`);
    room('ryl_port_docks', 'The Cargo Landing',
      `Rock-cut berths where the freighters that carry ryll offworld — and carry, ` +
      `in sealed and unlisted holds, worse cargo than ryll — are loaded in the ` +
      `brief cool of the twilight. The stevedores are Twi'lek and tireless, and ` +
      `they do not ask what is in the sealed holds, because they know, and asking ` +
      `changes nothing but their own safety.`);
    room('ryl_port_berth', "The Slavers' Berth",
      `A berth apart, better guarded than the rest, where the slaver-ships put in ` +
      `to take on their living cargo, screened behind a rockfall of official ` +
      `indifference. The clan-wardens patrol everywhere but here. It is the one ` +
      `corner of the starport where the whole world's careful pretence — that ` +
      `this is not happening, that no one could stop it — is laid bare and cold.`);
    room('ryl_port_hangar', 'The Repair Cavern',
      `A gantry-hung cavern where offworld ships are patched by Twi'lek mechanics ` +
      `who could rebuild a hyperdrive from mountain-scrap and frequently must. The ` +
      `work is ingenious and cheap and better than it has any right to be, wrung ` +
      `by clever hands from a world that has never given them the proper tools.`);
    room('ryl_port_fuel', 'The Fuel Cave',
      `A cavern of fuel-drums and cracked hose, the hypermatter sold at the ` +
      `guild's price to ships bound back for a kinder sky. The strobes flash their ` +
      `warnings; the fuel-tender dozes; and the whole close, volatile cave is one ` +
      `dropped spark from ending the starport's troubles all at once.`);
    room('ryl_port_cantina', 'The Twilight Cantina',
      `A warm, dim cantina carved into the rock, loud with music and thick with ` +
      `the smoke of ryll-pipes, where spacers and miners and clan-wardens drink ` +
      `the fierce Rylothi spirit and a band plays the old songs. It is the ` +
      `beating heart of the starport, joyous and desperate at once, and here, if ` +
      `anywhere, a stranger learns what Ryloth loves and what it has lost.`);
    room('ryl_port_flop', 'The Rock-Cell Lodging',
      `A warren of rented sleeping-cells hacked into the cavern wall, cool and ` +
      `bare and cheap, where the between-ships and the down-on-luck lay their ` +
      `heads. The doors are curtains; the security is the goodwill of your ` +
      `neighbours; and on Ryloth that is, against all odds, often enough.`);
    room('ryl_port_control', 'The Traffic Cave',
      `A dim cave of salvaged scopes where a handful of Twi'lek controllers thread ` +
      `the descending ships down through the heat-storms and the shield-shutter by ` +
      `instinct and old cunning. The gear is offworld cast-offs, decades obsolete; ` +
      `the skill that keeps it working, and the ships alive, is entirely Rylothi ` +
      `and entirely unpaid for.`);
    room('ryl_port_droidbay', 'The Droid Cave',
      `A charging-cave of leased and labouring droids, mostly ancient, mostly ` +
      `patched from the bones of older droids, waiting to be hired to offworlders ` +
      `who cannot bear the heat or find the way. A battered protocol unit offers, ` +
      `in six thousand forms of communication, to guide you anywhere in Kala'uun, ` +
      `and to translate the lekku-language, which it does, it admits, badly.`);
    room('ryl_port_medbay', "The Healer's Cave",
      `A rock-cut infirmary where a Twi'lek healer and a wheezing old med-droid ` +
      `treat the heat-struck, the spice-lunged, and the knife-cut with skill, ` +
      `patience, and almost no supplies. The healer works the same whether the ` +
      `patient can pay or not, which is why the cave is always full, and why the ` +
      `whole starport would fight for her.`);
    room('ryl_port_shrine', 'The Shrine of the Lifebringer',
      `A quiet shrine to the Twi'lek reverence for life against a world that ` +
      `spends it so freely — a spiral of offered water-drops, clan-tokens, and the ` +
      `shed lekku-rings of the mourned. The Twi'leks hold that every life is a ` +
      `flame the harsh world tries to snuff, and that to shelter another's flame ` +
      `is the whole of goodness; the shrine is where they remember it, and grieve ` +
      `the flames they could not shelter.`);
    room('ryl_port_gallery', 'The Sun-Shutter Gallery',
      `A gallery behind a slab of shielded transparisteel set into the mountain's ` +
      `face, the one window in the starport onto the world outside. Beyond it: the ` +
      `Bright Lands, a white glare of storm-scoured desert stretching to a horizon ` +
      `that shimmers and burns, the twin sun a hammer on the anvil of the world. ` +
      `Twi'lek children press their hands to the cool glass and stare, and are ` +
      `told, gently, why they must never, ever go out.`);
    room('ryl_port_lift', 'The Mountain Lift',
      `A groaning lift of Rylothi make — salvaged cable and stubborn ingenuity — ` +
      `connecting the starport levels to the city below and the workings deeper ` +
      `still. It has failed, they say, exactly once, long ago, and the clan that ` +
      `maintains it has kept it perfect ever since out of a shame that has become, ` +
      `over generations, a kind of pride.`);
    room('ryl_port_sublevel', 'The Under-Starport',
      `A dim service-level beneath the concourse, all rough rock and dripping ` +
      `seep and the cool breath of the deep mountain. Here the starport's public ` +
      `face gives out, and the older, harder bones of Twi'lek Ryloth — patient, ` +
      `buried, enduring — begin to show through the corporate offworld gloss.`);
    // EXPANSION: ryl_port_seam stubs onto the starport's unbuilt deep levels.
    room('ryl_port_seam', 'The Sealed Gallery',
      `A rough gallery running deeper into the mountain — and, a little way on, a ` +
      `rockfall, half-natural and half-deliberate, that the clan-wardens will not ` +
      `explain and will not clear. Something was closed off down here, in some bad ` +
      `year. It stays closed. What lies beyond is not yet dug for you to find.`);

    link('ryl_port_concourse', 'sw', 'ryl_port_arrival');
    link('ryl_port_concourse', 'n', 'ryl_port_gate');
    link('ryl_port_concourse', 'e', 'ryl_port_customs');
    link('ryl_port_concourse', 'w', 'ryl_port_market');
    link('ryl_port_concourse', 's', 'ryl_port_cantina');
    link('ryl_port_concourse', 'ne', 'ryl_port_control');
    link('ryl_port_concourse', 'nw', 'ryl_port_medbay');
    link('ryl_port_concourse', 'se', 'ryl_port_gallery');
    link('ryl_port_customs', 'e', 'ryl_port_guildoffice');
    link('ryl_port_customs', 'n', 'ryl_port_checkpoint');
    link('ryl_port_checkpoint', 'e', 'ryl_port_slavepost');
    link('ryl_port_market', 's', 'ryl_port_docks');
    link('ryl_port_market', 'w', 'ryl_port_outfitter');
    link('ryl_port_docks', 's', 'ryl_port_hangar');
    link('ryl_port_docks', 'e', 'ryl_port_berth');
    link('ryl_port_hangar', 'w', 'ryl_port_fuel');
    link('ryl_port_outfitter', 's', 'ryl_port_impound');
    link('ryl_port_cantina', 'e', 'ryl_port_flop');
    link('ryl_port_control', 'n', 'ryl_port_droidbay');
    link('ryl_port_medbay', 'w', 'ryl_port_shrine');
    link('ryl_port_gallery', 's', 'ryl_port_lift');
    link('ryl_port_lift', 'd', 'ryl_port_sublevel');
    link('ryl_port_sublevel', 'e', 'ryl_port_seam');

    /* ================================================================= *
     *  II. KALA'UUN  (24) — the cave-city of the twilight, bored into the
     *      mountain against the killing day.
     * ================================================================= */
    room('ryl_city_gate', "The Mouth of Kala'uun",
      `The starport gate gives onto the city proper, and Kala'uun opens around ` +
      `you: a whole town bored into the heart of a mountain, its dwellings and ` +
      `halls and markets stacked up the walls of a vast natural cavern lit by ` +
      `filtered daylight-shafts and the warm glow of a thousand cook-fires. ` +
      `Waterfalls of cistern-melt thread the walls; bridges of stone and rope ` +
      `cross the airy gulf; and the whole cool, dim, teeming hollow rings with ` +
      `the life of a people who made a home inside a stone to escape a world that ` +
      `wanted them dead.`);
    room('ryl_city_plaza', 'The Cavern Plaza',
      `The heart of Kala'uun, a broad rock floor where the mountain's daylight- ` +
      `shafts pool their precious filtered light and the city gathers to trade, ` +
      `talk, and be seen. A dry fountain at its centre — for water is too dear to ` +
      `waste on beauty — is carved as a spray of lekku, and around it the life of ` +
      `the twilight city turns: vendors, wardens, dancers, children, and the ` +
      `endless slow negotiation of a people sharing too little space and too ` +
      `little water with too much grace.`);
    room('ryl_city_concourse2', 'The Grand Grotto',
      `The city's great commercial cavern, its shopfronts and balconies climbing ` +
      `the walls tier on tier toward the daylight-shafts far above, every ledge a ` +
      `dwelling, every dwelling a clan. It is loud, close, and vividly alive, and ` +
      `it hums with the particular resilience of people who have been given ` +
      `nothing by their world and have, regardless, built this.`);
    room('ryl_city_promenade', 'The Lantern Walk',
      `A winding gallery-street strung with the coloured glass lanterns the ` +
      `Twi'leks love, casting a soft festival light on the rock, lined with ` +
      `tea-houses and music-rooms and the stalls of the clan-weavers. It is the ` +
      `city's gentle heart, where an evening of the wandering twilight is spent in ` +
      `song and talk and the fierce sweet tea, and the world's grief is, for an ` +
      `hour, set down.`);
    room('ryl_city_music', 'The House of Song',
      `A rock-cut hall where Ryloth's true genius lives: its music. Twi'lek ` +
      `singers and players fill the cavern with the aching, intricate songs that ` +
      `have carried across the galaxy even where the Twi'leks themselves have ` +
      `carried only in chains — songs of the storms, the clans, the taken and the ` +
      `lost. To hear it in the rock it was made for is to understand Ryloth in a ` +
      `way no history can teach.`);
    room('ryl_city_market', 'The Deep Market',
      `A bustling market cavern where the city buys its living — ryll and ` +
      `heat-fruit, cave-mushroom and cistern-water, clan-weave and mountain-iron. ` +
      `The haggling runs in two languages at once, the spoken and the lekku, so ` +
      `that a Twi'lek may agree a price aloud while calling the seller a thief ` +
      `with the flick of a head-tail, and both, by long custom, are true.`);
    room('ryl_city_garden', 'The Cistern Gardens',
      `Terraced grow-caves where the city coaxes food from the dark — pale ` +
      `mountain-mushroom, hardy tuber, the precious heat-fruit vines fed on ` +
      `hoarded water and shafted light. It is a small green miracle wrung from a ` +
      `world of stone and thirst, tended like treasure, and defended, in the hard ` +
      `years, like a fortress.`);
    room('ryl_city_cistern', 'The Great Cistern',
      `The city's dearest possession: a vast rock-cut reservoir catching the melt ` +
      `and seep of the mountain, its dark water the difference between Kala'uun and ` +
      `a grave. It is guarded day and night, rationed by the clans, and revered ` +
      `almost as a god; to foul it is the one crime Ryloth punishes without mercy ` +
      `or appeal.`);
    room('ryl_city_shrine', 'The Clan Shrine',
      `A rock-cut shrine of the ancestor-clans, its walls a spiral of carved ` +
      `lekku-names winding back into the dark further than any lantern reaches — ` +
      `the remembered dead of Kala'uun, generation on generation, back to the ` +
      `first who cut this cavern from the mountain. The living come to add their ` +
      `dead, and to swear their oaths, and to ask the ancestors for the one thing ` +
      `Ryloth has never granted: an easier world.`);
    room('ryl_city_cantina', 'The Cavern Cantina',
      `A warm, close cantina beloved of the city's off-shift miners and wardens, ` +
      `its air blue with ryll-smoke and loud with argument and song. The spirit is ` +
      `fierce, the welcome to a stranger genuine, and the talk, once the tea gives ` +
      `way to something stronger, turns to the two subjects Ryloth cannot leave ` +
      `alone: the price of ryll, and the shame of the trade in kin.`);
    room('ryl_city_clinic', "The City Healer's Hall",
      `A larger healer's hall serving the whole cave-city, its cots always full ` +
      `of the spice-lunged and the storm-burned and the plain worn-out, tended by ` +
      `Twi'lek healers who give what care a poor world allows and grieve what it ` +
      `does not. The Lifebringer's spiral is carved above the door, and beneath ` +
      `it the healers keep, against all the evidence, the faith that life is ` +
      `worth the saving.`);
    room('ryl_city_housing', 'The Dwelling-Warrens',
      `Tiers of rock-cut homes climbing the cavern wall, each a cave curtained ` +
      `against the shared gulf, home to the clans who are the city's blood. Life ` +
      `here is lived close and loud and in common — one family's cook-fire warms ` +
      `three, one family's grief is the warren's grief — and a stranger walking ` +
      `through is watched by a hundred unhurried eyes and, if they mean no harm, ` +
      `left be.`);
    room('ryl_city_workshop', "The Weavers' Cavern",
      `A cavern loud with looms, where the clan-weavers make the famed Rylothi ` +
      `cloth — patterned in the lekku-script of a hundred clans, each bolt a ` +
      `history — from the tough fibre of the heat-plants. It is one of the world's ` +
      `few honest exports, and the weavers are proud, and the patterns they will ` +
      `not sell offworld, the mourning-weaves, they keep for their own dead.`);
    room('ryl_city_forum', 'The Speaking-Cave',
      `A tiered rock amphitheatre where the clans of Kala'uun meet to argue the ` +
      `city's business — water-shares, mine-quotas, the endless feuds and ` +
      `alliances of clan and clan. It is loud, ancient, and only as free as the ` +
      `head-clan permits; the great questions are settled up in the Hold, and ` +
      `everyone knows it, and the Speaking-Cave speaks on regardless, keeping the ` +
      `shape of a voice.`);
    room('ryl_city_hall', 'The Moot Hall',
      `A grand rock-cut hall where the clan-elders gather in full moot at the ` +
      `turning of the twilight, beneath a ceiling carved with the double sun. Here ` +
      `the alliances are sworn and the feuds are judged and, in the bad years, the ` +
      `terrible bargains are struck — which of the powerless shall be given to the ` +
      `slavers, that the powerful might endure. The hall remembers every such ` +
      `bargain. The clans do not forgive them, and do not stop making them.`);
    room('ryl_city_bazaar', 'The Offworld Bazaar',
      `A gaudier market where the city meets the galaxy — offworld goods, ryll ` +
      `sold retail to spacer and tourist, charms and trinkets and the dancers' ` +
      `bright silks. It is where Ryloth performs itself for the visitor, beautiful ` +
      `and a little false, and where the sharp-eyed can see, beneath the ` +
      `performance, exactly what the visitor has come to buy.`);
    room('ryl_city_exchange', 'The Ryll Exchange',
      `A close, tense cavern where the spice-guild sets the price of ryll and the ` +
      `mine-clans live or starve by the number chalked on the great slate. The ` +
      `whole hard economy of the twilight world turns on this one figure, set by ` +
      `offworld demand and guild greed, and the miners who dig the stuff have, as ` +
      `ever, no voice in it at all.`);
    room('ryl_city_gallery', 'The Daylight Gallery',
      `A gallery set where a great daylight-shaft strikes the cavern wall, so that ` +
      `for a few hours of the wandering twilight a slant of true, unfiltered ` +
      `sunlight falls across the rock — a rarity the city treasures. Twi'leks come ` +
      `to stand in it, eyes closed, faces turned up, taking the sun in careful ` +
      `sips, for on Ryloth the sun is both the giver of the twilight and the ` +
      `bringer of the killing day, and even its blessing is edged.`);
    room('ryl_city_overlook', 'The High Ledge',
      `A ledge high on the cavern wall, reached by a giddy stair, from which the ` +
      `whole of Kala'uun falls away beneath you in tiers of firelight and ` +
      `lantern-glow down into warm dark. From here the cave-city looks like what ` +
      `it is: a thing of astonishing stubbornness, a whole civilisation kindled ` +
      `and kept alight inside a stone, in defiance of a world that offered it only ` +
      `the choice of burning or freezing.`);
    room('ryl_city_den', 'The Ryll Den',
      `A dim, cushioned den where the city takes its own spice — ryll smoked slow ` +
      `for the dulling of a hard life's edges, the air a sweet narcotic haze, the ` +
      `smokers sunk deep in the world's oldest comfort and oldest trap. The ` +
      `den-keeper watches over them almost tenderly, and extends the credit that ` +
      `is its own kind of chain.`);
    room('ryl_city_terrace', 'The Warren Terrace',
      `A shared terrace jutting into the cavern's airy gulf, where a dwelling- ` +
      `warren takes its evening — old ones on stone benches, children daring the ` +
      `low rail, a singer trying a new song against the dark. It is an ordinary ` +
      `Rylothi evening, and there is more grace and more grief packed into its ` +
      `hour than a soft world sees in a year.`);
    room('ryl_city_mineway', "The Miners' Road",
      `A broad, worn, downward road out of the city toward the ryll workings, the ` +
      `walls pale with the drifted spice-dust that glitters in the lantern-light ` +
      `and rots the lungs that breathe it. The shift-crews trudge it in their ` +
      `dust-veils, up and down, and the deeper it goes the paler the dust and the ` +
      `harder the coughing, all the way down to the pale-spice faces.`);
    room('ryl_city_clanway', 'The Hold Road',
      `A guarded ascending way, cleaner and prouder than the rest, climbing toward ` +
      `the seat of the head-clan whose banners hang thick along it. The traffic ` +
      `here is all clan-business — wardens, tribute-bearers, supplicants — and the ` +
      `ordinary citizen climbs it only when summoned, and comes down again ` +
      `quieter than they went up.`);
    room('ryl_city_wasteway', 'The Sun-Gate Road',
      `A rising tunnel toward the mountain's surface and the killing Bright Lands ` +
      `beyond, sealed at its head by the great sun-gate that opens only in the ` +
      `deep of the twilight. Caravans muster here for the storm-crossings, and the ` +
      `bold and the desperate check their heat-cloaks one last time, and the air ` +
      `that seeps down the tunnel is already, even here, too hot and too bright ` +
      `and tasting of glass.`);

    link('ryl_city_gate', 'n', 'ryl_city_plaza');
    link('ryl_city_plaza', 'n', 'ryl_city_concourse2');
    link('ryl_city_plaza', 'e', 'ryl_city_clanway');
    link('ryl_city_plaza', 'w', 'ryl_city_mineway');
    link('ryl_city_plaza', 'ne', 'ryl_city_forum');
    link('ryl_city_plaza', 'nw', 'ryl_city_market');
    link('ryl_city_plaza', 'se', 'ryl_city_cantina');
    link('ryl_city_plaza', 'sw', 'ryl_city_housing');
    link('ryl_city_plaza', 'u', 'ryl_city_wasteway');
    link('ryl_city_plaza', 'd', 'ryl_city_den');
    link('ryl_city_concourse2', 'n', 'ryl_city_promenade');
    link('ryl_city_concourse2', 'e', 'ryl_city_cistern');
    link('ryl_city_promenade', 'n', 'ryl_city_music');
    link('ryl_city_promenade', 'e', 'ryl_city_exchange');
    link('ryl_city_promenade', 'w', 'ryl_city_gallery');
    link('ryl_city_forum', 'e', 'ryl_city_hall');
    link('ryl_city_forum', 'n', 'ryl_city_bazaar');
    link('ryl_city_market', 'n', 'ryl_city_shrine');
    link('ryl_city_market', 'w', 'ryl_city_garden');
    link('ryl_city_cantina', 'e', 'ryl_city_clinic');
    link('ryl_city_housing', 's', 'ryl_city_workshop');
    link('ryl_city_den', 'e', 'ryl_city_terrace');
    link('ryl_city_gallery', 'u', 'ryl_city_overlook');
    // Starport -> Kala'uun.
    link('ryl_port_gate', 'n', 'ryl_city_gate');

    /* ================================================================= *
     *  III. THE RYLL MINES  (18) — the pale-spice workings, the world's
     *       one clean fortune and the lungs it costs.
     * ================================================================= */
    room('ryl_mine_gate', 'The Workings Gate',
      `The miners' road ends at a timbered gate into the ryll workings, the air ` +
      `beyond it pale with the drifting spice-dust that glitters like frost and ` +
      `kills like slow smoke. A shrine to the Lifebringer stands beside the gate, ` +
      `heaped with the tokens of miners gone down and not come up, and every crew ` +
      `touches it going in, and means it.`);
    room('ryl_mine_hub', 'The Workings Junction',
      `A rough junction where the mine-tunnels meet, hung with dust-caked lanterns ` +
      `and the tally-slates of a dozen crews, the floor pale with trodden spice. ` +
      `Ore-carts rumble through on wooden rails; the miners pass in their ` +
      `dust-veils, lekku bound back for the work, coughing the cough that Ryloth ` +
      `calls, without much humour, the spice-guild's lullaby.`);
    room('ryl_mine_tunnel', 'The Spice Tunnels',
      `A branching warren of low tunnels chasing the pale ryll seams deep into the ` +
      `mountain, the dust thick enough to fog a lantern, the roof too low to ` +
      `stand. The crews work them bent-backed for the whole of a twilight-shift, ` +
      `and the tunnels give up their pale wealth grudgingly, a hard-won handful at ` +
      `a time.`);
    room('ryl_mine_drill', 'The Cutting Face',
      `The live face of the workings, where miners cut the ryll from the rock by ` +
      `hand and old machine, the pale dust rising in a choking cloud that no ` +
      `mask quite stops. It is brutal, ancient work, and it is Ryloth's one ` +
      `honest fortune, and the bitter joke of the world is that the stuff which ` +
      `soothes a galaxy's pain is dug in this much of it.`);
    room('ryl_mine_richvein', 'The Deep Vein',
      `A tunnel that struck a rich pale vein of the finest ryll, its walls almost ` +
      `luminous with the spice, worked around the clock by the crews the guild ` +
      `favours. A rich vein is a blessing and a curse both: it feeds the clan that ` +
      `holds it and marks that clan for the envy, the raids, and the "attention" ` +
      `of every power on the world.`);
    room('ryl_mine_ore', 'The Sorting Floor',
      `A cavern where the raw ryll-ore is brought up to be picked, graded, and ` +
      `sacked for the guild, the air a permanent pale haze. The sorters are the ` +
      `old and the young and the lung-sick who can no longer cut, their fingers ` +
      `stained white, their labour valued by the guild at very nearly nothing.`);
    room('ryl_mine_gaswell', 'The Gas Pockets',
      `A dreaded stretch where the deep rock breathes bad air — the odourless ` +
      `killing gases that pool in the low workings and drop a crew where they ` +
      `stand. The miners carry caged tunnel-crawlers that sicken before a person ` +
      `does, and watch them more anxiously than any instrument, and run when the ` +
      `little creatures fall still.`);
    room('ryl_mine_refinery', 'The Refining Cave',
      `A cavern where the sorted ryll is refined toward the pure pale spice the ` +
      `galaxy pays for, the process guild-guarded and guild-secret. The refiners ` +
      `work behind glass and mask, for refined ryll is potent enough to fell the ` +
      `unwary with a breath, and the guild counts every gram, and trusts no one, ` +
      `least of all the clans that dug it.`);
    room('ryl_mine_vent', 'The Vent Shaft',
      `A shaft driven up toward the surface to carry off the killing dust and gas, ` +
      `roaring with the hot updraught of the Bright Lands far above. It is the ` +
      `workings' one breath of the outer world, and it comes down foul with heat ` +
      `and glass-grit, so that even the mine's fresh air is Ryloth's particular ` +
      `punishment.`);
    room('ryl_mine_foreman', "The Pit-Boss's Office",
      `A cramped rock office where the pit-boss keeps the quotas, the tallies, and ` +
      `the grim little ledger of who has gone down and not come up. She is a ` +
      `mine-clan Twi'lek of the old hard kind, loyal to her crews before the ` +
      `guild, and she carries the whole map of the workings in her head and a ` +
      `long, silent fury at the price the pale dust exacts from her people.`);
    room('ryl_mine_pumps', 'The Bellows Gallery',
      `A gallery of the great hand-and-machine bellows that force what breathable ` +
      `air there is down to the deep faces, worked in shifts by the crews too ` +
      `broken to cut. When the bellows stop, the faces suffocate; so the bellows ` +
      `do not stop, and their slow labouring wheeze is the heartbeat of the whole ` +
      `pale underworld.`);
    room('ryl_mine_catwalk', 'The Ore-Rail Catwalk',
      `A catwalk following the ore-rail out over a worked-out gulf, the old ` +
      `diggings falling away pale and ghostly below. The rail groans under its ` +
      `carts; the catwalk shudders; and far down in the pale dark, the ` +
      `abandoned lower faces wait, worked out and given back to the mountain and ` +
      `the things the mountain keeps.`);
    room('ryl_mine_crystal', 'The Ryll Grotto',
      `A pocket the digging opened into a natural grotto where ryll has grown in ` +
      `great pale crystal blooms, luminous and beautiful and worth a clan's ` +
      `fortune. The guild has claimed it and posted a guard; the mine-clan that ` +
      `found it has not been paid; and the grotto glows on, coldly, at the heart ` +
      `of a quarrel that will, everyone knows, end in blood.`);
    room('ryl_mine_deep', 'The Lower Workings',
      `The deepest cut faces, hottest and foulest and richest, where the guild ` +
      `sends the crews it can most afford to lose after the finest pale spice. ` +
      `The heat of the world's fire is close here, seeping up through the rock; ` +
      `the dust is thickest; and the miners who work the lower workings do not, ` +
      `as a rule, grow old.`);
    room('ryl_mine_sublevel', 'The Flooded Diggings',
      `A worked-out lower level given back to the hot seep-water, pale spice-scum ` +
      `floating on the black, the roof pressing low. The guild abandoned it; the ` +
      `mountain reclaimed it; and something, the crews say, has moved into it, ` +
      `drawn up from the deep dark by the warmth and the quiet.`);
    room('ryl_mine_cavein', 'The Fall',
      `A tunnel choked to the roof by a collapse, shored, abandoned, and — the ` +
      `tally-slate says, and the crews will not — with a crew behind it still. A ` +
      `single lantern burns before the fall, and the miners have made it a shrine, ` +
      `and no crew will cut within earshot of the place where their kin lie ` +
      `sealed in the pale dark.`);
    room('ryl_mine_lift', 'The Ore Lift',
      `A brutal ore-lift of salvaged cable and stubborn Rylothi engineering, ` +
      `hauling the pale wealth up and the pale-lunged crews down. It groans, it ` +
      `sways, it is older than anyone who rides it, and it is maintained with the ` +
      `desperate perfection of people who have already buried too many to the ` +
      `alternative.`);
    // EXPANSION: ryl_mine_seam stubs onto the workings' unbuilt lower faces.
    room('ryl_mine_seam', 'The Sealed Diggings',
      `The flooded diggings end at a face the guild sealed and struck from the ` +
      `tallies — too rich, the miners mutter, and too deadly, and given up to the ` +
      `hot dark and whatever came up out of it. The seal is old, and the black ` +
      `water laps against it, and what lies beyond is not yet dug for you to ` +
      `reach.`);

    link('ryl_mine_gate', 'w', 'ryl_mine_hub');
    link('ryl_mine_hub', 'n', 'ryl_mine_tunnel');
    link('ryl_mine_hub', 'w', 'ryl_mine_refinery');
    link('ryl_mine_hub', 'ne', 'ryl_mine_ore');
    link('ryl_mine_hub', 'nw', 'ryl_mine_foreman');
    link('ryl_mine_hub', 's', 'ryl_mine_pumps');
    link('ryl_mine_hub', 'sw', 'ryl_mine_richvein');
    link('ryl_mine_hub', 'd', 'ryl_mine_deep');
    link('ryl_mine_tunnel', 'n', 'ryl_mine_drill');
    link('ryl_mine_tunnel', 'e', 'ryl_mine_crystal');
    link('ryl_mine_ore', 'e', 'ryl_mine_gaswell');
    link('ryl_mine_refinery', 's', 'ryl_mine_vent');
    link('ryl_mine_refinery', 'n', 'ryl_mine_catwalk');
    link('ryl_mine_catwalk', 'e', 'ryl_mine_lift');
    link('ryl_mine_deep', 'd', 'ryl_mine_sublevel');
    link('ryl_mine_sublevel', 'e', 'ryl_mine_seam');
    link('ryl_mine_pumps', 's', 'ryl_mine_cavein');
    // Kala'uun -> Ryll Mines.
    link('ryl_city_mineway', 'w', 'ryl_mine_gate');

    /* ================================================================= *
     *  IV. THE HEAD-CLAN'S HOLD  (16) — the seat of clan power, and the
     *      hard bargains struck there.
     * ================================================================= */
    room('ryl_clan_gate', 'The Hold Gate',
      `The hold road ends at the great carved gate of the head-clan's seat, ` +
      `flanked by warriors in the ancestral armour of the ruling clan and hung ` +
      `with the banners of every clan that has sworn to it. The air past it is ` +
      `cooler and stiller, the light richer, the poverty of the city below ` +
      `carefully out of sight. Here the twilight world is ruled, and its terrible ` +
      `bargains made.`);
    room('ryl_clan_hall', 'The Hall of Banners',
      `A long rock-cut hall hung the whole of its length with clan-banners, each a ` +
      `woven history of alliance and feud and debt, where the business of the ` +
      `head-clan is conducted beneath the watching weave of the ancestors. The ` +
      `air is thick with incense and old grievance, and a stranger walking its ` +
      `length feels the weight of a thousand years of a people ruling themselves ` +
      `as best they can against a world determined they should not.`);
    room('ryl_clan_court', 'The Audience Cavern',
      `A pillared cavern where the head-clan receives supplicants, tribute, and ` +
      `the offworld powers that treat with Ryloth — spice-guild, slaver-cartel, ` +
      `and worse — from a dais of carved stone. It is a room of terrible ` +
      `politeness, where the fate of the powerless is decided over sweet tea by ` +
      `the powerful, and the word "regrettable" does more killing than any ` +
      `blade.`);
    room('ryl_clan_chambers', 'The Inner Chambers',
      `The private chambers of the head-clan's leader, richer than anything else ` +
      `on the world — offworld silk, cistern-fed fountains, the plunder of ` +
      `generations of rule. Here the leader who must, in the hall, wear the mask ` +
      `of a people's champion sits alone with the knowledge of the bargains that ` +
      `mask has bought, and the price, and who has paid it.`);
    room('ryl_clan_matriarch', "The Clan-Leader's Seat",
      `The seat of the head-clan's leader, a carved throne of mountain-stone ` +
      `beneath the oldest banner of all, from which the ruling clan governs what ` +
      `little of Ryloth can be governed. It is a chair no one sits in easily; to ` +
      `hold it is to choose, again and again, between the clan and the world, the ` +
      `powerful and the powerless, and to know that every choice damns someone, ` +
      `and that not choosing damns them all.`);
    room('ryl_clan_archives', 'The Clan Archives',
      `A rock-cut vault of the clan-records — the woven histories, the treaties, ` +
      `the debt-tallies, the long shameful ledger of the trade in kin — kept by ` +
      `an ancient archivist who knows where every body is buried because he filed ` +
      `the burying. The head-clan's power rests as much on these shelves as on ` +
      `any blade; who controls the record controls the feud.`);
    room('ryl_clan_guard', "The Warriors' Hall",
      `The muster-hall of the head-clan's warriors, hung with weapons and ` +
      `trophies, loud with the boasts of fighters who guard the Hold and enforce ` +
      `its word. They are proud, deadly, and bound by an honour-code as intricate ` +
      `as any lekku-script — and asked, too often, to enforce decisions that ` +
      `honour cannot square, and to do it anyway, for the clan.`);
    room('ryl_clan_quarters', "The Warriors' Quarters",
      `The living-caves of the head-clan's fighters, spare and disciplined, hung ` +
      `with each warrior's clan-weave and ancestral arms. The talk here is of ` +
      `feuds and storms and the old battles, and, in lower voices, of the ` +
      `bargains the Hold has struck of late, and the growing number of warriors ` +
      `who wonder what their honour is worth in a clan that sells its own.`);
    room('ryl_clan_cells', 'The Hold Cells',
      `Rock-cut cells beneath the Hold where the head-clan keeps its debtors, its ` +
      `rivals, and — the thing no one in the Hall of Banners will name — those ` +
      `marked for "clan-transfer", the kin the next bargain will hand to the ` +
      `slavers. The cells are clean and quiet and terrible, and the warriors who ` +
      `guard them have learned, mostly, not to look through the bars.`);
    room('ryl_clan_dancers', 'The Hall of Grace',
      `A cavern of cushions and coloured light where the head-clan keeps its ` +
      `dancers — the pride of Ryloth's art and, too often, the first of its ` +
      `daughters the powerful spend. Their grace is genuine and their training ` +
      `lifelong, and their freedom is a careful fiction, and they dance the old ` +
      `beautiful dances knowing exactly how thin the line is between honoured and ` +
      `owned.`);
    room('ryl_clan_terrace', 'The Hold Terrace',
      `A high terrace of the Hold, cistern-cooled and lantern-lit, looking down ` +
      `over the whole cave-city and its griefs from a comfortable distance. Here ` +
      `the head-clan takes the twilight air and the long view, and the city below ` +
      `is small enough, from up here, to be thought of in the abstract — as ` +
      `tribute, as tally, as a problem to be managed rather than a people to be ` +
      `served.`);
    room('ryl_clan_kitchen', 'The Hold Kitchens',
      `Busy kitchens laboring to feed the head-clan and its warriors on a fare the ` +
      `city below could not dream of — offworld delicacies, real meat, water ` +
      `spent freely on the cooking. The staff are clan-poor and Hold-fed, and they ` +
      `see everything the Hold would rather not be seen, and they keep it, for ` +
      `now, behind the same careful silence as everyone else who serves here.`);
    room('ryl_clan_treasury', 'The Clan Treasury',
      `A guarded rock-cut vault of the head-clan's wealth — offworld coin, ryll ` +
      `laid by against the lean cycles, the jewelled trophies of old alliances, ` +
      `and the grim ledgers that record, cycle by cycle, exactly what the trade ` +
      `in kin has bought the ruling clan. It is the material weight behind every ` +
      `polite word spoken in the Audience Cavern above, and it is counted, and ` +
      `guarded, more carefully than any life on the world.`);
    room('ryl_clan_granary', 'The Hold Stores',
      `The deep storerooms of the head-clan — grain, water, ryll, and the wealth ` +
      `in offworld goods the Hold's bargains have bought, hoarded against the bad ` +
      `years and the feuds. It is the material root of the head-clan's power: in a ` +
      `world of thirst and want, they who hold the stores hold the clans, and the ` +
      `Hold holds the stores.`);
    room('ryl_clan_shrine', 'The Ancestral Shrine',
      `The private shrine of the head-clan, its spiral of ruling-clan names ` +
      `winding back to the founder who first united the mountain's clans against ` +
      `the killing world. The living leaders come to swear before it, and to ask ` +
      `the founders' forgiveness for the bargains rule requires — a forgiveness ` +
      `the carved names, winding silent into the dark, have never once been known ` +
      `to give.`);
    // EXPANSION: ryl_clan_seam stubs onto the Hold's unbuilt inner depths.
    room('ryl_clan_seam', 'The Sealed Vault',
      `A sealed inner vault beyond the archives, its door graven with a warning in ` +
      `the oldest lekku-script, behind which the head-clan keeps the secrets even ` +
      `the archivist may not file. It does not open for you. What the ruling clan ` +
      `hides there is not yet built for you to learn.`);

    link('ryl_clan_gate', 'e', 'ryl_clan_hall');
    link('ryl_clan_hall', 'n', 'ryl_clan_court');
    link('ryl_clan_court', 'e', 'ryl_clan_treasury');
    link('ryl_clan_hall', 'e', 'ryl_clan_guard');
    link('ryl_clan_hall', 's', 'ryl_clan_kitchen');
    link('ryl_clan_hall', 'ne', 'ryl_clan_dancers');
    link('ryl_clan_hall', 'nw', 'ryl_clan_archives');
    link('ryl_clan_court', 'n', 'ryl_clan_chambers');
    link('ryl_clan_chambers', 'n', 'ryl_clan_matriarch');
    link('ryl_clan_guard', 'e', 'ryl_clan_quarters');
    link('ryl_clan_quarters', 'e', 'ryl_clan_cells');
    link('ryl_clan_archives', 'w', 'ryl_clan_shrine');
    link('ryl_clan_dancers', 'n', 'ryl_clan_terrace');
    link('ryl_clan_matriarch', 'e', 'ryl_clan_granary');
    link('ryl_clan_granary', 'e', 'ryl_clan_seam');
    link('ryl_clan_kitchen', 's', 'ryl_clan_shrine');
    // Kala'uun -> Head-Clan's Hold.
    link('ryl_city_clanway', 'e', 'ryl_clan_gate');

    /* ================================================================= *
     *  V. THE BRIGHT LANDS  (18) — the storm-scoured surface, the killing
     *     day beyond the sun-gate.
     * ================================================================= */
    room('ryl_waste_gate', 'The Sun-Gate',
      `The sun-gate road ends at the great shutter that seals the mountain from ` +
      `the surface, and here, in the deep of the wandering twilight, it stands ` +
      `open. Beyond it the outer world begins: a blast of dry heat, a glare that ` +
      `stings even filtered, and the vast, terrible, beautiful expanse of the ` +
      `Bright Lands, over which a soul may cross — in the twilight's brief mercy — ` +
      `to the clans and mines beyond, if the storms and the beasts allow.`);
    room('ryl_waste_ridge', 'The Mountain Shoulder',
      `A broad shelf of scoured rock on the mountain's outer flank, the first ` +
      `foothold of the surface, swept by a hot dry wind and littered with the ` +
      `glass the storms make of sand. From here the Bright Lands roll away to a ` +
      `shimmering horizon under a bruise-coloured sky, and the twin sun sits low ` +
      `and vast and pitiless, and the whole reason the Twi'leks live in the rock ` +
      `is written plain across the burning world.`);
    room('ryl_waste_causeway', 'The Twilight Track',
      `A marked track winding across the scoured highland in the narrow band of ` +
      `bearable air the wandering twilight allows, cairned by generations of ` +
      `crossers. To walk it is to race the world's slow turning: linger, and the ` +
      `killing day catches you; hurry, and the heat-storms do. The Twi'leks have ` +
      `crossed it for ten thousand years, and marked it with their dead.`);
    room('ryl_waste_bridge', 'The Plasma Bridge',
      `A marvel out of a kinder age: a span of shaped energy leaping a vast ` +
      `chasm, humming and translucent, raised by the ancestors to link the ` +
      `mountain to the plateau-city beyond and maintained, barely, ever since. It ` +
      `is the road to Lessu and the far clans, and it is failing, flickering now ` +
      `and then in a way that stops the heart of anyone crossing, and no one now ` +
      `alive quite remembers how it was made.`);
    room('ryl_waste_overlook', 'The Chasm Overlook',
      `A dizzy point at the plasma bridge's near end, looking down into a chasm so ` +
      `deep the heat-haze fills it like water and across at the far plateau where, ` +
      `distant and shimmering, the towers of another clan-city catch the low sun. ` +
      `The wind moans in the chasm; the bridge hums; and the vast, harsh, ` +
      `sun-hammered scale of Ryloth lies open, for once, to the eye.`);
    room('ryl_waste_canyon', 'The Glass Canyon',
      `A canyon cut by ten thousand years of storm, its walls fused to a black ` +
      `glass that throws the heat back doubled, its floor a treacherous glitter of ` +
      `wind-sculpted shards. It is a killing place at high day and merely a deadly ` +
      `one at twilight, and the crossers hurry through it with their veils drawn ` +
      `and their eyes down against the glare.`);
    room('ryl_waste_chasm', 'The Deep Chasm',
      `A great rift in the burning land, breathing up a strange cool from a dark ` +
      `the sun has never touched, its walls pocked with cave-mouths where things ` +
      `shelter from the day. The Twi'leks give it a wide berth; more than heat ` +
      `lives in the Bright Lands, and the chasm-caves are where the worst of it ` +
      `waits out the killing sun.`);
    room('ryl_waste_lyleknest', 'The Lylek Nest',
      `A fouled hollow beneath an overhang, littered with the chitin-shards and ` +
      `picked bones of a lylek's kills — for here one of the Bright Lands' great ` +
      `armoured predators has made its den. The Twi'leks hunt the lylek for its ` +
      `nectar and its plates and fear it for everything else; something vast and ` +
      `many-legged stirs in the shadow at the back, and turns its eyeless head ` +
      `toward the scrape of your boot.`);
    room('ryl_waste_cave', 'The Shelter Cave',
      `A cave-mouth in the mountain's flank where crossers shelter from the storms ` +
      `and the day, its walls black with the smoke of ten thousand fires and ` +
      `carved with the marks and prayers of those who waited here for the twilight ` +
      `to come round. Some of the marks are very old. Some are unfinished, in a ` +
      `hand that stopped.`);
    room('ryl_waste_caravan', 'The Caravan Camp',
      `A muster-camp where the storm-caravans form up to cross the Bright Lands — ` +
      `beasts of burden, water-carts, guides who read the sky and the sand, and ` +
      `the travellers brave or desperate enough to trust them. The camp is a knot ` +
      `of fierce Rylothi hospitality and fiercer haggling, and the guides' word on ` +
      `when to cross is law, for the guides' word is the difference between the ` +
      `far city and a shrivelled death on the glass.`);
    room('ryl_waste_outpost', 'The Warden Outpost',
      `A rock-cut outpost of clan-wardens watching the surface approaches, their ` +
      `scopes trained on the shimmering distance for storms, beasts, and the ` +
      `slaver-raiders who strike out of the Bright Lands at the lonely and the ` +
      `unwary. They are too few for the ground they hold, and they know it, and ` +
      `they hold it anyway, because behind them is the city, and their kin.`);
    room('ryl_waste_well', 'The Deep Well',
      `A precious surface well, sunk by the ancestors to a deep cold aquifer, ` +
      `walled and guarded and rationed drop by drop — the one water in a day's ` +
      `crossing, and so the one thing in the Bright Lands more fought-over than ` +
      `ryll. Whoever holds the well holds the crossing, and the well changes ` +
      `hands, down the centuries, in blood.`);
    room('ryl_waste_tower', 'The Storm-Watch Tower',
      `A slender rock-cut tower on the ridge, from which the storm-watchers read ` +
      `the sky for the heat-storms that boil up out of the Bright Lands without ` +
      `warning and scour the surface clean. When the watch-horn sounds from here, ` +
      `the crossers run for the caves and the caravans halt where they stand, for ` +
      `a heat-storm caught in the open leaves nothing to bury.`);
    room('ryl_waste_storm', "The Storm's Edge",
      `The trailing edge of a passing heat-storm, the air still shrieking with ` +
      `grit and heat, the ground newly-scoured and steaming, the light a hellish ` +
      `ochre murk. To be caught here is very nearly death; to stand at the storm's ` +
      `receding edge and live is to understand, in the body and not the mind, ` +
      `exactly what Ryloth is and why its people grieve.`);
    room('ryl_waste_ruin', 'The Sun-Bleached Ruin',
      `The wind-scoured ruin of an old surface settlement, from a age when some ` +
      `clan gambled on living in the open and lost — the roofless walls sand- ` +
      `blasted to stubs, the wells long dry, the whole hopeful folly given back to ` +
      `the storms. The Twi'leks point to it to teach the young a lesson the world ` +
      `never stops repeating: on Ryloth, the surface takes everything, in the end.`);
    room('ryl_waste_flats', 'The Open Flats',
      `A stretch of open Bright Lands below the mountain shoulder, a glass-flat ` +
      `expanse of fused sand where the heat stands in visible pillars and the ` +
      `only shade is the shadow you cast. Nothing grows here, nothing stays here, ` +
      `and a soul crossing it in the twilight's mercy keeps one eye always on the ` +
      `storm-tower behind, for the flats are where the heat-storms do their ` +
      `killing, and there is nowhere on them to hide.`);
    room('ryl_waste_path', 'The Far Track',
      `A cairned track striking out across the Bright Lands toward the distant ` +
      `clans and the far mines, dwindling into the shimmering heat-haze of a world ` +
      `that goes on, harsh and vast and mostly unmapped, far beyond this one ` +
      `mountain's shelter. The way is open; the world is wide; and almost none of ` +
      `it, yet, is safe to walk.`);
    // EXPANSION: ryl_waste_deepwaste stubs onto the unbuilt wider Ryloth.
    room('ryl_waste_deepwaste', 'The Edge of the Bright Lands',
      `The far track gives out at the true edge of the known — where the cairns ` +
      `stop, the guides turn back, and the vast burning immensity of the rest of ` +
      `Ryloth begins: the far clans, the plateau-cities, the deep deserts and the ` +
      `frozen dark beyond the day, a whole world of grief and grandeur stretching ` +
      `on past all charting. There is no way further, yet. It waits, unbuilt, ` +
      `beyond the shimmering line.`);

    link('ryl_waste_gate', 'u', 'ryl_waste_ridge');
    link('ryl_waste_ridge', 'n', 'ryl_waste_causeway');
    link('ryl_waste_ridge', 'e', 'ryl_waste_canyon');
    link('ryl_waste_ridge', 'w', 'ryl_waste_outpost');
    link('ryl_waste_ridge', 'ne', 'ryl_waste_tower');
    link('ryl_waste_ridge', 'nw', 'ryl_waste_cave');
    link('ryl_waste_ridge', 's', 'ryl_waste_flats');
    link('ryl_waste_ridge', 'se', 'ryl_waste_caravan');
    link('ryl_waste_causeway', 'n', 'ryl_waste_bridge');
    link('ryl_waste_canyon', 'e', 'ryl_waste_chasm');
    link('ryl_waste_outpost', 'w', 'ryl_waste_well');
    link('ryl_waste_tower', 'u', 'ryl_waste_storm');
    link('ryl_waste_caravan', 's', 'ryl_waste_path');
    link('ryl_waste_path', 's', 'ryl_waste_deepwaste');
    link('ryl_waste_cave', 'e', 'ryl_waste_lyleknest');
    link('ryl_waste_bridge', 'n', 'ryl_waste_overlook');
    link('ryl_waste_chasm', 's', 'ryl_waste_ruin');
    // Kala'uun -> Bright Lands (up to the surface).
    link('ryl_city_wasteway', 'u', 'ryl_waste_gate');

    /* ================================================================= *
     *  Inhabitants — a light population for now; the world is to be peopled
     *  further as its far clans and deserts are built out.
     * ================================================================= */

    // --- Bonus gear ---
    R.ryl_port_outfitter.add(world.item({
      name: 'Rylothi heat-cloak',
      keywords: ['heat-cloak', 'cloak', 'robe', 'rylothi'],
      short: 'A wide Rylothi heat-cloak hangs on the outfitter\'s rack.',
      description:
        'A wide, layered cloak of reflective clan-weave, cut to turn the killing ' +
        'sun and the storm-grit both, and proof, besides, against a glancing ' +
        'blade. It has saved more lives on the Bright Lands than any medicine, ' +
        'and wears its old scorches like a testament.',
      weight: 3,
      armor: 3,
    }));
    R.ryl_mine_foreman.add(world.item({
      name: 'miner\'s ryll-pick',
      keywords: ['ryll-pick', 'pick', 'pickaxe', 'tool'],
      short: 'A well-worn ryll-pick leans against the pit-boss\'s desk.',
      description:
        'A heavy, spike-headed pick worn smooth by years of cutting pale spice ' +
        'from hard rock, its haft dark with the sweat of many hands. It swings ' +
        'as readily at a threat as at a seam, and has, in the mine\'s bad years, ' +
        'done both.',
      weight: 5,
      damage: [5, 9],
      accuracy: 1,
    }));

    // --- Folk to talk to ---
    R.ryl_port_outfitter.add(world.mob({
      name: 'old crosser',
      keywords: ['crosser', 'twilek', 'twi\'lek', 'woman', 'outfitter'],
      short: 'A scarred old Twi\'lek woman minds the storm-gear, watching you.',
      description:
        'A weather-scarred Twi\'lek of great age and greater experience, her lekku ' +
        'seamed with old storm-burns, who has crossed the Bright Lands more times ' +
        'than she can count and outfitted a great many who crossed them once. She ' +
        'reads a newcomer the way she reads the sky.',
      xp: 0,
      dialogue:
        'Off the Coruscant ship, are you, and soft with it. Listen, and live: on ' +
        'Ryloth the day kills, the storms kill, the lyleks kill, and the slavers ' +
        '— may the ancestors rot them — take what the world leaves. We are a ' +
        'kind people on a cruel world, offworlder. We will give you our last ' +
        'water. But watch the berth by the docks, and the road to the Hold, and ' +
        'do not, whatever coin they offer, buy a soul on this world. Some of us ' +
        'still remember what we are.',
    }));
    R.ryl_city_music.add(world.mob({
      name: 'Twi\'lek singer',
      keywords: ['singer', 'twilek', 'twi\'lek', 'musician'],
      short: 'A Twi\'lek singer rests between songs, lekku curled in thought.',
      description:
        'A singer of the House of Song, voice worn sweet by the old aching ballads ' +
        'of the clans, lekku moving in the silent counterpoint that is half of ' +
        'Twi\'lek music. There is a whole world\'s grief and a whole world\'s ' +
        'stubborn joy in the way they hold a note.',
      xp: 0,
      dialogue:
        'You hear it? That is the Lament of the Taken — for the ones the slavers ' +
        'carried off, and the ones our own clans sold to buy a quiet year. We ' +
        'sing it so the galaxy cannot say it did not know. They took our people ' +
        'to dance in their palaces and never once heard what the dancing was ' +
        'about. But you are listening. That is a start, offworlder. That is a ' +
        'start.',
    }));

    // --- Hostiles ---
    R.ryl_port_berth.add(world.mob({
      name: 'slaver enforcer',
      keywords: ['slaver', 'enforcer', 'raider'],
      short: 'A slaver enforcer blocks the berth, hand on his blaster, grinning.',
      description:
        'A hard offworld thug in the pay of the slaver-cartel, armed and armoured ' +
        'and entirely without shame, who guards the loading of the living cargo ' +
        'and deals with anyone who takes an unhealthy interest in it. He has ' +
        'decided you are taking one.',
      hostile: true,
      level: 4,
      maxHp: 40,
      stats: { str: 15, dex: 13, con: 14, int: 9 },
      damage: [4, 8],
      armor: 2,
      xp: 120,
      respawns: 110,
    }));
    R.ryl_mine_sublevel.add(world.mob({
      name: 'gutkurr',
      keywords: ['gutkurr', 'beast', 'insect', 'predator'],
      short: 'A chittering gutkurr scuttles from the flooded dark, mandibles wide.',
      description:
        'A chitin-plated pack-predator of Ryloth\'s deep places, low and fast and ' +
        'armoured, all scything mandible and hooked leg, that has crept up into ' +
        'the flooded diggings from the caverns below. Where there is one gutkurr ' +
        'there are usually more, and they are always, always hungry.',
      hostile: true,
      level: 4,
      maxHp: 38,
      stats: { str: 14, dex: 15, con: 13, int: 4 },
      damage: [4, 9],
      armor: 2,
      xp: 115,
      respawns: 110,
    }));
    R.ryl_waste_lyleknest.add(world.mob({
      name: 'lylek',
      keywords: ['lylek', 'beast', 'predator'],
      short: 'A lylek rears from the nest, armoured and many-legged and vast.',
      description:
        'One of the great armoured predators of the Bright Lands: a vast, ' +
        'many-legged horror of interlocking chitin plates and whipping tentacles ' +
        'about a fanged maw, near-blind and near-unkillable, that rules the ' +
        'surface the way the sun does — absolutely. The Twi\'leks hunt it for its ' +
        'nectar, in numbers, and bury those the hunt costs. Alone, against one, ' +
        'you are simply prey.',
      hostile: true,
      level: 7,
      maxHp: 66,
      stats: { str: 19, dex: 12, con: 18, int: 4 },
      damage: [7, 12],
      armor: 4,
      xp: 260,
      respawns: 180,
    }));

    return {
      area: ryloth,
      arrivalId: 'ryl_port_arrival',    // where the Coruscant transit lands
      returnId: 'ryl_port_concourse',   // where the transit back to Coruscant is
    };
  };
})(typeof window !== 'undefined' ? window : this);
