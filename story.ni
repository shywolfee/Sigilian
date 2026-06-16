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

After going to a zero-grav room:
	if the room gone from is normal-grav:
		say “Gravity falls away. Your stomach lurches as the floor ceases to mean anything — up and down become suggestions, not facts. You drift forward, catching a handhold to steady yourself.[paragraph break]”;
	continue the action.

After going to a normal-grav room:
	if the room gone from is zero-grav:
		say “Weight returns in a rush. Your boots find the deck and your knees bend to absorb the sudden pull. Gravity — ugly, heavy, reliable gravity.[paragraph break]”;
	continue the action.

Chapter 3 - Backdrops

The station-hum is a backdrop. The station-hum is everywhere. The description of the station-hum is “A low, omnipresent vibration — the breath of Praxis herself. Reactor cycles, air recyclers, thousands of bodies packed into steel. You stopped noticing it years ago, but it never stops.” The printed name of the station-hum is “station hum”. Understand “hum” or “vibration” or “noise” or “sound” as the station-hum.

The overhead-pipes is a backdrop. The overhead-pipes is everywhere. The description of the overhead-pipes is “Bundles of conduit and pipe run along the ceiling — coolant lines, data cables, power feeds, sewage. Some are labeled. Most are not. Occasionally something drips.” The printed name of the overhead-pipes is “overhead pipes”. Understand “pipes” or “conduit” or “conduits” or “cables” or “pipe” or “ceiling” as the overhead-pipes.

The deck-plating is a backdrop. The deck-plating is everywhere. The description of the deck-plating is “Scuffed metal grating, worn smooth in the high-traffic areas and crusted with unidentifiable residue in the corners. Below the grate, you can see the dark gap of the service crawlspace.” The printed name of the deck-plating is “deck plating”. Understand “floor” or “deck” or “plating” or “grating” or “grate” as the deck-plating.

Chapter 4 - Custom Actions

Talking to is an action applying to one visible thing. Understand "talk to [someone]" or "speak to [someone]" or "talk [someone]" as talking to.

Check talking to:
	say "[The noun] doesn't seem interested in conversation." instead.

Chapter 5 - The Transtube System

Section 1 - The Pod

The Transtube Pod is a room. The description of The Transtube Pod is “The interior of a transtube pod — a smooth ovoid capsule with six acceleration couches arranged in a circle. The walls are featureless grey composite. A destination panel glows on the forward bulkhead, listing the available stops. The pod hums with contained energy, waiting for a command.[paragraph break]Available destinations: WARRENS (Deck 7), DOCKING RING, COMMERCE DECK.”

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

Pod-travelling is an action applying to one topic. Understand “select [text]” or “travel to [text]” or “choose [text]” as pod-travelling.

Check pod-travelling:
	if the player is not in the Transtube Pod, say “You're not in a transtube pod.” instead.

Carry out pod-travelling:
	if the topic understood matches “warren/warrens/deck 7”:
		say “The pod seals with a pressurized click. A chime sounds. Then acceleration — brutal and brief — slams you into the couch. The pod screams through the mag-lev tunnel, the walls outside a blur of light-strips. Deceleration hits just as hard. The doors iris open onto familiar grime.[paragraph break]”;
		now the player is in the Transtube Waiting Area;
	else if the topic understood matches “ring/docking ring/docking”:
		say “The pod seals. A deep thrum builds beneath you as the mag-lev engages. Acceleration crushes you into the couch — then weightlessness as the pod arcs through the station's central axis, threading the gap between decks. You feel the station's spin fall away as the pod crosses into the non-rotating section. Deceleration. The doors open onto cleaner air and brighter lights.[paragraph break]”;
		now the player is in the Ring Transtube Station;
	else if the topic understood matches “commerce/commerce deck”:
		say “The pod seals and launches. The journey is longer — the Commerce Deck is on the far side of the station. You watch light-strips streak past through the tiny viewport. Eventually, deceleration. The doors open... but there's nothing here yet. The platform is under construction. You step back inside.[paragraph break]The pod returns you to where you started.”;
	else:
		say “The panel flashes red: DESTINATION NOT RECOGNIZED. Available stops: WARRENS, DOCKING RING, COMMERCE DECK.”

Section 4 - Exiting

Disembarking is an action applying to nothing. Understand “exit pod” or “leave pod” or “disembark” as disembarking.

Check disembarking:
	if the player is not in the Transtube Pod, say “You're not in anything to exit.” instead.

Carry out disembarking:
	say “You haven't selected a destination yet. Use the destination panel to choose where to go.”

Instead of going outside in the Transtube Pod:
	say “You haven't selected a destination yet. Use the destination panel to choose where to go.”

Part 2 - The Warrens of Praxis

Chapter 1 - Opening

When play begins:
	say “The klaxon hits you like a fist.[paragraph break]Three sharp blasts — the Warren's morning cycle. Somewhere in the walls, the light-strips flicker from deep red to a sickly amber as the station's day-cycle kicks over. The recycled air tastes of rust and old sweat.[paragraph break]You are in your sleeping cube on Deck 7 of the Warrens, the cheapest district on Praxis Station. Outside, the station turns its slow orbit around Maw — the black hole that swallowed a solar system and made a thousand fortunes.[paragraph break]Time to move. The cube rental ran out ten minutes ago.”

Chapter 2 - The Sleeping Cube

The Sleeping Cube is a room. The description of The Sleeping Cube is “A coffin-sized capsule of scratched plasteel, two meters long and barely one meter high. A thin gel-mat covers the floor, and a status strip above the hatch glows an angry red — RENTAL EXPIRED. The air is thick and stale.”

The sleeping-coffin-lid is a coffin-lid. The sleeping-coffin-lid is south of the Sleeping Cube and north of the Cube Row. The printed name of the sleeping-coffin-lid is “coffin lid”. Understand “coffin” or “lid” or “hatch” or “panel” as the sleeping-coffin-lid.

The gel-mat is an enterable supporter in the Sleeping Cube. “The gel-mat is rumpled where you were lying on it.” The description of the gel-mat is “A thin slab of memory gel, body-temperature and faintly damp. It has a permanent impression of someone roughly your size.” The printed name of the gel-mat is “gel-mat”. Understand “mat” or “gel” or “mattress” or “bed” as the gel-mat.

The player is on the gel-mat.

The status-strip is scenery in the Sleeping Cube. The description of the status-strip is “A thin LED bar above the hatch. It reads: RENTAL EXPIRED — VACATE IMMEDIATELY. The red glow makes everything look like an emergency.” The printed name of the status-strip is “status strip”. Understand “strip” or “status” or “led” or “light” or “display” as the status-strip.

The personal-locker is a closed openable container in the Sleeping Cube. The description of the personal-locker is “A small lockbox welded to the wall by the hatch. The latch is broken — has been for months.” The printed name of the personal-locker is “personal locker”. Understand “locker” or “lockbox” or “box” as the personal-locker.

Chapter 3 - Cube Row

The Cube Row is a room. The description of The Cube Row is “A narrow corridor barely wide enough for two people to pass, lined on both sides with stacked sleeping cubes — four high, stretching in both directions. Status lights blink in a patchwork of red, amber, and the occasional green. The air smells of bodies and cheap disinfectant. The corridor runs east toward a junction, and your cube hatch is to the north.”

Some stacked-cubes are scenery in the Cube Row. The description of the stacked-cubes is “Rows of sleeping coffins stacked floor to ceiling. Most are occupied — you can hear snoring, coughing, the tinny bleed of audio feeds through thin walls. A few have personal touches: stickers, scratched names, a faded photograph taped to a hatch.” The printed name of the stacked-cubes is “sleeping cubes”. Understand “cubes” or “coffins” or “stacked” or “rows” or “capsules” as the stacked-cubes.

The cube-status-lights are scenery in the Cube Row. The description of the cube-status-lights is “Red means expired. Amber means occupied. Green means available — and there are very few green lights. The Warrens are always full.” The printed name of the cube-status-lights is “status lights”. Understand “lights” or “status lights” or “blink” or “blinking” as the cube-status-lights.

A disinfectant-smell is scenery in the Cube Row. The description of the disinfectant-smell is “A chemical tang that doesn't quite mask the human smell underneath. Someone's been through with a sprayer recently — probably the cube warden making his rounds.” The printed name of the disinfectant-smell is “smell of disinfectant”. Understand “smell” or “disinfectant” or “odor” as the disinfectant-smell.

Chapter 4 - Cube Row Junction

The Cube Row Junction is a room. The Cube Row Junction is east of the Cube Row. The description of The Cube Row Junction is “The sleeping cube corridors meet here at a T-junction. Cube rows branch off to the west and north, and the main Warren corridor opens up to the south. A water recycler is bolted to the wall, its spigot dripping steadily into a drain grate. Someone has scratched MAWS TEETH into the wall above it.”

The water-recycler is a fixed in place thing in the Cube Row Junction. “A water recycler hums and drips against the wall.” The description of the water-recycler is “A boxy unit that filters station grey-water into something technically potable. The spigot drips a thin stream of cloudy liquid. A faded label reads: BOIL ADVISORY IN EFFECT — but the advisory date was three years ago.” The printed name of the water-recycler is “water recycler”. Understand “recycler” or “water” or “spigot” or “drip” as the water-recycler.

The scratched-graffiti is scenery in the Cube Row Junction. The description of the scratched-graffiti is “MAWS TEETH — scratched deep into the metal with something sharp. A gang tag, maybe, or just someone's idea of poetry. The Maw is what the locals call the black hole that Praxis orbits.” The printed name of the scratched-graffiti is “graffiti”. Understand “graffiti” or “scratched” or “maws” or “teeth” or “writing” as the scratched-graffiti.

Chapter 5 - Warren Main Corridor North

Warren Main Corridor North is a room. Warren Main Corridor North is south of the Cube Row Junction. The description of Warren Main Corridor North is “The main artery of Deck 7 — a wide corridor by Warren standards, maybe three meters across. The ceiling is a tangle of exposed pipe and conduit. Foot traffic moves in both directions: shift workers heading to the lifts, scavengers hauling salvage carts, the occasional enforcer in scratched body armor. The corridor continues south, and the cube rows branch off to the north.”

Some shift-workers are scenery in Warren Main Corridor North. The description of the shift-workers is “A stream of tired faces heading to or from twelve-hour shifts in the processing plants, the docks, the recycling bays. Nobody makes eye contact.” The printed name of the shift-workers is “shift workers”. Understand “workers” or “people” or “crowd” or “pedestrians” or “shift” as the shift-workers.

Some salvage-carts are scenery in Warren Main Corridor North. The description of the salvage-carts is “Improvised push-carts loaded with scrap metal, dead electronics, stripped cable. The scavengers who push them have the hollow look of people who eat when they find something worth selling.” The printed name of the salvage-carts is “salvage carts”. Understand “carts” or “salvage” or “scrap” or “scavengers” as the salvage-carts.

An enforcer is scenery in Warren Main Corridor North. The description of the enforcer is “A big figure in mismatched body armor — some of it station security surplus, some of it improvised. They work for whoever's running the Warren this month. Their eyes sweep the corridor with the bored alertness of a predator that isn't hungry yet.” Understand “guard” or “security” or “armor” as the enforcer.

Chapter 6 - Warren Main Corridor South

Warren Main Corridor South is a room. Warren Main Corridor South is south of Warren Main Corridor North. The description of Warren Main Corridor South is “The corridor widens slightly here as it approaches the market district. Stall-fronts have been welded into the walls on both sides — metal shutters, hand-painted signs, the glow of neon strips. Most are closed at cycle-start, but a few early risers have their shutters up. The corridor continues south to the market square, and a narrow side passage leads east to the clinic.”

Some closed-stalls are scenery in Warren Main Corridor South. The description of the closed-stalls is “Shuttered market stalls built directly into the corridor walls. Hand-painted signs advertise stim-patches, reconditioned breathers, data chips, and cooked food of uncertain origin. The shutters are dented and covered in layers of old adhesive where notices have been posted and torn away.” The printed name of the closed-stalls is “market stalls”. Understand “stalls” or “stall” or “shutters” or “shops” or “signs” or “neon” as the closed-stalls.

Chapter 7 - The Clinic Passage

The Clinic Passage is a room. The Clinic Passage is east of Warren Main Corridor South. The description of The Clinic Passage is “A narrow side corridor, quieter than the main drag. Fluorescent strips buzz overhead, half of them dead. The clinic entrance is to the east, marked by a faded red cross painted on the wall. A bench has been welded to the opposite wall.”

The clinic-bench is an enterable supporter in the Clinic Passage. “A metal bench is welded to the wall opposite the clinic.” The description of the clinic-bench is “Bare metal, polished smooth by use. People wait here when the clinic is full, which is most of the time.” The printed name of the clinic-bench is “bench”. Understand “bench” or “seat” as the clinic-bench.

The clinic-cross is scenery in the Clinic Passage. The description of the clinic-cross is “A red cross, hand-painted on the wall in what you hope is paint. It's the universal sign, even out here.” The printed name of the clinic-cross is “red cross”. Understand “cross” or “red cross” or “painted” as the clinic-cross.

The Medical Bay is a room. The Medical Bay is east of the Clinic Passage. The description of The Medical Bay is “A single room carved out of what was probably a storage bay. Harsh white light from overhead panels. A gurney, a cabinet of supplies, and a diagnostic terminal make up the entirety of the equipment. The walls are covered in laminated hygiene notices that nobody reads.”

The gurney is an enterable supporter in the Medical Bay. “A gurney sits in the center of the room, its padding cracked and stained.” The description of the gurney is “A medical gurney with adjustable height. The padding is cracked and patched with adhesive tape. It's been sterilized recently — you can smell the chemicals.”

The supply-cabinet is a closed openable container in the Medical Bay. The description of the supply-cabinet is “A locked metal cabinet with a reinforced glass front. Through the glass you can see rows of stim-patches, suture kits, and unmarked vials. The lock is serious — this is the most valuable collection of goods on the deck.” The printed name of the supply-cabinet is “supply cabinet”. Understand “cabinet” or “supplies” or “medical” as the supply-cabinet.
Instead of opening the supply-cabinet, say “It's locked with a biometric seal. You're not a registered medic.”

The diagnostic-terminal is a display-screen in the Medical Bay. The description of the diagnostic-terminal is “An ancient medical terminal, its screen scratched and its casing yellowed. It cycles through a boot diagnostic on a loop — SYSTEM READY has been blinking for what looks like years.” The printed name of the diagnostic-terminal is “diagnostic terminal”. Understand “terminal” or “diagnostic” or “screen” or “computer” as the diagnostic-terminal.

Chapter 8 - Warren Market Square

Warren Market Square is a room. Warren Market Square is south of Warren Main Corridor South. The description of Warren Market Square is “The heart of Deck 7 — a roughly circular open space where four corridors converge. The ceiling is higher here, maybe five meters, and the space has been colonized by market stalls, food vendors, and at least one establishment with blacked-out windows and a bouncer. The air is thick with cooking smoke, the buzz of haggling, and the bass thrum of music from somewhere below the deck plates. Exits lead north, east, south, and west.”

Some market-vendors are scenery in Warren Market Square. The description of the market-vendors is “A dozen stalls crammed into every available space. Cooked noodles, salvage electronics, bootleg software, counterfeit stim-patches, secondhand clothing — the economy of the Warrens laid bare. The vendors shout over each other in a pidgin of three or four languages.” The printed name of the market-vendors is “market vendors”. Understand “vendors” or “market” or “stalls” or “noodles” or “food” as the market-vendors.

The blacked-out-bar is scenery in Warren Market Square. The description of the blacked-out-bar is “A bar, or a club, or something less reputable — the windows are blacked out and a large individual stands at the door with folded arms. A neon sign above the entrance reads THE GULLET in flickering pink.” The printed name of the blacked-out-bar is “The Gullet”. Understand “gullet” or “bar” or “club” or “bouncer” or “neon sign” as the blacked-out-bar.

The cooking-smoke is scenery in Warren Market Square. The description of the cooking-smoke is “Greasy, aromatic smoke from the food stalls. It smells better than it has any right to, given that you don't want to know what's in the noodles.” The printed name of the cooking-smoke is “cooking smoke”. Understand “smoke” or “cooking” as the cooking-smoke.

Chapter 9 - Warren West Corridor

Warren West Corridor is a room. Warren West Corridor is west of Warren Market Square. The description of Warren West Corridor is “A corridor heading west from the market square, quieter and dimmer. The stalls thin out here, replaced by welded-shut doorways and sections of wall patched with mismatched metal. A public terminal is mounted on the wall, its screen cracked but functional. The corridor dead-ends at a sealed bulkhead.”

The public-terminal is a fixed in place thing in Warren West Corridor. “A public terminal is bolted to the wall, its screen casting a pale glow.” The description of the public-terminal is “A station information terminal. The screen is cracked down the middle but still displays. It shows a rotating feed of Warren notices: work postings, missing persons, bounties, and the ever-present Praxis Station public service announcements. Currently it reads: REMEMBER — THE MAW PROVIDES.” The printed name of the public-terminal is “public terminal”. Understand “terminal” or “screen” or “public” or “computer” as the public-terminal.

The sealed-bulkhead-west is scenery in Warren West Corridor. The description of the sealed-bulkhead-west is “A heavy pressure bulkhead, sealed shut and welded for good measure. The welding looks old — corroded in places, the bead uneven. Whatever's on the other side, the station doesn't want you going there. Or maybe it doesn't want whatever's there coming here. The welding looks like it might give if you pushed hard enough.” The printed name of the sealed-bulkhead-west is “sealed bulkhead”. Understand “bulkhead” or “sealed” or “door” as the sealed-bulkhead-west.

Instead of pushing the sealed-bulkhead-west:
	try going west.

Chapter 10 - Warren East Corridor

Warren East Corridor is a room. Warren East Corridor is east of Warren Market Square. The description of Warren East Corridor is “The corridor heading east from the market. The foot traffic picks up here — this is the route to the transtube station. Directional arrows painted on the walls in faded yellow point the way. The overhead lighting is slightly better maintained, probably because the transit authority actually pays for upkeep on the approaches.”

The directional-arrows are scenery in Warren East Corridor. The description of the directional-arrows is “Faded yellow arrows stenciled on the walls, pointing east toward the transtube. Some have been defaced with graffiti. One arrow has been altered to read TRANS TUBE → YOUR DOOM.” The printed name of the directional-arrows is “directional arrows”. Understand “arrows” or “directional” or “signs” or “yellow” as the directional-arrows.

Chapter 11 - Transtube Approach

Transtube Approach is a room. Transtube Approach is east of Warren East Corridor. The description of Transtube Approach is “The corridor opens up into a wider concourse as you approach the transtube station. The walls transition from raw metal to actual panels — scratched and graffitied, but panels nonetheless. Overhead signage in station-standard amber reads: DECK 7 — TRANSTUBE ACCESS. A security checkpoint blocks the way east, staffed by a bored-looking transit officer behind a scarred plexiglass booth.”

The overhead-signage is scenery in Transtube Approach. The description of the overhead-signage is “Amber text on dark panels: DECK 7 — TRANSTUBE ACCESS. Below it, smaller text lists destinations: COMMERCE DECK / DOCKING RING / UPPER PRAXIS / ENGINEERING. Someone has added HELL in marker after the last entry.” The printed name of the overhead-signage is “overhead signage”. Understand “signage” or “sign” or “overhead” or “amber” as the overhead-signage.

The security-checkpoint is scenery in Transtube Approach. The description of the security-checkpoint is “A narrow passage between metal barriers, with a plexiglass booth on one side. The barriers have seen better days. A scanner arch stands at the far end, though whether it actually works is an open question.” The printed name of the security-checkpoint is “security checkpoint”. Understand “checkpoint” or “security” or “barriers” or “scanner” or “arch” as the security-checkpoint.

The transit-officer is a person in Transtube Approach. The description of the transit-officer is “A woman in a faded transit authority uniform, sitting in the booth with the thousand-yard stare of someone who checked out mentally three shifts ago. She has a sidearm on her hip and a mug of something hot in her hands.” The printed name of the transit-officer is “transit officer”. Understand “officer” or “guard” or “woman” or “transit” as the transit-officer.

Instead of talking to the transit-officer, say “She glances at you without interest. 'Keep moving. Tube's running.' She goes back to her mug.”

The plexiglass-booth is scenery in Transtube Approach. The description of the plexiglass-booth is “Scarred, cloudy plexiglass over a metal frame. The booth is cramped and filled with screens, most of which display camera feeds from the corridor. A half-eaten ration bar sits on the console.” The printed name of the plexiglass-booth is “plexiglass booth”. Understand “booth” or “plexiglass” or “glass” as the plexiglass-booth.

Chapter 12 - Transtube Waiting Area

Transtube Waiting Area is a room. Transtube Waiting Area is east of Transtube Approach. The description of Transtube Waiting Area is “Past the checkpoint, the concourse opens into the transtube waiting area — a long, low-ceilinged space with rows of bolted-down metal benches facing the tube platform. A destination board flickers on the far wall, listing arrival times in amber numerals. The platform edge is marked with faded yellow safety stripes. The air here is different — cleaner, pushed by the pressure differential from the tube tunnels. A faint rumble echoes from the tunnel to the east as a pod passes on a distant line.”

The destination-board is a display-screen in Transtube Waiting Area. The description of the destination-board is “A large display board listing transtube departures:[line break][line break]  COMMERCE DECK .... 3 MIN[line break]  DOCKING RING ..... 7 MIN[line break]  UPPER PRAXIS ..... 12 MIN[line break]  ENGINEERING ....... DELAYED[line break][line break]The ENGINEERING line has been showing DELAYED for as long as anyone can remember.” The printed name of the destination-board is “destination board”. Understand “board” or “destination” or “departures” or “arrivals” or “display” or “times” as the destination-board.

Some waiting-benches are an enterable supporter in Transtube Waiting Area. “Rows of metal benches face the platform.” The description of the waiting-benches is “Metal benches bolted to the deck, their surfaces polished by countless passengers. A few people sit waiting — a worker in coveralls asleep with his head back, a woman clutching a duffel bag, a pair of teenagers sharing an audio feed.” The printed name of the waiting-benches is “benches”. Understand “benches” or “bench” or “seats” or “seat” as the waiting-benches.

The safety-stripes are scenery in Transtube Waiting Area. The description of the safety-stripes is “Faded yellow stripes along the platform edge. STAND BEHIND LINE is stenciled at intervals. The paint is worn through to bare metal in places.” The printed name of the safety-stripes is “safety stripes”. Understand “stripes” or “safety” or “yellow” or “line” or “platform” as the safety-stripes.

The tube-tunnel is scenery in Transtube Waiting Area. The description of the tube-tunnel is “A dark circular tunnel mouth, three meters in diameter, leading into the station's transit network. Air rushes in and out with each passing pod. The rails inside gleam faintly — mag-lev guides that accelerate the pods to terrifying speeds through the station's superstructure.” The printed name of the tube-tunnel is “tube tunnel”. Understand “tunnel” or “tube” or “transtube” or “rails” as the tube-tunnel.

The platform-vending-machine is a vending-machine in Transtube Waiting Area. “A vending machine stands against the wall near the benches.” The printed name of the platform-vending-machine is “vending machine”. The description of the platform-vending-machine is “It sells stim-patches, water pouches, and ration bars. The prices are extortionate. A hand-written note taped to the front reads: NO REFUNDS. MACHINE EATS CREDS SOMETIMES. KNOWN ISSUE.” Understand “vending” or “machine” or “vending machine” as the platform-vending-machine.

Chapter 13 - Residential Corridor

Residential Corridor is a room. Residential Corridor is south of Warren Market Square. The description of Residential Corridor is “The corridor south from the market leads toward the deck's outer ring. It's quieter here — residential territory, such as it is. Doorways line both sides, most covered with improvised curtains or welded-on privacy screens. The overhead lighting dims to a brownish flicker. The corridor ends at a viewing gallery to the south.”

Some residential-doorways are scenery in Residential Corridor. The description of the residential-doorways is “Doorways covered with hanging fabric, plastic sheeting, or spot-welded metal screens. Behind them, families and loners and work crews have carved out what passes for private space on the Warrens. You can hear the sounds of living through the thin barriers — arguments, children, the blare of entertainment feeds.” The printed name of the residential-doorways is “doorways”. Understand “doorways” or “doors” or “curtains” or “screens” or “residential” as the residential-doorways.

Chapter 14 - Viewing Gallery

The Viewing Gallery is a room. The Viewing Gallery is south of Residential Corridor. The description of The Viewing Gallery is “A small observation lounge at the outer edge of Deck 7. A long viewport stretches across the far wall, and for once, the station gives you something worth looking at. A few battered chairs are arranged in a rough semicircle facing the view. This is a dead end — the only exit leads back north.”

The viewport is scenery in the Viewing Gallery. The description of the viewport is “Beyond the thick glass, the universe wheels slowly as the station rotates. And there it is — the Maw. A perfect circle of nothing, rimmed with a halo of superheated gas that burns white-blue at the edges and dims to angry red as it spirals inward. Stars behind it are bent into bright arcs, smeared by gravity into shapes that hurt the eye. It is beautiful and terrifying and it never gets old.”

Some battered-chairs are an enterable supporter in the Viewing Gallery. “A few battered chairs face the viewport.” The description of the battered-chairs is “Mismatched chairs — a plastic stacking chair, something that was once an office chair, a crate with a cushion on it. People come here to think, or to stare, or to remember that there's something outside these walls.” The printed name of the battered-chairs is “chairs”. Understand “chairs” or “chair” or “seat” or “crate” as the battered-chairs.

The Maw is scenery in the Viewing Gallery. The description of the Maw is “The black hole. The reason Praxis exists. It swallowed the Kethani system a thousand years ago and has been slowly digesting it ever since. The accretion disk provides energy, the warped spacetime provides... other things. Exotic matter. Temporal anomalies. The things that make people rich and make physicists drink.” Understand “black hole” or “hole” or “accretion” or “disk” or “halo” as the Maw.

Part 3 - The Docking Ring

Chapter 1 - Ring Transtube Station

The Ring Transtube Station is a room. The description of The Ring Transtube Station is “The Docking Ring's transtube station is a different world from the Warrens. The walls are actual panels — clean, maintained, lit by recessed strips that cast even white light. Transit authority logos mark every surface. A departures board lists connections, and the platform stretches east toward the transpex tube that leads to the Ring proper. Benches line the walls. A pod bay opens to the west.”

The ring-departures-board is a display-screen in the Ring Transtube Station. The description of the ring-departures-board is “A clean display — no cracks, no graffiti:[line break][line break]  WARRENS (Deck 7) ... 4 MIN[line break]  COMMERCE DECK ..... 6 MIN[line break]  UPPER PRAXIS ...... 9 MIN[line break]  ENGINEERING ........ SUSPENDED[line break][line break]Below, a scrolling advisory: DOCKING RING SECTIONS 4-7 CURRENTLY ZERO-GRAV. MAG-BOOTS RECOMMENDED.” The printed name of the ring-departures-board is “departures board”. Understand “board” or “departures” or “display” as the ring-departures-board.

Some ring-station-benches are an enterable supporter in the Ring Transtube Station. “Metal benches with actual cushioning line the walls.” The description of the ring-station-benches is “Padded benches — luxury by Praxis standards. A few travelers sit waiting with duffel bags and equipment cases. The crowd here is different from the Warrens: dock workers, ship crews, traders, the occasional merchant in clean clothes.” The printed name of the ring-station-benches is “benches”. Understand “benches” or “bench” or “seats” as the ring-station-benches.

Chapter 2 - The Transpex Tube

The Transpex Tube is a room. The Transpex Tube is zero-grav. The Transpex Tube is east of the Ring Transtube Station. The description of The Transpex Tube is “A long cylindrical corridor of transparent composite — transpex — stretching fifty meters between the station's rotating hull and the non-rotating docking structure. Through the walls, above, below, and on every side, you can see space. The Maw dominates the view to port, its accretion disk painting the transpex in shifting hues of blue and amber. Guide rails run along the tube's interior for hand-over-hand traversal in zero gravity. The transtube station is back to the west. The cylift platform is ahead to the east.”

The transpex-walls are scenery in the Transpex Tube. The description of the transpex-walls is “Transparent composite rated for micrometeorite impact and radiation shielding. Through it, you can see the station's hull curving away in both directions — a vast grey cliff of metal studded with running lights and antenna arrays. Ships move in the distance, their engine flares tiny blue sparks against the black.” The printed name of the transpex-walls is “transpex walls”. Understand “transpex” or “walls” or “transparent” or “glass” or “composite” as the transpex-walls.

The guide-rails are scenery in the Transpex Tube. The description of the guide-rails is “Rubberized handgrips running the length of the tube. They're worn smooth in the middle where thousands of hands have pulled themselves along. In zero-grav, these are your road.” The printed name of the guide-rails is “guide rails”. Understand “rails” or “guide” or “handgrips” or “grips” or “handles” as the guide-rails.

