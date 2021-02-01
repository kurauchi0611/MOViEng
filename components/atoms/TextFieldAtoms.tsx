import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Label = styled.p`
  margin: 0;
  margin-right: 8px;
  font-size: 16px;
`;

const MandatoryContainer = styled.p`
  margin: 0;
  background: #eb5757;
  color: #ffffff;
  font-size: 12px;
  padding: 1px 8px 1px 8px;
  border-radius: 2px;
`;

const LabelWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
`;

export type Props = {
  placeholder: string;
  label?: string;
  value: string;
  width: number;
  isMandatory?: boolean;
  changeValue: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const TextFieldAtoms = ({
  placeholder,
  label = undefined,
  width,
  value,
  changeValue,
  isMandatory = false,
}: Props) => {
  return (
    <>
      <LabelWrap>
        {label !== undefined && <Label>{label}</Label>}
        {isMandatory && <MandatoryContainer>必須</MandatoryContainer>}
      </LabelWrap>

      <TextField
        style={{ width }}
        placeholder={placeholder}
        variant="outlined"
        value={value}
        onChange={(event) => changeValue(event)}
      />
    </>
  );
};

export default TextFieldAtoms;
