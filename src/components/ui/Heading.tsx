import styled from "styled-components";

interface HeadingProps {
  color?: string;
}

export const Heading = styled.h2<HeadingProps>`
  font-family: var(--font-family-helvetica);
  font-size: 100px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  letter-spacing: -4px;
  margin: 0;
  color: ${(props) => props.color || "#1D1F2C"};

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }

  .highlightTxt {
    background: #f9c551;
    padding: 1px 8px;
    color: #1d1f2c;
  }
`;
