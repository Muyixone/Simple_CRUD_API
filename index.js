const app = require('./src/app');
const connectDb = require('./Db/db');

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log('App is running');
    });
  } catch (error) {}
};

start();
