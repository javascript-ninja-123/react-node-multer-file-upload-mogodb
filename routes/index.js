

module.exports = app => {
app.use(require('./file'))
app.use((err,req,res,next) => {
    if(err) return res.status(422).send({err:err.message})
  });
}
