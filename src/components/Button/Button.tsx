import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}

const Button = ({children, disabled, onClick}: Props) => {
  if(disabled) {
    return(
      <button disabled>
        {children}
      </button>
    )
  } else {
    return(
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
