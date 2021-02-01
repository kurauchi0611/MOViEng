import React, { ReactNode } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export type Props = {
  width: number;
  raised?: boolean;
  children: ReactNode;
};

const CardAtoms = ({ width, raised = false, children }: Props) => {
  return (
    <Card style={{ width }} raised={raised}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardAtoms;
