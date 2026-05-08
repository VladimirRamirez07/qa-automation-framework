import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 10 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'],
    http_req_failed: ['rate<0.1'],
    errors: ['rate<0.1'],
  },
};

const BASE_URL = 'https://automationexercise.com';

export default function () {
  // Test 1 - Home page
  const home = http.get(BASE_URL);
  check(home, {
    'home status is 200': (r) => r.status === 200,
    'home loads under 3s': (r) => r.timings.duration < 3000,
  });
  errorRate.add(home.status !== 200);
  sleep(1);

  // Test 2 - Products API
  const products = http.get(`${BASE_URL}/api/productsList`);
  check(products, {
    'products status is 200': (r) => r.status === 200,
    'products loads under 3s': (r) => r.timings.duration < 3000,
  });
  errorRate.add(products.status !== 200);
  sleep(1);

  // Test 3 - Brands API
  const brands = http.get(`${BASE_URL}/api/brandsList`);
  check(brands, {
    'brands status is 200': (r) => r.status === 200,
    'brands loads under 3s': (r) => r.timings.duration < 3000,
  });
  errorRate.add(brands.status !== 200);
  sleep(1);
}