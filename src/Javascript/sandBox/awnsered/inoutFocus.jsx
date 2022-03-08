import React from "react";



const FocusableInput = (props) => {

    const inputRef = React.useRef(null)
    // const [focar, setFocar] = React.useState(props.shouldFocus)


    React.useEffect(()=>{
        inputRef.current.focus()

    },[])

    // Write your code here
    return <input ref={inputRef}/>;
  };



const App = () => (
    <div>
        <FocusableInput shouldFocus={true} />
        
    </div>
)

