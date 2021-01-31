import React from "react";
import { withKnobs, number, select, color } from "@storybook/addon-knobs";
import { IconType } from "../../../consts/IconConsts";
import IconAtoms from "../IconAtoms";

export default {
  title: "Components/Atoms/Icon",
  component: IconAtoms,
  decorators: [withKnobs],
};

const iconList = {
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
  <IconAtoms
    size={number("Width", 24)}
    color={color("Color", "#000")}
    iconType={select("Icon", iconList, 0)}
  />
);
