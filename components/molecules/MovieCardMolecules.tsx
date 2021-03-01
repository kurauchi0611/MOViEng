import styled from "styled-components";
import CardAtoms from "../atoms/CardAtoms";
import { ImageAtoms } from "../atoms/ImageAtoms";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import GeneralText, {
  GeneralFontSize,
} from "../../styles/typography/GeneralTextStyle";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { useRouter } from "next/router";
import { GeneralDirection, GeneralFlex } from "styles/flex/GeneralFlexStyle";

export type Props = {
  movieId: String;
  city: String;
  other: String;
  prefecture: String;
  picture: String;
  title: String;
  startTime: Date;
  good: number;
  wantWatch: number;
};

const MovieCardMolecules = ({
  picture,
  title,
  movieId,
  city,
  other,
  prefecture,
  startTime,
}: Props) => {
  const router = useRouter();

  const moveMovieInfo = (movieId: String) => {
    router.push(`/movieInfo/${movieId}`);
  };

  return (
    <CardAtoms width={360} onClick={() => moveMovieInfo(movieId)}>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <ImageAtoms width={100} src={picture as string} />
        <div style={{paddingLeft:"16px",}}>
          <GeneralText
            fontSize={GeneralFontSize.SIZE_16}
            fontColor={GeneralColorStyle.Black}
          >
            {title}
          </GeneralText>

          <GeneralText fontSize={GeneralFontSize.SIZE_16} fontColor={"#7B7B7B"}>
            {`${prefecture}・${city} ${other}`}
          </GeneralText>

          <GeneralText fontSize={GeneralFontSize.SIZE_16} fontColor={"#7B7B7B"}>
            {format(startTime, "yyyy年MM月Do日 dddd", { locale: ja })}
          </GeneralText>
        </div>
      </GeneralFlex>
    </CardAtoms>
  );
};

export default MovieCardMolecules;
