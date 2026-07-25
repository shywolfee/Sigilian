/*
 * corellia.js — CORELLIA, the shipwright of the galaxy; Coronet City and its
 * coast, in the last years of the Republic.
 *
 * A 200-room area, and a whole one — Coronet City entire, from its spaceport to
 * its shipyards to the gold beaches and the green hinterland beyond, with the
 * old drowned city and the Selonian tunnels running beneath it all. Corellia is
 * a world that rewards a heavy hand with the lore, so this file does not stint.
 *
 * Corellia is a Core World that has never quite believed it. Eldest of the Five
 * Brothers — the five inhabited worlds of the Corellian system, which the ancient
 * mystery of Centerpoint Station is said to have dragged together across the
 * dark in some unrecorded age — it is human Corellia's boast and burden to have
 * built half the ships in the galaxy and bent the knee to no one while doing it.
 * The Corellian Engineering Corporation lays the keels of the YT freighters and
 * the CR90 corvettes that carry the trade and the wars of a thousand systems;
 * the Corellian Run and the Corellian Trade Spine, two of the great hyperlanes,
 * spring from its docks; and its people — spacers, shipwrights, smugglers,
 * gamblers, and the green-caped Jedi of its own stubborn tradition — hold, as an
 * article of faith, that a Corellian makes their own luck.
 *
 * It is a world of hard contrasts worn without apology: the grimy shipyard slums
 * of Blue Sector and the gold beaches an hour down the coast; the cosmopolitan
 * roar of Treasure Ship Row and the pastoral quiet of the hinterland vineyards;
 * the proud civic order of CorSec and the cheerful lawlessness of the spacer
 * cantinas; and, beneath everything, the old city and the tunnels, where the
 * Selonians keep to themselves and the deepest questions about the Five Brothers
 * wait, patiently, in the dark.
 *
 * You reach it by transit from Coruscant, set down at Coronet Spaceport; a
 * terminal there books the ride back to the Core.
 *
 * Content, not framework. Populated into the shared World by world-data.js,
 * which wires the cross-world transit.
 *
 * LAYOUT (districts):
 *   cor_port_*    Coronet Spaceport ......................... 22   ARRIVE
 *   cor_row_*     Treasure Ship Row (the great bazaar) ....... 22
 *   cor_civic_*   Coronet City Centre (government & CorSec) .. 22
 *   cor_yard_*    The CEC Shipyards .......................... 24
 *   cor_blue_*    Blue Sector (the shipyard slum) ............ 22
 *   cor_spacer_*  The Spacer's Quarter ...................... 18
 *   cor_green_*   The Green Jedi Enclave .................... 16
 *   cor_coast_*   The Gold Coast ............................ 20
 *   cor_farm_*    The Corellian Hinterland ................. 18
 *   cor_old_*     The Old Quarter & the Undertunnels ........ 16
 *                                                             ---
 *                                                             200
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildCorellia = function buildCorellia(ctx) {
    const { world, R, room, link } = ctx;

    const corellia = world.area({
      id: 'corellia',
      name: 'Corellia, the Shipwright of the Stars',
      description:
        'Eldest of the Five Brothers and the shipyard of the galaxy: Coronet ' +
        'City and its coast, proud, independent, and built of spacers and steel.',
    });

    /* ================================================================= *
     *  I. CORONET SPACEPORT  (22) — the world's front door, loud with the
     *     comings and goings of a people who never sit still.
     * ================================================================= */
    room('cor_port_concourse', 'The Coronet Spaceport Concourse',
      `You step off the transit into the cheerful bedlam of Coronet Spaceport, ` +
      `a long sun-filled hall of scuffed permacrete where half the galaxy seems ` +
      `to be arriving, leaving, or arguing about the fare. Corellians move fast ` +
      `and talk faster, and over it all hangs the smell that means home to every ` +
      `spacer alive: hot metal, spent fuel, caf, and the sea. A transit terminal ` +
      `against the wall books the long haul back to Coruscant, for those who have ` +
      `business with the Core.`);
    room('cor_port_arrival', 'The Arrivals Hall',
      `The gate where the offworld shuttle set you down, a bright churn of ` +
      `reunions and touts and hover-porters, the walls plastered with holo-ads ` +
      `for CEC staryachts and Coronet's beaches and, smaller and grimmer, CorSec ` +
      `notices about the things a stranger ought not to try on Corellia. A ` +
      `Corellian welcome, someone has scrawled beneath one of them, is warmer ` +
      `than it looks and sharper than it sounds.`);
    room('cor_port_gate', 'The Row Gate',
      `The eastern doors of the spaceport, opening on the perpetual carnival of ` +
      `Treasure Ship Row — a wall of noise, colour, and cooking-smoke rolling in ` +
      `to meet you the moment they slide apart. Every second soul coming through ` +
      `is a hawker, and every one of them has, they swear, exactly the thing you ` +
      `did not know you needed.`);
    room('cor_port_downtowngate', 'The Downtown Gate',
      `A broad thoroughfare-mouth leading in toward the civic heart of Coronet, ` +
      `where the permacrete gives way to dressed stone and the crowd thins to the ` +
      `purposeful. A CorSec officer directs traffic with weary competence, and ` +
      `the towers of the city centre stand pale and proud in the sea-light ` +
      `beyond.`);
    room('cor_port_customs', 'The Customs Hall',
      `A hall of scanning-arches and CorSec inspectors who work with the brisk, ` +
      `unbribable efficiency that is Corellia's quiet point of pride — for whatever ` +
      `else it is, CorSec is honest, and a smuggler learns fast that Coronet is a ` +
      `port to be clever in, not careless. The queue moves quickly. The officers ` +
      `miss nothing.`);
    room('cor_port_checkpoint', 'The Security Checkpoint',
      `A checkpoint where the spaceport's public bustle gives way to the secured ` +
      `docks beyond, manned by CorSec troopers in their green-trimmed grey. They ` +
      `are courteous, sharp-eyed, and entirely serious, and they have turned back ` +
      `at this line more trouble than the rest of the port will ever see.`);
    room('cor_port_control', 'The Traffic Control Tower',
      `The glass crown of the spaceport, where controllers thread Coronet's ` +
      `ferocious traffic — for a Corellian would sooner crash than yield the ` +
      `right of way — through their lanes by nerve and long practice. The board ` +
      `is a blizzard of light: freighters, yachts, corvettes fresh off the ways, ` +
      `all of them piloted, it sometimes seems, by someone in a hurry.`);
    room('cor_port_impound', 'The Impound Yard',
      `A caged yard of ships and cargo held against unpaid fees or failed ` +
      `inspections, watched by a bored droid and a bored officer. CorSec runs it ` +
      `straight, which on Corellia counts as a marvel; the ships in here were ` +
      `impounded for cause, and released, when they are, for cash and a signature ` +
      `and a warning.`);
    room('cor_port_market', 'The Concourse Market',
      `A scrum of kiosks selling the traveller's usual and the Corellian ` +
      `particular — ration-packs and translator-chips beside model YT-freighters, ` +
      `bloodstripe pins, and flasks of the fierce Corellian whiskey that every ` +
      `hawker swears is the real Whyren's Reserve and none of them can prove. The ` +
      `patter is relentless and half of it is true.`);
    room('cor_port_taxi', 'The Aircab Rank',
      `A jostling rank of battered yellow aircabs and their impatient drivers, ` +
      `ready to run you anywhere in Coronet at a speed that tests the faith. ` +
      `Corellian cabbies drive the way Corellians do everything — fast, well, and ` +
      `with a running commentary — and a ride across town is an education in the ` +
      `city, if you can keep your eyes open for it.`);
    room('cor_port_docks', 'The Docking Bays',
      `A long gallery of docking bays where the freighters put in, ramps down, ` +
      `crews swarming the hulls, the air ringing with impact-tools and Corellian ` +
      `swearing. Half the ships here are YT-series hulls of one mark or another, ` +
      `the honest workhorses CEC has sold the galaxy for a century, patched and ` +
      `modified past their makers' dreams.`);
    room('cor_port_berth', 'Docking Bay 3-C',
      `A round permacrete berth where a light freighter crouches on her struts, ` +
      `venting coolant, her hull a palimpsest of a dozen worlds' repairs and one ` +
      `owner's ambitions. Her crew are somewhere in the Row spending what they ` +
      `have not yet earned, and her cargo, by the manifest and the smell, is not ` +
      `entirely what the manifest says.`);
    room('cor_port_hangar', 'The Long-Haul Hangar',
      `A cavernous hangar for the big hulls — bulk-freighters and the occasional ` +
      `gleaming CR90 corvette in for a refit — where gantry-cranes crawl the roof ` +
      `and sparks rain from the scaffolds. It is a small cousin of the great ` +
      `shipyards up the coast, and it never, day or night, falls quiet.`);
    room('cor_port_fuel', 'The Fuel Depot',
      `A yard of hypermatter tanks and pressure-pipe, the strobes painting ` +
      `everything a nervous amber, where the ships top off for the long runs down ` +
      `the Corellian Run and the Trade Spine. The fuel-crews move deliberately and ` +
      `speak softly, as fuel-crews everywhere have learned to.`);
    room('cor_port_cantina', 'The Spaceport Cantina',
      `A dim, welcoming dive off the concourse where crews between ships drink and ` +
      `deal and lie about their runs, a band murdering a spacer's ballad in the ` +
      `corner. It is the port's true heart, loud and shrewd and generous, and a ` +
      `newcomer who buys a round learns more here in an hour than in a week of ` +
      `asking straight.`);
    room('cor_port_flop', 'The Portside Flophouse',
      `A warren of rented bunk-cubicles for crews laid over and spacers between ` +
      `berths, cheap and clean-ish and loud with a dozen worlds' snoring. The ` +
      `manager keeps a scattergun and a ledger and a soft spot for a hard-luck ` +
      `story, in roughly that order.`);
    room('cor_port_lounge', "The Pilots' Lounge",
      `A worn but comfortable lounge for the freighter-jocks and courier-pilots ` +
      `who are Coronet's aristocracy of skill, its walls thick with squadron ` +
      `patches, run-records, and the holos of the famous and the dead. The talk ` +
      `is all vectors and cargoes and near things, and to sit in a corner and ` +
      `listen is to hear the galaxy's trade told as a series of very close ` +
      `calls.`);
    room('cor_port_gallery', 'The Observation Gallery',
      `A glass gallery over the launch-aprons, where travellers watch the ships ` +
      `rise on blue thrust into a sky the particular soft gold of Corellia's sun. ` +
      `On a clear day you can see, far up the coast, the vast skeletal gantries of ` +
      `the CEC yards catching the light, and the sea beyond them, and the whole ` +
      `proud working heart of the world laid open.`);
    room('cor_port_lift', 'The Service Lift',
      `A broad freight-lift down to the spaceport's working underlevels, its cage ` +
      `scarred and its motion unhurried. Below the shine, the port shows its ` +
      `bones — and, the crews say, keeps a few things it would rather the ` +
      `passengers upstairs did not see.`);
    room('cor_port_sublevel', 'The Spaceport Underlevel',
      `A grease-black service level of conduit and cargo-tunnel beneath the ` +
      `aprons, where the droids and night-crews keep the port alive and the ` +
      `smugglers' quieter cargo sometimes changes hands. The daylight ends here; ` +
      `the real business, as ever on Corellia, is done a little below it.`);
    room('cor_port_medbay', "The Traveller's Medbay",
      `A clean white bay where a tireless med-droid patches the jet-lagged, the ` +
      `space-sick, and the occasional loser of a cantina argument. Most of its ` +
      `custom is honest misfortune; a little of it, by the blaster-scoring, is ` +
      `not, and the droid asks about none of it.`);
    room('cor_port_droidbay', 'The Droid Pool',
      `A charging-bay of hired droids waiting on their leases — labour-units, ` +
      `guide-droids, a scattering of protocol units offering to translate the ` +
      `sixteen dialects of Corellian impatience. A rust-red astromech near the ` +
      `door whistles a greeting to everyone who passes, from loneliness or ` +
      `sales-strategy or both.`);

    link('cor_port_concourse', 'sw', 'cor_port_arrival');
    link('cor_port_concourse', 'n', 'cor_port_gate');
    link('cor_port_concourse', 'e', 'cor_port_downtowngate');
    link('cor_port_concourse', 'ne', 'cor_port_customs');
    link('cor_port_concourse', 'w', 'cor_port_market');
    link('cor_port_concourse', 's', 'cor_port_cantina');
    link('cor_port_concourse', 'nw', 'cor_port_medbay');
    link('cor_port_concourse', 'se', 'cor_port_gallery');
    link('cor_port_customs', 'e', 'cor_port_checkpoint');
    link('cor_port_checkpoint', 'n', 'cor_port_control');
    link('cor_port_customs', 's', 'cor_port_impound');
    link('cor_port_market', 's', 'cor_port_docks');
    link('cor_port_market', 'w', 'cor_port_taxi');
    link('cor_port_docks', 's', 'cor_port_hangar');
    link('cor_port_docks', 'e', 'cor_port_berth');
    link('cor_port_hangar', 'w', 'cor_port_fuel');
    link('cor_port_cantina', 'e', 'cor_port_flop');
    link('cor_port_cantina', 's', 'cor_port_lounge');
    link('cor_port_gallery', 's', 'cor_port_lift');
    link('cor_port_lift', 'd', 'cor_port_sublevel');
    link('cor_port_medbay', 'w', 'cor_port_droidbay');

    /* ================================================================= *
     *  II. TREASURE SHIP ROW  (22) — the great cosmopolitan bazaar, the
     *      galaxy in a single riotous street.
     * ================================================================= */
    room('cor_row_gate', 'The Mouth of the Row',
      `The spaceport doors give onto Treasure Ship Row, and the Row takes you in ` +
      `like a tide: a broad, roofed, roaring bazaar-street running deep into the ` +
      `heart of Coronet, where the trade of a hundred worlds is bought, sold, ` +
      `and haggled over at the top of a dozen voices. The name is older than ` +
      `record, from the age of the sail-ships of space; the treasure still comes, ` +
      `and so do the ships.`);
    room('cor_row_plaza', 'The Grand Bazaar',
      `The seething heart of the Row, a plaza where a dozen alleys of trade meet ` +
      `beneath strung awnings and the drifting smoke of forty cuisines. Every ` +
      `species with a ship crosses here — Selonian and Drall from the Brother- ` +
      `worlds, Twi'lek and Rodian and Wookiee from beyond — and the Row makes ` +
      `room for them all, and takes a cut of them all, and would not know how to ` +
      `stop.`);
    room('cor_row_bazaar', 'The Deep Bazaar',
      `The Row narrows and deepens into a warren of older stalls, where the goods ` +
      `grow stranger and the sellers cannier — antiquities and oddities, charts ` +
      `to places that may not exist, relics of the Brother-worlds' unfathomable ` +
      `past. It is easy to get lost here, and easier to be sold something you ` +
      `will spend years understanding.`);
    room('cor_row_silkrow', 'Silk Row',
      `A lane of hanging cloth in every colour the galaxy dyes — Corellian weave ` +
      `and offworld silk, the bright bolts snapping like flags in the draught. ` +
      `The cloth-merchants are shrewd and courtly and related, most of them, to ` +
      `one another, and a bargain here is the opening move in a friendship or a ` +
      `feud.`);
    room('cor_row_arms', "The Armourers' Lane",
      `A lane of weaponsmiths and blaster-dealers, for Corellia has never been ` +
      `shy of arms, and the famous Corellian sidearms hang racked and gleaming ` +
      `for anyone with the credits and the licence — or, down the quieter end, ` +
      `without the licence. A smith test-fires into a scarred butt and nods to ` +
      `the newcomer, weighing them.`);
    room('cor_row_spicelane', 'Spice Lane',
      `A fragrant, dangerous lane of the spice-trade, the legal glid­ing into the ` +
      `illegal so gradually that no two Corellians agree where the line falls. ` +
      `Medicinal ryll and cooking-spice give way, stall by stall, to the stuff ` +
      `CorSec walks through with a hard eye, and the dealers read that eye like ` +
      `weather.`);
    room('cor_row_curios', 'The Curio Stalls',
      `A glittering huddle of stalls selling the Row's specialty — the small ` +
      `wonder, the odd relic, the thing-with-a-story. Half are junk dressed as ` +
      `treasure and half are treasure dressed as junk, and telling which is the ` +
      `whole sport of the Row, played for real money by people who have lost at ` +
      `it before.`);
    room('cor_row_exotic', 'The Exotic Market',
      `A raucous, reeking corner of caged and tanked creatures from across the ` +
      `Brother-worlds and beyond — luminous system-fish, Drall burrow-beasts, ` +
      `things that hiss and things that sing. The trade is half-legal at best, ` +
      `and a CorSec inspector drifts through it now and then, and the sellers ` +
      `develop, at his approach, a sudden interest in their more respectable ` +
      `stock.`);
    room('cor_row_foodstalls', 'The Food Stalls',
      `A glorious chaos of cook-stalls dishing the food of forty worlds off ` +
      `spitting grills, the Corellian sea-fry and the offworld strange side by ` +
      `side, the smoke a wall you push through hungry and come out the other side ` +
      `of hungrier. Spacers eat here standing, watching the crowd, mapping the ` +
      `Row by its smells.`);
    room('cor_row_cantina', 'The Treasure Ship Cantina',
      `A cavernous alien cantina where the Row does its drinking and its ` +
      `deniable business, a hundred species packed elbow to elbow under a haze of ` +
      `smoke and music. It is neutral ground by long custom; blood spilled here ` +
      `is bad for everyone's trade, and the Row polices that rule itself, ` +
      `quickly and without appeal.`);
    room('cor_row_teahouse', 'The Selonian Teahouse',
      `A quiet, low, fur-warm teahouse kept by Selonians from the Brother-world ` +
      `of Selonia — sleek, sinuous, tunnel-dwelling folk who trade in the Row and ` +
      `keep their own counsel utterly. The tea is strange and excellent, the ` +
      `hospitality grave, and the talk, if you earn it, turns to things the ` +
      `surface-folk of Corellia have forgotten to wonder about.`);
    room('cor_row_fence', "The Fence's Stall",
      `A cluttered stall whose respectable front hides the Row's premier fence, ` +
      `who will buy anything with a story too good to check and sell it on with a ` +
      `better one. He weighs your goods and your nerve in the same glance, pays a ` +
      `third of worth, and is haggled up to a half on principle by everyone, ` +
      `always.`);
    room('cor_row_moneychanger', 'The Money-Changer',
      `A grille-fronted booth where the currencies of a hundred worlds are ` +
      `weighed, tested, and changed into Corellian credits at a rate that is ` +
      `daylight robbery conducted with perfect courtesy. The changer trusts no ` +
      `coin and no face, and has, folded away, the true exchange-rate of every ` +
      `scandal on the Row.`);
    room('cor_row_auction', 'The Auction House',
      `A galleried hall where the Row's finest and most dubious goods go under ` +
      `the hammer — cargoes, ships, art, and the occasional lot whose provenance ` +
      `the auctioneer describes with a straight face and a raised reserve. The ` +
      `bidding is theatre and warfare both, and fortunes turn on it in an ` +
      `afternoon.`);
    room('cor_row_caravan', 'The Caravan Yard',
      `A muddy yard where the overland caravans form up to carry the Row's trade ` +
      `out to Coronet's hinterland and the far towns — Kor Vella, Bela Vistal, ` +
      `Tyrena, names that ring like a Corellian's homesickness. The drovers know ` +
      `roads the maps forget, and keep the knowing to themselves.`);
    room('cor_row_shrine', "The Wayfarers' Shrine",
      `A niche-shrine layered with the offerings of the Row's countless faiths — ` +
      `a spacer's charm, a coin, a scrap of prayer-cloth, a green ribbon for the ` +
      `Jedi of Corellia. The far-from-home pause here a moment before the Row ` +
      `swallows them again, and leave a little luck against the run ahead, for on ` +
      `Corellia luck is a thing you tend.`);
    room('cor_row_den', 'The Sabacc Den',
      `A smoke-blue den off the plaza where the Row's serious gambling is done, ` +
      `the sabacc-cards falling all day and all night, fortunes and ships and ` +
      `once, they still say, a moon changing hands across the felt. Corellians ` +
      `gamble the way they fly — for the joy of the edge — and the house, serene, ` +
      `takes its tithe of the joy.`);
    room('cor_row_alley', 'Cutpurse Alley',
      `A crooked slot off the gambling-den where the Row's lighter-fingered ply ` +
      `their trade on the winners and drown their losses, the light thin and the ` +
      `hands quick. A newcomer keeps a hand on their credits here, and the wise ` +
      `keep both, and the Row watches, amused, to see which kind you are.`);
    room('cor_row_backlane', 'The Back Lane',
      `A dim service-lane behind the stalls where the Row conducts what it would ` +
      `rather the plaza did not see — the quiet deal, the passed packet, the ` +
      `settling of a debt. It is not quite dangerous and not quite safe, which ` +
      `is the Row exactly, and it lets a soul slip unseen from one end of the ` +
      `bazaar to the other.`);
    room('cor_row_civicway', 'The Civic Way',
      `A broad, cleaner avenue where Treasure Ship Row gives way, gradually and ` +
      `with visible reluctance, to the ordered dignity of the city centre — the ` +
      `awnings thinning, the shouting fading, the pale civic towers rising ahead. ` +
      `A CorSec post marks the change, and the Row, on its best behaviour, flows ` +
      `respectably past.`);
    room('cor_row_blueway', 'The Blue Sector Cut',
      `A downhill cut where the Row frays toward the shipyard slums, the stalls ` +
      `growing poorer and harder, the crowd greyer, the first blue-grey haze of ` +
      `Blue Sector's smokestacks staining the sky ahead. The Row's writ thins ` +
      `here; past the cut, other laws run, and other gangs collect them.`);
    room('cor_row_spacerway', "The Spacers' Cut",
      `A lively side-street angling off toward the Spacer's Quarter, hung with ` +
      `the neon of cantinas and the promise of a good time on credit, the crowd ` +
      `thick with pilots, crews, and the people who prey on them. The music ` +
      `spills out to meet you; the Row lets its hair down this way.`);

    link('cor_row_gate', 'n', 'cor_row_plaza');
    link('cor_row_plaza', 'n', 'cor_row_bazaar');
    link('cor_row_plaza', 'e', 'cor_row_civicway');
    link('cor_row_plaza', 'w', 'cor_row_spacerway');
    link('cor_row_plaza', 'ne', 'cor_row_foodstalls');
    link('cor_row_plaza', 'nw', 'cor_row_shrine');
    link('cor_row_plaza', 'se', 'cor_row_den');
    link('cor_row_plaza', 'sw', 'cor_row_blueway');
    link('cor_row_bazaar', 'n', 'cor_row_silkrow');
    link('cor_row_bazaar', 'e', 'cor_row_arms');
    link('cor_row_bazaar', 'w', 'cor_row_spicelane');
    link('cor_row_bazaar', 'ne', 'cor_row_curios');
    link('cor_row_silkrow', 'n', 'cor_row_auction');
    link('cor_row_arms', 'e', 'cor_row_fence');
    link('cor_row_spicelane', 'w', 'cor_row_moneychanger');
    link('cor_row_curios', 'e', 'cor_row_exotic');
    link('cor_row_foodstalls', 'e', 'cor_row_cantina');
    link('cor_row_cantina', 'e', 'cor_row_teahouse');
    link('cor_row_shrine', 'w', 'cor_row_caravan');
    link('cor_row_den', 's', 'cor_row_alley');
    link('cor_row_alley', 'e', 'cor_row_backlane');
    // Spaceport -> Treasure Ship Row.
    link('cor_port_gate', 'n', 'cor_row_gate');

    /* ================================================================= *
     *  III. CORONET CITY CENTRE  (22) — the civic heart, where Corellia
     *       governs itself and CorSec keeps the peace.
     * ================================================================= */
    room('cor_civic_gate', 'The Civic Gate',
      `The downtown thoroughfare from the spaceport opens here into the ordered ` +
      `dignity of Coronet's city centre, all pale dressed stone and swept plazas ` +
      `after the carnival of the Row. It is a deliberate change of key: this is ` +
      `where Corellia is the Core World it half-forgets it is, and it wears the ` +
      `part, when it chooses, with real grace.`);
    room('cor_civic_plaza', 'Coronet Plaza',
      `The great civic plaza at the heart of the capital, a broad sunlit expanse ` +
      `of pale stone ringed by the towers of Corellian self-government, busy with ` +
      `citizens, functionaries, and the tram-lines that stitch the city together. ` +
      `At its centre stands the column that is Corellia's pride; from here the ` +
      `whole ordered world of Coronet radiates.`);
    room('cor_civic_plaza2', "The Merchants' Plaza",
      `A second plaza where the civic order meets the mercantile roar of the Row, ` +
      `lined with the guild-halls and counting-houses of Corellia's traders. Here ` +
      `the respectable face of the same commerce that riots down in the bazaar is ` +
      `conducted in quiet rooms over good caf, and the sums are larger, and the ` +
      `haggling no less fierce for being polite.`);
    room('cor_civic_rotunda', 'The Assembly Rotunda',
      `A domed rotunda where Corellia's fractious representatives meet to govern ` +
      `a people who resent, on principle, being governed at all. The debate is ` +
      `loud, personal, and endless, for a Corellian holds an opinion the way a ` +
      `spacer holds a grudge; and yet, somehow, the world is run from here, and ` +
      `run, on the whole, better than it admits.`);
    room('cor_civic_hall', 'The Hall of the Diktat',
      `The seat of the planetary executive — the Diktat, Corellia's chief ` +
      `magistrate, whose title is grander than the fierce independence of the ` +
      `people quite permits the office to be. The hall is austere and proud, hung ` +
      `with the banners of the Five Brothers, and the power exercised here is real ` +
      `but forever contested, which is precisely how Corellians like it.`);
    room('cor_civic_diktat', "The Diktat's Cabinet",
      `A panelled inner chamber where the true business of governing Corellia is ` +
      `done — the deals with CEC and the guilds, the quiet accommodations with ` +
      `the Republic the proud world would never make in public, the management of ` +
      `a system that is five worlds pretending to be one. The talk here is low ` +
      `and careful and touches, now and then, on Centerpoint, and on how much the ` +
      `Republic must never be allowed to learn.`);
    room('cor_civic_court', 'The Hall of Justice',
      `A grave, columned hall where Corellian law is administered — swiftly, and ` +
      `with a bluntness that shocks offworld advocates used to softer systems. ` +
      `CorSec brings them in; the magistrates judge them; and the whole ` +
      `proceeding runs on the Corellian conviction that justice, like piloting, ` +
      `is best done fast and without excessive ceremony.`);
    room('cor_civic_corsec', 'CorSec Headquarters',
      `The fortress-front of the Corellian Security Force, green-trimmed grey ` +
      `stone and a flag snapping in the sea-wind, the one institution on this ` +
      `cynical world that its people genuinely, grudgingly trust. CorSec is hard, ` +
      `honest, and stubbornly its own — it has faced down gangs, Diktats, and the ` +
      `Republic alike — and it does not, whatever the pressure, sell the badge.`);
    room('cor_civic_corsec_ops', 'The CorSec Operations Room',
      `A humming operations room walled in monitors and case-boards, where CorSec ` +
      `tracks the smuggling, the gangs, and the slow rot of the Blue Sector it can ` +
      `never quite cut out. The officers are overworked and undeceived, and they ` +
      `carry, most of them, a private map of exactly how bad the White Worms have ` +
      `grown, and how little the city upstairs wants to hear it.`);
    room('cor_civic_corsec_cells', 'The CorSec Holding Cells',
      `Clean, hard holding-cells beneath the headquarters, where the day's catch ` +
      `of smugglers, gangers, and cantina-brawlers cools its heels awaiting the ` +
      `magistrate. The desk-sergeant has heard every story ever told and believes ` +
      `none of them, and processes the guilty and the merely unlucky with the ` +
      `same weary, incorruptible patience.`);
    room('cor_civic_monument', 'The Column of the Five Brothers',
      `A soaring commemorative column crowned with five joined stars — the Five ` +
      `Brothers of the Corellian system, bound together, the legend says, by a ` +
      `hand out of the deep past. Corellians salute it without quite believing ` +
      `the legend and without ever doubting the pride, and the tourists photograph ` +
      `it, and the pigeons, as everywhere, rule it.`);
    room('cor_civic_statue', "The Spacer's Memorial",
      `A bronze of a Corellian spacer, collar up and eyes on the horizon, raised ` +
      `to the countless sons and daughters of the world who went out among the ` +
      `stars and did not come back. Fresh flowers lie always at its foot, and ` +
      `crews ship-bound touch its boot for luck, and here even the loud city ` +
      `lowers its voice.`);
    room('cor_civic_museum', 'The Museum of Corellia',
      `A grand museum of the world's long, strange story — the age of the ` +
      `space-sail treasure ships, the founding of CEC, the deep prehistory of the ` +
      `Five Brothers that the galleries approach and then, oddly, veer away from. ` +
      `The official history is proud and seamless; the questions it does not ask ` +
      `hang in the air of the older rooms like dust.`);
    room('cor_civic_library', 'The Central Archive',
      `Corellia's great archive, deep in data-cores and the brittle records of ` +
      `centuries, where the world keeps its memory and buries its secrets in the ` +
      `same shelves. The archivists are dry and precise and know exactly which ` +
      `records concerning the Brother-worlds are sealed, and by whose order, and ` +
      `have learned not to say.`);
    room('cor_civic_exchange', 'The Corellian Exchange',
      `A frantic hall of traders and tickers where the wealth of the world ` +
      `turns — CEC stock, cargo-futures, the price of a berth on the Corellian ` +
      `Run — in a roar that would do the Row credit. This is the respectable ` +
      `engine of a world built on trade, and it runs, like everything Corellian, ` +
      `hot and fast and one bad day from disaster.`);
    room('cor_civic_tower', 'The Signal Tower',
      `The tallest of the civic towers, a spire of comm-arrays linking Coronet to ` +
      `the Brother-worlds and the wider Republic. From its public gallery the ` +
      `whole city lies open — the Row, the yards, the gold curve of the coast, ` +
      `the green hinterland — and, far out in the day-lit sky, the faint hard ` +
      `star that is Centerpoint, watching, as it has always watched, over its ` +
      `five children.`);
    room('cor_civic_promenade', 'The Civic Promenade',
      `A gracious tree-lined promenade where Coronet takes its leisure, the cafés ` +
      `full and the tram-bells ringing, the sea-light soft on the pale stone. It ` +
      `is the city at its best — prosperous, easy, and quietly proud — and it is ` +
      `an easy thing, walking it, to forget the Blue Sector smoke a few ` +
      `kilometres off, which is rather the point.`);
    room('cor_civic_park', 'The Coronet Gardens',
      `A broad civic garden of real Corellian trees and cistern-fed lawns, where ` +
      `families picnic and old spacers doze and the city, for an hour, slows ` +
      `down. A bandstand plays the old planetary airs on festival days, and the ` +
      `whole green space says, without a word, that this is a world worth all the ` +
      `ships it builds to defend it.`);
    room('cor_civic_memorial', 'The War Memorial',
      `A sombre sunken court graven with the names of the Corellian dead of a ` +
      `dozen wars, for a world that builds warships has always sent its children ` +
      `to crew them. The bloodstripe — Corellia's highest honour for valour — is ` +
      `carved above the roll, and beneath it the names run on further than any ` +
      `visitor expects, and the city, here, is silent.`);
    room('cor_civic_yardway', 'The Shipyard Road',
      `A broad industrial road running north from the civic centre toward the CEC ` +
      `shipyards, the dressed stone giving way to rail-lines and gantry-shadow, ` +
      `the air taking on the tang of hot metal and the sea. The traffic thickens ` +
      `with yard-workers and cargo-haulers; ahead, the great skeletal cradles of ` +
      `the shipways climb into the sky.`);
    room('cor_civic_coastway', 'The Coast Road',
      `A bright avenue running seaward from the gardens, the towers falling away ` +
      `behind and the gold light growing, the first salt freshness of the coast ` +
      `on the wind. Coronet turns its good face to the sea here; ahead lie the ` +
      `beaches and the marinas and the long easy curve of the Gold Coast.`);
    room('cor_civic_oldway', 'The Old Quarter Stair',
      `A worn stone stair descending from a quiet corner of the civic centre into ` +
      `the Old Quarter below — the original Coronet, the city the modern one was ` +
      `built upon and over. The air that rises from it is cool and old and faintly ` +
      `strange, and the CorSec sign at its head warns, without explanation, ` +
      `against going down alone.`);

    link('cor_civic_gate', 'n', 'cor_civic_plaza');
    link('cor_civic_plaza', 'n', 'cor_civic_rotunda');
    link('cor_civic_plaza', 'e', 'cor_civic_promenade');
    link('cor_civic_plaza', 'w', 'cor_civic_plaza2');
    link('cor_civic_plaza', 'ne', 'cor_civic_hall');
    link('cor_civic_plaza', 'nw', 'cor_civic_museum');
    link('cor_civic_plaza', 'se', 'cor_civic_exchange');
    link('cor_civic_plaza', 'sw', 'cor_civic_corsec');
    link('cor_civic_plaza', 'u', 'cor_civic_tower');
    link('cor_civic_plaza', 'd', 'cor_civic_oldway');
    link('cor_civic_rotunda', 'n', 'cor_civic_hall');
    link('cor_civic_hall', 'n', 'cor_civic_diktat');
    link('cor_civic_hall', 'e', 'cor_civic_court');
    link('cor_civic_museum', 'w', 'cor_civic_library');
    link('cor_civic_exchange', 'e', 'cor_civic_yardway');
    link('cor_civic_corsec', 's', 'cor_civic_corsec_ops');
    link('cor_civic_corsec_ops', 's', 'cor_civic_corsec_cells');
    link('cor_civic_promenade', 'e', 'cor_civic_park');
    link('cor_civic_promenade', 'n', 'cor_civic_monument');
    link('cor_civic_promenade', 's', 'cor_civic_memorial');
    link('cor_civic_monument', 'e', 'cor_civic_statue');
    link('cor_civic_park', 'e', 'cor_civic_coastway');
    // Spaceport -> City Centre.
    link('cor_port_downtowngate', 'e', 'cor_civic_gate');
    // Treasure Ship Row -> City Centre.
    link('cor_row_civicway', 'e', 'cor_civic_plaza2');

    /* ================================================================= *
     *  IV. THE CEC SHIPYARDS  (24) — where the galaxy's freighters are born.
     * ================================================================= */
    room('cor_yard_gate', 'The Shipyard Gate',
      `The shipyard road ends at the great gates of the Corellian Engineering ` +
      `Corporation, a company older and prouder than the Republic itself, whose ` +
      `keels have carried the galaxy's trade for a thousand years. Beyond the ` +
      `gates the ground opens into a cathedral of industry, and overhead the ` +
      `skeletal cradles of the shipways climb so high the gulls nest in them.`);
    room('cor_yard_floor', 'The Assembly Floor',
      `A factory floor of impossible scale, where the hulls of freighters take ` +
      `shape in ranks beneath a sky of catwalks and crane-rail, the din a solid ` +
      `pressure, the sparks falling like slow rain. Here the famous YT-series ` +
      `hulls are laid down by the hundred — the honest, ugly, beloved workhorses ` +
      `that half the galaxy learns to fly in and never quite forgets.`);
    room('cor_yard_slipway', 'The Great Slipway',
      `A vast open slipway where a finished hull rests in its cradle, gleaming and ` +
      `new, awaiting the launch that will send her up the gravity well to a life ` +
      `among the stars. Corellians gather to watch a launch the way other worlds ` +
      `gather for a festival; there is no prouder sight on Corellia than a ship of ` +
      `her own making taking the sky.`);
    room('cor_yard_launchpad', 'The Launch Cradle',
      `The launch-cradle itself, scorched and titanic, where the finished ships ` +
      `light their drives and climb. The ground crews clear the blast-radius at a ` +
      `run; the countdown echoes off the gantries; and then a new hull rises on a ` +
      `pillar of fire, and the whole yard, for a moment, stops to watch its child ` +
      `go.`);
    room('cor_yard_drydock', 'The Drydock',
      `A colossal drydock cradling a CR90 corvette in for fitting-out, her long ` +
      `hammerhead hull scaffolded stem to stern — the pattern of ship that carries ` +
      `diplomats and blockade-runners and, the yard-workers say with a wink, ` +
      `rather more of the latter than CEC officially builds. Sparks rain from her ` +
      `flank; she is days from a life of running.`);
    room('cor_yard_hull', 'The Hull Shop',
      `A thundering shop where hull-plate is cut, formed, and welded, the great ` +
      `presses slamming, the plasma-cutters shrieking through durasteel. The ` +
      `hull-workers are the aristocrats of the yard, proud of a craft passed down ` +
      `in families, and they can tell a ship's yard of origin, they boast, by the ` +
      `sound her plates make in the wind.`);
    room('cor_yard_engine', 'The Engine Shop',
      `The shop where the sublight drives and hyperdrives are built and tuned — ` +
      `the beating hearts CEC is truly famous for, for a Corellian engine will ` +
      `carry you home when everything else has failed. The engine-wrights work to ` +
      `tolerances finer than a hair and tempers shorter than a fuse, and they do ` +
      `not, ever, let a bad drive out the door.`);
    room('cor_yard_gantry', 'The High Gantries',
      `A dizzying web of gantry-catwalks flung high across the shipways, the ` +
      `half-built hulls dwindling to models below, the crane-rails passing close ` +
      `overhead with their hanging tonnage. The gantry-crews work with the ` +
      `sure-footed calm of the born high-worker, and the drop beneath the grille ` +
      `is a thing they long ago stopped seeing.`);
    room('cor_yard_fabrication', 'The Fabrication Halls',
      `Endless halls of fabricator-droids and forming-machines turning out the ` +
      `ten thousand components a starship swallows — frames, couplings, conduit, ` +
      `the nameless small parts a galaxy of ships runs on. The line never stops; ` +
      `the halls never empty; and the sheer patient scale of it is the true ` +
      `secret of Corellia's long dominion over the spacelanes.`);
    room('cor_yard_foundry', 'The Yard Foundry',
      `A hell of molten alloy where the raw metal is poured for the hulls, the ` +
      `heat rolling off in warping waves, the pour-crews labouring at the edge of ` +
      `endurance. The glow of the metal lights the underside of the gantries a ` +
      `sullen red, and the foundry-workers, blackened and proud, tap the great ` +
      `ladles with the confidence of people who have never once let one slip.`);
    room('cor_yard_paint', 'The Paint & Seal Bay',
      `A cavernous bay where the finished hulls are sealed, primed, and painted, ` +
      `the air a chemical fog, the spray-droids crawling the plating like patient ` +
      `insects. A ship gets her colours here — and her registry, and sometimes, ` +
      `down the discreet end, a second registry the first one knows nothing ` +
      `about.`);
    room('cor_yard_testbed', 'The Engine Testbed',
      `A shielded pit where new drives are run up to full and beyond, the roar ` +
      `felt in the teeth from across the yard, the blast-tunnel glowing. The ` +
      `test-crews push each engine past what any sane pilot would ask of it, on ` +
      `the Corellian principle that a drive should fail here, in the pit, and ` +
      `never, ever out there, in the dark, with a crew aboard.`);
    room('cor_yard_controlroom', 'The Yard Control Room',
      `A grimy control-room overlooking the shipways, ranked with monitors and ` +
      `the great scheduling-boards that choreograph the whole vast dance of ` +
      `construction. The yard-masters run it on too little sleep and too much ` +
      `caf, and they carry the launch-schedule of half the galaxy's merchant ` +
      `marine in their heads, and they are, quietly, the most harried people on ` +
      `Corellia.`);
    room('cor_yard_offices', 'The CEC Executive Offices',
      `Panelled offices where the Corellian Engineering Corporation conducts the ` +
      `business behind the steel — the contracts, the patents, the discreet ` +
      `arrangements with buyers the Republic would frown upon. CEC has outlived ` +
      `governments beyond counting by selling ships to all sides and keeping its ` +
      `own counsel, and these quiet rooms are where that long, cynical wisdom is ` +
      `practised.`);
    room('cor_yard_design', 'The Design Bureau',
      `A bright bureau of drafting-holos and prototype-mockups, where CEC's ` +
      `engineers dream the next generation of hulls. A half-real freighter turns ` +
      `slowly in the air, all curves and cargo-space; the YT-series was dreamed ` +
      `in a room like this, and something here, under wraps, may be the ship a ` +
      `generation of spacers has not yet learned it cannot live without.`);
    room('cor_yard_museum', 'The Hall of Ships',
      `A reverent hall of scale-models and salvaged relics tracing CEC's thousand ` +
      `years — from the sail-ships of the treasure age to the freighters of ` +
      `today, each hull a chapter in the story of how a small proud world came to ` +
      `carry the trade of the stars. Apprentices are brought here on their first ` +
      `day, to understand what they are joining.`);
    room('cor_yard_warehouse', 'The Component Warehouse',
      `A canyon-stacked warehouse of ship-components reaching into the gloom, ` +
      `cargo-droids threading the aisles, the inventory of a hundred half-built ` +
      `hulls shelved and waiting. Things go missing from here with a regularity ` +
      `the foremen have stopped fighting and started, quietly, budgeting for.`);
    room('cor_yard_cranes', 'The Crane Deck',
      `The high deck where the great gantry-cranes are driven, the whole yard ` +
      `spread out beneath like a map of industry, the sea glittering beyond the ` +
      `shipways. The crane-operators are gods of a small precise heaven, swinging ` +
      `hundred-tonne hull-sections to the width of a hand, and they take a ` +
      `craftsman's silent pride in never once having dropped one.`);
    room('cor_yard_salvage', 'The Salvage Yard',
      `A sprawling yard of hulks and scrap — ships beyond repair, cannibalised ` +
      `for the parts still good, the bones of a century of Corellian steel. The ` +
      `salvage-crews know the worth of everything and the history of much of it, ` +
      `and a patient soul with an eye can find, in the rust, the makings of a ship ` +
      `and a whole new life.`);
    room('cor_yard_riverdock', 'The River Dock',
      `A working dock where the shipyard meets the broad grey river that carries ` +
      `its heavy freight down to the sea, the barges nosing in under the cranes. ` +
      `The river-men are a breed apart, taciturn and tide-wise, and downstream, ` +
      `where the water passes the smokestacks, the honest yard bleeds into the ` +
      `hard warren of Blue Sector.`);
    room('cor_yard_catwalk', 'The Shipway Catwalk',
      `A long catwalk running the length of a shipway, level with the ribs of a ` +
      `half-built freighter, so close you could lay a hand on the cold new ` +
      `durasteel. From here the scale of the thing overwhelms — a vessel that ` +
      `will cross the galaxy, still open to the sky, its hundred crews swarming ` +
      `its bones like the builders of some steel cathedral.`);
    room('cor_yard_sublevel', 'The Yard Underlevel',
      `A flooded, echoing underlevel beneath the shipways, all power-conduit and ` +
      `cooling-race and the deep thrum of the foundry overhead. The yard's ` +
      `underside, where the night-crews and the maintenance-droids keep the ` +
      `giant alive, and where a few things move that are not on any crew-roster.`);
    room('cor_yard_hangar', 'The Finishing Hangar',
      `A great enclosed hangar where the newly-launched-and-returned come for ` +
      `their final fitting — the weapons the export forms omit, the smuggling- ` +
      `holds the schematics forget, the modifications that turn an honest CEC ` +
      `freighter into something with secrets. The work is superb and utterly ` +
      `deniable, and CEC's official position is that it does not happen here.`);
    room('cor_yard_blueside', "The Yard's Edge",
      `The ragged seam where the CEC yards give out to Blue Sector, the company ` +
      `fences sagging, the clean industry souring into the desperate warren that ` +
      `houses the workers the company would rather not think about. A shift-gang ` +
      `trudges through the gap, off to homes the yard's wages barely reach, and ` +
      `the smoke of the sector closes over them.`);

    link('cor_yard_gate', 'e', 'cor_yard_floor');
    link('cor_yard_floor', 'n', 'cor_yard_slipway');
    link('cor_yard_floor', 'e', 'cor_yard_drydock');
    link('cor_yard_floor', 's', 'cor_yard_catwalk');
    link('cor_yard_floor', 'ne', 'cor_yard_gantry');
    link('cor_yard_floor', 'nw', 'cor_yard_foundry');
    link('cor_yard_floor', 'se', 'cor_yard_controlroom');
    link('cor_yard_floor', 'sw', 'cor_yard_warehouse');
    link('cor_yard_floor', 'd', 'cor_yard_sublevel');
    link('cor_yard_floor', 'u', 'cor_yard_cranes');
    link('cor_yard_slipway', 'n', 'cor_yard_launchpad');
    link('cor_yard_launchpad', 'e', 'cor_yard_hangar');
    link('cor_yard_drydock', 'e', 'cor_yard_hull');
    link('cor_yard_hull', 'e', 'cor_yard_engine');
    link('cor_yard_gantry', 'e', 'cor_yard_fabrication');
    link('cor_yard_foundry', 'w', 'cor_yard_paint');
    link('cor_yard_controlroom', 'e', 'cor_yard_design');
    link('cor_yard_controlroom', 's', 'cor_yard_offices');
    link('cor_yard_design', 'e', 'cor_yard_museum');
    link('cor_yard_warehouse', 's', 'cor_yard_salvage');
    link('cor_yard_warehouse', 'w', 'cor_yard_riverdock');
    link('cor_yard_catwalk', 's', 'cor_yard_testbed');
    link('cor_yard_riverdock', 's', 'cor_yard_blueside');
    // City Centre -> Shipyards.
    link('cor_civic_yardway', 'e', 'cor_yard_gate');

    /* ================================================================= *
     *  V. BLUE SECTOR  (22) — the shipyard slum, where the workers live and
     *     the White Worms rule.
     * ================================================================= */
    room('cor_blue_gate', 'The Blue Sector Line',
      `The cut from the Row bottoms out at the ragged edge of Blue Sector, and ` +
      `the city changes character entirely: the pale civic stone and the Row's ` +
      `bright chaos give way to a grey warren of tenement and smokestack, the ` +
      `sky stained the permanent blue-grey haze that gives the sector its name. ` +
      `This is where the yards' workers live, and where the yards' pride does not ` +
      `reach.`);
    room('cor_blue_plaza', 'The Sump Plaza',
      `The hard heart of Blue Sector, a soot-black plaza where the sector's ` +
      `crowded life plays out under failing glow-panels and the constant sift of ` +
      `industrial ash. It is poor, dangerous, and defiantly alive; and it is ` +
      `White Worm ground, the gang's tags on every wall, its lookouts on every ` +
      `corner, its cut taken from every trade.`);
    room('cor_blue_tenement', 'The Worker Tenements',
      `Stacked hive-blocks of shipyard-worker housing, families crammed three ` +
      `deep, the corridors loud with children and cooking and the endless ` +
      `argument of too many lives too close. The people here build the finest ` +
      `ships in the galaxy and cannot afford a berth on one; they know it, and ` +
      `the knowing has an edge to it that grows, year on year, a little keener.`);
    room('cor_blue_market', 'The Grey Market',
      `A hard market of the stolen, the salvaged, and the desperate, no pretence ` +
      `of licence left, the goods on ragged cloth and the prices settled in ` +
      `menace as much as coin. Much of it fell off a CEC hauler this morning; ` +
      `most of it will be sold twice by nightfall; and the White Worms take their ` +
      `cut of every exchange.`);
    room('cor_blue_dealer', 'The Spice Hatch',
      `A barred hatch where Blue Sector buys its oblivion by the twist, the ` +
      `dealer weighing the dust behind armourglass and dead eyes. The queue is ` +
      `patient and hollow and never short, for the sector has a great deal to ` +
      `forget, and the Worms sell the forgetting at a careful, ruinous price.`);
    room('cor_blue_den', 'The White Worm Den',
      `The lair of the White Worms, the gang that runs Blue Sector — a fortified ` +
      `warren of stolen comfort where the pale, cave-adapted toughs of the gang ` +
      `lounge among their loot and their fear. They work the sector's children as ` +
      `scrumrats and its adults as marks, and they answer, all of them, to the ` +
      `pale thing that rules from the room beyond.`);
    room('cor_blue_warren', 'The Scrumrat Warren',
      `A crawlway warren where the White Worms keep their scrumrats — the ` +
      `sector's orphaned and sold children, drilled in theft and sent up into the ` +
      `bright city to steal, and beaten when they come back empty. They are quick, ` +
      `and frightened, and loyal to the gang because the gang is the only family ` +
      `the sector left them, which is the cruellest theft of all.`);
    room('cor_blue_cantina', 'The Sootback Cantina',
      `A grim cave of a cantina where the shift-workers drink the ache out of ` +
      `their backs and the gang does its franker business in the back booths. The ` +
      `beer is thin and the mood is thinner, and the talk, once the drink loosens ` +
      `it, turns to the yard's wages and the Worms' cut and the slow arithmetic ` +
      `of a patience running out.`);
    room('cor_blue_chopshop', 'The Chop-Shop',
      `A grease-black shop where stolen speeders and hotter goods are stripped to ` +
      `anonymous parts, the cutting-torches never cold, the paperwork never ` +
      `troubled. Good tools and better weapons turn up on the wall-rack here, off ` +
      `the books, and the boss asks no more about your need for one than you ask ` +
      `about his stock.`);
    room('cor_blue_medhut', 'The Back-Alley Clinic',
      `A stained walk-in clinic with a droptor droid two centuries out of licence, ` +
      `patching the sector's injured and cut and quietly disappeared, no reports ` +
      `filed and no CorSec called. It does what it can, which is more than the ` +
      `city ever asked of it, and it keeps the Worms' secrets because the ` +
      `alternative is not keeping anything at all.`);
    room('cor_blue_canal', 'The Industrial Canal',
      `A sluggish, reeking canal carrying the yards' run-off down through the ` +
      `sector to the sea, its water a chemical sheen, its banks a tangle of ` +
      `pipe and squatter-shack. The sector's poorest live along it and fish it, ` +
      `against all sense, for the pale eyeless things that have learned to ` +
      `thrive in the poison.`);
    room('cor_blue_bridge', 'The Canal Bridge',
      `A rusted span across the industrial canal, hung with the sector's washing ` +
      `and its lookouts, the grey water sliding beneath. It is a boundary and a ` +
      `chokepoint both; the Worms tax the crossing when they feel like it, and ` +
      `the sector pays, or swims, or turns back.`);
    room('cor_blue_factory', 'The Shuttered Factory',
      `A vast dead factory that CEC closed and abandoned when the work moved on, ` +
      `its machines rusting where they stopped, its floor a squatter-warren and a ` +
      `gang-hideout and a monument to the sector's grievance. The workers it ` +
      `discarded still live in its shadow, and the shadow, they will tell you, ` +
      `grows longer every year.`);
    room('cor_blue_foundry', 'The Backstreet Foundry',
      `A cramped illegal foundry where the sector melts its salvage and casts its ` +
      `own hard goods, the heat murderous, the safety nonexistent. It is honest ` +
      `work of a kind, wrung from the yards' leavings by people the yards threw ` +
      `away, and the Worms, naturally, take a cut of the castings.`);
    room('cor_blue_rooftop', 'The Tenement Rooftops',
      `A precarious runway of tenement rooftops under the blue-grey murk, strung ` +
      `with aerials and washing and the sector's rooftop runners. From up here ` +
      `the whole hard warren spreads out — and, across it, the clean bright ` +
      `towers of the city centre, close enough to see and as far away as another ` +
      `world.`);
    room('cor_blue_hideout', "The Fugitives' Hideout",
      `A hidden bolt-hole in the warren's tangle, where the sector's hunted go to ` +
      `ground — the gang-crossed, the CorSec-wanted, the merely unlucky. The ` +
      `sector hides its own from the city above by old reflex, whatever it thinks ` +
      `of them, for the one thing Blue Sector agrees on is that the trouble is ` +
      `always, in the end, someone else's fault.`);
    room('cor_blue_shrine', 'The Broken Shrine',
      `A little shrine gone to the sector's own hard faith, its offerings spent ` +
      `charge-cells and the tokens of the lost, its prayers brief and bitter and ` +
      `mostly for a way out. The sector keeps its griefs here, and its small ` +
      `stubborn hopes, and now and then a scrumrat slips in to pray for a mother ` +
      `half-remembered.`);
    room('cor_blue_sump', 'The Sump',
      `The low, flooded bottom of the sector where the canal pools before it ` +
      `drains to the sea, the water black and glittering-wrong, the air a solid ` +
      `stench. Things live in the sump that the poison has shaped, and the sector ` +
      `throws it what it must, and does not look too long into the dark water.`);
    room('cor_blue_pit', 'The Fighting Pit',
      `A sunken pit ringed by a baying crowd where the sector's desperate fight ` +
      `for the Worms' coin and the crowd's pleasure, the sand dark and ` +
      `unwashed. The bookmakers work the rail; the gang takes its cut of the ` +
      `blood and the betting both; and a hard soul can make a name here, or ` +
      `simply an end.`);
    room('cor_blue_downstair', 'The Undertunnel Stair',
      `A broken stair plunging from the sector's lowest level down into the old ` +
      `dark beneath the city — the undertunnels, where the sector dumps what it ` +
      `cannot use and hides what it cannot keep, and where, deeper down, the ` +
      `Selonians and older things hold the drowned bones of the first Coronet. ` +
      `Cold air breathes up it. Few go down willingly.`);
    room('cor_blue_alley', 'The Ash Alley',
      `A dead-end slot off the plaza where the sector conducts what it hides even ` +
      `from itself — the whispered plot, the settled score, the body that will be ` +
      `in the sump by morning. The walls are dark with old trouble and darker ` +
      `graffiti, the White Worm sigil scrawled over older gangs' faded marks, and ` +
      `a careful soul checks it twice before entering and, mostly, does not enter ` +
      `at all.`);
    room('cor_blue_yardside', 'The Yard Gate Slum',
      `The clot of tenement and dive that has grown up against the CEC yard-gate, ` +
      `where the shift-gangs pour out at day's end into the sector that houses ` +
      `them. It is the seam between the world that builds the ships and the world ` +
      `that cannot afford them, and the resentment here is a low constant hum, ` +
      `like the yards themselves.`);

    link('cor_blue_gate', 'n', 'cor_blue_plaza');
    link('cor_blue_plaza', 'n', 'cor_blue_market');
    link('cor_blue_plaza', 'e', 'cor_blue_canal');
    link('cor_blue_plaza', 'w', 'cor_blue_tenement');
    link('cor_blue_plaza', 'ne', 'cor_blue_cantina');
    link('cor_blue_plaza', 'nw', 'cor_blue_shrine');
    link('cor_blue_plaza', 'se', 'cor_blue_factory');
    link('cor_blue_plaza', 'sw', 'cor_blue_alley');
    link('cor_blue_plaza', 'd', 'cor_blue_downstair');
    link('cor_blue_plaza', 'u', 'cor_blue_rooftop');
    link('cor_blue_market', 'e', 'cor_blue_dealer');
    link('cor_blue_market', 'n', 'cor_blue_den');
    link('cor_blue_den', 'e', 'cor_blue_warren');
    link('cor_blue_canal', 'e', 'cor_blue_bridge');
    link('cor_blue_canal', 's', 'cor_blue_sump');
    link('cor_blue_sump', 'd', 'cor_blue_pit');
    link('cor_blue_tenement', 's', 'cor_blue_medhut');
    link('cor_blue_factory', 'e', 'cor_blue_foundry');
    link('cor_blue_foundry', 's', 'cor_blue_chopshop');
    link('cor_blue_bridge', 'e', 'cor_blue_yardside');
    link('cor_blue_rooftop', 'e', 'cor_blue_hideout');
    // Treasure Ship Row -> Blue Sector.
    link('cor_row_blueway', 'sw', 'cor_blue_gate');
    // Shipyards -> Blue Sector.
    link('cor_yard_blueside', 'w', 'cor_blue_yardside');

    /* ================================================================= *
     *  VI. THE SPACER'S QUARTER  (18) — cantinas, sabacc, and the cult of
     *      the pilot, where Corellia is most itself.
     * ================================================================= */
    room('cor_spacer_gate', "The Spacers' Gate",
      `The cut from the Row opens on the Spacer's Quarter, and the noise and neon ` +
      `hit like a warm wave — a whole district given over to the pleasures and ` +
      `superstitions of the people who fly, where a between-berths spacer can ` +
      `drink, gamble, brawl, and be forgiven all three by morning. If Corellia ` +
      `has a soul, cynics say, it is pawned somewhere in here, and having a ` +
      `wonderful time.`);
    room('cor_spacer_plaza', 'The Quarter Plaza',
      `The roaring hub of the Spacer's Quarter, a plaza of blazing cantina-signs ` +
      `and idling swoops where the pilots gather to boast, deal, and take each ` +
      `other's measure. Every soul here has a ship or wants one or has just lost ` +
      `one, and the talk is all runs and cargoes and the particular Corellian ` +
      `gospel that a good pilot makes their own luck.`);
    room('cor_spacer_cantina', 'The Blue Bantha Cantina',
      `The most famous cantina on Corellia, a cavern of smoke and music and ` +
      `legend where half the great spacer-stories of the galaxy are sworn to have ` +
      `begun. The drinks are strong, the band is loud, the clientele is armed and ` +
      `cheerful, and the bartender has heard every lie in the spacelanes and ` +
      `poured a drink for most of the liars.`);
    room('cor_spacer_bar', 'The Long Bar',
      `A mirror-backed bar running the length of a low room, tended by a ` +
      `four-armed Besalisk who pours for a dozen appetites at once and keeps the ` +
      `peace with a look. The regulars are fixtures, the stories are polished ` +
      `smooth, and a newcomer who listens more than they talk will leave knowing ` +
      `where every cargo on Corellia is really going.`);
    room('cor_spacer_gamblinghall', 'The Sabacc Hall',
      `A blaze of a gambling-hall where the Quarter's serious play is done, the ` +
      `sabacc-tables ringed three deep, ships and fortunes crossing the felt all ` +
      `night. Corellians gamble for the joy of the edge, and lose with a grin and ` +
      `win with a shrug, and the house, serene behind the odds, loves them for ` +
      `it.`);
    room('cor_spacer_sabacc', 'The High-Stakes Room',
      `A hushed back-room where the stakes climb past sanity and the players are ` +
      `the Quarter's sharks and legends, the cards falling in a silence you could ` +
      `cut. It was at a table like this, they will tell you in a hundred ` +
      `cantinas, that a certain freighter changed hands on a single hand — and ` +
      `every teller names a different ship, and every one of them is lying, and ` +
      `it does not matter at all.`);
    room('cor_spacer_pilots', "The Pilots' Guild",
      `The hall of the Corellian pilots' fraternity, walls thick with ` +
      `run-records and squadron-patches and the holos of the famous dead, where ` +
      `the aristocracy of skill keeps its rolls and settles its disputes. To be ` +
      `named here is to be somebody in the only currency Corellia truly ` +
      `respects — and the currency is not credits, but the number of times you ` +
      `have come home when you should not have.`);
    room('cor_spacer_bloodstripe', 'The Hall of the Bloodstripe',
      `A quieter, prouder hall honouring the bloodstripe — the scarlet trouser- ` +
      `stripe that is Corellia's highest award for valour, given for the kind of ` +
      `courage the world pretends to be too cynical to admire and secretly ` +
      `worships. The names on the wall are few and the deeds behind them ` +
      `terrible, and even the Quarter's drunkest brawler walks softly here.`);
    room('cor_spacer_flophotel', 'The Layover Hotel',
      `A cheerful, disreputable hotel of rented rooms and no questions, where the ` +
      `Quarter's liaisons and hideouts and morning-after regrets are conducted ` +
      `behind thin doors. The desk-droid has been bribed so often it has stopped ` +
      `distinguishing bribes from tips, and wishes every guest, sincerely, a ` +
      `lucky stay.`);
    room('cor_spacer_hangar', 'The Private Hangar',
      `A hangar of the Quarter's own ships — the fast, the modified, the ` +
      `not-quite-legal — kept close by owners who trust no yard and no crew but ` +
      `their own. The work done here is quiet and clever, and half the vessels ` +
      `wear a second transponder and a first-rate reason for it.`);
    room('cor_spacer_garage', 'The Swoop Garage',
      `A grease-slick garage of swoops and airspeeders, half of them racing-hot ` +
      `and none of them legal, the mechanics arguing tuning like theologians. ` +
      `Corellia's young burn their fear and their credits on these machines, and ` +
      `the garage sells them the speed and, discreetly, the repairs for when the ` +
      `speed wins.`);
    room('cor_spacer_dealer', 'The Ship-Broker',
      `A cramped office hung with holos of hulls for sale, where a fast-talking ` +
      `broker matches spacers to ships and ships to trouble. Every vessel on his ` +
      `board has a story and most have a lien, and a careful buyer reads the ` +
      `small print twice, and an incautious one learns the Corellian way, which ` +
      `is the hard way.`);
    room('cor_spacer_tattoo', 'The Tattoo Parlour',
      `A cramped parlour where spacers take the marks of their trade — the ` +
      `first-jump, the survived-run, the lost shipmate remembered in ink. The ` +
      `tattooist is an artist and a confessor both, and the stories inked here, ` +
      `she says, are truer than any told in the cantinas, because a soul does ` +
      `not lie to the needle.`);
    room('cor_spacer_den', 'The Deathstick Den',
      `A dim, low den where the Quarter's darker appetites are served — ` +
      `deathsticks and worse, the bright poison the trade's losers chase down ` +
      `into the dark. The Quarter looks away from it, mostly; every spacer knows ` +
      `someone the den took, and no one likes to count how close they flew to it ` +
      `themselves.`);
    room('cor_spacer_alley', 'The Neon Alley',
      `A side-slot drowned in the overspill of a hundred cantina-signs, where the ` +
      `Quarter's deals and fights and farewells happen in a light that hides ` +
      `nothing and reveals less. It is loud and bright and faintly dangerous, ` +
      `which is the Quarter in miniature, and it never, ever sleeps.`);
    room('cor_spacer_rooftop', 'The Cantina Roof',
      `A cluttered club-rooftop of humming vent-stacks and salvaged chairs, where ` +
      `the Quarter's workers and lovers slip up for a stolen breath of the salt ` +
      `night air. The neon glows up from below like a fire in a well; the traffic ` +
      `streams overhead; and for a moment, up here, even the loudest district on ` +
      `Corellia holds still.`);
    room('cor_spacer_shrine', "The Pilot's Shrine",
      `A little shrine to the spacer's luck, hung with charms, first-flight ` +
      `tokens, and the names of ships that did not come home. Pilots pause here ` +
      `before a hard run, not quite believing and not quite daring not to, and ` +
      `leave a coin or a whispered word, for on Corellia a wise pilot courts luck ` +
      `like a jealous lover.`);
    room('cor_spacer_coastway', 'The Shore Road',
      `A breezy road angling out of the Quarter toward the coast, the neon ` +
      `thinning, the salt air freshening, the sound of the sea rising under the ` +
      `fading music. Spacers walk it to sober up before a berth, and lovers to ` +
      `be alone, and it carries the Quarter's restless soul down to the calm gold ` +
      `edge of the world.`);

    link('cor_spacer_gate', 'n', 'cor_spacer_plaza');
    link('cor_spacer_plaza', 'n', 'cor_spacer_cantina');
    link('cor_spacer_plaza', 'e', 'cor_spacer_pilots');
    link('cor_spacer_plaza', 'w', 'cor_spacer_garage');
    link('cor_spacer_plaza', 'ne', 'cor_spacer_bar');
    link('cor_spacer_plaza', 'nw', 'cor_spacer_shrine');
    link('cor_spacer_plaza', 'se', 'cor_spacer_gamblinghall');
    link('cor_spacer_plaza', 'sw', 'cor_spacer_alley');
    link('cor_spacer_plaza', 'u', 'cor_spacer_rooftop');
    link('cor_spacer_cantina', 'n', 'cor_spacer_bloodstripe');
    link('cor_spacer_pilots', 'e', 'cor_spacer_coastway');
    link('cor_spacer_gamblinghall', 's', 'cor_spacer_sabacc');
    link('cor_spacer_garage', 'w', 'cor_spacer_dealer');
    link('cor_spacer_garage', 's', 'cor_spacer_hangar');
    link('cor_spacer_bar', 'e', 'cor_spacer_flophotel');
    link('cor_spacer_alley', 's', 'cor_spacer_den');
    link('cor_spacer_shrine', 'w', 'cor_spacer_tattoo');
    // Treasure Ship Row -> Spacer's Quarter.
    link('cor_row_spacerway', 'w', 'cor_spacer_gate');

    /* ================================================================= *
     *  VII. THE GREEN JEDI ENCLAVE  (16) — Corellia's own stubborn Jedi
     *       tradition, that stayed home and kept its families.
     * ================================================================= */
    room('cor_green_gate', 'The Enclave Gate',
      `A modest green-doored gate in a headland wall, easy to pass without ` +
      `noticing, marking the enclave of the Green Jedi — Corellia's own order of ` +
      `Force-users, who broke with the Coruscant Jedi long ago over the things ` +
      `Corellians break with everyone over: independence, and family, and the ` +
      `right to keep both. There are no towering spires here. There is only a ` +
      `quiet that presses on the ears.`);
    room('cor_green_path', 'The Cliff Path',
      `A winding path up through wind-bent trees toward the enclave proper, the ` +
      `sea booming on the rocks below, the green-caped figures of the order ` +
      `passing on their own unhurried errands. The Green Jedi wear the colour of ` +
      `their world and the manner of their people — plainspoken, rooted, and ` +
      `slow to bow — and they nod to a stranger as an equal, which the Coruscant ` +
      `Order, they will gently note, has rather forgotten how to do.`);
    room('cor_green_enclave', 'The Enclave Court',
      `A modest stone court open to the sea-sky, the heart of the Green Jedi ` +
      `enclave, where the order gathers without ceremony or hierarchy. There is ` +
      `no soaring architecture, no ten-thousand-year weight of tradition pressing ` +
      `down; only a handful of families who have kept the Force and the homeworld ` +
      `together for centuries, and see no reason, whatever Coruscant decrees, why ` +
      `they should ever be parted.`);
    room('cor_green_temple', 'The Green Temple',
      `A low, ancient temple of sea-weathered stone, its lines closer to a ` +
      `homestead than a cathedral, where the Green Jedi keep their own ` +
      `traditions — older, some whisper, than the Coruscant Order's, and ` +
      `stubbornly unreformed. Here the Force is a thing of family and place and ` +
      `the long green quiet of Corellia, and the Masters teach that a Jedi who ` +
      `forgets their home has lost the truest anchor they will ever have.`);
    room('cor_green_hall', 'The Hall of the Order',
      `A long timber hall where the Green Jedi meet in council — as equals, and ` +
      `at length, and with the fierce Corellian relish for argument. They keep no ` +
      `single Grand Master and take no orders from Coruscant, and they have paid ` +
      `for that independence, over the centuries, in censure and worse; and they ` +
      `have never, once, considered the price too high.`);
    room('cor_green_elder', "The Master's Chamber",
      `A spare, sunlit chamber where the enclave's eldest Master keeps her ` +
      `counsel, the window full of sea, a child's toy forgotten on the sill — for ` +
      `the Green Jedi marry, and raise families, and count that no betrayal of ` +
      `the Force but the deepest expression of it. She has watched Coruscant grow ` +
      `distant from the living galaxy for a long lifetime, and she grieves it, ` +
      `and she says so plainly to any who ask.`);
    room('cor_green_archive', 'The Green Archive',
      `A quiet archive of scrolls and crystal, the memory of the Corellian ` +
      `tradition — its own histories, its own understanding of the Force, and ` +
      `records of the long, cool quarrel with Coruscant that the Republic's ` +
      `official story omits. Here are kept truths the great Temple's Archives do ` +
      `not hold, or hold and will not show, and the archivist guards them with a ` +
      `farmer's patient stubbornness.`);
    room('cor_green_meditation', 'The Meditation Terrace',
      `A terrace of raked stone and wind-shaped trees looking out over the sea, ` +
      `where the order comes to sit with the Force and the horizon. There is no ` +
      `room of a thousand fountains here, no cultivated wilderness — only the ` +
      `real Corellian sea and sky, which the Green Jedi hold to be teacher ` +
      `enough, and better than any garden a Temple could build.`);
    room('cor_green_garden', 'The Enclave Garden',
      `A working garden of Corellian herbs and vegetables, tended by Jedi and ` +
      `their children alike, for the Green Jedi feed themselves and count the ` +
      `labour part of the discipline. A Master weeds a row beside an apprentice, ` +
      `talking of the Force and the soil in the same breath, and finding, in the ` +
      `Corellian way, no difference worth naming between them.`);
    room('cor_green_dojo', 'The Training Yard',
      `An open yard of worn flagstones where the Green Jedi learn the blade, the ` +
      `hum of a training-saber and the crack of a wooden stave mingling with the ` +
      `sea-sound. The style is their own — practical, rooted, unshowy — and the ` +
      `Masters teach it as they teach everything: as a thing for the defence of ` +
      `home and kin, and never for the glory of the one who wields it.`);
    room('cor_green_quarters', 'The Family Quarters',
      `Homely stone dwellings where the Jedi families live — for here a Jedi's ` +
      `children play underfoot and a Jedi's hearth is a Jedi's own, in flat ` +
      `defiance of everything the Coruscant Order holds about attachment. The ` +
      `Green Jedi answer that a love that must be forbidden was never understood, ` +
      `and raise their children in the Force and the family both, and have done ` +
      `so, unbroken, for longer than Coruscant has kept its rule.`);
    room('cor_green_refectory', 'The Common Table',
      `A long plain hall where the enclave eats together — Master and apprentice ` +
      `and child and spouse at one board, the food grown in their own garden, the ` +
      `talk easy and loud. It is the warm centre of a warm order, and a Coruscant ` +
      `Jedi straying in would find it strange past bearing, and might, if honest, ` +
      `find it also the thing their own great cold Temple most sorely lacks.`);
    room('cor_green_grove', 'The Whisper Grove',
      `A grove of old, tall Corellian trees where the Force runs strong and ` +
      `strange, the light green-gold, the quiet alive. The Green Jedi come here to ` +
      `listen, for the grove, they say, remembers — remembers the order's whole ` +
      `long history, and older things besides, back toward the deep past of the ` +
      `Five Brothers that even the Jedi of Corellia approach with care.`);
    room('cor_green_spire', 'The Watch-Spire',
      `The one tall thing in the enclave, a slender stone watch-spire on the ` +
      `headland's crown, from which a Jedi may see the whole sweep of Coronet and ` +
      `its coast, and far out to sea, and up into the day-sky where Centerpoint ` +
      `hangs its hard cold star. The order keeps a watch here, always, though of ` +
      `what they are watching they will only say: the old things stir slowly, and ` +
      `it is well to be awake.`);
    room('cor_green_shrine', 'The Ancestor Shrine',
      `A shrine to the Masters of the Corellian tradition down the centuries, ` +
      `their names carved in the sea-stone, their crystals set in a quiet wall. ` +
      `The Green Jedi honour their dead as family, not as saints, and come here ` +
      `to remember and to ask counsel, and the wall, the old ones say, will ` +
      `answer a patient listener, in the way the grove answers, if the need is ` +
      `true.`);
    room('cor_green_seam', 'The Old Descent',
      `A worn, half-hidden stair behind the grove, descending toward the ` +
      `undertunnels and the deep past the enclave keeps its long watch over. The ` +
      `Green Jedi have set a ward here — a knot of the Force that turns the idle ` +
      `and the ill-meaning gently aside — for what lies below connects, they say, ` +
      `to the oldest questions of the Five Brothers, and is not to be disturbed ` +
      `by the unready. The way waits, quiet and closed, for a later time.`);

    link('cor_green_gate', 'n', 'cor_green_path');
    link('cor_green_path', 'n', 'cor_green_enclave');
    link('cor_green_enclave', 'n', 'cor_green_temple');
    link('cor_green_enclave', 'e', 'cor_green_garden');
    link('cor_green_enclave', 'w', 'cor_green_refectory');
    link('cor_green_enclave', 'ne', 'cor_green_dojo');
    link('cor_green_enclave', 'nw', 'cor_green_archive');
    link('cor_green_enclave', 'se', 'cor_green_grove');
    link('cor_green_enclave', 'sw', 'cor_green_quarters');
    link('cor_green_enclave', 'u', 'cor_green_spire');
    link('cor_green_temple', 'n', 'cor_green_hall');
    link('cor_green_hall', 'e', 'cor_green_elder');
    link('cor_green_garden', 'e', 'cor_green_meditation');
    link('cor_green_archive', 'w', 'cor_green_shrine');
    link('cor_green_grove', 'e', 'cor_green_seam');

    /* ================================================================= *
     *  VIII. THE GOLD COAST  (20) — the sea, the beaches, and the easy
     *        pleasures of the world Corellia builds ships to come home to.
     * ================================================================= */
    room('cor_coast_gate', 'The Coast Gate',
      `The coast road from the city opens on the Gold Coast, and the whole ` +
      `character of the world changes with a breath of salt air: the towers give ` +
      `way to a long gold curve of beach and headland under a wide bright sky, ` +
      `the sea rolling in easy and endless. This is the Corellia the spacers ` +
      `carry in their hearts across the galaxy — the warm shore, the good light, ` +
      `the world worth coming home to.`);
    room('cor_coast_promenade', 'The Shore Promenade',
      `A broad seafront promenade of cafés and strolling crowds, the palms ` +
      `hissing in the sea-wind, the light the soft particular gold that gives the ` +
      `coast its name. Coronet comes here to remember it is not only a shipyard — ` +
      `that it is also a warm world by a kind sea — and the memory does the hard ` +
      `city good.`);
    room('cor_coast_beach', 'The Gold Beach',
      `A long strand of pale gold sand where Coronet swims and suns and forgets, ` +
      `the surf easy, the children shrieking, the whole city's cares set down at ` +
      `the tideline. It is, plainly and without irony, beautiful; and a spacer ` +
      `standing on it after a hard run understands, in the body, exactly what all ` +
      `the ships are for.`);
    room('cor_coast_seawall', 'The Old Sea-Wall',
      `A weathered stone sea-wall where the fishers cast and the old spacers sit ` +
      `and the young come to watch the sun go down into the water. The wall is ` +
      `older than the modern city, raised in the age of the treasure ships, and ` +
      `the sea has been trying to take it back for a thousand years, and has not ` +
      `yet, quite, managed it.`);
    room('cor_coast_tidepool', 'The Tide Pools',
      `A shelf of rock at the beach's end, pocked with tide-pools full of the ` +
      `strange bright life of the Corellian sea — system-fish and shell-things ` +
      `and the luminous drifters the children hunt with jars. It is a small ` +
      `wonder, easily missed, and a Green Jedi child, now and then, is found here ` +
      `talking to the water, and the water, the fishers swear, talking back.`);
    room('cor_coast_pier', 'The Grand Pier',
      `A long pleasure-pier striding out over the water on iron legs, hung with ` +
      `lights and lined with amusements, the sea sliding dark beneath the ` +
      `boards. At its end the whole gold coast curves away on either hand, the ` +
      `city a bright smudge inland, and the first stars come out over a sea that ` +
      `holds their reflection like a promise.`);
    room('cor_coast_boardwalk', 'The Boardwalk',
      `A rackety boardwalk of games, food-stalls, and cheerful swindles, loud ` +
      `with music and the shriek of the ride-machines, the smell of fry-oil and ` +
      `salt. It is Coronet at play, unbuttoned and generous, and the barkers work ` +
      `the crowd with the same shameless charm the Row's do, and the crowd, on ` +
      `holiday, is glad to be worked.`);
    room('cor_coast_casino', 'The Seafront Casino',
      `A gilded casino facing the water, where the coast's money meets the ` +
      `Quarter's gamblers in rather better clothes, the sabacc played for ` +
      `high stakes beneath chandeliers. It is the respectable cousin of the Row's ` +
      `smoky dens, and the odds are exactly as long, and the sea beyond the ` +
      `windows does not care who wins.`);
    room('cor_coast_resort', 'The Coral Resort',
      `A sprawling seaside resort of the offworld rich and the local risen, all ` +
      `white terraces and blue pools and studied ease, where credits buy a ` +
      `perfect Corellia scrubbed of its soot and its grievance. The staff are ` +
      `local and gracious and see everything, and the guests are careful, mostly, ` +
      `not to ask where the pretty view's shipyards went.`);
    room('cor_coast_spa', 'The Sea-Spring Spa',
      `A discreet spa built over a warm mineral spring where the sea-cliff meets ` +
      `the sand, its terraced pools steaming, its clientele the coast's weary and ` +
      `wealthy. It is a small paradise, and the Corellians who can afford it come ` +
      `to soak the stars out of their bones, and speak, in the warmth, more ` +
      `freely than they should.`);
    room('cor_coast_restaurant', 'The Seafood House',
      `A famous seafront restaurant where the day's catch is served with the ` +
      `fierce Corellian wine, the terrace hung over the water, the sunset laid on ` +
      `for free. Spacers save a run's pay to bring someone here, and deals are ` +
      `closed over the sea-fry that no cantina could ever seal, for the coast ` +
      `softens even Corellian hardness, a little, for an evening.`);
    room('cor_coast_marina', 'The Marina',
      `A forest of masts and moorings where the coast keeps its pleasure-boats ` +
      `and sea-yachts, the water slapping the hulls, the rigging singing in the ` +
      `wind. Corellians love the sea nearly as the stars, and a people who build ` +
      `starships build, for love, these lovely useless things, and race them, and ` +
      `wreck them, with exactly the same joy.`);
    room('cor_coast_lighthouse', 'The Lighthouse',
      `An old stone lighthouse on the marina's point, still lit though the ` +
      `beacons above have long outmoded it, kept burning out of a sailor's ` +
      `sentiment the star-proud world will not admit to. From its lamp-room the ` +
      `whole coast unrolls, and the keeper — old, salt-cured, close-mouthed — ` +
      `keeps a watch on the sea that has nothing to do with ships, and will not ` +
      `say what.`);
    room('cor_coast_cliffs', 'The Sea-Cliffs',
      `Wind-scoured cliffs where the gentle coast turns wild, the sea booming in ` +
      `the caves below, the gulls wheeling, the green Jedi headland rising beyond. ` +
      `It is a lonely, beautiful place, loud with wind and water, and the folk of ` +
      `Coronet come here when they need to be small beside something large, which ` +
      `the sea, obligingly, always is.`);
    room('cor_coast_cove', "The Smugglers' Cove",
      `A hidden cove beneath the cliffs, reachable only at low water, where ` +
      `Corellia's oldest profession has landed its quiet cargo since before there ` +
      `were laws to break. CorSec knows it is here and can never quite catch it ` +
      `in use, and the cove keeps its secrets under the tide, and gives them up, ` +
      `now and then, as a bottle or a bone.`);
    room('cor_coast_dunes', 'The Dunes',
      `A wilderness of grass-topped dunes between the beach and the hinterland ` +
      `road, the sand hissing, the sea-birds nesting, the city's noise finally ` +
      `lost behind the wind. Lovers walk here, and the solitary, and the road out ` +
      `to the farm-country begins where the last dune falls away into green.`);
    room('cor_coast_overlook', 'The Cliff Overlook',
      `A high point at the pier's landward end looking back over the whole gold ` +
      `sweep of the coast — beach and marina and lighthouse and, far off, the ` +
      `hard smudge of the city and its yards. From up here the two Corellias lie ` +
      `open at once, the working and the easy, and it is plain that the world ` +
      `needs both, and knows it, and loves the easy one the more for the price of ` +
      `the other.`);
    room('cor_coast_headland', 'The Green Headland',
      `A windy green headland where the coast rises toward the Jedi enclave, the ` +
      `sea on three sides, the grass bent flat, a green-caped figure sometimes ` +
      `standing watch against the sky. There is a stillness here that is not ` +
      `only the wind's, and the coast-folk give the headland a certain quiet ` +
      `respect, and lower their voices climbing it, without quite knowing why.`);
    room('cor_coast_road', 'The Hinterland Road',
      `A quiet road winding inland from the dunes toward the farm-country, the ` +
      `sea-sound fading, the land greening and rising into the low Corellian ` +
      `hills. The traffic thins to farm-haulers and the odd walker; the air turns ` +
      `from salt to grass and turned earth; and Coronet, with its ships and its ` +
      `gangs and its gold shore, falls away behind into another Corellia ` +
      `entirely.`);
    room('cor_coast_spacerside', 'The Shore Road End',
      `Where the Spacer's Quarter's shore road comes down at last to the sea, ` +
      `depositing its cargo of sobering pilots and courting couples onto the ` +
      `promenade. It is the seam between the loud Quarter and the easy coast, and ` +
      `a spacer crossing it can feel the world's pulse slow, and the sea take ` +
      `over from the neon, and something in the chest unclench.`);

    link('cor_coast_gate', 's', 'cor_coast_promenade');
    link('cor_coast_promenade', 's', 'cor_coast_beach');
    link('cor_coast_promenade', 'e', 'cor_coast_boardwalk');
    link('cor_coast_promenade', 'w', 'cor_coast_marina');
    link('cor_coast_promenade', 'se', 'cor_coast_pier');
    link('cor_coast_promenade', 'sw', 'cor_coast_dunes');
    link('cor_coast_promenade', 'ne', 'cor_coast_resort');
    link('cor_coast_promenade', 'nw', 'cor_coast_spacerside');
    link('cor_coast_beach', 's', 'cor_coast_seawall');
    link('cor_coast_beach', 'e', 'cor_coast_tidepool');
    link('cor_coast_boardwalk', 'e', 'cor_coast_casino');
    link('cor_coast_casino', 'e', 'cor_coast_restaurant');
    link('cor_coast_marina', 'w', 'cor_coast_lighthouse');
    link('cor_coast_marina', 's', 'cor_coast_cliffs');
    link('cor_coast_cliffs', 's', 'cor_coast_cove');
    link('cor_coast_cliffs', 'w', 'cor_coast_headland');
    link('cor_coast_resort', 'e', 'cor_coast_spa');
    link('cor_coast_dunes', 's', 'cor_coast_road');
    link('cor_coast_pier', 's', 'cor_coast_overlook');
    // City Centre -> Gold Coast.
    link('cor_civic_coastway', 'e', 'cor_coast_gate');
    // Spacer's Quarter -> Gold Coast.
    link('cor_spacer_coastway', 'e', 'cor_coast_spacerside');
    // Gold Coast -> Green Jedi Enclave (on the headland).
    link('cor_coast_headland', 'w', 'cor_green_gate');

    /* ================================================================= *
     *  IX. THE CORELLIAN HINTERLAND  (18) — the green farm-country, the
     *      quiet heart the loud world forgets it has.
     * ================================================================= */
    room('cor_farm_road', 'The Country Road',
      `The hinterland road climbs into the low green hills, the sea and the city ` +
      `gone behind, the land opening into the rolling farm-country that feeds ` +
      `Coronet and grounds it. This is the Corellia the ballads mean — the golden ` +
      `hills, the vineyards, the homesteads under the wide soft sky — and a ` +
      `spacer raised in the Blue Sector smoke can weep, the first time they see ` +
      `it, that it was theirs all along and they never knew.`);
    room('cor_farm_village', 'The Village Green',
      `A snug farm-village of stone cottages around a green, an inn on one side ` +
      `and a chapel on the other, the whole of it drowsing in the sun. The pace ` +
      `here is another world's from Coronet's — measured by seasons, not ` +
      `departures — and the villagers regard the offworlder with the frank, ` +
      `unhurried curiosity of people who have all the time there is.`);
    room('cor_farm_inn', 'The Country Inn',
      `A low-beamed country inn, the hearth lit against the evening, the ale ` +
      `local and the welcome real, the talk of weather and harvest and whose ` +
      `daughter has run off to crew a freighter this time. It is the warm heart ` +
      `of the village, and a traveller who buys a round and tells a good tale of ` +
      `the stars will not want for a bed or a friend.`);
    room('cor_farm_market', 'The Farm Market',
      `A weekly market on the green where the hinterland trades its plenty — ` +
      `grain and fruit, wine and cheese, the good plain wealth of the land. The ` +
      `haulers carry the surplus down to feed the city that half-despises the ` +
      `country and wholly depends on it, and the farmers take the city's credits ` +
      `and its condescension with the same dry patience.`);
    room('cor_farm_chapel', 'The Village Chapel',
      `A little stone chapel of the old Corellian country faith, its bell rung ` +
      `for weddings and harvests and the dead, its yard full of the long-settled ` +
      `graves of families that have worked this land since the treasure-ship age. ` +
      `It is quiet and worn and kind, and the green ribbon on the door means a ` +
      `Green Jedi came from this parish once, and the village has not forgotten ` +
      `the honour.`);
    room('cor_farm_mill', 'The Old Mill',
      `A stone mill on a chuckling stream, its great wheel turning yet, grinding ` +
      `the hinterland's grain as it has for centuries. The miller is white with ` +
      `flour and slow with words and knows the water and the weather better than ` +
      `any instrument, and the mill-pool below is where the village children ` +
      `learn to swim and the village lovers learn worse.`);
    room('cor_farm_homestead', 'The Homestead',
      `A working farmhouse and its yard, the beasts lowing, the dogs barking, ` +
      `three generations of a farm-family at their endless labour under the ` +
      `Corellian sun. Han Solo, the story goes, was born on a farm like this — or ` +
      `in the Blue Sector gutter, depending who tells it — and the family here ` +
      `will argue both versions with equal, cheerful certainty.`);
    room('cor_farm_farmhouse', 'The Farmhouse Kitchen',
      `The warm cluttered kitchen at the heart of the homestead, the long table ` +
      `scarred by generations of meals, the smell of baking and woodsmoke. The ` +
      `farm-wife feeds anyone who comes, offworlder or neighbour, on the ` +
      `Corellian country principle that a full guest is a friend and an empty one ` +
      `an accusation, and the talk runs late and easy over the good plain food.`);
    room('cor_farm_barn', 'The Great Barn',
      `A vast timber barn stacked to the rafters with the harvest, smelling of ` +
      `hay and dust and beast, the swallows nesting in the high beams. It is the ` +
      `farm's treasury and pride, and in its shadowed quiet a runaway or a ` +
      `courting couple or a Jedi in need of stillness might pass an unremarked ` +
      `hour, as many, down the long years, quietly have.`);
    room('cor_farm_vineyard', 'The Vineyards',
      `Terraced vineyards climbing a sun-warmed slope, the vines heavy, the air ` +
      `sweet with ripening — for Corellia's wine is famous across the sector, and ` +
      `the fierce red that fuels a hundred cantina-brawls is born on quiet hills ` +
      `like these. The vintners work the rows with a craftsman's care, and the ` +
      `city drinks the result with none, and both are content.`);
    room('cor_farm_orchard', 'The Orchard',
      `An old orchard heavy with Corellian fruit, the grass long beneath the ` +
      `trees, the bees loud in the blossom-fall. It is a drowsy, golden place, ` +
      `the kind a soul remembers on the far side of the galaxy and cannot say ` +
      `why, and the fallen fruit sweetens the air, and the whole quiet weight of ` +
      `home hangs in it like the light.`);
    room('cor_farm_fields', 'The Grainfields',
      `Broad fields of Corellian grain rolling gold to the horizon, rippling in ` +
      `the wind like a slower sea, the harvest-droids crawling the far rows. This ` +
      `is the plain green wealth beneath all Corellia's star-proud noise — the ` +
      `land that feeds the world that builds the ships — and it feeds, too, ` +
      `something in the spacer's heart that the stars never quite fill.`);
    room('cor_farm_hills', 'The Rolling Hills',
      `Low green hills unrolling into the hinterland's blue distance, dotted with ` +
      `grazing beasts and the odd homestead-roof, the sky enormous overhead. A ` +
      `walker can be alone here in a way Coronet never allows, with only the wind ` +
      `and the wide land, and understand at last why even the loudest Corellian ` +
      `carries a quiet hill somewhere inside them.`);
    room('cor_farm_ridge', 'The High Ridge',
      `A long ridge crowning the hinterland, from which the whole country lies ` +
      `open — fields and vineyards and villages, the distant gleam of the sea, ` +
      `and beyond it the far smudge of Coronet, small and hazed and, from up ` +
      `here, almost forgivable. Old Corellians come here to think, and the young ` +
      `to dream of leaving, and both, in the end, to remember why they stay.`);
    room('cor_farm_stream', 'The Meadow Stream',
      `A clear stream chuckling through a water-meadow bright with flowers, the ` +
      `willows trailing, the trout hanging in the cool green shade. It is a ` +
      `perfect small paradise, unmarked on any chart, known only to the village ` +
      `and the beasts, and a traveller who finds it by luck will carry the memory ` +
      `of it, unaccountably, longer than half the wonders of the stars.`);
    room('cor_farm_well', 'The Old Well',
      `A stone well on the village edge, its water sweet and cold and deep, its ` +
      `windlass worn smooth by generations of hands. The oldest thing in the ` +
      `village, older than the chapel, it was here — the grandmothers say — ` +
      `before the treasure ships, before Coronet, back when the Five Brothers ` +
      `were young; and the water, they say, remembers, and grants a true wish to ` +
      `a pure thirst, now and then.`);
    room('cor_farm_grove', 'The Standing Grove',
      `A grove of ancient trees crowning a low mound, older than any farm, that ` +
      `the villagers leave uncut by an instinct they cannot name. The Green Jedi ` +
      `know it: a place where the Force runs quiet and deep, one of many across ` +
      `the hinterland, the roots of Corellia's strangeness reaching up into the ` +
      `sunlight. The village holds its harvest-rites here, half-remembering why.`);
    room('cor_farm_backroad', 'The Sunken Lane',
      `An ancient sunken lane between high hedged banks, older than memory, ` +
      `worn by ten thousand years of feet and cart-wheels down below the level of ` +
      `the fields. It runs, the villagers say, toward the old places under the ` +
      `hills — the tunnels, the drowned first city, the deep Corellian past — and ` +
      `they do not follow it far, and warn a stranger, kindly, to do the same.`);

    link('cor_farm_road', 's', 'cor_farm_village');
    link('cor_farm_village', 'e', 'cor_farm_inn');
    link('cor_farm_village', 'w', 'cor_farm_market');
    link('cor_farm_village', 's', 'cor_farm_fields');
    link('cor_farm_village', 'ne', 'cor_farm_chapel');
    link('cor_farm_village', 'nw', 'cor_farm_mill');
    link('cor_farm_village', 'se', 'cor_farm_homestead');
    link('cor_farm_village', 'sw', 'cor_farm_well');
    link('cor_farm_inn', 'e', 'cor_farm_vineyard');
    link('cor_farm_vineyard', 'e', 'cor_farm_orchard');
    link('cor_farm_market', 'w', 'cor_farm_farmhouse');
    link('cor_farm_farmhouse', 's', 'cor_farm_barn');
    link('cor_farm_fields', 's', 'cor_farm_hills');
    link('cor_farm_hills', 's', 'cor_farm_ridge');
    link('cor_farm_homestead', 'e', 'cor_farm_stream');
    link('cor_farm_mill', 'n', 'cor_farm_grove');
    link('cor_farm_ridge', 'e', 'cor_farm_backroad');
    // Gold Coast -> Hinterland.
    link('cor_coast_road', 's', 'cor_farm_road');

    /* ================================================================= *
     *  X. THE OLD QUARTER & THE UNDERTUNNELS  (16) — the drowned first city
     *     and the Selonian dark, where the deep past of the Five Brothers
     *     waits.
     * ================================================================= */
    room('cor_old_gate', 'The Old Quarter Gate',
      `The stair from the civic centre lets out in the Old Quarter — the original ` +
      `Coronet, sunk and half-abandoned beneath the modern city that grew over ` +
      `its roofs. The light is dim and green-gold, filtered down through grates ` +
      `and light-wells; the buildings are older and stranger; and the air has the ` +
      `cool, patient weight of a place the bright world above has agreed to ` +
      `forget.`);
    room('cor_old_plaza', 'The Sunken Plaza',
      `A grand old plaza of the first Coronet, its fountains dry, its statues ` +
      `worn faceless, roofed now by the underside of the city built above. Folk ` +
      `still live here — the poor, the private, the old-blooded who never left — ` +
      `and the plaza keeps a hushed, faded dignity, a memory of the age when this ` +
      `was the whole of the city and the sky was still overhead.`);
    room('cor_old_catacombs', 'The Catacombs',
      `Tunnels of the old city's dead, the biers and urns of the treasure-ship ` +
      `age receding into the dark, the dust of centuries soft underfoot. The ` +
      `Old Quarter buries its dead here still, beside the ancient ones, and the ` +
      `catacombs run on further than any map, down toward the older tunnels the ` +
      `city did not dig and cannot explain.`);
    room('cor_old_vault', 'The Sealed Vault',
      `A great sealed vault-door in the catacomb wall, its lock a mechanism no ` +
      `living Corellian knows how to work, its surface graven with the five-star ` +
      `sigil of the Brothers and older marks beneath. The Old Quarter has left it ` +
      `sealed for as long as anyone recalls, and tells its children not to ` +
      `wonder what a people would lock so hard against their own descendants, and ` +
      `fails, as every generation fails, to stop them wondering.`);
    room('cor_old_cistern', 'The Great Cistern',
      `A vast flooded cistern of the old city, its black water still and cold ` +
      `beneath a vaulted roof furred with the drip of ages, the pumps that once ` +
      `emptied it long dead. The water hides the deepest streets of the first ` +
      `Coronet, drowned and perfect in the dark, and the Selonians, the old ` +
      `folk say, know the ways through it, and share them with no one who walks ` +
      `on two legs.`);
    room('cor_old_selonian', 'The Selonian Den',
      `A warm, fur-lined den of the Selonians who dwell in the tunnels beneath ` +
      `Coronet — sleek, sinuous, matriarchal tunnel-folk from the Brother-world ` +
      `of Selonia, who came to Corellia in some forgotten age and kept, down ` +
      `here, to their own ancient ways. They are grave and guarded and ` +
      `long-memoried, and they keep, they hint, a truth about the Five Brothers ` +
      `that the surface-folk have not earned the hearing of.`);
    room('cor_old_warren', 'The Tunnel Warren',
      `A branching warren of Selonian-cut tunnels, smooth-walled and warm and ` +
      `utterly without signage, for a Selonian needs no map underground any more ` +
      `than a Corellian needs one in the sky. A surface-walker is lost in three ` +
      `turnings; the Selonians move through it like water through a root, and ` +
      `watch the stranger's blundering with a patience that is not quite ` +
      `contempt.`);
    room('cor_old_forge', 'The Old Forge',
      `An ancient forge of the first city, its stone hearths cold now, its walls ` +
      `black with the smoke of the treasure-ship age when Corellia first learned ` +
      `to work the metal that would make it. The Old Quarter keeps one fire lit ` +
      `here still, out of pride, and a few old smiths work the old ways, and ` +
      `swear the metal comes out truer down here in the deep than ever it does in ` +
      `the bright yards above.`);
    room('cor_old_well', 'The Deep Well',
      `A well older than the Old Quarter, sunk by no recorded hand, its shaft ` +
      `dropping past the drowned city into a dark the old folk will not measure. ` +
      `The water that rises in it is strange — too pure, too cold, faintly ` +
      `sweet — and the Selonians revere it, and the surface-folk avoid it, and ` +
      `the one thing all agree is that it comes from deeper than any water on ` +
      `Corellia has a right to.`);
    room('cor_old_shrine', 'The Forgotten Shrine',
      `A shrine of the first city, its god forgotten, its offerings turned to ` +
      `dust, its walls carved with a procession of figures bearing a five-pointed ` +
      `star toward a doorway that is not there. The old folk leave it be; the ` +
      `Green Jedi visit it, quietly, and study the carvings, and come away ` +
      `troubled, and will say only that the first Corellians knew something they ` +
      `should perhaps have written down.`);
    room('cor_old_archive', 'The Drowned Archive',
      `A half-flooded archive of the first city, its records rotted or sealed in ` +
      `crumbling crystal, its knowledge mostly lost to the patient water. What ` +
      `little can still be read speaks of the Five Brothers as a thing made — ` +
      `assembled, moved, set in their courses by a hand and an engine out of the ` +
      `deep past — and then breaks off, always, at the same place, as if the ` +
      `writers themselves had been forbidden to finish.`);
    room('cor_old_observatory', 'The Ancient Observatory',
      `A chamber of the deep past, its purpose unmistakable and impossible: a ` +
      `great stone orrery of the Corellian system, the five worlds and their ` +
      `suns wrought in metal that has not tarnished in uncounted ages, and at its ` +
      `heart a model of a station — Centerpoint — with lines of graven force ` +
      `reaching out to draw the Brothers together across the void. Whoever built ` +
      `this knew how the system was made, because, the Green Jedi fear, they were ` +
      `the ones who made it.`);
    room('cor_old_chamber', 'The Repulsor Chamber',
      `The deepest built place beneath Coronet: a vast, humming, dormant chamber ` +
      `of the ancient technology, its walls a honeycomb of dead mechanism, its ` +
      `air alive with a pressure that is felt rather than heard. It is a node, ` +
      `the Selonians say, of the great engine that moved the Brothers — a ` +
      `planetary repulsor, sleeping, one of many across the five worlds — and it ` +
      `is not, they add, as wholly asleep as the surface-folk would wish.`);
    room('cor_old_den', 'The Undertown',
      `A hidden undertown where the tunnels' human dwellers keep a hard, secret ` +
      `life beyond the reach of CorSec and the White Worms both — the truly ` +
      `hidden, the truly lost, and a few who have simply chosen the honest dark ` +
      `over the lying light. They trade with the Selonians and mistrust the ` +
      `surface, and they know the tunnels almost as well as their fur-lined ` +
      `neighbours, which is to say: enough to survive them.`);
    room('cor_old_farmside', 'The Hill Tunnels',
      `Where the undertunnels reach out under the hinterland, the Selonian-cut ` +
      `ways meeting the ancient sunken lanes that run down from the farm-country ` +
      `above. Roots break through the roof; the air smells of earth and deep ` +
      `water; and a traveller who came down the sunken lane from the green hills ` +
      `meets, here, the same old dark that rises under the loud city, and ` +
      `understands that all of Corellia stands on it.`);
    room('cor_old_tunnelmouth', 'The Undertunnel Mouth',
      `The lightless mouth where Blue Sector's broken stair meets the old ` +
      `tunnels, a boundary between two kinds of dark — the sector's hard misery ` +
      `above and the deep, patient, older strangeness below. The White Worms dump ` +
      `here what they must be rid of and go no further; even the gang, for all ` +
      `its cruelty, does not care to meet what keeps the tunnels, or to learn ` +
      `what the Selonians are so calmly waiting for.`);

    link('cor_old_gate', 'n', 'cor_old_plaza');
    link('cor_old_plaza', 'n', 'cor_old_catacombs');
    link('cor_old_plaza', 'e', 'cor_old_cistern');
    link('cor_old_plaza', 'w', 'cor_old_forge');
    link('cor_old_plaza', 'ne', 'cor_old_archive');
    link('cor_old_plaza', 'nw', 'cor_old_shrine');
    link('cor_old_plaza', 'se', 'cor_old_warren');
    link('cor_old_plaza', 'sw', 'cor_old_den');
    link('cor_old_plaza', 'd', 'cor_old_observatory');
    link('cor_old_catacombs', 'n', 'cor_old_vault');
    link('cor_old_catacombs', 'w', 'cor_old_tunnelmouth');
    link('cor_old_cistern', 'e', 'cor_old_selonian');
    link('cor_old_selonian', 'e', 'cor_old_chamber');
    link('cor_old_forge', 's', 'cor_old_well');
    link('cor_old_warren', 'e', 'cor_old_farmside');
    // City Centre -> Old Quarter (down the stair).
    link('cor_civic_oldway', 'd', 'cor_old_gate');
    // Blue Sector -> Undertunnels (down).
    link('cor_blue_downstair', 'd', 'cor_old_tunnelmouth');
    // Hinterland -> Hill Tunnels.
    link('cor_farm_backroad', 's', 'cor_old_farmside');

    /* ================================================================= *
     *  Inhabitants: placed folk and foes, and the starting kit of a world
     *  that arms itself as a matter of course.
     * ================================================================= */

    // --- Gear ---
    R.cor_row_arms.add(world.item({
      name: 'Corellian blaster pistol',
      keywords: ['blaster', 'pistol', 'corellian', 'gun'],
      short: 'A fine Corellian blaster pistol rests in the armourer\'s rack.',
      description:
        'A heavy, elegant sidearm of famous Corellian make — the pattern a ' +
        'certain breed of spacer swears by above all others — balanced like a ' +
        'living thing and finished with a gunsmith\'s pride. On Corellia a good ' +
        'blaster is nearly a birthright, and this is a very good blaster.',
      weight: 2,
      damage: [4, 8],
      accuracy: 2,
    }));
    R.cor_yard_salvage.add(world.item({
      name: 'hydrospanner',
      keywords: ['hydrospanner', 'spanner', 'tool', 'wrench'],
      short: 'A hefty hydrospanner lies among the salvage.',
      description:
        'A shipwright\'s heavy hydrospanner, worn to a dull shine, meant for the ' +
        'seizing of stubborn couplings and, at need, the discouraging of ' +
        'stubborn people. Every Corellian crew keeps one to hand, for the ship ' +
        'and for the argument both.',
      weight: 4,
      damage: [4, 7],
      accuracy: 1,
    }));
    R.cor_green_dojo.add(world.item({
      name: 'training lightsaber',
      keywords: ['lightsaber', 'saber', 'sabre', 'training'],
      short: 'A Green Jedi training saber rests in the practice-rack.',
      description:
        'A Green Jedi practice-blade, its plasma throttled low, plainer and ' +
        'sturdier than any Coruscant-forged hilt — a working tool, made to teach, ' +
        'made to last, made on Corellia. To hold it lit is to feel the quiet ' +
        'rooted strength of the order that shaped it.',
      weight: 1,
      damage: [4, 8],
      accuracy: 2,
    }));
    R.cor_blue_chopshop.add(world.item({
      name: 'vibroblade',
      keywords: ['vibroblade', 'blade', 'knife', 'vibro'],
      short: 'A vibroblade sits on the chop-shop rack, humming faintly.',
      description:
        'A wicked short blade whose edge shivers at ultrasonic speed, parting ' +
        'armour and flesh alike. A Blue Sector favourite, off the books and no ' +
        'questions asked, and a great deal quieter than a blaster in a warren ' +
        'where CorSec still, sometimes, listens.',
      weight: 2,
      damage: [4, 8],
      accuracy: 1,
    }));

    // --- Folk to talk to ---
    R.cor_port_lounge.add(world.mob({
      name: 'veteran pilot',
      keywords: ['pilot', 'spacer', 'veteran'],
      short: 'A veteran pilot nurses a caf and watches the launch-aprons.',
      description:
        'A weathered Corellian freighter-jock with a scar, a squint, and a ' +
        'thousand runs behind the eyes, between ships and in no hurry to be ' +
        'otherwise. She has flown everything CEC ever built and buried a few ' +
        'friends who flew it worse.',
      xp: 0,
      dialogue:
        'Fresh off the Coruscant transit, huh? Welcome to the only world in the ' +
        'galaxy worth coming back to. Word of advice, groundling: down here we ' +
        'make our own luck, but the Blue Sector\'ll make its own out of you if ' +
        'you go wandering flush and friendly. Buy a good blaster on the Row, ' +
        'nod to CorSec, and never, ever draw to an inside straight in the Blue ' +
        'Bantha. That last one\'s free.',
    }));
    R.cor_civic_corsec.add(world.mob({
      name: 'CorSec officer',
      keywords: ['officer', 'corsec', 'cop', 'detective'],
      short: 'A hard-eyed CorSec officer looks up from a case-board.',
      description:
        'A career officer of the Corellian Security Force, green-trimmed grey ' +
        'and incorruptible and tired to the bone, who has spent a lifetime ' +
        'holding a cynical world to a standard it claims not to want. He believes ' +
        'in the badge the way the Green Jedi believe in the Force — plainly, and ' +
        'without illusion, and to the end.',
      xp: 0,
      dialogue:
        'Offworlder. Good. You can hear this without it being politics: this ' +
        'world runs on the fiction that everyone\'s a lovable rogue. Mostly ' +
        'they are. But the White Worms down in Blue Sector aren\'t rogues, ' +
        'they\'re rot, and they work children, and the city up here would ' +
        'rather not know. CorSec knows. We always know. Keep your nose clean and ' +
        'we\'ll never speak again — and that\'s me being friendly.',
    }));
    R.cor_yard_museum.add(world.mob({
      name: 'CEC shipwright',
      keywords: ['shipwright', 'engineer', 'worker', 'wright'],
      short: 'An old shipwright polishes a scale-model with enormous care.',
      description:
        'A lifer of the Corellian Engineering Corporation, hands scarred by ' +
        'sixty years of durasteel, prouder of the ships he has helped raise than ' +
        'of anything else in his life or the next. He speaks of hulls the way ' +
        'other men speak of children.',
      xp: 0,
      dialogue:
        'See that one? YT-thirteen-hundred. Ugly as a mynock and twice as ' +
        'stubborn, and there\'s not a hull in the galaxy I\'d sooner trust my ' +
        'life to. That\'s Corellia, friend — we don\'t build \'em pretty, we ' +
        'build \'em to bring you home. A thousand years we\'ve done it. Empires ' +
        'come and go up in that Core sky of yours. The ships remain.',
    }));
    R.cor_green_elder.add(world.mob({
      name: 'Green Jedi Master',
      keywords: ['master', 'jedi', 'green', 'elder'],
      proper: true,
      short: 'The old Green Jedi Master turns from the sea-window, unhurried.',
      description:
        'An age-quieted Master of the Corellian order, green cape worn soft as a ' +
        'farmer\'s coat, eyes the colour of the sea beyond her window. There is ' +
        'nothing of the remote Coruscant Temple about her; she is rooted as an ' +
        'old tree, and her power is the deeper for never once having left the ' +
        'ground it grew from.',
      xp: 0,
      dialogue:
        'You have the Core about you, child — the smell of that great cold ' +
        'Temple where they teach a Jedi to cut away everything they love and ' +
        'call the wound wisdom. We do it otherwise here. We keep our families, ' +
        'our world, our names. The Force is not served by the lonely; it is ' +
        'served by the rooted. Coruscant has forgotten that, and grows blind, ' +
        'and does not know it is blind. Watch the sky, offworlder. The old ' +
        'engines under our feet are stirring, and the great Order cannot feel ' +
        'it. We can.',
    }));
    R.cor_old_selonian.add(world.mob({
      name: 'Selonian den-mother',
      keywords: ['selonian', 'den-mother', 'mother', 'matriarch'],
      short: 'A sleek Selonian regards you from the warm dark, unblinking.',
      description:
        'A matriarch of the Selonian folk who keep the tunnels beneath Coronet: ' +
        'sinuous, otter-sleek, grave beyond any surface-dweller, her whiskered ' +
        'face unreadable and her stillness absolute. Her people were old in the ' +
        'Five Brothers before humans ever came, and she carries that age in her ' +
        'like deep water.',
      xp: 0,
      dialogue:
        'You walk on two legs and you walk in the dark, surface-thing, and you ' +
        'do not know why the dark is warm. We know. We have always known. The ' +
        'Brothers did not drift together, human. They were called — pulled ' +
        'across the black by the engines your feet stand upon, in an age your ' +
        'records cannot reach. The station in your sky is not dead. It sleeps. ' +
        'And we, who tend its roots, feel it beginning, very slowly, to dream.',
    }));

    // --- The White Worm boss: a talkable power and a hard fight ---
    R.cor_blue_den.add(world.mob({
      name: 'the White Worm',
      keywords: ['worm', 'white', 'boss', 'grindalid'],
      proper: true,
      short: 'The pale bulk of the White Worm boss coils in the den\'s deep shadow.',
      description:
        'The master of Blue Sector: a pale, grub-fleshed Grindalid crime-lord who ' +
        'cannot bear the light and rules the sunless warren through fear, ' +
        'appetite, and an army of stolen children. Soft-voiced, patient, and ' +
        'utterly without pity, it has fed on the sector\'s misery for a ' +
        'generation and calls the feeding order.',
      level: 8,
      maxHp: 70,
      stats: { str: 17, dex: 14, con: 18, int: 15 },
      damage: [6, 12],
      armor: 3,
      xp: 300,
      dialogue:
        'Come into the dark, little visitor, where the light can\'t help you. ' +
        'Blue Sector is mine — every stolen child, every twist of spice, every ' +
        'frightened worker who builds the pretty ships and pays me for the ' +
        'privilege of living near them. CorSec can\'t touch me and the city ' +
        'won\'t look. You? You\'re just meat that wandered too deep. But talk on, ' +
        'if you like. I do so enjoy a conversation before a meal.',
    }));

    // --- Hostiles, scaling out from the bright districts to the deep ---
    R.cor_blue_warren.add(world.mob({
      name: 'White Worm tough',
      keywords: ['tough', 'ganger', 'worm', 'thug'],
      short: 'A White Worm tough steps out of the warren, blade already drawn.',
      description:
        'A hardened enforcer of the White Worms, pale from a life out of the ' +
        'sun, colours on his arm and cruelty in his ledger, who keeps the ' +
        'sector\'s children in line and the sector\'s marks in fear.',
      hostile: true,
      level: 3,
      maxHp: 30,
      stats: { str: 14, dex: 13, con: 13, int: 8 },
      damage: [3, 7],
      armor: 1,
      xp: 75,
      respawns: 90,
    }));
    R.cor_blue_pit.add(world.mob({
      name: 'pit-fighter',
      keywords: ['pit-fighter', 'fighter', 'brawler'],
      short: 'A scarred pit-fighter sizes you up across the bloody sand.',
      description:
        'A hard case who fights the Blue Sector pit for the Worms\' coin and the ' +
        'crowd\'s roar, all scar-tissue and battered confidence, who has beaten ' +
        'better than you look and expects to again.',
      hostile: true,
      level: 4,
      maxHp: 40,
      stats: { str: 16, dex: 13, con: 15, int: 7 },
      damage: [4, 9],
      armor: 1,
      xp: 110,
      respawns: 100,
    }));
    R.cor_yard_sublevel.add(world.mob({
      name: 'malfunctioning loader droid',
      keywords: ['droid', 'loader', 'loadlifter'],
      short: 'A loader droid lurches from the flooded dark, claws snapping.',
      description:
        'A heavy CEC cargo-droid lost to the yard\'s flooded underlevel, its ' +
        'logic-core corroded to nonsense, its manipulator-claws still strong ' +
        'enough to crush a hull-section, or a skull, without noticing the ' +
        'difference.',
      hostile: true,
      level: 4,
      maxHp: 42,
      stats: { str: 17, dex: 9, con: 16, int: 2 },
      damage: [4, 9],
      armor: 3,
      xp: 115,
      respawns: 120,
    }));
    R.cor_blue_sump.add(world.mob({
      name: 'sump-crawler',
      keywords: ['crawler', 'sump', 'thing', 'beast'],
      short: 'Something pale and eyeless heaves up out of the black sump-water.',
      description:
        'A pallid, boneless thing the poisoned canal has shaped over generations, ' +
        'all reach and grip and blind hunger, that lairs in the sump and takes ' +
        'whatever the sector feeds it or forgets to guard. It has no eyes. In the ' +
        'sump, it has never needed them.',
      hostile: true,
      level: 5,
      maxHp: 50,
      stats: { str: 17, dex: 12, con: 16, int: 4 },
      damage: [5, 10],
      armor: 2,
      xp: 160,
      respawns: 150,
    }));
    R.cor_coast_cove.add(world.mob({
      name: 'sea-drake',
      keywords: ['sea-drake', 'drake', 'beast', 'serpent'],
      short: 'A sleek sea-drake rears from the cove-water, jaws wide.',
      description:
        'A sleek, toothed predator of the Corellian sea, drawn into the ' +
        'smugglers\' cove by the leavings of its trade, fast and cold and ' +
        'territorial. The fishers respect it, the smugglers curse it, and a ' +
        'swimmer who meets it learns that the kind sea keeps a few hard secrets ' +
        'of its own.',
      hostile: true,
      level: 5,
      maxHp: 48,
      stats: { str: 16, dex: 16, con: 15, int: 5 },
      damage: [5, 10],
      armor: 2,
      xp: 155,
      respawns: 150,
    }));
    R.cor_old_chamber.add(world.mob({
      name: 'ancient sentinel',
      keywords: ['sentinel', 'guardian', 'droid', 'ancient'],
      short: 'An ancient sentinel unfolds from the humming wall, awake at last.',
      description:
        'A guardian of the deep past, a thing of the same uncanny craft as the ' +
        'repulsor it wards — neither wholly droid nor wholly machine, roused from ' +
        'an age-long sleep by your trespass, moving with a slow, terrible ' +
        'certainty. It was set here to keep the sleeping engine, and it does not ' +
        'recognise the passage of the ages, or you, as anything but a thing to be ' +
        'removed.',
      hostile: true,
      level: 8,
      maxHp: 72,
      stats: { str: 19, dex: 12, con: 18, int: 10 },
      damage: [7, 12],
      armor: 4,
      xp: 320,
      respawns: 240,
    }));

    return {
      area: corellia,
      arrivalId: 'cor_port_arrival',    // where the Coruscant transit lands
      returnId: 'cor_port_concourse',   // where the transit back to Coruscant is
    };
  };
})(typeof window !== 'undefined' ? window : this);
