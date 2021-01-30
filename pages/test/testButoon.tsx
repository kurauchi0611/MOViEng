import React from "react";
import ButtonMolecules from "../../components/molecules/buttons/ButtonMolecules";
import { IconType } from "../../consts/IconConsts";

const testButton = () => {
  const clicktest = () => {
    console.log("hogehoge");
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
    </>
  );
};

export default testButton;
