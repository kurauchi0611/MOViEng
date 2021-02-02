import React from "react";
import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
  GeneralTag,
} from "../GeneralTextStyle";
import { withKnobs, select, color } from "@storybook/addon-knobs";
import GeneralColorStyle from "../../colors/GeneralColorStyle";

export default {
  title: "Styles/Text",
  component: GeneralText,
  decorators: [withKnobs],
};

const fontSizeList = {
  SIZE_10: GeneralFontSize.SIZE_10,
  SIZE_12: GeneralFontSize.SIZE_12,
  SIZE_14: GeneralFontSize.SIZE_14,
  SIZE_16: GeneralFontSize.SIZE_16,
  SIZE_20: GeneralFontSize.SIZE_20,
  SIZE_24: GeneralFontSize.SIZE_24,
  SIZE_28: GeneralFontSize.SIZE_28,
  SIZE_32: GeneralFontSize.SIZE_32,
  SIZE_36: GeneralFontSize.SIZE_36,
  SIZE_40: GeneralFontSize.SIZE_40,
  SIZE_44: GeneralFontSize.SIZE_44,
  SIZE_48: GeneralFontSize.SIZE_48,
};

const fontWeightList = {
  NORMAL: GeneralFontWeight.NORMAL,
  BOLD: GeneralFontWeight.BOLD,
  HEAVY: GeneralFontWeight.HEAVY,
  BLACK: GeneralFontWeight.BLACK,
};

const tagList = {
  H1: GeneralTag.H1,
  H2: GeneralTag.H2,
  H3: GeneralTag.H3,
  H4: GeneralTag.H4,
  H5: GeneralTag.H5,
  H6: GeneralTag.H6,
  P: GeneralTag.P,
  SMALL: GeneralTag.SMALL,
  SPAN: GeneralTag.SPAN,
};

export const showStyleText = () => (
  <GeneralText
    fontSize={select("FontSize", fontSizeList, GeneralFontSize.SIZE_10)}
    fontWeight={select("FontWeight", fontWeightList, GeneralFontWeight.NORMAL)}
    fontColor={color("FontColor", GeneralColorStyle.Black)}
    tag={select("Tag", tagList, GeneralTag.P)}
  >
    テキスト
  </GeneralText>
);
