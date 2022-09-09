import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import {Switch} from "@mui/material";

import { themeActions, dataActionTypes } from "../../redux/actions";

const ThemeSelectorStyled = styled.div`
    display    : flex;
    flex-direction: column;
    align-items: center;
    
`

const ThemeSelector = () => {
    const {isDevelopmentTheme} = useSelector(state=>state.theme);
    const dispatch = useDispatch(); 

    const handleChange = (e) => {
        dispatch({type:themeActions.SWITCH_THEME});        
    }
    useEffect(
        ()=>{
            if(isDevelopmentTheme){
                dispatch({type:dataActionTypes.GET_DEVELOPER_DATA});
            } else {
                dispatch({type:dataActionTypes.GET_ENGINEER_DATA});
            }
        }
        ,[isDevelopmentTheme, dispatch]); 

    return <ThemeSelectorStyled>
        
        {isDevelopmentTheme?<h3>Engineer - <span>Developer</span></h3>
        :<h3><span>Engineer</span> - Developer</h3>}
        <Switch defaultChecked color="default" onChange={handleChange}/>
    </ThemeSelectorStyled>
} 

export default ThemeSelector;