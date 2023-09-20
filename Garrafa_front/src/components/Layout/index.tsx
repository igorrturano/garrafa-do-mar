// Components
import Header from '../Header/index';
import Main from '../Main/index';
import Footer from '../Footer/index';

// Styles
import styles from './styles.module.css';

/**
 * Layout - Componente "pai" que montar um corpo inicial padrão de qualquer página usando ambos `<Header/>`, `<Main/>` e `<Footer/>`.
 * @prop {React.ReactNode} children: Todo o conteúdo entre `<Layout>...</Layout>`.
 * @prop {string} className?: Classe CSS usada para estilizar o componente.
 * @prop {object} headerProp?: Objeto contendo todas as props que serão passadas para o componente '<Header/>'.
 * @prop {object} mainProp?: Objeto contendo todas as props que serão passadas para o componente '<Main/>'.
 * @prop {object} footerProp?: Objeto contendo todas as props que serão passadas para o componente '<Footer/>'.
 * @returns {React.ReactNode} Escopo inicial da página.
 */
export default function Layout({ children, className = '', headerProp = {}, mainProp = {}, footerProp = {} }: { children: React.ReactNode, className?: string, headerProp?: object, mainProp?: object, footerProp?: object }): React.ReactNode {
    return (
        <div className={`${styles.container} ${styles.index} ${className}`}>
            <Header {...headerProp}/>
            <Main {...mainProp}>
             {children}
            </Main>
            <Footer {...footerProp}/>
        </div>
    );
}
