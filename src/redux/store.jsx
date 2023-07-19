import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { filterReduser } from './slice';
import { contctsApi } from './contactSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterReduser,
    [contctsApi.reducerPath]: contctsApi.reducer,
  },
   middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contctsApi.middleware,
  ],
});
setupListeners(store.dispatch);


//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);