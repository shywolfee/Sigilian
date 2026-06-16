“Red Storm Rising” by Anonymous

The story headline is “A Science-Fantasy Adventure”.
The story genre is “Science Fiction”.
The release number is 1.

Part 1 - Definitions

Chapter 1 - Kinds

A coffin-lid is a kind of door. A coffin-lid is usually closed and openable. The description of a coffin-lid is usually “A scratched plasteel panel that slides up on hydraulic pistons. The locking mechanism is coin-operated — one cred buys you eight hours without getting your organs harvested.”

A deck-door is a kind of door. A deck-door is usually closed and openable.

A vending-machine is a kind of thing. A vending-machine is usually fixed in place. The description of a vending-machine is usually “A battered unit bolted to the wall, its selection window clouded with grime. Most of the buttons are dead.”

A display-screen is a kind of thing. A display-screen is usually fixed in place and scenery.

A nav-buoy is a kind of thing. A nav-buoy is usually fixed in place. Understand “buoy” or “navigation buoy” or “beacon” as a nav-buoy.

A grav-lock-chamber is a kind of room.

Chapter 2 - Properties

A room can be zero-grav or normal-grav. A room is usually normal-grav.

A room has a text called the grav-description. The grav-description of a room is usually “”.

After going to a zero-grav room (called the destination):
	if the room gone from is normal-grav:
		say “Gravity falls away. Your stomach lurches as the floor ceases to mean anything — up and down become suggestions, not facts. You drift forward, catching a handhold to steady yourself.”;
	continue the action.

After going to a normal-grav room (called the destination):
	if the room gone from is zero-grav:
		say “Weight returns in a rush. Your boots find the deck and your knees bend to absorb the sudden pull. Gravity — ugly, heavy, reliable gravity.”;
	continue the action.

Chapter 3 - Backdrops

The station-hum is a backdrop. The station-hum is everywhere. The description of the station-hum is “A low, omnipresent vibration — the breath of Praxis herself. Reactor cycles, air recyclers, thousands of bodies packed into steel. You stopped noticing it years ago, but it never stops.” The printed name of the station-hum is “station hum”. Understand “hum” or “vibration” or “noise” or “sound” as the station-hum.

The overhead-pipes is a backdrop. The overhead-pipes is everywhere. The description of the overhead-pipes is “Bundles of conduit and pipe run along the ceiling — coolant lines, data cables, power feeds, sewage. Some are labeled. Most are not. Occasionally something drips.” The printed name of the overhead-pipes is “overhead pipes”. Understand “pipes” or “conduit” or “conduits” or “cables” or “pipe” or “ceiling” as the overhead-pipes.

The deck-plating is a backdrop. The deck-plating is everywhere. The description of the deck-plating is “Scuffed metal grating, worn smooth in the high-traffic areas and crusted with unidentifiable residue in the corners. Below the grate, you can see the dark gap of the service crawlspace.” The printed name of the deck-plating is “deck plating”. Understand “floor” or “deck” or “plating” or “grating” or “grate” as the deck-plating.

Chapter 4 - The Transtube System

Section 1 - The Pod

The Transtube Pod is a room. “The interior of a transtube pod — a smooth ovoid capsule with six acceleration couches arranged in a circle. The walls are featureless grey composite. A destination panel glows on the forward bulkhead, listing the available stops. The pod hums with contained energy, waiting for a command.[paragraph break]Available destinations: WARRENS (Deck 7), DOCKING RING, COMMERCE DECK.”

The pod-destination-panel is a display-screen in the Transtube Pod. The description of the pod-destination-panel is “A curved display panel listing transtube stops:[line break][line break]  1. WARRENS (Deck 7)[line break]  2. DOCKING RING[line break]  3. COMMERCE DECK[line break][line break]Touch a destination or speak the name to confirm. The ENGINEERING line is absent — removed from the network entirely.” The printed name of the pod-destination-panel is “destination panel”. Understand “panel” or “destination” or “display” as the pod-destination-panel.

Some acceleration-couches are an enterable supporter in the Transtube Pod. “Six acceleration couches ring the pod interior.” The description of the acceleration-couches is “Form-fitting couches with worn crash harnesses. The padding has been patched so many times it's more tape than foam. They smell faintly of the last thousand passengers.” The printed name of the acceleration-couches is “acceleration couches”. Understand “couches” or “couch” or “seat” or “seats” or “harness” or “harnesses” as the acceleration-couches.

Section 2 - Boarding

Boarding-the-pod is an action applying to nothing. Understand “board pod” or “board transtube” or “enter pod” or “get in pod” or “board” as boarding-the-pod.

Check boarding-the-pod:
	if the player is in the Transtube Pod, say “You're already in a pod.” instead;
	if the player is not in the Transtube Waiting Area and the player is not in the Ring Transtube Station, say “There's no transtube pod to board here.” instead.

Carry out boarding-the-pod:
	say “A pod slides into the station with a hiss of equalizing pressure. The doors iris open. You step inside and the doors seal behind you with a soft thunk.”;
	now the player is in the Transtube Pod.

Section 3 - Selecting Destinations

Pod-travelling is an action applying to one topic. Understand “select [text]” or “travel to [text]” or “go to [text]” or “choose [text]” as pod-travelling.

Check pod-travelling:
	if the player is not in the Transtube Pod, say “You're not in a transtube pod.” instead.

Carry out pod-travelling:
	if the topic understood matches the regular expression “(?i)warren|deck 7|warrens”:
		say “The pod seals with a pressurized click. A chime sounds. Then acceleration — brutal and brief — slams you into the couch. The pod screams through the mag-lev tunnel, the walls outside a blur of light-strips. Deceleration hits just as hard. The doors iris open onto familiar grime.[paragraph break]”;
		now the player is in the Transtube Waiting Area;
	else if the topic understood matches the regular expression “(?i)ring|docking”:
		say “The pod seals. A deep thrum builds beneath you as the mag-lev engages. Acceleration crushes you into the couch — then weightlessness as the pod arcs through the station's central axis, threading the gap between decks. You feel the station's spin fall away as the pod crosses into the non-rotating section. Deceleration. The doors open onto cleaner air and brighter lights.[paragraph break]”;
		now the player is in the Ring Transtube Station;
	else if the topic understood matches the regular expression “(?i)commerce”:
		say “The pod seals and launches. The journey is longer — the Commerce Deck is on the far side of the station. You watch light-strips streak past through the tiny viewport. Eventually, deceleration. The doors open... but there's nothing here yet. The platform is under construction. You step back inside.[paragraph break]The pod returns you to where you started.”;
	else:
		say “The panel flashes red: DESTINATION NOT RECOGNIZED. Available stops: WARRENS, DOCKING RING, COMMERCE DECK.”

Section 4 - Exiting

Disembarking is an action applying to nothing. Understand “exit pod” or “leave pod” or “disembark” or “get out” or “exit” or “leave” as disembarking.

Check disembarking:
	if the player is not in the Transtube Pod, say “You're not in anything to exit.” instead.

Carry out disembarking:
	say “You haven't selected a destination yet. Use the destination panel to choose where to go.”

Part 2 - The Warrens of Praxis

Chapter 1 - Opening

