// Standard Next Libs
import Image from 'next/image';

// Styles
import styles from './styles.module.css';

/**
 * Header - Monta um cabeçalho com (ou sem) a logo em sua ponta esquerda e um icone de menu na ponta direita.
 * @prop {string} className?: Classe CSS usada para personalizar o componente.
 * @prop {boolean} logo?: define se a logo estará presente no cabeçalho (por padrão o valor de logo é `true`).
 * @returns {React.ReactNode} Cabeçalho formatado.
 */
export default function Header({ className = '', logo = true }: { className?: string, logo?: boolean }): React.ReactNode {
    const   headerStyle: string = `${styles.container} ${styles.effect} ${styles.content}`;
    let     logoElement: React.ReactNode;

    if (logo) {
        logoElement = (
            <Image
                alt="logo-icon"
                src="/images/logo.svg"
                width={88}
                height={36}
                className={styles.logoIcon}
            />
        );
    }
    
    return (
        <header className={`${headerStyle} ${className}`}>
            {logoElement}
            <Image
                alt="menu-icon"
                src="/images/header/menu.svg"
                width={40}
                height={22}
                className={styles.menuIcon}
            />
        </header>
    );
}