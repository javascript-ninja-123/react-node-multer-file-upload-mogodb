const router = require('express').Router();
const {uploadFile,fetchFiles,fetchFile} = require('../controller/file');
const {upload} = require('../middleware/upload');

router.post('/upload',upload.single('file'),uploadFile);
router.get('/files',fetchFiles)
router.get('/files/:filename',fetchFile)




module.exports = router;
