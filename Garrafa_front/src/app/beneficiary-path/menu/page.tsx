'use client'

import { useRouter } from 'next/navigation';

//Components
import Layout from '@/components/Layout/index';
import BackgroundIcons from '@/components/BackgroundIcons/index';

// Styles
import styles from './page.module.css';
import utilStyles from '@/app/utils.module.css';

export default function Menu() {
    const router = useRouter();
    const   headerProp: object = {
        logo: true
    };
    const   footerProp: object = {
        mode: 2,
        home: '/beneficiary-path/begin'
    };
    const   mainProp: object = {
        className: utilStyles.container
    };

    const goToRegisterBill = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push("./register-bill");
    }

    const goToCourses = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push("./transform");
    }

    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp}>
            <h1 className={`${utilStyles.title} ${styles.title}`} >Selecione seu caminho</h1>
            <button onClick={goToRegisterBill} className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize1} ${utilStyles.fontLarge}`}>Cadastrar conta
            </button>
            <button onClick={goToCourses} className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize1} ${utilStyles.fontMedium} ${styles.buttonPlus}`}>
            Iniciar transformação
            </button>
            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
        </Layout>
    );
}