The transpex-maw-view is scenery in the Transpex Tube. The description of the transpex-maw-view is “From here, without walls or decks to frame it, the Maw fills a quarter of the sky. The accretion disk is a river of fire spiraling into nothing. Light bends around the event horizon in impossible curves. You can see why some of the old-timers call it God's Eye.” The printed name of the transpex-maw-view is “the Maw”. Understand “maw” or “black hole” or “accretion” or “disk” or “view” or “space” as the transpex-maw-view.

Chapter 3 - The Cylift

The Cylift Platform is a room. The Cylift Platform is zero-grav. The Cylift Platform is east of the Transpex Tube. The description of The Cylift Platform is “A circular platform at the end of the transpex tube, where a cylindrical lift shaft rises vertically into the docking ring's superstructure. The cylift car sits in its cradle — an open cage with mag-clamps on the floor and ceiling for zero-grav transit. Warning stripes ring the shaft opening. A control panel with two buttons is mounted on a stanchion: UP to the grav-lock, DOWN to maintenance (RESTRICTED).”

The cylift-car is an enterable container in the Cylift Platform. “The cylift car sits open in its cradle, waiting.” The description of the cylift-car is “An open cage of welded steel, three meters across. Mag-clamp pads on the floor and ceiling keep cargo and passengers from drifting during transit. The cage rides a central rail up through the shaft. It smells of hydraulic fluid.” The printed name of the cylift-car is “cylift car”. Understand “car” or “lift” or “cage” or “cylift” or “elevator” as the cylift-car.

The cylift-control-panel is a fixed in place thing in the Cylift Platform. “A control stanchion stands beside the shaft.” The description of the cylift-control-panel is “Two buttons on a brushed-metal stanchion:[line break][line break]  [UP] — GRAV-LOCK / DOCKING RING ACCESS[line break]  [DOWN] — MAINTENANCE LEVEL (RESTRICTED)[line break][line break]The DOWN button has a keycard reader beside it, currently showing a red light.” The printed name of the cylift-control-panel is “control panel”. Understand “panel” or “control” or “stanchion” or “buttons” or “button” as the cylift-control-panel.

The cylift-warning-stripes are scenery in the Cylift Platform. The description of the cylift-warning-stripes is “Yellow and black chevrons painted around the shaft opening. KEEP CLEAR DURING TRANSIT. The paint is chipped from years of cargo impacts.” The printed name of the cylift-warning-stripes is “warning stripes”. Understand “stripes” or “warning” or “chevrons” as the cylift-warning-stripes.

Section 1 - Cylift Travel

Instead of going up in the Cylift Platform:
	say “You grip a mag-clamp as the cylift engages. The car rises smoothly up the shaft, walls of grey metal sliding past. The ascent takes thirty seconds — then the car locks into place with a heavy clang and the grav-lock chamber opens before you.”;
	now the player is in the Ring Grav-Lock.

Instead of going down in the Cylift Platform:
	say “The keycard reader blinks red. ACCESS RESTRICTED — MAINTENANCE PERSONNEL ONLY. You don't have the credentials.”

Pressing-button is an action applying to nothing. Understand “press up” or “push up” as pressing-button when the player is in the Cylift Platform.

Carry out pressing-button:
	try going up.

Chapter 4 - The Ring Grav-Lock

The Ring Grav-Lock is a grav-lock-chamber. The Ring Grav-Lock is zero-grav. The description of The Ring Grav-Lock is “A transitional chamber between the cylift shaft and the Docking Ring proper. The room is a hexagonal space with padded walls and multiple handhold bars. Warning text on every surface reads: ZERO GRAVITY BEYOND THIS POINT. A heavy iris hatch leads north into the Ring. The cylift shaft descends below.”

The ring-grav-lock-hatch is scenery in the Ring Grav-Lock. The description of the ring-grav-lock-hatch is “A reinforced iris hatch, currently open. Beyond it, you can see the vast interior of the Docking Ring — a cathedral of steel and vacuum, lit by work-floods and ship running lights.” The printed name of the ring-grav-lock-hatch is “iris hatch”. Understand “hatch” or “iris” or “door” as the ring-grav-lock-hatch.

The grav-lock-handholds are scenery in the Ring Grav-Lock. The description of the grav-lock-handholds is “Rubberized bars bolted to every surface. In zero-grav, these are the difference between controlled movement and a slow, embarrassing tumble into a wall.” The printed name of the grav-lock-handholds is “handholds”. Understand “handholds” or “handhold” or “bars” or “grips” as the grav-lock-handholds.

The grav-lock-warnings are scenery in the Ring Grav-Lock. The description of the grav-lock-warnings is “ZERO GRAVITY BEYOND THIS POINT. USE DESIGNATED TRAVEL LANES. MAXIMUM DRIFT SPEED 2 M/S. EMERGENCY TETHERS LOCATED AT ALL JUNCTIONS. LIABILITY WAIVER IN EFFECT.” The printed name of the grav-lock-warnings is “warning text”. Understand “warning” or “text” or “warnings” or “signs” as the grav-lock-warnings.

Instead of going down in the Ring Grav-Lock:
	say “You pull yourself back down the shaft to the cylift platform.”;
	now the player is in the Cylift Platform.

Chapter 5 - The Ring Interior

Section 1 - Ring Mid Central Junction

Ring Mid Central is a room. Ring Mid Central is zero-grav. Ring Mid Central is north of the Ring Grav-Lock. The description of Ring Mid Central is “The central junction of the Docking Ring's mid-level — a cavernous open space where three travel lanes converge. The Ring stretches away in every direction: west and east along the main axis, up and down between levels. The scale is dizzying — the Ring's interior is a hollow cylinder two hundred meters across, crisscrossed with guide cables, cargo tethers, and blinking nav-buoys. Ships are visible in their slips along the outer wall, dark shapes bristling with antennae and hull plating.[paragraph break]A navigation buoy floats nearby, anchored to a guide cable. The grav-lock hatch is to the south.”

The mid-central-buoy is a nav-buoy in Ring Mid Central. “A navigation buoy blinks amber nearby.” The description of the mid-central-buoy is “NAV BUOY MC-1 — RING MID CENTRAL[line break][line break]  WEST → Slips 1A/1B/1C[line break]  EAST → Slips 3A/3B/3C[line break]  UP → Upper Ring / Shuttle Berths[line break]  DOWN → Lower Ring[line break]  NORTH → Slip 2B[line break]  SOUTH → Grav-Lock / Station Access[line break][line break]DRIFT SPEED: MODERATE. STAY IN LANE.” The printed name of the mid-central-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the mid-central-buoy.

The ring-guide-cables are scenery in Ring Mid Central. The description of the ring-guide-cables is “Taut steel cables strung between anchor points, forming travel lanes through the zero-grav interior. Cargo pods drift along some of them, towed by small utility tugs. The cables vibrate faintly when you touch them.” The printed name of the ring-guide-cables is “guide cables”. Understand “cables” or “cable” or “guide” or “tethers” or “lanes” as the ring-guide-cables.

Section 2 - Ring Upper Central Junction

Ring Upper Central is a room. Ring Upper Central is zero-grav. The description of Ring Upper Central is “The upper-central junction of the Ring. The ceiling — such as it is — curves close here, the inner surface of the Ring's hull studded with access panels and maintenance hatches. The travel lanes branch west, east, and down. Above, a second grav-lock leads up to the shuttle berth bay. A large nav-buoy spins slowly at the junction, its amber light sweeping the space.”
Ring Upper Central is above Ring Mid Central.

The upper-central-buoy is a nav-buoy in Ring Upper Central. “A navigation buoy rotates slowly here.” The description of the upper-central-buoy is “NAV BUOY UC-1 — RING UPPER CENTRAL[line break][line break]  WEST → Slip 1A[line break]  EAST → Slip 3A[line break]  NORTH → Slip 2A[line break]  UP → Shuttle Grav-Lock / Shuttle Berths[line break]  DOWN → Mid Central Junction[line break][line break]CAUTION: SHUTTLE TRAFFIC OVERHEAD. YIELD TO DOCKING CRAFT.” The printed name of the upper-central-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the upper-central-buoy.

Section 3 - Ring Lower Central Junction

Ring Lower Central is a room. Ring Lower Central is zero-grav. The description of Ring Lower Central is “The lower-central junction. Down here the Ring feels more industrial — the walls are lined with cargo handling equipment, magnetic grapple arrays, and heavy-duty tether points. Work-floods cast harsh white light. A constant stream of cargo pods drifts through, guided by remote-operated tugs.”
Ring Lower Central is below Ring Mid Central.

The lower-central-buoy is a nav-buoy in Ring Lower Central. “A nav-buoy blinks steadily at this junction.” The description of the lower-central-buoy is “NAV BUOY LC-1 — RING LOWER CENTRAL[line break][line break]  WEST → Slip 1C[line break]  EAST → Slip 3C[line break]  NORTH → Slip 2C[line break]  UP → Mid Central Junction[line break][line break]WARNING: HEAVY CARGO TRAFFIC. USE DESIGNATED LANES.” The printed name of the lower-central-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the lower-central-buoy.

The cargo-equipment is scenery in Ring Lower Central. The description of the cargo-equipment is “Industrial cargo handling gear — magnetic grapples, tether winches, pallet clamps. All of it scarred and dented from decades of use. A few dock workers in EVA suits drift among the equipment, directing cargo pods with hand signals and short-range comms.” The printed name of the cargo-equipment is “cargo equipment”. Understand “cargo” or “equipment” or “grapple” or “grapples” or “winches” or “clamps” or “tether” as the cargo-equipment.

Section 4 - Ring Mid West Junction

Ring Mid West is a room. Ring Mid West is zero-grav. Ring Mid West is west of Ring Mid Central. The description of Ring Mid West is “The mid-level western junction. The outer wall of the Ring is close here — you can see the massive doors of docking slip 1B directly to the west, and the dark shapes of ships berthed in the adjacent slips. The guide cables here are thicker, heavy-duty lines meant for towing loaded cargo pods.”

The mid-west-buoy is a nav-buoy in Ring Mid West. “A nav-buoy marks the junction.” The description of the mid-west-buoy is “NAV BUOY MW-1 — RING MID WEST[line break][line break]  WEST → Docking Slip 1B[line break]  EAST → Mid Central[line break]  UP → Slip 1A (Upper West)[line break]  DOWN → Slip 1C (Lower West).” The printed name of the mid-west-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the mid-west-buoy.

Section 5 - Ring Upper West Junction

Ring Upper West is a room. Ring Upper West is zero-grav. The description of Ring Upper West is “The upper-western corner of the Ring — the highest and furthest west you can go in the docking structure. The slip 1A docking doors dominate the wall to the west. From here you can see the full sweep of the Ring's interior curving away below and to the east, a vast steel canyon strung with lights and cables.”
Ring Upper West is above Ring Mid West.

The upper-west-buoy is a nav-buoy in Ring Upper West. “A nav-buoy floats here, its light pulsing.” The description of the upper-west-buoy is “NAV BUOY UW-1 — RING UPPER WEST[line break][line break]  WEST → Docking Slip 1A[line break]  EAST → Upper Central[line break]  DOWN → Mid West (Slip 1B).” The printed name of the upper-west-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the upper-west-buoy.

Ring Upper West is west of Ring Upper Central.

Section 6 - Ring Lower West Junction

Ring Lower West is a room. Ring Lower West is zero-grav. The description of Ring Lower West is “The lower-western junction, deep in the Ring's industrial belly. Slip 1C's doors are to the west. The air — such as it is in zero-grav — carries the chemical tang of hull sealant and thruster propellant. Maintenance drones buzz past on pre-programmed routes.”
Ring Lower West is below Ring Mid West.

The lower-west-buoy is a nav-buoy in Ring Lower West. “A nav-buoy blinks red-amber here.” The description of the lower-west-buoy is “NAV BUOY LW-1 — RING LOWER WEST[line break][line break]  WEST → Docking Slip 1C[line break]  EAST → Lower Central[line break]  UP → Mid West (Slip 1B).” The printed name of the lower-west-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the lower-west-buoy.

Ring Lower West is west of Ring Lower Central.

Section 7 - Ring Mid East Junction

Ring Mid East is a room. Ring Mid East is zero-grav. Ring Mid East is east of Ring Mid Central. The description of Ring Mid East is “The mid-level eastern junction. Slip 3B's docking doors are visible to the east. This section of the Ring sees heavy traffic — it's closest to the commercial berths, and traders, couriers, and customs inspectors drift through constantly. A customs drone hovers at the junction, scanning passing cargo with a blue laser grid.”

The mid-east-buoy is a nav-buoy in Ring Mid East. “A nav-buoy marks the eastern junction.” The description of the mid-east-buoy is “NAV BUOY ME-1 — RING MID EAST[line break][line break]  EAST → Docking Slip 3B[line break]  WEST → Mid Central[line break]  UP → Slip 3A (Upper East)[line break]  DOWN → Slip 3C (Lower East).” The printed name of the mid-east-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the mid-east-buoy.

The customs-drone is scenery in Ring Mid East. The description of the customs-drone is “An autonomous scanning unit, roughly the size of a large dog, hovering on micro-thrusters. It sweeps passing cargo with a blue laser grid and cross-references against manifests. It ignores people — mostly.” The printed name of the customs-drone is “customs drone”. Understand “drone” or “customs” or “scanner” or “laser” as the customs-drone.

Section 8 - Ring Upper East Junction

Ring Upper East is a room. Ring Upper East is zero-grav. The description of Ring Upper East is “The upper-eastern corner of the Ring. Slip 3A's berth doors are to the east. Through a gap in the structure, you can see the hull of a docked freighter — enormous, pitted with micrometeorite scars, its running lights blinking a slow amber pulse.”
Ring Upper East is above Ring Mid East.

The upper-east-buoy is a nav-buoy in Ring Upper East. “A nav-buoy drifts at the junction.” The description of the upper-east-buoy is “NAV BUOY UE-1 — RING UPPER EAST[line break][line break]  EAST → Docking Slip 3A[line break]  WEST → Upper Central[line break]  DOWN → Mid East (Slip 3B).” The printed name of the upper-east-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the upper-east-buoy.

Ring Upper East is east of Ring Upper Central.

Section 9 - Ring Lower East Junction

Ring Lower East is a room. Ring Lower East is zero-grav. The description of Ring Lower East is “The lower-eastern junction. Slip 3C is to the east. This is the quietest corner of the Ring — the slips down here tend to house long-term berths, ships in for repairs or mothballed by owners who stopped paying fees. A few have been here so long they've grown a patina of micro-corrosion.”
Ring Lower East is below Ring Mid East.

The lower-east-buoy is a nav-buoy in Ring Lower East. “A nav-buoy marks this quiet junction.” The description of the lower-east-buoy is “NAV BUOY LE-1 — RING LOWER EAST[line break][line break]  EAST → Docking Slip 3C[line break]  WEST → Lower Central[line break]  UP → Mid East (Slip 3B).” The printed name of the lower-east-buoy is “navigation buoy”. Understand “nav” or “buoy” or “beacon” as the lower-east-buoy.

Ring Lower East is east of Ring Lower Central.

Chapter 6 - Docking Slips

Section 1 - Slip 1A

Docking Slip 1A is a room. Docking Slip 1A is zero-grav. Docking Slip 1A is west of Ring Upper West. The description of Docking Slip 1A is “The outermost berth in the Ring's upper-west quadrant. A massive set of docking clamps lines the outer wall, currently empty — the slip is vacant. Through the berth doors, sealed now, you would see open space. Tether points and fuel umbilicals hang loose, waiting for the next ship. One of the clamp housings has a manual release wheel on its side — unusual, since these systems are normally automated. The junction is back to the east.”

The slip-1a-clamps are scenery in Docking Slip 1A. The description of the slip-1a-clamps is “Heavy magnetic docking clamps, each one the size of a ground vehicle. They're retracted into their housings, waiting. One housing — the third from the left — has a manual release wheel bolted to its side. The wheel is clean. No dust, no corrosion. Someone has been using it recently.” The printed name of the slip-1a-clamps is “docking clamps”. Understand “clamps” or “docking” or “magnetic” as the slip-1a-clamps.

The clamp-release-wheel is a thing in Docking Slip 1A. The description of the clamp-release-wheel is “A heavy metal wheel, hand-sized, bolted to the side of the third clamp housing. It's clean — conspicuously so, given that everything else in this slip is coated in micro-corrosion. When you look closely, you can see faint wear marks on the metal. Someone turns this wheel regularly.” The printed name of the clamp-release-wheel is “release wheel”. Understand “wheel” or “release” or “manual” or “turn” as the clamp-release-wheel.

Instead of turning the clamp-release-wheel:
	say “You grip the wheel and turn it. It resists for a moment, then moves smoothly — too smoothly for station hardware. Three full rotations. On the third, something clicks deep inside the clamp housing, and the entire unit slides sideways on hidden rails, revealing a passage behind it. A passage that should not exist — the hull is right there, you should be looking at vacuum. Instead, there is a corridor, dimly lit, leading down into a space the station's blueprints don't know about.”;
	now the player is in the Hidden Berth.

The slip-1a-umbilicals are scenery in Docking Slip 1A. The description of the slip-1a-umbilicals is “Fuel lines, power feeds, data cables, and atmo hookups — everything a docked ship needs to keep running on station power instead of burning its own reserves. They drift like tentacles in the zero-grav.” The printed name of the slip-1a-umbilicals is “fuel umbilicals”. Understand “umbilicals” or “fuel” or “lines” or “hookups” as the slip-1a-umbilicals.

Section 2 - Slip 1B

Docking Slip 1B is a room. Docking Slip 1B is zero-grav. Docking Slip 1B is west of Ring Mid West. The description of Docking Slip 1B is “A mid-level berth on the west side. This slip is occupied — a battered ore hauler sits in the clamps, its hull scarred and discolored by repeated atmospheric entries. The ship's name, KETTLE BLACK, is stenciled on the bow in faded letters. Crew umbilicals connect the ship to the station. The crew airlock is open, a string of lights draped around the frame, and the sound of someone working carries out from the hold. The junction is back to the east.”

The kettle-black is scenery in Docking Slip 1B. The description of the kettle-black is “An ore hauler, maybe sixty meters stem to stern. It's seen better decades. The hull is a patchwork of original plating and welded repairs, and the engine nacelles are caked with exhaust residue. The crew airlock hangs open, warm light spilling out, a string of cheap lights draped around the frame. Someone is inside — you can hear the clang of tools and the low hum of a voice singing off-key.” The printed name of the kettle-black is “Kettle Black”. Understand “kettle” or “black” or “ship” or “hauler” or “ore” as the kettle-black.

Section 3 - Slip 1C

Docking Slip 1C is a room. Docking Slip 1C is zero-grav. Docking Slip 1C is west of Ring Lower West. The description of Docking Slip 1C is “The lower-west berth. A small courier vessel occupies the slip, sleek and dark where the haulers are boxy and scarred. No name is visible on the hull — either it's been removed or it was never painted. The ship's running lights are off. It looks abandoned, or wants to. But the airlock is open — just a crack, a thin vertical line of amber light leaking out from inside.”

The unnamed-courier is scenery in Docking Slip 1C. The description of the unnamed-courier is “A courier-class vessel — fast, lightly armed, built for speed over cargo capacity. The hull is coated in some kind of radar-absorbent material that drinks the light. No transponder beacon. No name. No lights. Everything about this ship says: don't look at me.[paragraph break]Except the airlock. The airlock is open, just slightly, and through the gap you can see warm amber light. Someone is inside. Someone is waiting.” The printed name of the unnamed-courier is “courier vessel”. Understand “courier” or “vessel” or “ship” or “dark” or “airlock” as the unnamed-courier.

Section 4 - Slip 2A

Docking Slip 2A is a room. Docking Slip 2A is zero-grav. Docking Slip 2A is north of Ring Upper Central. The description of Docking Slip 2A is “An upper-central berth, currently vacant. This is a premium slip — close to the shuttle berths and the main transit connections. The docking equipment here is newer, better maintained. A berth status panel shows AVAILABLE — PREMIUM RATE.”

The slip-2a-panel is a display-screen in Docking Slip 2A. The description of the slip-2a-panel is “BERTH 2A — STATUS: AVAILABLE[line break]RATE: 200 CRED/CYCLE (PREMIUM)[line break]SERVICES: FULL UMBILICAL, CUSTOMS FAST-TRACK, CREW LOUNGE ACCESS[line break][line break]Two hundred creds a cycle. That's more than most Warren residents make in a month.” The printed name of the slip-2a-panel is “berth status panel”. Understand “panel” or “status” or “berth” as the slip-2a-panel.

Section 5 - Slip 2B

Docking Slip 2B is a room. Docking Slip 2B is zero-grav. Docking Slip 2B is north of Ring Mid Central. The description of Docking Slip 2B is “The central berth at the Ring's mid-level. A mid-sized trading vessel occupies the slip — the HAND OF COMMERCE, according to the lettering on its flank. Cargo pods are being loaded through an open bay door by a team of dock workers in mag-boots, directed by a supervisor barking orders over comms.”

The hand-of-commerce is scenery in Docking Slip 2B. The description of the hand-of-commerce is “A trading vessel, maybe eighty meters long. Cleaner than most ships you see in the Ring — her owners clearly have money. The cargo bay doors are open, revealing a cavernous hold being loaded with sealed containers. Armed security floats near the airlock.” The printed name of the hand-of-commerce is “Hand of Commerce”. Understand “hand” or “commerce” or “ship” or “trading” or “vessel” as the hand-of-commerce.

The dock-workers are scenery in Docking Slip 2B. The description of the dock-workers is “A crew in heavy mag-boots and EVA-rated work suits, hauling cargo pods with practiced ease in zero-grav. They move with the efficiency of people paid by the pod, not the hour.” The printed name of the dock-workers is “dock workers”. Understand “workers” or “dock” or “crew” or “supervisor” as the dock-workers.

Section 6 - Slip 2C

Docking Slip 2C is a room. Docking Slip 2C is zero-grav. Docking Slip 2C is north of Ring Lower Central. The description of Docking Slip 2C is “A lower-central berth. The ship here is impossible to miss — a decommissioned patrol corvette, bristling with weapon hardpoints that have been welded shut. The hull bears the faded insignia of some navy that no longer exists. Someone has converted it into a habitat, judging by the laundry line strung between the dorsal fins.”

The patrol-corvette is scenery in Docking Slip 2C. The description of the patrol-corvette is “Once a warship, now someone's home. The weapon mounts are sealed, the torpedo tubes welded over, the sensor arrays replaced with civilian models. But the armored hull is intact, and the engine cowlings still suggest something that could move very fast if it had to. A hand-painted sign near the airlock reads: THE LAST WORD. NO SOLICITORS.” The printed name of the patrol-corvette is “patrol corvette”. Understand “corvette” or “patrol” or “warship” or “ship” or “last word” as the patrol-corvette.

Section 7 - Slip 3A

Docking Slip 3A is a room. Docking Slip 3A is zero-grav. Docking Slip 3A is east of Ring Upper East. The description of Docking Slip 3A is “An upper-east berth. A bulk freighter fills the slip, so large that it barely fits — the hull nearly touches the docking clamps on both sides. The ship's name, PROVIDENCE, is painted in letters three meters tall.”

The providence is scenery in Docking Slip 3A. The description of the providence is “A bulk freighter — the largest class of ship that can berth at Praxis. Its hull is a flat grey expanse of metal, unbroken except by running lights and the occasional maintenance hatch. The sheer scale of it makes you feel insect-small. Its engine section alone is larger than most ships in the Ring.” The printed name of the providence is “Providence”. Understand “providence” or “freighter” or “ship” or “bulk” as the providence.

Section 8 - Slip 3B

Docking Slip 3B is a room. Docking Slip 3B is zero-grav. Docking Slip 3B is east of Ring Mid East. The description of Docking Slip 3B is “A mid-level east berth. Two small ships share this slip, docked side by side — a prospector rig and a salvage tug, both showing hard use. Their crews have strung a cargo net between them, creating an improvised communal space where figures in coveralls share food and talk.”

The prospector-rig is scenery in Docking Slip 3B. The description of the prospector-rig is “A small, rugged ship built for solo asteroid work — drill mounts on the bow, sample pods along the flanks, a cockpit barely big enough for one. It looks like it's been through a debris field recently.” The printed name of the prospector-rig is “prospector rig”. Understand “prospector” or “rig” or “drill” as the prospector-rig.

The salvage-tug is scenery in Docking Slip 3B. The description of the salvage-tug is “A blunt-nosed utility vessel with massive grapple arms folded along its hull. Built for grabbing wrecks and dead ships and hauling them in. Not pretty, not fast, but strong.” The printed name of the salvage-tug is “salvage tug”. Understand “tug” or “salvage” as the salvage-tug.

Section 9 - Slip 3C

Docking Slip 3C is a room. Docking Slip 3C is zero-grav. Docking Slip 3C is east of Ring Lower East. The description of Docking Slip 3C is “The lower-east berth — the quietest slip in the Ring. The ship here has been docked so long that micro-corrosion has begun to spread across its hull in fractal patterns of rust and verdigris. No lights. No crew. No name. Just a dead ship slowly becoming part of the station.”

The dead-ship is scenery in Docking Slip 3C. The description of the dead-ship is “A ship of uncertain class, its lines obscured by years of neglect and corrosion. The hull plating has begun to flake, and in places you can see through to the structural ribs beneath. The airlock is unsealed — hanging open a few centimeters, dark inside. The dock fees on this berth must be astronomical, yet no one has claimed or scrapped it. There's a story here, but no one to tell it.” The printed name of the dead-ship is “derelict ship”. Understand “ship” or “derelict” or “dead” or “wreck” or “corrosion” or “rust” as the dead-ship.

Instead of entering the dead-ship:
	say “You pull the airlock open. It moves with a reluctant groan — corroded hinges, years of disuse. Beyond it, darkness. You pull yourself inside.”;
	now the player is in the Derelict Interior.

Chapter 7 - Shuttle Berths

Section 1 - Shuttle Grav-Lock

The Shuttle Grav-Lock is a grav-lock-chamber. The Shuttle Grav-Lock is zero-grav. The Shuttle Grav-Lock is above Ring Upper Central. The description of The Shuttle Grav-Lock is “A grav-lock chamber at the top of the Ring, smaller and cleaner than the one below. The walls are painted in transit authority yellow and marked with directional arrows. Below leads back to the Ring. Above, through a reinforced hatch, is the shuttle berth bay — the gateway to everywhere the transtube doesn't go.”

The shuttle-lock-hatch is scenery in the Shuttle Grav-Lock. The description of the shuttle-lock-hatch is “A heavy hatch with SHUTTLE BERTH ACCESS stenciled on it in yellow. Through the viewport set into it, you can see the controlled bustle of the berth bay above.” The printed name of the shuttle-lock-hatch is “hatch”. Understand “hatch” or “door” as the shuttle-lock-hatch.

The shuttle-lock-arrows are scenery in the Shuttle Grav-Lock. The description of the shuttle-lock-arrows is “Yellow directional arrows on the walls. UP to shuttle berths. DOWN to the Docking Ring. Simple enough, even in zero-grav.” The printed name of the shuttle-lock-arrows is “directional arrows”. Understand “arrows” or “directional” as the shuttle-lock-arrows.

Section 2 - Shuttle Berth Bay

The Shuttle Berth Bay is a room. The Shuttle Berth Bay is normal-grav. The Shuttle Berth Bay is above the Shuttle Grav-Lock. The description of The Shuttle Berth Bay is “Gravity reasserts itself as you pass through the grav-lock — this bay has its own spin section, a small drum rotating to provide a comfortable pull. The shuttle berth bay is a long, vaulted hangar with berths on both sides, each one a recessed alcove with a shuttle parked nose-in. A central walkway runs the length of the bay, lined with departure gates and ticket kiosks. Overhead, a destination board lists shuttle routes to dozens of locations too far or too awkward for the transtube network. The grav-lock hatch is set into the floor at the south end.”

The shuttle-destination-board is a display-screen in the Shuttle Berth Bay. The description of the shuttle-destination-board is “A large board listing shuttle departures:[line break][line break]  REFINERY PLATFORMS .... GATE 1 .... 0:45[line break]  SALVAGE YARDS ........ GATE 3 .... 1:20[line break]  DEEP RANGE RELAY ..... GATE 5 .... 3:00[line break]  KETHANI DEBRIS FIELD . GATE 7 .... 4:30[line break]  ORBITAL HAB CLUSTER .. GATE 2 .... 0:30[line break][line break]Prices are listed in small text below each destination. None of them are cheap.” The printed name of the shuttle-destination-board is “destination board”. Understand “board” or “destination” or “departures” or “display” as the shuttle-destination-board.

Some departure-gates are scenery in the Shuttle Berth Bay. The description of the departure-gates is “Numbered gates along the walkway, each with a small waiting area and a boarding tunnel leading to a shuttle berth. Most have a few passengers waiting — miners heading to the refineries, salvage crews, the occasional researcher bound for the deep-range relay stations.” The printed name of the departure-gates is “departure gates”. Understand “gates” or “gate” or “departure” as the departure-gates.

