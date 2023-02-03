/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RocketOverridesProps = {
    Rocket?: PrimitiveOverrideProps<ViewProps>;
    "New Project (63) 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type RocketProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RocketOverridesProps | undefined | null;
}>;
export default function Rocket(props: RocketProps): React.ReactElement;
