"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";

const AuctionForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid, isDirty, errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-3">
      <div className="mb-3 block px-2">
        <TextInput
          {...register("make", { required: "make is required" })}
          placeholder="Make"
          color={errors?.make && "failure"}
          helperText={errors.make?.message as string}
        />
      </div>
      <div className="mb-3 block px-2">
        <TextInput
          {...register("model", { required: "Model is required" })}
          placeholder="Model"
          color={errors?.model && "failure"}
          helperText={errors.model?.message as string}
        />
      </div>
      <div className="flex justify-between px-2 mb-3">
        <Button outline color="gray">
          Cancel
        </Button>
        <Button
          isProcessing={isSubmitting}
          disabled={!isValid}
          type="submit"
          outline
          color="success"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
export default AuctionForm;
