const express = require('express')
const router = express.Router()
const Customer = require('../Models/Customer')
const jwt = require('jsonwebtoken')
const { sendEmail } = require('../Controllers/Controller')


// get full customers
router.get('/list', async (req, res) => {
    const customerList = await Customer.customerModel.find(req.query,(err, customers) => {
        if (err) return err;

        res.send(customers)
    })
})

// get specific customer by id
router.get('/list/:customerId', async (req, res) => {
    await Customer.customerModel.findOne({ _id: req.params.customerId }, (err, customerData) => {
        res.send(customerData)
    })
})


// login
router.post('/login', async (req, res) => {
    let authHeader = req.headers.authorization;
    

    var auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
    const customerEmail = auth[0]
    const password = auth[1]


    const filters = {
        customer_email:customerEmail,
        customer_password:password
    }

    await Customer.customerModel.find(filters, (err, customer) => {
        if (err) {
            res.send({
                response: false,
                responseData: err.message
            })
        } else {
            
            if(customer.length > 0){
                // success authentication
                // create token
                const token = jwt.sign({customerData:customer}, process.env.TOKEN_SECRET)
                res.header('auth-token', token)
            
                
            
                res.send({
                    response: true,
                    token: token,
                    responseData: customer
                })
            }else{
                res.send({
                    response: false,
                    responseData: "Kullanıcı adı veya parola hatalı!"
                })
            }
           
        }

    })


})

// new customer
router.post('/register', async (req, res) => {



    //check email exist
    let emailExist;
    await Customer.customerModel.findOne({ customer_email: req.body.customer_email }, (err, result) => {
        if (result == null) {
            emailExist = null
        } else {
            emailExist = result
        }
    })

    if (emailExist != null) {
        res.send({
            response: false,
            responseData: "E-posta adresi başka bir kullanıcı tarafından kullanılmaktadır!"
        })
        return false
    }

   

    // new customer
    const newCustomer = new Customer.customerModel({
        customer_name: req.body.customer_name,
        customer_surname: req.body.customer_surname,
        customer_email: req.body.customer_email,
        customer_phone_number: req.body.customer_phone_number,
        customer_password: req.body.customer_password,
        customer_country: req.body.customer_country
    })


    const savedCustomer = newCustomer.save((err) => {
        if (err) {
            res.send({
                response: false,
                responseData: err.message
            })
        } else {

            const emailData = {
                to: 'burhan.ozkan@live.com',
                title: 'Hesap Doğrulama',
                text: '<h1>Merhaba, <br> hesabınızı doğrulamak için bağlantıyı tıklayınız</h1>'
            }
            
            sendEmail(emailData, (response) => {
                res.send({
                    response: true,
                    responseData: newCustomer
                })
            })

            
        }
    })

})
// new customer end

// update customer
router.put('/update/:customerId', async (req, res) => {


    req.body = req.body.formData


    // joi validation
    const validation = customerValidation.validate(req.body)
    if (validation.error) {
        res.send({
            response: false,
            responseData: validation.error.details[0]["message"]
        })
        return false
    }


    // check customername exist
    let customernameExist;
    await Customer.customerModel.findOne({ customer_customername: req.body.customer_customername, _id: { $ne: req.params.customerId } }, (err, result) => {
        if (result == null) {
            customernameExist = null
        } else {
            customernameExist = result
        }
    })

    if (customernameExist != null) {
        res.send({
            response: false,
            responseData: "Kullanıcı adı başka bir kullanıcı tarafından kullanılmaktadır!"
        })
        return false
    }

    //check email exist
    let emailExist;
    await Customer.customerModel.findOne({ customer_email: req.body.customer_email, _id: { $ne: req.params.customerId }  }, (err, result) => {
        if (result == null) {
            emailExist = null
        } else {
            emailExist = result
        }
    })

    if (emailExist != null) {
        res.send({
            response: false,
            responseData: "E-posta adresi başka bir kullanıcı tarafından kullanılmaktadır!"
        })
        return false
    }

    // get pharmacy informations
    let pharmacyInformations = ''
    await Pharmacy.pharmacyModel.findById(req.body.customer_pharmacy_id, (err, result) => {
        if(result != null){
            pharmacyInformations = result
        }
    })
    console.log(pharmacyInformations);
    req.body.customer_pharmacy = pharmacyInformations

    // update customer
    await Customer.customerModel.findByIdAndUpdate(
        { _id: req.params.customerId },
        {
            customer_name: req.body.customer_name,
            customer_customername: req.body.customer_customername,
            customer_password: req.body.customer_password,
            customer_email: req.body.customer_email,
            customer_pharmacy: req.body.customer_pharmacy,
            customer_redirect_url: req.body.customer_redirect_url,
            customer_permissions: req.body.customer_permissions

        }

    ,(err, updatedCustomer) => {
        if (err) {
            res.send({
                response: false,
                responseData: err
            })
        } else {
            res.send({
                response: true,
                responseData: updatedCustomer
            })
        }
    })

})
// update customer


// delete customer
router.delete('/delete/:customerId', async (req, res) => {
    await Customer.customerModel.deleteOne({ _id: req.params.customerId }, (err) => {
        if (err) {
            res.send({
                response: false,
                responseData: err
            })
        } else {
            res.send({
                response: true,
                responseData: "Başarılı"
            })
        }
    })

})
// delete customer end



module.exports = router