Some ticket-kiosks are scenery in the Shuttle Berth Bay. The description of the ticket-kiosks is “Automated ticket machines in transit authority yellow. They accept cred-chips and station scrip. The interface is clunky but functional. A hand-written sign on one reads: EXACT CHANGE ONLY — MACHINE DOES NOT GIVE CHANGE.” The printed name of the ticket-kiosks is “ticket kiosks”. Understand “kiosks” or “kiosk” or “ticket” or “machine” or “machines” as the ticket-kiosks.

Some berth-shuttles are scenery in the Shuttle Berth Bay. The description of the berth-shuttles is “A mix of shuttle types — boxy passenger haulers, sleek executive craft, rugged utility birds built for rough landings on asteroids and platforms. They sit nose-in to their berths, engines cold, waiting for their departure slots.” The printed name of the berth-shuttles is “shuttles”. Understand “shuttles” or “shuttle” or “craft” as the berth-shuttles.

Instead of going down in the Shuttle Berth Bay:
	say “You step onto the grav-lock hatch and drop through as gravity releases its hold.”;
	now the player is in the Shuttle Grav-Lock.

Part 4 - The Shuttle System

Chapter 1 - The Shuttle Interior

The Shuttle Cabin is a room. The description of The Shuttle Cabin is “The interior of a short-haul shuttle — twenty seats in two rows, bolted to a floor that vibrates with engine idle. The bulkheads are scuffed grey composite, the overhead bins dented from decades of abuse. A destination panel glows beside the forward hatch. Through the tiny porthole, you can see the berth bay outside — or whatever destination you've arrived at.[paragraph break]Available destinations: PRAXIS STATION, AETERIA.”

The shuttle-dest-panel is a display-screen in the Shuttle Cabin. The description of the shuttle-dest-panel is “A scratched panel listing shuttle routes:[line break][line break]  1. PRAXIS STATION (return)[line break]  2. AETERIA — Ryftren Imperial Capital[line break][line break]Other destinations require transfer at Aeteria Orbital.” The printed name of the shuttle-dest-panel is “destination panel”. Understand “panel” or “destination” or “display” as the shuttle-dest-panel.

Some shuttle-seats are an enterable supporter in the Shuttle Cabin. “Rows of battered seats fill the cabin.” The description of the shuttle-seats is “Moulded crash seats with fraying harnesses. The cushioning has long since compressed to nothing. Graffiti is scratched into the armrests in a dozen languages.” The printed name of the shuttle-seats is “seats”. Understand “seats” or “seat” or “chair” or “harness” as the shuttle-seats.

The shuttle-porthole is scenery in the Shuttle Cabin. The description of the shuttle-porthole is “A small oval viewport, scratched and cloudy. Through it you can see whatever is outside — berth bay lights, the black of space, or the burning curve of a planetary atmosphere.” The printed name of the shuttle-porthole is “porthole”. Understand “porthole” or “window” or “viewport” as the shuttle-porthole.

Chapter 2 - Shuttle Boarding

Boarding-shuttle is an action applying to nothing. Understand “board shuttle” or “enter shuttle” or “get in shuttle” as boarding-shuttle.

Check boarding-shuttle:
	if the player is in the Shuttle Cabin, say “You're already aboard.” instead;
	if the player is not in the Shuttle Berth Bay, say “There's no shuttle to board here.” instead.

Carry out boarding-shuttle:
	say “You feed creds into the ticket kiosk and receive a flimsy boarding pass. Gate 4 — the Aeteria run. The shuttle is a boxy workhorse, its hull scorched from atmospheric entries. You duck through the hatch and find a seat.”;
	now the player is in the Shuttle Cabin.

Chapter 3 - Shuttle Destinations

Shuttle-travelling is an action applying to one topic. Understand “select [text]” or “travel to [text]” or “choose [text]” as shuttle-travelling when the player is in the Shuttle Cabin.

Check shuttle-travelling:
	if the player is not in the Shuttle Cabin, say “You're not in a shuttle.” instead.

Carry out shuttle-travelling:
	if the topic understood matches “praxis/station/return”:
		say “The shuttle detaches from its berth, maneuvers briefly, and docks again two berths over. You've gone nowhere. The hatch opens onto the familiar berth bay.”;
		now the player is in the Shuttle Berth Bay;
	else if the topic understood matches “aeteria”:
		say “The hatch seals. The shuttle detaches with a clang of released docking clamps and a kick of maneuvering thrusters. Through the porthole, Praxis Station falls away — a dark mass of metal against the impossible light of the Maw.[paragraph break]The main engines fire. You are pressed into your seat for twenty minutes as the shuttle burns toward Aeteria. The planet grows from a bright point to a disc to a wall of brown and amber cloud — city-light visible even through the atmosphere, whole continents glowing with the fever of civilization.[paragraph break]The shuttle slots into orbital traffic and docks with the Halon Orbital Tether. The hatch opens onto the tether station.”;
		now the player is in the Halon Tether Station;
	else:
		say “The panel blinks: DESTINATION NOT RECOGNIZED. Available routes: PRAXIS STATION, AETERIA.”

Part 5 - Aeteria

Chapter 1 - The Halon Orbital Tether

The Halon Tether Station is a room. The description of the Halon Tether Station is “A vast ring-shaped station wrapped around the equatorial orbital tether — a carbon-nanotube cable stretching from geostationary orbit down to the planet's surface, visible through the observation windows as a dark line vanishing into the cloud layer below. The station thrums with traffic: passengers, cargo, military. Imperial Ryftren banners hang from the ceiling — crimson and black, the coiled serpent sigil watching from every surface.[paragraph break]Two descent options are posted on the main concourse board. The shuttle berth is back to the west. The cord loading bay is to the north. The express capsule terminal is to the east.”

The tether-banners are scenery in the Halon Tether Station. The description of the tether-banners is “Crimson and black — the colors of the Ryftren Empire. The coiled serpent sigil is embroidered in gold thread on each banner. Some are faded, some fresh. The Empire likes to remind you whose air you're breathing.” The printed name of the tether-banners is “Imperial banners”. Understand “banners” or “banner” or “imperial” or “crimson” or “serpent” or “sigil” or “ryftren” as the tether-banners.

The tether-cable-view is scenery in the Halon Tether Station. The description of the tether-cable-view is “The orbital tether itself — a cable of braided carbon nanotubes, two meters in diameter, stretching from this station down through sixty thousand kilometers of atmosphere to an anchor point on the surface. It is the spine of Aeteria's commerce, the thread that ties orbit to ground. Cargo pods and personnel capsules crawl along it like beads on a wire.” The printed name of the tether-cable-view is “orbital tether”. Understand “tether” or “cable” or “nanotube” or “line” as the tether-cable-view.

The tether-concourse-board is a display-screen in the Halon Tether Station. The description of the tether-concourse-board is “DESCENT OPTIONS — AETERIA SURFACE:[line break][line break]  THE CORD (North) .... 45 MIN .... 5 CRED[line break]    Industrial descent. Reentry suit provided.[line break]    Arrival: The Cauldron, Salvage Processing[line break][line break]  EXPRESS CAPSULE (East) .... 12 MIN .... 80 CRED[line break]    Pressurized capsule. Climate controlled.[line break]    Arrival: The Cauldron, Passenger Terminal[line break][line break]NOTICE: All off-world arrivals processed through The Cauldron. Imperial transit documentation required.” The printed name of the tether-concourse-board is “concourse board”. Understand “board” or “concourse” or “descent” or “options” as the tether-concourse-board.

Instead of going west in the Halon Tether Station:
	say “You return through the docking arm to the shuttle berth. The hatch opens onto the familiar cabin.”;
	now the player is in the Shuttle Cabin.

Chapter 2 - The Cord

The Cord Loading Bay is a room. The Cord Loading Bay is north of the Halon Tether Station. The description of the Cord Loading Bay is “An industrial space that makes no pretense of comfort. The floor is grated metal, the walls bare hull plating. Racks of reentry suits line one wall — bulky, scorched things that look like they've survived more drops than their occupants. A loading gantry extends over the tether cable itself, where harness rigs dangle like nooses. Workers in coveralls prep the next batch of riders with bored efficiency.[paragraph break]A sign reads: CORD DESCENT — STRAP IN, SEAL UP, DON'T SCREAM. IT DOESN'T HELP.”

The reentry-suits are scenery in the Cord Loading Bay. The description of the reentry-suits is “Heavy ablative suits, each one a cocoon of heat-resistant polymer and crash gel. They're designed to survive atmospheric reentry while dangling from a tether cable at terminal velocity. The scorch marks on the outer shells tell you they work. The dents tell you the landing isn't gentle.” The printed name of the reentry-suits is “reentry suits”. Understand “suits” or “suit” or “reentry” or “ablative” as the reentry-suits.

The cord-harness-rigs are scenery in the Cord Loading Bay. The description of the cord-harness-rigs is “Harness assemblies that clip onto the tether cable. Each one holds a single suited rider. When released, they slide down the cable under gravity, the suit's ablative shell absorbing the heat of atmospheric friction. It's the cheapest way down — five creds — and exactly as dignified as it sounds.” The printed name of the cord-harness-rigs is “harness rigs”. Understand “harness” or “rigs” or “rig” or “gantry” or “noose” or “nooses” as the cord-harness-rigs.

The cord-workers are scenery in the Cord Loading Bay. The description of the cord-workers is “Tether workers in grease-stained coveralls, moving with the mechanical efficiency of people who do this a hundred times a day. They check suit seals, clip harnesses, and shove riders off the gantry without ceremony. One of them has HAVE A NICE FALL stenciled on the back of his jacket.” The printed name of the cord-workers is “tether workers”. Understand “workers” or “crew” or “tether workers” as the cord-workers.

Riding-the-cord is an action applying to nothing. Understand “ride cord” or “take cord” or “ride the cord” or “strap in” or “descend” as riding-the-cord when the player is in the Cord Loading Bay.

Carry out riding-the-cord:
	say “A worker shoves you into a reentry suit without asking your size. The suit seals around you with a hiss — suddenly you're breathing canned air and seeing the world through a scratched visor. They clip your harness to the cable, run a perfunctory seal check, and give you a thumbs-up.[paragraph break]Then they push you off the gantry.[paragraph break]The first ten seconds are silence and weightlessness. Then atmosphere hits — a howl of friction that builds to a roar, the suit's ablative shell glowing cherry-red at the edges of your vision. You're falling at terminal velocity down a cable that stretches to infinity below you, wrapped in a burning cocoon, and there is nothing to do but endure it.[paragraph break]Forty-five minutes of controlled descent. The roar fades to a whistle, the glow dies, and suddenly there is sky — brown, hazy, choked with smog and city-light. The cable enters the roof of a massive structure and your harness brakes engage with a brutal jerk. You slam to a stop on a receiving platform, suit steaming.[paragraph break]Welcome to The Cauldron.”;
	now the player is in the Cord Receiving Platform.

Chapter 3 - The Express Capsule

The Express Capsule Terminal is a room. The Express Capsule Terminal is east of the Halon Tether Station. The description of the Express Capsule Terminal is “A cleaner space than the cord bay — actual walls, actual lighting, a waiting area with seats that have cushions. The express capsules are visible through a glass partition: sleek ovoid pods that ride the tether cable in pressurized comfort. An attendant in an Imperial transit uniform stands by the boarding gate. Screens display descent schedules and weather conditions on the surface below.”

The express-capsules-view is scenery in the Express Capsule Terminal. The description of the express-capsules-view is “Pressurized descent pods, each seating four. They're smooth, white, and look almost medical — like eggs designed by engineers who'd never experienced joy. But they're climate-controlled, pressurized, and don't require you to be set on fire during descent. Eighty creds well spent.” The printed name of the express-capsules-view is “express capsules”. Understand “capsules” or “capsule” or “pods” or “pod” or “express” as the express-capsules-view.

The capsule-attendant is a person in the Express Capsule Terminal. The description of the capsule-attendant is “A young man in the grey-and-crimson uniform of Imperial Transit. He has the practiced smile of someone trained to be polite to people he considers beneath him. His name badge reads TOVAR.” The printed name of the capsule-attendant is “attendant”. Understand “attendant” or “tovar” or “man” as the capsule-attendant.

Instead of talking to the capsule-attendant, say “'Express capsule to the surface? Eighty creds. Twelve minutes. Arrive at the Cauldron passenger terminal like a civilized being.' He gestures toward the boarding gate with a gloved hand.”

The capsule-boarding-gate is scenery in the Express Capsule Terminal. The description of the capsule-boarding-gate is “A glass-and-steel gate with a cred-reader mounted on the post. Feed it eighty creds, the gate opens, you walk to the capsule. Simple as commerce.” The printed name of the capsule-boarding-gate is “boarding gate”. Understand “gate” or “boarding” or “reader” or “cred” as the capsule-boarding-gate.

Taking-capsule is an action applying to nothing. Understand “take capsule” or “board capsule” or “ride capsule” or “take express” or “enter capsule” as taking-capsule when the player is in the Express Capsule Terminal.

Carry out taking-capsule:
	say “You feed eighty creds into the gate reader. It chirps approval and the gate slides open. You walk through a short boarding tunnel into the capsule — four seats, soft lighting, a faint hum of environmental systems. The hatch seals behind you.[paragraph break]The capsule detaches from the terminal and begins its descent. Through the viewport, the curve of Aeteria swells to fill the world — a planet-city, every landmass a single unbroken sprawl of towers and industry, the oceans grey with thermal runoff. The cloud layer approaches and swallows you. Twelve minutes of smooth, pressurized descent through brown murk.[paragraph break]The capsule docks with a gentle thud. The hatch opens onto processed air and institutional lighting.”;
	now the player is in the Capsule Arrival Hall.

Part 6 - The Cauldron

Chapter 1 - Cord Arrival

The Cord Receiving Platform is a room. The description of the Cord Receiving Platform is “A scorched industrial platform deep in the guts of The Cauldron — the geodesic-domed processing facility that floats on repulsor columns above Aeteria's sprawl. The platform reeks of ablative polymer and ozone. Spent reentry suits are piled in bins by workers who strip and rack them for the next batch of riders. The ceiling is a lattice of tether cable housings and brake mechanisms. Everything is soot-blackened.[paragraph break]A conveyor path leads south into the salvage processing queue — the bureaucratic gauntlet all cord riders must endure.”

The spent-suits are scenery in the Cord Receiving Platform. The description of the spent-suits is “Piles of used reentry suits, still steaming from descent. Workers strip them with practiced hands — pulling the ablative shells, checking the gel liners, racking them for the next poor soul. The suits are recycled until they fail, and then they're recycled some more.” The printed name of the spent-suits is “spent suits”. Understand “suits” or “suit” or “spent” or “bins” as the spent-suits.

The platform-workers are scenery in the Cord Receiving Platform. The description of the platform-workers is “Cauldron workers in heat-resistant coveralls, moving through the steam and stink with total indifference. They've seen a thousand dazed cord riders stumble off the platform. You're not special.” The printed name of the platform-workers is “platform workers”. Understand “workers” or “crew” as the platform-workers.

Chapter 2 - Salvage Processing

The Salvage Processing Queue is a room. The Salvage Processing Queue is south of the Cord Receiving Platform. The description of the Salvage Processing Queue is “A long, low-ceilinged corridor lined with processing booths — the bureaucratic intake for cord arrivals. The queue shuffles forward at a crawl. Imperial clerks behind reinforced glass check documentation, scan biometrics, and stamp transit passes with mechanical indifference. The air is stale and hot. Overhead signs read: HAVE DOCUMENTATION READY. UNDOCUMENTED ARRIVALS WILL BE DETAINED.[paragraph break]The line moves south toward the Cauldron's main concourse.”

The processing-booths are scenery in the Salvage Processing Queue. The description of the processing-booths is “Reinforced glass windows with speak-through grilles. Behind each one, an Imperial clerk sits amid stacks of transit forms and blinking terminals. They process arrivals with the enthusiasm of people counting down the minutes to shift end.” The printed name of the processing-booths is “processing booths”. Understand “booths” or “booth” or “glass” or “clerk” or “clerks” or “window” as the processing-booths.

The queue-signs are scenery in the Salvage Processing Queue. The description of the queue-signs is “HAVE DOCUMENTATION READY. UNDOCUMENTED ARRIVALS WILL BE DETAINED. BRIBERY OF IMPERIAL OFFICIALS IS A CAPITAL OFFENSE. That last one has been defaced so many times they've welded a steel plate over part of it.” The printed name of the queue-signs is “signs”. Understand “signs” or “sign” or “overhead” as the queue-signs.

Chapter 3 - Capsule Arrival

The Capsule Arrival Hall is a room. The description of the Capsule Arrival Hall is “The express capsule terminal on the Cauldron side — cleaner and quieter than the cord intake, with actual tile floors and functioning air filtration. The capsule bay is to the north, the passenger processing hall to the south. Imperial Transit staff in pressed uniforms direct arrivals with crisp efficiency. It's still a processing facility, but one that pretends to have dignity.”

The arrival-staff are scenery in the Capsule Arrival Hall. The description of the arrival-staff is “Imperial Transit officers in grey-and-crimson. They check documentation with scanners rather than stamp pads, and address passengers as 'citizen' rather than 'next.' The pretense of civility that eighty creds buys you.” The printed name of the arrival-staff is “transit staff”. Understand “staff” or “officers” or “transit” as the arrival-staff.

Chapter 4 - Passenger Processing

The Passenger Processing Hall is a room. The Passenger Processing Hall is south of the Capsule Arrival Hall. The description of the Passenger Processing Hall is “A wide hall with biometric gates and document scanners — the capsule arrivals' version of intake. Faster, cleaner, and staffed by people who make eye contact. Express arrivals get processed in minutes rather than hours. The main concourse is to the south.”

The biometric-gates are scenery in the Passenger Processing Hall. The description of the biometric-gates is “Sleek archways that scan retina, palm, and gait as you walk through. If your documentation checks out, the far side opens. If not — well, there are armed guards standing nearby for a reason.” The printed name of the biometric-gates is “biometric gates”. Understand “gates” or “biometric” or “scanners” or “archway” or “archways” as the biometric-gates.

Chapter 5 - The Main Concourse

The Cauldron Concourse is a room. The Cauldron Concourse is south of the Salvage Processing Queue. The Cauldron Concourse is west of the Passenger Processing Hall. The description of the Cauldron Concourse is “The central hub of The Cauldron — a vast circular space beneath the geodesic dome. The dome itself is a lattice of hexagonal transpex panels, and through them you can see the brown Aeterian sky and, far below, the sprawl — an infinite carpet of towers and smog stretching to every horizon. The Cauldron floats above it all on repulsor columns, a processing station hanging in the sky like a bureaucratic cloud.[paragraph break]The concourse is ringed with vendors, currency exchanges, and Imperial information kiosks. Arrivals from the cord processing queue filter in from the north. Capsule arrivals enter from the east. The exit chutes to the city are to the south.”

The geodesic-dome is scenery in the Cauldron Concourse. The description of the geodesic-dome is “Thousands of hexagonal transpex panels held together by a steel lattice — the Cauldron's signature dome. Through it, the sky is a permanent brown haze. You can see the repulsor columns extending downward from the Cauldron's base, shimmering pillars of anti-grav energy holding the entire structure aloft. Below, the city stretches forever.” The printed name of the geodesic-dome is “dome”. Understand “dome” or “geodesic” or “panels” or “transpex” or “lattice” or “hexagonal” as the geodesic-dome.

The repulsor-columns-view is scenery in the Cauldron Concourse. The description of the repulsor-columns-view is “Visible through the dome's lower panels — shimmering columns of anti-gravitational energy, each one fifty meters in diameter, extending from the Cauldron's underside down into the smog below. They hum at a frequency you feel in your teeth. If they failed, The Cauldron would drop like a stone into the sprawl. Best not to think about that.” The printed name of the repulsor-columns-view is “repulsor columns”. Understand “repulsor” or “columns” or “anti-grav” or “pillars” as the repulsor-columns-view.

The sprawl-view is scenery in the Cauldron Concourse. The description of the sprawl-view is “The city below. Aeteria — the capital world of the Ryftren Empire, every square kilometer built over, built up, built under. From this height you can see the tower forests of the commercial districts, the industrial flats belching smoke, and the tangled mass of The Cage — the immigrant quarter where new arrivals are funneled. It looks like an infection spreading between the larger structures.” The printed name of the sprawl-view is “the sprawl”. Understand “sprawl” or “city” or “towers” or “below” as the sprawl-view.

The concourse-vendors are scenery in the Cauldron Concourse. The description of the concourse-vendors is “Currency exchanges offering terrible rates, food stalls selling packaged rations at markup, shops hawking translation implants and local maps loaded onto disposable data chips. Everything priced for people with no choice.” The printed name of the concourse-vendors is “vendors”. Understand “vendors” or “shops” or “exchange” or “kiosks” or “stalls” as the concourse-vendors.

Chapter 6 - The Exit Chutes

The Exit Chute Bay is a room. The Exit Chute Bay is south of the Cauldron Concourse. The description of the Exit Chute Bay is “The exit from The Cauldron and the last stop before the city proper. A row of circular chute openings line the far wall, each one a meter in diameter — nanopolymer drop tubes that extend from the Cauldron's underside down into The Cage below. A chute operator sits in a booth, waving arrivals forward in groups. Signs in a dozen languages read: ENTRY IS FINAL. NO RE-ASCENT FROM THIS POINT.[paragraph break]Through the transparent floor panels, you can see the drop — hundreds of meters of open air between the Cauldron and the rooftops of The Cage. The nanopolymer tubes sway gently in the wind.”

The drop-chutes are scenery in the Exit Chute Bay. The description of the drop-chutes is “Circular openings in the wall, each one the mouth of a flexible nanopolymer tube. The tubes extend downward through the Cauldron's base and into the open air, delivering passengers to receiving stations in The Cage below. The interior of each tube glistens with friction-dampening gel — the only thing between you and a fatal drop.” The printed name of the drop-chutes is “drop chutes”. Understand “chutes” or “chute” or “tube” or “tubes” or “openings” or “nanopolymer” as the drop-chutes.

The chute-operator is a person in the Exit Chute Bay. The description of the chute-operator is “A heavyset woman in a stained Cauldron uniform, sitting in a booth with the air of someone who has watched thousands of people slide into tubes and does not care about any of them. She waves groups forward with a gloved hand. Her booth has a mug, a sandwich, and a counter that reads: 847,203 — presumably the number of people she's dropped.” The printed name of the chute-operator is “chute operator”. Understand “operator” or “woman” or “attendant” as the chute-operator.

Instead of talking to the chute-operator, say “'Step up, feet first, arms crossed. Gel does the rest. Next.' She's already looking past you.”

The transparent-floor is scenery in the Exit Chute Bay. The description of the transparent-floor is “Transparent panels set into the floor, offering a vertiginous view straight down. The repulsor columns shimmer nearby. Below, the rooftops of The Cage are a jumbled mass of interconnected towers, linked by bridges, cables, and structures that defy architectural description. The nanopolymer tubes dangle into the mess like tentacles.” The printed name of the transparent-floor is “transparent floor”. Understand “floor” or “transparent” or “panels” or “view” as the transparent-floor.

Entering-chute is an action applying to nothing. Understand “enter chute” or “use chute” or “slide” or “drop” or “descend” or “go down” as entering-chute when the player is in the Exit Chute Bay.

Carry out entering-chute:
	say “The operator waves you forward. You step up to a chute opening and look down — a glistening nanopolymer tube descending into brown murk. Your stomach does something complicated.[paragraph break]'Feet first. Arms crossed. Go.'[paragraph break]You step in.[paragraph break]The gel catches you immediately — warm, viscous, clinging. You slide. Slowly at first, then faster as the tube angles downward. The Cauldron's underside passes by above you, then open air — you're falling through a translucent tube suspended in the sky, the city sprawl wheeling far below, the repulsor columns humming nearby. The gel controls your speed, slowing you, speeding you, guiding you through curves and switchbacks in the tube's path.[paragraph break]The tube enters a building. Darkness, then harsh light. The gel deposits you — stumbling, coated in residue — onto a receiving platform in The Cage.”;
	now the player is in the Cage Drop Station.

Part 7 - The Cage

Chapter 1 - Drop Station

The Cage Drop Station is a room. The description of the Cage Drop Station is “A grimy receiving platform in the upper levels of The Cage — Aeteria's immigrant quarter. The nanopolymer tube exits above you, dripping gel residue onto already-slick floors. A dozen other new arrivals stand around looking dazed, wiping gel from their clothes. The air is thick, humid, and smells of too many people in too little space.[paragraph break]The platform opens onto a corridor to the south. Gel-stained signs on the walls point the way to transit, housing registration, and — ominously — Imperial Processing.”

The gel-residue is scenery in the Cage Drop Station. The description of the gel-residue is “The friction-dampening gel from the drop chute. It's warm, faintly luminescent, and clings to everything. Other arrivals are trying to scrape it off their clothes with varying success. It'll dry and flake off in an hour. Until then, you're marked as fresh meat.” The printed name of the gel-residue is “gel residue”. Understand “gel” or “residue” or “slime” as the gel-residue.

The other-arrivals are scenery in the Cage Drop Station. The description of the other-arrivals is “A dozen people in various states of gel-coated disorientation. Migrant workers, refugees, economic opportunists, the desperate. They come from a hundred worlds to the capital of an empire that doesn't want them, processed through the Cauldron and dropped into the Cage like coins into a slot machine.” The printed name of the other-arrivals is “other arrivals”. Understand “arrivals” or “people” or “migrants” or “refugees” as the other-arrivals.

Chapter 2 - Cage Upper Corridor

The Cage Upper Corridor is a room. The Cage Upper Corridor is south of the Cage Drop Station. The description of the Cage Upper Corridor is “A corridor that was probably a hallway between offices once, before The Cage grew around it like scar tissue. The walls are a patchwork of original building material — poured concrete — and improvised additions: sheet metal, polymer sheeting, salvaged hull plating from decommissioned ships. The ceiling is low, the lighting uneven — flickering strips interspersed with bare bulbs and the occasional bioluminescent panel. The corridor heads south toward a junction. Doorways branch off on both sides, covered with curtains and makeshift doors.”

The cage-walls are scenery in the Cage Upper Corridor. The description of the cage-walls is “The geology of The Cage: layers of construction spanning decades. The original poured concrete of whatever this building was. Sheet metal additions welded over gaps. Polymer sheeting stapled over that. Wiring and plumbing running exposed over everything. It's not architecture — it's accretion.” The printed name of the cage-walls is “walls”. Understand “walls” or “wall” or “metal” or “concrete” or “polymer” or “sheeting” as the cage-walls.

The cage-doorways are scenery in the Cage Upper Corridor. The description of the cage-doorways is “Doorways into residential spaces — if you can call them that. Through gaps in the curtains you catch glimpses of lives compressed into minimum volume: bunks stacked three high, cooking elements balanced on crates, children doing homework by the light of data screens. The Cage is where Aeteria puts the people it needs but doesn't want to see.” The printed name of the cage-doorways is “doorways”. Understand “doorways” or “doors” or “curtains” as the cage-doorways.

Chapter 3 - Cage Junction

The Cage Junction is a room. The Cage Junction is south of the Cage Upper Corridor. The description of the Cage Junction is “A junction where three corridors meet and a stairwell drops down through a gap in the floor — the original building's fire stairs, now the main vertical artery through this section of The Cage. The space has been colonized by vendors: a noodle cart, a woman selling secondhand clothes from a blanket, a man with a folding table covered in data chips and translation modules. The noise is constant — voices, music, the clang of construction somewhere nearby.[paragraph break]Corridors lead north, east, and west. The stairwell descends.”

The cage-noodle-cart is scenery in the Cage Junction. The description of the cage-noodle-cart is “A battered cart with a built-in heating element, tended by an old man who doesn't look up. The noodles are cheap, hot, and — based on the queue — the best thing available. The smell is almost enough to make you forget where you are.” The printed name of the cage-noodle-cart is “noodle cart”. Understand “noodle” or “cart” or “noodles” or “food” as the cage-noodle-cart.

The cage-vendors are scenery in the Cage Junction. The description of the cage-vendors is “The informal economy of The Cage. Secondhand clothes, data chips loaded with local maps and translation software, cheap comm units, forged documents of varying quality. Everything you need to survive in a city that doesn't want you, sold by people in the same situation.” The printed name of the cage-vendors is “vendors”. Understand “vendors” or “woman” or “man” or “table” or “clothes” or “chips” as the cage-vendors.

The cage-stairwell is scenery in the Cage Junction. The description of the cage-stairwell is “A gap in the floor where the original building's fire stairs descend into the levels below. The stairwell is narrow and perpetually crowded — the main route between the upper Cage and the lower levels, where things get denser, darker, and cheaper. Graffiti covers every surface. Someone has painted WELCOME TO THE BOTTOM on the wall at the top of the stairs.” The printed name of the cage-stairwell is “stairwell”. Understand “stairwell” or “stairs” or “gap” or “steps” as the cage-stairwell.

The Cage East Corridor is a room. The Cage East Corridor is east of the Cage Junction. The description of the Cage East Corridor is “A corridor heading east, narrower than the junction. The buildings here have been connected by improvised bridges and tunnels at multiple levels — through gaps in the walls you can see the dizzying vertical depth of The Cage, other corridors and walkways visible above and below, connected by ladders, ramps, and rope bridges. It's not one building. It's dozens of skyscrapers fused together into a single organism.”

