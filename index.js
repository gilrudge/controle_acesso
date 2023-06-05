const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');


dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());

const getDeviceEvents = require('./services/getDeviceEvents');
const getDeviceStatus = require('./services/getDeviceStatus');
const getStatusBranch = require('./services/getStatusBranch');

const openDoors = require('./services/doorActivation/openDoors');
const enableDoors = require('./services/doorActivation/enableDoors');
const hourDoors = require('./services/doorActivation/hourDoors');
const facialRec = require('./services/doorActivation/facialRec');
const invasionAlert = require('./services/doorActivation/invasionAlert');

const resetEmployee = require('./services/employeeForm/resetEmployee');
const addEmployee = require('./services/employeeForm/addEmployee');


app.get('/eventos', getDeviceEvents);
app.get('/status', getDeviceStatus);
app.get('/status-branch/:ip', getStatusBranch);

app.get('/open-door/:ip/:port', openDoors);
app.get('/facial-rec/:ip/:port', facialRec);
app.get('/enable-door/:ip/:port/:enable', enableDoors);
app.get('/hour-door/:ip/:command/:hour', hourDoors);
app.get('/stop-alert/:ip', invasionAlert);

app.get('/reset/:ip/:position', resetEmployee);
app.get('/add/:ip/:position/:registration/:password', addEmployee);


const routes = require('./routes/routes');


setInterval(() => {
  axios({
    method: 'get',
  url: `http://${process.env.IP}/eventos`
  })
}, 5000);

setInterval(() => {
  axios({
    method: 'get',
    url: `http://${process.env.IP}/status`
  })
}, 5000);


app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`)
})