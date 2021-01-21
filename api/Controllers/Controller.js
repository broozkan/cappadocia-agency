const jwt = require('jsonwebtoken')

const deleteEmptyFilters = (object) => {
    Object.keys(object).forEach(function(key) {
        const val = object[key];
        if(val === ""){
            delete(object[key])
        }
      });
  //    console.log(object);
      return object
}


const verifySiteToken = (req, res, next) => {
    
    const token = req.header('site-token')


    if(!token){
        res.send({
            response: false,
            responseData: "Oturum açmanız gerekli",
            status: 401
        })
        return false
    }

    const user = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = user.userData[0]
    next()
}

module.exports.deleteEmptyFilters = deleteEmptyFilters
module.exports.verifySiteToken = verifySiteToken