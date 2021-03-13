const express = require('express')
const router = express.Router()
const Activity = require('../Models/Activity')
const mongoose = require('mongoose')
const deleteEmptyFilters = require('../Controllers/Controller')
const multiparty = require('connect-multiparty')
const uploadDir = './public/images'
const MultipartyMiddleware = multiparty({ keepExtensions: true, uploadDir: uploadDir })
const path = require('path')
const fs = require('fs')

// get activity list
router.get('/list/:page', async (req, res) => {



    if (req.query) {
        req.query = deleteEmptyFilters.deleteEmptyFilters(req.query)

        if (req.query.activity_name) {
            req.query.activity_name = { $regex: new RegExp(req.query.activity_name, "i") }
        }

        if (req.query._id) {
            req.query._id = mongoose.Types.ObjectId(req.query._id)
        }
        if (req.query["activity_category._id"]) {
            req.query["activity_category._id"] = mongoose.Types.ObjectId(req.query["activity_category._id"])
        }
    }

    const aggregate = Activity.activityModel.aggregate([{
        $match: req.query
    }])


    const options = {
        page: req.params.page,
        limit: 25
    }

    Activity.activityModel.aggregatePaginate(aggregate, options, (err, result) => {
        res.send(result)
    })
})

// get specific activity
router.get('/get/:activityId', async (req, res) => {

    Activity.activityModel.findById(req.params.activityId, (err, result) => {
        res.send(result)
    })
})


router.post('/new', MultipartyMiddleware, async (req, res) => {



    req.body = JSON.parse(req.body.data)

    if (req.files.file) {

        for (let index = 0; index < req.files.file.length; index++) {

            let tmp_path = req.files.file[index].path
            let target_path = path.join(uploadDir, req.files.file[index].name)

            if (fs.existsSync(path.join(uploadDir, req.files.file[index].path))) {
                fs.rename(tmp_path, target_path, (err) => {
                    if (err) {
                        res.send({
                            response: false,
                            responseData: "Dosya yüklenemedi"
                        })
                        res.end()

                        return false
                    } else {
                        fs.unlink(tmp_path, (err) => {
                            if (err) {
                                res.send({
                                    response: false,
                                    responseData: err
                                })
                            }
                        })

                    }
                })
            }

        }


        req.body.activity_photos = req.files.file
    } else {
        req.body.activity_photos = []
    }


    const activity = new Activity.activityModel({
        activity_category: req.body.activity_category,
        activity_language: req.body.activity_language,
        activity_name: req.body.activity_name,
        activity_short_description: req.body.activity_short_description,
        activity_photos: req.body.activity_photo_names,
        activity_currency: req.body.activity_currency,
        activity_price: req.body.activity_price,
        activity_description: req.body.activity_description,
        activity_cancellation_terms: req.body.activity_cancellation_terms,
        activity_action_plan: req.body.activity_action_plan,
        activity_additional_informations: req.body.activity_additional_informations,
        activity_quota_informations: req.body.activity_quota_informations
    })

    const savedActivity = activity.save((err) => {
        if (err) {
            console.log(err);
            res.send({
                response: false,
                responseData: err.message
            })
        } else {
            res.send({
                response: true,
                responseData: activity
            })

        }
    })

})


router.put('/update/:activityId', MultipartyMiddleware, async (req, res) => {


    req.body = JSON.parse(req.body.data)



    if (req.files.file) {


        for (let index = 0; index < req.files.file.length; index++) {

            let tmp_path = req.files.file[index].path
            let target_path = path.join(uploadDir, req.files.file[index].name)

            fs.rename(tmp_path, target_path, (err) => {

                if (err) {
                    res.send({
                        response: false,
                        responseData: "Dosya yüklenemedi"
                    })
                    res.end()

                    return false
                } else {
                    fs.unlink(tmp_path, (err) => {

                    })

                }
            })
        }


        req.body.activity_photos = req.files.file
    }

    // update operation
    await Activity.activityModel.findByIdAndUpdate(
        { _id: req.params.activityId },
        {
            activity_category: req.body.activity_category,
            activity_language: req.body.activity_language,
            activity_name: req.body.activity_name,
            activity_short_description: req.body.activity_short_description,
            activity_photos: req.body.activity_photo_names,
            activity_currency: req.body.activity_currency,
            activity_price: req.body.activity_price,
            activity_description: req.body.activity_description,
            activity_cancellation_terms: req.body.activity_cancellation_terms,
            activity_action_plan: req.body.activity_action_plan,
            activity_additional_informations: req.body.activity_additional_informations,
            activity_quota_informations: req.body.activity_quota_informations
        }
        , (err, updatedActivity) => {
            if (err) {
                res.send({
                    response: false,
                    responseData: err
                })
            } else {
                res.send({
                    response: true,
                    responseData: updatedActivity
                })
            }
        })

})


router.delete('/delete/:activityId', async (req, res) => {

    await Activity.activityModel.deleteOne({ _id: req.params.activityId }, (err) => {
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


module.exports = router;