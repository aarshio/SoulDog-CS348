// Update with your config settings.

module.exports = {
  development: {
    // our DMBS enviroment
    client: "sqlite3",
    connection: {
      filename: "./database/db.sqlite3", // where our db is
    },
    useNullAsDefault: true,
    migrations: { directory: "./database/migrations" }, // where our migrations are
    seeds: { directory: "./database/seeds" }, // where our seeds are
  },
};
