import React from "react";
import MovieTileMolecules from "components/molecules/MovieTileMolecules";
import { ImageAtoms } from "components/atoms/ImageAtoms";
import styled from "styled-components";
import {
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
  GeneralAlignItems,
} from "styles/flex/GeneralFlexStyle";
import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
} from "styles/typography/GeneralTextStyle";
import useMedia from "use-media";
import IconAtoms from "components/atoms/IconAtoms";
import { IconType } from "consts/IconConsts";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

const ScreeningInfoContainer = styled(GeneralFlex)`
  width: 100vw;
`;

const VerticalWrap = styled.div`
  width: 1px;
  height: 70px;
  background: ${GeneralColorStyle.Grey};
`;

const NumberFlexWrap = styled(GeneralFlex)`
  width: 120px;
`;

const SynopsisWrap = styled.div`
  padding: 24px;
`;

const SpaceIcon = styled.div`
  padding-left: 4px;
`;

export type Props = {
  description: string;
  image: string;
  title: string;
  city: string;
  other: string;
  prefecture: string;
  good: number;
  wantWatch: number;
  openTime: number | Date;
  startTime: number | Date;
};

const ScreeningInfo = ({
  description,
  image,
  title,
  city,
  other,
  prefecture,
  good,
  wantWatch,
  openTime,
  startTime,
}: Props) => {
  const isWide = useMedia({ minWidth: 500 });

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
            <MovieTileMolecules text={format(openTime, "yyyy年MM月dd日（E）", {
                locale: ja,
              })} />
            <MovieTileMolecules
              text={format(openTime, "・開場：HH:mm ~", {
                locale: ja,
              })}
            />
            <MovieTileMolecules
              text={format(startTime, "・開演：HH:mm ~", {
                locale: ja,
              })}
            />
            <GeneralText
              fontSize={GeneralFontSize.SIZE_14}
              fontWeight={GeneralFontWeight.BOLD}
            >
              会場
            </GeneralText>
            <MovieTileMolecules text={`${prefecture} ${city} ${other}`} />
          </GeneralFlex>
        </ScreeningInfoContainer>
      </GeneralFlex>

      <hr />

      <GeneralFlex>
        <GeneralFlex
          direction={GeneralDirection.ROW}
          justify={GeneralJustify.SPACE_EVENLY}
        >
          <NumberFlexWrap
            direction={GeneralDirection.COLUMN}
            justify={GeneralJustify.CENTER}
            alignItems={GeneralAlignItems.CENTER}
          >
            <GeneralFlex
              direction={GeneralDirection.ROW}
              alignItems={GeneralAlignItems.CENTER}
              justify={GeneralJustify.CENTER}
            >
              <IconAtoms
                iconType={IconType.MAN}
                size={16}
                color={GeneralColorStyle.Grey}
              />

              <SpaceIcon />

              <GeneralText
                fontSize={GeneralFontSize.SIZE_14}
                fontColor={GeneralColorStyle.Grey}
              >
                参加します
              </GeneralText>
            </GeneralFlex>
            <GeneralText
              fontSize={GeneralFontSize.SIZE_20}
              fontColor={GeneralColorStyle.Black}
            >
              {String(wantWatch)}
            </GeneralText>
          </NumberFlexWrap>

          <VerticalWrap />

          <NumberFlexWrap
            direction={GeneralDirection.COLUMN}
            justify={GeneralJustify.CENTER}
            alignItems={GeneralAlignItems.CENTER}
          >
            <GeneralFlex
              direction={GeneralDirection.ROW}
              alignItems={GeneralAlignItems.CENTER}
            >
              <IconAtoms
                iconType={IconType.HEART}
                size={16}
                color={GeneralColorStyle.Red}
              />

              <SpaceIcon />

              <GeneralText
                fontSize={GeneralFontSize.SIZE_14}
                fontColor={GeneralColorStyle.Grey}
              >
                いいね
              </GeneralText>
            </GeneralFlex>

            <GeneralText
              fontSize={GeneralFontSize.SIZE_20}
              fontColor={GeneralColorStyle.Red}
            >
              {String(good)}
            </GeneralText>
          </NumberFlexWrap>
        </GeneralFlex>
      </GeneralFlex>

      <hr />

      <SynopsisWrap>
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontWeight={GeneralFontWeight.BOLD}
        >
          あらすじ
        </GeneralText>

        <GeneralText fontSize={GeneralFontSize.SIZE_16}>
          {description}
        </GeneralText>
      </SynopsisWrap>
    </>
  );
};

export default ScreeningInfo;
