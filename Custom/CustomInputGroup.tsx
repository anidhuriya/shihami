import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

interface ICustomInputFormProps {
  id: string;
  isInvalid?: boolean;
  rest: any;
  onChange: Function;
  errorMsg?: string;
  label: string;
  placeholder: string;
}

export const CustomInputForm: React.FC<ICustomInputFormProps> = ({
  id,
  isInvalid,
  onChange,
  errorMsg,
  label,
  placeholder,
  rest,
}) => {
  return (
    <FormControl id={id} isInvalid={isInvalid} width="35%">
      <FormLabel style={{ fontFamily: "lato" }} color="#FFFFFF">
        {label}
      </FormLabel>
      <Input
        type="text"
        {...rest}
        placeholder={placeholder}
        onChange={onChange}
        color="#FFFFFF"
        _focusVisible={{ borderColor: "#A7A7A7" }}
      />
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
};
