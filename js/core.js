/*
 * core.js — foundations for the Sigilian MUD framework.
 *
 * Everything hangs off a single global `MUD` namespace so the game runs by
 * opening index.html directly (no bundler, no server, no ES-module CORS pain).
 * Later files add to this same object.
 */
(function (global) {
  'use strict';

  const MUD = global.MUD || (global.MUD = {});

  /* ------------------------------------------------------------------ *
   *  Small utilities
   * ------------------------------------------------------------------ */
  const util = {
    /** Auto-incrementing id source, namespaced by prefix. */
    _ids: Object.create(null),
    uid(prefix) {
      prefix = prefix || 'id';
      const n = (util._ids[prefix] = (util._ids[prefix] || 0) + 1);
      return prefix + '_' + n;
    },

    /** Turn "a foo" / "an apple" / "the thing" -> "foo"/"apple"/"thing". */
    stripArticle(s) {
      return String(s || '').replace(/^\s*(a|an|the)\s+/i, '').trim();
    },

    /** "the {name}", respecting a proper-noun flag. */
    theName(entity) {
      if (!entity) return 'something';
      if (entity.proper) return entity.name;
      return 'the ' + entity.name;
    },

    /** "a/an {name}", respecting proper nouns and an explicit article. */
    aName(entity) {
      if (!entity) return 'something';
      if (entity.proper) return entity.name;
      if (entity.article) return entity.article + ' ' + entity.name;
      return util.indefinite(entity.name);
    },

    indefinite(word) {
      const first = String(word || '').trim().charAt(0).toLowerCase();
      const article = 'aeiou'.indexOf(first) >= 0 ? 'an' : 'a';
      return article + ' ' + word;
    },

    /** Uppercase the first character of a string. */
    capitalize(s) {
      s = String(s == null ? '' : s);
      return s.charAt(0).toUpperCase() + s.slice(1);
    },

    /** Join a list into "a, b and c". */
    andList(items) {
      items = items.filter(Boolean);
      if (items.length === 0) return '';
      if (items.length === 1) return items[0];
      return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
    },

    clamp(n, lo, hi) {
      return Math.max(lo, Math.min(hi, n));
    },

    /** Random integer in [lo, hi] inclusive. */
    randInt(lo, hi) {
      return lo + Math.floor(Math.random() * (hi - lo + 1));
    },

    pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
  };

  /* ------------------------------------------------------------------ *
   *  Name matching — the heart of "look at fount" matching "fountain".
   *
   *  Every matchable entity exposes `keywords` (array of nouns). A player
   *  token matches an entity when it is a case-insensitive prefix of the
   *  entity's name or of any of its keywords. Exact matches rank above
   *  prefix matches, and whole-name matches above keyword matches, so the
   *  best candidate wins when several things share a prefix.
   * ------------------------------------------------------------------ */
  const match = {
    /**
     * Score how well `token` identifies `entity`.
     * Returns a number > 0 on a match (higher = better) or 0 for no match.
     */
    score(token, entity) {
      if (!entity) return 0;
      token = String(token || '').trim().toLowerCase();
      if (!token) return 0;

      const targets = [];
      if (entity.name) targets.push({ text: entity.name.toLowerCase(), weight: 100 });
      const kws = entity.keywords || [];
      for (let i = 0; i < kws.length; i++) {
        targets.push({ text: String(kws[i]).toLowerCase(), weight: 60 });
      }

      let best = 0;
      for (const t of targets) {
        if (t.text === token) {
          best = Math.max(best, t.weight + 40); // exact
        } else if (t.text.indexOf(token) === 0) {
          // prefix match; shorter remaining tail == closer match
          const closeness = token.length / t.text.length; // 0..1
          best = Math.max(best, t.weight + Math.round(closeness * 20));
        } else {
          // whole-word prefix anywhere in a multi-word name ("rusty key")
          const words = t.text.split(/\s+/);
          for (const w of words) {
            if (w.indexOf(token) === 0) {
              best = Math.max(best, t.weight - 20);
              break;
            }
          }
        }
      }
      return best;
    },

    /**
     * From a list of candidate entities, return the single best match for a
     * player-typed token, or null. Ties resolve to the first candidate,
     * which keeps behaviour deterministic and content-authored order-aware.
     */
    best(token, candidates) {
      let winner = null;
      let winningScore = 0;
      for (const c of candidates) {
        const s = match.score(token, c);
        if (s > winningScore) {
          winningScore = s;
          winner = c;
        }
      }
      return winner;
    },

    /** All candidates that match at all, best-first. */
    all(token, candidates) {
      return candidates
        .map((c) => ({ c, s: match.score(token, c) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .map((x) => x.c);
    },
  };

  /* ------------------------------------------------------------------ *
   *  Tiny event emitter — lets rooms/mobs/items react to game events
   *  ("player entered", "item taken", each tick) without hard wiring.
   * ------------------------------------------------------------------ */
  class Emitter {
    constructor() {
      this._handlers = Object.create(null);
    }
    on(event, fn) {
      (this._handlers[event] || (this._handlers[event] = [])).push(fn);
      return this;
    }
    off(event, fn) {
      const list = this._handlers[event];
      if (!list) return this;
      this._handlers[event] = list.filter((h) => h !== fn);
      return this;
    }
    emit(event, ...args) {
      const list = this._handlers[event];
      if (!list) return false;
      // copy so handlers can safely unsubscribe during dispatch.
      // `this` is bound to the emitting object, so content hooks written as
      // `onUse(player, game) { this.tags.add('lit'); }` see their own entity.
      for (const fn of list.slice()) fn.apply(this, args);
      return true;
    }
  }

  MUD.util = util;
  MUD.match = match;
  MUD.Emitter = Emitter;
})(typeof window !== 'undefined' ? window : this);
