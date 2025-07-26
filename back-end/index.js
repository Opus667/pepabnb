import 'dotenv/config';
import express from 'express';
import UserRoutes from './domains/users/routes.js';
import cors from 'cors';

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5174',
    credentials: true,
  })
);
app.use('/users', UserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
