/*
 * empyrean.js — EMPYREAN, capital of the Seven-Star Empire, upon Kaelinu.
 *
 * A 200-room area (a large portion of the city, not the whole of it). Kaelinu
 * reads as ordinary fantasy only if you aren't paying attention; look closer
 * and it is a world that went differently from ours — its countries, seas, and
 * ideas the linguistic cousins of names you half-know. The Seven-Star Empire is
 * the France that might have been; Empyrean its Paris, astride the river
 * Sequane. Across the narrow sea called the Sleeve lies the kingdom of Albeon.
 * The dead prestige tongue of scholars and priests is Old Latian; the state
 * faith is the Church of the Seven Stars, whose clergy read the Heptad — the
 * seven-starred crown of heaven — for the mandate of the Astrarch who rules
 * from the Astrarium.
 *
 * Content, not framework — a MUD zone file. Populated into a shared World by
 * world-data.js, which passes in the builder context and flushes the links.
 *
 * LAYOUT (districts):
 *   isle_*  The Isle (the ancient island heart) ....... 24   START
 *   quai_*  The Quays of the Sequane (banks & bridges).. 18
 *   star_*  The Astrarium (the imperial palace) ........ 22
 *   gren_*  Les Grènes (the great market) .............. 20
 *   coll_*  The Collegium (the university, Left Bank) ... 22
 *   sanc_*  The Sanctuary (churches of the Left Bank) ... 16
 *   mar_*   The Gilded Marais (the nobles' quarter) ..... 18
 *   mont_*  Montcorbeau (the butte of artists) .......... 18
 *   bast_*  The Bastion & Faubourg (fortress & workers).. 20
 *   cour_*  The Cour des Miracles (the thieves' slum) ... 22   the impasse
 *                                                         ---
 *                                                         200
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildEmpyrean = function buildEmpyrean(ctx) {
    const { world, R, room, link } = ctx;

    const empyrean = world.area({
      id: 'empyrean',
      name: 'Empyrean, City of the Seven Stars',
      description:
        'The capital of the Seven-Star Empire, astride the river Sequane, ' +
        'upon the world of Kaelinu.',
    });

    /* ================================================================= *
     *  I. THE ISLE  (24) — the ancient island heart, in the Sequane.
     * ================================================================= */
    room('isle_carrefour', 'The Carrefour of the Seven Stars',
      `The oldest crossroads in the Empire, and its truest centre: a broad ` +
      `star-shaped place where seven ways meet, one for each star of the Heptad, ` +
      `its cobbles worn to silver by two thousand years of feet. From here the ` +
      `whole city radiates — the Great Sept to the north, the courts of law to ` +
      `the south, the twin bridges east and west across the Sequane. A single ` +
      `neglected archway to the northwest lets onto a lane the guidebooks do not ` +
      `mention.`);
    room('isle_parvis', 'The Star-Parvis',
      `The great forecourt of the Sept, where the faithful gather and the ` +
      `pigeons rule. A bronze compass-rose is set into the paving — the Point ` +
      `Sidereal — from which, by imperial decree, all distances in the Empire ` +
      `are measured. Every road on Kaelinu, they say, begins under your feet ` +
      `right here.`);
    room('isle_sept', 'The Great Sept of the Seven Stars',
      `The mother-church of the Empire rears above you, a cliff of pale stone and ` +
      `stained glass, its two square towers snagging the low cloud. Over the ` +
      `west doors the Heptad is carved in glory, seven stars about a throne, and ` +
      `beneath them the Last Reckoning, where kings and beggars are sorted with ` +
      `equal indifference. The nave opens within; a stair climbs the belfry.`);
    room('isle_nave', 'The Nave of Stars',
      `A forest of stone pillars soars into gloom, and far overhead the vaulting ` +
      `is painted midnight-blue and pricked with seven gilded stars that seem, ` +
      `as you move, to follow. Candlelight pools on the flagstones. A whisper ` +
      `here carries a hundred feet and comes back changed.`);
    room('isle_choir', 'The Astral Choir',
      `The heart of the Sept, screened in carved oak, where the star-clergy sing ` +
      `the offices that measure the Empire's day. The seven-branched candelabrum ` +
      `burns above the high altar. A worn stair descends to the crypt where the ` +
      `Astrarchs lie.`);
    room('isle_crypt', 'The Crypt of Astrarchs',
      `Cold vaults beneath the choir, where the emperors of the Seven Stars are ` +
      `laid in stone boats, hands folded on marble swords, waiting out eternity ` +
      `in the dark they ruled the light to avoid. The oldest tombs have no names ` +
      `left, only the crowned-star sigil, worn nearly smooth.`);
    room('isle_reliquary', 'The Reliquary of the Heptad',
      `A chapel of locked gold cases holding the Sept's holiest things: a splinter ` +
      `of the First Observatory, the finger-bone of a star-martyr, and, behind ` +
      `seven grilles, the Empire's dearest relic — a fragment of true night sky, ` +
      `sealed in glass, in which (the priests swear) the seven stars still turn.`);
    room('isle_belfry', 'The Belfry of the Sept',
      `The bell-loft, all beams and droppings and the great bronze bells that ` +
      `name the hours to the whole city. From the louvres you can see the Sequane ` +
      `wind silver through the roofs, and, on a clear day, the white basilica far ` +
      `off on its butte, and further still the grey smear of the sea called the ` +
      `Sleeve, and Albeon somewhere beyond it.`);
    room('isle_sacristy', 'The Sacristy',
      `A panelled room smelling of beeswax and incense, where the vestments are ` +
      `kept and the clergy robe. Chasubles hang like sleeping saints. A young ` +
      `deacon is always polishing something and pretending not to listen.`);
    room('isle_chapterhouse', 'The Chapter House',
      `An octagonal room where the canons of the Sept meet to govern their little ` +
      `empire within the Empire. Their voices, raised over precedence and ` +
      `benefices, have nothing of the stars about them. The Church of the Seven ` +
      `Stars is very rich, and being rich is a great deal of work.`);
    room('isle_hospice', 'The Hôtel-Sept',
      `The great charity-hospital of the Isle, older than the Empire, where the ` +
      `sick of Empyrean are nursed by the Sisters of the Star two-to-a-bed and ` +
      `three-when-the-fever-comes. It is clean, and kind, and overwhelmed, and it ` +
      `never, ever closes its doors.`);
    room('isle_foundling', 'The Foundling Wheel',
      `A niche in the hospice wall fitted with a turning cradle, where a mother ` +
      `with no other choice may leave a child unseen and ring a little bell. The ` +
      `Sisters take them all in and name them for the day's saint. Half of ` +
      `Empyrean's beggars, and a fair few of its dukes, began their lives on this ` +
      `slow-turning wheel.`);
    room('isle_almonry', 'The Almonry',
      `A cold hall where the Sept doles out bread and thin soup to a queue that ` +
      `starts before dawn. The almoner keeps a tally, and a truncheon, and the ` +
      `firm theology that charity is best served in exactly sufficient quantities ` +
      `to prevent both starvation and revolution.`);
    room('isle_flowermarket', 'The Flower Market',
      `Even here, on the stony Isle, spring is sold by the armful — buckets of ` +
      `iris and star-of-Bethlem and hothouse roses forced pale, tended by ` +
      `weather-cracked women who have knelt at this trade for forty years. It is ` +
      `the sweetest-smelling corner of Empyrean, and the flower-women miss ` +
      `nothing that passes.`);
    room('isle_birdmarket', 'The Bird Market',
      `On market-days the Isle fills with the racket of cages: finches and larks ` +
      `and blinded nightingales that sing the sweeter for the dark, and the grey ` +
      `parrots of the far Sunset Isles that curse in three languages. On other ` +
      `days the empty cages hang like a memory of song.`);
    room('isle_quaywalk', 'The Isle Quay-Walk',
      `A tree-lined walk along the Isle's northern embankment, where clerks eat ` +
      `their lunch on the parapet and watch the barges slide by beneath. The ` +
      `Sequane is broad and brown and busy here, the working artery of the ` +
      `capital.`);
    room('isle_pointe', 'The Pointe of the Isle',
      `The Isle narrows to a green prow that splits the river, planted with old ` +
      `willows that trail their hair in the current. Lovers come here, and the ` +
      `heartbroken, and it is not always easy to tell which is which. The two ` +
      `arms of the Sequane rejoin below, and go on to the sea.`);
    room('isle_gardentip', 'The Vert-Galant Garden',
      `A small sunken garden at the water's edge, named for a long-dead prince ` +
      `whose statue, sword on hip and hat at a rake, still charms the pigeons. ` +
      `The Empire remembers its scoundrels more fondly than its saints, and ` +
      `builds them better gardens.`);
    room('isle_palaisyard', 'The Palais Yard',
      `A severe court of grey stone before the Palais of Law, where advocates in ` +
      `black hurry across the flags trailing clerks and consequences. Here the ` +
      `Empire keeps its justice, its records, and — in the towers above — a few ` +
      `of the people it would rather forget.`);
    room('isle_palais', 'The Palais of Law',
      `The seat of the imperial courts: a labyrinth of chambers where fortunes ` +
      `and necks are argued over in Old Latian nobody outside the profession can ` +
      `follow, which is rather the point. Gilded and gloomy in equal measure, it ` +
      `smells of dust, sealing-wax, and slow money.`);
    room('isle_greatchamber', 'The Great Chamber of the Parlement',
      `A vast hall beneath a ceiling of blue and gold, where the Parlement of ` +
      `Empyrean registers the Astrarch's edicts — or, in these fractious years, ` +
      `declines to. The empty benches seem to hold their breath. Something is ` +
      `coming that these old walls can feel and cannot name.`);
    room('isle_conciergerie', 'The Conciergerie',
      `A grim tower attached to the Palais, half clock-tower and half gaol, where ` +
      `the accused await the Empire's leisurely justice. The turnkey knows every ` +
      `stone and every story. A dank stair spirals down to the cells.`);
    room('isle_cells', 'The Conciergerie Cells',
      `Straw, stone, and the river's damp breath. Some cells are cages for the ` +
      `poor; a few, better furnished, house the fallen great, who pay their gaolers ` +
      `for candles and pretend to the last that this is a temporary ` +
      `inconvenience. The Sequane seeps through the lowest wall, patient as law.`);
    room('isle_horloge', 'The Clock-Tower Walk',
      `Beneath the Empire's first public clock — a marvel of blackened iron and ` +
      `gilt figures, that has told the hours to the Isle for three hundred years ` +
      `and lost, all told, less than a day. Empyreans set their lives by it. When ` +
      `it finally stops, the superstition runs, so will the Empire.`);

    link('isle_carrefour', 'n', 'isle_parvis');
    link('isle_carrefour', 's', 'isle_palaisyard');
    link('isle_carrefour', 'ne', 'isle_flowermarket');
    link('isle_parvis', 'n', 'isle_sept');
    link('isle_parvis', 'e', 'isle_hospice');
    link('isle_parvis', 'w', 'isle_foundling');
    link('isle_parvis', 'ne', 'isle_almonry');
    link('isle_sept', 'n', 'isle_nave');
    link('isle_sept', 'u', 'isle_belfry');
    link('isle_sept', 'e', 'isle_sacristy');
    link('isle_nave', 'n', 'isle_choir');
    link('isle_nave', 'e', 'isle_reliquary');
    link('isle_nave', 'w', 'isle_chapterhouse');
    link('isle_choir', 'd', 'isle_crypt');
    link('isle_flowermarket', 'e', 'isle_birdmarket');
    link('isle_flowermarket', 'n', 'isle_quaywalk');
    link('isle_quaywalk', 'w', 'isle_pointe');
    link('isle_quaywalk', 'e', 'isle_gardentip');
    link('isle_palaisyard', 's', 'isle_palais');
    link('isle_palaisyard', 'e', 'isle_conciergerie');
    link('isle_palaisyard', 'w', 'isle_horloge');
    link('isle_palais', 's', 'isle_greatchamber');
    link('isle_conciergerie', 'd', 'isle_cells');
    // Gateways off the Isle:
    link('isle_carrefour', 'e', 'quai_pontdroit');   // east bridge, Right Bank
    link('isle_carrefour', 'w', 'quai_pontgauche');  // west bridge, Left Bank
    link('isle_carrefour', 'nw', 'cour_cut');        // the lane the guidebooks omit

    /* ================================================================= *
     *  II. THE QUAYS OF THE SEQUANE  (18) — banks & bridges.
     * ================================================================= */
    room('quai_pontdroit', "The Pont of the Astrarch",
      `The great east bridge, broad as a boulevard, lined with the shops of ` +
      `goldsmiths who have paid dearly to trade above the river. Statues of the ` +
      `seven imperial virtues glower from the parapets; the seventh, Clemency, ` +
      `was struck by lightning a century ago and never replaced, which the ` +
      `pamphleteers find endlessly useful.`);
    room('quai_pontgauche', "The Pont of Scholars",
      `The west bridge, older and humbler, its roadway rutted by centuries of ` +
      `students trudging between the Isle and the Collegium. Booksellers have ` +
      `colonised its every recess. The Sequane runs fast beneath, the colour of ` +
      `weak tea, indifferent to learning.`);
    room('quai_rightquay', 'The Right Embankment',
      `The stone quay of the Right Bank, where the working river does its ` +
      `business: cranes swing, porters swear, and the smells of tar, fish, and ` +
      `wine contend for the air. Roads climb from here to the palace east, the ` +
      `great markets west, and the gilded Marais to the north.`);
    room('quai_leftquay', 'The Left Embankment',
      `The Left Bank quay, quieter and more thoughtful, where the water laps at ` +
      `steps worn hollow and old men fish for nothing in particular. The ` +
      `Collegium's bells drift down from the west; the Sanctuary's from the east.`);
    room('quai_booksellers', "The Booksellers' Quay",
      `A parade of green boxes bolted to the parapet, tended by the bouquinistes — ` +
      `sellers of secondhand books, foxed prints, and seditious pamphlets slipped ` +
      `between the sermons. Here you may buy a banned philosophy for a sol and an ` +
      `education for nothing, if you are willing to read standing up in the rain.`);
    room('quai_pontneuf', 'The Old Bridge',
      `The oldest crossing still standing, so encrusted with timber houses that ` +
      `you would not know you were on a bridge at all but for the river-cold ` +
      `seeping up through the floors. Whole families live and die here above the ` +
      `water, and every spring the flood takes one or two of the houses, and ` +
      `everyone agrees something really must be done.`);
    room('quai_ferry', 'The Ferry Steps',
      `Slime-green stairs down to a landing where a one-eyed ferryman poles ` +
      `passengers across for a copper, undercutting the bridges since before the ` +
      `bridges were built. He has ferried three plagues and one revolution across ` +
      `this water, and says the second was quieter.`);
    room('quai_launderers', "The Launderers' Stairs",
      `Broad steps where the washerwomen kneel at the river all day, beating the ` +
      `Empire's linen clean and its gossip filthy. Nothing happens in Empyrean ` +
      `that is not known first at the launderers' stairs, generally before it has ` +
      `finished happening.`);
    room('quai_isletip', 'The Sunken Steps',
      `A flight of steps that descends into the Sequane and does not stop — the ` +
      `remnant of some older quay, drowned when they raised the embankments. At ` +
      `low water you can see them going down, and down, green and wavering, to a ` +
      `door that no longer opens on anywhere.`);
    room('quai_grain', 'The Grain Wharf',
      `Barges heavy with wheat from the golden provinces tie up here to feed the ` +
      `hungry capital. The price of the bread these sacks become is the truest ` +
      `barometer in the Empire; when it rises, the Faubourg mutters, and clever ` +
      `men watch the Faubourg.`);
    room('quai_wine', 'The Wine Wharf',
      `The river-front of the great wine-halls, where the vintages of the whole ` +
      `Empire arrive by barge — the flinty whites of the north, the black wines ` +
      `of the south, and the thin sharp stuff the poor drink to forget they are ` +
      `poor. The cobbles here are permanently, gloriously stained.`);
    room('quai_customs', 'The River Custom-House',
      `A pompous little palace of gilt and greed where the Empire taxes everything ` +
      `that floats. The clerks are the most hated men on the river and know it, ` +
      `and take their comfort in the certainty that hatred, unlike wine, is ` +
      `not dutiable. At the stairs below, the cross-Sleeve packet-boat lies at ` +
      `her moorings: the long grey passage down the Sequane and over the sea to ` +
      `Lunden, in the kingdom of Albeon.`);
    room('quai_watergate', 'The Sea-Gate',
      `The deep-water gate of the river, an iron portcullis raised only for the ` +
      `great ocean-going ships that the lesser wharves upstream cannot take. At ` +
      `the stairs below lies the pride and folly of the Eastern Company: a ` +
      `towering carrack rigged for the long voyage, bound half across the world ` +
      `to the golden, secretive empire the sailors call Zipang, and back — ` +
      `a passage of months, and gold, and the not-small chance of never ` +
      `returning at all.`);
    room('quai_fishmarket', 'The River Fish-Market',
      `Slabs of glistening river-catch under a haze of gulls: pike and eel and ` +
      `the ugly bottom-feeders the poor stew for days. The fishwives' arms are ` +
      `red to the elbow and their tongues are the terror of the Left Bank. Cross ` +
      `one and you will hear about it in verse.`);
    room('quai_morgue', 'The Drowned House',
      `A low grey building where the river's dead are laid out on cold slabs ` +
      `behind glass, for the living to file past and, perhaps, to claim. The ` +
      `Sequane gives up two or three a week — the desperate, the drunk, the ` +
      `unlucky, the helped-along. It is, morbidly, one of the city's most ` +
      `popular free amusements.`);
    room('quai_baths', 'The River Baths',
      `Floating bath-houses moored to the quay, where for a copper the citizen may ` +
      `be briefly, publicly clean. Steam and shrieking rise from the men's side; ` +
      `a decorous silence from the women's. The water is drawn from the Sequane ` +
      `and returned to it, a little used.`);
    room('quai_tannery', "The Tanners' Quay",
      `The wind changes and you understand at once why the tanners were exiled to ` +
      `this downstream reach: a stench of lime, dung, and rotting hide that could ` +
      `stop a clock. The river runs a poisoned brown past their vats. They are ` +
      `rich, the tanners, and no one will marry them.`);
    room('quai_mint', 'The Imperial Mint',
      `A fortress of a building where the Empire's coin is struck under armed ` +
      `guard — the star-crowned sol, the silver livre, the little copper deniers ` +
      `that wear thin in the pockets of the poor. The presses thump day and night ` +
      `like a great slow heart minting the blood of the state.`);

    link('quai_pontdroit', 'n', 'quai_rightquay');
    link('quai_pontdroit', 'e', 'quai_pontneuf');
    link('quai_pontneuf', 's', 'quai_ferry');
    link('quai_ferry', 'e', 'quai_launderers');
    link('quai_launderers', 's', 'quai_isletip');
    link('quai_rightquay', 'ne', 'quai_grain');
    link('quai_rightquay', 'nw', 'quai_wine');
    link('quai_grain', 'e', 'quai_customs');
    link('quai_customs', 's', 'quai_watergate');
    link('quai_pontgauche', 'w', 'quai_booksellers');
    link('quai_pontgauche', 's', 'quai_leftquay');
    link('quai_booksellers', 's', 'quai_mint');
    link('quai_leftquay', 's', 'quai_fishmarket');
    link('quai_leftquay', 'sw', 'quai_baths');
    link('quai_leftquay', 'se', 'quai_tannery');
    link('quai_fishmarket', 'e', 'quai_morgue');
    // Gateways off the Quays:
    link('quai_rightquay', 'e', 'star_gate');   // Astrarium
    link('quai_rightquay', 'w', 'gren_gate');   // Les Grènes
    link('quai_rightquay', 'n', 'mar_gate');    // the Gilded Marais
    link('quai_leftquay', 'w', 'coll_gate');    // the Collegium
    link('quai_leftquay', 'e', 'sanc_gate');    // the Sanctuary

    /* ================================================================= *
     *  III. THE ASTRARIUM  (22) — the imperial palace.
     * ================================================================= */
    room('star_gate', 'The Astral Gate',
      `The gate of the palace: a triumphal arch crowned with the Heptad in gold, ` +
      `flanked by grenadiers of the Star-Guard who stand so still the sparrows ` +
      `nest in their bearskins. Beyond, the Astrarium — seat of the Emperor of ` +
      `the Seven Stars — spreads its wings of pale stone around a court you could ` +
      `march an army in.`);
    room('star_court', 'The Court of the Seven Stars',
      `A vast paved court where the whole theatre of empire plays out: ` +
      `ambassadors in their coaches, cavalry wheeling, petitioners cooling their ` +
      `heels for weeks. Seven fountains mark the seven stars. The palace rises on ` +
      `every side, and every window is watching.`);
    room('star_colonnade', 'The Colonnade',
      `A grand covered walk of coupled columns, the empire's taste made stone: ` +
      `cold, correct, and just a little too large for any human errand. Courtiers ` +
      `drift along it trading whispers that will be edicts by evening or ruin by ` +
      `dawn.`);
    room('star_hall', 'The Hall of Mirrors',
      `A gallery of dazzle where a hundred mirrors face a hundred windows, so that ` +
      `the whole shining length of it floats between two skies. Here the Astrarch ` +
      `receives, and here the courtiers array themselves like a garden of knives, ` +
      `each reflection multiplying the flattery and the danger.`);
    room('star_audience', 'The Audience Antechamber',
      `The last, worst room before the throne, where the great of the Empire wait ` +
      `to be admitted, ranked by a etiquette so fine that a misjudged bow can end ` +
      `a dynasty. The air is thick with perfume and terror. Everyone is smiling. ` +
      `No one is happy.`);
    room('star_throne', 'The Star-Throne',
      `The throne-room of Empyrean, and thus of the world: a chamber of such ` +
      `deliberate splendour that it seems designed to make a visitor forget they ` +
      `have a spine. The throne itself is a seat of silver beneath a canopy of ` +
      `midnight velvet sewn with seven diamonds — the Heptad brought to earth, ` +
      `that the Astrarch may sit among the stars while yet alive.`);
    room('star_balcony', "The Astrarch's Balcony",
      `The high balcony from which the Emperor shows himself to the people on the ` +
      `great feasts, a distant jewelled figure they cheer and, increasingly, do ` +
      `not. From up here the crowd is a carpet and their cheers a weather. It is ` +
      `a very long way down to where the bread is bought.`);
    room('star_treasury', 'The Star-Treasury',
      `Vaults of iron and gold beneath the throne, holding the crown-jewels of ` +
      `the Seven Stars and the deeper, less admitted truth of the Empire's ` +
      `finances, which is that it is magnificent and broke. The gold glitters. ` +
      `The ledgers, if you could read them, would make you weep.`);
    room('star_guard', 'The Guard-Room',
      `A blunt, functional room amid all the gilt, where off-duty grenadiers dice ` +
      `and grumble and clean the muskets of the Star-Guard. They are loyal, well ` +
      `fed, and rather better informed than their officers about the mood of the ` +
      `city they are paid to hold.`);
    room('star_wardrobe', 'The Robing Rooms',
      `Where the Astrarch's person is dressed each morning by a small nation of ` +
      `nobles, each with the hereditary honour of handling one glove. The ceremony ` +
      `takes two hours. The Empire has fought wars over the right to hold the ` +
      `left cuff.`);
    room('star_chapel', 'The Palace Chapel',
      `A jewel-box of a chapel where the imperial family hears the star-offices in ` +
      `private, screened from the vulgar devotion of the streets. The ceiling is ` +
      `one seamless painted heaven; the seven stars above the altar are real ` +
      `diamonds, and no one has ever quite dared to count them twice.`);
    room('star_kitchen', 'The Palace Kitchens',
      `A roaring underworld of fire and copper where two hundred cooks conjure the ` +
      `endless feasts of the court. Whole oxen turn on the spits; sugar is ` +
      `sculpted into palaces to be smashed for a single course. What is thrown ` +
      `out here each night would feed the Faubourg for a week, and everyone knows ` +
      `it, and that is a dangerous thing to be known.`);
    room('star_stables', 'The Imperial Stables',
      `Marble stalls finer than most men's houses, home to the cream-white horses ` +
      `of the imperial teams and the gilded coaches they draw. The head groom ` +
      `bows lower to the horses than to the deputies, and is, on the whole, ` +
      `right to.`);
    room('star_gardens', 'The Tuilliard Gardens',
      `Formal gardens of ruthless symmetry stretch away from the palace, gravel ` +
      `and clipped yew and cold fountains, laid out so that Nature herself seems ` +
      `to have been made to bow. Nurses walk their charges here, and lovers ` +
      `quarrel, and spies exchange more than glances beneath the indifferent ` +
      `hedges.`);
    room('star_parterre', 'The Star-Parterre',
      `A vast flowerbed clipped and planted into the shape of the Heptad, seven ` +
      `beds of bloom about a central pool, best seen from the palace windows ` +
      `above — for it was made for the eyes of one man, and everyone else merely ` +
      `walks through the back of the picture.`);
    room('star_orangery', 'The Orangery',
      `A long glass gallery of potted orange and lemon trees, wintered here at ` +
      `ruinous expense so the court may have blossom out of season and fruit that ` +
      `costs more than the gardener earns in a year. It smells of green and ` +
      `privilege.`);
    room('star_fountain', 'The Fountain of the Heptad',
      `A titanic waterwork of lead gods and marble seas, where seven jets leap ` +
      `and braid at the turn of a hidden cock. It is run only when the Astrarch ` +
      `walks abroad, for the machinery drinks a river; the rest of the time the ` +
      `sea-gods preside, dry-mouthed, over an empty basin.`);
    room('star_maze', 'The Hedge-Maze',
      `A labyrinth of yew taller than a man, planted for the amusement of a ` +
      `long-dead prince who is said to have lost a mistress in it, permanently. ` +
      `Courtiers use it now for assignations and the settling of quiet debts. ` +
      `Laughter comes from somewhere. It is not always kind.`);
    room('star_gallery', 'The Long Gallery',
      `A quarter-mile of paintings, the loot and glory of the Empire hung frame to ` +
      `frame: martyrdoms, coronations, battles the Empire won and a tactful few ` +
      `it lost. Portraits of dead Astrarchs watch you pass with the fixed, mild ` +
      `disappointment of the very powerful.`);
    room('star_library', 'The Imperial Library',
      `A cathedral of books beneath a painted dome, the greatest collection on ` +
      `Kaelinu, gathered and guarded and mostly unread. Somewhere in these ` +
      `galleries is every idea the Empire has ever had, including the ones it has ` +
      `since made a crime, shelved quietly among the rest, awaiting their hour.`);
    room('star_observatory', "The Astrarch's Observatory",
      `A domed chamber where the imperial astronomers chart the seven stars and ` +
      `read in them the fortunes of the state — for the Astrarch's whole right to ` +
      `rule hangs on the Heptad's favour. Of late the star-charts have been ` +
      `troubling, and the astronomers have taken to reporting only the good half.`);
    room('star_orrery', 'The Grand Orrery Chamber',
      `A high round room filled by a single vast machine of brass: the heavens in ` +
      `miniature, seven jewelled stars swinging through their great slow dance ` +
      `about a gilded throne, all driven by a clockwork that mutters in the walls. ` +
      `The Empire believes it turns the model. A heretic might wonder which turns ` +
      `which.`);

    link('star_gate', 'e', 'star_court');
    link('star_court', 'e', 'star_colonnade');
    link('star_court', 'n', 'star_gardens');
    link('star_court', 's', 'star_guard');
    link('star_court', 'ne', 'star_stables');
    link('star_court', 'se', 'star_kitchen');
    link('star_colonnade', 'e', 'star_hall');
    link('star_colonnade', 'n', 'star_gallery');
    link('star_gallery', 'e', 'star_library');
    link('star_library', 'n', 'star_observatory');
    link('star_observatory', 'u', 'star_orrery');
    link('star_hall', 'e', 'star_audience');
    link('star_audience', 'e', 'star_throne');
    link('star_audience', 'n', 'star_chapel');
    link('star_throne', 'n', 'star_balcony');
    link('star_throne', 's', 'star_treasury');
    link('star_guard', 's', 'star_wardrobe');
    link('star_gardens', 'n', 'star_parterre');
    link('star_gardens', 'e', 'star_orangery');
    link('star_gardens', 'w', 'star_maze');
    link('star_gardens', 'ne', 'star_fountain');

    /* ================================================================= *
     *  IV. LES GRÈNES  (20) — the great market, the belly of Empyrean.
     * ================================================================= */
    room('gren_gate', 'The Market Gate',
      `The threshold of Les Grènes, the vast central market that feeds the ` +
      `capital — a gate you smell long before you see it, a roar of bread and ` +
      `blood and rotting cabbage-leaves. Through it, the great iron-and-glass ` +
      `halls, where half of Empyrean comes to buy and the other half to steal.`);
    room('gren_cross', 'The Grènes Cross',
      `The clamorous crossroads at the market's heart, where the porters' barrows ` +
      `and the fishwives' carts and the pickpockets' quick hands all meet. A ` +
      `sergeant of the Watch stands on a mounting-block trying to direct it, ` +
      `with the success of a man commanding the tide.`);
    room('gren_grand', 'The Grand Halle',
      `A cathedral built to commerce: soaring ribs of iron and a roof of grimy ` +
      `glass over an acre of stalls, so that the light comes down grey and holy ` +
      `on the haggling multitude. The noise is a physical thing. This is the ` +
      `belly of Empyrean, and it is never, ever full.`);
    room('gren_bread', 'The Bread-Halle',
      `Tier upon tier of loaves — the fine white pain of the rich, the grey ` +
      `four-pound bricks the poor line up for at dawn. The price is chalked on a ` +
      `board and rubbed out and chalked higher, and every time the chalk squeaks ` +
      `up, a little more danger enters the city. Bread is politics here. Bread is ` +
      `everything.`);
    room('gren_fish', 'The Fish-Halle',
      `A glittering, reeking hall of the sea's dead on ice hauled down at ruinous ` +
      `cost from the Sleeve — turbot and oyster for the Marais, sprats and ` +
      `salt-cod for the rest. The fishwives reign here absolutely, and their ` +
      `word, roared across the slabs, is the true and terrible voice of the ` +
      `people.`);
    room('gren_flesh', 'The Flesh-Halle',
      `The butchers' hall, all sawdust and hooks and the coppery reek of the ` +
      `block. Carcasses swing in rows; the master-butchers, aproned in red, are ` +
      `built like the beasts they break. In hungry years, it is whispered, they ` +
      `wield the true power in the Grènes, for a man with a cleaver and a full ` +
      `belly fears very little.`);
    room('gren_shambles', 'The Shambles Yard',
      `The killing-yard behind the flesh-halle, running with what killing runs ` +
      `with, where the beasts come in on the hoof and leave on the hook. A road ` +
      `leads east from here out of the market and toward the grim towers of the ` +
      `Bastion, along which, on bad days, other kinds of procession pass.`);
    room('gren_green', 'The Green-Halle',
      `Pyramids of the Empire's abundance: crates of apples, ropes of onions, ` +
      `the first pale asparagus worth a labourer's week. The market-gardeners of ` +
      `the ring-villages sleep here beside their produce, one hand on the ` +
      `takings, dreaming of the day the city's hunger makes them, at last, rich.`);
    room('gren_spice', 'The Spice Arcade',
      `A shadowed arcade fragrant with the plunder of the world's far corners — ` +
      `pepper and clove and the black vanilla of the Sunset Isles, cinnamon in ` +
      `bales, saffron sold by the grain under lock. Here the Empire's reach is ` +
      `measured in scent, and each breath is worth a small fortune.`);
    room('gren_cheese', 'The Cheese Vaults',
      `Cool cellars where the cheeses of a hundred provinces ripen on straw, a ` +
      `smell so profound it has a shape. The cheesemongers speak of their wares ` +
      `as of wayward children — this one sullen, that one nearly ready, this ` +
      `great weeping wheel from the mountains not to be trusted till the frost.`);
    room('gren_wine', 'The Wine-Halle',
      `A hall of barrels and testing-cups where the wine of the Empire is bought ` +
      `by the tun and sampled by the mouthful, and the floor grows slippery with ` +
      `the spat and the spilled. By noon the buyers are merry; by dusk they are ` +
      `philosophers; by dark they are carried out singing of a better world.`);
    room('gren_poultry', 'The Poultry Rows',
      `A racket of crates and feathers and the doomed complaint of ten thousand ` +
      `hens, geese, and the fat capons the rich will eat and the giblets the poor ` +
      `will queue for. Down goes hangs in clouds. The pluckers' fingers never ` +
      `stop.`);
    room('gren_flower', 'The Flower Hall',
      `Even the market must have its beauty: a corner where cut flowers are sold ` +
      `by the barrow to garnish tables the sellers will never sit at. A ` +
      `flower-girl no older than ten works the aisle with violets and an ` +
      `expression far too old for her face.`);
    room('gren_criers', "The Criers' Step",
      `A worn stone step from which the market's news is bawled: the price of ` +
      `bread, the sailings from the Sleeve, the latest edict, the latest ` +
      `execution. A ballad-monger sells the day's events set to a tune, three for ` +
      `a denier, half of them treason and all of them catchy. A lane slips north ` +
      `from here into worse streets.`);
    room('gren_tavern', 'The Pig & Whistle',
      `A cavernous market-tavern thick with smoke and argument, where porters, ` +
      `pickpockets, and off-duty gendarmes drink elbow to elbow in a truce that ` +
      `holds until it doesn't. The stew is mostly turnip and the wine is mostly ` +
      `regret, and it is, all the same, the warmest room in the Grènes.`);
    room('gren_counting', 'The Counting-House',
      `The market's dour brain: a panelled office where the guild-masters set the ` +
      `tolls, weigh the takings, and lend, at ruinous interest, to the sellers ` +
      `the season has broken. More of Empyrean's fate is decided over these ` +
      `ledgers than in any throne-room, and far more honestly.`);
    room('gren_scales', 'The Public Scales',
      `The great sworn scales of the Grènes, where any citizen may have a ` +
      `tradesman's weights checked against the Empire's own. The weigh-master is ` +
      `an institution, incorruptible and universally resented, and the pillory ` +
      `beside him is never long empty of a short-weighing baker.`);
    room('gren_cellar', 'The Under-Halle Cellars',
      `A brick undercroft beneath the market where the perishing goods are kept ` +
      `cool and the overflow is stored. It goes back further than it should, ` +
      `arch after arch into the dark, and the deepest arches open on the ` +
      `city's old drains, where the market's rats hold a parliament of their own.`);
    room('gren_rats', 'The Rat-Runs',
      `The market's underside: a low, wet, filth-slick tunnel where the discarded ` +
      `of Les Grènes rots and the rats grow bold and enormous on it — some the ` +
      `size of cats, and hungrier. Something down here has learned that a lone ` +
      `human, in the dark, is only more meat that argues.`);
    room('gren_alley', 'Cutthroat Lane',
      `A choked slot of a lane behind the market where the porters take their ` +
      `shortcuts and the pickpockets take their leavings, greasy underfoot and ` +
      `blind at both ends. The market's roar drops to a mutter here. Ahead, the ` +
      `lane loses even its name and slips north into the Cour des Miracles, where ` +
      `honest men do not follow.`);

    link('gren_gate', 'w', 'gren_cross');
    link('gren_gate', 'n', 'gren_counting');
    link('gren_cross', 'w', 'gren_grand');
    link('gren_cross', 'n', 'gren_bread');
    link('gren_cross', 's', 'gren_fish');
    link('gren_cross', 'ne', 'gren_criers');
    link('gren_cross', 'nw', 'gren_flower');
    link('gren_cross', 'se', 'gren_tavern');
    link('gren_cross', 'sw', 'gren_scales');
    link('gren_grand', 'w', 'gren_green');
    link('gren_grand', 'n', 'gren_flesh');
    link('gren_grand', 's', 'gren_cheese');
    link('gren_grand', 'd', 'gren_cellar');
    link('gren_green', 'w', 'gren_spice');
    link('gren_green', 's', 'gren_wine');
    link('gren_flesh', 'e', 'gren_shambles');
    link('gren_bread', 'e', 'gren_poultry');
    link('gren_cellar', 'd', 'gren_rats');
    // Gateways off the market:
    link('gren_shambles', 'e', 'bast_gate');    // the road east to the Bastion
    link('gren_criers', 'n', 'gren_alley');     // the shortcut behind the halls
    link('gren_alley', 'n', 'cour_backway');    // ...which slips into the Cour

    /* ================================================================= *
     *  V. THE COLLEGIUM  (22) — the university, Left Bank.
     * ================================================================= */
    room('coll_gate', "The Scholars' Gate",
      `The gate into the Collegium quarter, where the Empire keeps its learning ` +
      `and its most dangerous young men. Above the arch, in worn Old Latian: LET ` +
      `THEM ENTER WHO WOULD KNOW. Someone has chalked beneath it, in the tongue ` +
      `of the streets, AND LEAVE WHO CAN.`);
    room('coll_place', 'The Place of the Sorbon',
      `The beating square of the university, ringed by the great schools and ` +
      `never empty of argument — students in threadbare gowns disputing ` +
      `philosophy, politics, and the price of wine with equal heat. The Sorbon, ` +
      `mother of colleges, glowers over it all, ancient and cash-strapped and ` +
      `absolutely certain it is the centre of the world.`);
    room('coll_grand', 'The Grand Schools',
      `A range of lecture-halls where the Empire's youth are poured full of Old ` +
      `Latian, logic, and law from dawn. The benches are carved with the initials ` +
      `and blasphemies of five centuries of the bored. Knowledge is dispensed ` +
      `here like medicine: at length, without pleasure, and with a firm ` +
      `conviction that it is good for you.`);
    room('coll_hall', 'The Hall of Disputation',
      `A steep-benched hall where scholars do public battle in formal debate, ` +
      `Old Latian flying like knives, a bishop or a censor often in the shadows ` +
      `taking names. To win here is to make a career; to lose the wrong argument ` +
      `is to lose rather more. The very air is competitive.`);
    room('coll_theology', 'The School of Stars',
      `The theology school, where the doctrine of the Seven Stars is dissected, ` +
      `defended, and — very quietly, by the boldest — doubted. Here the great ` +
      `question of the age is argued in whispers: whether the stars grant the ` +
      `Astrarch his crown, or whether men, long ago, simply agreed to say so.`);
    room('coll_law', 'The School of Law',
      `The law school, temple of Old Latian and precedent, where young men learn ` +
      `to make the unjust sound inevitable and the inevitable sound just. Its ` +
      `graduates run the Empire's courts, its taxes, and its executions, and ` +
      `charge by the hour for all three.`);
    room('coll_library', 'The Great Library',
      `A long cold hall where the books are chained to the desks, precious beyond ` +
      `theft, and the scholars read them standing in the fall of grey window- ` +
      `light. The chains rattle when a page turns. Somewhere in the locked press ` +
      `at the back are the books one may read only with a bishop's leave, which ` +
      `is why every student wants to.`);
    room('coll_press', "The Censor's Press",
      `A printing-house licensed and watched, where the Empire's approved books ` +
      `are set in lead — and where, after dark, by the same presses, other things ` +
      `are printed that no one will admit to in the morning. The censor's seal is ` +
      `on the wall. The censor's seal is, increasingly, a joke.`);
    room('coll_astronomy', 'The School of Astronomy',
      `Where the movements of the seven stars are computed with terrible ` +
      `precision, half science and half state religion, for on their reckoning ` +
      `hangs the imperial calendar and the imperial claim. A great sextant fills ` +
      `the courtyard. The youngest scholars have begun, very carefully, to check ` +
      `the Church's sums.`);
    room('coll_medicine', 'The School of Physic',
      `The medical school, smelling of vinegar and worse, where the Empire's ` +
      `doctors are trained in the humours, the stars, and — newly, ` +
      `scandalously — the actual insides of the actual dead. The old professors ` +
      `quote Old Latian; the young ones quote the corpse. They do not get on.`);
    room('coll_anatomy', 'The Anatomy Theatre',
      `A steep-tiered wooden theatre encircling a single marble table, where the ` +
      `bodies of the executed are opened for instruction before rings of ` +
      `pale-faced students. The table has a channel round its edge, and a drain. ` +
      `Knowledge, the demonstrator likes to say, has always been bought in ` +
      `blood; here they merely keep the receipt.`);
    room('coll_quarter', 'The Quartier Latian',
      `The student streets: a warren of cheap lodgings, cheaper eating-houses, ` +
      `and taverns that never quite close, loud with song and sedition and the ` +
      `particular arrogance of the young and clever and poor. The gutters run ` +
      `with wine and pamphlets. The Watch comes here in fours or not at all.`);
    room('coll_printers', "Printers' Row",
      `A street of print-shops, ink-stained and clattering, that has done more to ` +
      `shake the Empire than any army — for here the new ideas are set in type ` +
      `and flung out into the world a thousand at a time. The censors raid it ` +
      `weekly. It is always printing again by dusk.`);
    room('coll_binders', "The Binders' Lane",
      `A quiet lane of bookbinders, gilders, and marblers of paper, where the ` +
      `dangerous words of Printers' Row are dressed in calf and gold to sit ` +
      `respectably on a nobleman's shelf. A book, the binders know, may say ` +
      `anything, so long as it is beautifully bound.`);
    room('coll_lodgings', "The Students' Lodgings",
      `Tottering houses let by the garret to scholars who dine on bread and ` +
      `argument. The walls are thin enough to share a lecture through, and the ` +
      `landladies rule with an iron ledger. Half the Empire's ministers once ` +
      `starved in rooms like these, and remember it, and have done nothing.`);
    room('coll_tavern', 'The Inkpot',
      `The students' own tavern, black with woodsmoke and loud with the songs ` +
      `they will deny in the morning. Debts are chalked on the beam, revolutions ` +
      `are planned in the corner and forgotten by closing, and the landlord, a ` +
      `former scholar himself, extends credit to genius and cuts off fools with ` +
      `an unerring eye.`);
    room('coll_chapel', "The Scholars' Chapel",
      `A small, severe chapel where the university hears the offices, and where, ` +
      `beneath the required piety, a great deal of quiet unbelief kneels ` +
      `politely. The chaplain preaches to the stars and suspects, sadly, that ` +
      `his cleverest students have stopped listening to both of them.`);
    room('coll_court', 'The Cloister Court',
      `An arcaded quadrangle of worn stone and older grass, the contemplative ` +
      `heart of the Sorbon, where the doctors pace and dispute out of the rain. ` +
      `Five centuries of feet have hollowed the cloister-walk. The Empire has ` +
      `changed its gods and its borders and its name in that time. The pacing ` +
      `has not stopped.`);
    room('coll_garden', 'The Physic Garden',
      `A walled garden of medicinal herbs laid out in neat learned beds — ` +
      `foxglove and henbane, poppy and rue, every one a cure and a killing ` +
      `depending on the hand. The students of physic learn their doses here, and ` +
      `the students of other things come after dark for the ones the doses are ` +
      `learned from.`);
    room('coll_bell', "The Scholars' Campanile",
      `A leaning bell-tower that has rung the university's hours since before the ` +
      `Empire was an empire. Its bell is cracked and sweet. Generations have ` +
      `climbed it to carve their names and swear their friendships eternal at the ` +
      `top, and the view — of the river, the Isle, the whole grey glittering ` +
      `city — has, for a moment, always made it seem true.`);
    room('coll_almshouse', "The Poor-Scholars' Hall",
      `A charity foundation feeding and housing the cleverest of the penniless — ` +
      `boys plucked from the provinces for their wits and reminded daily of the ` +
      `debt. From these hard benches come the Empire's fiercest minds, grateful ` +
      `and resentful in exact and dangerous measure.`);

    link('coll_gate', 's', 'coll_place');
    link('coll_place', 's', 'coll_grand');
    link('coll_place', 'e', 'coll_quarter');
    link('coll_place', 'w', 'coll_tavern');
    link('coll_place', 'ne', 'coll_chapel');
    link('coll_place', 'nw', 'coll_fountain');
    link('coll_place', 'se', 'coll_court');
    link('coll_grand', 's', 'coll_hall');
    link('coll_grand', 'e', 'coll_library');
    link('coll_grand', 'w', 'coll_astronomy');
    link('coll_hall', 's', 'coll_theology');
    link('coll_hall', 'e', 'coll_law');
    link('coll_library', 'n', 'coll_press');
    link('coll_astronomy', 's', 'coll_medicine');
    link('coll_medicine', 'w', 'coll_anatomy');
    link('coll_quarter', 'e', 'coll_printers');
    link('coll_quarter', 's', 'coll_lodgings');
    link('coll_printers', 'e', 'coll_binders');
    link('coll_court', 's', 'coll_garden');
    link('coll_court', 'w', 'coll_bell');
    link('coll_court', 'e', 'coll_almshouse');
    room('coll_fountain', 'The Fountain of Wisdom',
      `A modest fountain in the university square where an allegorical Wisdom ` +
      `pours water eternally from a stone book. Students dunk one another in it ` +
      `on graduation and on grievance. The water is said to sharpen the wits; the ` +
      `evidence, staggering home at dawn, is mixed.`);

    /* ================================================================= *
     *  VI. THE SANCTUARY  (16) — churches of the Left Bank.
     * ================================================================= */
    room('sanc_gate', 'The Sanctuary Gate',
      `The gate into the Sanctuary, the Left Bank's quarter of the holy, where ` +
      `the bells never quite stop and the air is grey-blue with the incense of ` +
      `a dozen churches. It is quieter here than anywhere in Empyrean, and the ` +
      `quiet has weight.`);
    room('sanc_close', 'The Sanctuary Close',
      `A hushed green close ringed by chapter-houses and clergy-lodgings, where ` +
      `black-robed clerics glide on murmured errands. At its centre, an ancient ` +
      `yew older than the faith it shades. Everything here is very old and very ` +
      `sure of itself.`);
    room('sanc_basilica', 'The Basilica of Saint Sidereal',
      `The Left Bank's great church, older even than the Sept across the water, ` +
      `raised over the bones of Saint Sidereal, who first (the story runs) read ` +
      `the Empire's fate in the seven stars and was martyred for saying the ` +
      `seventh was setting. His basilica is dark, and deep, and smells of ` +
      `centuries.`);
    room('sanc_nave', 'The Star-Nave',
      `A tunnel of ancient stone, its arches heavy and round, from the days before ` +
      `builders learned to make stone soar. It presses down rather than lifts up, ` +
      `a faith of endurance rather than aspiration. The candles are few and the ` +
      `dark between them is very old.`);
    room('sanc_relic', 'The Reliquary of the First Star',
      `Behind a grille of tarnished silver lies the basilica's treasure: the ` +
      `Chart of Saint Sidereal, a scrap of hide on which, it is sworn, the saint ` +
      `drew the true and terrible course of the seven stars — the one the Church ` +
      `has spent a thousand years insisting he got wrong.`);
    room('sanc_crypt', 'The Crypt of Confessors',
      `Beneath the nave, a crypt of squat pillars and older dead, where the ` +
      `confessor-saints of the early Church lie in stone. Pilgrims creep between ` +
      `the tombs on their knees. The air is thick enough to chew, and somewhere ` +
      `water drips a slow rosary in the dark.`);
    room('sanc_charnel', 'The Charnel Cloister',
      `An arcade whose walls are stacked, behind grilles, with the neat brown ` +
      `bones of the Sanctuary's centuries of dead, disinterred to make room for ` +
      `more. HERE LIE THE STARS THAT SET, reads the lintel. It is meant as ` +
      `comfort. It takes a certain kind of faith to receive it so.`);
    room('sanc_cloister', 'The Great Cloister',
      `A broad arcaded cloister where the brothers walk their offices, the most ` +
      `perfectly peaceful place in a city with very little peace. The garth at ` +
      `its centre is kept as bare grass and one stone cross, a discipline of ` +
      `emptiness the noisy Empire finds almost unbearable to look upon.`);
    room('sanc_garden', 'The Cloister Garden',
      `A walled garden of simples and vegetables, worked by the brothers in ` +
      `silence, where the year is measured in beans and prayer. A single old ` +
      `apple tree, propped and pruned, has fruited here since the founding, and ` +
      `is spoken of, half in jest and half not, as the oldest living monk.`);
    room('sanc_chapterhouse', 'The Chapter House',
      `The council-room of the Sanctuary's brothers, panelled and grave, where ` +
      `they govern their lands and their souls. Of late their debates have ` +
      `strayed to worldlier ground: the price of bread, the mood of the Faubourg, ` +
      `and whether a Church so rich can survive a city grown so hungry.`);
    room('sanc_well', 'The Holy Well',
      `A little domed well-house over a spring said to have risen where Saint ` +
      `Sidereal's blood fell. The water is cold and iron-sweet, and the lame and ` +
      `sorrowful come to drink it. Whether it heals is much disputed; that it ` +
      `comforts, no one denies.`);
    room('sanc_seminary', 'The Astral Seminary',
      `Where the Church trains its star-clergy, drilling boys in Old Latian, ` +
      `doctrine, and the reading of the Heptad until they can name a saint for ` +
      `every hour and a scripture for every doubt. The cleverest are sent up to ` +
      `the Sept; the rest to the poor parishes, to hold the frightened hands of ` +
      `the dying poor.`);
    room('sanc_library', 'The Sept-Library',
      `A hoard of sacred manuscripts, gold-leafed and chained, the accumulated ` +
      `theology of a thousand years. Among the psalters and the saints' lives, ` +
      `catalogued under a false and boring title, sits the one book the Church ` +
      `has never destroyed and never allowed to be read: the true reckoning of ` +
      `Saint Sidereal.`);
    room('sanc_almonry', 'The Almonry',
      `The Sanctuary's charity, doling out bread and burial to the Left Bank's ` +
      `poor. The queue is quieter than the Sept's, and older, and the brothers ` +
      `who serve it have long since stopped pretending the alms are anything but ` +
      `a bucket bailing a rising sea.`);
    room('sanc_hospice', "The Sisters' Hospice",
      `A house of the dying, run by the Grey Sisters, where those the physicians ` +
      `have given up are received without question and eased toward the dark. ` +
      `The Sisters ask no man his faith or his crimes. They wash him, and warm ` +
      `him, and stay. It is the truest religion in Empyrean, and keeps no ` +
      `star-charts at all.`);
    room('sanc_bell', 'The Sanctuary Campanile',
      `A stout old bell-tower whose deep bell tolls the passing of every soul in ` +
      `the quarter, so that the Left Bank lives always within earshot of its own ` +
      `mortality. The bell-ringer, blind these thirty years, knows the rope's ` +
      `every mood, and rings grief and festival in tones no seeing man could ` +
      `tell apart, and says there is no difference worth the telling.`);

    link('sanc_gate', 's', 'sanc_close');
    link('sanc_close', 's', 'sanc_basilica');
    link('sanc_close', 'e', 'sanc_cloister');
    link('sanc_close', 'w', 'sanc_seminary');
    link('sanc_close', 'ne', 'sanc_almonry');
    link('sanc_close', 'nw', 'sanc_bell');
    link('sanc_basilica', 's', 'sanc_nave');
    link('sanc_nave', 'e', 'sanc_relic');
    link('sanc_nave', 'd', 'sanc_crypt');
    link('sanc_crypt', 'e', 'sanc_charnel');
    link('sanc_cloister', 'e', 'sanc_garden');
    link('sanc_cloister', 's', 'sanc_chapterhouse');
    link('sanc_cloister', 'n', 'sanc_well');
    link('sanc_seminary', 'w', 'sanc_library');
    link('sanc_almonry', 'e', 'sanc_hospice');

    /* ================================================================= *
     *  VII. THE GILDED MARAIS  (18) — the nobles' quarter, Right Bank.
     * ================================================================= */
    room('mar_gate', 'The Marais Gate',
      `The way into the Marais, the marsh that gold drained: once a mire, now the ` +
      `most fashionable quarter in Empyrean, where the great families keep their ` +
      `town-palaces and their secrets. The very cobbles seem swept. A footman ` +
      `eyes your shoes and adjusts his opinion of you accordingly.`);
    room('mar_place', 'The Place Royale',
      `A perfect square of rose-brick mansions around a formal garden, the ` +
      `handsomest address on Kaelinu, built by an Astrarch for his favourites and ` +
      `inhabited since by whoever can afford to pretend they were invited. Under ` +
      `the arcades, sedan-chairs wait and scandal circulates at a genteel walk.`);
    room('mar_arcade', 'The Arcades',
      `Covered walks around the Place Royale, sheltering the little luxuries: a ` +
      `glover, a fan-painter, a dealer in miniatures and blackmail. The nobility ` +
      `promenade here out of the weather, seeing and being seen, conducting the ` +
      `slow warfare of precedence with a smile and a raised lorgnette.`);
    room('mar_hotel1', 'The Hôtel de Valennes',
      `The town-palace of House Valennes, cousins to the imperial line and twice ` +
      `as proud, its gates crested with the crowned star. Behind the severe ` +
      `façade lies a warren of gilt salons where the fate of ministries is ` +
      `decided over cards, and a footman's discretion is worth more than his ` +
      `life.`);
    room('mar_hotel2', 'The Hôtel Foyer',
      `The entrance-hall of a great house, all marble and echoing consequence, ` +
      `where callers are received, ranked, and made to wait in exact proportion ` +
      `to their usefulness. The porter is a general of small humiliations. A grand ` +
      `stair sweeps up to rooms you have not been invited to.`);
    room('mar_salon', 'The Grand Salon',
      `A salon of mirrors, gilt, and dangerous conversation, where a celebrated ` +
      `hostess gathers the wits, the ministers, and the philosophes of the age to ` +
      `spar over Albeon tea. More real power passes through this room than through ` +
      `the Parlement, and far more amusingly. A wrong word here echoes for years.`);
    room('mar_ballroom', 'The Mirror Ballroom',
      `A vast ballroom where a thousand candles multiply in the glass and the ` +
      `great of Empyrean turn through the figures of the dance, smiling, ` +
      `calculating, exquisitely bored. Fortunes are made and undone between one ` +
      `minuet and the next. The floor is chalked with a pattern that will be ` +
      `danced to ruin by dawn.`);
    room('mar_gallery', 'The Cabinet of Curiosities',
      `A rich man's hoard of wonders behind glass: a narwhal's horn sold as a ` +
      `unicorn's, a mechanical singing-bird, a shrunken head from the Sunset ` +
      `Isles, a lock of a saint's hair and a lock of a mistress's, side by side ` +
      `and equally revered. The Empire collects the world so that it need never ` +
      `go there.`);
    room('mar_garden', 'The Private Gardens',
      `Walled pleasure-gardens behind the great houses, where clipped allées and ` +
      `secret bowers serve the twin arts of the Marais: leisure and intrigue. A ` +
      `statue of a faun watches a bench where a great many treaties, and a great ` +
      `many betrayals, have been sealed with the same soft laughter.`);
    room('mar_jeweller', "The Jewellers' Row",
      `A discreet street of jewellers to the court, their windows dark, their ` +
      `doors opened only to the known. Here the diamonds of the Heptad are ` +
      `imitated for those who may not own the real, and the debts of the nobility ` +
      `are quietly financed against the gems they dare not sell.`);
    room('mar_perfumer', "The Perfumer's",
      `A shop like the inside of a flower, where scent is compounded for a ` +
      `clientele that would rather die than smell of the city they rule. Behind ` +
      `the counter, in a locked cabinet, are the other commissions: the ` +
      `sleeping-draughts, the love-philtres, and the odd, discreet, untraceable ` +
      `little vial that no one ever asks the purpose of.`);
    room('mar_modiste', "The Modiste's",
      `The atelier of a fashionable dressmaker, all silk and pins and the tyranny ` +
      `of the new, where duchesses are sewn into gowns worth a village's yearly ` +
      `bread. The modiste is an artist, a confessor, and a spy, and knows to the ` +
      `stitch which great house is quietly failing by the corners it has begun to ` +
      `cut.`);
    room('mar_cafe', 'The Café des Étoiles',
      `A gilded coffee-house where the Marais takes its chocolate and its ` +
      `opinions, and the wits hold court at the marble tables. The talk is of the ` +
      `new philosophy, the old scandal, and — lately, in lowered voices — the ` +
      `hungry roar that carries up some nights from across the river. They find ` +
      `it thrilling. They have not yet found it frightening.`);
    room('mar_gaming', 'The Gaming Rooms',
      `Hushed rooms of green baize where the nobility lose in a night what would ` +
      `feed a street for a decade, with the studied indifference that is the ` +
      `whole point of the exercise. The bank never sleeps. More than one great ` +
      `name has ended at these tables, and been escorted, still smiling, to the ` +
      `pistol in the garden.`);
    room('mar_opera', 'The Star-Opera',
      `The Empire's temple of music, a wedding-cake of gilt and crimson where the ` +
      `court comes to be seen not seeing the opera. The performances are ` +
      `magnificent and entirely beside the point; the true drama plays out in the ` +
      `boxes, where alliances are struck and reputations knifed between the arias.`);
    room('mar_foyer', 'The Opera Foyer',
      `A glittering foyer of chandeliers and mirrors where the audience parades at ` +
      `the interval, a second performance more keenly attended than the first. ` +
      `Here a young nobody may be made by being noticed, or unmade by being cut, ` +
      `in the space of a single turn about the room.`);
    room('mar_lane', 'The Lantern Lane',
      `A narrow lane behind the opera, hung with lanterns, where the carriages ` +
      `wait and the demi-monde conducts its glittering business after the ` +
      `curtain — the dancers, the kept and the keeping, the discreet doors that ` +
      `open on the other Empyrean. From its far end a rough path climbs toward ` +
      `the butte of Montcorbeau and its cheaper, honester sins.`);
    room('mar_carriage', 'The Carriage Court',
      `A cobbled court where the great arrive and depart in a glittering crush of ` +
      `lacquer and horseflesh, watched by a crowd of the poor who come simply to ` +
      `see the coaches — and to note, with a patience that should frighten ` +
      `someone, exactly who rides in them.`);

    link('mar_gate', 'n', 'mar_place');
    link('mar_place', 'n', 'mar_arcade');
    link('mar_place', 'e', 'mar_hotel1');
    link('mar_place', 'w', 'mar_cafe');
    link('mar_place', 'ne', 'mar_jeweller');
    link('mar_place', 'nw', 'mar_opera');
    link('mar_place', 'se', 'mar_carriage');
    link('mar_arcade', 'n', 'mar_salon');
    link('mar_arcade', 'e', 'mar_hotel2');
    link('mar_salon', 'e', 'mar_ballroom');
    link('mar_salon', 'w', 'mar_gallery');
    link('mar_hotel2', 'n', 'mar_garden');
    link('mar_hotel1', 'n', 'mar_gaming');
    link('mar_cafe', 'w', 'mar_perfumer');
    link('mar_perfumer', 'w', 'mar_modiste');
    link('mar_opera', 'n', 'mar_foyer');
    link('mar_opera', 'w', 'mar_lane');
    link('mar_lane', 'n', 'mont_gate');   // the climb to Montcorbeau

    /* ================================================================= *
     *  VIII. MONTCORBEAU  (18) — the butte of artists, north of the city.
     * ================================================================= */
    room('mont_gate', 'The Foot of Montcorbeau',
      `Where the city's fine streets fray into a steep tangle of stairs and ` +
      `goat-paths climbing the butte of Montcorbeau — the raven's hill, that ` +
      `stands outside the walls and above the law, crowned with windmills and a ` +
      `white basilica. The rent is cheap up there, and the wine is cheaper, and ` +
      `the Watch does not bother to climb.`);
    room('mont_climb', 'The Winding Climb',
      `A breathless stair of worn steps zig-zagging up the butte between leaning ` +
      `cottages and small wild gardens, the whole grey magnificence of Empyrean ` +
      `unfolding at your back as you rise. Washing lines cross overhead. A cat ` +
      `watches from a wall with the settled contempt of the truly free.`);
    room('mont_place', 'The Place du Corbeau',
      `The ragged little square at the top of the world, where the painters set ` +
      `their easels and the poets their broken hearts, and everyone is ` +
      `magnificently, deliberately poor. The wine-shop, the cabaret, and the ` +
      `basilica all give onto it — sin and salvation sharing a square, and ` +
      `neither much impressed by the other.`);
    room('mont_terrace', "The Painters' Terrace",
      `A balustraded terrace clinging to the hillside, from which all of Empyrean ` +
      `lies spread below like a map a god abandoned — the Sequane a silver ` +
      `thread, the Sept a grey ship, the palace a distant glitter, and beyond it ` +
      `all the smoke of the Faubourg rising like a held breath. The painters ` +
      `never tire of it. Nor, it seems, will you.`);
    room('mont_basilica', 'The White Basilica',
      `The Basilica of the Ascending Star, raised new and dazzling white atop the ` +
      `butte, so bright against the grey city it seems to hover — a great ` +
      `gesture of piety by an Empire that suspects, in its bones, that it will ` +
      `soon have much to atone for. Its dome swells overhead; a stair winds down ` +
      `to the crypt.`);
    room('mont_dome', 'The Basilica Dome',
      `The inner gallery of the great white dome, dizzy with height and gold ` +
      `mosaic, where the Ascending Star is shown bearing a kneeling Empire up ` +
      `into a painted heaven. From the windows the true heaven is only grey; but ` +
      `the view of the earth is enough to bring the hardest pilgrim, briefly, to ` +
      `their knees.`);
    room('mont_lookout', 'The Corbeau Lookout',
      `The highest point in Empyrean, a wind-scoured gallery atop the basilica ` +
      `dome. The whole world lies under you: the seven-starred city, the winding ` +
      `Sequane, the ring of villages, and — grey and far to the north — the ` +
      `sea called the Sleeve, and the rumour of Albeon beyond it. Up here, for a ` +
      `moment, the Empire looks eternal.`);
    room('mont_crypt', 'The Basilica Crypt',
      `A cool undercroft beneath the white basilica, still smelling of new ` +
      `mortar, where the first pilgrims kneel and the first tombs wait empty for ` +
      `the great dead the builders are so sure will come. The optimism of it is ` +
      `almost unbearable.`);
    room('mont_vineyard', 'The Butte Vineyard',
      `A small steep vineyard on the hill's north face, the last within sight of ` +
      `the capital, tended by an ancient vintner who makes a wine so ferociously ` +
      `sour it is drunk mostly as a dare. He claims his grandfather pressed for ` +
      `an Astrarch. He claims a great many things.`);
    room('mont_mill1', 'The Black Mill',
      `A brooding old windmill, sails long stilled, that ground the butte's corn ` +
      `for three hundred years and now grinds only the imaginations of the ` +
      `painters, who put it in every second picture. Ravens roost in its stopped ` +
      `machinery. It is, they agree, the most painted object on Kaelinu, and it ` +
      `has never once been paid.`);
    room('mont_mill2', 'The Galette Mill',
      `A windmill turned dance-hall, where on fine evenings the whole butte comes ` +
      `to whirl in the open air under the paper lanterns — grisettes and ` +
      `painters and off-duty soldiers, dancing as if the grey city below did not ` +
      `exist. For the length of a waltz, on the Galette Mill's floor, it doesn't.`);
    room('mont_cemetery', 'The Butte Cemetery',
      `A tumbling graveyard on the hill's shoulder, its stones leaning under ` +
      `ivy, where the poor artists of Montcorbeau are buried among the cats and ` +
      `the wildflowers, un-mourned by the Empire and unforgotten by each other. ` +
      `More genius rots here, the survivors like to say, than lies in all the ` +
      `marble of the Sept.`);
    room('mont_studio1', 'The Garret Studios',
      `A honeycomb of freezing garrets under the eaves, where the butte's ` +
      `painters starve and work by the good north light. Canvases lean ten deep ` +
      `against the walls, unsold, unsellable, and — one or two of them, though no ` +
      `dealer will believe it for fifty years — quietly immortal.`);
    room('mont_studio2', "The Sculptor's Yard",
      `An open yard of half-hewn stone and clay maquettes, where a sculptor ` +
      `chips at a figure that has consumed a decade and may consume a life. Marble ` +
      `dust whitens everything, the man included, so that he seems already half a ` +
      `statue himself, patiently becoming the thing he makes.`);
    room('mont_cabaret', 'The Cabaret of the Nimbus',
      `A smoky cellar-cabaret hung with bad paintings taken in lieu of the bill, ` +
      `where the butte gathers of an evening to hear songs too savage for the ` +
      `city below — satires of the court, laments of the poor, verses that would ` +
      `earn the Bastion if the Watch ever troubled to climb the hill. It never ` +
      `does. That, more or less, is the whole point of Montcorbeau.`);
    room('mont_absinthe', 'The Green Hour',
      `A dim bar where the butte drowns its gifts in the green spirit, the sugar ` +
      `melting off the slotted spoon into the louche. At the green hour the light ` +
      `goes gold and forgiving and every ruined talent in the room believes, once ` +
      `more, that tomorrow is the day the great work begins.`);
    room('mont_model', "The Models' Rest",
      `A back room where the artists' models warm themselves between sittings — ` +
      `the faces and forms that gaze down, immortal, from a hundred canvases and ` +
      `will die anonymous in a garret. They keep a wry sisterhood, and know more ` +
      `about the great men of Empyrean than the great men would ever guess.`);
    room('mont_shrine', "The Martyr's Shrine",
      `A rough shrine on the hillside marking where, the legend runs, a saint was ` +
      `beheaded in the Empire's pagan dawn and walked away carrying his own head, ` +
      `preaching, up the butte — which is how the raven's hill became the mount ` +
      `of martyrs. Pilgrims leave pebbles. Painters leave brushes. Both, in their ` +
      `way, are prayers.`);

    link('mont_gate', 'u', 'mont_climb');
    link('mont_climb', 'u', 'mont_place');
    link('mont_place', 'u', 'mont_terrace');
    link('mont_place', 'e', 'mont_cabaret');
    link('mont_place', 'w', 'mont_studio1');
    link('mont_place', 'n', 'mont_vineyard');
    link('mont_place', 'ne', 'mont_mill1');
    link('mont_place', 'nw', 'mont_shrine');
    link('mont_terrace', 'n', 'mont_basilica');
    link('mont_basilica', 'u', 'mont_dome');
    link('mont_basilica', 'd', 'mont_crypt');
    link('mont_dome', 'u', 'mont_lookout');
    link('mont_vineyard', 'n', 'mont_mill2');
    link('mont_mill2', 'e', 'mont_cemetery');
    link('mont_cabaret', 'e', 'mont_absinthe');
    link('mont_absinthe', 's', 'mont_model');
    link('mont_studio1', 'w', 'mont_studio2');

    /* ================================================================= *
     *  IX. THE BASTION & FAUBOURG  (20) — fortress and workers, east.
     * ================================================================= */
    room('bast_gate', 'The Faubourg Gate',
      `The old eastern gate, once the city's edge, now swallowed by the Faubourg ` +
      `Saint-Empyre that has grown up beyond it — the great working suburb of ` +
      `Empyrean, all sawdust and sweat and simmering grievance. Ahead, over the ` +
      `rooftops, loom the eight black towers of the Bastion, watching the ` +
      `Faubourg watch them back.`);
    room('bast_faubourg', 'The Faubourg Saint-Empyre',
      `The heart of the working district: a broad rough street of workshops and ` +
      `wine-shops and tenements ten families deep, loud with hammering and ` +
      `hunger. The Faubourg makes the Empire's furniture, its barrels, its boots, ` +
      `and — should the bread rise much further — its history. It is the most ` +
      `dangerous street in Empyrean, and the most alive.`);
    room('bast_road', 'The Rampart Road',
      `A road running along the line of the vanished walls, toward the fortress. ` +
      `On one side the crowded Faubourg; on the other, the cleared killing-ground ` +
      `the Bastion keeps swept before its guns. Nothing grows in that empty strip. ` +
      `The Faubourg calls it, without affection, the Governor's Lawn.`);
    room('bast_fortress', 'The Bastion Fore-Court',
      `The forecourt of the Bastion, under the shadow of its eight vast towers ` +
      `and the mouths of its cannon, which — everyone has noticed, and no one ` +
      `says — are trained not outward at any foreign foe but inward, down the ` +
      `Faubourg's throat. It is a prison, an arsenal, and a threat, and the ` +
      `oldest quarrel in Empyrean is with what it means.`);
    room('bast_gatehouse', 'The Bastion Gatehouse',
      `A dark tunnel of a gate, portcullis-toothed, where the King's Warrant ` +
      `admits the Empire's more embarrassing prisoners without the tedium of a ` +
      `trial. The turnkey's ledger holds names that officially do not exist. Some ` +
      `have been here so long the crime is forgotten and only the man remains.`);
    room('bast_ward', 'The Prison Ward',
      `A grim gallery of iron doors, each with its judas-hole and its silence. The ` +
      `Bastion holds few, and holds them well: the inconvenient noble, the ` +
      `stubborn pamphleteer, the man who knew the wrong secret. It is not cruelty ` +
      `so much as erasure — a place to be, quietly, un-happened.`);
    room('bast_tower1', 'The Tower of Sighs',
      `A round cell high in one of the towers, better than the ward below — a bed, ` +
      `a chair, a slit of river-light — reserved for prisoners of rank, who pay ` +
      `their gaolers for the privilege of despairing in comfort. Names are ` +
      `scratched an inch deep in the stone. Some are dukes. All are forgotten.`);
    room('bast_tower2', 'The Tower of the Question',
      `A tower whose lower room is fitted with the cold apparatus of the ` +
      `Question — the rack, the boot, the iron chair — by which the Empire has, ` +
      `in its darker centuries, encouraged confession. It is little used now, the ` +
      `gaolers insist. The instruments are kept oiled, all the same.`);
    room('bast_oubliette', 'The Oubliette',
      `A stone bottle sunk beneath the towers, entered only from a trap in the ` +
      `ceiling — the place of forgetting, where the Empire dropped the men it ` +
      `wished it had never made. Filth, dark, and the scurrying dark. Something ` +
      `is down here still, that was lowered as a man and has become, in the ` +
      `black years, something that only remembers being one.`);
    room('bast_governor', "The Governor's Lodging",
      `Snug apartments within the fortress where the Governor of the Bastion ` +
      `dines well above his silent charges. He is a courtier, not a gaoler, ` +
      `rewarded with this sinecure for services best not examined, and he sleeps, ` +
      `by all accounts, extremely soundly.`);
    room('bast_arsenal', 'The Arsenal',
      `Racked ranks of muskets, pikes, and sabres, enough to arm a small war — or ` +
      `a large mob. The Faubourg is very aware of what sleeps behind these doors, ` +
      `and dreams of it, and the Governor, less soundly than he admits, dreams of ` +
      `it too.`);
    room('bast_powder', 'The Powder Magazine',
      `A thick-walled vault of packed black powder, the fortress's slumbering ` +
      `thunder, guarded by men who tread softly and do not carry a naked flame. ` +
      `Enough is stored here to unmake the Bastion and half the Faubourg with it. ` +
      `The thought is never far from anyone's mind. It is a very quiet room.`);
    room('bast_barracks', 'The Garrison Barracks',
      `Quarters of the fortress garrison — a company of the Empire's soldiers, ` +
      `bored, underpaid, and drawn mostly from the very Faubourg that seethes ` +
      `below their windows. Their officers are sure of them. Their officers have ` +
      `not asked them lately whom they would truly fire upon.`);
    room('bast_workshop', 'The Cabinetmakers\' Workshops',
      `The pride of the Faubourg: workshops where the finest furniture on Kaelinu ` +
      `is joined and veneered and gilded for palaces the makers will never enter. ` +
      `The air is sweet with sawdust and shellac. The tools are precise, and ` +
      `heavy, and — a joiner might idly note, planing a duke's escritoire — very ` +
      `well suited to other work.`);
    room('bast_brewery', 'The Faubourg Brewery',
      `A great steaming brewery whose thin beer fuels the district, its yard ` +
      `stacked with barrels and its gutters running warm. The draymen are ` +
      `built like their horses and known through the Faubourg, and when the ` +
      `draymen stop their rounds, the wise men of Empyrean have learned, ` +
      `something is about to happen.`);
    room('bast_tannery', 'The Faubourg Tanneries',
      `A stinking cluster of tan-pits and drying-sheds where the district's ` +
      `poorest labour up to the elbow in lime and worse for a wage that buys the ` +
      `grey bread and little else. Their hands are ruined, their tempers short, ` +
      `and their patience, after generations, worn to the thickness of the hides ` +
      `they scrape.`);
    room('bast_square', 'The Place of the Faubourg',
      `A broad, bare, ill-paved square where the Faubourg gathers — to trade, to ` +
      `drink, to bury, and, more and more, to listen: to the ballad-singers with ` +
      `their savage new songs, to the ranters on their barrels, to the terrible ` +
      `arithmetic of the price of bread. A crowd stands here most evenings now. ` +
      `It is not, quite, a mob. Not yet.`);
    room('bast_market', 'The Beggars\' Market',
      `A wretched market of the Faubourg where the truly destitute sell what ` +
      `they have — a cracked pot, a child's shoe, a day's labour, a daughter's ` +
      `hair. It is the honest bottom of the Empire's glittering column, and the ` +
      `court, safe across the river, has arranged never, ever to see it.`);
    room('bast_chapel', 'The Prisoners\' Chapel',
      `A bare chapel within the Bastion where the condemned may make their peace, ` +
      `tended by a gentle old star-priest who has heard the last words of more ` +
      `forgotten men than any confessor in the Empire, and keeps them all, ` +
      `unwritten, in the one archive the King's Warrant cannot reach.`);
    room('bast_wellyard', 'The Well-Yard',
      `A communal yard around the Faubourg's one good well, where the women queue ` +
      `for water and the district's true news is drawn up with the buckets. It is ` +
      `here, not in any palace, that the mood of Empyrean is really made, one ` +
      `whispered grievance at a time.`);

    link('bast_gate', 'e', 'bast_faubourg');
    link('bast_faubourg', 'e', 'bast_road');
    link('bast_faubourg', 'n', 'bast_workshop');
    link('bast_faubourg', 's', 'bast_brewery');
    link('bast_faubourg', 'ne', 'bast_square');
    link('bast_faubourg', 'se', 'bast_tannery');
    link('bast_faubourg', 'sw', 'bast_wellyard');
    link('bast_road', 'e', 'bast_fortress');
    link('bast_fortress', 'e', 'bast_gatehouse');
    link('bast_fortress', 'n', 'bast_barracks');
    link('bast_gatehouse', 'e', 'bast_ward');
    link('bast_gatehouse', 'n', 'bast_governor');
    link('bast_gatehouse', 's', 'bast_arsenal');
    link('bast_ward', 'n', 'bast_tower1');
    link('bast_ward', 's', 'bast_tower2');
    link('bast_ward', 'e', 'bast_chapel');
    link('bast_ward', 'd', 'bast_oubliette');
    link('bast_arsenal', 'e', 'bast_powder');
    link('bast_square', 'e', 'bast_market');

    /* ================================================================= *
     *  X. THE COUR DES MIRACLES  (22) — the thieves' slum; the impasse.
     * ================================================================= */
    room('cour_cut', "Saints' Cut",
      `The neglected archway off the Carrefour narrows at once to a foul cut ` +
      `between windowless walls, the light going brown and low, the noise of the ` +
      `bright city dropping away behind you as if through water. Underfoot the ` +
      `good imperial cobbles give out to mud. A crude saint, faceless with age, ` +
      `is scratched on the wall, one hand raised — in blessing, or in warning.`);
    room('cour_mouth', 'The Mouth of the Cour',
      `The cut opens on a huddle of leaning tenements that turn their backs on the ` +
      `Empire. This is the edge of the Cour des Miracles, the thieves' city ` +
      `within the city, where the Watch does not come and the King's writ does ` +
      `not run. A lookout whistles once, somewhere above. You have been noted.`);
    room('cour_court', 'The Cour des Miracles',
      `The great foul court at the slum's heart, and the source of its name: for ` +
      `here, at dusk, the cripples of the day's begging rise up whole, the blind ` +
      `see, the palsied still their shaking — every affliction a costume, hung up ` +
      `at nightfall like a workman's apron. It is a miracle, of a kind: the ` +
      `daily resurrection of the Empire's most honest liars.`);
    room('cour_throne', "The Grand Coësre's Court",
      `A tenement's gutted ground-floor made a throne-room, where the Grand ` +
      `Coësre — the King of Thieves, the sovereign of the Cour — holds his ragged ` +
      `state on a chair of stolen velvet. He taxes every theft, judges every ` +
      `quarrel, and hangs his own with a fairness the Empire has never troubled ` +
      `to match. His word is the only law here, and it is, in its way, kept.`);
    room('cour_flash', 'The Flash-House',
      `A crowded room where the day's stealings are appraised and sold on — ` +
      `snuffboxes and watch-chains, lace and letters, the pick of a thousand ` +
      `picked pockets. The flash-buyer weighs it all with a jeweller's eye and a ` +
      `hangman's conscience, and pays a tenth of worth, and is haggled with ` +
      `anyway, on principle.`);
    room('cour_fence', "The Fence's Cellar",
      `A deeper cellar where the serious goods go — the plate, the jewels, the ` +
      `things with crests that must be melted or shipped quietly across the ` +
      `Sleeve to Albeon before they are missed. The fence trusts no one, counts ` +
      `everything twice, and has, folded in his boot, a list of names that could ` +
      `hang half the Cour and will, the day it profits him.`);
    room('cour_beggars', "Beggars' Row",
      `A row of doss-holes where the Cour's beggars lodge and school — for ` +
      `begging is a trade here, with masters and apprentices and a strict ` +
      `curriculum of sores, stumps, and sorrowful tales, most of them counterfeit ` +
      `and all of them, by long practice, heartbreakingly good.`);
    room('cour_cripples', "The Cripples' Rest",
      `A low room where the "cripples" of the Cour hang their crutches and false ` +
      `stumps on numbered pegs at day's end and walk, whole and weary, to their ` +
      `suppers. A newcomer, watching a lifelong beggar stand and stretch, learns ` +
      `the first lesson of the Cour: in Empyrean, everything you were shown was ` +
      `a performance, and this is merely the honest theatre.`);
    room('cour_nook', "The Cutpurse's Nook",
      `A dead-end scrap of yard where the young cutpurses practise their art on a ` +
      `coat hung with bells that must not ring, under the eye of a master who ` +
      `raps a knuckle for every chime. Beyond it, a crooked passage runs off ` +
      `east into a darkness the Cour itself gives a wide berth — the old impasse, ` +
      `where even the thieves will not sleep.`);
    room('cour_impasse', 'The Impasse of the Last Saint',
      `The alley narrows, and narrows, and does not end. Where a wall should ` +
      `close it there is instead a — a somewhere-else, a cold seam in the air ` +
      `where the brick simply stops being brick and the dark stops being dark. ` +
      `It is not a door. It was never a door. And yet it is open, and through it ` +
      `you can smell a colder stone and see, or almost see, a grey basalt disc ` +
      `worn to a mirror, under a black and starless sky. The Cour swears the ` +
      `impasse leads out of the world; the Cour swears no one who walks into it ` +
      `is ever seen in Empyrean again. To the north — if north still means ` +
      `anything here — the not-wall waits.`);
    room('cour_den', "The Thieves' Den",
      `The Cour's common room, a smoky cavern of stolen comfort where the ` +
      `light-fingered fraternity drinks, dices, and boasts of the day's work. A ` +
      `notched shortsword and worse lean by the door. Newcomers are weighed in a ` +
      `glance for what they carry and whether they can keep it.`);
    room('cour_gin', 'The Gin-Cellar',
      `A pit of a cellar where raw gin is sold by the ha'penny nip to drink the ` +
      `Cour's memory quiet — "drunk for a farthing, dead drunk for two, straw ` +
      `provided free," runs the sign over the barrel. Bodies lie where they fell ` +
      `among the straw. In the morning some of them get up.`);
    room('cour_doss', 'The Doss-House',
      `A reeking dormitory where a bed of sorts, or a share of one, or a length ` +
      `of rope to sleep slung over, may be had for a copper. The Cour's ` +
      `foot-soldiers sleep here in their boots with one hand on their knives, and ` +
      `wake to the same dark trade they laid down.`);
    room('cour_rookery', 'The Rookery',
      `A rotten tenement-tangle so warrened with hidden doors, false floors, and ` +
      `rooftop runs that a hunted man may cross the whole block without touching ` +
      `the street, and the Watch, on the rare mad day it enters, is swallowed ` +
      `whole. Children swarm the crazy stairs like starlings. Every one of them ` +
      `is already someone's lookout.`);
    room('cour_school', 'The Thieving-School',
      `A garret where the Cour's orphans are drilled in the family arts — the dip, ` +
      `the palm, the pretty distraction — by a wheedling old master who feeds them ` +
      `thin and works them clever, and loves them, in his fashion, better than the ` +
      `Empire ever did. They would die for him. Now and then one does.`);
    room('cour_chapel', 'The Cracked Chapel',
      `A little chapel long deconsecrated and given over to the Cour, its saints ` +
      `defaced, its font full of gin, its altar a card-table. The thieves keep ` +
      `their own crooked faith here, praying to Saint Nick-the-Purse for a fat ` +
      `mark and a slow watchman, and, now and then, in a bad hour, for something ` +
      `they cannot name.`);
    room('cour_gibbet', 'The Gibbet-Yard',
      `A grim yard where the Grand Coësre's justice is done and displayed — for ` +
      `the Cour hangs its traitors and informers itself, quickly and in-house, ` +
      `and lets them swing as instruction. The rope is communal property. There ` +
      `is a queue, some weeks, to work it.`);
    room('cour_bridge', 'The Rag-Bridge',
      `A rickety span of planks and stolen doors thrown across the open sewer ` +
      `that drains the Cour, hung with drying rags that give it its name. Below, ` +
      `the black water moves, and things move in the black water. Cross quickly. ` +
      `Do not drop anything you would grieve for.`);
    room('cour_well', 'The Poisoned Well',
      `The Cour's own well, its water grey and glittering-wrong, drunk anyway by ` +
      `those with no coin for the gin. It is said to grant fever-dreams and, to a ` +
      `few, true visions; it is known to grant the flux. The desperate lower ` +
      `their buckets and hope for the vision.`);
    room('cour_sewer', 'The Open Sewer',
      `Beneath the rag-bridge, at the water's level, a slick ledge runs beside the ` +
      `Cour's foul drain into the dark under Empyrean. Down here lair the worst ` +
      `of the slum's outcasts — the sewer-toughs, cast out even by thieves, gone ` +
      `feral in the wet dark and hungry for anything softer than themselves.`);
    room('cour_kitchen', "The Thieves' Kitchen",
      `A greasy communal kitchen where a great pot of "resurrection stew" — so ` +
      `named for the mystery of its ingredients and the miracle of surviving ` +
      `it — simmers eternally, topped up and never emptied, feeding the Cour for ` +
      `a copper a bowl. It is, astonishingly, rather good, and no one who values ` +
      `their peace of mind asks the cook a single question.`);
    room('cour_backway', 'The Back-Way',
      `A crooked lane that lets the Cour slip, unseen, into the back of Les ` +
      `Grènes — for the thieves and the market have an old, unspoken arrangement, ` +
      `and much of what is lifted in the aisles by noon is sold back over these ` +
      `stones by dusk. The traffic runs both ways, quiet and constant, the true ` +
      `commerce of Empyrean.`);

    link('cour_cut', 'n', 'cour_mouth');
    link('cour_mouth', 'n', 'cour_court');
    link('cour_court', 'n', 'cour_throne');
    link('cour_court', 'e', 'cour_beggars');
    link('cour_court', 'w', 'cour_den');
    link('cour_court', 'ne', 'cour_rookery');
    link('cour_court', 'nw', 'cour_chapel');
    link('cour_court', 'se', 'cour_kitchen');
    link('cour_court', 'sw', 'cour_gibbet');
    link('cour_throne', 'e', 'cour_flash');
    link('cour_throne', 'w', 'cour_fence');
    link('cour_beggars', 'e', 'cour_cripples');
    link('cour_beggars', 's', 'cour_nook');
    link('cour_nook', 'e', 'cour_impasse');
    link('cour_den', 'w', 'cour_gin');
    link('cour_den', 's', 'cour_doss');
    link('cour_rookery', 'n', 'cour_school');
    link('cour_gibbet', 'e', 'cour_bridge');
    link('cour_bridge', 'e', 'cour_well');
    link('cour_bridge', 'd', 'cour_sewer');
    link('cour_backway', 'n', 'cour_gibbet');

    /* ================================================================= *
     *  Inhabitants: a few placed items and folk, peaceful and otherwise.
     * ================================================================= */

    // --- Starting kit, found in the Cour where the desperate arm themselves ---
    R.cour_den.add(world.item({
      name: 'notched shortsword',
      keywords: ['shortsword', 'sword', 'notched', 'blade'],
      short: 'A notched shortsword leans by the door, free for the taking.',
      description:
        'A cheap, honest blade, nicked from use and dark with old oil. Not much, ' +
        'but a great deal better than bare hands in a place like this.',
      weight: 3,
      damage: [3, 6],
      accuracy: 1,
    }));
    R.cour_doss.add(world.item({
      name: 'boiled-leather jerkin',
      keywords: ['jerkin', 'leather', 'armor', 'armour'],
      short: 'A boiled-leather jerkin has been left on a peg.',
      description:
        'A scarred jerkin of hardened leather, cracked but sound. It has stopped ' +
        'a knife or two, judging by the mends.',
      weight: 4,
      armor: 2,
    }));
    R.bast_arsenal.add(world.item({
      name: "gendarme's saber",
      keywords: ['saber', 'sabre', 'gendarme'],
      short: "A gendarme's saber has slipped from the rack.",
      description:
        'A cavalry saber of good Empire steel, curved for the cut, its brass ' +
        'guard stamped with the crowned star. A soldier\'s weapon, and a fine one.',
      weight: 4,
      damage: [5, 9],
      accuracy: 2,
    }));

    // --- Peaceful folk (talk to them) ---
    R.isle_parvis.add(world.mob({
      name: 'stargazer-priest',
      keywords: ['priest', 'stargazer', 'cleric'],
      short: 'A stargazer-priest reads the sky from the parvis, lips moving.',
      description:
        'A thin cleric in star-grey robes, an astrolabe on a chain about his ' +
        'neck, forever glancing up as though the answer were about to arrive.',
      xp: 0,
      dialogue:
        'The seventh star wanders, child. The Church says it is nothing. I have ' +
        'read the sky forty years, and it is not nothing. Pray I am wrong.',
    }));
    R.quai_booksellers.add(world.mob({
      name: 'old bookseller',
      keywords: ['bookseller', 'bouquiniste', 'seller'],
      short: 'An old bookseller minds her green boxes against the wind.',
      description:
        'A sharp-eyed woman wrapped in three coats, mistress of a hundred banned ' +
        'ideas she sells with a wink and a glance down the quay for the censor.',
      xp: 0,
      dialogue:
        'Sermons on top, sedition beneath — same as the Empire, dear. A sol for ' +
        'the philosophy, and mind the gendarme doesn\'t see which book you buy.',
    }));
    R.coll_place.add(world.mob({
      name: 'ragged student',
      keywords: ['student', 'scholar'],
      short: 'A ragged student argues with the air, rehearsing a disputation.',
      description:
        'A hungry young man in a gown gone green at the seams, his eyes bright ' +
        'with wine, wit, and the particular fury of the clever and the poor.',
      xp: 0,
      dialogue:
        'They teach us Old Latian to keep the truth in a locked language. But ' +
        'the presses on Printers\' Row speak the tongue of the street now. Let ' +
        'the censors chase THAT.',
    }));
    R.mont_cabaret.add(world.mob({
      name: 'cabaret chanteuse',
      keywords: ['chanteuse', 'singer', 'woman'],
      short: 'The chanteuse leans by the little stage, saving her voice.',
      description:
        'A woman with kohl-dark eyes and a wry, ruined smile, who sings the ' +
        'butte\'s savage songs and has watched half of Empyrean weep into its ' +
        'absinthe.',
      xp: 0,
      dialogue:
        'Up here we sing what the Marais only dares to think. Come back at the ' +
        'green hour, love, and I\'ll sing you the one about the Astrarch and the ' +
        'bread. Quietly.',
    }));

    // --- The King of Thieves: a talkable power, and a fearsome fight ---
    R.cour_throne.add(world.mob({
      name: 'Grand Coësre',
      keywords: ['coesre', 'grand', 'king', 'thief'],
      proper: true,
      short: 'The Grand Coësre lounges on his stolen throne, taking your measure.',
      description:
        'The King of Thieves: a lean, scarred, courteous man in a coat of ' +
        'stolen finery, rings on every finger and none of them his. He rules the ' +
        'Cour with a wit as quick as his knife, and misses nothing.',
      level: 8,
      maxHp: 70,
      stats: { str: 16, dex: 18, con: 15, int: 15 },
      damage: [6, 12],
      armor: 2,
      xp: 300,
      dialogue:
        'Welcome to the Cour, stranger. Down here we are all honest — we admit ' +
        'to being thieves. Mind the impasse past the Nook; walk into that and ' +
        'even I can\'t tax what becomes of you.',
    }));

    // --- Hostile things, for the blooding of new blades ---
    R.cour_den.add(world.mob({
      name: 'footpad',
      keywords: ['footpad', 'thief', 'cutpurse'],
      short: 'A footpad sizes up your purse from the shadows.',
      description:
        'A wiry cutthroat with quick hands and a quicker knife, the sort that ' +
        'works the dark lanes for whatever a stranger is careless enough to ' +
        'carry.',
      hostile: true,
      level: 1,
      maxHp: 14,
      stats: { str: 11, dex: 13, con: 10, int: 9 },
      damage: [2, 5],
      xp: 30,
      respawns: 45,
    }));
    R.cour_sewer.add(world.mob({
      name: 'sewer-tough',
      keywords: ['sewer-tough', 'tough', 'brute'],
      short: 'A sewer-tough hunches in the filth, and grins with too few teeth.',
      description:
        'A huge, half-mad brute gone to the drains when even the thieves cast ' +
        'him out, pale and scabbed and strong as a dray-horse, hungry for ' +
        'anything softer than himself.',
      hostile: true,
      level: 3,
      maxHp: 30,
      stats: { str: 16, dex: 10, con: 14, int: 6 },
      damage: [3, 7],
      armor: 1,
      xp: 75,
      respawns: 60,
    }));
    R.gren_rats.add(world.mob({
      name: 'market rat',
      keywords: ['rat', 'vermin'],
      short: 'A market rat the size of a cat bares its teeth from the muck.',
      description:
        'A monstrous rat grown bold and enormous on the market\'s waste, its ' +
        'eyes red and its intentions plain.',
      hostile: true,
      level: 1,
      maxHp: 10,
      stats: { str: 9, dex: 14, con: 9, int: 3 },
      damage: [1, 4],
      xp: 20,
      respawns: 40,
    }));
    R.bast_oubliette.add(world.mob({
      name: 'thing in the oubliette',
      keywords: ['thing', 'prisoner', 'forgotten'],
      short: 'Something pale unfolds from the filth of the oubliette.',
      description:
        'It was lowered here a man, in some forgotten reign, and the black ' +
        'years have unmade it into this — nailless, eyeless, patient, and ' +
        'terribly, ' +
        'terribly strong. It does not remember its crime. It does not remember ' +
        'anything but hunger.',
      hostile: true,
      level: 6,
      maxHp: 55,
      stats: { str: 18, dex: 9, con: 16, int: 4 },
      damage: [5, 10],
      armor: 2,
      xp: 200,
      respawns: 120,
    }));

    // The Eastern Company voyage: board at the Sea-Gate to sail to Miyako.
    R.quai_watergate.ferry = {
      toId: 'bay_wharf',
      moored: 'The Eastern carrack lies at the sea-gate stairs, victualling for ' +
        'the long voyage',
      crossing: [
        'You take passage aboard the Eastern carrack, and she drops down the ' +
          'Sequane on the ebb and stands out at last into the open sea.',
        'Then the world becomes only the ship: week upon week upon week of it, ' +
          'the trade-winds and the calms, the flying fish and the storms, the ' +
          'stars wheeling slowly to a stranger sky as the carrack claws her way ' +
          'east across the whole breadth of the world.',
        'Months on, gaunt and salt-cured, you raise a coast of terraced hills ' +
          'and, floating above it, a single perfect snow-white cone. The ship ' +
          'is met by guard-junks and stripped of her guns before she may ' +
          'approach, and warped at last to a lonely berth beneath the shore- ' +
          'battery of Miyako, in the closed empire of Yamato.',
      ],
    };

    // The cross-Sleeve packet: board at the Custom-House to sail to Lunden.
    R.quai_customs.ferry = {
      toId: 'pool_packet',
      moored: 'The Lunden packet lies at the stairs, taking on passengers',
      crossing: [
        'You pay the fare and step down into the packet-boat.',
        'She casts off, and the Custom-House slides away astern. The Sequane ' +
          'widens, the banks fall back, and Empyrean sinks into its own coal- ' +
          'grey haze.',
        'For a long grey while there is only the heave of the open Sleeve, and ' +
          'the gulls, and the cold. Then, low on the water ahead, a smudge of ' +
          'smoke resolves into a forest of masts, and the packet noses in past ' +
          'the moored hulks toward the stairs of Lunden.',
      ],
    };

    return {
      area: empyrean,
      startId: 'isle_carrefour',
      impasseId: 'cour_impasse',
      impasseDir: 'n',
    };
  };
})(typeof window !== 'undefined' ? window : this);
