// Styles
import styles from './styles.module.css';

/**
 * Background Icons - Insere as decorações flutuantes (bolhas e linha curva) dentro da sua página.
 * @prop {string | null} bubbleClass?: Classe de CSS usada para definir tamanho e posição das bolhas. Se não inserir esse parâmetro, elas não serão inseridas.
 * @prop {string | null} lineClass?: Classe de CSS usada para definir tamanho e posição da linha curva. Se não inserir esse parâmetro, elas não serão inseridas.
 * @returns {React.ReactNode} Elementos 'div' de background (cada icone equivale a uma div única).
 */
export default function BackgroundIcons({ bubbleClass = null, lineClass = null }: { bubbleClass?: string | null, lineClass?: string | null}): React.ReactNode {
    const bubbleIcon: React.ReactNode = (
        <>{
            bubbleClass && (
                <>
                    <div className={` ${styles.container} ${styles.bubbleIcon} ${bubbleClass}`}></div>
                </>
            )
        }</>
    );
    const lineIcon: React.ReactNode = (
        <>{
            lineClass && (
                <>
                    <div className={`${styles.container} ${styles.lineIcon} ${lineClass}`}></div>
                </>
            )
        }</>
    );
    return (
        <>
            {bubbleIcon}
            {lineIcon}  
        </>
    );
}