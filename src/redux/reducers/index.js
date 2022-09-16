import { themeActions, 
    dataActionTypes,
    projectsActionTypes } from "../actions";
import developerData from "../../data/developer.json";
import engineerData from "../../data/engineer.json";

import projects from "../../data/projects.json"; 

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
export const projectsReducer = (state, action) => {
    switch(action.type) {
        case projectsActionTypes.GET_ENGINEER_PROJECTS_DATA:
        case projectsActionTypes.GET_DEVELOPER_PROJECTS_DATA:
        case projectsActionTypes.GET_PROJECTS_DATA:
        default:
            return projects; 
    }
}