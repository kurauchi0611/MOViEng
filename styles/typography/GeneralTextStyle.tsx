import React, { ReactNode } from "react";
import styled from "styled-components";
import GeneralColorStyle from "../colors/GeneralColorStyle";

export enum GeneralFontSize {
  SIZE_10 = 10,
  SIZE_12 = 12,
  SIZE_14 = 14,
  SIZE_16 = 16,
  SIZE_20 = 20,
  SIZE_24 = 24,
  SIZE_28 = 28,
  SIZE_32 = 32,
  SIZE_36 = 36,
  SIZE_40 = 40,
  SIZE_44 = 44,
  SIZE_48 = 48,
}

export enum GeneralFontWeight {
  NORMAL = 400,
  BOLD = 700,
  HEAVY = 800,
  BLACK = 900,
}

export enum GeneralTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SMALL = "small",
  SPAN = "span",
}

export type GeneralTextStyleProps = {
  fontSize: GeneralFontSize;
  fontColor?: string;
  fontWeight?: GeneralFontWeight;
  tag?: GeneralTag;
  children: ReactNode;
};

const GeneralText = ({
  fontSize,
  fontColor,
  fontWeight,
  tag = GeneralTag.P,
  children,
}: GeneralTextStyleProps) => {
  const GeneralTextStyle = styled.span<GeneralTextStyleProps>`
    font-size: ${fontSize}px;
    line-height: ${fontSize > 20 ? 1.5 : 2};
    color: ${fontColor || GeneralColorStyle.Black};
    font-weight: ${fontWeight || GeneralFontWeight.NORMAL};
  `;

  const GeneralTextTag = styled(GeneralTextStyle.withComponent("p"))``;

  return <GeneralTextTag>{children}</GeneralTextTag>;
};

export default GeneralText;
