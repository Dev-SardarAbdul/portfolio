import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;

  .top-container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .card {
    height: 300px;
  }

  .icon {
    font-size: 24px;
    color: #66fcf1;

    @media (max-width: 1199.98px) {
      margin-top: 1rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const AboutMeCardHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  color: #66fcf1;
`;

export const AboutHeader = styled.h2`
  font-size: 62px;
  color: #fff;
  font-weight: 400;
  font-family: "Teko";
  margin-top: 2rem;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  @media (max-width: 575.98px) {
    font-size: 42px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4rem;

  img {
    width: 100%;
    height: 720px;

    @media (max-width: 1399.98px) {
      height: 800px;
    }

    @media (max-width: 1199.98px) {
      height: 700px;
      width: 100%s;
    }

    @media (max-width: 575.98px) {
      height: auto;
    }
  }
`;

export const DescriptionText = styled.p`
  color: #fff;
  font-size: 18px;

  @media (max-width: 575.98px) {
    font-size: 16px;
  }
`;
