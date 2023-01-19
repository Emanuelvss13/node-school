const fs = require('fs');
const { extname } = require('path');


const filterDirectoryFilesByExtensionName = (dirPath, extension, callback) => {

  fs.readdir(dirPath, 'utf8', (err, files) => {

    if (err) {
      return callback(err);
    }

    
  
    callback(null, files.filter(file => extname(file).match(extension)))
  
  })
}

module.exports = filterDirectoryFilesByExtensionName