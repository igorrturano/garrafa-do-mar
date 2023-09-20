// Standard Next Libs
import Link from "next/link";

// Components
import Layout from "@/components/Layout/index";
import BackgroundIcons from "@/components/BackgroundIcons/index";

// Styles
import utilStyles from '@/app/utils.module.css';
import styles from './page.module.css';

export default function Begin() {
    const headerProp: object = {
        logo: true
    };
    const footerProp: object = {
        mode: 2,
        home: '/angel-path/begin'
    };
    const mainProp: object = {
        className: utilStyles.container
    };

    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp}>
            <h1 className={utilStyles.title}>BEM VINDO ANJO!</h1>

            <svg xmlns="http://www.w3.org/2000/svg" width="293" height="236" className={styles.square}>
                <svg x={78} y={54} width="93" height="108" viewBox="0 0 93 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M93 54L-5.05713e-06 107.694L-3.63085e-07 0.306419L93 54Z" fill="#D9D9D9"/>
                </svg> 
            </svg>

            <button className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize1} ${utilStyles.fontLarge}`}>
                <Link href="./register">
                    Vamos começar!
                </Link>
            </button>

            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
        </Layout>
    );
}