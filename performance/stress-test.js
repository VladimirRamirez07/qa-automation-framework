import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '30s', target: 50 },
    { duration: '20s', target: 100 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<5000'],
    http_req_failed: ['rate<0.2'],
  },
};

const BASE_URL = 'https://automationexercise.com';

export default function () {
  const res = http.get(`${BASE_URL}/api/productsList`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response under 5s': (r) => r.timings.duration < 5000,
  });
  sleep(1);
}