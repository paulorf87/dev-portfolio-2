import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client"; 
import { Provider } from "react-redux";

import { store } from "./redux/store";

import App from "./App";

const root = createRoot(document.getElementById("root")); 
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
); 