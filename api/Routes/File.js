const express = require('express')
const router = express()



router.get('/:fileName', (req, res) => {
    const path = process.cwd()
    res.sendFile(path + '/public/images/'+req.params.fileName);
})




module.exports = router