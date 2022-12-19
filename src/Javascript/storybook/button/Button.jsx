import StyledButton from "./Button.styled"

function Button({ title, onClick, variant='primary' }) {


    return <StyledButton variant={variant} onClick={onClick}>{title}</StyledButton>
}


export default Button