When play begins:
	say “The klaxon hits you like a fist.[paragraph break]Three sharp blasts — the Warren's morning cycle. Somewhere in the walls, the light-strips flicker from deep red to a sickly amber as the station's day-cycle kicks over. The recycled air tastes of rust and old sweat.[paragraph break]You are in your sleeping cube on Deck 7 of the Warrens, the cheapest district on Praxis Station. Outside, the station turns its slow orbit around Maw — the black hole that swallowed a solar system and made a thousand fortunes.[paragraph break]Time to move. The cube rental ran out ten minutes ago.”

Chapter 2 - The Sleeping Cube

The Sleeping Cube is a room. “A coffin-sized capsule of scratched plasteel, two meters long and barely one meter high. A thin gel-mat covers the floor, and a status strip above the hatch glows an angry red — RENTAL EXPIRED. The air is thick and stale.”

The sleeping-coffin-lid is a coffin-lid. The sleeping-coffin-lid is south of the Sleeping Cube and north of the Cube Row. The printed name of the sleeping-coffin-lid is “coffin lid”. Understand “coffin” or “lid” or “hatch” or “panel” as the sleeping-coffin-lid.

The gel-mat is an enterable supporter in the Sleeping Cube. “The gel-mat is rumpled where you were lying on it.” The description of the gel-mat is “A thin slab of memory gel, body-temperature and faintly damp. It has a permanent impression of someone roughly your size.” The printed name of the gel-mat is “gel-mat”. Understand “mat” or “gel” or “mattress” or “bed” as the gel-mat.

The player is on the gel-mat.

The status-strip is scenery in the Sleeping Cube. The description of the status-strip is “A thin LED bar above the hatch. It reads: RENTAL EXPIRED — VACATE IMMEDIATELY. The red glow makes everything look like an emergency.” The printed name of the status-strip is “status strip”. Understand “strip” or “status” or “led” or “light” or “display” as the status-strip.

The personal-locker is a closed openable container in the Sleeping Cube. The description of the personal-locker is “A small lockbox welded to the wall by the hatch. The latch is broken — has been for months.” The printed name of the personal-locker is “personal locker”. Understand “locker” or “lockbox” or “box” as the personal-locker.

Chapter 3 - Cube Row

The Cube Row is a room. “A narrow corridor barely wide enough for two people to pass, lined on both sides with stacked sleeping cubes — four high, stretching in both directions. Status lights blink in a patchwork of red, amber, and the occasional green. The air smells of bodies and cheap disinfectant. The corridor runs east toward a junction, and your cube hatch is to the north.”

Some stacked-cubes are scenery in the Cube Row. The description of the stacked-cubes is “Rows of sleeping coffins stacked floor to ceiling. Most are occupied — you can hear snoring, coughing, the tinny bleed of audio feeds through thin walls. A few have personal touches: stickers, scratched names, a faded photograph taped to a hatch.” The printed name of the stacked-cubes is “sleeping cubes”. Understand “cubes” or “coffins” or “stacked” or “rows” or “capsules” as the stacked-cubes.

The cube-status-lights are scenery in the Cube Row. The description of the cube-status-lights is “Red means expired. Amber means occupied. Green means available — and there are very few green lights. The Warrens are always full.” The printed name of the cube-status-lights is “status lights”. Understand “lights” or “status lights” or “blink” or “blinking” as the cube-status-lights.

A disinfectant-smell is scenery in the Cube Row. The description of the disinfectant-smell is “A chemical tang that doesn't quite mask the human smell underneath. Someone's been through with a sprayer recently — probably the cube warden making his rounds.” The printed name of the disinfectant-smell is “smell of disinfectant”. Understand “smell” or “disinfectant” or “odor” as the disinfectant-smell.

Chapter 4 - Cube Row Junction

East of the Cube Row is The Cube Row Junction. “The sleeping cube corridors meet here at a T-junction. Cube rows branch off to the west and north, and the main Warren corridor opens up to the south. A water recycler is bolted to the wall, its spigot dripping steadily into a drain grate. Someone has scratched MAWS TEETH into the wall above it.”

The water-recycler is a fixed in place thing in the Cube Row Junction. “A water recycler hums and drips against the wall.” The description of the water-recycler is “A boxy unit that filters station grey-water into something technically potable. The spigot drips a thin stream of cloudy liquid. A faded label reads: BOIL ADVISORY IN EFFECT — but the advisory date was three years ago.” The printed name of the water-recycler is “water recycler”. Understand “recycler” or “water” or “spigot” or “drip” as the water-recycler.

The scratched-graffiti is scenery in the Cube Row Junction. The description of the scratched-graffiti is “MAWS TEETH — scratched deep into the metal with something sharp. A gang tag, maybe, or just someone's idea of poetry. The Maw is what the locals call the black hole that Praxis orbits.” The printed name of the scratched-graffiti is “graffiti”. Understand “graffiti” or “scratched” or “maws” or “teeth” or “writing” as the scratched-graffiti.

Chapter 5 - Warren Main Corridor North

South of the Cube Row Junction is Warren Main Corridor North. “The main artery of Deck 7 — a wide corridor by Warren standards, maybe three meters across. The ceiling is a tangle of exposed pipe and conduit. Foot traffic moves in both directions: shift workers heading to the lifts, scavengers hauling salvage carts, the occasional enforcer in scratched body armor. The corridor continues south, and the cube rows branch off to the north.”

Some shift-workers are scenery in Warren Main Corridor North. The description of the shift-workers is “A stream of tired faces heading to or from twelve-hour shifts in the processing plants, the docks, the recycling bays. Nobody makes eye contact.” The printed name of the shift-workers is “shift workers”. Understand “workers” or “people” or “crowd” or “pedestrians” or “shift” as the shift-workers.

Some salvage-carts are scenery in Warren Main Corridor North. The description of the salvage-carts is “Improvised push-carts loaded with scrap metal, dead electronics, stripped cable. The scavengers who push them have the hollow look of people who eat when they find something worth selling.” The printed name of the salvage-carts is “salvage carts”. Understand “carts” or “salvage” or “scrap” or “scavengers” as the salvage-carts.

An enforcer is scenery in Warren Main Corridor North. The description of the enforcer is “A big figure in mismatched body armor — some of it station security surplus, some of it improvised. They work for whoever's running the Warren this month. Their eyes sweep the corridor with the bored alertness of a predator that isn't hungry yet.” Understand “guard” or “security” or “armor” as the enforcer.

Chapter 6 - Warren Main Corridor South

South of Warren Main Corridor North is Warren Main Corridor South. “The corridor widens slightly here as it approaches the market district. Stall-fronts have been welded into the walls on both sides — metal shutters, hand-painted signs, the glow of neon strips. Most are closed at cycle-start, but a few early risers have their shutters up. The corridor continues south to the market square, and a narrow side passage leads east to the clinic.”

Some closed-stalls are scenery in Warren Main Corridor South. The description of the closed-stalls is “Shuttered market stalls built directly into the corridor walls. Hand-painted signs advertise stim-patches, reconditioned breathers, data chips, and cooked food of uncertain origin. The shutters are dented and covered in layers of old adhesive where notices have been posted and torn away.” The printed name of the closed-stalls is “market stalls”. Understand “stalls” or “stall” or “shutters” or “shops” or “signs” or “neon” as the closed-stalls.

Chapter 7 - The Clinic Passage

East of Warren Main Corridor South is The Clinic Passage. “A narrow side corridor, quieter than the main drag. Fluorescent strips buzz overhead, half of them dead. The clinic entrance is to the east, marked by a faded red cross painted on the wall. A bench has been welded to the opposite wall.”

