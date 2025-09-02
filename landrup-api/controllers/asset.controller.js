var { Asset } = require("../models/models");
var saveFile = require("../services/asset");
const { join } = require("path");
const { readFileSync } = require("fs");
const { imageSize } = require("image-size");

async function createSingleAsset(req, res, next) {
	try {
		let file = saveFile(req.files.file);
    let filePath = join(__dirname, "../assets", file);
    
    const buffer = readFileSync(filePath);
    const dimensions = imageSize(buffer);

		let asset = await Asset.create({
			url: "http://localhost:4000/file-bucket/" + file,
      width: dimensions.width,
      height: dimensions.height
		});
		res.json(asset);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}


async function getAllAssets(req, res, next) {
	try {
		let assets = await Asset.findAll();
		res.json(assets);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function getSingleAsset(req, res, next) {
	try {
		let asset = await Asset.findByPk(req.params.id);
		res.json(asset);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

module.exports = {
	createSingleAsset,
	getAllAssets,
	getSingleAsset
};
