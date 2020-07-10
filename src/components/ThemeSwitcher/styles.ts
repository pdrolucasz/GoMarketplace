import styled from 'styled-components/native';

export const Container = styled.View`
  width: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.icon};
  align-items: center;
  justify-content: center;
`;
