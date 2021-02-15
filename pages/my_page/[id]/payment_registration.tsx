import TextFieldAtoms from "../../../components/atoms/TextFieldAtoms";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import styled from "styled-components";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../../../styles/flex/GeneralFlexStyle";

const Wrap = styled.div`
  width: 360px;
`;

const PaymentRegistration = () => {
  return (
    <>
      <TextFieldAtoms
        placeholder={"1234 5678 9012 3456"}
        label={"カード番号"}
        width={360}
        isMandatory={true}
      />
      <Wrap>
        <GeneralFlex
          direction={GeneralDirection.ROW}
          justify={GeneralJustify.SPACE_BETWEEN}
          alignItems={GeneralAlignItems.CENTER}
        >
          <TextFieldAtoms
            placeholder={"月/年"}
            label={"有効期限"}
            width={160}
            isMandatory={true}
          />
          <TextFieldAtoms
            placeholder={""}
            label={"CCV"}
            width={160}
            isMandatory={true}
          />
        </GeneralFlex>
      </Wrap>

      <ButtonMolecules
        text={"登録"}
        textColor={GeneralColorStyle.White}
        btnColor={GeneralColorStyle.Green}
        width={360}
        onClick={() => console.log("hogehoge")}
      />
    </>
  );
};

export default PaymentRegistration;
