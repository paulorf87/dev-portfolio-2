import { configureStore } from "@reduxjs/toolkit";

import { 
    themeReducer,
    dataReducer, 
    projectsReducer} from "./reducers";

export const store = configureStore({
    reducer:{
        theme:themeReducer, 
        data:dataReducer, 
        projects:projectsReducer
    }
}); 