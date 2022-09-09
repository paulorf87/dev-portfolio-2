import { configureStore } from "@reduxjs/toolkit";

import { themeReducer,
    dataReducer,  
    skillsReducer, infoReducer } from "./reducers";

export const store = configureStore({
    reducer:{
        theme:themeReducer, 
        skills:skillsReducer, 
        info:infoReducer, 
        data:dataReducer
    }
}); 