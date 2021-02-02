import React from "react";
import ButtonMolecules from "../buttons/ButtonMolecules";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IconType } from "../../../consts/IconConsts";
import GeneralColorStyle from "../../../styles/colors/GeneralColorStyle";

export default {
  title: "Components/Molecules/Button",
  component: ButtonMolecules,
  decorators: [withKnobs],
};

const iconList = {
  NONE: undefined,
  COIN: IconType.COIN,
  TWITTER: IconType.TWITTER,
  MAIL: IconType.MAIL,
  MAN: IconType.MAN,
  HEART: IconType.HEART,
  LOGOUT: IconType.LOGOUT,
  WITHDRAWAL: IconType.WITHDRAWAL,
  BACK: IconType.BACK,
  PEN: IconType.PEN,
};

const styleList = {
  NONE: undefined,
  Yellow: GeneralColorStyle.Yellow,
  Red: GeneralColorStyle.Red,
  Twitter: GeneralColorStyle.Twitter,
  Green: GeneralColorStyle.Green,
};

export const showButtonMolecules = () => (
  <ButtonMolecules
    text={text("Text", "テキスト")}
    btnColor={select("BtnColor", styleList, undefined)}
    width={number("Width", 384)}
    disabled={boolean("Disabled", false)}
    textColor={color("TextColor", GeneralColorStyle.Black)}
    iconType={select("Icon", iconList, undefined)}
    onClick={action("onClick")}
  />
);
