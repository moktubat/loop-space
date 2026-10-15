import styled from "styled-components";
import { bodyText } from "@/styles/typography";
import { COLORS } from "@/styles/variables";

export const Lead = styled.p<{ $light?: boolean }>`
  ${bodyText};
  max-width: 900px;
  margin: 0;
  color: ${({ $light }) => ($light ? COLORS.subtle : COLORS.textMuted)};
`;

export default Lead;