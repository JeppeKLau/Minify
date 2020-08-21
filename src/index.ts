import { app, BrowserWindow } from "electron";
const path = require('path');

app.on('ready', () =>{
    console.log('App is ready')

    const win = new BrowserWindow({
        width: 1080,
        height: 640
    });
    
    const indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(() => {
        // FANCY STUFF GOES BRRRRRRRR
    })
});

