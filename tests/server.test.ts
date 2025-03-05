import { createServer } from '../src/api-gateway/server';
import request from 'supertest';

describe('API Tests', () => {
  let server: any;

  beforeAll(async () => {
    server = await createServer();
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it('Debe responder en el endpoint GET /api/status con 200', async () => {
    const response = await request(server.server).get('/api/status/ok');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });
});
