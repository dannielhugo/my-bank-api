import express from 'express';
import fs from 'fs';
import { promisify } from 'util';
import router from './src/router';

const app = express();
const port = 3000;

const exists = promisify(fs.exists);
const writeFile = promisify(fs.writeFile);

global.fileName = 'accounts.json';

app.use(express.json());
app.use('/accounts', router)

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, async () => {
  try {
    const fileExists = await exists(global.fileName);

    if (!fileExists) {
      const init = {
        nextId: 1,
        accounts: [],
      };

      await writeFile(global.fileName, JSON.stringify(init));
    }
  } catch (error) {
    console.log(error);
  }

  console.log(`API Started at ${port}`);
});
