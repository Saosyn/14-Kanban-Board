import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();

// Calculate the client build path.
// Since process.cwd() is `/opt/render/project/src/server`,
// going up two levels (.., ..) moves to `/opt/render/project`,
// then into `client/dist`.
const clientBuildPath = path.join(process.cwd(), '..', '..', 'client', 'dist');

app.use(express.static(clientBuildPath));
app.use(express.json());
app.use(routes);

// Fallback: serve index.html for any unmatched routes (for client-side routing)
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

const PORT = process.env.PORT || 10000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
