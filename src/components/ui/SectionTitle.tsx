import styled from "styled-components";
import { Heading } from "./Heading";
import { COLORS } from "@/styles/variables";

/* ── Props ── */
interface SectionTitleProps {
    /** Main text before the highlighted word */
    children: React.ReactNode;
    /** Word to wrap in .highlightTxt (optional) */
    highlight?: string;
    color?: string;
    className?: string;
}

/* ── Component ── */
const SectionTitle = ({
    children,
    highlight,
    color,
    className,
}: SectionTitleProps) => (
    <Heading color={color} className={className}>
        {children}
        {highlight && <> <span className="highlightTxt">{highlight}</span></>}
    </Heading>
);

export default SectionTitle;