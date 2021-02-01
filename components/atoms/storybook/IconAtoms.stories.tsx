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
  HOME_WHITE: IconType.HOME_WHITE,
  HOME_BLACK: IconType.HOME_BLACK,
  LIST_WHITE: IconType.LIST_WHITE,
  LIST_BLACK: IconType.LIST_BLACK,
  PIN_WHITE: IconType.PIN_WHITE,
  PIN_BLACK: IconType.PIN_BLACK,
  USER_WHITE: IconType.USER_WHITE,
  USER_BLACK: IconType.USER_BLACK,
};

export const showIconAtoms = () => (
  <IconAtoms
    size={number("Width", 24)}
    color={color("Color", "#000")}
    iconType={select("Icon", iconList, 0)}
  />
);
