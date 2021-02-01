import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import CardAtoms from "../CardAtoms";

export default {
  title: "Components/Atoms/Card",
  component: CardAtoms,
  decorators: [withKnobs],
};

export const showCardAtoms = () => (
  <CardAtoms width={number("Width", 400)} raised={boolean("Raised", false)}>
    <p>ここにchildrenを入れる</p>
  </CardAtoms>
);
