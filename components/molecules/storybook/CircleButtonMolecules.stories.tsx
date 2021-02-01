import React from "react";
import { withKnobs, number, select, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IconType } from "../../../consts/IconConsts";
import CircleButtonMolecules from "../buttons/CircleButtonMolecules";

export default {
  title: "Components/Molecules/Button",
  component: CircleButtonMolecules,
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

export const showCircleButtonMolecules = () => (
  <CircleButtonMolecules
    btnColor={color("BtnColor", "#fee101")}
    size={number("Width", 68)}
    iconColor={color("TextColor", "#000")}
    iconType={select("Icon", iconList, 0)}
    onClick={action("onClick")}
  />
);
