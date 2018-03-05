var srcPath = "src";
var destPath = 'build';


var config = {
  src: {
    lib: srcPath + "/lib",
    sass: srcPath + "/sass",
    root: srcPath,
    js: srcPath + "/js",
    img: srcPath + "/img"
  },
  dest: {
    css: destPath + "/css",
    js: destPath + "/js",
    img: destPath + "/img",
    html: destPath,
    lib: destPath + "/lib"
  }
};

module.exports = config;