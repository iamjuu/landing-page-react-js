import styled from 'styled-components'


export const Container = styled.div`
  width: 100%; 
  height: 100px;
  display: flex; 
  justify-content:center ; 
  align-items: center; 
 
`


export  const  Nav = styled.div`
gap:400px;
   display:flex; 
 `



 export const Ul = styled.div`
   list-style: none;
   display: flex;
   gap: 50px;
 
 
 `;
 export const Li = styled.li`
  &:hover {
    color: blue; 
    transition: background-color 0.3s, color 0.3s; 
  }
`;