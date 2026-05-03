import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const ASSETS_DIR = path.join(__dirname, '../src/assets');

async function uploadAssets() {
  console.log('Starting Cloudinary upload...');
  
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Missing Cloudinary credentials in .env file');
    process.exit(1);
  }

  console.log(`Using Cloud Name: "${process.env.CLOUDINARY_CLOUD_NAME}"`);

  try {
    const files = fs.readdirSync(ASSETS_DIR);
    
    for (const file of files) {
      const filePath = path.join(ASSETS_DIR, file);
      
      // Skip if directory
      if (fs.statSync(filePath).isDirectory()) continue;
      
      console.log(`Uploading ${file}...`);
      
      const isVideo = file.match(/\.(mp4|webm|ogg|mov)$/i);
      
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: isVideo ? "video" : "image",
        folder: "usa-business-v2/assets",
        use_filename: true,
        unique_filename: false,
        overwrite: true
      });
      
      console.log(`✅ Uploaded ${file}`);
      console.log(`   URL: ${result.secure_url}`);
    }
    
    console.log('\n🎉 All assets uploaded successfully!');
    console.log('You can now use these URLs in your code to load assets from Cloudinary.');
    console.log('Tip: You can use q_auto,f_auto parameters in Cloudinary URLs to automatically optimize quality and format.');
  } catch (error) {
    console.error('Error uploading assets:', error);
  }
}

uploadAssets();
