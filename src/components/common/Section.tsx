import styled from "styled-components";
import { sectionSpacing } from "@/styles/mixins";

export const Section = styled.section<{ top?: string; bottom?: string }>`
  ${(p) => sectionSpacing(p.top ?? "100px", p.bottom ?? "0")}
`;