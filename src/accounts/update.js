import { getData, writeData } from '../db/data';

export async function update(account) {
  const data = await getData();
  
  const acc = data.accounts.findIndex((acc) => acc.id === +id);

  if (acc < 0) {
    throw new Error('account not found');
  }

  data.accounts[index] = account;

  await writeData(data);
}