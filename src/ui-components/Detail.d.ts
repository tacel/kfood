/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { KFOOD } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailOverridesProps = {
    Detail?: PrimitiveOverrideProps<ViewProps>;
    cont?: PrimitiveOverrideProps<FlexProps>;
    nameconta?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    "image 3"?: PrimitiveOverrideProps<ImageProps>;
    descconta?: PrimitiveOverrideProps<FlexProps>;
    korean?: PrimitiveOverrideProps<TextProps>;
    cuision?: PrimitiveOverrideProps<TextProps>;
    menu?: PrimitiveOverrideProps<TextProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    desc?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DetailProps = React.PropsWithChildren<Partial<ViewProps> & {
    kFOOD?: KFOOD;
} & {
    overrides?: DetailOverridesProps | undefined | null;
}>;
export default function Detail(props: DetailProps): React.ReactElement;
