import http from 'k6/http';
import { check, sleep } from "k6";

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<50'], // 95% of requests should be below 50ms
  },
  vus: 500,
  duration: "1h",
};

export function setup() {
  console.log( "setup" );
}

export default function ( data ) {
  const response = http.get( `http://${__ENV.API_DOMAIN}/testing` );
  // check(response, { "(GET)/": (r) => r.status === 200 });

  sleep( ( Math.floor( Math.random() * 1000 ) + 100 ) / 1000 );
};
