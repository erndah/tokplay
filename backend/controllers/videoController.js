const Video = require('../models/videoModels');
const Product = require('../models/productModels');

exports.getVideoDetails = async (req, res) => {
  try {
    const videoID = req.params.videoID;

    const video = await Video.findById(videoID);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }

    const products = await Product.find({ videoId: videoID });

    res.json({
      video: {
        _id: video._id,
        title: video.title,
        thumbnailUrl: video.thumbnailUrl,
        youtubeUrl: video.youtubeUrl,
      },
      products: products,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({}, '_id title thumbnailUrl youtubeUrl');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createVideo = async (req, res) => {
  const { title, thumbnailUrl, youtubeUrl} = req.body
  try {
    const newVideo = new Video({ title, thumbnailUrl, youtubeUrl });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.updateVideo = async (req, res) => {
  const { title, thumbnailUrl, youtubeUrl } = req.body;
  const videoId = req.params.id;

  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { title, thumbnailUrl, youtubeUrl },
      { new: true }
    );

    if (!updatedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json(updatedVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteVideo = async (req, res) => {
  const videoId = req.params.id; 

  try {
    const deletedVideo = await Video.findByIdAndDelete(videoId);

    if (!deletedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json({ message: 'Video deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};