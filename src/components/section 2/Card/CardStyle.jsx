import styled from "styled-components";

export const Cards = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  width: 250px;
  height: 300px;
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
    opacity: 40%;
    color: black;
    font-size: 10px;
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
`;
