const tmp = require('tmp');
const path = require('path');
const fs = require('fs');

const tempr = function() {
    var file = tmp.fileSync({ mode: 0644, postfix: '.R'});
    return file;
};

const tempout = function() {
    var file = tmp.fileSync({ mode: 0644, postfix: '.out' });
    return file;
};

const dockcode = function(dirname, version, tmpin_name, tmpout_name) {
    var code = "docker run --memory='500m' --memory-swap='1g' -v " + dirname + ":/root " + "rocker/r-ver:" + version + " Rscript /root/" + path.basename(tmpin_name) +  " > " + tmpout_name + " 2>&1 ";
    return code;
};

exports.tempr = tempr;
exports.tempout = tempout;
exports.dockcode = dockcode;