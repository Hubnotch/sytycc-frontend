import styled from "styled-components";
import { IButtonProps } from "../../interfaces/ButtonProps";


const ButtonArea = styled.button`
height: ${(props: IButtonProps) => props.height || "38px"};
  color: ${(props: IButtonProps) => props.color || "#FFFFFF"};
  font-size: 0.75rem;
  font-weight: bold;
  background: ${(props: IButtonProps) =>
    props.background || "#e3e3e3"};
  border: none;
  border-radius: 6px;
  width: ${(props: IButtonProps) => props.width || "196px"};
  cursor: pointer;

  @media screen and (max-width: 425px) {
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }
`

const Button: React.FC<IButtonProps> = ({
  background,
  color,
  height,
  children,
  width,
  onclick,
  disabled,
  ...props
}) => {
  return (
    <ButtonArea
      background={background}
      color={color}
      height={height}
      width={width}
      disabled={disabled}
      onClick={onclick}
      {...props}
    >
      {children}
    </ButtonArea>
  );
};

export default Button;
