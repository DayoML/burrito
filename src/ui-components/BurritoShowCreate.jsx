/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function BurritoShowCreate(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="707px"
      height="808px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "BurritoShowCreate")}
    >
      <Flex
        gap="73px"
        position="absolute"
        top="0%"
        bottom="-0.5%"
        left="calc(50% - 333.5px - 20px)"
        direction="column"
        overflow="hidden"
        padding="26px 14px 26px 14px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Show Create")}
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
          {...getOverrideProps(overrides, "ShowName")}
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
          {...getOverrideProps(overrides, "ShowDescription")}
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
          {...getOverrideProps(overrides, "ShowOwner")}
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
          label="Show Status"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ShowStatus")}
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
          {...getOverrideProps(overrides, "ShowLogistics")}
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
          children="Create"
          {...getOverrideProps(overrides, "Create")}
        ></Text>
      </Flex>
    </View>
  );
}
