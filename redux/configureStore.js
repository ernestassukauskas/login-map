import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routes } from './routes';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // Access to a local storage of the device

export const ConfigureStore = () => {

    const config = {
        key: 'root',
        storage,
        debug: true
    };

    const store = createStore(
        persistCombineReducers(config, {
            routes,
        }),
        applyMiddleware(thunk)
    );

    // Obtained from the store
    const persistor = persistStore(store);

    return { persistor, store };
}