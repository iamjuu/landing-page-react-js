import styled from "styled-components";

export const Sectionmain = styled.div`
  font-family: sans-serif; 
  display:flex;
  flex-direction: column;
   justify-content: center; 
  align-items: center; 
  line-height: 1.5; 
  gap:10px;
  word-spacing: 2px;
  


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
  }.picmain {
  justify-content:center;
      align-items: center;
  width: 800px;
  height: 150px; 
  // background-color: green;
  display: flex;
  gap:60px;
  p{
  color:black;}
  @media(max-width: 992px) {
    width: 600px;
  }
  @media(max-width: 768px) {
    width: 500px;
  }
  @media(max-width: 576px) {
    width: 300px;
  }
}

.pic {
  width: 150px; /* Set width to desired size */
  height: 150px; /* Set height to the same size as width */
  border-radius: 50%;
  background-color: red;
}

.review {
 font-weight: bold;
   width: 50%;
  display: flex;
  flex-direction: column;
}

.dev{
 font-weight: normal;
}
`;
