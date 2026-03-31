import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/logo.png');
const outputPath = path.join(__dirname, '../public/logo-transparent.png');

async function processLogo() {
  try {
    // Read the image and get its metadata
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log('Processing logo...');
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
    
    // Remove the dark background by making it transparent
    // The logo has a dark gray/black background that we want to remove
    await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(async ({ data, info }) => {
        const { width, height, channels } = info;
        
        // Process each pixel
        for (let i = 0; i < data.length; i += channels) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Check if pixel is dark (background)
          // The background appears to be around #1f2937 or similar dark color
          const brightness = (r + g + b) / 3;
          
          if (brightness < 60 && Math.abs(r - g) < 30 && Math.abs(g - b) < 30) {
            // Make dark gray/black pixels transparent
            data[i + 3] = 0; // Set alpha to 0
          }
        }
        
        // Save the processed image
        await sharp(data, { raw: { width, height, channels } })
          .png()
          .toFile(outputPath);
        
        console.log(`Logo processed and saved to: ${outputPath}`);
      });
    
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo();
