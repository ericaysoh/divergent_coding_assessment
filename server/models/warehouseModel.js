const { Pool } = require('pg');

const myURI = 'postgres://oxdrcviz:H--T_DhA4iL3DEP8XDt4H7Pxv9rlvZE7@mahmud.db.elephantsql.com/oxdrcviz';

const db = new Pool({ connectionString: myURI });

module.exports = {
  query: (text, params, callback) => {
    return db.query(text, params, callback);
  }
};