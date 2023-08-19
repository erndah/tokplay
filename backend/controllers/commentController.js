const Comment = require('../models/commentModels');

exports.getVideoComments = async (req, res) => {
  try {
    const videoID = req.params.videoID;
    const comments = await Comment.find({ videoId: videoID });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.submitComment = async (req, res) => {
  try {
    const { username, comment } = req.body;
    const videoId = req.params.videoId;
    // console.log (videoId)
    const newComment = new Comment({
      videoId,
      name: username,
      comment,
    });
    await newComment.save();
    res.json({ status: 'Success', message: 'Comment submitted successfully.' });
  } catch (error) {
    res.status(500).json({ status: 'Fail', message: 'Comment submission failed.' });
  }
};


// get comment by videoid
exports.getCommentsForVideo = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const comments = await Comment.find({ videoId: videoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};