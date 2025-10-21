import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { getPlans } from '@/services';

export type Plan = {
  name: string;
  price: number;
  age: number;
  description: string[];
};

type State = {
  all: Plan[];
  visible: Plan[];
  selected: Plan | null;
};

const initialState: State = { all: [], visible: [], selected: null };

export const loadPlans = createAsyncThunk<Plan[], void, { state: RootState }>(
  'plan/loadPlans',
  async (_, thunk) => {
    const list = await getPlans();
    const age = thunk.getState().user.age;
    return list.filter(p => age <= p.age);
  },
);

const slice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setVisiblePlans(state, action: PayloadAction<Plan[]>) {
      state.visible = action.payload;
    },
    selectPlan(state, action: PayloadAction<Plan>) {
      state.selected = action.payload;
    },
    clearSelection(state) {
      state.selected = null;
    },
  },
  extraReducers: b => {
    b.addCase(loadPlans.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});

export const { setVisiblePlans, selectPlan, clearSelection } = slice.actions;
export default slice.reducer;
