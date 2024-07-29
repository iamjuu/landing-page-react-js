import styled from 'styled-components';

export const NavBtn = styled.button`
  width: auto;
  height: 40px;
  background-color: rgba(37, 94, 190, 1);
  color: #fff;
  font-weight: bold; 
  border: none; 
  border-radius: 5px; 
  padding: 0 20px; 
  cursor: pointer; 
  transition: background-color 0.3s; 

  &:hover {
    background-color: rgba(37, 94, 190, 0.8); 
  }
`;
