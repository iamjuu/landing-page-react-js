import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.div`
  gap: 400px;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    gap: 200px;
  }

  .hamburger{
    display:none;

      @media (max-width: 700px) {
       display: block;
  }
  }

  @media (max-width: 992px) {
    gap: 100px;
  }
  @media (max-width: 768px) {
    gap: 50px;
  }
   @media (max-width :700px){
   
   
   }
`;

export const Ul = styled.div`
  list-style: none;
  display: flex;
  gap: 50px;
  @media (max-width: 1200px) {
    gap: 30px;
  }
 @media (max-width :700px){
   
   display:none;
   }

  
`;
export const Li = styled.li`
  &:hover {
    color: blue;
    transition: background-color 0.3s, color 0.3s;
  }
`;
