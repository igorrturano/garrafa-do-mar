"use client";

import Image from "next/image";
import {
  Container,
  HeaderDetails,
  LoginButton,
  ModalBox,
  ModalCenter,
  ModalClose,
  ModalContainer,
  ModalDivider,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./header.style";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ManagedUI } from "@/contexts/Modal";
import QRCode from "react-qr-code";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { openModal, setOpenModal, setModalLayout } = useContext(ManagedUI);
  const { qr, message, user } = useAuth();

  const handleClose = () => {
    setOpenModal(false);
    setModalLayout(null);
  };

  const SigninModalLayout = useMemo(() => {
    return (
      <ModalBox>
        <ModalHeader>
          <ModalTitle>Acessar com Nomo APP</ModalTitle>
          <ModalClose onClick={handleClose}>X</ModalClose>
        </ModalHeader>
        <ModalDivider></ModalDivider>
        <ModalCenter>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "80%", width: "80%" }}
            value={qr || ""}
            viewBox={`0 0 256 256`}
          />
        </ModalCenter>
        <ModalFooter>{message}</ModalFooter>
      </ModalBox>
    );
  }, [message, qr]);

  const handleAccess = () => {
    setModalLayout(SigninModalLayout);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    setModalLayout(SigninModalLayout);
  }, [qr, message]);

  return (
    <Container>
      <HeaderDetails>
        <Image src="/atitudebranco_.svg" alt="Logo" width={200} height={200} />
        <LoginButton onClick={handleAccess}>Acessar</LoginButton>
      </HeaderDetails>
    </Container>
  );
}