The cage-bridges are scenery in the Cage East Corridor. The description of the cage-bridges is “Through gaps in the wall, you can see the internal structure of The Cage: walkways spanning the gaps between buildings, rope bridges swaying over drops of twenty or thirty floors, ladders bolted to walls, improvised ramps connecting levels that were never meant to connect. People move through this vertical maze with the confidence of lifelong residents. You move through it with the confidence of someone who might fall.” The printed name of the cage-bridges is “bridges”. Understand “bridges” or “bridge” or “walkways” or “ladders” or “ramps” or “rope” as the cage-bridges.

The Cage West Corridor is a room. The Cage West Corridor is west of the Cage Junction. The description of the Cage West Corridor is “A corridor heading west, toward the outer wall of this particular tower. A window — actual glass, cracked but intact — offers a view outside The Cage. Beyond it, the city of Aeteria stretches in every direction: tower blocks, industrial stacks, transit lines, the distant gleam of the commercial districts. And above, barely visible through the smog, the dark disc of The Cauldron floating on its repulsor columns.”

The cage-window is scenery in the Cage West Corridor. The description of the cage-window is “Cracked glass, smeared with grime, but it lets in actual daylight — a rare commodity in The Cage. Through it you can see the exterior of the surrounding towers, connected by skyways and cable bridges. The streets far below are invisible under layers of construction and overgrowth. The Cage has no ground floor — it starts at the thirtieth story of the original buildings and goes up from there.” The printed name of the cage-window is “window”. Understand “window” or “glass” or “view” as the cage-window.

Part 8 - Death and What Comes After

Chapter 1 - Dangerous Places on Praxis

Section 1 - The Breached Section

The Breached Section is a room. The Breached Section is west of Warren West Corridor. The description of the Breached Section is “You shouldn't be here.[paragraph break]The welding on the bulkhead was weaker than it looked. Beyond it, the corridor continues for ten meters before ending in nothing — a ragged hole where the hull was torn open. Stars are visible through the breach. The emergency containment field flickers, thin as tissue, the only thing between the corridor's atmosphere and the vacuum beyond. Red warning lights strobe. A klaxon screams. The field is failing.”

Instead of going west in Warren West Corridor:
	say “You push against the sealed bulkhead. The welding gives — it was weaker than it looked, the metal fatigued. The bulkhead grinds open six inches. You squeeze through.”;
	now the player is in the Breached Section.

The hull-breach is scenery in the Breached Section. The description of the hull-breach is “A wound in the station's skin. Through it — nothing. Vacuum. Stars. The slow drift of debris. The containment field across the opening sparks and gutters like a candle in a draft.”

The failing-field is scenery in the Breached Section. The description of the failing-field is “A shimmer of energy across the breach, barely visible. It's failing. You can feel the air pressure dropping — your ears pop, your eyes water. You have seconds.” The printed name of the failing-field is “containment field”. Understand “field” or “containment” or “shimmer” or “energy” as the failing-field.

Every turn when the player is in the Breached Section:
	say “The containment field gutters—[paragraph break]”;
	say “It fails.[paragraph break]The air goes first. Ripped out through the breach in a single explosive exhalation that takes everything not bolted down — including you. You tumble through the gap, spinning, the station receding. Your lungs empty. Frost forms on your skin. The cold is beyond cold — it's an absence of everything.[paragraph break]The last thing you see is the Maw, turning slowly in the dark.[paragraph break]”;
	end the story saying “You have died in the vacuum of space”.

Section 2 - Slip 1A Berth Doors

The slip-1a-berth-doors are scenery in Docking Slip 1A. The description of the slip-1a-berth-doors is “The outer berth doors — massive panels that open to allow ships in and out. They're sealed. A manual release is visible on the wall nearby, behind a safety cage. The cage has been pried open. Someone was here before you.” The printed name of the slip-1a-berth-doors is “berth doors”. Understand “berth doors” or “doors” or “outer” or “panels” as the slip-1a-berth-doors.

The berth-door-release is a thing in Docking Slip 1A. The description of the berth-door-release is “A manual door release — a heavy lever behind a safety cage that's already been forced open. Pulling it would open the berth doors to space. There is no reason to do this. A hand-written sign taped to the lever reads: DON'T.” The printed name of the berth-door-release is “manual release”. Understand “release” or “lever” or “manual” or “safety cage” as the berth-door-release.

Pulling-lever is an action applying to one visible thing. Understand “pull [something]” or “use [something]” as pulling-lever.

Instead of pulling-lever the berth-door-release:
	say “You pull the lever.[paragraph break]For a moment, nothing. Then a deep mechanical groan as the berth doors begin to separate. A line of stars appears between them, widening. The air starts to move — gently at first, then with purpose, then with violence.[paragraph break]The doors are open. Space is right there. And you — in zero gravity, with nothing to hold onto — are moving toward it.[paragraph break]The last sound you hear is the emergency klaxon, muted to nothing as the air runs out.”;
	end the story saying “The void takes what it is given”.

Section 3 - The Derelict

The Derelict Interior is a room. The Derelict Interior is east of Docking Slip 3C. The description of the Derelict Interior is “You shouldn't have come in here.[paragraph break]The airlock was unsealed from inside. Beyond it, the ship is dark and cold — emergency lighting only, red strips along the floor casting everything in the color of old blood. The air is thin, stale, wrong. Frost covers every surface. Something happened here — the crew quarters are empty, personal effects scattered, a meal half-eaten on the galley table, frozen solid.[paragraph break]And there is a sound. A ticking. Rhythmic. Coming from deeper in the ship.”

The derelict-frost is scenery in the Derelict Interior. The description of the derelict-frost is “Ice crystals coating every surface — walls, consoles, the frozen meal on the table. But the patterns are wrong. The frost forms in spirals, in fractals, in shapes that almost look deliberate. Like something breathed on the walls and the breath froze into language.” The printed name of the derelict-frost is “frost”. Understand “frost” or “ice” or “crystals” or “patterns” as the derelict-frost.

The frozen-meal is scenery in the Derelict Interior. The description of the frozen-meal is “A bowl of something that was once food, frozen mid-steam. Utensils laid down as if the eater stepped away for a moment. That moment was a long time ago.” The printed name of the frozen-meal is “frozen meal”. Understand “meal” or “food” or “bowl” or “table” or “galley” as the frozen-meal.

The derelict-ticking is scenery in the Derelict Interior. The description of the derelict-ticking is “A rhythmic sound from deeper in the hull. Tick. Tick. Tick. Regular as a heartbeat. It could be a cooling system. It could be a timing mechanism. It could be something else entirely. You don't want to find out.” The printed name of the derelict-ticking is “ticking sound”. Understand “ticking” or “sound” or “tick” as the derelict-ticking.

Every turn when the player is in the Derelict Interior:
	say “The ticking stops.[paragraph break]In the silence that follows, you hear something else: a long, slow creak of metal, as if the ship is stretching. Then a crack — sharp, percussive — and the hull gives. Not slowly. All at once.[paragraph break]The ship breaks apart around you. The walls peel away like skin, and suddenly there is nothing between you and the void. You tumble through debris, through frozen air, through pieces of a ship that died a long time ago.[paragraph break]The last thing you see is the dark. The absolute, depthless dark of deep space.”;
	end the story saying “Some ships keep their dead”.

Section 4 - The Maintenance Walkway

The Maintenance Walkway is a room. The Maintenance Walkway is down from the Cage Junction. The description of the Maintenance Walkway is “You descend the stairwell past the lowest inhabited level of The Cage, past warning signs and locked gates that someone has already cut through, into a maintenance shaft that runs along the exterior of the tower cluster. A narrow catwalk extends over an open gap — below it, through grated flooring, you can see the true distance to the ground. Hundreds of meters of open air. Far below, the streets of the lower city. Far above, the brown sky.[paragraph break]The catwalk is corroded. The bolts holding it to the wall are rusted through. Every step produces a groan of protesting metal.[paragraph break]There is something strange about the light here. A faint shimmer in the air below, as though the space beneath the catwalk is bending.”

The corroded-catwalk is scenery in the Maintenance Walkway. The description of the corroded-catwalk is “A metal grating walkway bolted to the tower's exterior wall. The bolts are rusted, the grating warped. It was not meant to be walked on — it was meant to hold cable runs and pipe housings. The weight of a person is more than it was designed for.” The printed name of the corroded-catwalk is “catwalk”. Understand “catwalk” or “walkway” or “grating” or “bolts” or “metal” as the corroded-catwalk.

The strange-shimmer is scenery in the Maintenance Walkway. The description of the strange-shimmer is “A distortion in the air below the catwalk. Not heat haze — something else. The light bends around an invisible point, and if you stare long enough, the city below seems to stretch and compress, as though viewed through a lens made of something that isn't glass. Your eyes water. There is a faint sound at the edge of hearing — a hum that isn't a hum, a note that isn't a note.” The printed name of the strange-shimmer is “shimmer”. Understand “shimmer” or “light” or “distortion” or “strange” or “bend” or “bending” as the strange-shimmer.

Every turn when the player is in the Maintenance Walkway:
	say “The catwalk groans.[paragraph break]You feel it give — not all at once, but in stages. A bolt shears. Then another. The metal tilts beneath your feet. You grab for the wall but there is nothing to hold.[paragraph break]The catwalk folds and you fall.[paragraph break]”;
	now the player is in the Falling.

Chapter 2 - The Fall

The Falling is a room. The description of the Falling is “You are falling.[paragraph break]The city rushes upward — towers, bridges, cables, the underside of The Cage receding above you. Wind screams. Your stomach is somewhere you left behind.[paragraph break]But something is wrong. You should be falling toward the ground. Instead, the ground is pulling away. The buildings are stretching, elongating, their edges smearing like wet paint. The sky above is darkening — not to night, but to something else. Something deeper than night.[paragraph break]The shimmer you saw from the catwalk is everywhere now. The air itself is bending. And you are falling not down but through — through the space between things, through a crack in the architecture of reality that was hiding underneath a maintenance walkway in the poorest quarter of a city that doesn't care about you.[paragraph break]You fall, and the world falls with you.”

Instead of doing anything in the Falling:
	now the player is in the Dissolution.

The Dissolution is a room. The description of the Dissolution is “The fall changes.[paragraph break]The city is gone. The sky is gone. There is only motion and light — light that bends and folds and turns back on itself. You are accelerating, or the universe is accelerating around you — the distinction has ceased to matter.[paragraph break]There is a sound. A single sustained note, impossibly complex — a violin being drawn forward and backward at the same time, every string vibrating in sympathy with something vast and unseen. The note contains harmonics you have never heard, frequencies that register not in your ears but in your marrow, in the spaces between your cells.[paragraph break]There is a smell. It comes from nowhere and it is impossible: the scent of something dead — ancient, desiccated, the smell of tombs and dry bone — and simultaneously the smell of something violently alive — blood and growth and green things splitting stone. Death and birth occupying the same breath.[paragraph break]Your body is dissolving. You can feel it happening — your edges softening, your boundaries becoming suggestions. Your fingers are translucent. You can see through your hands to the light beyond. But there is no pain. Only a sense of expansion, as though you were always too small for yourself and are finally being allowed to fill the space you were meant to occupy.[paragraph break]And then you are not dissolving. You are reassembling. The light gathers. The note resolves.[paragraph break]You are somewhere.”

Instead of doing anything in the Dissolution:
	now the player is in the Threshold.

Chapter 3 - The Other Side

The Threshold is a room. The description of the Threshold is “You are lying on something warm.[paragraph break]Not warm like metal or stone warmed by sun. Warm like skin. The surface beneath you yields slightly when you move — resilient, organic, alive. You can feel a pulse through it. Slow. Vast. The heartbeat of something so large that you are a mote on its surface.[paragraph break]You open your eyes.[paragraph break]The sky is red. Not the red of sunset — a deep, arterial red, as though the atmosphere itself is suffused with blood. There are no clouds. Instead, the sky is threaded with structures that look like veins — branching, pulsing, carrying something luminous from horizon to horizon.[paragraph break]The ground is flesh. There is no other word for it. A landscape of living tissue stretching in every direction — ridged and folded like the surface of a brain, pink and glistening where it catches the red light, darker in the valleys between the folds. In the distance, structures rise from the surface: towers of bone and cartilage, wrapped in membranes that flutter in a wind you cannot feel.[paragraph break]The air tastes of copper and salt. The smell is organic — not rot, but process. The smell of a body working, of cells dividing, of wounds closing.[paragraph break]You are alive. You should not be. You don't know where you are.[paragraph break]You don't know what you are standing on.[paragraph break]But it knows you are here. You can feel it in the pulse beneath your feet — a subtle shift in rhythm, the way a sleeper stirs when touched.”

The living-ground is scenery in the Threshold. The description of the living-ground is “The surface you stand on. It is tissue — organic, warm, yielding. The texture is smooth in places and ridged in others, like scar tissue or the folds of a brain. When you press your hand to it, the pulse is unmistakable: a deep, slow rhythm, vast and steady. The ground is breathing. You are standing on something that is breathing.” The printed name of the living-ground is “ground”. Understand “ground” or “floor” or “surface” or “flesh” or “tissue” or “skin” as the living-ground.

The red-sky is scenery in the Threshold. The description of the red-sky is “A sky the color of arterial blood. No sun — the light seems to come from everywhere, diffuse and warm. The veins that thread the sky are translucent, and the luminous substance moving through them pulses in time with the ground beneath your feet. The same heartbeat. The sky and the ground are part of the same organism.” The printed name of the red-sky is “sky”. Understand “sky” or “red” or “veins” or “light” as the red-sky.

The bone-towers are scenery in the Threshold. The description of the bone-towers is “Structures on the horizon — spires of what looks like bone, ivory-white against the red sky. They rise from the flesh-ground like ribs from a chest, curved and tapering. Membranes stretch between some of them, translucent sheets of tissue that catch the light and flutter. They could be natural formations. They could be architecture. Here, the distinction may not exist.” The printed name of the bone-towers is “towers”. Understand “towers” or “bone” or “spires” or “structures” or “cartilage” or “membranes” as the bone-towers.

The Flesh Ridge is a room. The Flesh Ridge is east of the Threshold. The description of the Flesh Ridge is “A raised fold in the living landscape — a ridge of tissue three meters high, warm to the touch, its surface networked with capillaries visible just beneath the skin. From the top, you can see further across this impossible terrain. The ground ripples away in every direction, folded and creased like crumpled velvet. The bone-towers are closer here. In a valley to the north, something moves — a shape, vast and slow, sliding beneath the surface like a whale under ice.[paragraph break]The air is heavier here. Thicker. Each breath coats the inside of your mouth with the taste of living iron.”

The ridge-capillaries are scenery in the Flesh Ridge. The description of the ridge-capillaries is “A web of fine vessels just beneath the translucent surface of the ridge. Dark fluid moves through them — not blood, or not only blood. It pulses with the same rhythm as everything else. When you place your palm flat against the surface, you can feel the fluid moving under your skin. It feels like it's trying to match your own heartbeat.” The printed name of the ridge-capillaries is “capillaries”. Understand “capillaries” or “vessels” or “veins” or “blood” as the ridge-capillaries.

The subsurface-shape is scenery in the Flesh Ridge. The description of the subsurface-shape is “In the valley below, something enormous moves beneath the surface of the flesh-ground. A shadow — long, tapering, slow. It displaces the tissue above it as it passes, creating a wave in the landscape like a mole tunneling through earth. It is hundreds of meters long. It does not surface. It does not acknowledge you. But you have the profound and certain sense that it is aware of you in the way that an ocean is aware of a swimmer.” The printed name of the subsurface-shape is “shape beneath the surface”. Understand “shape” or “shadow” or “whale” or “creature” or “thing” or “movement” as the subsurface-shape.

The Wound Valley is a room. The Wound Valley is north of the Flesh Ridge. The description of the Wound Valley is “A depression in the landscape where the tissue has split open — not torn, not injured, but opened deliberately, like lips parting. The interior of the wound is deeper red than the surface, glistening, and from its depths rises a warm updraft that smells of growth — of seeds splitting, of bones knitting, of cells remembering what they were supposed to become.[paragraph break]At the bottom of the wound, something glows. A light without source, pulsing with a rhythm faster than the great heartbeat of the ground. It is bright and it is warm and it is calling to you in a voice that is not sound.”

The wound-interior is scenery in the Wound Valley. The description of the wound-interior is “The inside of the opening. Layers of tissue visible in cross-section — surface skin, a substrate of something fibrous, deeper layers that are dense and dark and shot through with luminous threads. It looks like the inside of a body. It looks like a geological stratum. It looks like both, because here, biology and geology are the same discipline.” The printed name of the wound-interior is “wound”. Understand “wound” or “opening” or “split” or “lips” or “interior” as the wound-interior.

The calling-light is scenery in the Wound Valley. The description of the calling-light is “A glow from the depths of the wound. Not fire. Not phosphorescence. Something else — a light that seems to exist in more dimensions than three, that flickers not in space but in probability. Looking at it directly is difficult. Not painful — your eyes simply refuse to focus, as though the light exists at a frequency your visual cortex was not built to process.[paragraph break]It pulses. It calls. Not in words. In something older than words — in the electromagnetic language of cells, in the chemical grammar of hormones, in the deep syntax of DNA. Your body understands the call even if your mind does not.[paragraph break]Come closer, it says, in the language of your own biology.[paragraph break]Come closer.”

Part 9 - The Hidden Berth and the Slipstream

Chapter 1 - The Hidden Berth

The Hidden Berth is a room. The description of the Hidden Berth is “The passage behind the clamp housing opens into a space that shouldn't exist — a berth carved into the station's bones, hidden between hull layers, invisible to schematics and scanners alike. The walls are smooth dark metal, unmarked, absorbing light. No rust. No corrosion. No dust. Someone maintains this place.[paragraph break]A single vessel sits in the cradle: a capsule, sleek and featureless, its hull a material you don't recognize — it shifts color when you look at it from different angles, now black, now deep blue, now something that isn't a color at all. There are no docking clamps. The capsule simply floats, motionless, held by nothing visible.[paragraph break]The passage back to Slip 1A is behind you.”

Instead of going east in the Hidden Berth:
	say “You step back through the passage. The clamp housing slides shut behind you with a soft click.”;
	now the player is in Docking Slip 1A.

The slipstream-capsule is scenery in the Hidden Berth. The description of the slipstream-capsule is “Unlike any vessel you've seen. No seams, no rivets, no visible propulsion. The hull is a single continuous surface of something that drinks light and returns it changed. When you place your hand near it — not touching, just near — the air between your palm and the hull hums with static. The capsule knows you're here.” The printed name of the slipstream-capsule is “capsule”. Understand “capsule” or “vessel” or “ship” or “pod” or “slipstream” as the slipstream-capsule.

The berth-walls are scenery in the Hidden Berth. The description of the berth-walls is “Dark metal, seamless, absorbing light. No markings. No signage. No indication of who built this place or when. The walls feel warm to the touch, and if you press your ear to them, you can hear something — not the station hum, but something deeper, slower, older.” The printed name of the berth-walls is “walls”. Understand “walls” or “metal” or “dark” as the berth-walls.

Chapter 2 - Boarding the Slipstream Capsule

Boarding-slipstream is an action applying to nothing. Understand “board capsule” or “enter capsule” or “board” or “get in capsule” or “enter vessel” as boarding-slipstream when the player is in the Hidden Berth.

Carry out boarding-slipstream:
	say “You approach the capsule. Before you touch it, a seam appears in the hull — not opening, but dissolving, the material flowing apart like mercury. Beyond it, an interior that glows with soft, sourceless light. You step inside.[paragraph break]The hull reforms behind you. The interior is a single curved space — no seats, no controls, no instruments. Just smooth walls that pulse with a faint luminescence and, in the center, a pedestal of the same dark material with eight symbols etched into its surface, each one glowing a different color.[paragraph break]Amber. Crimson. Blue. White. Silver. Violet. Green. Gold.”;
	now the player is in the Slipstream Interior.

Chapter 3 - The Slipstream Interior

The Slipstream Interior is a room. The description of the Slipstream Interior is “The inside of the capsule. Smooth curved walls pulse with sourceless light. There are no windows, no controls, no visible machinery — only the pedestal at the center, bearing eight symbols arranged in a circle. Each one glows with its own light, waiting to be touched.[paragraph break]  AMBER — a glyph like layered stone, warm and steady.[line break]  CRIMSON — a glyph like a tongue of flame, flickering.[line break]  BLUE — a glyph like a cresting wave, fluid and shifting.[line break]  WHITE — a glyph like a forking bolt, sharp and bright.[line break]  SILVER — a glyph like a feather dissolving into wind.[line break]  VIOLET — a glyph like a pupil dilating in darkness.[line break]  GREEN — a glyph like a seed splitting open, urgent and alive.[line break]  GOLD — a glyph like a sphere collapsing inward, dense and heavy.[paragraph break]Type OUT to open the capsule and return to the berth.”

The slipstream-pedestal is scenery in the Slipstream Interior. The description of the slipstream-pedestal is “A column of dark material rising from the capsule floor to waist height. Eight symbols are etched into its flat upper surface in a circle, each glowing with inner light. They are not letters in any alphabet you know. They are older than alphabets — shapes that mean what they are, that communicate directly to something in you that predates language.” The printed name of the slipstream-pedestal is “pedestal”. Understand “pedestal” or “column” or “symbols” or “glyphs” as the slipstream-pedestal.

The amber-glyph is scenery in the Slipstream Interior. The description of the amber-glyph is “A symbol like compressed strata — layers pressed together, dense and patient. It glows with the color of old honey, of autumn, of things buried deep. When your hand hovers over it, you feel weight — a phantom gravity pulling your palm down.” The printed name of the amber-glyph is “amber glyph”. Understand “amber” or “stone” or “earth” as the amber-glyph.

The crimson-glyph is scenery in the Slipstream Interior. The description of the crimson-glyph is “A symbol like a flame caught mid-flicker — alive, restless, refusing to hold still even in carved stone. The crimson light it throws dances across the walls. When your hand hovers over it, heat rises — not enough to burn, but enough to warn.” The printed name of the crimson-glyph is “crimson glyph”. Understand “crimson” or “flame” or “fire” as the crimson-glyph.

The blue-glyph is scenery in the Slipstream Interior. The description of the blue-glyph is “A symbol like a wave in cross-section — curved, layered, moving even though it is carved in stone. The blue light it casts shifts constantly, rippling across the walls. When your hand hovers over it, the air feels damp, and you taste salt.” The printed name of the blue-glyph is “blue glyph”. Understand “blue” or “wave” or “water” as the blue-glyph.

The white-glyph is scenery in the Slipstream Interior. The description of the white-glyph is “A symbol like a lightning bolt frozen mid-strike — jagged, angular, violent in its precision. The white light it emits is sharp and cold, and it flickers at a frequency just fast enough to register as movement. When your hand hovers over it, the hair on your arm stands on end.” The printed name of the white-glyph is “white glyph”. Understand “white” or “bolt” or “lightning” or “electricity” as the white-glyph.

The silver-glyph is scenery in the Slipstream Interior. The description of the silver-glyph is “A symbol like a feather caught in the act of dissolving — its edges trailing off into wisps, into nothing. The silver light it casts is cool and restless, shifting across the walls like cloud shadow. When your hand hovers over it, you feel lift — a buoyancy, as though gravity has politely excused itself.” The printed name of the silver-glyph is “silver glyph”. Understand “silver” or “feather” or “wind” or “air” as the silver-glyph.

The violet-glyph is scenery in the Slipstream Interior. The description of the violet-glyph is “A symbol like an eye — no, like the absence of an eye, like the socket after the eye has been removed, a void shaped by what used to fill it. The violet light it casts is dim, barely there, more a suggestion of color than color itself. When your hand hovers over it, the light in the capsule seems to dim. Your shadow lengthens.” The printed name of the violet-glyph is “violet glyph”. Understand “violet” or “shadow” or “dark” or “darkness” or “eye” as the violet-glyph.

The green-glyph is scenery in the Slipstream Interior. The description of the green-glyph is “A symbol like a seed cracking open — jagged with the violence of emergence, the halves of the shell still visible around the shoot that forces them apart. The green light it throws is vivid, almost aggressive, the green of things that grow whether you want them to or not. When your hand hovers over it, your pulse quickens and you can feel your own cells dividing.” The printed name of the green-glyph is “green glyph”. Understand “green” or “seed” or “growth” or “plant” as the green-glyph.

The gold-glyph is scenery in the Slipstream Interior. The description of the gold-glyph is “A symbol like a sphere in the process of collapsing — concentric rings drawn inward, tighter and tighter, converging on a point of infinite density. The gold light it casts bends as it leaves the glyph, curving back toward the source as though even photons cannot escape. When your hand hovers over it, your arm feels heavier. Much heavier.” The printed name of the gold-glyph is “gold glyph”. Understand “gold” or “sphere” or “gravity” or “heavy” as the gold-glyph.

Chapter 4 - Slipstream Travel

Slipstream-travelling is an action applying to one topic. Understand “touch [text]” or “press [text]” or “select [text]” or “choose [text]” as slipstream-travelling when the player is in the Slipstream Interior.

