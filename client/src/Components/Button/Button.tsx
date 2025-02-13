import React from 'react';

interface ButtonProps {
  text: string; 
  buttonAction: Function;
}

function Button({ text, buttonAction }: ButtonProps) {
  return (
    <React.Fragment>
      <button onClick={buttonAction}>{text}</button>
    </React.Fragment>
  );
}
export default Button;
