process.env.GOOGLE_API_KEY = 'AIzaSyBz3gUzlBbnkBxiQ5zPXJATXKord1wrZPg'
const menubar = require('menubar')
const axios = require('axios')
const ipc = require('electron').ipcMain
console.log("lol")
var mb = menubar({
    showOnRightClick: true
})
var req = '/findstop/40.444537/-79.943'

var coordStr;
ipc.on('pos', (event, coords) => {
    console.log(coords)
    coordStr = 'findstop/' + coords;
    axios.get(coordStr).then(response => {
        console.log(response)
    }).catch( err => {console.log(error)} )
})
ipc.on('message', (event, pos) => {
    console.log(pos)
})

mb.on('ready', function ready () {
    console.log('app is ready')
})

