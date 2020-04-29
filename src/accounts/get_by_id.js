import { getData } from '../db/data';

export async function getById(id) {
  try {
    const data = await getData();
    
    return data.accounts.find((acc) => acc.id === +id);
  } catch (error) {
    throw new Error('failed to find account');    
  }
}