Carry out slipstream-travelling:
	if the topic understood matches “amber/earth/stone”:
		say “Your fingers touch the amber glyph.[paragraph break]The capsule lifts. You feel it rise through the station — through hull, through vacuum — and the walls become transparent. Stars wheel around you. Praxis Station falls away below, a dark mass against the light of the Maw.[paragraph break]Then the capsule stops. Ahead, a point of amber light appears in the void. It grows, expands, becomes a vertical tear in the fabric of space — a portal the color of desert sandstone, its edges rippling like heat haze. Through it you see a landscape of impossible scale: mountains of crystal and compressed stone rising from a plain of dark earth under a sky of perpetual amber twilight.[paragraph break]The capsule slides through the portal. The stars vanish. The amber light surrounds you, warm and heavy. The capsule's walls darken, thicken, change — the smooth luminescent surface becomes rough stone, the floor gritty with dust. The pedestal sinks into the floor and is replaced by a formation of natural crystal. You are no longer in a capsule. You are in a cavern that moves.”;
		now the player is in the Earthen Vessel;
	else if the topic understood matches “crimson/fire/flame”:
		say “Your fingers touch the crimson glyph.[paragraph break]The capsule lifts. Through suddenly transparent walls, Praxis Station shrinks to a point of light. The Maw turns slowly in the distance.[paragraph break]A point of crimson light ignites ahead — not a portal but an eruption, space itself splitting open like skin over a burn, revealing fire beneath. The tear blazes with heat that you can feel through the capsule walls, its edges ragged and violent, and through it you see a world of flame — a sky of burning gas, a ground of molten glass, structures of obsidian rising from seas of lava.[paragraph break]The capsule plunges through. The fire swallows everything. The capsule's walls glow cherry-red, then white, then become something else entirely — black glass, veined with light, radiating heat. The floor is warm metal grating. The pedestal has become a column of obsidian with veins of molten light threading through it. The air tastes of sulfur and ozone.”;
		now the player is in the Molten Vessel;
	else if the topic understood matches “blue/water/wave”:
		say “Your fingers touch the blue glyph.[paragraph break]The capsule lifts. The walls go transparent and the void opens around you — stars, the Maw, the diminishing shape of Praxis.[paragraph break]Ahead, a point of blue light blooms — not tearing space open but flooding it, the void filling with color like ink dropped in water. The portal is not a tear but a pool, vertical and shimmering, its surface rippling with waves that have no source. Through it you see depths — an ocean with no surface and no floor, where light comes from everywhere and nowhere and things move in the distance, vast and slow.[paragraph break]The capsule dives through. Water — or something like water — closes over the walls. The capsule's interior shifts: the walls become blue-green glass, smooth and cool to the touch. The floor is a grating over dark water that moves beneath you. The pedestal has become a pillar of coral, pale and branching. Bioluminescent motes drift through the air. The pressure in your ears changes.”;
		now the player is in the Abyssal Vessel;
	else if the topic understood matches “white/electricity/lightning/bolt”:
		say “Your fingers touch the white glyph.[paragraph break]The capsule lifts. The walls dissolve to transparency. Stars. Void. The Maw.[paragraph break]The portal is instantaneous — no bloom, no tear, just a crack, a fracture in space that branches and forks like lightning frozen in three dimensions. Through the fractured edges you see a void that is not dark but bright — a space where the emptiness itself crackles with charge, where arcs of electricity bridge distances that make no sense, where the concept of matter is a rumor that never quite solidified.[paragraph break]The capsule punches through the fracture. Static swallows everything — your vision whites out, your skin crawls, every hair stands rigid. When sight returns, the capsule is changed. The walls are bare metal, brushed steel, humming with current. The floor vibrates. The pedestal has become a Tesla coil, silent but alive, St. Elmo's fire dancing at its tip. The air smells of ozone and burned copper. Sparks crawl across every surface.”;
		now the player is in the Voltaic Vessel;
	else if the topic understood matches “silver/air/wind/feather”:
		say “Your fingers touch the silver glyph.[paragraph break]The capsule lifts. The walls go transparent — stars, the Maw, Praxis shrinking below. Then the capsule keeps rising, accelerating upward through the plane of the station's orbit, past the ecliptic, into empty space.[paragraph break]The portal doesn't appear. It arrives — a breath, an exhalation, space itself sighing open. The tear is not a tear but an absence of resistance, a place where the void simply steps aside. Through it you see sky — nothing but sky, infinite and pale silver, with no ground below and no ceiling above, only wind and light and shapes that might be clouds or might be continents made of vapor.[paragraph break]The capsule drifts through. The stars vanish. Wind hits the hull — you can hear it, the first sound from outside since you boarded. The capsule's walls thin, become translucent, become fabric — silk stretched over a frame of hollow bone, billowing in a gale you can feel through the material. The pedestal becomes a column of compressed air, visible only by the dust motes spiraling around it. The floor sways.”;
		now the player is in the Aeolian Vessel;
	else if the topic understood matches “violet/shadow/dark/darkness”:
		say “Your fingers touch the violet glyph.[paragraph break]The capsule lifts. The walls go transparent. Stars. Void. The Maw, turning.[paragraph break]The portal is the opposite of light. A point of absolute dark appears ahead — not shadow, not absence of illumination, but darkness as a positive force, a thing that exists in its own right. It doesn't tear space open. It swallows it. The void around the portal dims, the stars nearest to it winking out as their light is consumed. The portal grows — or the dark grows — until it fills the view, and the capsule falls into it like a stone into deep water.[paragraph break]Inside the dark, the capsule changes. The luminescent walls fade to black. The smooth surfaces become matte, light-drinking. The floor is solid but invisible — you can feel it but not see it. The pedestal becomes a column of absolute shadow, darker than the dark around it, a void within a void. The only light is the faint violet glow of the dormant glyphs, casting just enough illumination to see your own hands. Barely.”;
		now the player is in the Umbral Vessel;
	else if the topic understood matches “green/growth/seed/plant”:
		say “Your fingers touch the green glyph.[paragraph break]The capsule lifts. The walls go clear — vacuum, stars, the slow rotation of the Maw.[paragraph break]The portal erupts. There is no other word — it doesn't open, it grows, pushing outward from a central point like a plant through concrete, tendrils of green light branching and splitting and reaching through the void. The portal is alive. Its edges are ragged with new growth, fronds and filaments of light that probe the vacuum like roots seeking soil. Through the gaps between the tendrils you see a world of impossible green — canopy layered on canopy, growth stacked on growth, a world where biology never learned to stop.[paragraph break]The capsule pushes through the tendrils. They close behind it, sealing the portal with new growth. The capsule's walls sprout — metal becoming bark, smooth surfaces roughening with lichen, the floor carpeting with moss that grows before your eyes. The pedestal splits and sends up shoots, becoming a small tree, its branches bearing leaves that unfurl as you watch. Roots crack through the floor grating. The air becomes thick, humid, alive with spores.”;
		now the player is in the Verdant Vessel;
	else if the topic understood matches “gold/gravity/heavy/sphere”:
		say “Your fingers touch the gold glyph.[paragraph break]The capsule lifts — and immediately something is wrong. The motion is not smooth. It stutters, the capsule lurching as though caught between competing gravities, pulled in directions that have nothing to do with up or down. The walls go transparent and the stars are wrong — stretched, smeared, light bending around something you can't see.[paragraph break]The portal is not visible. It is felt. A point of such density that spacetime curves around it, bending the light of every star into an arc, a golden ring of gravitational lensing that distorts the universe into a funhouse mirror. You can see through it — but what you see is curved, compressed, a landscape of impossible geometry where distance and direction have been replaced by mass and its consequences.[paragraph break]The capsule falls through the lens. The transition is violent — a compression, a stretching, your body pulled in directions that don't have names. When it stops, the capsule has changed. The walls are dense metal — lead-heavy, pulling inward. The floor slopes toward the center. Everything in the space leans, drifts, orbits the pedestal, which has become a sphere of dark matter the size of a fist, hovering, drawing everything toward it with lazy, irresistible force.”;
		now the player is in the Graviton Vessel;
	else:
		say “The pedestal does not respond. The eight glyphs glow patiently: AMBER, CRIMSON, BLUE, WHITE, SILVER, VIOLET, GREEN, GOLD.”

Leaving-slipstream is an action applying to nothing. Understand “out” or “leave” or “exit” or “leave capsule” or “exit capsule” as leaving-slipstream when the player is in the Slipstream Interior.

Carry out leaving-slipstream:
	say “The hull dissolves open and you step out onto the dark metal floor of the hidden berth. The capsule seals behind you, patient and waiting.”;
	now the player is in the Hidden Berth.

Part 10 - The Encapsulation of Earth

Chapter 1 - The Earthen Vessel

The Earthen Vessel is a room. The description of the Earthen Vessel is “What was a capsule is now a moving cavern — rough stone walls, a ceiling of compressed crystal that lets in amber light, a floor of packed earth that vibrates with motion. Through gaps in the stone, you can see the landscape sliding past: vast plains of dark soil under a sky the color of old gold, mountain ranges of raw crystal catching the light, canyons that descend into darkness.[paragraph break]The cavern is slowing. The vibration fades. Through the widening gaps in the walls, a plateau of dark stone stretches to the horizon under the amber sky. The crystal formation at the center pulses gently.[paragraph break]Type OUT to open the vessel and step onto the plateau.”

The earth-crystal-formation is scenery in the Earthen Vessel. The description of the earth-crystal-formation is “What was the pedestal. Now it is a cluster of natural crystals — smoky quartz and amber citrine — growing from the cavern floor. The four glyphs are still visible, etched into the largest crystal face, but they are dormant now. Dark. The only one that glows is the amber, faintly, like an ember.” The printed name of the earth-crystal-formation is “crystal formation”. Understand “crystal” or “formation” or “pedestal” or “quartz” or “citrine” as the earth-crystal-formation.

The earth-vessel-walls are scenery in the Earthen Vessel. The description of the earth-vessel-walls is “Rough-hewn stone. Not carved — grown, or compressed, as though the capsule's smooth hull was squeezed by geological pressure until it became rock. Veins of mineral ore thread the surface — copper green, iron red, the occasional glint of something precious.” The printed name of the earth-vessel-walls is “stone walls”. Understand “walls” or “stone” or “rock” or “ore” or “veins” as the earth-vessel-walls.

Exiting-earth-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-earth-vessel when the player is in the Earthen Vessel.

Carry out exiting-earth-vessel:
	say “The stone walls part — not opening but crumbling away, returning to the earth they came from. You step out onto dark stone. Behind you, the cavern collapses in on itself, the rubble sinking into the ground until only a ring of standing stones remains, marking where the vessel landed. Above you, the amber sky. Below you, a world made of stone and silence.”;
	now the player is in the Basalt Plateau.

Chapter 2 - The Basalt Plateau

The Basalt Plateau is a room. The description of the Basalt Plateau is “A vast flat expanse of dark volcanic stone under an amber sky that has no sun — the light comes from everywhere, diffuse and warm, casting no shadows. The plateau stretches to the horizon in every direction, broken only by formations of crystal that erupt from the stone like frozen geysers, some rising hundreds of meters into the air. The silence is total. Not quiet — silence, the complete absence of sound, as though sound itself is a foreign concept here.[paragraph break]A ring of standing stones marks where your vessel landed. To the north, the plateau gives way to a canyon. To the east, a range of crystal mountains catches the amber light.”

The earth-standing-stones are scenery in the Basalt Plateau. The description of the earth-standing-stones is “A circle of dark basalt columns, each one twice your height, arranged where the vessel dissolved. They hum with residual energy — a vibration you feel through the soles of your feet rather than hear. The glyphs from the pedestal are faintly visible on the central stone, dark and dormant.” The printed name of the earth-standing-stones is “standing stones”. Understand “stones” or “standing” or “circle” or “columns” or “ring” as the earth-standing-stones.

The crystal-geysers are scenery in the Basalt Plateau. The description of the crystal-geysers is “Formations of crystal erupting from the basalt — not grown slowly but forced upward by pressure from below, their surfaces sharp-edged and glittering. Some are clear as glass. Others are clouded with mineral inclusions, amber and violet and deep green. They catch the light from the sunless sky and refract it into patterns on the ground.” The printed name of the crystal-geysers is “crystal formations”. Understand “crystal” or “formations” or “geysers” or “spires” as the crystal-geysers.

Chapter 3 - The Crystal Canyon

The Crystal Canyon is a room. The Crystal Canyon is north of the Basalt Plateau. The description of the Crystal Canyon is “The plateau breaks here, split by a canyon that descends into the earth — or into whatever passes for earth in a place that is itself the essence of earth. The canyon walls are layered strata of compressed stone, each band a different color: black basalt, red sandstone, white chalk, veins of emerald and sapphire running through them like arteries. The walls are close enough to touch on both sides.[paragraph break]At the bottom, far below, something glows — a vein of molten mineral, golden and slow, the lifeblood of this world flowing through its deepest channel. A path descends along the canyon wall to the west. The plateau is back to the south.”

The canyon-strata are scenery in the Crystal Canyon. The description of the canyon-strata is “Geological epochs laid bare — each layer of stone a chapter in a history that was never written because no one was here to write it. The strata are compressed so tightly that individual crystals are visible in the rock face, glinting like embedded stars. If you press your palm to the wall, you can feel the stone vibrating — a deep, slow pulse, like a heartbeat measured in centuries.” The printed name of the canyon-strata is “strata”. Understand “strata” or “layers” or “bands” or “wall” or “walls” or “canyon” as the canyon-strata.

The molten-vein is scenery in the Crystal Canyon. The description of the molten-vein is “Far below, at the canyon's nadir, a river of molten mineral flows without sound — gold and amber, thick as honey, casting warm light up the canyon walls. It is not lava. It is something purer — the essential fluid of this place, the molten idea of earth made liquid and given motion.” The printed name of the molten-vein is “molten vein”. Understand “molten” or “vein” or “river” or “gold” or “glow” as the molten-vein.

Chapter 4 - The Descending Path

The Descending Path is a room. The Descending Path is west of the Crystal Canyon. The description of the Descending Path is “A narrow path carved — or worn — into the canyon wall, switchbacking down toward the molten vein below. The stone underfoot is warm and grows warmer with each step. The light from below bathes everything in amber gold. The canyon walls press close, and the air is thick with mineral dust that coats your tongue with the taste of copper.[paragraph break]The path ends at a ledge overlooking the molten vein. To the east, the path leads back up to the canyon rim. Below the ledge, the vein pulses — and in its surface, you can see shapes. Reflections that are not your own.”

The path-reflections are scenery in the Descending Path. The description of the path-reflections is “In the surface of the molten vein below — shapes that are not reflections, because you are not standing over the flow. They move independently, dark silhouettes against the golden light. Figures. Walking, standing, reaching upward. They are under the surface, or in it, or made of it. They do not look up at you. They do not need to. They have always been here.” The printed name of the path-reflections is “reflections”. Understand “reflections” or “shapes” or “figures” or “silhouettes” as the path-reflections.

Every turn when the player is in the Descending Path:
	say “The ledge cracks.[paragraph break]You feel it go — the stone splitting cleanly beneath your feet, calving from the canyon wall like a glacier shedding ice. You fall. Not into the molten vein — sideways, into the canyon wall itself, through a fissure that opens as you fall and closes behind you, the stone swallowing you whole. Darkness. Pressure. The weight of a world pressing in on every side.[paragraph break]You are inside the stone now. It is warm and close and it is crushing you, slowly, with infinite patience.”;
	end the story saying “The earth takes back what it is owed”.

Chapter 5 - The Crystal Mountains

The Crystal Mountains is a room. The Crystal Mountains is east of the Basalt Plateau. The description of the Crystal Mountains is “A range of mountains made entirely of crystal — not stone with crystal in it, but crystal all the way through, translucent and luminous, refracting the amber light into prismatic cascades that paint the dark basalt foothills in shifting color. The mountains rise to impossible heights, their peaks lost in the amber sky. The silence here has a quality — not empty but full, as though the mountains are listening.[paragraph break]At the base of the nearest peak, a cave entrance opens — a geode split wide, its interior studded with amethyst clusters the size of your fist. Something inside the cave hums at a frequency that makes your molars ache.”

The crystal-peaks are scenery in the Crystal Mountains. The description of the crystal-peaks is “Mountains of pure crystal, each one a single formation hundreds of meters tall. Quartz, citrine, amethyst — the light passes through them and emerges changed, split into spectra that don't exist in normal physics. Looking at the peaks directly produces afterimages that linger for minutes, patterns burned into your retina by light that carries more information than your eyes can process.” The printed name of the crystal-peaks is “crystal peaks”. Understand “peaks” or “mountains” or “mountain” or “crystal” as the crystal-peaks.

Chapter 6 - The Resonance Cave

The Resonance Cave is a room. The Resonance Cave is north of the Crystal Mountains. The description of the Resonance Cave is “The interior of the geode — a cathedral of amethyst, every surface studded with crystals that catch and multiply the ambient light until the cave blazes with violet and gold. The hum is stronger here, emanating from the crystals themselves, a chord that builds and layers and becomes almost music. At the center of the cave, a single crystal stands apart from the rest — a column of clear quartz, perfectly smooth, and inside it, suspended like an insect in amber, a point of light.[paragraph break]The light is a doorway. You can feel it — a thinning of the fabric of this place, a point where the Encapsulation of Earth wears thin and something else shows through. The light of the prime material. Home.”

The resonance-crystal is scenery in the Resonance Cave. The description of the resonance-crystal is “A column of clear quartz rising from the cave floor. Inside it, a mote of light — not amber like this world, but white, the light of ordinary stars and ordinary suns. It pulses with a rhythm you recognize: the rhythm of a world with weather and seasons and entropy. Your world. Or close enough.” The printed name of the resonance-crystal is “quartz column”. Understand “column” or “quartz” or “crystal” or “clear” or “light” or “mote” as the resonance-crystal.

Touching-resonance is an action applying to nothing. Understand “touch crystal” or “touch column” or “touch quartz” or “touch light” as touching-resonance when the player is in the Resonance Cave.

Carry out touching-resonance:
	say “You press your palm to the quartz column. The crystal is warm — blood warm — and the moment your skin touches it, the mote of light inside flares. The hum of the cave rises to a roar. The amethyst walls blaze white. Your hand sinks into the crystal as though it were water, and the light rushes up your arm, through your chest, behind your eyes.[paragraph break]The cave dissolves. The amber sky dissolves. Everything dissolves into white light and a sound like a tuning fork struck against the spine of the world.[paragraph break]When you can see again, you are somewhere else. Somewhere with weather and gravity that doesn't think about you.”;
	now the player is in the Rustfield.

Chapter 7 - Earth Return

The Rustfield is a room. The description of the Rustfield is “You are standing in a field of red dirt under an open sky — an actual sky, blue-grey and overcast, with actual clouds and an actual wind that smells of rain and rust. The ground is hard-packed earth, iron-rich, staining your boots red. In the distance, a settlement — low buildings, smoke from chimneys, the glint of metal roofs.[paragraph break]You don't know where this is. It's not Praxis. It's not Aeteria. It's somewhere on the prime material, somewhere with soil and sky and the ordinary miracle of weather. A dirt road leads south toward the settlement.”

The rustfield-sky is scenery in the Rustfield. The description of the rustfield-sky is “An overcast sky. Grey clouds heavy with rain. The light is flat and even — no amber twilight, no arterial red, just the honest grey of a world that has seasons and means it. After where you've been, it's the most beautiful thing you've ever seen.” The printed name of the rustfield-sky is “sky”. Understand “sky” or “clouds” or “overcast” as the rustfield-sky.

Part 11 - The Encapsulation of Fire

Chapter 1 - The Molten Vessel

The Molten Vessel is a room. The description of the Molten Vessel is “What was a capsule is now a shell of black volcanic glass, veined with crawling lines of molten light. The walls radiate heat — not unbearable, but insistent, a constant reminder of where you are. Through the glass walls, you can see the landscape: a world on fire. Seas of lava stretch to horizons smudged with heat shimmer and volcanic ash. Obsidian towers rise from the magma like blackened teeth. The sky is a boiling ceiling of flame-lit cloud, orange and red and the deep purple of superheated gas.[paragraph break]The vessel has stopped moving. Outside, a shelf of cooled obsidian extends from the base of an enormous volcanic formation. The obsidian column at the center pulses with inner fire.[paragraph break]Type OUT to open the vessel and step onto the obsidian shelf.”

The fire-obsidian-column is scenery in the Molten Vessel. The description of the fire-obsidian-column is “What was the pedestal. A column of obsidian, cracked and veined with lines of molten light that pulse like a heartbeat. The four glyphs are etched into it, but only the crimson one glows — the others are dark, sealed in stone.” The printed name of the fire-obsidian-column is “obsidian column”. Understand “column” or “obsidian” or “pedestal” as the fire-obsidian-column.

Exiting-fire-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-fire-vessel when the player is in the Molten Vessel.

Carry out exiting-fire-vessel:
	say “The black glass walls crack and fall away in sheets, shattering on the obsidian below. Heat hits you — a wall of it, dry and searing, like opening an oven the size of a world. You step out onto dark glass. Behind you, the vessel's remains sink into the obsidian, melting, absorbed. A circle of scorched stone marks where it stood. The sky burns above you. The world burns below.”;
	now the player is in the Obsidian Shelf.

Chapter 2 - The Obsidian Shelf

The Obsidian Shelf is a room. The description of the Obsidian Shelf is “A shelf of cooled volcanic glass jutting from the base of a massive volcanic caldera. The obsidian is smooth and reflective — you can see yourself in it, distorted by heat shimmer. The air is furnace-hot and tastes of sulfur. To the north, the caldera rises in a wall of black rock. To the east, a bridge of cooled lava spans a river of molten stone, leading to a cluster of obsidian towers. Below the shelf's edge, a sea of magma stretches to the horizon, its surface crusted in places, cracked and glowing in others.[paragraph break]A circle of scorched stone marks where your vessel landed.”

The fire-scorch-mark is scenery in the Obsidian Shelf. The description of the fire-scorch-mark is “A circle of darker stone where the vessel melted into the obsidian. The glass here is still warm — warmer than the ambient furnace heat, which is saying something. Faint glyphs are visible in the cooling surface, sinking deeper as the glass re-solidifies.” The printed name of the fire-scorch-mark is “scorch mark”. Understand “scorch” or “mark” or “circle” as the fire-scorch-mark.

The magma-sea is scenery in the Obsidian Shelf. The description of the magma-sea is “An ocean of molten rock stretching to the horizon. Its surface moves with the sluggish patience of something too hot to hurry. Crusted plates of cooling stone form and crack and reform on its surface, carried along by currents visible as lines of brighter orange in the red-gold glow. Occasionally, a gout of gas erupts from below, throwing molten droplets skyward.” The printed name of the magma-sea is “magma sea”. Understand “magma” or “sea” or “lava” or “molten” as the magma-sea.

Chapter 3 - The Lava Bridge

The Lava Bridge is a room. The Lava Bridge is east of the Obsidian Shelf. The description of the Lava Bridge is “A natural bridge of cooled lava spanning a river of molten stone — a tributary of the greater magma sea. The bridge is three meters wide and twenty long, its surface rough and ridged with flow patterns from when it was still liquid. The heat from below is savage — the air above the river shimmers and distorts, making the far side waver like a mirage. The obsidian towers wait on the far bank. Below, the lava river flows with a sound like tearing fabric, slow and endless.”

The lava-river is scenery in the Lava Bridge. The description of the lava-river is “A river of molten stone flowing beneath the bridge, its surface a shifting mosaic of red and orange and white-hot yellow. The current is slow but inexorable. Rocks of cooled stone float on its surface like dark islands, glowing at their edges where the magma laps against them. The heat is physical — a presence that pushes against you.” The printed name of the lava-river is “lava river”. Understand “river” or “lava” or “flow” or “current” as the lava-river.

Chapter 4 - The Obsidian Towers

The Obsidian Towers is a room. The Obsidian Towers is east of the Lava Bridge. The description of the Obsidian Towers is “A cluster of natural obsidian spires rising from a platform of cooled stone — each one twenty meters tall, smooth and black and reflective, arranged in a rough circle. Between them, the air shimmers with heat, and where the towers' reflective surfaces catch the light of the burning sky, they throw it back in concentrated beams that carve bright lines across the dark stone floor. At the center of the circle, a pool of liquid fire — not lava, something purer, brighter, hotter — churns in a basin of black glass.[paragraph break]The bridge is back to the west. A narrow passage between two towers leads north, toward the caldera.”

The fire-pool is scenery in the Obsidian Towers. The description of the fire-pool is “A basin of obsidian glass containing liquid fire. Not magma — this is fire in its elemental state, without fuel, without ash, burning because burning is what it is. The light it throws is white at the center, bleeding through gold to red at the edges. Looking into it directly is like looking into a star. Shapes move in its depths — not reflections, not illusions, but things that live in fire and have no concept of cold.” The printed name of the fire-pool is “pool of fire”. Understand “pool” or “fire” or “basin” or “liquid” or “flames” as the fire-pool.

Chapter 5 - The Caldera Interior

The Caldera Interior is a room. The Caldera Interior is north of the Obsidian Towers. The description of the Caldera Interior is “Inside the caldera — a vast bowl of black rock, its walls rising on all sides like a colosseum built by geology. The floor is a cracked plain of cooling stone, veined with glowing fissures where magma pushes up from below. At the center, a column of fire rises from a vent in the stone — not a geyser, not an eruption, but a sustained pillar of flame, perfectly vertical, reaching from the caldera floor to the burning sky above. It has been burning forever. It will burn forever.[paragraph break]Near the fire column, a formation of obsidian has been shaped — or has shaped itself — into an archway. Through the arch, you can see something impossible: a flicker of blue. Cool blue. The blue of a sky that is not on fire.”

The fire-column is scenery in the Caldera Interior. The description of the fire-column is “A sustained column of elemental fire, rising from the heart of the caldera. It produces no smoke, no ash — just light and heat, a pillar of pure combustion ten meters wide and stretching to the sky. The heat near it is lethal. From this distance, it merely blisters. It is the heart of this world, the furnace at the core of a plane that is the idea of fire made real.” The printed name of the fire-column is “fire column”. Understand “column” or “pillar” or “fire” or “flame” as the fire-column.

The obsidian-archway is scenery in the Caldera Interior. The description of the obsidian-archway is “An arch of obsidian glass, three meters tall, standing near the fire column. Its surface is mirror-smooth, and in its reflection you can see the blue — not reflected from anywhere in this world, because there is no blue here. It comes from somewhere else. Through the arch, if you look at the right angle, you can see a sliver of another place: green, cool, alive in the way that growing things are alive, not the way fire is alive.” The printed name of the obsidian-archway is “obsidian archway”. Understand “archway” or “arch” or “obsidian” or “blue” as the obsidian-archway.

Walking-through-arch is an action applying to nothing. Understand “enter arch” or “enter archway” or “walk through arch” or “go through arch” or “step through” as walking-through-arch when the player is in the Caldera Interior.

Carry out walking-through-arch:
	say “You walk toward the archway. The heat intensifies with every step — the fire column roars beside you, its light so bright the world goes white at the edges. You raise your arm to shield your face and step through the arch.[paragraph break]The heat vanishes. Instantly, completely, replaced by cool air that tastes of green things and water. The light changes from white-orange to the dappled gold of sunlight through leaves. Your boots land on soft ground — soil, actual soil, with grass and fallen leaves and the smell of rain.[paragraph break]Behind you, the archway stands in a forest clearing, its obsidian surface already dulling, cooling, losing its connection to the world of fire. The blue through the arch dims and goes dark. You are somewhere else.”;
	now the player is in the Ashfall Clearing.

Chapter 6 - Fire Death

The Caldera Edge is a room. The Caldera Edge is west of the Caldera Interior. The description of the Caldera Edge is “The western rim of the caldera, where the rock is thinnest and the fissures glow brightest. The ground here is unstable — you can feel it shifting, the crust flexing over the magma chamber below. Heat vents hiss between the cracks. Every surface is hot enough to burn.”

Every turn when the player is in the Caldera Edge:
	say “The ground gives way.[paragraph break]Not cracking — dissolving, the stone thinning to nothing as the magma chamber below pushes upward. Your feet plunge through the crust. Lava. Actual lava, around your ankles, your knees. The pain is instant and total and then, mercifully, gone — nerves don't survive at these temperatures. You sink. The world narrows to a circle of burning sky above you, shrinking as the magma closes over your head.[paragraph break]The last thing you see is the fire column, still burning, indifferent.”;
	end the story saying “Fire does not mourn what it consumes”.

Chapter 7 - Fire Return

The Ashfall Clearing is a room. The description of the Ashfall Clearing is “A clearing in a dense forest, carpeted with fallen leaves and a fine layer of grey ash — volcanic ash, though no volcano is visible. The trees are old-growth, massive trunks draped in moss, their canopy filtering the sunlight into shifting patterns on the forest floor. The air smells of loam and woodsmoke and recent rain. Birds call in the canopy. Insects drone.[paragraph break]In the center of the clearing, the obsidian archway stands like a monument to somewhere else, already going cold and dark. A trail leads south through the trees.”

The ashfall-archway is scenery in the Ashfall Clearing. The description of the ashfall-archway is “The obsidian arch, transported from the caldera. Its surface is cooling rapidly — the mirror-shine fading to a matte black, hairline cracks spreading across its face. In an hour it will be rubble. In a day, indistinguishable from forest stone. The doorway is closed. Fire stays where fire belongs.” The printed name of the ashfall-archway is “archway”. Understand “archway” or “arch” or “obsidian” as the ashfall-archway.

Part 12 - The Encapsulation of Water

Chapter 1 - The Abyssal Vessel

The Abyssal Vessel is a room. The description of the Abyssal Vessel is “What was a capsule is now a diving bell of blue-green glass. Water moves beyond the walls — not outside them but through them, the glass somehow permeable to light but not to pressure. You can see the ocean this world is made of: an infinite volume of water with no surface and no floor, lit from within by bioluminescence, populated by shapes that drift at the edge of visibility. The coral pedestal pulses with blue light. The pressure in your ears is constant but not painful.[paragraph break]The vessel has come to rest beside a reef formation — a wall of living coral rising from the darkness below into the luminous water above. The grating underfoot vibrates gently.[paragraph break]Type OUT to open the vessel and enter the water.”

The water-coral-pedestal is scenery in the Abyssal Vessel. The description of the water-coral-pedestal is “What was the pedestal. A branching formation of pale coral, grown from the vessel floor, its surface pocked with tiny polyps that pulse with bioluminescent blue. The four glyphs are etched into its base — only the blue one glows.” The printed name of the water-coral-pedestal is “coral pedestal”. Understand “coral” or “pedestal” or “polyps” as the water-coral-pedestal.

Exiting-water-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-water-vessel when the player is in the Abyssal Vessel.

Carry out exiting-water-vessel:
	say “The glass walls dissolve — not shattering but dispersing, the molecules separating and joining the ocean around you. Water should rush in. It doesn't. The air around your body holds, a membrane of breathable atmosphere clinging to your skin like a second suit. You can breathe. You can move. You are underwater and you are not drowning.[paragraph break]The vessel is gone. The coral pedestal remains, rooted to the reef wall, a marker in an ocean without landmarks. The water is warm and clear and impossibly deep in every direction.”;
	now the player is in the Reef Wall.

Chapter 2 - The Reef Wall

The Reef Wall is a room. The description of the Reef Wall is “A vertical wall of living coral, rising from darkness below to luminous water above — hundreds of meters of biological architecture in colors that have no names in languages evolved on land. Anemones pulse. Schools of translucent fish flow past like living rivers. The coral itself hums — a low, constant vibration that you feel in your chest.[paragraph break]You stand — float — beside the reef, wrapped in a membrane of breathable air that clings to you like a second skin. You can move freely. The coral pedestal from the vessel is embedded in the reef wall behind you, marking your arrival. The reef extends upward to the north and downward to the south. To the east, open ocean, luminous and depthless.”

The reef-coral is scenery in the Reef Wall. The description of the reef-coral is “Living coral in forms you've never seen — branching fractals, bulbous formations, delicate fans that filter the water for food invisible to your eyes. The colors shift as you move: electric blue, deep violet, phosphorescent green. Some of the formations are warm to the touch. Some pulse with their own light. All of them are alive in the most fundamental sense — not merely existing but actively being, with a consciousness that isn't consciousness but is something.” The printed name of the reef-coral is “coral”. Understand “coral” or “reef” or “anemones” or “anemone” as the reef-coral.

The reef-fish are scenery in the Reef Wall. The description of the reef-fish is “Schools of fish — if fish is the right word — that are more light than flesh. Translucent bodies with luminous organs visible through their skin, trailing bioluminescent filaments. They move in coordinated shoals, changing direction as one, flowing around you with incurious grace. You are a feature of the landscape to them, nothing more.” The printed name of the reef-fish is “fish”. Understand “fish” or “school” or “schools” as the reef-fish.

