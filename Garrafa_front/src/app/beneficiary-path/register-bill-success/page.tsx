'use client'
import styles from './page.module.css';
import Layout from '@/components/Layout';
import utils from '@/app/utils.module.css'
import BackgroundIcons from '@/components/BackgroundIcons';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function registerBillSuccess() {
    const router = useRouter();
    const headerProp: object = {
        logo: true
    };
    const footerProp: object = {
        mode: 2
    };
    const mainProp: object = {
        className: styles.container
    }
    

    const goToCourses = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push("./transform");
    }
    return (

        <Layout headerProp={headerProp} footerProp={footerProp} mainProp={mainProp}>
            <h1 className={`${styles.marginTitle} ${utils.title}`}>CONTA CADASTRADA!</h1>
            <Image
                alt="check conta cadastrada" 
                src="/images/icons/checkBlue.svg"
                width={100}
                height={100}
                className={styles.marginImage}

            />
            <button onClick={goToCourses} type="button" className={`${utils.buttonContainer} ${styles.buttonContent}`}>
                Iniciar transformação
            </button>
            <BackgroundIcons bubbleClass={styles.bubbleSize} lineClass={styles.lineSize} />
        </Layout>
       
    );
}