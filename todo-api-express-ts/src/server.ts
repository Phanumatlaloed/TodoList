import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import todosRouter from './routes/todos';

export function createServer() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(morgan('dev'));

  app.get('/api/health', (_req, res) => res.json({ ok: true }));
  app.use('/api/todos', todosRouter);

  return app;
}
