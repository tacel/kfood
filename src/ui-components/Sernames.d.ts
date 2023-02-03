/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { KFOOD } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { GlyphsGuidesSizeGuideNavigationBarandToolbarProps } from "./GlyphsGuidesSizeGuideNavigationBarandToolbar";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SernamesOverridesProps = {
    Sernames?: PrimitiveOverrideProps<ViewProps>;
    srvncontent?: PrimitiveOverrideProps<FlexProps>;
    srvn?: PrimitiveOverrideProps<TextProps>;
    "learn more"?: PrimitiveOverrideProps<TextProps>;
    "btn-primary copy"?: GlyphsGuidesSizeGuideNavigationBarandToolbarProps;
} & EscapeHatchProps;
export declare type SernamesProps = React.PropsWithChildren<Partial<ViewProps> & {
    kFOOD?: KFOOD;
} & {
    overrides?: SernamesOverridesProps | undefined | null;
}>;
export default function Sernames(props: SernamesProps): React.ReactElement;
