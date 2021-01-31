import React from "react";
import styled, { css } from "styled-components";
import IconAtoms from "../../atoms/IconAtoms";
import { IconType } from "../../../consts/IconConsts";

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;

const ButtonContainer = styled.button<{
  btnColor: string;
  textColor: string;
  width: number;
  disabled: boolean;
}>`
  color: ${({ textColor }) => textColor};
  width: ${({ width }) => width}px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  padding: 12px;
  position: relative;
  transition: all 150ms linear;

  border: none;
  background: ${({ btnColor }) => btnColor};

  ${({ btnColor }) =>
    !btnColor &&
    css`
      background: #fff;
      border: solid 1px #b0b0b0;
    `}
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: #999 0px 1px 4px;
      }
    `}
    &:focus {
    outline: 0;
  }
`;

export type Props = {
  text: string;
  btnColor?: string;
  width: number;
  disabled?: boolean;
  textColor: string;
  iconType?: IconType;
  onClick: () => void;
};

const ButtonMolecules = ({
  text,
  textColor,
  btnColor,
  width,
  disabled = false,
  iconType,
  onClick,
}: Props) => {
  return (
    <>
      <ButtonContainer
        btnColor={disabled ? "#c1c1c1" : btnColor}
        textColor={disabled ? "#fff" : textColor}
        width={width}
        onClick={onClick}
        disabled={disabled}
      >
        {iconType !== null && (
          <IconContainer>
            <IconAtoms
              iconType={iconType}
              size={24}
              color={disabled ? "#fff" : textColor}
            />
          </IconContainer>
        )}
        {text}
      </ButtonContainer>
    </>
  );
};

export default ButtonMolecules;
