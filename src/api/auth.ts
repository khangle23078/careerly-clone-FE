import { IUser } from '@/interfaces/user';
import { instance } from './instance';

export const signUp = (data: Omit<IUser, 'id'>) => {
  return instance.post('/register', data);
};
