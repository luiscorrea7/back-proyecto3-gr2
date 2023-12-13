const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true 
  });


  
 const uploadImage = async(filePath) =>{
  if (filePath) return await cloudinary.uploader.upload(filePath,{
    folder: 'products'
  }) 
  return null;
};

const deleteImage = async(publicID)=>{
    return await cloudinary.uploader.destroy(publicID);
};

module.exports = {
    uploadImage,
    deleteImage,
}