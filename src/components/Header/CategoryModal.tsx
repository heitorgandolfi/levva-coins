import { useRef } from "react";

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

  const { isLoading, hasError, errorMessage } = useStore(CategoryStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  async function handleCreateCategory({ description }: FormProps) {
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

        {hasError && <FormError>{errorMessage}</FormError>}

        <AuthButton type="submit">
          {isLoading ? "Carregando..." : "Cadastrar"}
        </AuthButton>
      </AuthForm>
    </Modal>
  );
}
