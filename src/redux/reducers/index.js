import { themeActions, 
    dataActionTypes,
    skillActionTypes, 
    infoActionTypes } from "../actions";
import developerData from "../../data/developer.json";
import engineerData from "../../data/engineer.json";

const INITIAL_STATE = {
    isDevelopmentTheme:true   
}

export const themeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case themeActions.SWITCH_THEME:
            return {...state, isDevelopmentTheme:!state.isDevelopmentTheme}
        default:
            return state; 
    }
}

export const dataReducer = (state, action) => {
    switch(action.type){
        case dataActionTypes.GET_DEVELOPER_DATA:
            return developerData;
        case dataActionTypes.GET_ENGINEER_DATA:
            return engineerData;
        default:
            return developerData; 
    }
}

export const skillsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case skillActionTypes.GET_DEVELOPER_SKILLS:
            return developerData.skills;
        case skillActionTypes.GET_ENGINEERING_SKILLS:
            return engineerData.skills;
        default:
            return developerData.skills;
    }    
}

export const infoReducer = (state, action) => {
    switch(action.type) {
        case infoActionTypes.GET_DEVELOPER_INFO:
            return developerData;
        case infoActionTypes.GET_ENGINEER_INFO:
            return engineerData;
        default:
            return developerData;
    }
}