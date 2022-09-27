import {useRef, useEffect} from "react";
import styled from "styled-components";

const ModalStyled = styled.dialog`
    max-width: 500px;
    width: 90%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin-top: 20%;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;

    h2 {
        color:#333;
    }
    p {
        color:#333;
    }
    &::backdrop {
        background: linear-gradient(45deg, red, blue);
        opacity:.45;
    }
`;

const Modal = ({modalOpen, modalHandlerClose}) => {
    const modalRef = useRef(null); 

    useEffect(()=>{
        if(modalOpen){
            try {
                handleModalOpen();
            } catch (error) {
                //pass 
            }
        }else {
            handleModalClose(); 
        }

        return () =>{
            handleModalClose();
        }

    }, [modalOpen]); 

    const handleModalOpen = ()=> {
        modalRef.current.showModal(); 
    }

    const handleModalClose = () => {
        try {
            modalRef.current.close(); 
        } catch (error) {
            //pass
        }
    }

    return <ModalStyled ref={modalRef} onClick={modalHandlerClose}>
        <h2>Contacts</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel, esse in sapiente ipsam tempora quidem. Sunt et molestias veniam placeat, dicta assumenda delectus, voluptates rem dolorum, voluptatibus repellat pariatur?</p>    
    </ModalStyled>
}

export default Modal; 