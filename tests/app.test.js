const request = require('supertest');
const app = require('../src/app');

describe('Jenkins CI/CD API', () => {
  test('GET / returns a welcome message', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Welcome');
  });

  test('GET /health returns the health status', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 'UP',
      message: 'Application is healthy'
    });
  });

  test('GET /api/users returns a list of sample users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('email');
  });
});


// ferferfer