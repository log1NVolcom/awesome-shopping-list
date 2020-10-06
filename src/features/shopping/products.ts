import { IItems } from './../../data/items';

import createGenericSlice, { GenericState } from '../../redux/genericSlice';

export const productsSlice = createGenericSlice({
  name: 'products',
  initialState: { status: 'loading' } as GenericState<IItems[]>,
  reducers: {
    add(state, action) {
      state.status = 'finished';
      state.data = action.payload;
    },
  },
});

export const actions = productsSlice.actions;