Chapter 3 - The Upper Reef

The Upper Reef is a room. The Upper Reef is north of the Reef Wall. The description of the Upper Reef is “Higher on the reef wall, where the water is brighter and the coral more colorful. Here the reef broadens into a plateau — a living shelf of coral and sponge and things that are neither, teeming with creatures. Jellyfish the size of houses drift past overhead, their tentacles trailing curtains of bioluminescence. The light here comes from everywhere — the water itself glows, suffused with a blue radiance that has no source.[paragraph break]To the east, a formation of enormous shells — each one large enough to enter — cluster at the reef's edge, overlooking the abyss.”

The water-jellyfish are scenery in the Upper Reef. The description of the water-jellyfish is “Enormous jellyfish — bell-shaped bodies twenty meters across, translucent and pulsing with slow contractions that propel them through the water. Their tentacles hang in curtains of bioluminescent thread, trailing for hundreds of meters below them. They are beautiful and vast and completely indifferent to your presence, the way weather is indifferent.” The printed name of the water-jellyfish is “jellyfish”. Understand “jellyfish” or “jelly” or “tentacles” as the water-jellyfish.

Chapter 4 - The Shell Grotto

The Shell Grotto is a room. The Shell Grotto is east of the Upper Reef. The description of the Shell Grotto is “A cluster of enormous shells — each one the spiral home of a creature long departed or still sleeping — arranged at the reef's edge. The largest shell is open, its interior a nacreous cavern of mother-of-pearl, smooth and iridescent. Inside, the walls shimmer with reflected light, and at the deepest point of the spiral, a current of water moves — a current that flows inward, toward something, carrying warmth and light from another place.[paragraph break]The current tastes of salt and rain. It smells of shoreline. It comes from the prime material, leaking through a thin place in the boundary between this ocean and yours.”

The pearl-shell is scenery in the Shell Grotto. The description of the pearl-shell is “The largest shell — a nautilus spiral five meters tall, its interior walls coated in mother-of-pearl that catches and multiplies every photon of light until the inside blazes with iridescent color. The spiral narrows toward its center, and at the deepest point, the current flows — pulling water, pulling light, pulling you gently inward.” The printed name of the pearl-shell is “shell”. Understand “shell” or “nautilus” or “pearl” or “mother” or “spiral” as the pearl-shell.

Following-current is an action applying to nothing. Understand “follow current” or “enter shell” or “swim” or “enter current” or “go in” as following-current when the player is in the Shell Grotto.

Carry out following-current:
	say “You let the current take you. It pulls you into the narrowing spiral of the shell, the nacreous walls pressing close, the light intensifying until you are swimming through liquid pearl. The current strengthens — you couldn't resist it now even if you wanted to. The spiral tightens. The walls glow. The water changes — becoming warmer, becoming lighter, becoming less like water and more like light.[paragraph break]The membrane of air around your body pops. You are wet — truly wet, salt water, cold. You surface gasping in shallow water, waves lapping at your chest, sand under your hands. A shore. An actual shore, with actual waves and an actual sky and seabirds wheeling overhead.[paragraph break]Behind you, nothing. Just ocean. The shell, the reef, the Encapsulation — gone. You crawl onto the beach.”;
	now the player is in the Tidebreak Shore.

Chapter 5 - Water Death

The Abyss is a room. The Abyss is south of the Reef Wall. The description of the Abyss is “You descend along the reef wall, deeper into the darkness below. The coral thins. The light fades. The water grows cold and heavy and the pressure builds — not painfully, but insistently, like the ocean is aware of you and is considering how tightly to squeeze.[paragraph break]Below, in the absolute dark, something moves. Something vast. You can feel the displacement of water as it passes — a current that shoves you against the reef wall, a shadow that blots out even the faint bioluminescence.”

Every turn when the player is in the Abyss:
	say “It finds you.[paragraph break]Not with malice — with the same incurious completeness with which an ocean swallows a stone. The membrane of air around your body fails — not torn, not broken, simply overwhelmed by the pressure of the deep and the proximity of something that exists on a scale your atmosphere cannot accommodate. Water fills your lungs. It is warm. It tastes of salt and the absolute age of a world that has been ocean since before the concept of land.[paragraph break]You dissolve. Not quickly. The ocean takes its time. It has nothing but time.”;
	end the story saying “The deep remembers everything it takes”.

Chapter 6 - Water Return

The Tidebreak Shore is a room. The description of the Tidebreak Shore is “A grey sand beach under a white sky. Waves roll in from an ocean that stretches to the horizon, flat and calm and ordinary. Driftwood and sea-glass litter the tideline. The air is salt and wind and the cry of gulls. Behind the beach, dunes rise toward a coastal settlement — a fishing village, maybe, smoke rising from stone chimneys, nets drying on racks.[paragraph break]You are soaking wet and you don't know where this is. But the water is water, and the sky is sky, and nothing here is made of coral or bioluminescence. The prime material. Home, or close enough.”

The shore-ocean is scenery in the Tidebreak Shore. The description of the shore-ocean is “Ordinary ocean. Waves, whitecaps, the distant grey line where water meets sky. No depth charge of bioluminescence, no reef walls stretching to infinity, no house-sized jellyfish. Just salt water doing what salt water does. The most ordinary and extraordinary thing you've ever seen.” The printed name of the shore-ocean is “ocean”. Understand “ocean” or “sea” or “waves” or “water” as the shore-ocean.

Part 13 - The Proto-Plane of Electricity

Chapter 1 - The Voltaic Vessel

The Voltaic Vessel is a room. The description of the Voltaic Vessel is “What was a capsule is now a Faraday cage — bare metal walls humming with current, the air thick with ozone, sparks crawling across every surface in lazy arcs. Through the gaps in the metal mesh, you can see the proto-plane: a void that is not dark but crackling, a space where the emptiness itself is charged, where arcs of lightning bridge distances measured in kilometers, where luminous plasma forms and dissipates in shapes that almost mean something.[paragraph break]The Tesla coil at the center sparks and hums, its crown of St. Elmo's fire casting sharp, flickering shadows. The vessel has come to rest on a platform of fused glass — fulgurite, created by lightning striking sand that may or may not exist.[paragraph break]Type OUT to open the vessel and step onto the platform.”

The vessel-tesla-coil is scenery in the Voltaic Vessel. The description of the vessel-tesla-coil is “What was the pedestal. A coil of copper wire wound around a core of something that isn't metal — something that conducts not just electricity but the idea of electricity. St. Elmo's fire dances at its tip, blue-white and constant. The four glyphs are visible on its base, etched in scorch marks. Only the white one glows.” The printed name of the vessel-tesla-coil is “Tesla coil”. Understand “coil” or “tesla” or “pedestal” or “elmo” as the vessel-tesla-coil.

Exiting-volt-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-volt-vessel when the player is in the Voltaic Vessel.

Carry out exiting-volt-vessel:
	say “The metal walls of the cage peel apart — each panel flying outward and dissolving into sparks that scatter into the crackling void. The air hits you and every hair on your body stands on end. Static charge crawls across your skin. Your teeth vibrate. The void around you is alive with electricity — arcs of lightning that bridge the space between platforms of fused glass, between structures of crystallized energy that shouldn't be solid but are.[paragraph break]The vessel is gone. Scattered. A ring of scorched fulgurite marks where it stood.”;
	now the player is in the Fulgurite Platform.

Chapter 2 - The Fulgurite Platform

The Fulgurite Platform is a room. The description of the Fulgurite Platform is “A platform of fused glass — fulgurite, created by lightning striking ground that shouldn't exist in a place that is the idea of electricity given shape. The platform floats in the charged void, connected to other platforms and structures by arcs of sustained lightning that serve as bridges. The void is not dark — it crackles with potential, luminous with the blue-white light of constant discharge. There is no ground. There is no sky. There is only the space between charges.[paragraph break]A scorched ring marks where your vessel dissolved. To the north, a bridge of sustained lightning connects to a lattice of crystallized energy. To the east, another bridge leads to a formation that flickers between solid and plasma.”

The fulgurite-surface is scenery in the Fulgurite Platform. The description of the fulgurite-surface is “Glass made by lightning — smooth, translucent, branching with the fractal pattern of the bolt that created it. Beneath the surface, frozen lightning is visible: bright threads of captured discharge, still glowing faintly, still carrying a charge that makes your feet tingle.” The printed name of the fulgurite-surface is “fulgurite”. Understand “fulgurite” or “glass” or “platform” or “surface” as the fulgurite-surface.

The lightning-bridges are scenery in the Fulgurite Platform. The description of the lightning-bridges is “Sustained arcs of electricity connecting the platforms — not bolts that flash and fade but continuous discharges, held in place by forces you don't understand. They crackle and hiss and throw off sparks, but they are stable, walkable — if you trust electricity enough to walk on it. Your skin crawls at the thought.” The printed name of the lightning-bridges is “lightning bridges”. Understand “bridges” or “bridge” or “arc” or “arcs” or “lightning” as the lightning-bridges.

Chapter 3 - The Lattice

The Lattice is a room. The Lattice is north of the Fulgurite Platform. The description of the Lattice is “A structure of crystallized energy — not matter, but charge given form, a lattice of interlocking geometric shapes that hum with contained power. Each node in the lattice is a point of light, and between the nodes, energy flows in visible currents, tracing paths that branch and merge and branch again. The structure is vast — extending in every direction, above and below, a three-dimensional circuit board the size of a city.[paragraph break]You stand on a platform within the lattice, a node-point where multiple energy paths converge. The air smells of ozone. Your hair floats in a halo of static. To the south, the bridge back to the fulgurite platform. To the west, a passage through the lattice leads toward a formation that pulses with a different rhythm — slower, steadier, almost organic.”

The lattice-nodes are scenery in the Lattice. The description of the lattice-nodes is “Points of concentrated charge, each one a sphere of contained lightning the size of your fist. They hover at the vertices of the lattice structure, connected by threads of visible current. When you pass your hand near one, the current bends toward you — attracted to the electrical impulses in your nervous system. Your own bioelectricity is a signal here, a beacon. The lattice knows you are alive.” The printed name of the lattice-nodes is “nodes”. Understand “nodes” or “node” or “points” or “light” or “lattice” as the lattice-nodes.

Chapter 4 - The Pulse Chamber

The Pulse Chamber is a room. The Pulse Chamber is west of the Lattice. The description of the Pulse Chamber is “A hollow in the lattice where the energy flows converge into a single pulse — a rhythmic discharge that beats like a heart made of lightning. The chamber walls are crystallized charge, translucent, and through them you can see the lattice structure extending outward in every direction. At the center of the chamber, a sphere of ball lightning hovers, perfectly stable, its surface crawling with miniature discharges. Inside the sphere — visible through the plasma — is a shape. A doorway. The outline of a door that leads somewhere without electricity.[paragraph break]The lattice passage leads back to the east. Beneath the sphere, a gap in the floor opens onto the void below — the raw, unchanneled chaos of the proto-plane.”

The ball-lightning is scenery in the Pulse Chamber. The description of the ball-lightning is “A sphere of contained plasma, two meters in diameter, hovering at the chamber's center. Its surface is a constant roil of miniature lightning strikes, discharges that arc across the sphere's surface in patterns almost too fast to follow. But inside — look past the fire, past the static, past the crackling skin of plasma — you can see it. A doorway. A rectangle of calm, of silence, of the kind of space where electricity is a servant rather than a sovereign. The prime material shows through like a window in a storm.” The printed name of the ball-lightning is “ball lightning”. Understand “ball” or “lightning” or “sphere” or “plasma” or “doorway” as the ball-lightning.

Entering-ball-lightning is an action applying to nothing. Understand “enter sphere” or “enter lightning” or “enter doorway” or “touch sphere” or “step through” or “enter ball” as entering-ball-lightning when the player is in the Pulse Chamber.

Carry out entering-ball-lightning:
	say “You reach for the sphere. Your hand passes through the plasma — it doesn't burn, it sings, every nerve in your arm firing at once in a cascade of sensation that is not pain but its electrical cousin. Your fingers find the doorway inside the sphere and push through.[paragraph break]The sphere collapses. All the contained charge releases at once — but not outward. Inward. Through you. Through the doorway. You are the circuit, the wire, the path of least resistance between this world and yours. Electricity screams through you and you scream with it and then —[paragraph break]Silence. Dark. The smell of rain on hot pavement. Your hair is standing straight up. Your skin tingles. You are lying on wet asphalt in an alley, rain coming down, neon signs reflecting in puddles. A city. A real city, with power lines and streetlights and the distant hum of a generator somewhere.[paragraph break]You sit up. Sparks crackle from your fingertips for a moment, then fade.”;
	now the player is in the Storm Alley.

Chapter 5 - Electricity Death

The Unchanneled Void is a room. The Unchanneled Void is down from the Pulse Chamber. The description of the Unchanneled Void is “You drop through the gap in the floor and fall into the raw proto-plane — the space beneath the lattice, beneath the structures, beneath the organized patterns of energy that give this place what little shape it has. Here there is nothing but charge. Raw, unchanneled, purposeless electricity — the stuff of lightning before it learns to strike, the potential before it finds its ground.”

Every turn when the player is in the Unchanneled Void:
	say “You become the ground.[paragraph break]Every arc in the void finds you simultaneously. You are the path of least resistance in a space with no resistance at all, and the charge — all of it, the entire unchanneled potential of a proto-plane — flows through you. Not a bolt. Not a shock. A sustained, total discharge that erases the distinction between your bioelectricity and the ambient charge. Your nervous system fires every signal it has, all at once, a single white moment of absolute sensation.[paragraph break]Then nothing. The charge disperses. Where you were, a brief afterimage flickers in the void — the outline of a person, drawn in fading sparks — and then that too is gone.”;
	end the story saying “Current flows. Current passes. Current forgets.”

Chapter 6 - Electricity Return

The Storm Alley is a room. The description of the Storm Alley is “A narrow alley between two buildings, rain coming down in sheets, neon signs casting colored light on wet asphalt. Dumpsters and fire escapes and the hum of power transformers mounted on poles overhead. Puddles reflect the neon — blue and red and green — and somewhere a radio plays music you almost recognize. It is a city. It is raining. It is the most mundane, most beautiful place you have ever been.[paragraph break]Your clothes are dry — impossibly, given the rain. Your hair still stands on end. Sparks dance on your fingertips if you rub them together. A street is visible at the mouth of the alley to the south.”

The alley-neon is scenery in the Storm Alley. The description of the alley-neon is “Signs in a script you can read — a language you know, advertising things that exist: food, drinks, repair services. The neon hums with contained electricity, tame and useful, doing its job without ambition. After what you've seen, a neon sign is a miracle of restraint.” The printed name of the alley-neon is “neon signs”. Understand “neon” or “signs” or “sign” or “light” or “lights” as the alley-neon.

The alley-rain is scenery in the Storm Alley. The description of the alley-rain is “Rain. Ordinary rain, made of ordinary water, falling from ordinary clouds pushed by ordinary wind. It tastes of nothing more exotic than the inside of a cloud. It is the most grounding thing you have ever experienced.” The printed name of the alley-rain is “rain”. Understand “rain” or “water” or “puddles” as the alley-rain.

Part 14 - The Encapsulation of Air

Chapter 1 - The Aeolian Vessel

The Aeolian Vessel is a room. The description of the Aeolian Vessel is “What was a capsule is now a kite — a frame of hollow bone wrapped in silk that billows and snaps in a wind you can feel through every surface. The floor sways underfoot like the deck of a ship. Through the translucent walls, you can see it: an infinite sky. No ground. No horizon. Just sky in every direction — pale silver above, deepening to slate below, threaded with clouds that are not clouds but landmasses, floating islands of compressed vapor with surfaces solid enough to walk on. Wind is everywhere, the fundamental medium of this place, carrying scent and sound across distances that make no sense.[paragraph break]The vessel has caught on something — a thermal, a current — and hangs motionless relative to a nearby cloud-island. The compressed-air pedestal spirals with dust motes.[paragraph break]Type OUT to step onto the cloud below.”

The air-pedestal is scenery in the Aeolian Vessel. The description of the air-pedestal is “What was the pedestal. A column of compressed air made visible only by the dust and moisture spiraling around it in a tight vortex. The glyphs are written in the pattern of the spiral — only the silver one is legible, the others scattered and dormant.” The printed name of the air-pedestal is “air column”. Understand “column” or “pedestal” or “air” or “vortex” or “dust” as the air-pedestal.

The silk-walls are scenery in the Aeolian Vessel. The description of the silk-walls is “Silk — or something like silk, organic and translucent, stretched over a framework of hollow bones that flex in the wind. The material is alive with motion, rippling and snapping like a sail. Through it, the endless sky is visible, silver and vast and populated by things that drift on currents you cannot see.” The printed name of the silk-walls is “silk walls”. Understand “silk” or “walls” or “fabric” or “bone” or “frame” as the silk-walls.

Exiting-air-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-air-vessel when the player is in the Aeolian Vessel.

Carry out exiting-air-vessel:
	say “The silk floor parts beneath your feet — a seam opening like a mouth — and you drop. Not far. Three meters, maybe four, and you land on something that yields like packed snow but holds your weight. Cloud. You are standing on a cloud. It is solid underfoot, cool and slightly damp, and it does not care that this should be impossible.[paragraph break]Above you, the vessel catches a gust and tumbles away into the silver sky, silk and bone folding and unfolding like an origami bird. It is gone in seconds. Where you landed, a swirl of vapor marks the spot.”;
	now the player is in the Cirrus Landing.

Chapter 2 - The Cirrus Landing

The Cirrus Landing is a room. The description of the Cirrus Landing is “The surface of a cloud-island — a platform of compressed vapor perhaps a hundred meters across, white and cool and firm beneath your feet. The edges are soft, trailing off into wisps that the wind peels away and carries into the infinite sky. You can see other cloud-islands in the distance — some small as houses, some vast as continents, drifting at different altitudes in the silver light.[paragraph break]The air is thin but breathable, cold and sharp and clean in a way you've never experienced — air without particulate, without pollution, without history. Pure atmosphere. To the north, the cloud-island rises to a ridge. To the east, a bridge of compressed wind — visible as a shimmer in the air — connects this island to another.”

The cloud-surface is scenery in the Cirrus Landing. The description of the cloud-surface is “Solid cloud. Your mind keeps trying to reject this, but your feet disagree. The surface is white, cool, slightly yielding — like packed snow but dryer, without the cold. When you press your hand into it, it compresses and then springs back. You can feel the wind moving through it, the way you might feel a current through water.” The printed name of the cloud-surface is “cloud”. Understand “cloud” or “surface” or “ground” or “vapor” as the cloud-surface.

The distant-islands are scenery in the Cirrus Landing. The description of the distant-islands is “Cloud-islands at every altitude — some above you, some below, some drifting at eye level. They range from wisps the size of rooms to formations that could hold cities. Some have visible structures on them: towers of condensed vapor, bridges of frozen wind, shapes that suggest architecture without quite committing to it. Things move between them — shapes with wings, or that are wings, riding the thermals.” The printed name of the distant-islands is “cloud-islands”. Understand “islands” or “island” or “distant” or “clouds” as the distant-islands.

Chapter 3 - The Wind Ridge

The Wind Ridge is a room. The Wind Ridge is north of the Cirrus Landing. The description of the Wind Ridge is “The highest point of the cloud-island — a ridge of compressed vapor from which you can see in every direction. The view is vertigo in its purest form: sky above, sky below, sky on every side, populated by drifting islands and the shapes that live between them. The wind here is fierce — a constant gale that comes from no fixed direction, shifting moment to moment, carrying scents from places you cannot see: salt, flowers, lightning, cold stone.[paragraph break]At the ridge's peak, a creature roosts — if roost is the right word. A being made of wind, visible only by the debris and moisture it carries: a vaguely avian shape outlined in cloud-stuff and dust, vast and still. It is watching you. Or the wind is watching you through it.”

The wind-creature is scenery in the Wind Ridge. The description of the wind-creature is “Not a bird. Not an elemental. Something else — a pattern in the air, a self-sustaining vortex that has organized itself into the shape of a raptor. It is twenty meters across, wing to wing, and it is made of nothing but motion and the particles that motion carries. Its eyes — if they are eyes — are cyclones the size of your fist, spinning with contained fury. It does not move. The wind that is its body is already everywhere.” The printed name of the wind-creature is “wind creature”. Understand “creature” or “bird” or “wind” or “shape” or “raptor” or “vortex” as the wind-creature.

Chapter 4 - The Wind Bridge

The Wind Bridge is a room. The Wind Bridge is east of the Cirrus Landing. The description of the Wind Bridge is “A bridge of compressed wind connecting two cloud-islands — visible as a shimmer in the air, a corridor of increased density that your feet find solid. Walking on it is like walking on a vibrating wire. The wind beneath you is visible as streaming vapor, rushing past at speeds that would tear you apart if the bridge weren't sheltering you. The second island waits ahead — darker, denser, its surface grey rather than white.[paragraph break]To the west, the cirrus island. To the east, the grey island.”

The bridge-wind is scenery in the Wind Bridge. The description of the bridge-wind is “Below the bridge, wind in its raw state — not a breeze, not a gale, but the fundamental medium of this world moving at its natural speed, which is very, very fast. The streaming vapor makes the current visible: a river of atmosphere flowing beneath your feet at hundreds of meters per second. The bridge holds. The bridge is stable. You repeat this to yourself.” The printed name of the bridge-wind is “wind”. Understand “wind” or “current” or “vapor” or “stream” as the bridge-wind.

Chapter 5 - The Stormhead Island

The Stormhead Island is a room. The Stormhead Island is east of the Wind Bridge. The description of the Stormhead Island is “A darker cloud-island — a thunderhead compressed into solidity, its surface grey and roiling, shot through with flickering light. The interior of this island is not calm like the cirrus platform — it vibrates with contained energy, and you can feel static building in the air, the prelude to a discharge that never quite comes. At the island's center, a column of clear air — an eye in the storm, a shaft of calm that descends through the island's body and out the bottom, opening onto the infinite sky below.[paragraph break]The wind bridge is back to the west. The eye of the storm is strangely inviting — the only still place in this world of constant motion.”

The storm-eye is scenery in the Stormhead Island. The description of the storm-eye is “A shaft of absolute calm in the center of the stormhead — three meters across, perfectly cylindrical, descending straight through the island and out the other side. Looking down through it, you can see the sky below, silver and clear. The walls of the shaft crackle with suppressed lightning. But the air inside is still. Perfectly, impossibly still. And at the bottom of the shaft — far below, visible through the column of clear air — another world. Green. Solid. Real.” The printed name of the storm-eye is “eye of the storm”. Understand “eye” or “shaft” or “calm” or “column” or “clear” as the storm-eye.

Entering-storm-eye is an action applying to nothing. Understand “enter eye” or “jump” or “enter shaft” or “drop” or “descend” or “go down” as entering-storm-eye when the player is in the Stormhead Island.

Carry out entering-storm-eye:
	say “You step into the eye of the storm. The roaring wind cuts off instantly — silence, total and shocking, as though someone has pressed a mute button on the world. You are standing in a column of perfectly still air, the stormhead crackling around you but unable to touch you.[paragraph break]Then you fall.[paragraph break]Down through the cloud-island, through the clear shaft, out the other side and into the open sky. But the fall is not a fall — it is a descent, controlled, gentle, the air itself lowering you like a hand setting down something fragile. The silver sky darkens to blue. Clouds form around you — real clouds, thin and wispy. Temperature drops. The smell of altitude fades and is replaced by grass and pollen and distance.[paragraph break]Your feet touch ground. Real ground. Hilltop grass, bending in an ordinary wind. You are standing on a hill overlooking a valley, and the sky above is the simple blue of a world that has only one atmosphere.”;
	now the player is in the Gale Hill.

Chapter 6 - Air Death

The Windshear is a room. The Windshear is west of the Wind Ridge. The description of the Windshear is “You step off the cloud-island's edge, expecting solidity — but the cloud thins to nothing beneath your feet and you are in the open air, in the wind, in the space between islands where the atmosphere moves without restraint.”

Every turn when the player is in the Windshear:
	say “The wind takes you.[paragraph break]Not gently. Not gradually. The full force of an atmosphere that has never been tamed hits you like a wall and you are spinning, tumbling, accelerated to speeds that make the air itself a weapon. The wind shears — layers of atmosphere moving in different directions at different speeds, and you are caught between them, pulled apart not by impact but by velocity differential. The sound is the loudest thing you have ever heard — a roar that goes beyond sound into pure concussive force.[paragraph break]You come apart. Not violently — the wind is too fast for violence. You simply disperse, your molecules joining the current, becoming atmosphere, becoming wind. It is not painful. It is the opposite of painful. It is the feeling of joining something vast and free and without boundary.[paragraph break]The wind blows on. It always blows on.”;
	end the story saying “The wind remembers nothing”.

Chapter 7 - Air Return

The Gale Hill is a room. The description of the Gale Hill is “A hilltop in an open landscape — rolling green hills under a blue sky, a wind that is brisk but merely weather, not a fundamental force. The grass bends. Wildflowers nod. In the valley below, a road winds between farmsteads, and somewhere a dog is barking at something only it can see.[paragraph break]Above you, the sky is just sky. No cloud-islands, no silver light, no wind bridges. Just cirrus wisps and the contrail of something too high to identify. The prime material. Solid ground and stupid, beautiful gravity.”

The hilltop-wind is scenery in the Gale Hill. The description of the hilltop-wind is “A breeze. An ordinary breeze, carrying the smell of cut grass and distant rain. After the Encapsulation of Air, it feels like a whisper from a friend. The wind here doesn't think. It doesn't watch. It just blows, and you have never been so grateful for mindless weather.” The printed name of the hilltop-wind is “wind”. Understand “wind” or “breeze” or “air” as the hilltop-wind.

Part 15 - The Encapsulation of Shadow

Chapter 1 - The Umbral Vessel

The Umbral Vessel is a room. The description of the Umbral Vessel is “What was a capsule is now a void. The walls are present — you can feel them if you reach out — but invisible, surfaces of matte black that absorb all light. The floor is solid but featureless dark. The only illumination comes from the dormant glyphs on the shadow-pedestal, their violet glow just bright enough to show you your own hands, the outline of the space, the fact that you are somewhere rather than nowhere.[paragraph break]Through the walls — through the dark — you can sense it. Not see. Sense. A world where darkness is the medium, where shadow is the substance, where light is the anomaly. The vessel has stopped moving, or was never moving. Direction is uncertain here.[paragraph break]Type OUT to step into the dark.”

The shadow-pedestal is scenery in the Umbral Vessel. The description of the shadow-pedestal is “What was the pedestal. A column of shadow denser than the surrounding dark — visible as an absence, a void within a void, the thing your eyes refuse to focus on because focusing would mean admitting it is real. The glyphs are etched in faint violet light. Only the violet one glows.” The printed name of the shadow-pedestal is “shadow column”. Understand “column” or “pedestal” or “shadow” as the shadow-pedestal.

Exiting-shadow-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-shadow-vessel when the player is in the Umbral Vessel.

Carry out exiting-shadow-vessel:
	say “You reach for the wall. Your hand passes through — the matte surface dissolving like smoke at your touch. You step through and the vessel unmakes itself behind you, collapsing inward, shadow folding into shadow until nothing remains. Not even an absence. Just the dark, uniform and complete.[paragraph break]You are standing on something. You cannot see it. You can feel it — solid, cool, smooth. Around you, the dark presses close, not hostile but intimate, the way deep water is intimate. And in the distance — if distance means anything here — shapes. Faint outlines, darker than the dark, moving.”;
	now the player is in the Penumbra.

Chapter 2 - The Penumbra

The Penumbra is a room. The description of the Penumbra is “A landscape of graduated darkness. The ground is smooth stone — you can feel it, and occasionally the faintest shimmer of reflected light confirms it, a floor of obsidian-dark material polished to a mirror finish. The air is cool, still, and carries sound with preternatural clarity: your breathing, your heartbeat, the whisper of your clothes as you move. Every sound returns to you as echo, reflected from surfaces you cannot see.[paragraph break]Shapes move in the dark — not threatening, but present. Silhouettes darker than the ambient darkness, passing at a distance, going about business you cannot comprehend. To the north, the dark thickens. To the east, a faint light — the first you've seen that isn't the glow of your own body heat reflected back at you.”

The dark-shapes are scenery in the Penumbra. The description of the dark-shapes is “Silhouettes. Darker-than-dark outlines moving through the darkness with purpose and direction. They have shapes that suggest bodies — bipedal, mostly, though some are longer, lower, different. They do not speak. They do not approach. But they are aware of you — you can feel their attention, a subtle pressure on the mind, the way you can feel someone watching you in a dark room.” The printed name of the dark-shapes is “shapes”. Understand “shapes” or “silhouettes” or “figures” or “shadows” as the dark-shapes.

