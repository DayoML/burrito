/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function BurritoShowUpload(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="708px"
      height="808px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "BurritoShowUpload")}
    >
      <Flex
        gap="73px"
        position="absolute"
        top="0%"
        bottom="9.9%"
        left="calc(50% - 344.5px - 9.5px)"
        direction="column"
        width="689px"
        height="728px"
        overflow="hidden"
        padding="26px 14px 26px 14px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Show Upload")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="627px"
          height="80px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Show Name"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldpmk")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="627px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Show Description"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldtlf")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="627px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Show Owner"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldbmv")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          height="75px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Show Logistics"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldcvj")}
        ></TextField>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Upload"
          {...getOverrideProps(overrides, "Upload")}
        ></Text>
      </Flex>
    </View>
  );
}
