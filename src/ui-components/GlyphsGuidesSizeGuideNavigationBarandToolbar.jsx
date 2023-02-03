/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function GlyphsGuidesSizeGuideNavigationBarandToolbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="28px"
      height="28px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(
        overrides,
        "GlyphsGuidesSizeGuideNavigationBarandToolbar"
      )}
      {...rest}
    >
      <View
        width="28px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="0px SOLID rgba(151,151,151,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,59,48,1)"
        opacity="0.30000001192092896"
        {...getOverrideProps(overrides, "Max Width or Height @2x: 28pt x 28pt")}
      ></View>
      <Icon
        width="28px"
        height="28px"
        viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
        paths={[
          {
            d: "M28 0L0 0L0 28L28 28L28 0ZM26.5 1.5L1.5 1.5L1.5 26.5L26.5 26.5L26.5 1.5Z",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="28.57%"
        right="-28.57%"
        {...getOverrideProps(overrides, "Target Size @2x: 25pt x 25pt")}
      >
        <View
          width="28px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(218,218,218,1)"
          {...getOverrideProps(overrides, "Rectangle0300")}
        ></View>
        <View
          width="25px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="5.36%"
          bottom="5.36%"
          left="5.36%"
          right="5.36%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(218,218,218,1)"
          {...getOverrideProps(overrides, "Rectangle0301")}
        ></View>
      </Icon>
    </View>
  );
}
