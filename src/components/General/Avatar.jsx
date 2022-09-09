import styled from "styled-components";

const AvatarStyled = styled.img`
    border-radius: 50%;
    border:4px solid ${({theme})=>theme.colors.accent};
    object-fit: cover;
    object-position: center;
`

const Avatar = ({src, size}) => {

    return <AvatarStyled src={src} alt="Avatar" width={size} height={size}/>
}

export default Avatar; 