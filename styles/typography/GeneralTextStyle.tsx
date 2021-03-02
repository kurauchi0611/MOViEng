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

export type GeneralTextStyleProps = {
  fontSize: GeneralFontSize;
  fontColor?: string;
  fontWeight?: GeneralFontWeight;
};

export const GeneralText = styled.p<GeneralTextStyleProps>`
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => (props.fontSize > 20 ? 1.5 : 2)};
  color: ${(props) => props.fontColor || GeneralColorStyle.Black};
  font-weight: ${(props) => props.fontWeight || GeneralFontWeight.NORMAL};
`;

export const GeneralTextParagraph = styled(GeneralText.withComponent("p"))`
  white-space: pre-wrap;
`;

export default GeneralText;
