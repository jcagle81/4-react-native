import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './Components/MainCompnent';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './Components/LoadingComponent';

const { persistor, store } = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Loading />}
                persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    );
}