import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export async function getData() {
  return JSON.parse(await readFile(global.fileName, 'utf8'));
}

export function writeData(data) {
  return writeFile(global.fileName, JSON.stringify(data));
}