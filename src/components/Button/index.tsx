import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, children }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children || title}
    </ButtonContainer>
  );
};

export default Button;