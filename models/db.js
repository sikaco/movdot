/**
 * Created by 雷 on 2014/5/24.
 */
var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

module.exports = new Db(
    settings.db,
    new Server(settings.host, Connection.DEFAULT_PORT, {})
);