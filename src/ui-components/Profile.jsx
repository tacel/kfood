/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import DesktopHD from "./DesktopHD";
import { View } from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1348px"
      height="953px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Profile")}
      {...rest}
    >
      <DesktopHD
        width="1324px"
        height="692px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-26px"
        left="-48px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Desktop HD")}
      ></DesktopHD>
    </View>
  );
}
