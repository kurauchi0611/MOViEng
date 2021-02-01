import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import CardAtoms from "../CardAtoms";
import {
  GeneralText,
  GeneralFontSize,
  GeneralFontWeight,
  GeneralTextParagraph,
} from "../../../styles/typography/GeneralTextStyle";

export default {
  title: "Components/Atoms/Card",
  component: CardAtoms,
  decorators: [withKnobs],
};

export const showCardAtoms = () => (
  <CardAtoms width={number("Width", 400)} raised={boolean("Raised", false)}>
    <GeneralText
      fontSize={GeneralFontSize.SIZE_24}
      fontWeight={GeneralFontWeight.BOLD}
    >
      タイトル
    </GeneralText>

    <GeneralTextParagraph fontSize={GeneralFontSize.SIZE_16}>
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </GeneralTextParagraph>
  </CardAtoms>
);
