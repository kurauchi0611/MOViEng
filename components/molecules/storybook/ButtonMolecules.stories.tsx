import React, { useState, useMemo } from "react";
import ButtonMolecules from "../buttons/ButtonMolecules";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IconType } from "../../../consts/IconConsts";

export default {
  title: "Components/Molecules/Button",
  component: ButtonMolecules,
  decorators: [withKnobs],
};

const iconList = {
  NONE: undefined,
  COIN: IconType.COIN,
  TWITTER: IconType.TWITTER,
  MAIL: IconType.MAIL,
  MAN: IconType.MAN,
  HEART: IconType.HEART,
  LOGOUT: IconType.LOGOUT,
  WITHDRAWAL: IconType.WITHDRAWAL,
  BACK: IconType.BACK,
  PEN: IconType.PEN,
};

export const showButtonMolecules = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxClick = useMemo(() => {
    return (e) => {
      setChecked(!checked);
    };
  }, [checked]);

  return (
    <>
      <ButtonMolecules
        text={text("Text", "テキスト")}
        btnColor={!checked ? color("BtnColor", "#fee101") : undefined}
        width={number("Width", 384)}
        disabled={boolean("Disabled", false)}
        textColor={color("TextColor", "#000")}
        iconType={select("Icon", iconList, undefined)}
        onClick={action("onClick")}
      />

      <div style={{ marginTop: "8px" }}>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxClick}
          />
          ボーダーボタン
        </label>
      </div>
    </>
  );
};
