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
    const tool = await Toolbox.insert({
      item: 'hammer',
      color: 'brown'
    });
    const res = await request(app).get(`/api/v1/toolbox/${tool.id}`);

    expect(res.body).toEqual(tool);
  });

  it(' finds all tools via GET', async () => {
    const toolOne = await Toolbox.insert({
      item: 'screwdriver',
      color: 'Gray'
    });
    const toolTwo = await Toolbox.insert({
      item: 'blah blah',
      color: 'Black'
    });
    const toolThree = await Toolbox.insert({
      item: 'laddy Dah',
      color: 'repetition is key'
    });
    const res = await request(app).get('/api/v1/toolbox');
    expect(res.body).toEqual([toolOne, toolTwo, toolThree]);
  });

  it('deletes a tool', async () => {
    const tool1 = await Toolbox.insert({
      item: 'Its gonna get delete it',
      color: 'What color is a mirror?'
    });

    const res = await request(app).delete(`/api/v1/toolbox/${tool1.id}`);

    expect(res.body).toEqual(tool1);
  });

  it('updates a tool in the toolbox', async () => {
    const tool1 = await Toolbox.insert({
      item: 'any weapon',
      color: 'is white a color?'
    });
    const updatedTool = await Toolbox.insert({
      item: 'updated weapon',
      color: 'should this be black? is black a color?'
    });
    const res = await request(app).put(`/api/v1/toolbox/${tool1.id}`).send(`${updatedTool.id}`);

    expect(res.body).toEqual(updatedTool);
  });


});
