// Standard Next Libs
import Image from 'next/image';
import Link from 'next/link';

// Styles
import styles from './styles.module.css';

/**
 * Footer - Insere um rodapé pré configurado na página.
 * @prop {number} mode?: Modo de vizualização do rodapé (existem dois modos [1 | 2]) por padrão ele é 2.
 * @prop {string} className?: Classe CSS usada para personalizar o componente.
 * @returns {React.ReactNode} Rodapé formatado.
 */
export default function Footer({ className = '', mode = 2, home = '/welcome' }: { className?: string, mode?: number, home?: string }): React.ReactNode {
    const   footerBg: string = 'footerBg' + mode;
    const   footerStyles: string = `${styles.container} ${styles.content} ${styles.effect}`;
    let     footerIcons: React.ReactNode;

    if (mode === 2) {
        footerIcons = (
            <>
                <Link href={home}>
                    <Image
                        alt='home-button'
                        src='/images/footer/homeButton.svg'
                        width={48}
                        height={54}
                        className={styles.homeButton}
                    />
                </Link>
                <Link href="/my-courses">
                    <Image
                        alt='courses-button'
                        src='/images/footer/coursesButton.svg'
                        width={56}
                        height={57}
                        className={styles.coursesButton}
                    />
                </Link>
                <Link href="/tips">
                    <Image
                        alt='tips-button'
                        src='/images/footer/tipsButton.svg'
                        width={45}
                        height={58}
                        className={styles.tipsButton}
                    />  
                </Link>
                <Image
                    alt='extracts-button'
                    src='/images/footer/extractsButton.svg'
                    width={55}
                    height={60}
                    className={styles.extractsButton}
                />
            </>
        );
    }

    return (
        <footer className={`${footerStyles} ${styles[footerBg]} ${className}`}>
            {footerIcons}
        </footer>
    );
}