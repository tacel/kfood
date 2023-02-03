/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DesktopHDProps } from "./DesktopHD";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileOverridesProps = {
    Profile?: PrimitiveOverrideProps<ViewProps>;
    "Desktop HD"?: DesktopHDProps;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
