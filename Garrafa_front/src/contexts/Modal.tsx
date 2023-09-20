"use client";

import { Dispatch, SetStateAction, useState, createContext } from "react";

export interface ManagedUIProps {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    modalLayout: React.ReactNode;
    setModalLayout: Dispatch<SetStateAction<React.ReactNode>>;
}

export interface ManagedUIProviderProps {
    children: React.ReactNode
}

export const ManagedUI = createContext({} as ManagedUIProps);

export const ManagedUIProvider = ({ children }: ManagedUIProviderProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalLayout, setModalLayout] = useState<React.ReactNode>()

    return (
        <ManagedUI.Provider
            value={{
                openModal,
                setOpenModal,
                modalLayout,
                setModalLayout
            }}>
            {children}
        </ManagedUI.Provider>
    )
}