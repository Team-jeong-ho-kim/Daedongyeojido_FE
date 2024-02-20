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
  width: 600px;
  height: 56px;
  padding: 16px 36px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  &::placeholder {
    font-size: 20px;
    font-weight: 400;
    color: #6e6e87;
  }
`;

export default LoginInput;
