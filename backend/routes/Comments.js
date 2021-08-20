const express = require('express');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

const Comments = require('../models/Comments');
const Announcement = require('../models/Annoucement');

router.post('', checkAuth, (req, res, next) => {

    const comments = new Comments({
        annoucement: req.body.annoucement,
        user: req.userData.userId,
        message: req.body.message,
        createdDate: req.body.createdDate
    })

    comments.save()
        .then((result) => {
            Announcement.findById(req.body.annoucement)
                .then((annoucement) => {
                    annoucement.comments.push(result);
                    annoucement.save()
                        .then(() => {
                            res.status(200)
                            .json({
                                message: 'Comments Added Successfully',
                                result: result
                            });
                        });
                });
        });
});


router.post('/update', checkAuth, (req, res, next) => {
    // Comments.findById(req.body.id)
    //     .then((comments) => {
            
            Comments.updateOne({ _id: req.body.id},
                {
                    $set: { 'message': req.body.message }
                })
                .then((comments) => {
                    console.log(comments);
                    res.status(200)
                        .json({
                            message: 'Comments Updated Successfully',
                            result: comments
                        })
                })
        // })
})

module.exports = router;