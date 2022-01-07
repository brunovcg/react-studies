import React from 'react'

const Title = ({ text }) => {
    console.log('Rendering Title')
  return <div>{text}</div>;
};

export default React.memo(Title);
