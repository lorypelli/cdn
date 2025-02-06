import { Hono } from 'hono';
import trslate from './trslate';

const app = new Hono();

app.route('/trslate', trslate);

export default app;
