import React, { ReactNode } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled, { css } from "styled-components";

const CardContainer = styled.div<{
  width: number;
  raised: boolean;
}>`
  padding: 14px 18px;
  width: ${({ width }) => width}px;

  ${({ raised }) =>
    raised &&
    css`
      box-shadow: #a6a6a6 0px 2px 4px;
    `}
`;

export type Props = {
  width: number;
  raised?: boolean;
  children: ReactNode;
};

const CardAtoms = ({ width, raised = false, children }: Props) => {
  return (
    <CardContainer width={width} raised={raised}>
      {children}
    </CardContainer>
  );
};

export default CardAtoms;
