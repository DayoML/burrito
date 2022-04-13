/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField, View } from "@aws-amplify/ui-react";
export default function BurritoChannelCreate(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="710px"
      height="951px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "BurritoChannelCreate")}
    >
      <Flex
        gap="16px"
        position="absolute"
        top="17px"
        left="14px"
        direction="column"
        overflow="hidden"
        padding="21px 16px 21px 16px"
        {...getOverrideProps(overrides, "Channel Create")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          height="76px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Channel Name"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ChannelName")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          height="76px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Channel Description"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ChannelDescription")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Channel Owner"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ChannelOwner")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          height="222px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Channel Status"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ChannelStatus")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          height="222px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Channel Details"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ChannelDetails")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="639px"
          height="79px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Channel Livestream Link"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "ChannelStreamLink")}
        ></TextField>
      </Flex>
    </View>
  );
}
