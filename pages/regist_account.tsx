import styled, { css } from "styled-components";
import TextFieldAtoms from "../components/atoms/TextFieldAtoms";
import ButtonMolecules from "../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { ChangeEvent, useState } from "react";
import { auth, db } from "../utils/firebase/firebase";
import { GeneralSpacer } from "../styles/spacer/GeneralSpacerStyle";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../styles/flex/GeneralFlexStyle";

const RegistAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const registAccount = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        const uid = user.user.uid;

        await db.collection("users").doc(uid).set({
          name,
        });
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
          placeholder={"例) ムービー太郎"}
          label={"ニックネーム"}
          width={360}
          isMandatory={true}
          value={name}
          changeValue={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />

        <GeneralSpacer vertical={20} />

        <TextFieldAtoms
          placeholder={"PC・携帯どちらでも可"}
          label={"メールアドレス"}
          width={360}
          isMandatory={true}
          value={email}
          changeValue={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <GeneralSpacer vertical={20} />

        <TextFieldAtoms
          placeholder={"6文字以上・半角小文字英数"}
          label={"パスワード"}
          width={360}
          isMandatory={true}
          value={password}
          changeValue={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />

        <GeneralSpacer vertical={20} />

        <TextFieldAtoms
          placeholder={"6文字以上・半角小文字英数"}
          label={"パスワード（確認）"}
          width={360}
          isMandatory={true}
          value={checkPassword}
          changeValue={(event: ChangeEvent<HTMLInputElement>) =>
            setCheckPassword(event.target.value)
          }
        />

        <GeneralSpacer vertical={40} />

        <ButtonMolecules
          text={"メール登録"}
          textColor={GeneralColorStyle.White}
          btnColor={GeneralColorStyle.Green}
          width={360}
          disabled={
            !name ||
            !email ||
            !password ||
            !checkPassword ||
            password !== checkPassword
              ? true
              : false
          }
          onClick={registAccount}
        />
      </GeneralFlex>
    </>
  );
};

export default RegistAccount;
