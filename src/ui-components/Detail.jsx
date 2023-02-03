/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Detail(props) {
  const { kFOOD, overrides, ...rest } = props;
  return (
    <View
      width="526px"
      height="668px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Detail")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="32.49%"
        bottom="46.71%"
        left="1.14%"
        right="-1.14%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "cont")}
      >
        <Flex
          gap="-89px"
          direction="row"
          width="526px"
          height="54px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 1px 0px 1px"
          {...getOverrideProps(overrides, "nameconta")}
        >
          <Text
            fontFamily="Inter"
            fontSize="49px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="59.3011360168457px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="523px"
            height="52px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={kFOOD?.name}
            {...getOverrideProps(overrides, "name")}
          ></Text>
          <Image
            width="33px"
            height="29px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image 3")}
          ></Image>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="479px"
          height="85px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(151,151,151,1)"
          padding="0px 0px 31px 0px"
          {...getOverrideProps(overrides, "descconta")}
        >
          <Text
            fontFamily="Inter"
            fontSize="38px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            fontStyle="italic"
            lineHeight="45.9886360168457px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="173px"
            height="36px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="korean&#xA;"
            {...getOverrideProps(overrides, "korean")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="38px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            fontStyle="italic"
            lineHeight="45.9886360168457px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="203px"
            height="29px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={kFOOD?.cusn}
            {...getOverrideProps(overrides, "cuision")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="38px"
        fontWeight="300"
        fontStyle="italic"
        lineHeight="45.9886360168457px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="525px"
        height="180px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="488px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="menu"
        {...getOverrideProps(overrides, "menu")}
      ></Text>
      <Image
        width="99.81%"
        height="32.49%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="67.51%"
        left="0.19%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={kFOOD?.img}
        {...getOverrideProps(overrides, "image 2")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="36.30681610107422px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="501px"
        height="132px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="356px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={kFOOD?.dsc}
        {...getOverrideProps(overrides, "desc")}
      ></Text>
    </View>
  );
}
