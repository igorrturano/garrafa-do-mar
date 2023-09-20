'use client'


// Components
import Layout from "@/components/Layout/index";
import BackgroundIcons from "@/components/BackgroundIcons/index";

// Styles
import utilStyles from '@/app/utils.module.css';
import styles from './page.module.css';
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function HumanRegister() {
    const router = useRouter();
    const headerProp: object = {
        logo: true
    };
    const footerProp: object = {
        mode: 1,
        home: '/angel-path/begin'
    };
    const mainProp: object = {
        className: utilStyles.container
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/begin');
    }
    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp}>
            <h1 className={`${utilStyles.title} ${styles.title}`}>Cadastro detalhado</h1>
            <form className={utilStyles.forms} onSubmit={onFormSubmit}>
                <ul>
                    <li>
                        <label htmlFor="mail">Email</label>
                        <br/>
                        <input type="email" id="mail" name="user_mail" required/>
                    </li>
                    <li>
                        <label htmlFor="whoAreYou">Quem é você?</label>
                        <br/>
                        <textarea id="whoAreYou" name="user_whoAreYou"/>
                    </li>
                    <li>
                        <label htmlFor="tag">Tags</label>
                        <br/>
                        <input type="text" id="tag" name="user_tag"/>
                    </li>
                    <li>
                        <button type="submit" className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize2} ${utilStyles.buttonFont2} ${styles.submitPlus}`}>Salvar</button>
                    </li>
                </ul>
            </form>
            <p className={styles.help}>Precisa de ajuda?</p>
            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
        </Layout>
    );
}