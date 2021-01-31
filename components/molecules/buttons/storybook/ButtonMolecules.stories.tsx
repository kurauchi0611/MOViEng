import React from "react";
import ButtonMolecules from "../ButtonMolecules";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { IconType } from "../../../../consts/IconConsts";

export default {
  title: "Button",
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

export const showButtonMolecules = () => (
  <ButtonMolecules
    text={text("Text", "テキスト")}
    btnColor={text("BtnColor", "#0f0")}
    width={number("Width", 384)}
    disabled={boolean("Disabled", false)}
    textColor={text("TextColor", "#fff")}
    iconType={select("Icon", iconList, undefined)}
  />
);
