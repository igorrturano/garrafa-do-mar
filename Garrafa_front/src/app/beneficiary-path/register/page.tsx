'use client'
// Standard Next Libs
import Link from "next/link";

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
        home: '/beneficiary-path/begin'
    };
    const mainProp: object = {
        className: utilStyles.container
    };
    
    const states: string[] = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'
    ]

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('menu');
    }


    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp}>
            <h1 className={`${utilStyles.title} ${styles.title}`}>Cadastro detalhado</h1>
            <form className={utilStyles.forms} onSubmit={onFormSubmit} onInvalid={(e) => console.log(e)}>
                <ul>
                    <li>
                        <label htmlFor="name">Nome</label>
                        <br/>
                        <input type="text" id="name" name="user_name" required/>
                    </li>
                    <li>
                        <label htmlFor="yo">Idade</label>
                        <br/>
                        <input type="text" id="yo" name="user_yo" required/>
                    </li>
                        <div className={styles.container}>
                            <div>
                                <li>
                                    <label htmlFor="sex" >Sexo</label>
                                        <br/>
                                        <select id="sex" name="user_sex" className={styles.select} required> 
                                            <option value="outros">Outros</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                        </select>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <label htmlFor="UF">UF</label>
                                    <br/>
                                        <select id="UF" name="UF" className={styles.select} required>
                                            {
                                                states.map(
                                                    (state) => (
                                                        <option value={state} key={state}>{state}</option>
                                                    )
                                                )
                                            }
                                        </select>
                                    </li>
                            </div>
                        </div>
                    <li>
                        <label htmlFor="mail">Email</label>
                        <br/>
                        <input type="email" id="mail" name="user_mail" required/>
                    </li>
                    <li>
                        <label htmlFor="whoAreYou">Quem é você?</label>
                        <br/>
                        <textarea id="whoAreYou" name="user_whoAreYou" required/>
                    </li>
                    <li>
                        <label htmlFor="tag">Tags</label>
                        <br/>
                        <input type="text" id="tag" name="user_tag"/>
                    </li>
                    <li>
                        <button type="submit" className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize2} ${utilStyles.fontMedium} ${styles.submitPlus}`}>submit</button>
                    </li>
                </ul>
            </form>
            <p className={styles.help}>Precisa de ajuda?</p>
            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
        </Layout>
    );
}