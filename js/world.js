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

  class World {
    constructor() {
      this.rooms = Object.create(null);
      this.start = null; // id of the starting room
    }

    /** Create + register a room. First room added becomes the default start. */
    room(spec) {
      const r = new Room(spec);
      this.rooms[r.id] = r;
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

  MUD.World = World;
})(typeof window !== 'undefined' ? window : this);
