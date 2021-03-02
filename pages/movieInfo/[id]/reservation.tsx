import CardAtoms from "../../../components/atoms/CardAtoms";
import GeneralText from "../../../styles/typography/GeneralTextStyle";
import { GeneralFontSize } from "../../../styles/typography/GeneralTextStyle";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { db, auth } from "../../../utils/firebase/firebase";
import { format } from "date-fns";
import {
  GeneralFlex,
  GeneralDirection,
  GeneralJustify,
  GeneralAlignItems,
} from "../../../styles/flex/GeneralFlexStyle";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { GeneralSpacer } from "../../../styles/spacer/GeneralSpacerStyle";

const ReservationMovie = () => {
  const router = useRouter();
  const { id } = router.query;
  const movieId = id as string;
  const [movie, setMovie] = React.useState(null);
  const [time, setTime] = React.useState("");

  useEffect(() => {
    const clump = async () => {
      let getMovies = [];
      await db
        .collection("schedule")
        .doc(movieId)
        .get()
        .then((doc) => {
          setMovie(doc.data());
          console.log(doc.data());
        });
    };
    clump();
  }, [movieId]);

  const reservation = async () => {
    const user = auth.currentUser;
    await db
      .collection("users")
      .doc(user.uid)
      .collection("reservation")
      .add({
        ...movie,
      });

    router.push("/movieInfo/complete");
  };

  return (
    <>
      {movie && (
        <>
          <GeneralFlex
            direction={GeneralDirection.ROW}
            justify={GeneralJustify.CENTER}
            alignItems={GeneralAlignItems.CENTER}
            style={{ marginTop: 16 }}
          >
            <GeneralSpacer horizontal={16} />
            <CardAtoms width={376} raised={true}>
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>作品</GeneralText>
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>
                {movie.movie.title}
              </GeneralText>

              <GeneralText fontSize={GeneralFontSize.SIZE_12}>日時</GeneralText>
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>
                2020年12月19日（土）
              </GeneralText>
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>
                開場：17:20〜　開演：18:20〜
              </GeneralText>

              <GeneralText fontSize={GeneralFontSize.SIZE_12}>会場</GeneralText>
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>
                青森市民ホール
                <br />
                青森県青森市柳川１丁目２−１４
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
              text={"予約する"}
              textColor={GeneralColorStyle.White}
              width={376}
              btnColor={GeneralColorStyle.Red}
              onClick={reservation}
            />
            <GeneralSpacer horizontal={16} />
          </GeneralFlex>
        </>
      )}
    </>
  );
};

export default ReservationMovie;
