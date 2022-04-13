/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import BurritoChannelListingCardImgNo from "./BurritoChannelListingCardImgNo";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function BurritoChannelListingCardImgNoCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(
        overrides,
        "BurritoChannelListingCardImgNoCollection"
      )}
    >
      {(item, index) => (
        <BurritoChannelListingCardImgNo
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BurritoChannelListingCardImgNo>
      )}
    </Collection>
  );
}
