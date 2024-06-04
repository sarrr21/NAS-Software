import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  value: string;
}

const initialState: NavigationState = { value: 'Home' };

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = navigationSlice.actions;

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store