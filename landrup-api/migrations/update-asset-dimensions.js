const { Asset } = require("../models/models");
const { imageSize } = require("image-size");
const { join } = require("path");
const { existsSync, readFileSync } = require("fs");

async function updateAssetDimensions() {
    try {
        const assets = await Asset.findAll();
        console.log(`Found ${assets.length} assets to update`);
        for (const asset of assets) {
            try {
                const filename = asset.url.replace("http://localhost:4000/file-bucket/", "");
                const filePath = join(__dirname, "../assets", filename);
                
                if (existsSync(filePath)) {
                    const buffer = readFileSync(filePath);
                    const dimensions = imageSize(buffer);
                    
                    await asset.update({
                        width: dimensions.width,
                        height: dimensions.height
                    });
                    
                    console.log(`Updated asset ${asset.id}: ${dimensions.width}x${dimensions.height}`);
                } else {
                    console.log(`File not found for asset ${asset.id}: ${filePath}`);
                }
            } catch (error) {
                console.error(`Error processing asset ${asset.id}:`, error.message);
            }
        }
        
        console.log("Migration Done!");
    } catch (error) {
        console.error("Migration failed:", error);
    }
}
updateAssetDimensions();
