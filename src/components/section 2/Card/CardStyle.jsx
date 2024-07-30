import styled from "styled-components";

export const Cards = styled.div`
color:white;
  // border: 1px solid black;
  border-radius: 10px;
  width: 250px;
  height: 330px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100px;
    height: auto;
  }

  .cardtext {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .para {
    opacity: 60%;
    color: white;
    font-size: 12px;
     line-height: 1.5;
  word-spacing: 2px; 
  }

  button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  .spanbtn{
  display:flex;
   gap:20px;}
`;
