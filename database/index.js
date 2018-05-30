const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const {MONGO_URL} = require('../config/secret');
const {promisify} = require('util');



const connect = async () => {
  try{
    await mongoose.connect(MONGO_URL);
    console.log('mongodb is running');
  }
  catch(err){
    console.log('mongodb is not running')
  }
}

// connect();


//connecting for file upload

const conn = mongoose.createConnection(MONGO_URL);
  conn.once = promisify(conn.once)
const gfs = async () => {
  await conn.once('open')
  const gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
  return gfs;
}

module.exports = {gfs:gfs()}
