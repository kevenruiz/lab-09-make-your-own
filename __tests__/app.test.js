import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Toolbox from '../models/Toolbox.js';

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

  it('it gets a tool by id via GET', async () => {
    const tool = await Tool.insert({
      name: 'hammer',
      color: 'brown'
    });
    const res = await request(app).get(`/api/v1/tools/${tool.id}`);

    expect(res.body).toEqual(tool);
  });

});