The clinic-bench is an enterable supporter in the Clinic Passage. “A metal bench is welded to the wall opposite the clinic.” The description of the clinic-bench is “Bare metal, polished smooth by use. People wait here when the clinic is full, which is most of the time.” The printed name of the clinic-bench is “bench”. Understand “bench” or “seat” as the clinic-bench.

The clinic-cross is scenery in the Clinic Passage. The description of the clinic-cross is “A red cross, hand-painted on the wall in what you hope is paint. It's the universal sign, even out here.” The printed name of the clinic-cross is “red cross”. Understand “cross” or “red cross” or “painted” as the clinic-cross.

East of the Clinic Passage is The Clinic. “A single room carved out of what was probably a storage bay. Harsh white light from overhead panels. A gurney, a cabinet of supplies, and a diagnostic terminal make up the entirety of the equipment. The walls are covered in laminated hygiene notices that nobody reads.”

The gurney is an enterable supporter in the Clinic. “A gurney sits in the center of the room, its padding cracked and stained.” The description of the gurney is “A medical gurney with adjustable height. The padding is cracked and patched with adhesive tape. It's been sterilized recently — you can smell the chemicals.”

The supply-cabinet is a closed openable container in the Clinic. The description of the supply-cabinet is “A locked metal cabinet with a reinforced glass front. Through the glass you can see rows of stim-patches, suture kits, and unmarked vials. The lock is serious — this is the most valuable collection of goods on the deck.” The printed name of the supply-cabinet is “supply cabinet”. Understand “cabinet” or “supplies” or “medical” as the supply-cabinet.
Instead of opening the supply-cabinet, say “It's locked with a biometric seal. You're not a registered medic.”

The diagnostic-terminal is a display-screen in the Clinic. The description of the diagnostic-terminal is “An ancient medical terminal, its screen scratched and its casing yellowed. It cycles through a boot diagnostic on a loop — SYSTEM READY has been blinking for what looks like years.” The printed name of the diagnostic-terminal is “diagnostic terminal”. Understand “terminal” or “diagnostic” or “screen” or “computer” as the diagnostic-terminal.

Chapter 8 - Warren Market Square

South of Warren Main Corridor South is Warren Market Square. “The heart of Deck 7 — a roughly circular open space where four corridors converge. The ceiling is higher here, maybe five meters, and the space has been colonized by market stalls, food vendors, and at least one establishment with blacked-out windows and a bouncer. The air is thick with cooking smoke, the buzz of haggling, and the bass thrum of music from somewhere below the deck plates. Exits lead north, east, south, and west.”

Some market-vendors are scenery in Warren Market Square. The description of the market-vendors is “A dozen stalls crammed into every available space. Cooked noodles, salvage electronics, bootleg software, counterfeit stim-patches, secondhand clothing — the economy of the Warrens laid bare. The vendors shout over each other in a pidgin of three or four languages.” The printed name of the market-vendors is “market vendors”. Understand “vendors” or “market” or “stalls” or “noodles” or “food” as the market-vendors.

The blacked-out-bar is scenery in Warren Market Square. The description of the blacked-out-bar is “A bar, or a club, or something less reputable — the windows are blacked out and a large individual stands at the door with folded arms. A neon sign above the entrance reads THE GULLET in flickering pink.” The printed name of the blacked-out-bar is “The Gullet”. Understand “gullet” or “bar” or “club” or “bouncer” or “neon sign” as the blacked-out-bar.

The cooking-smoke is scenery in Warren Market Square. The description of the cooking-smoke is “Greasy, aromatic smoke from the food stalls. It smells better than it has any right to, given that you don't want to know what's in the noodles.” The printed name of the cooking-smoke is “cooking smoke”. Understand “smoke” or “cooking” as the cooking-smoke.

Chapter 9 - Warren West Corridor

West of Warren Market Square is Warren West Corridor. “A corridor heading west from the market square, quieter and dimmer. The stalls thin out here, replaced by welded-shut doorways and sections of wall patched with mismatched metal. A public terminal is mounted on the wall, its screen cracked but functional. The corridor dead-ends at a sealed bulkhead.”

The public-terminal is a fixed in place thing in Warren West Corridor. “A public terminal is bolted to the wall, its screen casting a pale glow.” The description of the public-terminal is “A station information terminal. The screen is cracked down the middle but still displays. It shows a rotating feed of Warren notices: work postings, missing persons, bounties, and the ever-present Praxis Station public service announcements. Currently it reads: REMEMBER — THE MAW PROVIDES.” The printed name of the public-terminal is “public terminal”. Understand “terminal” or “screen” or “public” or “computer” as the public-terminal.

The sealed-bulkhead-west is scenery in Warren West Corridor. The description of the sealed-bulkhead-west is “A heavy pressure bulkhead, sealed shut and welded for good measure. Whatever's on the other side, the station doesn't want you going there. Or maybe it doesn't want whatever's there coming here.” The printed name of the sealed-bulkhead-west is “sealed bulkhead”. Understand “bulkhead” or “sealed” or “door” as the sealed-bulkhead-west.

Chapter 10 - Warren East Corridor

East of Warren Market Square is Warren East Corridor. “The corridor heading east from the market. The foot traffic picks up here — this is the route to the transtube station. Directional arrows painted on the walls in faded yellow point the way. The overhead lighting is slightly better maintained, probably because the transit authority actually pays for upkeep on the approaches.”

The directional-arrows are scenery in Warren East Corridor. The description of the directional-arrows is “Faded yellow arrows stenciled on the walls, pointing east toward the transtube. Some have been defaced with graffiti. One arrow has been altered to read TRANS TUBE → YOUR DOOM.” The printed name of the directional-arrows is “directional arrows”. Understand “arrows” or “directional” or “signs” or “yellow” as the directional-arrows.

Chapter 11 - Transtube Approach

East of Warren East Corridor is Transtube Approach. “The corridor opens up into a wider concourse as you approach the transtube station. The walls transition from raw metal to actual panels — scratched and graffitied, but panels nonetheless. Overhead signage in station-standard amber reads: DECK 7 — TRANSTUBE ACCESS. A security checkpoint blocks the way east, staffed by a bored-looking transit officer behind a scarred plexiglass booth.”

The overhead-signage is scenery in Transtube Approach. The description of the overhead-signage is “Amber text on dark panels: DECK 7 — TRANSTUBE ACCESS. Below it, smaller text lists destinations: COMMERCE DECK / DOCKING RING / UPPER PRAXIS / ENGINEERING. Someone has added HELL in marker after the last entry.” The printed name of the overhead-signage is “overhead signage”. Understand “signage” or “sign” or “overhead” or “amber” as the overhead-signage.

The security-checkpoint is scenery in Transtube Approach. The description of the security-checkpoint is “A narrow passage between metal barriers, with a plexiglass booth on one side. The barriers have seen better days. A scanner arch stands at the far end, though whether it actually works is an open question.” The printed name of the security-checkpoint is “security checkpoint”. Understand “checkpoint” or “security” or “barriers” or “scanner” or “arch” as the security-checkpoint.

The transit-officer is a person in Transtube Approach. The description of the transit-officer is “A woman in a faded transit authority uniform, sitting in the booth with the thousand-yard stare of someone who checked out mentally three shifts ago. She has a sidearm on her hip and a mug of something hot in her hands.” The printed name of the transit-officer is “transit officer”. Understand “officer” or “guard” or “woman” or “transit” as the transit-officer.

