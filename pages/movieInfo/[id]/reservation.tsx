import CardAtoms from "../../../components/atoms/CardAtoms";
import GeneralText, {
  GeneralFontWeight,
} from "../../../styles/typography/GeneralTextStyle";
import { GeneralFontSize } from "../../../styles/typography/GeneralTextStyle";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { db, auth } from "../../../utils/firebase/firebase";
import ja from "date-fns/locale/ja";
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
import firebase from "firebase";
import { Typography } from "@material-ui/core";

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
    const userId: any = id;
    
    await db
      .collection("users")
      .doc(user.uid)
      .collection("reservation")
      .add({
        ...movie,
        uid:userId
      });
    await db
      .collection("schedule")
      .doc(userId)
      .set(
        { wantWatch: firebase.firestore.FieldValue.increment(1) },
        { merge: true }
      );
    router.push("/movieInfo/complete");
  };

  return (
    <>
      <div style={{ background: "#FEE101", padding: "16px" }}>
        <Typography component="p" variant="h5">
          予約確認
        </Typography>
      </div>
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
              <GeneralText
                fontSize={GeneralFontSize.SIZE_12}
                fontWeight={GeneralFontWeight.BOLD}
              >
                {movie.movie.title}
              </GeneralText>
              <GeneralSpacer horizontal={16} />
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>日時</GeneralText>
              <GeneralText
                fontSize={GeneralFontSize.SIZE_12}
                fontWeight={GeneralFontWeight.BOLD}
              >
                {`${format(movie.openTime.toDate(), "yyyy年MM月dd日（E）", {
                  locale: ja,
                })}`}
              </GeneralText>
              <GeneralText
                fontSize={GeneralFontSize.SIZE_12}
                fontWeight={GeneralFontWeight.BOLD}
              >
                {`開場：${format(movie.openTime.toDate(), "HH:mm ~", {
                  locale: ja,
                })}　開演：${format(movie.startTime.toDate(), "HH:mm ~", {
                  locale: ja,
                })}`}
              </GeneralText>
              <GeneralSpacer horizontal={16} />
              <GeneralText fontSize={GeneralFontSize.SIZE_12}>会場</GeneralText>
              <GeneralText
                fontSize={GeneralFontSize.SIZE_12}
                fontWeight={GeneralFontWeight.BOLD}
              >
                {movie.place.prefecture}
                {movie.place.city}
                <br />
                {movie.place.other}
              </GeneralText>
              <iframe
                src={`https://www.google.com/maps?output=embed&q=${movie.place.prefecture} ${movie.place.city} ${movie.place.other}`}
                style={{ border: 0, width: "100%" }}
                loading="lazy"
              ></iframe>
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
