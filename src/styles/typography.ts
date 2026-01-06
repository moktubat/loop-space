import { css } from "styled-components";
import { FONT } from "./variables";

export const headingLarge = css`
  font-family: ${FONT.helvetica};
  font-size: 100px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  letter-spacing: -4px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

export const heroLine = css`
  font-family: ${FONT.urbanist};
  font-size: 160px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -6.4px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 100px;
    letter-spacing: -4px;
  }

  @media (max-width: 480px) {
    font-size: 60px;
    letter-spacing: -2.4px;
  }
`;

export const bodyLarge = css`
  font-family: ${FONT.urbanist};
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: inherit;
`;

export const bodyText = css`
  font-family: ${FONT.urbanist};
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: inherit;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
