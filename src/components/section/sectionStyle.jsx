import styled from "styled-components";


export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex; 
  }
`;

export const SectionHead = styled.h1`
  font-size: 3rem;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 992px) {
    padding-left: 100px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding-left: 130px;
    font-size: 0.5rem;
  }

  @media (max-width: 700px) {
    padding-left: 250px;
    font-size: 0.3rem;
  }

  @media (max-width: 576px) {
    padding-left: 290px;
    font-size: 0.9rem;
  }
`;

export const Sectionpara = styled.p`
  color: red;
  width: 60%;

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 992px) {
    padding-left: 100px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding-left: 130px;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    padding-left: 250px;
    font-size: 0.5rem;
  }

  @media (max-width: 576px) {
    padding-left: 290px;
    font-size: 0.3rem;
  }
`;

export const Sectionpara1 = styled.p`
  color: gray;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 992px) {
    padding-left: 100px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding-left: 130px;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    padding-left: 250px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding-left: 290px;
    font-size: 0.9rem;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 500px) {
    display: flex;
  }

  .right {
    img {
      width: 100%;

      @media (max-width: 950px) {
        width: 70%;
      }
    }
  }
`;