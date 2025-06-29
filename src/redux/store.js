import { configureStore, combineReducers } from '@reduxjs/toolkit'; // import from RTK
import { persistReducer, persistStore } from 'redux-persist';   // persist kullanımı
import storage from 'redux-persist/lib/storage';               // storage

import contactsReducer from './contactsSlice';                // kontak reducer
import filtersReducer from './filtersSlice';                  // filtre reducer

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'], // sadece contacts'i sakla
};

// root reducer'ı kombinle
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});

// persist yapısına uygun reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store'u oluştur
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

// persistor'ı oluştur
export const persistor = persistStore(store);

