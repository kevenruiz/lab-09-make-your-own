import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('posting a cable to a toolbox, using POST', async () => {
    const res = await request(app)
      .post('/api/v1/toolbox')
      .send({ item: 'cable', color: 'Black' });

    expect(res.body).toEqual({
      id: '1',
      item: 'cable',
      color: 'Black',
    });
  });

});
