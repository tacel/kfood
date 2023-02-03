/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GlyphsGuidesSizeGuideNavigationBarandToolbarOverridesProps = {
    GlyphsGuidesSizeGuideNavigationBarandToolbar?: PrimitiveOverrideProps<ViewProps>;
    "Max Width or Height @2x: 28pt x 28pt"?: PrimitiveOverrideProps<ViewProps>;
    "Target Size @2x: 25pt x 25pt"?: PrimitiveOverrideProps<IconProps>;
    Rectangle0300?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0301?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type GlyphsGuidesSizeGuideNavigationBarandToolbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GlyphsGuidesSizeGuideNavigationBarandToolbarOverridesProps | undefined | null;
}>;
export default function GlyphsGuidesSizeGuideNavigationBarandToolbar(props: GlyphsGuidesSizeGuideNavigationBarandToolbarProps): React.ReactElement;
