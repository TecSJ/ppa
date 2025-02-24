// tests/server.test.ts
import server, { startServer } from '../src/api-gateway/server';

describe('GET /', () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(() => {
    server.close();
  });

  it('should return a message', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/', 
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hola Mundo' });
  });
});
