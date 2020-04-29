import { del } from './del';

export async function remove(request) {
  await del(request);
}