import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.101:3333',
});

export default api;

// sudo npm install -g json-server
// json-server ./src/services/server.json --host 192.168.1.101 --port 3333 --delay 700
