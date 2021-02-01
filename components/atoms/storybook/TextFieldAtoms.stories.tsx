import React, { useState, ChangeEvent } from "react";
import TextFieldAtoms from "../TextFieldAtoms";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Atoms/TextField",
  component: TextFieldAtoms,
  decorators: [withKnobs],
};

export const showTextFieldAtoms = () => {
  const [storyText, setStoryText] = useState("");

  const changeStoryText = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setStoryText(event.target.value);
  };

  return (
    <TextFieldAtoms
      value={storyText}
      width={number("Width", 300)}
      placeholder={text("Placeholder", "placeholder")}
      label={text("Label", undefined)}
      isMandatory={boolean("IsMandatory", false)}
      changeValue={(event) => {
        changeStoryText(event);
        action("onChange")(event.target.value);
      }}
    />
  );
};
