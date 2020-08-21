"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require('path');
electron_1.app.on('ready', function () {
    console.log('App is ready');
    var win = new electron_1.BrowserWindow({
        width: 1080,
        height: 640
    });
    var indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(function () {
        // FANCY STUFF GOES BRRRRRRRR
    });
});
