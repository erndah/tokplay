const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/thumbnails', videoController.getAllVideos);
router.get('/:videoID/details', videoController.getVideoDetails);
router.post('/video', videoController.createVideo);
router.put('/videos/:id', videoController.updateVideo);
router.delete('/videos/:id', videoController.deleteVideo);

module.exports = router;