import styled from "styled-components";

interface LoginInputProps {
  placeholder: string;
  value: any;
  onChange: any;
  onKeyUp?: any;
}

const LoginInput: React.FC<LoginInputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyUp,
}) => {
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

const Input = styled.input`
  width: 900px;
  height: 80px;
  padding: 26px 40px;
  font-size: 28px;
  border-radius: 10px;
  border: 1px solid black;
  &::placeholder {
    font-size: 28px;
    color: #6e6e87;
  }
  &:focus {
    border: 2px solid black;
  }
`;

export default LoginInput;
