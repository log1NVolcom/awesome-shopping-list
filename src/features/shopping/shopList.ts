import { IItems } from './../../data/items';

// import createGenericSlice, { GenericState } from '../../redux/genericSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  data: IItems[];
  status: 'loading' | 'finished' | 'error';
}

export const shopListSlice = createSlice({
  name: 'shopList',
  initialState: { status: 'loading', data: [] } as State,
  reducers: {
    add(state, action: PayloadAction<IItems>) {
      state.status = 'finished';
      state.data.push(action.payload);
    },
  },
});

export const actions = shopListSlice.actions;
