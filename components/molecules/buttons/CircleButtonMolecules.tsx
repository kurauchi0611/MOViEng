import React from "react";
import IconButton from "@material-ui/core/IconButton";
import IconAtoms from "../../atoms/IconAtoms";
import { IconType } from "../../../consts/IconConsts";
import GeneralColorStyle from "../../../styles/colors/GeneralColorStyle";
import ColorUtil from "../../../utils/color/ColorUtil";

export type Props = {
  size: number;
  btnColor: string;
  iconColor: string;
  iconType: IconType;
  onClick: () => void;
};

const CircleButtonMolecules = ({
  size,
  btnColor,
  iconColor,
  iconType,
  onClick,
}: Props) => {
  return (
    <IconButton
      style={{
        background: btnColor,
        width: size,
        height: size,
        boxShadow: `${ColorUtil.addOpacity(
          GeneralColorStyle.Black,
          0.25
        )} 0px 0px 2px`,
      }}
      onClick={onClick}
    >
      <IconAtoms iconType={iconType} size={size * 0.5} color={iconColor} />
    </IconButton>
  );
};

export default CircleButtonMolecules;
