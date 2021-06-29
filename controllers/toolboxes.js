import { Router } from 'express';
import Toolbox from '../models/Toolbox.js';

export default Router()
  .post('/api/v1/toolbox', async (req, res) => {
    try {
      const tool = await Toolbox.insert(req.body);
      res.send(tool);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })
  .get('/api/v1/toolbox/:id', async (req, res, next) => {
    try {
      const tool = await Toolbox.findById(req.params.id);
      res.send(tool);
    } catch (err) {
      next(err);
    }
  })
  .get('/api/v1/toolbox', async (req, res, next) => {
    try {
      const tool = await Toolbox.findAll(req.body);
      res.send(tool);
    } catch (err) {
      next(err);
    }
  })
  .delete('/api/v1/toolbox/:id', async (req, res, next) => {
    try {
      const tool = await Toolbox.delete(req.params.id);
      res.send(tool);
    } catch (err) {
      next(err);
    }
  })
  .put('/api/v1/toolbox/:id', async (req, res, next) => {
    try {
      const tool = await Toolbox.put(req.body.item, req.body.color, req.params.id);
      res.send(tool);
    } catch (err) {
      next(err);
    }
  });

