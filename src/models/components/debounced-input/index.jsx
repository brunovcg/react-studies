import  { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounced';

function DebouncedTextField(props) {
  const { onChange, delay = 300, ...rest } = props;
  const [stateValue, setStateValue] = useState('');

  const debouncedValue = useDebounce(stateValue, delay);

  const debouncedOnChange = (e) => {
    setStateValue(e.target.value);
  };

  useEffect(() => {
    onChange?.(debouncedValue);
  }, [debouncedValue]);

  return <input onChange={debouncedOnChange} {...rest} />;
}

export default DebouncedTextField;
