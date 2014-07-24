/*!
 * Connect - Penton Vela
 * Copyright(c) 2014 Evgeniy Medvedev <emedvedev@thumbtack.net>
 */

/**
 * Module dependencies.
 */

var debug = require('debug')('connect:vela');

/**
 * One day in seconds.
 */

var oneDay = 86400;

/**
 * Return the `VelaSessionStore` extending `express`'s session Store.
 *
 * @param {object} express session
 * @return {Function}
 * @api public
 */

module.exports = function(session){

    /**
    * Express's session Store.
    */

    'use strict';

    var Store = session.Store;

    /**
    * Initialize VelaSessionStore with the given `options`.
    *
    * @param {Object} options
    * @api public
    */

    function VelaSessionStore(options) {
//        var self = this;
//
//        options = options || {};
//        Store.call(this, options);
//        this.prefix = null === options.prefix ? 'sess:' : options.prefix;
//
//        if (options.url) {
//            var url = require('url').parse(options.url);
//            if (url.protocol === 'vela:') {
//                if (url.auth) {
//                    var userparts = url.auth.split(':');
//                    options.user = userparts[0];
//                    if (userparts.length === 2) {
//                        options.pass = userparts[1];
//                    }
//                }
//                options.host = url.hostname;
//                options.port = url.port;
//                if (url.pathname) {
//                    options.db   = url.pathname.replace('/', '', 1);
//                }
//            }
//        }
//
//        this.client = options.client || new require('vela').createClient(options.port || options.socket, options.host, options);
//
//        if (options.pass) {
//            this.client.auth(options.pass, function(err){
//                if (err) {
//                    throw err;
//                }
//            });
//        }
//
//        this.ttl =  options.ttl;
//
//        if (options.db) {
//            self.client.select(options.db);
//            self.client.on('connect', function() {
//                self.client.sendAnyways = true;
//                self.client.select(options.db);
//                self.client.sendAnyways = false;
//            });
//        }
//
//        self.client.on('error', function () { self.emit('disconnect'); });
//        self.client.on('connect', function () { self.emit('connect'); });
    }

    /**
     * Inherit from `Store`.
     */

    VelaSessionStore.prototype = Store.prototype;

    /**
    * Attempt to fetch session by the given `sid`.
    *
    * @param {String} sid
    * @param {Function} fn
    * @api public
    */

    VelaSessionStore.prototype.get = function(sid, fn){
        sid = this.prefix + sid;
        debug('GET "%s"', sid);

//        this.client.get(sid, function(err, data){
//            if (err) {
//                return fn(err);
//            }
//            if (!data) {
//                return fn();
//            }
//
//            var result;
//
//            data = data.toString();
//            debug('GOT %s', data);
//            try {
//                result = JSON.parse(data);
//            } catch (err) {
//                return fn(err);
//            }
//            return fn(null, result);
//        });
    };

    /**
    * Commit the given `session` object associated with the given `sid`.
    *
    * @param {String} sid
    * @param {Session} session
    * @param {Function} fn
    * @api public
    */

    VelaSessionStore.prototype.set = function(sid, session, fn){
        sid = this.prefix + sid;
        try {
            var maxAge = sess.cookie.maxAge,
                ttl = this.ttl,
                sess = JSON.stringify(session);

            ttl = ttl || ('number' === typeof maxAge ? maxAge / 1000 | 0 : oneDay);

            debug('SET: "%s" ttl:%s %s', sid, ttl, sess);

//            this.client.set(sid, ttl, sess, function(err){
//                err || debug('SETEX complete');
//                fn && fn.apply(this, arguments);
//            });

        } catch (err) {
            debug(err);
//            fn && fn(err);
        }
    };

    /**
    * Destroy the session associated with the given `sid`.
    *
    * @param {String} sid
    * @api public
    */

    VelaSessionStore.prototype.destroy = function(sid, fn){
        sid = this.prefix + sid;
        this.client.del(sid, fn);
    };

    return VelaSessionStore;
};
