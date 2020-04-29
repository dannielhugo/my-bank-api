import { getById } from './get_by_id';
import { update } from './update';

export async function deposit(request) {
  const { id, balance } = request;

  const account = await getById(id);
  
  if (!account) {
    throw new Error('account not found');
  }

  account.balance += parseInt(balance);
  
  try {
    await update(account);
  } catch (error) {
    console.error(error);
    
    throw new Error('failed to make a deposit to account');    
  }

  return account;
}