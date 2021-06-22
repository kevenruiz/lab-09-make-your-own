import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import toolboxController from '../controllers/toolboxes.js';

const app = express();

app.use(express.json());

app.use(toolboxController);

if (app) {
  console.log('hi');
}

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
