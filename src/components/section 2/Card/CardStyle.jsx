import styled from "styled-components";

export const Cards = styled.div`
  width: 150px;
  height: 300px; /* Corrected spelling from 'heigth' to 'height' */
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  justify-content: center; /* Center align items vertically */
  overflow: hidden; /* Ensure that any overflowing content is hidden */
`;

export const CardImage = styled.img`
  width: 100%; /* Make the image take up the full width of the container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure the image covers the area without stretching */
`;
