/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { KFOOD } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type KFOODUpdateFormInputValues = {
    name?: string;
    addr?: string;
    cusn?: string;
    dsc?: string;
    menu?: string;
    img?: string;
};
export declare type KFOODUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    addr?: ValidationFunction<string>;
    cusn?: ValidationFunction<string>;
    dsc?: ValidationFunction<string>;
    menu?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KFOODUpdateFormOverridesProps = {
    KFOODUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    addr?: PrimitiveOverrideProps<TextFieldProps>;
    cusn?: PrimitiveOverrideProps<TextFieldProps>;
    dsc?: PrimitiveOverrideProps<TextFieldProps>;
    menu?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KFOODUpdateFormProps = React.PropsWithChildren<{
    overrides?: KFOODUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kFOOD?: KFOOD;
    onSubmit?: (fields: KFOODUpdateFormInputValues) => KFOODUpdateFormInputValues;
    onSuccess?: (fields: KFOODUpdateFormInputValues) => void;
    onError?: (fields: KFOODUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KFOODUpdateFormInputValues) => KFOODUpdateFormInputValues;
    onValidate?: KFOODUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KFOODUpdateForm(props: KFOODUpdateFormProps): React.ReactElement;
