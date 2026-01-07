"use client";
import React, { useRef, useEffect } from "react";
import { useFadeUp } from "@/lib/gsapUtils";

const FadeUp: React.FC<{ children: React.ReactNode; selector?: string }> = ({ children, selector }) => {
    const ref = useRef<HTMLElement | null>(null);
    useFadeUp(ref as any, { selector: selector ?? undefined, stagger: 0.18 });
    return <div ref={ref as any}>{children}</div>;
};

export default FadeUp;