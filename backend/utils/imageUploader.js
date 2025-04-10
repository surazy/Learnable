const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async (file, folder) => {
    try {
        console.log('File received:', file); // Debug log
        if (!file || !file.tempFilePath) {
            throw new Error('File or tempFilePath is missing');
        }

        const options = { folder };
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        return result;
    } catch (error) {
        console.error('Error while uploading image to Cloudinary:', error);
        throw error;
    }
};

// Function to delete a resource by public ID
exports.deleteResourceFromCloudinary = async (url) => {
    if (!url) return;

    try {
        const result = await cloudinary.uploader.destroy(url);
        console.log(`Deleted resource with public ID: ${url}`);
        console.log('Delete Resourse result = ', result)
        return result;
    } catch (error) {
        console.error(`Error deleting resource with public ID ${url}:`, error);
        throw error;
    }
};