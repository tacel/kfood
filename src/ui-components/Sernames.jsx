/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import GlyphsGuidesSizeGuideNavigationBarandToolbar from "./GlyphsGuidesSizeGuideNavigationBarandToolbar";
export default function Sernames(props) {
  const { kFOOD, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="39px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(254,209,52,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Sernames")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="131px"
        height="38px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="92px"
        border="1px SOLID rgba(192,188,188,1)"
        padding="0px 6px 0px 6px"
        {...getOverrideProps(overrides, "srvncontent")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="179px"
          height="85px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={kFOOD?.name}
          {...getOverrideProps(overrides, "srvn")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="19px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="22.99431800842285px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="171px"
          height="38px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="learn more"
          {...getOverrideProps(overrides, "learn more")}
        ></Text>
      </Flex>
      <GlyphsGuidesSizeGuideNavigationBarandToolbar
        width="25px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "btn-primary copy")}
      ></GlyphsGuidesSizeGuideNavigationBarandToolbar>
    </View>
  );
}
