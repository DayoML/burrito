/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function BurritoChannelListingCardImgNo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="643px"
      height="441px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "BurritoChannelListingCardImgNo")}
    >
      <Flex
        gap="28px"
        position="absolute"
        top="10px"
        left="12px"
        direction="column"
        width="608px"
        height="407px"
        overflow="hidden"
        padding="37px 47px 37px 47px"
        {...getOverrideProps(overrides, "Channel Listing Card")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="541px"
          height="45px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Channel Name"
          {...getOverrideProps(overrides, "Channel Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Channel Status"
          {...getOverrideProps(overrides, "Channel Status")}
        ></Text>
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
          width="541px"
          height="102px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Channel Description"
          {...getOverrideProps(overrides, "Channel Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="541px"
          height="33px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Channel Details"
          {...getOverrideProps(overrides, "Channel Details")}
        ></Text>
        <Icon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[
            {
              d: "M9 5L11 5L11 7L9 7L9 5ZM9 9L11 9L11 15L9 15L9 9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z",
              fill: "rgba(0,34,102,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ]}
          type="info"
          fontSize="24px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        ></Icon>
      </Flex>
    </View>
  );
}
