import styled from "styled-components";
import TextFieldAtoms from "../components/atoms/TextFieldAtoms";
import { useState, ChangeEvent } from "react";
import ButtonMolecules from "../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { IconType } from "consts/IconConsts";
import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
  GeneralTag,
} from "../styles/typography/GeneralTextStyle";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <TextFieldAtoms
        placeholder={"メールアドレス"}
        value={email}
        width={360}
        changeValue={changeEmail}
      />

      <TextFieldAtoms
        placeholder={"パスワード"}
        value={password}
        width={360}
        changeValue={changePassword}
      />

      <hr />

      <ButtonMolecules
        text={"ログイン"}
        textColor={GeneralColorStyle.White}
        btnColor={GeneralColorStyle.Red}
        width={360}
        disabled={!email || !password ? true : false}
        onClick={() => console.log("ログイン")}
      />

      <ButtonMolecules
        text={"ツイッターではじめる"}
        textColor={GeneralColorStyle.White}
        btnColor={GeneralColorStyle.Twitter}
        width={360}
        onClick={() => console.log("Twitter")}
        iconType={IconType.TWITTER}
      />

      <hr />

      <GeneralText
        fontSize={GeneralFontSize.SIZE_16}
        fontColor={"#4f4f4f"}
        tag={GeneralTag.P}
        fontWeight={GeneralFontWeight.BOLD}
      >
        アカウントをお持ちでない方はこちら
      </GeneralText>

      <ButtonMolecules
        text={"新規会員登録"}
        textColor={GeneralColorStyle.White}
        btnColor={GeneralColorStyle.Green}
        width={360}
        onClick={() => router.push("regist_account")}
        iconType={IconType.MAIL}
      />
    </>
  );
};

export default Login;
