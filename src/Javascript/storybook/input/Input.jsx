import StyledInput from "./Input.styled";

function Input({ error, placeholder }) {


    return <StyledInput error={error} >
        <input type="text" placeholder={placeholder} title={error} />
    </StyledInput>
}

export default Input