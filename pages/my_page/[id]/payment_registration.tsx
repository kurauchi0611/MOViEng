import TextFieldAtoms from "../../../components/atoms/TextFieldAtoms";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import styled from "styled-components";
import { useState, ChangeEvent } from "react";
import { GeneralSpacer } from "../../../styles/spacer/GeneralSpacerStyle";
import { useRouter } from "next/router";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../../../styles/flex/GeneralFlexStyle";

const Wrap = styled.div`
  width: 360px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const PaymentRegistration = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const movieId = router.query.movie;

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [ccv, setCCV] = useState("");

  const moveNagesen = () => {
    router.replace(`/my_page/${userId}/nagesen?movie=${movieId}`);
  };

  return (
    <GeneralFlex
      direction={GeneralDirection.COLUMN}
      justify={GeneralJustify.CENTER}
      alignItems={GeneralAlignItems.CENTER}
    >
      <GeneralSpacer vertical={42} />
      <div>
        <TextFieldAtoms
          placeholder={"1234 5678 9012 3456"}
          label={"カード番号"}
          width={360}
          isMandatory={true}
          value={cardNumber}
          changeValue={(event: ChangeEvent<HTMLInputElement>) =>
            setCardNumber(event.target.value)
          }
          type={"text"}
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
              value={expirationDate}
              changeValue={(event: ChangeEvent<HTMLInputElement>) =>
                setExpirationDate(event.target.value)
              }
              type={"text"}
            />
            <TextFieldAtoms
              placeholder={""}
              label={"CCV"}
              width={160}
              isMandatory={true}
              value={ccv}
              changeValue={(event: ChangeEvent<HTMLInputElement>) =>
                setCCV(event.target.value)
              }
              type={"password"}
            />
          </GeneralFlex>
        </Wrap>

        <ButtonMolecules
          text={"登録"}
          textColor={GeneralColorStyle.White}
          btnColor={GeneralColorStyle.Green}
          width={360}
          onClick={moveNagesen}
          disabled={!cardNumber || !expirationDate || !ccv}
        />
      </div>
    </GeneralFlex>
  );
};

export default PaymentRegistration;
