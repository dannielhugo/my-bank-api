import { getData, writeData } from '../db/data';

export async function create(request) {
  const { name, balance } = request;

  try {
    const data = await getData();
  
    const account = {
      id: data.nextId++,
      name,
      balance: parseInt(balance),
    };
  
    data.accounts.push(account);
  
    await writeData(data);

    return account;
  } catch (error) {
    console.error(error);
    
    throw new Error('failed to create account');    
  }
}