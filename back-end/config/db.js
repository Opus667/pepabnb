import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    mongoose.connect(MONGO_URL);
    console.log('DB deu bom!');
  } catch (error) {
    console.log('DB deu ruim!', error);
  }
};