Instead of talking to the transit-officer, say “She glances at you without interest. 'Keep moving. Tube's running.' She goes back to her mug.”

The plexiglass-booth is scenery in Transtube Approach. The description of the plexiglass-booth is “Scarred, cloudy plexiglass over a metal frame. The booth is cramped and filled with screens, most of which display camera feeds from the corridor. A half-eaten ration bar sits on the console.” The printed name of the plexiglass-booth is “plexiglass booth”. Understand “booth” or “plexiglass” or “glass” as the plexiglass-booth.

Chapter 12 - Transtube Waiting Area

East of Transtube Approach is Transtube Waiting Area. “Past the checkpoint, the concourse opens into the transtube waiting area — a long, low-ceilinged space with rows of bolted-down metal benches facing the tube platform. A destination board flickers on the far wall, listing arrival times in amber numerals. The platform edge is marked with faded yellow safety stripes. The air here is different — cleaner, pushed by the pressure differential from the tube tunnels. A faint rumble echoes from the tunnel to the east as a pod passes on a distant line.”

The destination-board is a display-screen in Transtube Waiting Area. The description of the destination-board is “A large display board listing transtube departures:[line break][line break]  COMMERCE DECK .... 3 MIN[line break]  DOCKING RING ..... 7 MIN[line break]  UPPER PRAXIS ..... 12 MIN[line break]  ENGINEERING ....... DELAYED[line break][line break]The ENGINEERING line has been showing DELAYED for as long as anyone can remember.” The printed name of the destination-board is “destination board”. Understand “board” or “destination” or “departures” or “arrivals” or “display” or “times” as the destination-board.

Some waiting-benches are an enterable supporter in Transtube Waiting Area. “Rows of metal benches face the platform.” The description of the waiting-benches is “Metal benches bolted to the deck, their surfaces polished by countless passengers. A few people sit waiting — a worker in coveralls asleep with his head back, a woman clutching a duffel bag, a pair of teenagers sharing an audio feed.” The printed name of the waiting-benches is “benches”. Understand “benches” or “bench” or “seats” or “seat” as the waiting-benches.

The safety-stripes are scenery in Transtube Waiting Area. The description of the safety-stripes is “Faded yellow stripes along the platform edge. STAND BEHIND LINE is stenciled at intervals. The paint is worn through to bare metal in places.” The printed name of the safety-stripes is “safety stripes”. Understand “stripes” or “safety” or “yellow” or “line” or “platform” as the safety-stripes.

The tube-tunnel is scenery in Transtube Waiting Area. The description of the tube-tunnel is “A dark circular tunnel mouth, three meters in diameter, leading into the station's transit network. Air rushes in and out with each passing pod. The rails inside gleam faintly — mag-lev guides that accelerate the pods to terrifying speeds through the station's superstructure.” The printed name of the tube-tunnel is “tube tunnel”. Understand “tunnel” or “tube” or “transtube” or “rails” as the tube-tunnel.

The platform-vending-machine is a vending-machine in Transtube Waiting Area. “A vending machine stands against the wall near the benches.” The printed name of the platform-vending-machine is “vending machine”. The description of the platform-vending-machine is “It sells stim-patches, water pouches, and ration bars. The prices are extortionate. A hand-written note taped to the front reads: NO REFUNDS. MACHINE EATS CREDS SOMETIMES. KNOWN ISSUE.” Understand “vending” or “machine” or “vending machine” as the platform-vending-machine.

Chapter 13 - Warren South Corridor

South of Warren Market Square is Warren South Corridor. “The corridor south from the market leads toward the deck's outer ring. It's quieter here — residential territory, such as it is. Doorways line both sides, most covered with improvised curtains or welded-on privacy screens. The overhead lighting dims to a brownish flicker. The corridor ends at a viewing gallery to the south.”

Some residential-doorways are scenery in Warren South Corridor. The description of the residential-doorways is “Doorways covered with hanging fabric, plastic sheeting, or spot-welded metal screens. Behind them, families and loners and work crews have carved out what passes for private space on the Warrens. You can hear the sounds of living through the thin barriers — arguments, children, the blare of entertainment feeds.” The printed name of the residential-doorways is “doorways”. Understand “doorways” or “doors” or “curtains” or “screens” or “residential” as the residential-doorways.

Chapter 14 - Viewing Gallery

South of Warren South Corridor is The Viewing Gallery. “A small observation lounge at the outer edge of Deck 7. A long viewport stretches across the far wall, and for once, the station gives you something worth looking at. A few battered chairs are arranged in a rough semicircle facing the view. This is a dead end — the only exit leads back north.”

The viewport is scenery in the Viewing Gallery. The description of the viewport is “Beyond the thick glass, the universe wheels slowly as the station rotates. And there it is — the Maw. A perfect circle of nothing, rimmed with a halo of superheated gas that burns white-blue at the edges and dims to angry red as it spirals inward. Stars behind it are bent into bright arcs, smeared by gravity into shapes that hurt the eye. It is beautiful and terrifying and it never gets old.”

Some battered-chairs are an enterable supporter in the Viewing Gallery. “A few battered chairs face the viewport.” The description of the battered-chairs is “Mismatched chairs — a plastic stacking chair, something that was once an office chair, a crate with a cushion on it. People come here to think, or to stare, or to remember that there's something outside these walls.” The printed name of the battered-chairs is “chairs”. Understand “chairs” or “chair” or “seat” or “crate” as the battered-chairs.

The Maw is scenery in the Viewing Gallery. The description of the Maw is “The black hole. The reason Praxis exists. It swallowed the Kethani system a thousand years ago and has been slowly digesting it ever since. The accretion disk provides energy, the warped spacetime provides... other things. Exotic matter. Temporal anomalies. The things that make people rich and make physicists drink.” Understand “black hole” or “hole” or “accretion” or “disk” or “halo” as the Maw.

Part 3 - The Docking Ring

Chapter 1 - Ring Transtube Station

The Ring Transtube Station is a room. “The Docking Ring's transtube station is a different world from the Warrens. The walls are actual panels — clean, maintained, lit by recessed strips that cast even white light. Transit authority logos mark every surface. A departures board lists connections, and the platform stretches east toward the transpex tube that leads to the Ring proper. Benches line the walls. A pod bay opens to the west.”

The ring-departures-board is a display-screen in the Ring Transtube Station. The description of the ring-departures-board is “A clean display — no cracks, no graffiti:[line break][line break]  WARRENS (Deck 7) ... 4 MIN[line break]  COMMERCE DECK ..... 6 MIN[line break]  UPPER PRAXIS ...... 9 MIN[line break]  ENGINEERING ........ SUSPENDED[line break][line break]Below, a scrolling advisory: DOCKING RING SECTIONS 4-7 CURRENTLY ZERO-GRAV. MAG-BOOTS RECOMMENDED.” The printed name of the ring-departures-board is “departures board”. Understand “board” or “departures” or “display” as the ring-departures-board.

Some ring-station-benches are an enterable supporter in the Ring Transtube Station. “Metal benches with actual cushioning line the walls.” The description of the ring-station-benches is “Padded benches — luxury by Praxis standards. A few travelers sit waiting with duffel bags and equipment cases. The crowd here is different from the Warrens: dock workers, ship crews, traders, the occasional merchant in clean clothes.” The printed name of the ring-station-benches is “benches”. Understand “benches” or “bench” or “seats” as the ring-station-benches.

