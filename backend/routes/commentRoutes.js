const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/:id/comments', commentController.getVideoComments);
router.post('/:videoId/submit', express.json(), commentController.submitComment);
router.get('/video/:videoId/comments', commentController.getCommentsForVideo);


module.exports = router;