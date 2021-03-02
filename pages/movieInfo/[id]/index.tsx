import React from "react";
import ScreeningInfo from "components/templates/screeningInfo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { db, auth } from "../../../utils/firebase/firebase";
import ja from "date-fns/locale/ja";
import { format } from "date-fns";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import styled from "styled-components";
import {
  GeneralFlex,
  GeneralDirection,
  GeneralJustify,
  GeneralAlignItems,
} from "../../../styles/flex/GeneralFlexStyle";
import { GeneralSpacer } from "../../../styles/spacer/GeneralSpacerStyle";
import IconAtoms from "components/atoms/IconAtoms";
import { IconType } from "consts/IconConsts";
import CircleButtonMolecules from "components/molecules/buttons/CircleButtonMolecules";
import firebase from "firebase";

const ReservationBtnWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MovieInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const movieId = id as string;
  const [movie, setMovie] = React.useState(null);

  type Schedule = {
    good: number;
    movie: Movie;
    openTime: any;
    place: Place;
    startTime: any;
    wantWatch: number;
    id: string;
  };
  type Movie = {
    title: string;
    description: string;
    picture: string;
  };

  type Place = {
    prefecture: string;
    city: string;
    other: string;
  };

  useEffect(() => {
    const clump = async () => {
      let getMovies = [];
      await db
        .collection("schedule")
        .doc(movieId)
        .onSnapshot((doc) => {
          setMovie(doc.data());
          console.log(doc.data());
        });
    };
    clump();
  }, [movieId]);

  const moveReservation = () => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      router.push(`/movieInfo/${id}/reservation`);
    } else {
      router.push(`/login`);
    }
  };
  const toggleGood=()=>{
    db
        .collection("schedule")
        .doc(movieId).set({good:firebase.firestore.FieldValue.increment(1)},{merge:true})
  }
  return (
    <>
      {movie && (
        <ScreeningInfo
          description={movie.movie.description}
          image={movie.movie.image}
          title={movie.movie.title}
          city={movie.place.city}
          other={movie.place.other}
          prefecture={movie.place.prefecture}
          good={movie.good}
          wantWatch={movie.wantWatch}
          openTime={format(movie.openTime.toDate(), "yyyy年MM月Do日 dddd", {
            locale: ja,
          })}
          startTime={format(movie.startTime.toDate(), "yyyy年MM月Do日 dddd", {
            locale: ja,
          })}
        />
      )}

      <GeneralFlex
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.CENTER}
        alignItems={GeneralAlignItems.CENTER}
      >
        <GeneralSpacer horizontal={16} />
        <ButtonMolecules
          text={"予約する"}
          textColor={GeneralColorStyle.White}
          width={376}
          btnColor={GeneralColorStyle.Red}
          onClick={moveReservation}
        />
        <GeneralSpacer horizontal={16} />
      </GeneralFlex>
      <div style={{ position: "fixed",right:"16px", bottom:"96px"}}>
        <CircleButtonMolecules
          size={48}
          btnColor={GeneralColorStyle.Yellow}
          iconColor={GeneralColorStyle.Red}
          iconType={IconType.HEART}
          onClick={toggleGood}
        />
      </div>
    </>
  );
};

export default MovieInfo;
