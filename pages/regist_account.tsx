import styled from "styled-components";
import TextFieldAtoms from "../components/atoms/TextFieldAtoms";
import ButtonMolecules from "../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { ChangeEvent, useState } from "react";

const RegistAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <>
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
          password == checkPassword
            ? true
            : false
        }
        onClick={() => console.log("アカウント作成")}
      />
    </>
  );
};

export default RegistAccount;
