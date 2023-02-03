/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Restlist(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="559px"
      height="291px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Restlist")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="24.4%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(174,179,183,1)"
        padding="35px 35px 35px 35px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MyComponent")}
      >
        <Flex {...getOverrideProps(overrides, "Heading")}></Flex>
        <Flex {...getOverrideProps(overrides, "Rating")}></Flex>
        <Flex {...getOverrideProps(overrides, "Button")}></Flex>
      </Flex>
    </View>
  );
}
