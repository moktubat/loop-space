import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/styles/variables";

export const RelatedGrid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols = 3 }) => $cols}, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export default RelatedGrid;