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
  });

