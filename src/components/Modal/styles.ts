import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

// A partir da possibilidade de setar function no styled, consigo acessar as propriedades próprias do componente "dialog" do Radix-UI.
export const Overlay = styled(Dialog.Overlay)`
  position: fixed;

  width: 100vw;
  height: 100vh;
  inset: 0;

  background: #00000075;
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 32rem;
  width: 95%;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background: ${(props) => props.theme["gray-600"]};
`;

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;

  background: transparent;
  color: ${(props) => props.theme["gray-400"]};
  border: 0;
`;
