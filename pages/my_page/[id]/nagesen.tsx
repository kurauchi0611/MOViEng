import {
  GeneralFlex,
  GeneralDirection,
  GeneralJustify,
  GeneralAlignItems,
} from "../../../styles/flex/GeneralFlexStyle";
import GeneralText from "../../../styles/typography/GeneralTextStyle";
import {
  GeneralFontSize,
  GeneralFontWeight,
  GeneralTag,
} from "../../../styles/typography/GeneralTextStyle";
import { ImageAtoms } from "../../../components/atoms/ImageAtoms";
import MovieTileMolecules from "../../../components/molecules/MovieTileMolecules";
import styled from "styled-components";
import useMedia from "use-media";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db, auth } from "../../../utils/firebase/firebase";
import IconAtoms from "../../../components/atoms/IconAtoms";
import { IconType } from "consts/IconConsts";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import { GeneralSpacer } from "../../../styles/spacer/GeneralSpacerStyle";

const ScreeningInfoContainer = styled(GeneralFlex)`
  width: 100vw;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Money = styled.div`
  width: 378px;
  background: #777777;
  padding: 4px 16px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MoneyBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Nagesen = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const movieId = router.query.movie as string;
  const isWide = useMedia({ minWidth: 500 });

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [money, setMoney] = useState(0);

  useEffect(() => {
    if (!userId && !movieId) return;

    const getMovie = async () => {
      const data = await db
        .collection("users")
        .doc(userId)
        .collection("reservation")
        .doc(movieId)
        .get();
      setTitle(data.data().movie.title);
      setImage(data.data().movie.image);
    };

    getMovie();
  }, [userId, movieId]);

  const amount = async () => {
    await db
      .collection("stripe_customers")
      .doc(userId)
      .collection("charges")
      .add({
        amount: money,
      });
    setMoney(0);
  };

  return (
    <>
      <GeneralFlex
        direction={GeneralDirection.COLUMN}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
      >
        <GeneralText
          fontSize={GeneralFontSize.SIZE_20}
          fontWeight={GeneralFontWeight.BOLD}
          tag={GeneralTag.H3}
        >
          {title}
        </GeneralText>

        <ScreeningInfoContainer
          direction={GeneralDirection.ROW}
          justify={GeneralJustify.SPACE_EVENLY}
        >
          <ImageAtoms
            width={isWide ? 400 : 180}
            src={image}
            alt="映画ポスター"
          />
        </ScreeningInfoContainer>
      </GeneralFlex>

      <hr />

      <TextWrap>
        <GeneralText
          fontSize={GeneralFontSize.SIZE_20}
          fontWeight={GeneralFontWeight.BOLD}
        >
          金額を入力する
        </GeneralText>

        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontWeight={GeneralFontWeight.BOLD}
        >
          金額は最低500円から決済出来ます。
        </GeneralText>
      </TextWrap>

      <Money>
        <IconAtoms
          iconType={IconType.COIN}
          size={36}
          color={GeneralColorStyle.White}
        />

        <GeneralText
          fontSize={GeneralFontSize.SIZE_36}
          fontColor={GeneralColorStyle.White}
        >
          {String(money)}
        </GeneralText>
      </Money>

      <MoneyBtnWrap>
        <ButtonMolecules
          text={"＋500"}
          textColor={GeneralColorStyle.Black}
          width={120}
          onClick={() => setMoney((v) => v + 500)}
        />

        <GeneralSpacer horizontal={8} />

        <ButtonMolecules
          text={"＋1000"}
          textColor={GeneralColorStyle.Black}
          width={120}
          onClick={() => setMoney((v) => v + 1000)}
        />

        <GeneralSpacer horizontal={8} />

        <ButtonMolecules
          text={"＋1500"}
          textColor={GeneralColorStyle.Black}
          width={120}
          onClick={() => setMoney((v) => v + 1500)}
        />
      </MoneyBtnWrap>

      <TextWrap>
        <GeneralSpacer vertical={16} />

        <ButtonMolecules
          text={"投げる"}
          textColor={GeneralColorStyle.White}
          btnColor={GeneralColorStyle.Green}
          width={200}
          onClick={amount}
        />
      </TextWrap>
    </>
  );
};

export default Nagesen;
