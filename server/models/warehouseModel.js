const { Pool } = require('pg');

const myURI = 'postgres elementsql uri here';

// const URI = myURI;

const db = new Pool({ connectionString: myURI });

module.exports = {
  query: (text, params, callback) => {
    return db.query(text, params, callback);
  }
};