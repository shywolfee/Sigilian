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

Docking Slip 1A is a room. Docking Slip 1A is zero-grav. Docking Slip 1A is west of Ring Upper West. The description of Docking Slip 1A is “The outermost berth in the Ring's upper-west quadrant. A massive set of docking clamps lines the outer wall, currently empty — the slip is vacant. Through the berth doors, sealed now, you would see open space. Tether points and fuel umbilicals hang loose, waiting for the next ship. The junction is back to the east.”

The slip-1a-clamps are scenery in Docking Slip 1A. The description of the slip-1a-clamps is “Heavy magnetic docking clamps, each one the size of a ground vehicle. They're retracted into their housings, waiting. When a ship docks, these lock onto the hull and hold it fast against the station's rotation.” The printed name of the slip-1a-clamps is “docking clamps”. Understand “clamps” or “docking” or “magnetic” as the slip-1a-clamps.

The slip-1a-umbilicals are scenery in Docking Slip 1A. The description of the slip-1a-umbilicals is “Fuel lines, power feeds, data cables, and atmo hookups — everything a docked ship needs to keep running on station power instead of burning its own reserves. They drift like tentacles in the zero-grav.” The printed name of the slip-1a-umbilicals is “fuel umbilicals”. Understand “umbilicals” or “fuel” or “lines” or “hookups” as the slip-1a-umbilicals.

Section 2 - Slip 1B

Docking Slip 1B is a room. Docking Slip 1B is zero-grav. Docking Slip 1B is west of Ring Mid West. The description of Docking Slip 1B is “A mid-level berth on the west side. This slip is occupied — a battered ore hauler sits in the clamps, its hull scarred and discolored by repeated atmospheric entries. The ship's name, KETTLE BLACK, is stenciled on the bow in faded letters. Crew umbilicals connect the ship to the station. The junction is back to the east.”

The kettle-black is scenery in Docking Slip 1B. The description of the kettle-black is “An ore hauler, maybe sixty meters stem to stern. It's seen better decades. The hull is a patchwork of original plating and welded repairs, and the engine nacelles are caked with exhaust residue. Someone has hung a string of lights along the crew airlock — a touch of home.” The printed name of the kettle-black is “Kettle Black”. Understand “kettle” or “black” or “ship” or “hauler” or “ore” as the kettle-black.

Section 3 - Slip 1C

Docking Slip 1C is a room. Docking Slip 1C is zero-grav. Docking Slip 1C is west of Ring Lower West. The description of Docking Slip 1C is “The lower-west berth. A small courier vessel occupies the slip, sleek and dark where the haulers are boxy and scarred. No name is visible on the hull — either it's been removed or it was never painted. The ship's running lights are off. It looks abandoned, or wants to.”

The unnamed-courier is scenery in Docking Slip 1C. The description of the unnamed-courier is “A courier-class vessel — fast, lightly armed, built for speed over cargo capacity. The hull is coated in some kind of radar-absorbent material that drinks the light. No transponder beacon. No name. No lights. Everything about this ship says: don't look at me.” The printed name of the unnamed-courier is “courier vessel”. Understand “courier” or “vessel” or “ship” or “dark” as the unnamed-courier.

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
