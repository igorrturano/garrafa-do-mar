// Styles
import styles from './styles.module.css';

/**
 * Main - Monta um formato de conteudo de página central que se adequa e se encaixa com o Cabeçalho e o Rodapé.
 * @prop {React.ReactNode} children: Todo o conteúdo entre `<Main>...</Main>`.
 * @prop {string} className?: Class CSS usada para estilizar o componente.
 * @returns {React.ReactNode} Componente central formatado.
 */
export default function Main({ children, className = '' }: { children: React.ReactNode, className?: String }): React.ReactNode {
    const mainStyle: string = `${styles.container} ${styles.effect}`
    return (
        <main className={`${mainStyle} ${className}`}>
            {children}
        </main>
    )
}