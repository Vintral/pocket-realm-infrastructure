import http from 'k6/http';
import { check, sleep } from "k6";
import ws from 'k6/ws';

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<50'], // 95% of requests should be below 50ms
  },
  vus: 500,
  duration: "1h",
};

function sendMessage( socket ) {  
  socket.send( JSON.stringify( { "type": "TESTING" } ) );
  
}

export default function ( data ) {  
  socket = ws.connect(`ws://${__ENV.API_DOMAIN}`, (socket) => {
    socket.on('open', () => {
      // console.log('connected')
      sendMessage( socket );
    });    
    // socket.on('close', () => console.log('disconnected'));
    socket.on('error', ( err ) => console.log( err ) );
    socket.on('message', (data) => {      
      sleep( ( Math.floor( Math.random() * 1000 ) + 100 ) / 1000 );
      sendMessage( socket );
    })
  });  
};