The echo-floor is scenery in the Penumbra. The description of the echo-floor is “Smooth stone — obsidian or something darker, polished to a mirror that has nothing to reflect. When you tap it with your heel, the sound returns to you from multiple directions with impossible fidelity, as though the space is perfectly acoustic, every surface a reflector. Your heartbeat echoes. Your breathing echoes. Even your thoughts seem to produce a faint, reflected murmur.” The printed name of the echo-floor is “floor”. Understand “floor” or “stone” or “ground” or “surface” as the echo-floor.

Chapter 3 - The Deep Dark

The Deep Dark is a room. The Deep Dark is north of the Penumbra. The description of the Deep Dark is “Deeper into the Encapsulation, where the ambient darkness thickens to something almost solid. You can feel it on your skin — a pressure, a weight, as though the dark has mass and you are wading through it. Your body heat is the only light source, and even that seems dimmer here, your infrared signature being swallowed by the hungry dark.[paragraph break]Something lives here. Not the silhouettes — something else. A presence, vast and still, occupying the darkness the way a whale occupies the ocean. It is not hostile. It is not friendly. It is dark, and dark does not have opinions about the things that move through it. To the south, the relative light of the Penumbra. To the east, a whispering.”

The dark-presence is scenery in the Deep Dark. The description of the dark-presence is “You cannot see it. You can feel it — a mass of attention, a consciousness distributed through the darkness like a mind too large for a single body. It notices you the way the sea notices a swimmer: without urgency, without menace, with the total, unhurried awareness of something that has existed since before light was invented and will exist long after the last star goes out.” The printed name of the dark-presence is “presence”. Understand “presence” or “something” or “being” or “entity” as the dark-presence.

Chapter 4 - The Whispering Gallery

The Whispering Gallery is a room. The Whispering Gallery is east of the Deep Dark. The description of the Whispering Gallery is “A vast enclosed space — a gallery, a hall, an acoustic chamber of impossible size. You can sense the walls curving away on every side, the ceiling arching high above. And in this space, the echoes of the Encapsulation converge. Whispers. Not voices — echoes of voices, the acoustic ghosts of every sound that has ever been made in any dark place: conversations in unlit rooms, words spoken into pillows, prayers murmured in the dark hours. They layer and overlap until they become a kind of music, a choir of echo-fragments singing in the dark.[paragraph break]At the center of the gallery, a point of light. Not bright — barely more than a candle — but in this world of absolute darkness, it blazes like a star. It is warm. It is real. It is a way out.”

The whisper-echoes are scenery in the Whispering Gallery. The description of the whisper-echoes is “Fragments of sound reflected from the gallery walls. You catch pieces — a word here, a laugh there, a sob, a name. They come from everywhere, from every dark place in every world: bedrooms with the lights off, caves, the space under stairs, the dark between stars. The Encapsulation of Shadow collects them all. Nothing spoken in darkness is ever truly lost.” The printed name of the whisper-echoes is “whispers”. Understand “whispers” or “whisper” or “echoes” or “voices” or “sounds” as the whisper-echoes.

The shadow-candle is scenery in the Whispering Gallery. The description of the shadow-candle is “A point of warm light hovering at chest height in the center of the gallery. Not a candle — there is no wick, no wax — but the ghost of a candle, the idea of candlelight, the warmth that people create when they refuse to accept the dark. It flickers in a draft that comes from somewhere else — somewhere with air that moves because of weather, not because of acoustics. The prime material leaks through.” The printed name of the shadow-candle is “candlelight”. Understand “candle” or “light” or “candlelight” or “flame” or “glow” as the shadow-candle.

Reaching-for-candle is an action applying to nothing. Understand “touch candle” or “touch light” or “reach” or “take candle” or “take light” as reaching-for-candle when the player is in the Whispering Gallery.

Carry out reaching-for-candle:
	say “You reach for the light. Your hand closes around it — not solid, not hot, just warm, the warmth of another person's hand held in the dark. The light spreads up your arm. The whispers rise to a crescendo — every voice in every dark room saying the same thing, not in words but in the shared grammar of hope: light, light, let there be light.[paragraph break]The gallery blazes. For one instant you see it all — the vast curved walls, the gallery stretching to a distant ceiling, the silhouettes standing at the edges watching — and then the light consumes everything, washing the darkness away, dissolving the Encapsulation in a flood of warm gold.[paragraph break]You close your eyes against the brightness. When you open them, you are standing in a lamplit room. Wooden walls. A fire in the grate. A window showing night outside — but a night with stars and a moon, a proper dark, the kind that exists because the sun is elsewhere, not because light was never invented.”;
	now the player is in the Lamplit Room.

Chapter 5 - Shadow Death

The Absolute Dark is a room. The Absolute Dark is east of the Penumbra. The description of the Absolute Dark is “You move toward the faint light to the east, but it recedes as you approach — always the same distance away, drawing you deeper into the Encapsulation, into a region where the darkness is no longer graduated but absolute. Total. The dark here is not the absence of light. It is the presence of dark, a positive force, a substance.”

Every turn when the player is in the Absolute Dark:
	say “The dark enters you.[paragraph break]Through your eyes, your ears, your mouth, the pores of your skin. It is not aggressive — it is patient, the way erosion is patient, the way entropy is patient. The darkness fills you the way water fills a vessel, displacing what was there — light, thought, memory, self. You forget your name. You forget what light looks like. You forget that there was ever anything other than this: perfect, complete, absolute dark.[paragraph break]You do not die. Something worse. You become dark. You join the silhouettes, one more shape moving through the void with purpose you will never be able to articulate because you no longer have language, only shadow.”;
	end the story saying “The dark has always been here. Now so have you.”

Chapter 6 - Shadow Return

The Lamplit Room is a room. The description of the Lamplit Room is “A small room in an old building — wooden floors, plastered walls, a fire in the grate casting warm light and warmer shadows. The shadows here are ordinary: they fall where light tells them to fall, and they stay there. Through the window, a village at night — lamplit windows, a cobbled street, stars overhead. The room smells of woodsmoke and old books and the dried herbs hanging from the ceiling beam.[paragraph break]You are safe. You are warm. The darkness outside is the kind that ends at dawn.”

The lamplit-fire is scenery in the Lamplit Room. The description of the lamplit-fire is “A fire in a stone grate, burning real wood that smells of pine and birch. The flames are orange and yellow and behave exactly as flames should — flickering, popping, casting shadows that move in predictable ways. After the Encapsulation of Shadow, a simple fire is the most profound thing you've ever witnessed.” The printed name of the lamplit-fire is “fire”. Understand “fire” or “flames” or “grate” or “hearth” as the lamplit-fire.

Part 16 - The Proto-Plane of Growth

Chapter 1 - The Verdant Vessel

The Verdant Vessel is a room. The description of the Verdant Vessel is “What was a capsule is now a greenhouse — walls of living bark, floor of moss so thick it swallows your ankles, ceiling a canopy of leaves that weren't there a moment ago. The air is jungle-thick, humid and warm and seething with pollen and spores that tickle the inside of your nose. Everything is growing. Visibly, audibly growing — you can hear it, a constant soft crackling as shoots extend and leaves unfurl and roots split through the metal grating beneath the moss.[paragraph break]The tree-pedestal at the center has already reached the ceiling, its branches pressing against the bark walls, cracking them. This vessel won't hold much longer. Through the gaps in the bark, you can see green — endless, furious, unrestrained green.[paragraph break]Type OUT to let the vessel break open.”

The tree-pedestal is scenery in the Verdant Vessel. The description of the tree-pedestal is “What was the pedestal. A tree — fully formed, impossibly fast, its trunk already as thick as your torso, its branches reaching for the ceiling and finding it and pushing through. The glyphs are visible as patterns in the bark — whorls and knots that form symbols. Only the green one pulses with sap-light.” The printed name of the tree-pedestal is “tree”. Understand “tree” or “pedestal” or “trunk” or “branches” as the tree-pedestal.

Exiting-growth-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-growth-vessel when the player is in the Verdant Vessel.

Carry out exiting-growth-vessel:
	say “You don't open the vessel. It opens itself — the bark walls splitting under the pressure of growth, the tree at the center exploding outward in a shower of leaves and spores, roots erupting from the floor and diving into the soil below. The moss follows, carpeting the broken hull in seconds, and within a minute the vessel is gone, consumed by the world it arrived in, recycled into the endless green.[paragraph break]You stand in the open, surrounded by vegetation so dense and active it's like standing in the middle of an argument between plants about who gets to grow next.”;
	now the player is in the Canopy Floor.

Chapter 2 - The Canopy Floor

The Canopy Floor is a room. The description of the Canopy Floor is “The floor of a forest that doesn't understand limits. Trees rise on every side — not individual trees but a continuous wall of trunk and root and branch, growing so close together that the gaps between them are measured in centimeters. The canopy above is so dense that the light filtering through is green — not sunlight tinted green, but green light, as though the leaves generate their own luminescence. The ground is a carpet of moss, fungi, and fallen plant matter so deep your feet sink to the ankle with every step. Everything is growing. You can hear it — the constant, soft crackle of expansion.[paragraph break]To the north, the trees thin slightly around what might be a clearing. To the east, a mass of root structures larger than buildings forms a natural amphitheater.”

The canopy-trees are scenery in the Canopy Floor. The description of the canopy-trees is “Trees — if trees is still the right word for organisms that have left behind any pretense of normal growth. Their trunks are ten meters across, their bark thick and layered and alive with secondary growth: moss, lichen, epiphytes, fungal shelves, smaller trees growing out of the larger ones. They are not individuals. They are one organism, or many organisms so intertwined that the distinction has ceased to matter.” The printed name of the canopy-trees is “trees”. Understand “trees” or “tree” or “trunk” or “trunks” or “bark” or “canopy” as the canopy-trees.

The growth-fungi are scenery in the Canopy Floor. The description of the growth-fungi is “Mushrooms and shelf fungus and things that don't have names in any mycology textbook — bioluminescent caps the size of dinner plates, threads of mycelium visible as white webs across the forest floor, spore clusters that puff clouds of powder when you brush past them. The fungi are the nervous system of this world, connecting everything, communicating in chemical signals that you can almost smell.” The printed name of the growth-fungi is “fungi”. Understand “fungi” or “mushroom” or “mushrooms” or “fungus” or “spores” or “mycelium” as the growth-fungi.

Chapter 3 - The Bower

The Bower is a room. The Bower is north of the Canopy Floor. The description of the Bower is “A clearing — though clearing implies something was cleared, and nothing in this world is ever cleared, only briefly outcompeted. The trees here have grown up and over, their branches weaving together overhead to form a living dome, a cathedral of interlocked limbs and leaves. The light inside is golden-green, warm and diffuse. The floor is soft loam, and in the center of the bower, a single flower blooms — enormous, a meter across, its petals a deep red that pulses with the rhythm of a heartbeat. It is the most beautiful thing in a world of relentless beauty.[paragraph break]The forest continues to the south. To the west, the vegetation has grown so dense it forms a wall.”

The bower-flower is scenery in the Bower. The description of the bower-flower is “A flower — a single, enormous bloom, its petals unfurled like cupped hands around a core of golden pollen. It pulses. Not with light, but with life — a visible contraction and expansion, like a heart made of plant matter. The scent is overpowering: honey and green sap and something deeper, something that smells like potential, like the moment before growth begins. Looking at it makes your own cells itch.” The printed name of the bower-flower is “flower”. Understand “flower” or “bloom” or “petals” or “pollen” as the bower-flower.

Chapter 4 - The Root Amphitheater

The Root Amphitheater is a room. The Root Amphitheater is east of the Canopy Floor. The description of the Root Amphitheater is “A natural amphitheater formed by the root structures of the largest trees — roots so massive they rise from the ground like walls, curving inward, creating a bowl-shaped space twenty meters across. The floor is packed earth, and from it, new growth is constantly emerging: shoots, tendrils, saplings that grow visibly, reaching for the green light. At the center of the amphitheater, a pool of sap — amber and thick and warm, fed by channels in the root walls, smelling of resin and life.[paragraph break]In the sap's surface, a reflection that isn't yours — a window onto somewhere else. Green fields under a blue sky. The prime material, leaking through the growth.”

The sap-pool is scenery in the Root Amphitheater. The description of the sap-pool is “A pool of tree sap, amber and translucent, warm to the touch. It flows from channels in the surrounding root walls, collecting in a natural basin of packed earth. The surface is still enough to reflect, and what it reflects is not the canopy above but something else: open sky, green fields, a world where growth is seasonal and gentle rather than constant and overwhelming. Home.” The printed name of the sap-pool is “sap pool”. Understand “sap” or “pool” or “amber” or “resin” or “reflection” as the sap-pool.

Entering-sap-pool is an action applying to nothing. Understand “enter pool” or “enter sap” or “step in” or “wade” or “swim” as entering-sap-pool when the player is in the Root Amphitheater.

Carry out entering-sap-pool:
	say “You step into the sap. It is warm — blood warm — and it clings, thick and amber, coating your legs, your waist. You sink. Not drowning — descending. The sap closes over your head and you can breathe through it, somehow, drawing oxygen from the resin the way a root draws water from soil. The golden light fills your vision.[paragraph break]The sap thins. Becomes water. Becomes rain. You are falling upward through rain, through leaves, through a sky that is opening around you like a flower — and then you're lying face-down in grass. Wet grass, ordinary grass, in a field where it is raining gently and the air smells of petrichor and the only things growing are the things that are supposed to.[paragraph break]Amber sap dries on your clothes and flakes away.”;
	now the player is in the Verdant Clearing.

Chapter 5 - Growth Death

The Green Wall is a room. The Green Wall is west of the Bower. The description of the Green Wall is “The vegetation here has become impenetrable — a wall of growth so dense that individual plants are indistinguishable, everything fused into a single mass of green. But you push in. The growth parts ahead of you, tendrils pulling back like curtains, inviting you deeper. It wants you in here.”

Every turn when the player is in the Green Wall:
	say “The growth closes behind you.[paragraph break]And then it doesn't stop. Tendrils wrap your ankles. Roots probe your boots. Moss crawls up your legs with visible speed, soft and warm and insistent. The plants are not hostile — they are generous, offering you what they offer everything: growth. Your skin itches where the moss touches it. New cells are forming — not your cells, or not only your cells. Something is growing in you, through you, using you as soil.[paragraph break]Shoots emerge from your sleeves. Roots descend from your feet into the earth. Leaves unfurl from your shoulders. You are not being consumed. You are being planted. You are being grown. The forest takes you in and gives you back as part of itself.[paragraph break]It does not hurt. That is the worst part. It feels like coming home.”;
	end the story saying “Growth does not distinguish between its children”.

Chapter 6 - Growth Return

The Verdant Clearing is a room. The description of the Verdant Clearing is “A meadow in gentle rain — wildflowers, tall grass, a hedgerow at the edge and beyond it a patchwork of cultivated fields. The growth here is polite, restrained, seasonal. Plants grow at the rate plants should grow, which after where you've been feels like geological patience. A farmhouse is visible in the distance, smoke from its chimney, a dog asleep on the porch.[paragraph break]Sap residue dries on your clothes and crumbles away. The rain washes the rest. You smell of resin and wet grass.”

The meadow-flowers are scenery in the Verdant Clearing. The description of the meadow-flowers is “Wildflowers growing at the speed of wildflowers — imperceptibly, politely, one cell at a time. Daisies, clover, buttercups. Nothing here is trying to grow through you. Nothing here wants to use you as soil. The flowers are just flowers. You could weep with relief.” The printed name of the meadow-flowers is “wildflowers”. Understand “flowers” or “wildflowers” or “daisies” or “clover” as the meadow-flowers.

Part 17 - The Proto-Plane of Gravity

Chapter 1 - The Graviton Vessel

The Graviton Vessel is a room. The description of the Graviton Vessel is “What was a capsule is now a compression chamber. The walls are dense metal — lead, or something heavier than lead — curving inward, everything in the space leaning toward the center where the dark matter sphere hovers. Your own body leans. Your clothes hang toward it. Dust drifts not downward but inward, spiraling toward the sphere in lazy orbits. The floor slopes in every direction toward the center, a gravity well made architectural.[paragraph break]Through the heavy walls, distorted by gravitational lensing, you can see the proto-plane: a space of impossible geometry, where the concepts of up and down have been replaced by toward and away, and everything — light, matter, space itself — orbits.[paragraph break]Type OUT to step onto the nearest surface.”

The dark-matter-sphere is scenery in the Graviton Vessel. The description of the dark-matter-sphere is “What was the pedestal. A sphere of dark matter — visible only by its effects: the way light bends around it, the way dust spirals toward it, the way your bones ache when you stand too close, as though your skeleton is trying to migrate toward the center of mass. It is the size of a fist and it weighs more than worlds. The glyphs orbit it in tiny motes of light — only the gold one is bright.” The printed name of the dark-matter-sphere is “dark sphere”. Understand “sphere” or “dark” or “matter” or “pedestal” or “orb” as the dark-matter-sphere.

Exiting-grav-vessel is an action applying to nothing. Understand “out” or “leave” or “exit” or “step out” or “disembark” as exiting-grav-vessel when the player is in the Graviton Vessel.

Carry out exiting-grav-vessel:
	say “The dense walls collapse — not outward, inward, the metal compressing into the dark matter sphere until vessel and sphere are one, a tiny point of impossible mass that drops through the floor and vanishes. Gravity shifts. The floor you were standing on is now a wall, or a ceiling, or a concept that no longer applies. You tumble briefly, then your feet find purchase on a surface that your inner ear insists is down, even though your eyes say otherwise.[paragraph break]You are standing on the inside of a curved surface. Above you — or beyond you, or below you — the proto-plane extends in geometries that make your temples throb.”;
	now the player is in the Gravity Well.

Chapter 2 - The Gravity Well

The Gravity Well is a room. The description of the Gravity Well is “A curved surface — the inside of a sphere, or the outside of a bowl, or something that is both depending on which direction you are facing. The surface is smooth grey stone, featureless, and gravity pulls you toward it from every direction, keeping your feet planted regardless of the surface's curvature. Around you, the proto-plane is visible: a void populated by objects in orbit — chunks of stone, crystallized light, structures of compressed matter, all circling unseen centers of mass in trajectories that weave and intersect and occasionally collide in slow, silent detonations of debris.[paragraph break]To the north, the curved surface steepens into an impossible incline. To the east, a bridge of stone connects to a floating structure that orbits a visible mass.”

The orbital-debris is scenery in the Gravity Well. The description of the orbital-debris is “The space around the gravity well is filled with objects in orbit — not around the well itself but around dozens of unseen mass-points scattered through the void. Chunks of stone the size of buildings drift past in stately procession, their surfaces weathered by tidal forces into smooth, organic shapes. Occasionally two orbits intersect and the objects collide — no sound, no explosion, just a slow-motion merging of mass, two rocks becoming one, settling into a new orbit around a new center.” The printed name of the orbital-debris is “debris”. Understand “debris” or “objects” or “rocks” or “stone” or “orbit” as the orbital-debris.

Chapter 3 - The Tidal Slope

The Tidal Slope is a room. The Tidal Slope is north of the Gravity Well. The description of the Tidal Slope is “The surface curves upward — or inward, or outward — at an angle that should be impossible to stand on, but gravity here is not a direction, it is a relationship, and your relationship to this surface is: down. You walk on a slope that your eyes say is vertical but your feet insist is flat. The effect is nauseating. Your inner ear and your visual cortex are having an argument that neither can win.[paragraph break]At the top of the slope — if top means anything — a mass is visible. Not an object, but a point where space curves so sharply that light forms a bright ring around it, a gravitational lens the size of a doorway. Beyond the lens, distorted but recognizable: a landscape. Mountains. A sky. The prime material, refracted through a lens of pure gravity.”

The gravity-lens is scenery in the Tidal Slope. The description of the gravity-lens is “A point of such gravitational density that light bends around it in a ring — an Einstein ring, a halo of lensed photons from the world beyond. Through the distortion, you can see a landscape: mountains, snow-capped and ancient, under a sky of deep blue. The image is curved, compressed, warped by the gravity that creates the lens, but it is real. The prime material, visible through a window made of bent spacetime.” The printed name of the gravity-lens is “gravity lens”. Understand “lens” or “ring” or “halo” or “gravity” or “light” as the gravity-lens.

Stepping-through-lens is an action applying to nothing. Understand “enter lens” or “step through” or “touch lens” or “enter ring” or “go through” as stepping-through-lens when the player is in the Tidal Slope.

Carry out stepping-through-lens:
	say “You step toward the lens. Gravity intensifies with every step — your legs grow heavy, your spine compresses, the very air thickens as spacetime curves around the mass-point. One more step. Your body stretches — not painfully, but strangely, your perspective elongating, the world narrowing to a tunnel of distorted light with the lens at its end.[paragraph break]You step through.[paragraph break]The effect is instantaneous and total. One moment you are on the tidal slope, compressed by gravity that has no right to exist. The next you are stumbling forward onto solid rock, ordinary gravity catching you and pulling you to your knees. The air is thin. Cold. Mountain air. You are on a mountain pass, snow on the peaks around you, the sky a deep and honest blue, and gravity is 9.8 meters per second squared and not a fraction more.[paragraph break]Behind you, the air shimmers briefly — the lens collapsing as the proto-plane seals shut — and then nothing. Just mountains.”;
	now the player is in the Cairn Pass.

Chapter 4 - The Orbital Bridge

The Orbital Bridge is a room. The Orbital Bridge is east of the Gravity Well. The description of the Orbital Bridge is “A bridge of compressed stone connecting the gravity well to a floating structure that orbits a visible mass — a sphere of dark material, five meters across, around which the structure circles in a slow, stately procession. Walking the bridge is disorienting: gravity shifts with every step, pulling you toward the mass, then toward the structure, then toward the bridge itself, a constant negotiation between competing centers. The structure ahead is a platform of fused stone, polished smooth by tidal forces, rotating slowly around the dark sphere.”

The bridge-mass is scenery in the Orbital Bridge. The description of the bridge-mass is “A sphere of dark material — not black, not grey, but dense, the color of compressed space. Light bends around it visibly, the stars and structures beyond it smeared into arcs. It is five meters across and it weighs more than it should — you can feel it in your bones, a pull that has nothing to do with direction and everything to do with mass. The floating platform orbits it at a distance of perhaps twenty meters, completing one revolution every few minutes.” The printed name of the bridge-mass is “dark sphere”. Understand “sphere” or “mass” or “dark” or “ball” as the bridge-mass.

Chapter 5 - Gravity Death

The Singularity Approach is a room. The Singularity Approach is north of the Orbital Bridge. The description of the Singularity Approach is “Beyond the orbital platform, drawn by curiosity or something less voluntary, you drift toward a region where the gravitational distortion is stronger — much stronger. Space itself warps around a point of mass so extreme that light cannot escape it. A singularity. A black hole in miniature, the fundamental expression of the proto-plane's nature: gravity without limit, without mercy, without end.”

Every turn when the player is in the Singularity Approach:
	say “The singularity finds you.[paragraph break]It doesn't pull. That word implies effort, implies the possibility of resistance. It simply curves the space you occupy toward itself, and you follow, because you are in space and space is going there. Spaghettification — the word is absurd and precise and it is happening to you. Your body elongates along the axis of the gravitational gradient, your feet pulling ahead of your head, your cells separating along tidal lines, your consciousness stretching into a thin bright thread of awareness drawn toward a point of infinite density.[paragraph break]The last thing you experience is not pain but geometry — the shape of spacetime closing around you like a fist, compressing everything you are into everything you were, which is: mass. Just mass. Undifferentiated and eternal.”;
	end the story saying “Mass returns to mass. The equation balances.”

Chapter 6 - Gravity Return

The Cairn Pass is a room. The description of the Cairn Pass is “A mountain pass between two snow-capped peaks, high enough that the air is thin and cold and every breath is an achievement. A cairn of stacked stones marks the highest point — old stones, placed by hands long gone, maintained by tradition. The wind carries ice crystals that sting your face. Below, in both directions, valleys of green and brown descend toward civilization: villages, roads, the thin thread of a river catching the light.[paragraph break]The sky is blue. Gravity is simple. Down is down. You have never been so grateful for the limitations of a three-dimensional universe.”

The cairn-stones are scenery in the Cairn Pass. The description of the cairn-stones is “Stacked stones, each one placed by a different hand over centuries. A marker, a memorial, a declaration: people were here. People walked this pass and left these stones and gravity held the stones in place and the world made sense. You add a stone to the pile — a small one, grey and smooth. It stays where you put it. Down is down.” The printed name of the cairn-stones is “cairn”. Understand “cairn” or “stones” or “rocks” or “stack” as the cairn-stones.

Part 18 - Xyrokk

Chapter 1 - Boarding the Kettle Black

Instead of entering the kettle-black:
	say “You pull yourself through the open airlock, the string of lights brushing your shoulder. Gravity catches you on the other side — the ship's internal spin providing a half-g pull that settles your stomach. The airlock cycles behind you.”;
	now the player is in the Kettle Black Hold.

The Kettle Black Hold is a room. The description of the Kettle Black Hold is “The main hold of the Kettle Black — a cavernous space divided by cargo netting into working areas. Crates of processed ore are mag-locked to the deck. The walls are bare hull, patched and re-patched, every surface covered in the accumulated grime of decades of deep-space hauling. A bunk alcove is bolted to the port wall. The air smells of engine grease, instant coffee, and the particular human staleness of a ship lived in too long.[paragraph break]A woman in stained coveralls is working at a tool bench near the forward bulkhead, her back to you. She hasn't turned around, but she knows you're here.”

The hold-cargo is scenery in the Kettle Black Hold. The description of the hold-cargo is “Crates of processed ore, each one mag-locked to the deck and stamped with refinery codes. The stamps are from a dozen different sources — Praxis salvage yards, Belt mining ops, Ryftren industrial platforms. The Kettle Black picks up work where she can find it.” The printed name of the hold-cargo is “cargo crates”. Understand “crates” or “cargo” or “ore” or “boxes” as the hold-cargo.

The hold-bunk is scenery in the Kettle Black Hold. The description of the hold-bunk is “A fold-down bunk bolted to the port wall, with a thin mattress and a blanket that might once have been blue. A datapad is clipped to the wall beside it, showing a navigation chart with a route plotted from Praxis to Xyrokk.” The printed name of the hold-bunk is “bunk”. Understand “bunk” or “bed” or “mattress” or “datapad” as the hold-bunk.

Vasska is a person in the Kettle Black Hold. The description of Vasska is “A stocky woman in her fifties, arms thick with muscle and decorated with faded tattoos in spacer script. Her hair is cropped close to the skull, grey at the temples. Her hands are never still — always adjusting something, tightening something, fixing something. She has the look of someone who has been in space long enough that gravity is a suggestion rather than a law. Her eyes are sharp and tired and not unkind.”

Instead of talking to Vasska:
	say “'Xyrokk run.' She doesn't look up from the manifold she's reassembling. 'Hauling processed ore back to the smelters in the Ash Quarter. Got a spare bunk if you've got the creds — forty, flat rate, no refunds if you puke during atmospheric entry.' She scratches her jaw with an oily hand. 'We shove off when I say we shove off. But if you're aboard and you want to go —' She glances at you for the first time. 'Just tell me to shove off. Simple enough.'”

Instead of going in the Kettle Black Hold:
	say “You duck back through the airlock. The string of lights brushes your shoulder on the way out.”;
	now the player is in Docking Slip 1B.

Chapter 2 - Departure to Xyrokk

Commanding-shove-off is an action applying to nothing. Understand “shove off” as commanding-shove-off when the player is in the Kettle Black Hold.

Carry out commanding-shove-off:
	say “Vasska grunts. 'Right then.'[paragraph break]She doesn't rush. She finishes what she's doing — seals the manifold, wipes her hands on a rag, tosses the rag into a bin. Then she moves forward to the cockpit with the unhurried confidence of a woman who has done this ten thousand times. Clamps release. The ship shudders. Through a porthole, Praxis Station drifts away — a dark mass of metal against the light of the Maw.[paragraph break]The Kettle Black burns hard for twelve hours. You sleep in the bunk and eat rehydrated rations and Vasska doesn't talk except to say 'Strap in' when the atmospheric entry alarm sounds. The entry is brutal — the hull screams, the ship shakes like something trying to die, and the portholes glow cherry-red.[paragraph break]Then it's over. Dust. Light. A sky the color of bleached bone. The ship settles onto a landing field with a crunch of sand and cooling metal.[paragraph break]'Xyrokk,' Vasska says. 'Don't drink the water. Don't insult the architecture. Come back in one piece or don't — I'm not waiting.'[paragraph break]The cargo ramp drops and heat hits you like a wall.”;
	now the player is in the Xyrokk Landing Field.

Chapter 3 - The Landing Field

The Xyrokk Landing Field is a room. The description of the Xyrokk Landing Field is “A vast hardpan of cracked orange clay stretching to the horizon under a white sun that turns the sky the color of old bone. Heat haze distorts everything beyond fifty meters — the parked ships shimmer and warp like mirages. Dozens of vessels sit on the field, ranging from haulers like the Kettle Black to sleek Ryftren military cutters to things you don't recognize — organic-hulled vessels, crystalline structures, a ship that appears to be made of compressed sand.[paragraph break]The city rises to the north. It fills the horizon — tier upon tier of sandstone and metal and holographic signage, climbing from the desert floor into the bleached sky. Ancient and modern and everything between, stacked and layered and fused together over millennia. The continent-city of Xyrokk. The only thing on this planet worth naming.”

