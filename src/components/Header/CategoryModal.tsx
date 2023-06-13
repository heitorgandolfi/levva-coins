import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useStore } from "effector-react";

import NewCategoryUseCase from "../../useCases/NewCategoryUseCase/NewCategoryUseCase";

import CategoryStore from "../../stores/CategoryStore/CategoryStore";

import { NewCategoryButton } from "./styles";

import { Modal } from "../Modal";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  FormError,
} from "../../styles/global";

interface FormProps {
  description: string;
}

const formSchema = yup
  .object({
    description: yup.string().required("O nome da categoria é obrigatório"),
  })
  .required();

export function CategoryModal() {
  const closeModalRef = useRef<HTMLButtonElement>(null);

  const [categoryNameAlreadyExistError, setCategoryNameAlreadyExistError] =
    useState<Boolean>(false);

  const { isLoading, hasError, errorMessage, categories } =
    useStore(CategoryStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  async function handleCreateCategory({ description }: FormProps) {
    const descriptionAlreadyExist = categories.find(
      (category) =>
        category.description.toLowerCase() === description.toLowerCase()
    );

    if (descriptionAlreadyExist) {
      setCategoryNameAlreadyExistError(true);
      return;
    }

    setCategoryNameAlreadyExistError(false);
    NewCategoryUseCase.execute({ description })
      .then(() => closeModalRef.current?.click())
      .finally(() => reset());
  }

  return (
    <Modal
      title="Nova Categoria"
      closeModalRef={closeModalRef}
      trigger={<NewCategoryButton>Nova Categoria</NewCategoryButton>}
    >
      <AuthForm onSubmit={handleSubmit(handleCreateCategory)}>
        <p>Cadastre uma categoria antes de criar uma transação.</p>

        <AuthInput placeholder="Descrição" {...register("description")} />
        {errors.description && (
          <FormError>{errors.description.message}</FormError>
        )}

        {/* {hasError && <FormError>{errorMessage}</FormError>} */}

        {categoryNameAlreadyExistError && (
          <FormError>Uma categoria com esse nome já existe</FormError>
        )}

        <AuthButton type="submit">
          {isLoading ? "Carregando..." : "Cadastrar"}
        </AuthButton>
      </AuthForm>
    </Modal>
  );
}
