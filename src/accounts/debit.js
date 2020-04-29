import { getById } from './get_by_id';
import { update } from './update';

export async function debit(request) {
  const { id, balance } = request;

  const account = await getById(id);
  
  if (!account) {
    throw new Error('account not found');
  }

  if (account.balance - balance < 0) {
    throw new Error('account has no balance');
  }

  account.balance -= parseInt(balance);
  
  try {
    await update(account);
  } catch (error) {
    console.error(error);
    
    throw new Error('failed to debit from account');    
  }

  return account;
}