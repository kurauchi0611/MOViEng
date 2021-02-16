import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import GeneralColorStyle from "../../styles/colors/GeneralColorStyle";

const CardContainer = styled.div<{
  width: number;
  raised: boolean;
}>`
  padding: 14px 18px;
  border-radius: 2px;
  width: ${({ width }) => width}px;

  ${({ raised }) =>
    raised &&
    css`
      box-shadow: ${GeneralColorStyle.Grey} 0px 2px 4px;
    `}
`;

export type Props = {
  width: number;
  raised?: boolean;
  children: ReactNode;
  onClick: () => void;
};

const CardAtoms = ({ width, raised = false, children, onClick }: Props) => {
  return (
    <CardContainer width={width} raised={raised} onClick={onClick}>
      {children}
    </CardContainer>
  );
};

export default CardAtoms;
