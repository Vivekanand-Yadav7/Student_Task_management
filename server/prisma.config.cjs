require('dotenv').config({ path: __dirname + '/.env' });

const { defineConfig, env } = require("prisma/config");

module.exports = defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },

});
