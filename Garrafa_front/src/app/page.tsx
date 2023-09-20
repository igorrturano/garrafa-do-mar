"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useContext, useEffect, useState } from 'react'
import { ManagedUI } from '@/contexts/Modal'
import { ModalBox, ModalContainer } from '@/components/Header/header.style'

export default function Home() {
  const { openModal, setOpenModal, modalLayout } = useContext(ManagedUI)


  return (
    <>
      {openModal &&
        <ModalContainer>
          {modalLayout}
        </ModalContainer>
      }

    </>
  )
}
