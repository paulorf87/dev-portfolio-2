import {useRef, useEffect} from "react";
import styled from "styled-components";

const ModalStyled = styled.dialog`
    max-width: 500px;
    width: 90%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin-top: 25vh;
    margin-left: auto;
    margin-right: auto;
    padding: 16px 40px;
    border-radius: 10px;

    h2 {
        color:#333;
    }
    p {
        margin-top: 16px;
        color:#333;
    }
    ul {
        list-style-type: none;
        margin-top: 16px;
        li {
            color:#333;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            img {
                max-width: 24px;
            }
        }
    }

    &::backdrop {
        background: linear-gradient(45deg, red, blue);
        opacity:.45;
    }
    `;

const Modal = ({modalOpen, modalHandlerClose, modalHandlerOpen}) => {
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
        <h2>Contact</h2>
        <p>If you would like to know more about my work you can contact me at:</p>
        <ul>
            <li><img src="/images/phone.svg" alt=""/>+61 416 292 958</li>
            <li><img src="/images/mail.svg" alt=""/>paulo@prmf-dev.com</li>
        </ul>
    </ModalStyled>
}

export default Modal; 