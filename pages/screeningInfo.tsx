import React from "react";
import MovieTileMolecules from "../components/molecules/MovieTileMolecules";
import { ImageAtoms } from "../components/atoms/ImageAtoms";
import styled from "styled-components";
import {
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
  GeneralAlignItems,
} from "../styles/flex/GeneralFlexStyle";
import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
} from "../styles/typography/GeneralTextStyle";
import useMedia from "use-media";
import IconAtoms from "../components/atoms/IconAtoms";
import { IconType } from "../consts/IconConsts";
import GeneralColorStyle from "../styles/colors/GeneralColorStyle";

const ScreeningInfoContainer = styled(GeneralFlex)`
  width: 100vw;
`;

const ScreeningInfo = () => {
  const isWide = useMedia({ minWidth: 500 });
  return (
    <>
      <GeneralText
        fontSize={GeneralFontSize.SIZE_20}
        fontWeight={GeneralFontWeight.BOLD}
      >
        映画情報
      </GeneralText>

      <ScreeningInfoContainer
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.SPACE_EVENLY}
      >
        <ImageAtoms
          width={isWide ? 400 : 180}
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qR6Ybx47dzCcvJKl9juzKKzy9Q9.jpg"
          alt=""
        />
        <GeneralFlex
          justify={GeneralJustify.SPACE_EVENLY}
          direction={GeneralDirection.COLUMN}
        >
          <GeneralText
            fontSize={GeneralFontSize.SIZE_14}
            fontWeight={GeneralFontWeight.BOLD}
          >
            日程
          </GeneralText>
          <MovieTileMolecules text={"2020年12月19日（土）"} />
          <MovieTileMolecules text={"・開場：17:20〜"} />
          <MovieTileMolecules text={"・開演：18:20〜"} />
          <GeneralText
            fontSize={GeneralFontSize.SIZE_14}
            fontWeight={GeneralFontWeight.BOLD}
          >
            会場
          </GeneralText>
          <MovieTileMolecules text={"青森県 〇〇ホール"} />
        </GeneralFlex>
      </ScreeningInfoContainer>

      <hr />

      <GeneralFlex>
        <GeneralFlex
          direction={GeneralDirection.ROW}
          alignItems={GeneralAlignItems.CENTER}
        >
          <IconAtoms
            iconType={IconType.MAN}
            size={16}
            color={GeneralColorStyle.Grey}
          />
          <GeneralText
            fontSize={GeneralFontSize.SIZE_14}
            fontColor={GeneralColorStyle.Grey}
          >
            参加します
          </GeneralText>
        </GeneralFlex>

        <GeneralFlex
          direction={GeneralDirection.ROW}
          alignItems={GeneralAlignItems.CENTER}
        >
          <IconAtoms
            iconType={IconType.HEART}
            size={16}
            color={GeneralColorStyle.Red}
          />
          <GeneralText
            fontSize={GeneralFontSize.SIZE_14}
            fontColor={GeneralColorStyle.Grey}
          >
            いいね
          </GeneralText>
        </GeneralFlex>
      </GeneralFlex>
    </>
  );
};

export default ScreeningInfo;
