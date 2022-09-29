import {useRef, useEffect} from "react";
import styled from "styled-components";

const ModalStyled = styled.dialog`
    height: clamp(200px, 30vh, 500px);
    width: clamp(200px, 50vw, 500px);
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin-top: 25vh;
    margin-left: auto;
    margin-right: auto;
    padding: 16px 40px;
    border-radius: 10px;

    &::backdrop {
        background: linear-gradient(45deg, red, blue);
        opacity:.45;
    }
    `;

const Modal = ({modalOpen, modalHandlerClose, modalHandlerOpen, children}) => {
    const modalRef = useRef(null); 
    
    useEffect(()=>{
        // Helper function
        const handleEscEvent = e => {
            if(e.key === "Escape") {
                handleModalClose();
            }
        }

        const handleModalClose = () => {
            try {
                modalRef.current.close(); 
                modalHandlerClose();
            } catch (error) {
                //pass
            }
        }

        const handleModalOpen = ()=> {
            modalRef.current.showModal(); 
            modalHandlerOpen();
        }
        
        document.addEventListener("keydown", handleEscEvent);
        
        if(modalOpen){
            try {
                handleModalOpen();
            } catch (error) {
                //pass 
            }
        }else {
            handleModalClose(); 
        }

        // Cleaning
        return () =>{
            document.removeEventListener("keydown", handleEscEvent);
            handleModalClose();
        }

    }, [modalOpen, modalHandlerClose, modalHandlerOpen]); 

    return <ModalStyled ref={modalRef} onClick={modalHandlerClose}>
        {children}
    </ModalStyled>
}

export default Modal; 