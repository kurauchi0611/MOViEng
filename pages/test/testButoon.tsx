import React, { useState, ChangeEvent } from "react";
import ButtonMolecules from "../../components/molecules/buttons/ButtonMolecules";
import { IconType } from "../../consts/IconConsts";
import TextFieldAtoms from "../../components/atoms/TextFieldAtoms";
import CircleButtonMolecules from "../../components/molecules/buttons/CircleButtonMolecules";

const testButton = () => {
  const clicktest = () => {
    console.log("hogehoge");
  };

  const [text, setText] = useState("");

  const changeText = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  return (
    <>
      <ButtonMolecules
        iconType={IconType.COIN}
        textColor={"#000"}
        onClick={clicktest}
        width={378}
        text={"テキストです"}
      />
      {text}
      <TextFieldAtoms
        placeholder={"テキスト"}
        value={text}
        width={300}
        changeValue={changeText}
        label={"ニックネーム"}
        isMandatory={true}
      />
      <CircleButtonMolecules
        iconType={IconType.COIN}
        btnColor={"#fee101"}
        iconColor={"#000"}
        size={68}
        onClick={clicktest}
      />
    </>
  );
};

export default testButton;
