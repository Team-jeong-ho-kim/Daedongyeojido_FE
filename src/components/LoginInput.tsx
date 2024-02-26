import styled from "styled-components";

interface LoginInputProps {
  placeholder: string;
  value: any;
  onChange: any;
  onKeyUp?: any;
  type?: any;
}

const LoginInput: React.FC<LoginInputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyUp,
  type,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onKeyUp={onKeyUp}
    />
  );
};

const Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid black;
  &::placeholder {
    font-size: 20px;
    color: #6e6e87;
  }
  &:focus {
    border: 2px solid black;
  }
`;

export default LoginInput;
