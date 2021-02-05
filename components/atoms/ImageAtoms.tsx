import React, { FC } from "react";
import styled from "styled-components";

export type Props = {
  width: number | string;
};

type ImageProps = Props & React.ImgHTMLAttributes<HTMLImageElement>;

const ImageRoot = styled("img")<Props>`
  width: ${(props) => props.width};
`;

export const ImageAtoms: FC<ImageProps> = (props) => {
  return <ImageRoot {...props}>{props.children}</ImageRoot>;
};
