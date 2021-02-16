import styled, { css } from "styled-components";
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
import { auth } from "../utils/firebase/firebase";
import { GeneralSpacer } from "../styles/spacer/GeneralSpacerStyle";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../styles/flex/GeneralFlexStyle";

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

  const logInFunc = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <GeneralFlex
        direction={GeneralDirection.COLUMN}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
      >
        <TextFieldAtoms
          placeholder={"メールアドレス"}
          value={email}
          width={360}
          changeValue={changeEmail}
        />

        <GeneralSpacer vertical={12} />

        <TextFieldAtoms
          placeholder={"パスワード"}
          value={password}
          width={360}
          changeValue={changePassword}
        />
        <GeneralSpacer vertical={52} />
      </GeneralFlex>

      <hr />
      <GeneralFlex
        direction={GeneralDirection.COLUMN}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
      >
        <ButtonMolecules
          text={"ログイン"}
          textColor={GeneralColorStyle.White}
          btnColor={GeneralColorStyle.Red}
          width={360}
          disabled={!email || !password ? true : false}
          onClick={logInFunc}
        />
        <GeneralSpacer vertical={16} />

        <ButtonMolecules
          text={"ツイッターではじめる"}
          textColor={GeneralColorStyle.White}
          btnColor={GeneralColorStyle.Twitter}
          width={360}
          onClick={() => console.log("ログイン")}
          iconType={IconType.TWITTER}
        />
        <GeneralSpacer vertical={80} />
      </GeneralFlex>
      <hr />

      <GeneralFlex
        direction={GeneralDirection.COLUMN}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
      >
        <GeneralSpacer vertical={60} />
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
          onClick={() => router.push("/regist_account")}
          iconType={IconType.MAIL}
        />
      </GeneralFlex>
    </>
  );
};

export default Login;
