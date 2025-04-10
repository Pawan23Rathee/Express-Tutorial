const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const storage = new CloudinaryStorage({
 cloudinary: cloudinary,
  params: {
 folder: "ProjectUploader/avatars", format: async (req, file) => "jpeg", // Convert all to JPEG
 public_id: (req, file) => file.fieldname + "-" + Date.now(),
},
});
const upload = multer({ storage });
module.exports = upload;