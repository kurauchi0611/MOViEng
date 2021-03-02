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
import { Typography } from "@material-ui/core";
import { GeneralSpacer } from "styles/spacer/GeneralSpacerStyle";

const Complete = () => {
  const router = useRouter();

  const moveTop = () => {
    router.push("/");
  };

  return (
    <>
      <div style={{ background: "#FEE101", padding: "16px" }}>
        <Typography component="p" variant="h5">
          予約完了
        </Typography>
      </div>
      <GeneralFlex
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
        style={{ marginTop: 24 }}
      >
        <GeneralSpacer horizontal={16} />
        <CardAtoms width={376} raised={true}>
          <GeneralText
            fontSize={GeneralFontSize.SIZE_16}
            fontWeight={GeneralFontWeight.BOLD}
          >
            ご予約ありがとうございました。当日のご来場をお待ちしております。
          </GeneralText>
        </CardAtoms>
        <GeneralSpacer horizontal={16} />
      </GeneralFlex>

      <GeneralFlex
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
        style={{ marginTop: 24 }}
      >
        <GeneralSpacer horizontal={16} />
        <ButtonMolecules
          text={"閉じる"}
          textColor={GeneralColorStyle.Black}
          width={376}
          onClick={moveTop}
        />
        <GeneralSpacer horizontal={16} />
      </GeneralFlex>
    </>
  );
};

export default Complete;
