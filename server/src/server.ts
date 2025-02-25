import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

// Set up __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Build the absolute path to your client's build folder
const clientBuildPath = path.join(process.cwd(), 'client', 'dist');

// Serve static files from the client build folder
app.use(express.static(clientBuildPath));

app.use(express.json());
app.use(routes);

// Fallback: for any route not handled by your API or static files,
// send back index.html (this is important for client-side routing)
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
