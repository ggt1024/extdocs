const fs = require("fs");
const path = require("path");
const zip = require("zip-a-folder").zip;

const fnManifest = "package.json";
const pathDist = path.join("docs", ".vitepress", "dist");

const manifest = JSON.parse(fs.readFileSync(fnManifest, "utf8"));

const folderName = manifest.name;
const filePathSaveTo = path.join(folderName + ".zip");

zip(pathDist, filePathSaveTo)
  .then(() => {
    console.log(`save to ${filePathSaveTo}`);
  })
  .catch((err) => {
    console.error(err);
  });