Chapter 2 - The Transpex Tube

East of the Ring Transtube Station is The Transpex Tube. The Transpex Tube is zero-grav. “A long cylindrical corridor of transparent composite — transpex — stretching fifty meters between the station's rotating hull and the non-rotating docking structure. Through the walls, above, below, and on every side, you can see space. The Maw dominates the view to port, its accretion disk painting the transpex in shifting hues of blue and amber. Guide rails run along the tube's interior for hand-over-hand traversal in zero gravity. The transtube station is back to the west. The cylift platform is ahead to the east.”

The transpex-walls are scenery in the Transpex Tube. The description of the transpex-walls is “Transparent composite rated for micrometeorite impact and radiation shielding. Through it, you can see the station's hull curving away in both directions — a vast grey cliff of metal studded with running lights and antenna arrays. Ships move in the distance, their engine flares tiny blue sparks against the black.” The printed name of the transpex-walls is “transpex walls”. Understand “transpex” or “walls” or “transparent” or “glass” or “composite” as the transpex-walls.

The guide-rails are scenery in the Transpex Tube. The description of the guide-rails is “Rubberized handgrips running the length of the tube. They're worn smooth in the middle where thousands of hands have pulled themselves along. In zero-grav, these are your road.” The printed name of the guide-rails is “guide rails”. Understand “rails” or “guide” or “handgrips” or “grips” or “handles” as the guide-rails.

The transpex-maw-view is scenery in the Transpex Tube. The description of the transpex-maw-view is “From here, without walls or decks to frame it, the Maw fills a quarter of the sky. The accretion disk is a river of fire spiraling into nothing. Light bends around the event horizon in impossible curves. You can see why some of the old-timers call it God's Eye.” The printed name of the transpex-maw-view is “the Maw”. Understand “maw” or “black hole” or “accretion” or “disk” or “view” or “space” as the transpex-maw-view.

Chapter 3 - The Cylift

East of the Transpex Tube is The Cylift Platform. The Cylift Platform is zero-grav. “A circular platform at the end of the transpex tube, where a cylindrical lift shaft rises vertically into the docking ring's superstructure. The cylift car sits in its cradle — an open cage with mag-clamps on the floor and ceiling for zero-grav transit. Warning stripes ring the shaft opening. A control panel with two buttons is mounted on a stanchion: UP to the grav-lock, DOWN to maintenance (RESTRICTED).”

The cylift-car is an enterable container in the Cylift Platform. “The cylift car sits open in its cradle, waiting.” The description of the cylift-car is “An open cage of welded steel, three meters across. Mag-clamp pads on the floor and ceiling keep cargo and passengers from drifting during transit. The cage rides a central rail up through the shaft. It smells of hydraulic fluid.” The printed name of the cylift-car is “cylift car”. Understand “car” or “lift” or “cage” or “cylift” or “elevator” as the cylift-car.

The cylift-control-panel is a fixed in place thing in the Cylift Platform. “A control stanchion stands beside the shaft.” The description of the cylift-control-panel is “Two buttons on a brushed-metal stanchion:[line break][line break]  [UP] — GRAV-LOCK / DOCKING RING ACCESS[line break]  [DOWN] — MAINTENANCE LEVEL (RESTRICTED)[line break][line break]The DOWN button has a keycard reader beside it, currently showing a red light.” The printed name of the cylift-control-panel is “control panel”. Understand “panel” or “control” or “stanchion” or “buttons” or “button” as the cylift-control-panel.

The cylift-warning-stripes are scenery in the Cylift Platform. The description of the cylift-warning-stripes is “Yellow and black chevrons painted around the shaft opening. KEEP CLEAR DURING TRANSIT. The paint is chipped from years of cargo impacts.” The printed name of the cylift-warning-stripes is “warning stripes”. Understand “stripes” or “warning” or “chevrons” as the cylift-warning-stripes.

Section 1 - Cylift Travel

Pressing-up is an action applying to nothing. Understand “press up” or “push up” or “go up” or “up” as pressing-up when the player is in the Cylift Platform.

Check pressing-up:
	if the player is not in the Cylift Platform, stop the action.

Carry out pressing-up:
	say “You grip a mag-clamp as the cylift engages. The car rises smoothly up the shaft, walls of grey metal sliding past. The ascent takes thirty seconds — then the car locks into place with a heavy clang and the grav-lock chamber opens before you.”;
	now the player is in the Ring Grav-Lock.

Pressing-down is an action applying to nothing. Understand “press down” or “push down” as pressing-down when the player is in the Cylift Platform.

Carry out pressing-down:
	say “The keycard reader blinks red. ACCESS RESTRICTED — MAINTENANCE PERSONNEL ONLY. You don't have the credentials.”

Chapter 4 - The Ring Grav-Lock

The Ring Grav-Lock is a grav-lock-chamber. The Ring Grav-Lock is zero-grav. “A transitional chamber between the cylift shaft and the Docking Ring proper. The room is a hexagonal space with padded walls and multiple handhold bars. Warning text on every surface reads: ZERO GRAVITY BEYOND THIS POINT. A heavy iris hatch leads north into the Ring. The cylift shaft descends below.”

The ring-grav-lock-hatch is scenery in the Ring Grav-Lock. The description of the ring-grav-lock-hatch is “A reinforced iris hatch, currently open. Beyond it, you can see the vast interior of the Docking Ring — a cathedral of steel and vacuum, lit by work-floods and ship running lights.” The printed name of the ring-grav-lock-hatch is “iris hatch”. Understand “hatch” or “iris” or “door” as the ring-grav-lock-hatch.

The grav-lock-handholds are scenery in the Ring Grav-Lock. The description of the grav-lock-handholds is “Rubberized bars bolted to every surface. In zero-grav, these are the difference between controlled movement and a slow, embarrassing tumble into a wall.” The printed name of the grav-lock-handholds is “handholds”. Understand “handholds” or “handhold” or “bars” or “grips” as the grav-lock-handholds.

The grav-lock-warnings are scenery in the Ring Grav-Lock. The description of the grav-lock-warnings is “ZERO GRAVITY BEYOND THIS POINT. USE DESIGNATED TRAVEL LANES. MAXIMUM DRIFT SPEED 2 M/S. EMERGENCY TETHERS LOCATED AT ALL JUNCTIONS. LIABILITY WAIVER IN EFFECT.” The printed name of the grav-lock-warnings is “warning text”. Understand “warning” or “text” or “warnings” or “signs” as the grav-lock-warnings.

Instead of going down in the Ring Grav-Lock:
	say “You pull yourself back down the shaft to the cylift platform.”;
	now the player is in the Cylift Platform.

Chapter 5 - The Ring Interior

Section 1 - Ring Mid Central Junction

North of the Ring Grav-Lock is Ring Mid Central. Ring Mid Central is zero-grav. “The central junction of the Docking Ring's mid-level — a cavernous open space where three travel lanes converge. The Ring stretches away in every direction: west and east along the main axis, up and down between levels. The scale is dizzying — the Ring's interior is a hollow cylinder two hundred meters across, crisscrossed with guide cables, cargo tethers, and blinking nav-buoys. Ships are visible in their slips along the outer wall, dark shapes bristling with antennae and hull plating.[paragraph break]A navigation buoy floats nearby, anchored to a guide cable. The grav-lock hatch is to the south.”

