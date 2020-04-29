import { getById } from './get_by_id';

export async function get(request) {
  const { id, balance } = request;

  const account = await getById(id);
  
  if (!account) {
    throw new Error('account not found');
  }

  return account;
}