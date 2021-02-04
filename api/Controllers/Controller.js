const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')


const deleteEmptyFilters = (object) => {
    Object.keys(object).forEach(function (key) {
        const val = object[key];
        if (val === "") {
            delete (object[key])
        }
    });
    //    console.log(object);
    return object
}


const verifySiteToken = (req, res, next) => {

    const token = req.header('site-token')


    if (!token) {
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


const sendEmail = (emailObject, cb) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'burhanozkan99@gmail.com',
            pass: 'LPVNU737uxrf.'
        }
    });

    const mailOptions = {
        from: 'info@urgupballoons.com',
        to: emailObject.to,
        subject: emailObject.title,
        text: emailObject.text,
        html: emailObject.text
    };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            cb(false)
        } else {
            cb(true)
        }
    });
}

module.exports.sendEmail = sendEmail
module.exports.deleteEmptyFilters = deleteEmptyFilters
module.exports.verifySiteToken = verifySiteToken