The mid-central-buoy is a nav-buoy in Ring Mid Central. “A navigation buoy blinks amber nearby.” The description of the mid-central-buoy is “NAV BUOY MC-1 — RING MID CENTRAL[line break][line break]  WEST → Slips 1A/1B/1C[line break]  EAST → Slips 3A/3B/3C[line break]  UP → Upper Ring / Shuttle Berths[line break]  DOWN → Lower Ring[line break]  NORTH → Slip 2B[line break]  SOUTH → Grav-Lock / Station Access[line break][line break]DRIFT SPEED: MODERATE. STAY IN LANE.” The printed name of the mid-central-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the mid-central-buoy.

The ring-guide-cables are scenery in Ring Mid Central. The description of the ring-guide-cables is “Taut steel cables strung between anchor points, forming travel lanes through the zero-grav interior. Cargo pods drift along some of them, towed by small utility tugs. The cables vibrate faintly when you touch them.” The printed name of the ring-guide-cables is “guide cables”. Understand “cables” or “cable” or “guide” or “tethers” or “lanes” as the ring-guide-cables.

Section 2 - Ring Upper Central Junction

Ring Upper Central is above Ring Mid Central. Ring Upper Central is zero-grav. “The upper-central junction of the Ring. The ceiling — such as it is — curves close here, the inner surface of the Ring's hull studded with access panels and maintenance hatches. The travel lanes branch west, east, and down. Above, a second grav-lock leads up to the shuttle berth bay. A large nav-buoy spins slowly at the junction, its amber light sweeping the space.”

The upper-central-buoy is a nav-buoy in Ring Upper Central. “A navigation buoy rotates slowly here.” The description of the upper-central-buoy is “NAV BUOY UC-1 — RING UPPER CENTRAL[line break][line break]  WEST → Slip 1A[line break]  EAST → Slip 3A[line break]  NORTH → Slip 2A[line break]  UP → Shuttle Grav-Lock / Shuttle Berths[line break]  DOWN → Mid Central Junction[line break][line break]CAUTION: SHUTTLE TRAFFIC OVERHEAD. YIELD TO DOCKING CRAFT.” The printed name of the upper-central-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the upper-central-buoy.

Section 3 - Ring Lower Central Junction

Ring Lower Central is below Ring Mid Central. Ring Lower Central is zero-grav. “The lower-central junction. Down here the Ring feels more industrial — the walls are lined with cargo handling equipment, magnetic grapple arrays, and heavy-duty tether points. Work-floods cast harsh white light. A constant stream of cargo pods drifts through, guided by remote-operated tugs.”

The lower-central-buoy is a nav-buoy in Ring Lower Central. “A nav-buoy blinks steadily at this junction.” The description of the lower-central-buoy is “NAV BUOY LC-1 — RING LOWER CENTRAL[line break][line break]  WEST → Slip 1C[line break]  EAST → Slip 3C[line break]  NORTH → Slip 2C[line break]  UP → Mid Central Junction[line break][line break]WARNING: HEAVY CARGO TRAFFIC. USE DESIGNATED LANES.” The printed name of the lower-central-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the lower-central-buoy.

The cargo-equipment is scenery in Ring Lower Central. The description of the cargo-equipment is “Industrial cargo handling gear — magnetic grapples, tether winches, pallet clamps. All of it scarred and dented from decades of use. A few dock workers in EVA suits drift among the equipment, directing cargo pods with hand signals and short-range comms.” The printed name of the cargo-equipment is “cargo equipment”. Understand “cargo” or “equipment” or “grapple” or “grapples” or “winches” or “clamps” or “tether” as the cargo-equipment.

Section 4 - Ring Mid West Junction

West of Ring Mid Central is Ring Mid West. Ring Mid West is zero-grav. “The mid-level western junction. The outer wall of the Ring is close here — you can see the massive doors of docking slip 1B directly to the west, and the dark shapes of ships berthed in the adjacent slips. The guide cables here are thicker, heavy-duty lines meant for towing loaded cargo pods.”

The mid-west-buoy is a nav-buoy in Ring Mid West. “A nav-buoy marks the junction.” The description of the mid-west-buoy is “NAV BUOY MW-1 — RING MID WEST[line break][line break]  WEST → Docking Slip 1B[line break]  EAST → Mid Central[line break]  UP → Slip 1A (Upper West)[line break]  DOWN → Slip 1C (Lower West).” The printed name of the mid-west-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the mid-west-buoy.

Section 5 - Ring Upper West Junction

Ring Upper West is above Ring Mid West. Ring Upper West is zero-grav. “The upper-western corner of the Ring — the highest and furthest west you can go in the docking structure. The slip 1A docking doors dominate the wall to the west. From here you can see the full sweep of the Ring's interior curving away below and to the east, a vast steel canyon strung with lights and cables.”

The upper-west-buoy is a nav-buoy in Ring Upper West. “A nav-buoy floats here, its light pulsing.” The description of the upper-west-buoy is “NAV BUOY UW-1 — RING UPPER WEST[line break][line break]  WEST → Docking Slip 1A[line break]  EAST → Upper Central[line break]  DOWN → Mid West (Slip 1B).” The printed name of the upper-west-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the upper-west-buoy.

Ring Upper West is west of Ring Upper Central.

Section 6 - Ring Lower West Junction

Ring Lower West is below Ring Mid West. Ring Lower West is zero-grav. “The lower-western junction, deep in the Ring's industrial belly. Slip 1C's doors are to the west. The air — such as it is in zero-grav — carries the chemical tang of hull sealant and thruster propellant. Maintenance drones buzz past on pre-programmed routes.”

The lower-west-buoy is a nav-buoy in Ring Lower West. “A nav-buoy blinks red-amber here.” The description of the lower-west-buoy is “NAV BUOY LW-1 — RING LOWER WEST[line break][line break]  WEST → Docking Slip 1C[line break]  EAST → Lower Central[line break]  UP → Mid West (Slip 1B).” The printed name of the lower-west-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the lower-west-buoy.

Ring Lower West is west of Ring Lower Central.

Section 7 - Ring Mid East Junction

East of Ring Mid Central is Ring Mid East. Ring Mid East is zero-grav. “The mid-level eastern junction. Slip 3B's docking doors are visible to the east. This section of the Ring sees heavy traffic — it's closest to the commercial berths, and traders, couriers, and customs inspectors drift through constantly. A customs drone hovers at the junction, scanning passing cargo with a blue laser grid.”

The mid-east-buoy is a nav-buoy in Ring Mid East. “A nav-buoy marks the eastern junction.” The description of the mid-east-buoy is “NAV BUOY ME-1 — RING MID EAST[line break][line break]  EAST → Docking Slip 3B[line break]  WEST → Mid Central[line break]  UP → Slip 3A (Upper East)[line break]  DOWN → Slip 3C (Lower East).” The printed name of the mid-east-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the mid-east-buoy.

The customs-drone is scenery in Ring Mid East. The description of the customs-drone is “An autonomous scanning unit, roughly the size of a large dog, hovering on micro-thrusters. It sweeps passing cargo with a blue laser grid and cross-references against manifests. It ignores people — mostly.” The printed name of the customs-drone is “customs drone”. Understand “drone” or “customs” or “scanner” or “laser” as the customs-drone.

