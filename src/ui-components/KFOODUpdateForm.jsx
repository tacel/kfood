/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { KFOOD } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function KFOODUpdateForm(props) {
  const {
    id: idProp,
    kFOOD,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    addr: "",
    cusn: "",
    dsc: "",
    menu: "",
    img: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [addr, setAddr] = React.useState(initialValues.addr);
  const [cusn, setCusn] = React.useState(initialValues.cusn);
  const [dsc, setDsc] = React.useState(initialValues.dsc);
  const [menu, setMenu] = React.useState(initialValues.menu);
  const [img, setImg] = React.useState(initialValues.img);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = kFOODRecord
      ? { ...initialValues, ...kFOODRecord }
      : initialValues;
    setName(cleanValues.name);
    setAddr(cleanValues.addr);
    setCusn(cleanValues.cusn);
    setDsc(cleanValues.dsc);
    setMenu(cleanValues.menu);
    setImg(cleanValues.img);
    setErrors({});
  };
  const [kFOODRecord, setKFOODRecord] = React.useState(kFOOD);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(KFOOD, idProp) : kFOOD;
      setKFOODRecord(record);
    };
    queryData();
  }, [idProp, kFOOD]);
  React.useEffect(resetStateValues, [kFOODRecord]);
  const validations = {
    name: [],
    addr: [],
    cusn: [],
    dsc: [],
    menu: [],
    img: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          addr,
          cusn,
          dsc,
          menu,
          img,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            KFOOD.copyOf(kFOODRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "KFOODUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              addr,
              cusn,
              dsc,
              menu,
              img,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Addr"
        isRequired={false}
        isReadOnly={false}
        value={addr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              addr: value,
              cusn,
              dsc,
              menu,
              img,
            };
            const result = onChange(modelFields);
            value = result?.addr ?? value;
          }
          if (errors.addr?.hasError) {
            runValidationTasks("addr", value);
          }
          setAddr(value);
        }}
        onBlur={() => runValidationTasks("addr", addr)}
        errorMessage={errors.addr?.errorMessage}
        hasError={errors.addr?.hasError}
        {...getOverrideProps(overrides, "addr")}
      ></TextField>
      <TextField
        label="Cusn"
        isRequired={false}
        isReadOnly={false}
        value={cusn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              addr,
              cusn: value,
              dsc,
              menu,
              img,
            };
            const result = onChange(modelFields);
            value = result?.cusn ?? value;
          }
          if (errors.cusn?.hasError) {
            runValidationTasks("cusn", value);
          }
          setCusn(value);
        }}
        onBlur={() => runValidationTasks("cusn", cusn)}
        errorMessage={errors.cusn?.errorMessage}
        hasError={errors.cusn?.hasError}
        {...getOverrideProps(overrides, "cusn")}
      ></TextField>
      <TextField
        label="Dsc"
        isRequired={false}
        isReadOnly={false}
        value={dsc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              addr,
              cusn,
              dsc: value,
              menu,
              img,
            };
            const result = onChange(modelFields);
            value = result?.dsc ?? value;
          }
          if (errors.dsc?.hasError) {
            runValidationTasks("dsc", value);
          }
          setDsc(value);
        }}
        onBlur={() => runValidationTasks("dsc", dsc)}
        errorMessage={errors.dsc?.errorMessage}
        hasError={errors.dsc?.hasError}
        {...getOverrideProps(overrides, "dsc")}
      ></TextField>
      <TextField
        label="Menu"
        isRequired={false}
        isReadOnly={false}
        value={menu}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              addr,
              cusn,
              dsc,
              menu: value,
              img,
            };
            const result = onChange(modelFields);
            value = result?.menu ?? value;
          }
          if (errors.menu?.hasError) {
            runValidationTasks("menu", value);
          }
          setMenu(value);
        }}
        onBlur={() => runValidationTasks("menu", menu)}
        errorMessage={errors.menu?.errorMessage}
        hasError={errors.menu?.hasError}
        {...getOverrideProps(overrides, "menu")}
      ></TextField>
      <TextField
        label="Img"
        isRequired={false}
        isReadOnly={false}
        value={img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              addr,
              cusn,
              dsc,
              menu,
              img: value,
            };
            const result = onChange(modelFields);
            value = result?.img ?? value;
          }
          if (errors.img?.hasError) {
            runValidationTasks("img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("img", img)}
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        {...getOverrideProps(overrides, "img")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || kFOOD)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || kFOOD) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
