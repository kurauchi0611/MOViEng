import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
} from "../../../styles/typography/GeneralTextStyle";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { IconType } from "consts/IconConsts";
import CardAtoms from "../../../components/atoms/CardAtoms";
import IconAtoms from "components/atoms/IconAtoms";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../../../styles/flex/GeneralFlexStyle";

const MyPage = () => {
  return (
    <>
      <GeneralText fontSize={GeneralFontSize.SIZE_16}>
        ユーザーネイム
      </GeneralText>
      <ButtonMolecules
        text={"編集"}
        textColor={"#333333"}
        btnColor={GeneralColorStyle.Grey}
        width={120}
        iconType={IconType.PEN}
        onClick={() => console.log("編集")}
      />
      なんじゃラほい
      <hr />
      <GeneralText
        fontSize={GeneralFontSize.SIZE_16}
        fontColor={`#BDBDBD`}
        fontWeight={GeneralFontWeight.BOLD}
      >
        チケット
      </GeneralText>
      <CardAtoms width={376} raised={true} onClick={() => console.log("hoge")}>
        <GeneralFlex
          direction={GeneralDirection.ROW}
          justify={GeneralJustify.SPACE_BETWEEN}
          alignItems={GeneralAlignItems.CENTER}
        >
          <GeneralText
            fontSize={GeneralFontSize.SIZE_16}
            fontColor={GeneralColorStyle.Black}
            fontWeight={GeneralFontWeight.BOLD}
          >
            パラサイト
          </GeneralText>

          <GeneralText
            fontSize={GeneralFontSize.SIZE_20}
            fontColor={GeneralColorStyle.Black}
          >
            18:20
          </GeneralText>
        </GeneralFlex>

        <GeneralText fontSize={GeneralFontSize.SIZE_12} fontColor={`#666`}>
          青森・青森市民ホール
        </GeneralText>
        <GeneralText fontSize={GeneralFontSize.SIZE_12} fontColor={`#666`}>
          2020年12月19日（土）
        </GeneralText>
      </CardAtoms>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <IconAtoms
          iconType={IconType.COIN}
          size={24}
          color={GeneralColorStyle.Black}
        />
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontColor={GeneralColorStyle.Black}
          fontWeight={GeneralFontWeight.BOLD}
        >
          支払い履歴
        </GeneralText>
      </GeneralFlex>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <IconAtoms
          iconType={IconType.LOGOUT}
          size={24}
          color={GeneralColorStyle.Black}
        />
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontColor={GeneralColorStyle.Black}
          fontWeight={GeneralFontWeight.BOLD}
        >
          ログアウト
        </GeneralText>
      </GeneralFlex>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <IconAtoms
          iconType={IconType.WITHDRAWAL}
          size={24}
          color={GeneralColorStyle.Black}
        />
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontColor={GeneralColorStyle.Black}
          fontWeight={GeneralFontWeight.BOLD}
        >
          退会
        </GeneralText>
      </GeneralFlex>
    </>
  );
};

export default MyPage;
