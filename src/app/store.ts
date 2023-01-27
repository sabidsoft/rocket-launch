import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { launchesApi } from '../services/launchesApi';

export const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
