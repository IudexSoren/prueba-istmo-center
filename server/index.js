import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './src/routes/Router.js';

dotenv.config();

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL]
  })
);
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
