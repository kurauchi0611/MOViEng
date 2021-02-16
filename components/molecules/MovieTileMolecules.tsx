import React from "react";
import styled from "styled-components";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
  GeneralTag,
} from "styles/typography/GeneralTextStyle";

const MovieTileContainer = styled.div`
  width: 50vw;
  background: ${GeneralColorStyle.Tile};
  padding: 8px 12px;
`;

export type Props = {
  text: string;
};

const MovieTileMolecules = ({ text }: Props) => {
  return (
    <MovieTileContainer>
      <GeneralText
        fontSize={GeneralFontSize.SIZE_12}
        fontWeight={GeneralFontWeight.BOLD}
        tag={GeneralTag.H3}
      >
        {text}
      </GeneralText>
    </MovieTileContainer>
  );
};

export default MovieTileMolecules;
