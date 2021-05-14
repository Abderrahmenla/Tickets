import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
<<<<<<< HEAD
  console.log('Starting up....');
=======
>>>>>>> 4893daede6858eccac8c7e812b1549c9f67b30d3
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

<<<<<<< HEAD
start();
=======
start();
>>>>>>> 4893daede6858eccac8c7e812b1549c9f67b30d3
