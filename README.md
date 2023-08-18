# Tokopedia Play Clone

**Fullstack Track Final Project**

## Description

Tokopedia Play Clone is a web application that allows users to explore a collection of videos, view video details, browse associated products, leave comments, and interact with video content just like on the Tokopedia Play platform.

## Schema Database
### Video
- VideoID
- Title
- Description
- Thumbnail URL
- YouTube URL

### Product

- ProductID
- Link Product
- Title
- Price
- VideoID (foreign key)

### Comment

- CommentID
- Username
- Comment Text
- Timestamp
- VideoID (foreign key)

## API Structure

### GET /api/videos
- Response: List of video thumbnails with VideoID and Thumbnail URL.

### GET /api/products/video/:videoId
- Response: List of products associated with the specified video.
- Parameters:
  - `videoId` (Path Parameter): The unique identifier of the video.

### GET /api/comments/video/:videoId/comments
- Response: List of comments for the specified video.
- Parameters:
  - `videoId` (Path Parameter): The unique identifier of the video.

### POST /api/comments/:videoId/submit
- Request Payload:
  - `username` (String): The username of the commenter.
  - `comment` (String): The text of the comment.
  - `videoId` (Path Parameter): The unique identifier of the video.
- Response: Success or failure message indicating whether the comment submission was successful.