/*
 * world.js — the registry that owns rooms and provides a fluent builder.
 *
 * A World keeps every room by id and offers small factory helpers so content
 * files (world-data.js) read like declarative level data rather than plumbing.
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;
  const { Room, Item, Mob } = MUD;

  /* ------------------------------------------------------------------ *
   *  Area — a named division of the world that owns a set of rooms.
   *  Areas carve the map into regions (a city, a forest, a dungeon) so
   *  the game can answer "where am I?" and "what regions exist?".
   * ------------------------------------------------------------------ */
  class Area {
    constructor(spec) {
      spec = spec || {};
      this.id = spec.id || MUD.util.uid('area');
      this.name = spec.name || 'Somewhere';
      this.description = spec.description || '';
      this.rooms = [];
    }

    addRoom(room) {
      if (room.area === this) return room;
      if (room.area) room.area.removeRoom(room);
      room.area = this;
      this.rooms.push(room);
      return room;
    }

    removeRoom(room) {
      const i = this.rooms.indexOf(room);
      if (i >= 0) this.rooms.splice(i, 1);
      if (room.area === this) room.area = null;
      return room;
    }

    get roomCount() { return this.rooms.length; }
  }

  class World {
    constructor() {
      this.rooms = Object.create(null);
      this.areas = Object.create(null);
      this.start = null;        // id of the starting room
      this._activeArea = null;  // rooms created now join this area by default
    }

    /**
     * Create + register an Area and make it the active one, so subsequent
     * `world.room(...)` calls fall into it automatically.
     */
    area(spec) {
      const a = new Area(spec);
      this.areas[a.id] = a;
      this._activeArea = a;
      return a;
    }

    getArea(id) { return this.areas[id] || null; }

    allAreas() {
      return Object.keys(this.areas).map((k) => this.areas[k]);
    }

    /**
     * Create + register a room. The room joins `spec.area` if given, else the
     * currently active area. First room added becomes the default start.
     */
    room(spec) {
      const r = new Room(spec);
      this.rooms[r.id] = r;
      const area = spec && spec.area ? spec.area : this._activeArea;
      if (area) area.addRoom(r);
      if (!this.start) this.start = r.id;
      return r;
    }

    get(id) { return this.rooms[id] || null; }

    setStart(idOrRoom) {
      this.start = idOrRoom && idOrRoom.id ? idOrRoom.id : idOrRoom;
      return this;
    }

    startRoom() {
      return this.get(this.start) || firstValue(this.rooms);
    }

    /** Convenience factories so content stays terse. */
    item(spec) { return new Item(spec); }
    mob(spec) { return new Mob(spec); }

    allRooms() {
      return Object.keys(this.rooms).map((k) => this.rooms[k]);
    }

    /** Every actor currently in the world (for ticking, etc.). */
    allActors() {
      const out = [];
      for (const room of this.allRooms()) {
        for (const o of room.contents) if (o.is('actor')) out.push(o);
      }
      return out;
    }
  }

  function firstValue(obj) {
    for (const k in obj) return obj[k];
    return null;
  }

  MUD.Area = Area;
  MUD.World = World;
})(typeof window !== 'undefined' ? window : this);
