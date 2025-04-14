const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// 🔹 Storage for Profile Avatars
const avatarStorage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "ProjectUploader/avatars",
        format: file.mimetype === "image/png" ? "png" : "jpeg", // Convert only if necessary
        public_id: `avatar-${Date.now()}`,
    }),
});

// 🔹 Storage for Project Files (Images, Videos, Documents, etc.)
const projectStorage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "ProjectUploader/projects",
        resource_type: "auto", // Detects file type automatically (image, video, document, etc.)
        public_id: `project-${Date.now()}`,
    }),
});

// 🔹 Single File Upload (For Avatars)
const uploadAvatar = multer({ storage: avatarStorage }).single("avatar");

// 🔹 Multiple Files Upload (For Projects: Image, Video, File)
const uploadProjectFiles = multer({ storage: projectStorage }).fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
    { name: "file", maxCount: 1 },
]);

// 🔹 Export the Upload Functions
module.exports = { uploadAvatar, uploadProjectFiles };