Section 8 - Ring Upper East Junction

Ring Upper East is above Ring Mid East. Ring Upper East is zero-grav. “The upper-eastern corner of the Ring. Slip 3A's berth doors are to the east. Through a gap in the structure, you can see the hull of a docked freighter — enormous, pitted with micrometeorite scars, its running lights blinking a slow amber pulse.”

The upper-east-buoy is a nav-buoy in Ring Upper East. “A nav-buoy drifts at the junction.” The description of the upper-east-buoy is “NAV BUOY UE-1 — RING UPPER EAST[line break][line break]  EAST → Docking Slip 3A[line break]  WEST → Upper Central[line break]  DOWN → Mid East (Slip 3B).” The printed name of the upper-east-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the upper-east-buoy.

Ring Upper East is east of Ring Upper Central.

Section 9 - Ring Lower East Junction

Ring Lower East is below Ring Mid East. Ring Lower East is zero-grav. “The lower-eastern junction. Slip 3C is to the east. This is the quietest corner of the Ring — the slips down here tend to house long-term berths, ships in for repairs or mothballed by owners who stopped paying fees. A few have been here so long they've grown a patina of micro-corrosion.”

The lower-east-buoy is a nav-buoy in Ring Lower East. “A nav-buoy marks this quiet junction.” The description of the lower-east-buoy is “NAV BUOY LE-1 — RING LOWER EAST[line break][line break]  EAST → Docking Slip 3C[line break]  WEST → Lower Central[line break]  UP → Mid East (Slip 3B).” The printed name of the lower-east-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the lower-east-buoy.

Ring Lower East is east of Ring Lower Central.

Chapter 6 - Docking Slips

Section 1 - Slip 1A

West of Ring Upper West is Docking Slip 1A. Docking Slip 1A is zero-grav. “The outermost berth in the Ring's upper-west quadrant. A massive set of docking clamps lines the outer wall, currently empty — the slip is vacant. Through the berth doors, sealed now, you would see open space. Tether points and fuel umbilicals hang loose, waiting for the next ship. The junction is back to the east.”

The slip-1a-clamps are scenery in Docking Slip 1A. The description of the slip-1a-clamps is “Heavy magnetic docking clamps, each one the size of a ground vehicle. They're retracted into their housings, waiting. When a ship docks, these lock onto the hull and hold it fast against the station's rotation.” The printed name of the slip-1a-clamps is “docking clamps”. Understand “clamps” or “docking” or “magnetic” as the slip-1a-clamps.

The slip-1a-umbilicals are scenery in Docking Slip 1A. The description of the slip-1a-umbilicals is “Fuel lines, power feeds, data cables, and atmo hookups — everything a docked ship needs to keep running on station power instead of burning its own reserves. They drift like tentacles in the zero-grav.” The printed name of the slip-1a-umbilicals is “fuel umbilicals”. Understand “umbilicals” or “fuel” or “lines” or “hookups” as the slip-1a-umbilicals.

Section 2 - Slip 1B

West of Ring Mid West is Docking Slip 1B. Docking Slip 1B is zero-grav. “A mid-level berth on the west side. This slip is occupied — a battered ore hauler sits in the clamps, its hull scarred and discolored by repeated atmospheric entries. The ship's name, KETTLE BLACK, is stenciled on the bow in faded letters. Crew umbilicals connect the ship to the station. The junction is back to the east.”

The kettle-black is scenery in Docking Slip 1B. The description of the kettle-black is “An ore hauler, maybe sixty meters stem to stern. It's seen better decades. The hull is a patchwork of original plating and welded repairs, and the engine nacelles are caked with exhaust residue. Someone has hung a string of lights along the crew airlock — a touch of home.” The printed name of the kettle-black is “Kettle Black”. Understand “kettle” or “black” or “ship” or “hauler” or “ore” as the kettle-black.

Section 3 - Slip 1C

West of Ring Lower West is Docking Slip 1C. Docking Slip 1C is zero-grav. “The lower-west berth. A small courier vessel occupies the slip, sleek and dark where the haulers are boxy and scarred. No name is visible on the hull — either it's been removed or it was never painted. The ship's running lights are off. It looks abandoned, or wants to.”

The unnamed-courier is scenery in Docking Slip 1C. The description of the unnamed-courier is “A courier-class vessel — fast, lightly armed, built for speed over cargo capacity. The hull is coated in some kind of radar-absorbent material that drinks the light. No transponder beacon. No name. No lights. Everything about this ship says: don't look at me.” The printed name of the unnamed-courier is “courier vessel”. Understand “courier” or “vessel” or “ship” or “dark” as the unnamed-courier.

Section 4 - Slip 2A

North of Ring Upper Central is Docking Slip 2A. Docking Slip 2A is zero-grav. “An upper-central berth, currently vacant. This is a premium slip — close to the shuttle berths and the main transit connections. The docking equipment here is newer, better maintained. A berth status panel shows AVAILABLE — PREMIUM RATE.”

The slip-2a-panel is a display-screen in Docking Slip 2A. The description of the slip-2a-panel is “BERTH 2A — STATUS: AVAILABLE[line break]RATE: 200 CRED/CYCLE (PREMIUM)[line break]SERVICES: FULL UMBILICAL, CUSTOMS FAST-TRACK, CREW LOUNGE ACCESS[line break][line break]Two hundred creds a cycle. That's more than most Warren residents make in a month.” The printed name of the slip-2a-panel is “berth status panel”. Understand “panel” or “status” or “berth” as the slip-2a-panel.

Section 5 - Slip 2B

North of Ring Mid Central is Docking Slip 2B. Docking Slip 2B is zero-grav. “The central berth at the Ring's mid-level. A mid-sized trading vessel occupies the slip — the HAND OF COMMERCE, according to the lettering on its flank. Cargo pods are being loaded through an open bay door by a team of dock workers in mag-boots, directed by a supervisor barking orders over comms.”

The hand-of-commerce is scenery in Docking Slip 2B. The description of the hand-of-commerce is “A trading vessel, maybe eighty meters long. Cleaner than most ships you see in the Ring — her owners clearly have money. The cargo bay doors are open, revealing a cavernous hold being loaded with sealed containers. Armed security floats near the airlock.” The printed name of the hand-of-commerce is “Hand of Commerce”. Understand “hand” or “commerce” or “ship” or “trading” or “vessel” as the hand-of-commerce.

The dock-workers are scenery in Docking Slip 2B. The description of the dock-workers is “A crew in heavy mag-boots and EVA-rated work suits, hauling cargo pods with practiced ease in zero-grav. They move with the efficiency of people paid by the pod, not the hour.” The printed name of the dock-workers is “dock workers”. Understand “workers” or “dock” or “crew” or “supervisor” as the dock-workers.

Section 6 - Slip 2C

North of Ring Lower Central is Docking Slip 2C. Docking Slip 2C is zero-grav. “A lower-central berth. The ship here is impossible to miss — a decommissioned patrol corvette, bristling with weapon hardpoints that have been welded shut. The hull bears the faded insignia of some navy that no longer exists. Someone has converted it into a habitat, judging by the laundry line strung between the dorsal fins.”

