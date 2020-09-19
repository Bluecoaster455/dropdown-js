const path = require('path');
const fs = require("fs");

let {name,version,repository,author,license} = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json"), 'utf-8'));

const banner = `
${name} v${version}
${repository.url}

Copyright (c) ${author.replace(/ *\<[^)]*\> */g, " ")}

This source code is licensed under the ${license} license found in the
LICENSE file in the root directory of this source tree.
`

module.exports = {
    libraryName: "DropdownJS",
    libraryExport: "DropdownJS",
    devServerHost: 'localhost',
    devServerPort: 8080,
    banner: banner
}