import React from "react";
import { Button } from "@material-ui/core";
import IconAtoms from "../../atoms/IconAtoms";
import { IconType } from "../../../consts/IconConsts";

export type Props = {
  text: string;
  btnColor: string;
  color: string;
  width: number;
  disabled: boolean;
  iconColor?: string;
  isSmall?: boolean;
  iconType?: IconType;
  onClick?: () => void;
};

const ButtonMolecules = ({
  text,
  iconColor,
  btnColor,
  width,
  isSmall,
  disabled,
  iconType,
  onClick,
}: Props) => {
  const isIcon = () => {
    if (!iconType) return <></>;
    return (
      <IconAtoms
        iconType={iconType}
        size={isSmall ? 16 : 24}
        color={iconColor}
      />
    );
  };

  return (
    <>
      <Button disabled={disabled} color="secondary" startIcon={isIcon()}>
        Delete
      </Button>
    </>
  );
};
