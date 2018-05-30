const {gfs} = require('../database');
const Grid = require('gridfs-stream');
eval(`Grid.prototype.findOne = ${Grid.prototype.findOne.toString().replace('nextObject', 'next')}`);



const uploadFile = async (req,res,next) => {
  try{
    res.send({message:true})
  }
  catch(err){
    next(err)
  }
}

const fetchFiles = async(req,res,next) => {
  try{
    const a = await gfs;
    a.files.find({}).toArray((err,files) => {
        if(!files || files.length === 0){
          return res.status(404).send({message:"nothing is here"})
        }
        return res.json(files)
    })
  }
  catch(err){
    next(err)
  }
}

const fetchFile = async(req,res,next) => {
  try{
    const a = await gfs;
    a.findOne({filename:req.params.filename},(err,file) => {
        if(!file || file.length === 0){
          return res.status(404).send({message:"nothing is here"})
        }
        if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
            const readStream = a.createReadStream(file.filename);
            readStream.pipe(res);
          }else{
            res.status(404).json({error:'not an image'})
          }
    })
  }
  catch(err){
    next(err)
  }
}



module.exports = {
  uploadFile,
  fetchFiles,
  fetchFile
}
