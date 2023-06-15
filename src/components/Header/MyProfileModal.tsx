import { ReactNode, useRef, useState } from "react";
import { useStore } from "effector-react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { SignOutButton, UserAvatar } from "./styles";

import { Modal } from "../Modal";
import {
  AuthForm,
  AuthButton,
  FormError,
  AuthInput,
} from "../../styles/global";

import { router } from "../../Router";
import { LoginValues } from "../../domain/login";

import UpdateProfileUseCase from "../../useCases/UpdateProfileUseCase/UpdateProfileUseCase";
import ProfileStore from "../../stores/ProfileStore/ProfileStore";

interface FormProps {
  name: string;
}

const formSchema = yup
  .object({
    name: yup.string().required("O nome é obrigatório."),
  })
  .required();

const userAvatar: ReactNode = (
  <UserAvatar src={"https://github.com/heitorgandolfi.png"} alt="Ícone" />
);

export function MyProfileModal() {
  const closeModalRef = useRef<HTMLButtonElement>(null);

  const { isLoading, hasError, errorMessage } = useStore(ProfileStore);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(formSchema) });

  const [user, setUser] = useState<LoginValues | null>(() => {
    const storageUser = JSON.parse(
      window.localStorage.getItem("user") ?? "{}"
    ) as LoginValues;

    if (!storageUser) return null;

    setValue("name", storageUser.name);

    return storageUser;
  });

  async function handleUpdateProfile({ name }: FormProps) {
    if (user?.id)
      UpdateProfileUseCase.execute({
        id: user.id,
        name,
        email: user.email,
        password: user.email,
      }).then(() => closeModalRef.current?.click());

    setUser((oldUser) => ({ ...oldUser, name: name } as LoginValues));
  }

  function handleSignOut() {
    window.localStorage.removeItem("user");
    router.navigate("/login");
  }

  return (
    <Modal
      title="Meu perfil"
      closeModalRef={closeModalRef}
      trigger={userAvatar}
    >
      <AuthForm onSubmit={handleSubmit(handleUpdateProfile)}>
        <UserAvatar
          src={"https://github.com/heitorgandolfi.png"}
          alt="User Icon"
          variant="large"
        />
        <AuthInput
          {...register("name")}
          type="name"
          defaultValue={user?.name}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}

        <AuthInput type="email" placeholder={user?.email} disabled />

        {hasError && <FormError>{errorMessage}</FormError>}

        <AuthButton type="submit">
          {isLoading ? "Carregando..." : "Atualizar"}
        </AuthButton>
      </AuthForm>

      <SignOutButton type="button" onClick={handleSignOut}>
        Sair
      </SignOutButton>
    </Modal>
  );
}
