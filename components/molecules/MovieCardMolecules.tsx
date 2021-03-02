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
import {
  GeneralJustify,
  GeneralAlignItems,
} from "../../styles/flex/GeneralFlexStyle";
import { GeneralSpacer } from "../../styles/spacer/GeneralSpacerStyle";
import {
  GeneralFlex,
  GeneralDirection,
} from "../../styles/flex/GeneralFlexStyle";
import useMedia from "use-media";
import { IconType } from "../../consts/IconConsts";
import IconAtoms from "../atoms/IconAtoms";

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
  good,
  wantWatch,
}: Props) => {
  const router = useRouter();

  const isWide = useMedia({ minWidth: 500 });

  const moveMovieInfo = (movieId: String) => {
    router.push(`/movieInfo/${movieId}`);
  };

  return (
    <CardAtoms width={352} onClick={() => moveMovieInfo(movieId)}>
      <GeneralFlex
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.SPACE_AROUND}
      >
        <ImageAtoms width={100} src={picture as string} />

        {!isWide && <GeneralSpacer horizontal={8} />}

        <div>
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
            {format(startTime, "yyyy年MM月Do日 HH時mm分", { locale: ja })}
          </GeneralText>

          <GeneralFlex direction={GeneralDirection.ROW}>
            <GeneralFlex direction={GeneralDirection.ROW}>
              <IconAtoms
                iconType={IconType.MAN}
                size={16}
                color={GeneralColorStyle.Grey}
              />

              <GeneralSpacer horizontal={4} />

              {String(wantWatch)}
            </GeneralFlex>

            <GeneralSpacer horizontal={12} />

            <GeneralFlex direction={GeneralDirection.ROW}>
              <IconAtoms
                iconType={IconType.HEART}
                size={16}
                color={GeneralColorStyle.Grey}
              />

              <GeneralSpacer horizontal={4} />

              {String(good)}
            </GeneralFlex>
          </GeneralFlex>
        </div>
      </GeneralFlex>
    </CardAtoms>
  );
};

export default MovieCardMolecules;
