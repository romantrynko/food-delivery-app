import { fetchUser } from '../utils/fetchLSData';

const userInfo = fetchUser();

export const initialState = {
  user: userInfo
}

