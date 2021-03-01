import CardAtoms from "../../components/atoms/CardAtoms";
import GeneralText, {
  GeneralFontSize,
} from "../../styles/typography/GeneralTextStyle";
import { GeneralFontWeight } from "../../styles/typography/GeneralTextStyle";
import {
  GeneralFlex,
  GeneralDirection,
  GeneralJustify,
  GeneralAlignItems,
} from "../../styles/flex/GeneralFlexStyle";
import ButtonMolecules from "../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { useRouter } from "next/router";
const Complete = () => {
  const router = useRouter();

  const moveTop = () => {
    router.push("/");
  };

  return (
    <>
      <CardAtoms width={376} raised={true}>
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontWeight={GeneralFontWeight.BOLD}
        >
          ご予約ありがとうございました。当日のご来場をお待ちしております。
        </GeneralText>
      </CardAtoms>

      <GeneralFlex
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
        style={{ marginTop: 24 }}
      >
        <ButtonMolecules
          text={"閉じる"}
          textColor={GeneralColorStyle.Black}
          width={376}
          onClick={moveTop}
        />
      </GeneralFlex>
    </>
  );
};

export default Complete;