The patrol-corvette is scenery in Docking Slip 2C. The description of the patrol-corvette is “Once a warship, now someone's home. The weapon mounts are sealed, the torpedo tubes welded over, the sensor arrays replaced with civilian models. But the armored hull is intact, and the engine cowlings still suggest something that could move very fast if it had to. A hand-painted sign near the airlock reads: THE LAST WORD. NO SOLICITORS.” The printed name of the patrol-corvette is “patrol corvette”. Understand “corvette” or “patrol” or “warship” or “ship” or “last word” as the patrol-corvette.

Section 7 - Slip 3A

East of Ring Upper East is Docking Slip 3A. Docking Slip 3A is zero-grav. “An upper-east berth. A bulk freighter fills the slip, so large that it barely fits — the hull nearly touches the docking clamps on both sides. The ship's name, PROVIDENCE, is painted in letters three meters tall.”

The providence is scenery in Docking Slip 3A. The description of the providence is “A bulk freighter — the largest class of ship that can berth at Praxis. Its hull is a flat grey expanse of metal, unbroken except by running lights and the occasional maintenance hatch. The sheer scale of it makes you feel insect-small. Its engine section alone is larger than most ships in the Ring.” The printed name of the providence is “Providence”. Understand “providence” or “freighter” or “ship” or “bulk” as the providence.

Section 8 - Slip 3B

East of Ring Mid East is Docking Slip 3B. Docking Slip 3B is zero-grav. “A mid-level east berth. Two small ships share this slip, docked side by side — a prospector rig and a salvage tug, both showing hard use. Their crews have strung a cargo net between them, creating an improvised communal space where figures in coveralls share food and talk.”

The prospector-rig is scenery in Docking Slip 3B. The description of the prospector-rig is “A small, rugged ship built for solo asteroid work — drill mounts on the bow, sample pods along the flanks, a cockpit barely big enough for one. It looks like it's been through a debris field recently.” The printed name of the prospector-rig is “prospector rig”. Understand “prospector” or “rig” or “drill” as the prospector-rig.

The salvage-tug is scenery in Docking Slip 3B. The description of the salvage-tug is “A blunt-nosed utility vessel with massive grapple arms folded along its hull. Built for grabbing wrecks and dead ships and hauling them in. Not pretty, not fast, but strong.” The printed name of the salvage-tug is “salvage tug”. Understand “tug” or “salvage” as the salvage-tug.

Section 9 - Slip 3C

East of Ring Lower East is Docking Slip 3C. Docking Slip 3C is zero-grav. “The lower-east berth — the quietest slip in the Ring. The ship here has been docked so long that micro-corrosion has begun to spread across its hull in fractal patterns of rust and verdigris. No lights. No crew. No name. Just a dead ship slowly becoming part of the station.”

The dead-ship is scenery in Docking Slip 3C. The description of the dead-ship is “A ship of uncertain class, its lines obscured by years of neglect and corrosion. The hull plating has begun to flake, and in places you can see through to the structural ribs beneath. The airlock is sealed — whether from inside or outside, you can't tell. The dock fees on this berth must be astronomical, yet no one has claimed or scrapped it. There's a story here, but no one to tell it.” The printed name of the dead-ship is “derelict ship”. Understand “ship” or “derelict” or “dead” or “wreck” or “corrosion” or “rust” as the dead-ship.

Chapter 7 - Shuttle Berths

Section 1 - Shuttle Grav-Lock

The Shuttle Grav-Lock is above Ring Upper Central. The Shuttle Grav-Lock is a grav-lock-chamber. The Shuttle Grav-Lock is zero-grav. “A grav-lock chamber at the top of the Ring, smaller and cleaner than the one below. The walls are painted in transit authority yellow and marked with directional arrows. Below leads back to the Ring. Above, through a reinforced hatch, is the shuttle berth bay — the gateway to everywhere the transtube doesn't go.”

The shuttle-lock-hatch is scenery in the Shuttle Grav-Lock. The description of the shuttle-lock-hatch is “A heavy hatch with SHUTTLE BERTH ACCESS stenciled on it in yellow. Through the viewport set into it, you can see the controlled bustle of the berth bay above.” The printed name of the shuttle-lock-hatch is “hatch”. Understand “hatch” or “door” as the shuttle-lock-hatch.

The shuttle-lock-arrows are scenery in the Shuttle Grav-Lock. The description of the shuttle-lock-arrows is “Yellow directional arrows on the walls. UP to shuttle berths. DOWN to the Docking Ring. Simple enough, even in zero-grav.” The printed name of the shuttle-lock-arrows is “directional arrows”. Understand “arrows” or “directional” as the shuttle-lock-arrows.

Section 2 - Shuttle Berth Bay

The Shuttle Berth Bay is above the Shuttle Grav-Lock. The Shuttle Berth Bay is normal-grav. “Gravity reasserts itself as you pass through the grav-lock — this bay has its own spin section, a small drum rotating to provide a comfortable pull. The shuttle berth bay is a long, vaulted hangar with berths on both sides, each one a recessed alcove with a shuttle parked nose-in. A central walkway runs the length of the bay, lined with departure gates and ticket kiosks. Overhead, a destination board lists shuttle routes to dozens of locations too far or too awkward for the transtube network. The grav-lock hatch is set into the floor at the south end.”

The shuttle-destination-board is a display-screen in the Shuttle Berth Bay. The description of the shuttle-destination-board is “A large board listing shuttle departures:[line break][line break]  REFINERY PLATFORMS .... GATE 1 .... 0:45[line break]  SALVAGE YARDS ........ GATE 3 .... 1:20[line break]  DEEP RANGE RELAY ..... GATE 5 .... 3:00[line break]  KETHANI DEBRIS FIELD . GATE 7 .... 4:30[line break]  ORBITAL HAB CLUSTER .. GATE 2 .... 0:30[line break][line break]Prices are listed in small text below each destination. None of them are cheap.” The printed name of the shuttle-destination-board is “destination board”. Understand “board” or “destination” or “departures” or “display” as the shuttle-destination-board.

Some departure-gates are scenery in the Shuttle Berth Bay. The description of the departure-gates is “Numbered gates along the walkway, each with a small waiting area and a boarding tunnel leading to a shuttle berth. Most have a few passengers waiting — miners heading to the refineries, salvage crews, the occasional researcher bound for the deep-range relay stations.” The printed name of the departure-gates is “departure gates”. Understand “gates” or “gate” or “departure” as the departure-gates.

Some ticket-kiosks are scenery in the Shuttle Berth Bay. The description of the ticket-kiosks is “Automated ticket machines in transit authority yellow. They accept cred-chips and station scrip. The interface is clunky but functional. A hand-written sign on one reads: EXACT CHANGE ONLY — MACHINE DOES NOT GIVE CHANGE.” The printed name of the ticket-kiosks is “ticket kiosks”. Understand “kiosks” or “kiosk” or “ticket” or “machine” or “machines” as the ticket-kiosks.

Some berth-shuttles are scenery in the Shuttle Berth Bay. The description of the berth-shuttles is “A mix of shuttle types — boxy passenger haulers, sleek executive craft, rugged utility birds built for rough landings on asteroids and platforms. They sit nose-in to their berths, engines cold, waiting for their departure slots.” The printed name of the berth-shuttles is “shuttles”. Understand “shuttles” or “shuttle” or “craft” as the berth-shuttles.

Instead of going down in the Shuttle Berth Bay:
	say “You step onto the grav-lock hatch and drop through as gravity releases its hold.”;
	now the player is in the Shuttle Grav-Lock.
