import React from "react";
import { GeneralAlignItems, GeneralAlignContent } from "../GeneralFlexStyle";
import {
  GeneralFlex,
  GeneralDirection,
  GeneralWrap,
  GeneralJustify,
} from "../GeneralFlexStyle";
import { withKnobs, select } from "@storybook/addon-knobs";
import CardAtoms from "../../../components/atoms/CardAtoms";
import GeneralText, {
  GeneralFontSize,
} from "../../typography/GeneralTextStyle";
import styled from "styled-components";

export default {
  title: "Styles/Flex",
  component: GeneralFlex,
  decorators: [withKnobs],
};

const directionList = {
  ROW: GeneralDirection.ROW,
  ROW_REVERSE: GeneralDirection.ROW_REVERSE,
  COLUMN: GeneralDirection.COLUMN,
  COLUMN_REVERSE: GeneralDirection.COLUMN_REVERSE,
};

const wrapList = {
  NO_WRAP: GeneralWrap.NO_WRAP,
  WRAP: GeneralWrap.WRAP,
  WRAP_REVERSE: GeneralWrap.WRAP_REVERSE,
};

const justifyList = {
  FLEX_START: GeneralJustify.FLEX_START,
  CENTER: GeneralJustify.CENTER,
  FLEX_END: GeneralJustify.FLEX_END,
  SPACE_BETWEEN: GeneralJustify.SPACE_BETWEEN,
  SPACE_AROUND: GeneralJustify.SPACE_AROUND,
  SPACE_EVENLY: GeneralJustify.SPACE_EVENLY,
};

const alignItemsList = {
  STRETCH: GeneralAlignItems.STRETCH,
  FLEX_START: GeneralAlignItems.FLEX_START,
  CENTER: GeneralAlignItems.CENTER,
  FLEX_END: GeneralAlignItems.FLEX_END,
  BASELINE: GeneralAlignItems.BASELINE,
};

const alignContentList = {
  STRETCH: GeneralAlignContent.STRETCH,
  FLEX_START: GeneralAlignContent.FLEX_START,
  CENTER: GeneralAlignContent.CENTER,
  FLEX_END: GeneralAlignContent.FLEX_END,
  SPACE_BETWEEN: GeneralAlignContent.SPACE_BETWEEN,
  SPACE_AROUND: GeneralAlignContent.SPACE_BETWEEN,
};

const FlexWrap = styled(GeneralFlex)`
  height: 70vh;
`;

export const showStyleFlex = () => {
  const list = [];

  const data = [{ text: "1" }, { text: "2" }, { text: "3" }];

  for (let i in data) {
    list.push(
      <CardAtoms width={300} raised={true}>
        <GeneralText fontSize={GeneralFontSize.SIZE_24}>
          {`カード${data[i].text}`}
        </GeneralText>
      </CardAtoms>
    );
  }

  return (
    <FlexWrap
      direction={select("Direction", directionList, GeneralDirection.ROW)}
      wrap={select("Wrap", wrapList, GeneralWrap.NO_WRAP)}
      justify={select("Justify", justifyList, GeneralJustify.FLEX_START)}
      alignItems={select(
        "AlignItems",
        alignItemsList,
        GeneralAlignItems.STRETCH
      )}
      alignContent={select(
        "AlignContent",
        alignContentList,
        GeneralAlignContent.STRETCH
      )}
    >
      {list}
    </FlexWrap>
  );
};
