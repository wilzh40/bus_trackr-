
const axios = require('axios')
var instance = axios.create({
  baseURL: 'http://sheltered-refuge-14380.herokuapp.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
navigator.geolocation.getCurrentPosition((pos) => {

    const str = pos.coords.latitude + '/' + pos.coords.longitude
    console.log(pos);
    require('electron').ipcRenderer.send('pos', str);
    coordStr = 'findstop/' + coords;
    axios.get(coordStr).then(response => {
        console.log(response)
        require('electron').ipcRenderer.send('message', response);
    }).catch( err => {console.log(error)} )

}, (err) => {
    require('electron').ipcRenderer.send('message', err.message);
});
