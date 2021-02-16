import { IconType } from "consts/IconConsts";
import styled from "styled-components";
import IconAtoms from "../atoms/IconAtoms";
import {
  GeneralFlex,
  GeneralDirection,
  GeneralJustify,
  GeneralAlignItems,
} from "../../styles/flex/GeneralFlexStyle";
import GeneralText, {
  GeneralFontSize,
} from "../../styles/typography/GeneralTextStyle";

const FooterButtonContainer = styled.div`
  width: 25%;
  padding: 20px 0 20px;
  cursor: pointer;
`;

export type Props = {
  iconType: IconType;
  text: string;
  onClick: () => void;
};

const FooterButtonMolecules = ({ iconType, text, onClick }: Props) => {
  return (
    <>
      <FooterButtonContainer onClick={onClick}>
        <GeneralFlex
          direction={GeneralDirection.COLUMN}
          justify={GeneralJustify.CENTER}
          alignItems={GeneralAlignItems.CENTER}
        >
          <IconAtoms iconType={iconType} size={20} />
          <GeneralText fontSize={GeneralFontSize.SIZE_12}>{text}</GeneralText>
        </GeneralFlex>
      </FooterButtonContainer>
    </>
  );
};

export default FooterButtonMolecules;
