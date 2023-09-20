'use client'
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout/index";
import BackgroundIcons from "@/components/BackgroundIcons/index";
import styles from './page.module.css';
import utilStyles from '@/app/utils.module.css';
import Image from "next/image";
import { nomo } from 'nomo-plugin-kit/dist/nomo_api'
import { useEffect } from "react";

export default function Welcome() {
    const router = useRouter();

    const headerProp: object = {
        logo: true
    };
    const footerProp: object = {
        mode: 1
    };
    const mainProp: object = {
        className: `${utilStyles.container}`
    };

    const goAngelPath = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("../angel-path/register");
    }

    const goHumanPath = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("../beneficiary-path/register");
    }
    useEffect(() => {
    nomo.enableMobileConsoleDebugging()
     nomo.authHttp({
        url:`https://apigarrafa.atitude247.com.br/auth`,
        method: "POST"
    })
       .then((response) => {
         console.log(response);
      })
      .catch((err) => {
        console.error("ops! An error has occurred : " + JSON.stringify(err));
      });
  }, []);
    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp}>
            <Image
                alt='main-logo'
                src='/images/logo.svg'
                width={248}
                height={102}
                priority
                className={styles.mainLogo}
            />
            <button onClick={goAngelPath} className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize1} ${utilStyles.fontLarge} ${styles.button}`}>QUERO AJUDAR</button>
            <button onClick={goHumanPath} className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize1} ${utilStyles.fontLarge}`}>PRECISO DE AJUDA</button>
            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
        </Layout>
    );
}

