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
import { db } from "../../../utils/firebase/firebase";

const ScreeningInfoContainer = styled(GeneralFlex)`
  width: 100vw;
`;

const Nagesen = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const movieId = router.query.movie as string;
  const isWide = useMedia({ minWidth: 500 });

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
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
    </>
  );
};

export default Nagesen;