The landing-field-ships are scenery in the Xyrokk Landing Field. The description of the landing-field-ships is “Ships from every corner of known space and a few corners that aren't on the maps. Haulers, cutters, traders, things with hulls that seem to be alive, things with no hulls at all. The landing field is the only flat ground on Xyrokk that isn't covered in city. Give it another century and the city will swallow it too.” The printed name of the landing-field-ships is “ships”. Understand “ships” or “vessels” or “haulers” or “cutters” as the landing-field-ships.

The xyrokk-sun is scenery in the Xyrokk Landing Field. The description of the xyrokk-sun is “A white dwarf star, small and vicious, pouring radiation onto a planet that has learned to endure it. The light is flat and harsh, washing out color, turning everything into shades of orange and white. No clouds. No moisture. Just light and heat and the slow patience of a desert that was here before the city and will be here after.” The printed name of the xyrokk-sun is “sun”. Understand “sun” or “star” or “light” as the xyrokk-sun.

Chapter 4 - The Gate of Ashes

The Gate of Ashes is a room. The Gate of Ashes is north of the Perimeter Road. The description of the Gate of Ashes is “The main gate into Xyrokk — and it has been a gate for longer than most civilizations have existed. The structure is enormous: twin pylons of black sandstone, thirty meters tall, carved with reliefs so old the figures have been worn to ghosts by millennia of windblown sand. The pylons are the original gate. Built over them, around them, through them: Ryftren-era durasteel reinforcement, modern polymer weather shielding, holographic customs displays, a checkpoint staffed by bored Imperial soldiers in sand-colored armor.[paragraph break]Through the gate, the city. Streets branch in every direction, rising and falling with the terrain, layered and overbuilt and ancient. The landing field is back to the south. The main avenue — the Ashway — leads north into the city's heart.”

The gate-pylons are scenery in the Gate of Ashes. The description of the gate-pylons is “Black sandstone, quarried from deposits that no longer exist. The carvings are five thousand years old at minimum — figures in procession, carrying objects, approaching a threshold. Scholars argue about what the carvings depict. The carvings don't care. They have outlasted every interpretation and will outlast every scholar.” The printed name of the gate-pylons is “pylons”. Understand “pylons” or “gate” or “sandstone” or “carvings” or “reliefs” as the gate-pylons.

The gate-soldiers are scenery in the Gate of Ashes. The description of the gate-soldiers is “Imperial Ryftren soldiers in sand-colored composite armor, staffing a checkpoint they clearly consider a punishment posting. They wave people through with minimal scrutiny — Xyrokk is too old and too stubborn for the Empire to police effectively, and everyone knows it. The soldiers know it most of all.” The printed name of the gate-soldiers is “soldiers”. Understand “soldiers” or “guards” or “checkpoint” or “imperial” as the gate-soldiers.

Chapter 5 - The Ashway

The Ashway is a room. The Ashway is north of the Ashway Intersection. The description of the Ashway is “The main boulevard of Xyrokk — wide enough for ground vehicles, though most traffic is foot and hover-cart. The street is paved in slabs of the same black sandstone as the gate, worn smooth by centuries of passage. Buildings rise on both sides in layers: the ground floors are ancient stone, five thousand years old, their doorways carved with geometric patterns that predate the Ryftren Empire by millennia. Above the stone, modern construction — hab units, signal arrays, neon signs in a dozen scripts, holographic advertisements for off-world goods. The city is a palimpsest, every era built on top of the last, none of them demolished because nothing on Xyrokk is ever demolished. It just gets built over.[paragraph break]Vendor stalls line both sides, selling everything from desert spices to black-market implants. The Ashway continues north. A narrow passage descends to the east, into the older quarters.”

The ashway-vendors are scenery in the Ashway. The description of the ashway-vendors is “Stalls and carts and blankets spread on the ancient stone, selling things you recognize — food, tools, fabric — alongside things you don't: jars of sand sorted by color and geological era, carved stone tablets that hum when you touch them, dried organisms from the deep desert that might be plants or might be something else entirely. The vendors call out in accented Imperial Common and in older languages that the translation implants can't parse.” The printed name of the ashway-vendors is “vendors”. Understand “vendors” or “stalls” or “carts” or “market” or “merchants” as the ashway-vendors.

The ashway-architecture are scenery in the Ashway. The description of the ashway-architecture is “The buildings of Xyrokk grow upward from foundations that were ancient when the Ryftren Empire was a border skirmish. Black sandstone at the base, hand-carved, fitted without mortar. Above that, centuries of addition — fired brick, poured concrete, durasteel framing, modern polymer. Each layer is a chapter. The city is its own archaeology, its own museum, and it charges no admission because it doesn't care if you understand it or not.” The printed name of the ashway-architecture is “buildings”. Understand “buildings” or “architecture” or “stone” or “walls” or “construction” as the ashway-architecture.

Chapter 6 - The Sunken Quarter

The Sunken Quarter is a room. The Sunken Quarter is east of the Upper Sunken Street. The description of the Sunken Quarter is “A section of the city that the desert has partially reclaimed — or that was always half-buried, built into the dunes rather than on top of them. The street descends in broad steps, each one older than the last, until you're walking between buildings whose upper floors are at your feet and whose ground floors are buried in compacted sand. The air is cooler here, shaded by the buildings above, and the light filters down in golden shafts through gaps in the overbuilt layers.[paragraph break]This is old Xyrokk. The buildings here predate everything — their stone is different, darker, harder, carved with a precision that suggests tools or techniques that have been lost. The geometric patterns on the doorways are not decoration. You can feel them — a low vibration, a hum at the edge of hearing, as though the carvings are still doing whatever they were carved to do.[paragraph break]A narrow passage leads north, deeper into the old quarter. The Ashway is back to the west.”

The sunken-carvings are scenery in the Sunken Quarter. The description of the sunken-carvings is “Geometric patterns carved into the doorways of the oldest buildings — not the decorative arabesques of the surface city but something more fundamental: interlocking shapes that tesselate in ways that seem to shift when you look away. They hum. The vibration is sub-audible but present, felt in the teeth and the fingertips. The carvings are five thousand years old and they are still working. No one alive knows what they do.” The printed name of the sunken-carvings is “carvings”. Understand “carvings” or “patterns” or “geometric” or “symbols” as the sunken-carvings.

The sunken-sand is scenery in the Sunken Quarter. The description of the sunken-sand is “Fine orange sand, compacted by time into something harder than sandstone. The desert is patient. It has been filling the Sunken Quarter for millennia, grain by grain, and it will continue long after the city above has been buried too. Some of the buried ground-floor windows are visible through the sand — dark openings, leading into spaces that haven't seen light in centuries.” The printed name of the sunken-sand is “sand”. Understand “sand” or “dunes” or “desert” or “buried” as the sunken-sand.

Chapter 7 - The Resonance Hall

The Resonance Hall is a room. The Resonance Hall is north of the Resonance Approach. The description of the Resonance Hall is “A vast chamber beneath the old quarter — not a building but a space carved from the living rock, its ceiling held up by columns of the same dark stone as the oldest buildings. The geometric carvings cover every surface: walls, columns, floor, ceiling. The hum is louder here, layered, almost musical, a chord sustained by stone for five millennia. The air tastes of mineral dust and deep time.[paragraph break]At the far end of the hall, a doorway. Not a modern doorway — an arch of dark stone, carved with patterns that pulse with faint amber light. The arch frames a view of somewhere else: a corridor, metal-walled, lit by strip lighting. Station architecture. The transit arch. Ancient technology connecting Xyrokk to a network older than the city itself.”

The hall-columns are scenery in the Resonance Hall. The description of the hall-columns is “Columns of dark stone, each one carved with geometric patterns that interlock with the patterns on the walls and floor and ceiling, creating a single continuous design that encompasses the entire chamber. The columns vibrate — you can feel it when you touch them, a deep sustained oscillation that has been running for thousands of years without input or maintenance. Whatever powers the carvings, whatever purpose they serve, it is still functioning. It will still be functioning when the sun goes out.” The printed name of the hall-columns is “columns”. Understand “columns” or “pillars” or “stone” as the hall-columns.

The transit-arch is scenery in the Resonance Hall. The description of the transit-arch is “An arch of dark stone pulsing with amber light — the same stone, the same carvings, but here concentrated, focused, doing their work visibly. Through the arch, you can see a different place: metal walls, strip lighting, the recycled-air haze of a space station. The arch is a door between worlds, built by people who understood that distance is a convention and that stone, properly carved, can disagree with it.” The printed name of the transit-arch is “transit arch”. Understand “arch” or “transit” or “doorway” or “portal” as the transit-arch.

Stepping-through-transit-arch is an action applying to nothing. Understand “enter arch” or “step through” or “enter doorway” or “go through arch” or “enter portal” as stepping-through-transit-arch when the player is in the Resonance Hall.

Carry out stepping-through-transit-arch:
	say “You step through the arch. The stone hums — a single clear note, rising in pitch as you cross the threshold. For a moment you are between: the desert heat on your back, the recycled chill on your face, the amber light and the strip lighting overlapping in your vision. Then the desert is gone. The note fades. You are standing in a corridor of metal and composite, the familiar hum of station infrastructure around you, the familiar taste of recycled air in your mouth.[paragraph break]Behind you, a section of wall. No arch. No stone. No carvings. Just a wall that was always a wall, as far as the station is concerned.[paragraph break]You are in the Ring Transtube Station. You have no idea how.”;
	now the player is in the Ring Transtube Station.

Part 19 - Acheron

Chapter 1 - Boarding the Courier

Instead of entering the unnamed-courier:
	say “You pull the airlock open. It moves without resistance — no creak, no corroded hinges, silent as a held breath. The amber light inside is warm and steady and doesn't come from any visible source. You pull yourself through.[paragraph break]The airlock seals behind you. You didn't touch it.”;
	now the player is in the Courier Sanctum.

The Courier Sanctum is a room. The description of the Courier Sanctum is “The interior of the courier vessel — but not the interior you expected. No cockpit clutter, no cargo, no evidence of the utilitarian ship you saw from outside. The cabin is a single room, small and warm, its walls paneled in dark wood that shouldn't exist on a spacecraft. The light comes from oil lamps — actual oil lamps, brass and glass, bolted to the walls, their flames steady despite the zero-grav that should make them impossible. The air smells of old smoke and sandalwood and something underneath those scents, something metallic, something that reminds you of rust and warm copper.[paragraph break]A figure sits in a high-backed chair near the forward bulkhead, hands folded, watching you with eyes that are very dark and very still.”

The sanctum-lamps are scenery in the Courier Sanctum. The description of the sanctum-lamps is “Brass oil lamps with glass chimneys, their flames burning steady in an environment that should extinguish them instantly. The flames don't flicker. They don't consume the oil — the level in each lamp is the same, as though they have been burning forever and will never need filling. The light they cast is warm and amber and somehow older than electric light, older than fire, the light of a time before light had learned to be modern.” The printed name of the sanctum-lamps is “oil lamps”. Understand “lamps” or “lamp” or “oil” or “flames” or “light” or “brass” as the sanctum-lamps.

The sanctum-wood are scenery in the Courier Sanctum. The description of the sanctum-wood is “Dark wood paneling — real wood, not composite, not printed. You can smell it: old timber, aged and polished, the kind of wood that comes from trees that were old when they were felled and have been getting older since. The grain is tight and dark and if you look at it long enough, the patterns seem to form shapes — faces, or the suggestion of faces, or the memory of faces that were once here and are now somewhere else.” The printed name of the sanctum-wood is “wood paneling”. Understand “wood” or “paneling” or “panels” or “walls” or “grain” as the sanctum-wood.

The Pilot is a person in the Courier Sanctum. The description of the Pilot is “You can't fix the details. You look at the face and it's there — eyes, nose, mouth, the architecture of a human countenance — but the specifics slide away the moment you try to hold them. Male? Female? Old? Young? The answer changes between blinks. The only constants are the eyes: dark, still, patient with a patience that has nothing to do with personality and everything to do with duration. This person — this figure — has been waiting for a very long time. Not for you specifically. Just waiting. You happened to arrive.”

Instead of talking to the Pilot:
	say “The figure speaks. The voice is — you can't place the accent. It's every accent and none, the vowels shifting between syllables, a voice that learned language from everyone who ever spoke and never settled on a single way of doing it.[paragraph break]'You wish passage.' Not a question. 'Acheron. I know the name surprises you — you've heard it, yes? People go. People come back. People forget the going and the coming and are left with only the name, and even that fades.' A pause. The dark eyes don't blink. 'You've heard that too.'[paragraph break]The figure's hands unfold — long fingers, the nails clean and dark. 'If you wish to go, you need only ask. Say: take me across. That is all it has ever required.' The figure's smile is patient. Not warm, not cold. Patient. The smile of a person whose job is waiting and who is very, very good at it.”

Instead of going in the Courier Sanctum:
	say “You reach for the airlock. It opens before your hand touches it — silent, obliging — and you pull yourself back into the docking slip. Behind you, the airlock closes to its former crack. The amber light resumes its thin vertical line. Nothing has changed. Nothing was ever going to change unless you asked it to.”;
	now the player is in Docking Slip 1C.

Chapter 2 - The Crossing

Requesting-crossing is an action applying to nothing. Understand “take me across” as requesting-crossing when the player is in the Courier Sanctum.

Carry out requesting-crossing:
	say “The figure nods. Just once. As though the words were a key and the lock has turned.[paragraph break]Something happens. You're not sure what. The oil lamps dim — or brighten — or the light changes quality, shifting from amber to something deeper, something the color of old blood. The cabin moves, or you move within it, or the concept of position becomes temporarily optional. There is a sensation of descent. Not falling — descent, controlled and deliberate, the way an elevator descends, the way water descends, the way things descend when they are going where they were always going to go.[paragraph break]You hear water. Not see — hear. The sound of a river, slow and vast, passing beneath or beside or through the vessel. The air changes: warmer, metallic, the smell of hot iron and something organic beneath it, something that might be decay or might be a very old kind of life.[paragraph break]The figure is still there, or was never there, or has always been there. The dark eyes watch. The crossing takes no time, or it takes forever. You can feel your memory of the transit softening even as it happens — the details loosening, the sequence of events becoming uncertain, the experience dissolving into impression.[paragraph break]When you can focus again, the cabin is gone. The figure is gone. You are standing on solid ground, and the ground is iron, and the sky is not a sky.”;
	now the player is in the Iron Landing.

Chapter 3 - The Iron Landing

The Iron Landing is a room. The description of the Iron Landing is “You don't remember arriving. One moment the transit — the crossing — the thing you've already half-forgotten. The next, this.[paragraph break]You are standing on iron. The ground is iron — actual iron, oxidized in patches to the dark red of old blood, smooth in places and pitted in others, as though it has been rained on for millennia by water that isn't quite water. The air is warm. Warmer than it should be. It tastes of metal and char and something underneath those flavors that you can't name but that your body recognizes, the way your body recognizes the smell of a hospital or the sound of a siren: a signal that says wrong, wrong, this is wrong.[paragraph break]There is no sky. Above you is a ceiling — distant, dark, lit from below by a dim reddish glow that seems to come from the ground itself, from somewhere far beneath the iron surface. The light is the color of banked coals. The ceiling could be stone. It could be cloud. It could be something else. The city rises ahead of you, and it descends.”

The iron-ground is scenery in the Iron Landing. The description of the iron-ground is “Iron. Not iron ore, not iron-rich soil — iron, as though the ground was smelted and poured and cooled into a foundation for something that needed to last forever. The oxidation gives it the color of dried blood. In places, the surface is worn smooth by the passage of countless feet. In others, it is pitted and rough, as though something has been eating at it from below. When you press your palm flat against it, the metal is warm. Too warm. Heat from below.” The printed name of the iron-ground is “iron ground”. Understand “ground” or “iron” or “floor” or “surface” or “metal” as the iron-ground.

The not-sky is scenery in the Iron Landing. The description of the not-sky is “Not a sky. A ceiling. How far above you, you cannot tell — the reddish glow from below illuminates it unevenly, and the distance could be hundreds of meters or hundreds of kilometers. It is dark and it is constant and it has no stars. No sun. No weather. Just a lid on the world, pressing down with the weight of everything above it. You have the strangest feeling that the ceiling is not stone or cloud but earth — that you are inside something, beneath something, that the world above goes on without you.” The printed name of the not-sky is “sky”. Understand “sky” or “ceiling” or “above” or “glow” or “light” as the not-sky.

Chapter 4 - The Gate of the City

The Gate of the City is a room. The Gate of the City is north of the Iron Road. The description of the Gate of the City is “Iron walls. They rise from the iron ground and vanish into the dim ceiling — massive, cyclopean, constructed with a precision that has nothing to do with engineering and everything to do with intent. The walls are not built. They are declared — statements of boundary, of separation, of the difference between outside and in. The city within is visible through the gate: concentric rings of architecture descending in tiers, each ring lower than the last, a city that spirals downward like a drain.[paragraph break]The gate itself bears an inscription. Characters in a script that predates every known language — angular, deliberate, cut deep into the iron. You cannot read it. But your body can. Something in your marrow, something in the oldest part of your brain, knows what it says. The knowledge sits in your chest like a swallowed stone.[paragraph break]Through the gate, the first ring of the city. The landing field is back to the south.”

The gate-inscription are scenery in the Gate of the City. The description of the gate-inscription is “Angular characters, each one the height of a person, carved into the iron with a precision that suggests a single stroke — no corrections, no hesitation, cut once and forever. The script is unknown. Every linguistic database would return nothing. But your hindbrain knows it. Your cells know it. It is a warning, or a welcome, or a statement of terms — and the distinction between those three things, here, may not exist.” The printed name of the gate-inscription is “inscription”. Understand “inscription” or “characters” or “script” or “writing” or “words” as the gate-inscription.

The city-rings are scenery in the Gate of the City. The description of the city-rings is “Through the gate, the city is visible: concentric rings of dark architecture descending in tiers, each ring lower than the last, narrowing as they go. The outermost ring is the highest; the innermost is the lowest, the deepest, the furthest down. It is a city built as a funnel. A city designed to take things in at the top and move them, inevitably, downward. You do not know what is at the bottom. You are not sure you want to.” The printed name of the city-rings is “city”. Understand “city” or “rings” or “tiers” or “concentric” as the city-rings.

Chapter 5 - The Outer Ring

The Outer Ring is a room. The Outer Ring is north of the Outer Ring South. The description of the Outer Ring is “The first ring of the city — the outermost, the highest, the closest to the gate. The architecture is iron and dark stone, buildings that were not designed but accreted, growing from the ground like geological formations. The streets are narrow and follow the ring's curve, always turning, always circling. People move through them — figures in dark clothing, going about business with the mechanical efficiency of a routine performed so many times it has ceased to require thought.[paragraph break]They don't look at you. Not avoiding your gaze — simply not seeing you, the way you don't see furniture. You are new here. They are not. The difference is fundamental.[paragraph break]The street curves east, deeper into the ring. An alley descends to the north, toward the next ring down. The gate is back to the south.”

The ring-residents are scenery in the Outer Ring. The description of the ring-residents is “Figures. People. They have faces and bodies and clothes and they move with purpose from one place to another. But something is wrong with them, something you can't identify at first and then can't stop seeing: they don't look up. None of them. Not once. They walk and they work and they go about the business of a city, and their eyes never rise above the horizon. It's not despair. It's not submission. It's habit — the settled, ancient habit of people who have been here so long that the ceiling above is no longer worth noticing, because it has never changed and it never will.” The printed name of the ring-residents is “residents”. Understand “people” or “figures” or “residents” or “crowd” as the ring-residents.

The ring-buildings are scenery in the Outer Ring. The description of the ring-buildings is “Buildings of iron and dark stone, their architecture older than any known style — not classical, not modern, not any period you can name. Something prior. Something from before architecture became a discipline. The buildings are functional in a way that goes beyond function: they exist because they were needed, and they were needed before the concept of 'building' existed, and so they invented the concept by being the first examples of it. Everything built since has been a copy. These are the originals.” The printed name of the ring-buildings is “buildings”. Understand “buildings” or “architecture” or “stone” or “structures” as the ring-buildings.

Chapter 6 - The Registrar's Hall

The Registrar's Hall is a room. The Registrar's Hall is east of the Archive Corridor. The description of the Registrar's Hall is “A vast hall of dark stone, its ceiling lost in shadow. Shelves line every wall, floor to ceiling, and on the shelves: ledgers. Thousands of them. Tens of thousands. Bound in dark leather, their spines unmarked, each one identical to every other. The air smells of old paper and iron filings and the particular must of records kept too long in a place that has never been aired out.[paragraph break]A figure sits behind a desk of black wood at the hall's center. The Registrar. They are writing in one of the ledgers with a pen that has no inkwell, producing script in a steady, unhurried hand. When you approach, the Registrar looks up. The Registrar says your name. Not asks. Says. Your full name, pronounced correctly, spoken with the familiarity of someone who wrote it down a long time ago.”

The Registrar is a person in the Registrar's Hall. The description of the Registrar is “A figure of indeterminate age and uncertain gender, seated behind a desk that is older than the concept of desks. The Registrar's hands are long and precise, the fingers stained with ink that might be ink. Their eyes are the same dark, patient stillness as the Pilot's — the eyes of someone whose job is recording and who has been recording for longer than the things being recorded have existed. The Registrar knows your name. The Registrar has always known your name.”

Instead of talking to the Registrar:
	say “The Registrar looks at you with those dark, still eyes. 'You are early,' the Registrar says, and the voice is the sound of a pen on paper, dry and precise. 'Or late. The distinction has less meaning than you might think.' A page turns in the ledger. Your name is there, written in the same unhurried script. Beside it, a date. You can't read the date. You're not sure you want to.[paragraph break]'You may proceed inward, or you may leave. The river is to the north. The way back is always the river.' The Registrar returns to writing. You have been filed.”

The registrar-ledgers are scenery in the Registrar's Hall. The description of the registrar-ledgers is “Ledgers. An incomprehensible number of ledgers, each one bound in dark leather, each one filled with the same precise handwriting. You pull one from a shelf and open it. Names. Columns of names, each one accompanied by a date and a single word — a word in the angular script from the gate, the script you cannot read but your body understands. The word is the same for every entry. You put the ledger back. Your hands are shaking.” The printed name of the registrar-ledgers is “ledgers”. Understand “ledgers” or “ledger” or “books” or “book” or “shelves” or “records” as the registrar-ledgers.

Chapter 7 - The Inner Descent

The Inner Descent is a room. The Inner Descent is north of the Second Ring North. The description of the Inner Descent is “The alley descends — not steeply, but inevitably, each step lower than the last, the city closing in around you as you move from the outer ring toward the inner. The walls are closer here, the buildings taller, the ceiling — or sky, or lid — somehow nearer. The temperature rises. Not dramatically, but steadily, degree by degree, as though the ground beneath you remembers being something hotter and is dreaming of it.[paragraph break]The residents here are different. Fewer. Slower. Their routines are older, more worn, the grooves of habit carved deeper. Some of them pause as you pass. Not to look — to remember. You remind them of something. Something from before. Something they had when they arrived and that has since been filed away.[paragraph break]The street continues north to the embankment. The outer ring is back to the south.”

The descent-heat is scenery in the Inner Descent. The description of the descent-heat is “The warmth rising from below. Each step deeper into the city brings another fraction of a degree. It's not uncomfortable yet. But it will be. The heat comes from somewhere far beneath the iron ground — from the lowest ring, the deepest level, the bottom of the funnel. You don't know what's down there. The residents don't talk about what's down there. Their silence on the subject is the most articulate thing about them.” The printed name of the descent-heat is “heat”. Understand “heat” or “warmth” or “temperature” or “hot” as the descent-heat.

The slow-residents are scenery in the Inner Descent. The description of the slow-residents is “They move like people underwater — not slow in body but slow in purpose, their actions separated by pauses that stretch longer than the actions themselves. A woman stands in a doorway, holding a cup, looking at nothing. A man walks three steps, stops, walks three more. They have been here for a very long time. Time has made them patient, and patience has made them still, and stillness has made them part of the architecture. When you pass, some of them look at you — and in their eyes, briefly, something sparks. Recognition. Envy. You still have speed. You still have urgency. They remember what that felt like.” The printed name of the slow-residents is “residents”. Understand “people” or “residents” or “figures” or “woman” or “man” as the slow-residents.

Chapter 8 - The Embankment

The Embankment is a room. The Embankment is north of the Narrowing. The description of the Embankment is “The city ends here — or pauses. The inner rings descend further, visible across the water, but between here and there is the river. A river of dark water that flows without current — flat, black, still, reflecting nothing. Not even you. You stand at the edge and look down and the water looks back, and what it shows you is not your face but an absence where your face should be.[paragraph break]The air is cooler here, by the water. The only cool place in a city that gets warmer as it goes down. The river is a boundary. You can feel it — not just a physical barrier but a conceptual one, a line drawn between what you are and what you might become if you stayed long enough.[paragraph break]A figure stands at the water's edge. Patient. Waiting. A small vessel — a boat, or something that serves the function of a boat — rests on the dark water beside them. The figure holds a long pole. The inner rings are visible across the water to the north, but the only way across is the vessel.”

The dark-river is scenery in the Embankment. The description of the dark-river is “Water that is not water. It flows without moving. It is dark without being dirty — not muddy, not polluted, but dark in the way that space is dark, dark as a fundamental property rather than an absence of light. The surface is perfectly flat, perfectly still. When you kneel at the edge and reach toward it, the surface dimples away from your fingers — not rippling, retreating. The water does not want to be touched. Or it is not water. Or wanting is the wrong word for what it does.” The printed name of the dark-river is “river”. Understand “river” or “water” or “dark” or “surface” as the dark-river.

The Ferryman is a person in the Embankment. The description of the Ferryman is “A figure in dark clothing — robes, or a coat, or something that moves like fabric and might not be. The face is there and not there in the way the Pilot's face was there and not there — features that exist but refuse to be catalogued, a countenance that your memory will not retain. The hands are visible: long, dark, wrapped around the pole of the vessel. They are the same hands as the Pilot's. Or they are similar. Or the Pilot was this figure all along, and the courier and the crossing and the city were the long way around to this riverbank, where a figure with a pole has always been waiting to take you back.”

Instead of talking to the Ferryman:
	say “The figure speaks, and the voice is the Pilot's voice, or its echo, or its source. 'You wish to return.' Not a question. It is never a question here.[paragraph break]'The fare is the crossing itself. You will forget. Not everything — the name, the iron, the sense of it. Those will linger. But the details will go. The route. The faces. The words on the gate. They will dissolve like a dream dissolves, leaving only the shape of having dreamed.'[paragraph break]The figure gestures to the vessel with the pole. 'Board the ferry. I will take you across. When you arrive, you will be where you began. You will not remember how you got there. This is the fare. This has always been the fare.'”

The ferryman-vessel is scenery in the Embankment. The description of the ferryman-vessel is “A small flat-bottomed vessel — a boat, a raft, a barge — made of dark wood that might be the same wood as the paneling in the courier's cabin. It sits on the dark water without sitting in it — not floating, precisely, but resting on the surface the way a leaf rests on still water, barely dimpling the surface. There is room for one passenger. There has only ever been room for one.” The printed name of the ferryman-vessel is “ferry”. Understand “ferry” or “boat” or “vessel” or “barge” or “raft” as the ferryman-vessel.

Chapter 9 - The Return

Boarding-the-ferry is an action applying to nothing. Understand “board ferry” or “board boat” or “enter ferry” or “enter boat” or “board vessel” or “cross river” or “cross” as boarding-the-ferry when the player is in the Embankment.

Carry out boarding-the-ferry:
	say “You step into the vessel. The dark wood is warm underfoot. The figure pushes off from the bank with the pole, and the dark water — the not-water — parts silently around the hull. There is no sound. No splash. No ripple. Just motion, smooth and inevitable, the vessel sliding across the surface of a river that has been crossed in one direction or another since before rivers had names.[paragraph break]The city recedes behind you. The iron walls, the concentric rings, the reddish glow — they diminish, fade, dissolve into the dark. The figure poles in silence. The crossing takes — you don't know. A minute. An hour. A breath.[paragraph break]And you're already forgetting. You can feel it happening — the details softening, the iron walls becoming 'walls,' the Registrar's face becoming 'a face,' the inscription on the gate becoming 'something written.' The shape remains. The specifics go. You remember iron. You remember warmth. You remember a name spoken that was yours. You remember a river.[paragraph break]You close your eyes.[paragraph break]You open them.[paragraph break]You are in the sleeping cube. The coffin lid is closed above you. The station hum vibrates through the thin mattress. The Warrens smell of recycled air and too many bodies. You are exactly where you began.[paragraph break]You had a dream. You think you had a dream. Something about iron, and a city, and a river. The details are gone — melted, dissolved, taken as fare for a crossing you can't remember making. You are left with a name. Acheron. And even that is fading.”;
	now the player is in the Sleeping Cube.
