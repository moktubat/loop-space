import styled from "styled-components";
import { FONT } from "@/styles/variables";

export const P = styled.p<{ size?: "sm" | "md" | "lg"; muted?: boolean }>`
  font-family: ${FONT.urbanist};
  margin: 0;
  color: ${(p) => (p.muted ? "var(--muted, #595b68)" : "inherit")};
  ${(p) =>
        p.size === "lg"
            ? `font-size: 24px; line-height: 32px;`
            : p.size === "sm"
                ? `font-size: 14px; line-height: 20px;`
                : `font-size: 16px; line-height: 24px;`}

  @media (max-width: 1024px) {
    ${(p) => (p.size === "lg" ? "font-size:20px;" : "")}
  }
  @media (max-width: 480px) {
    ${(p) => (p.size === "lg" ? "font-size:18px;" : "")}
  }
`;
