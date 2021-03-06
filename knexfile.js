console.log("Spark: knexfile.js - IN");

var config = require('config');
var dbConfig = config.get('database');

if (!process.env.SPARK_DB_CLIENT) {
    console.log("Spark: process.env.SPARK_DB_CLIENT is undefined in knexfile. Loading dotenv file...");
    require('dotenv').config();
}

module.exports = {
    client: dbConfig.client,
    connection: dbConfig,
    debug: dbConfig.debug,
    useNullAsDefault: true
};

module.exports.development = module.exports.staging = module.exports.production = module.exports;

console.log("Spark: knexfile.js - OUT");
