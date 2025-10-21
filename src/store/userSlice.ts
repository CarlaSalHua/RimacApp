import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData } from '@/services';
import { calculateAge } from '@/utils/age';

export type UserState = {
  name: string;
  lastName: string;
  birthDay: string;
  age: number;
  documentNumber: string;
  phone: string;
};

const initialState: UserState = {
  name: '',
  lastName: '',
  birthDay: '',
  age: 0,
  documentNumber: '',
  phone: '',
};

export const loadUser = createAsyncThunk('user/loadUser', async () => {
  const api = await getUserData();
  console.log('loadUser fetched data', api);
  return {
    name: api.name,
    lastName: api.lastName,
    birthDay: api.birthDay,
    age: calculateAge(api.birthDay),
  };
});

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ documentNumber: string; phone: string }>) {
      state.documentNumber = action.payload.documentNumber;
      state.phone = action.payload.phone;
    },
  },
  extraReducers: (b) => {
    b.addCase(loadUser.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.birthDay = action.payload.birthDay;
      state.age = action.payload.age;
    });
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
