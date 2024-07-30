import styled from "styled-components";

export const Sectionmain = styled.div`
  font-family: sans-serif; 

  p {
    color: red;
  }

  .text {
    display: flex;
    gap: 30px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .Card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
    gap: 50px; 
    // background-color: yellow;
    padding: 20px; 
  }

  @media (max-width: 992px) {
    font-size: 1rem;
    .Card {
      gap: 15px; 
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; 
    .Card {
      gap: 10px; 
    }
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    .Card {
      gap: 5px;
    }
  }
`;
