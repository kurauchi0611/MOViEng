import styled from "styled-components";

export enum GeneralDirection {
  ROW = "row",
  ROW_REVERSE = "row-reverse",
  COLUMN = "column",
  COLUMN_REVERSE = "column-reverse",
}

export enum GeneralWrap {
  NO_WRAP = "nowrap",
  WRAP = "wrap",
  WRAP_REVERSE = "wrap-reverse",
}

export enum GeneralJustify {
  FLEX_START = "flex-start",
  CENTER = "center",
  FLEX_END = "flex-end",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
}

export enum GeneralAlignItems {
  STRETCH = "stretch",
  FLEX_START = "flex-start",
  CENTER = "center",
  FLEX_END = "flex-end",
  BASELINE = "baseline",
}

export enum GeneralAlignContent {
  STRETCH = "stretch",
  FLEX_START = "flex-start",
  CENTER = "center",
  FLEX_END = "flex-end",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
}

export type GeneralFlexStyleProps = {
  direction?: GeneralDirection;
  wrap?: GeneralWrap;
  justify?: GeneralJustify;
  alignItems?: GeneralAlignItems;
  alignContent?: GeneralAlignContent;
};

export const GeneralFlex = styled.div<GeneralFlexStyleProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || GeneralDirection.COLUMN};
  flex-wrap: ${(props) => props.wrap || GeneralWrap.NO_WRAP};
  justify-content: ${(props) => props.justify || GeneralJustify.FLEX_START};
  align-items: ${(props) => props.alignItems || GeneralAlignItems.STRETCH};
  align-content: ${(props) =>
    props.alignContent || GeneralAlignContent.STRETCH};
`;
