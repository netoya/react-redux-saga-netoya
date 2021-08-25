import { ConnectedRouter } from "connected-react-router/immutable";
import { Provider } from "react-redux";
import MainPage from "./app/pages/MainPage";
import { history, store } from "./providers/redux";

function App() {
    return (
        <Provider store={store}>
            <div className={"h-full bg-yellow-200"}>
                <ConnectedRouter history={history}>
                    <MainPage></MainPage>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

export default App;
