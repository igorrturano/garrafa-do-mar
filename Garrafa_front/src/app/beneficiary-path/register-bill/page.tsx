'use client'

import Layout from "@/components/Layout/index";
import BackgroundIcons from "@/components/BackgroundIcons/index";
import style from './page.module.css';
import utils from '@/app/utils.module.css';
import { FormEvent } from "react";
import { useRouter } from "next/navigation";


export default function registerBill() {

    const router = useRouter();

    const headerProp: object = {
        logo: true
    };
    const footerProp: object = {
        mode: 2,
        home: '/beneficiary-path/begin'
    };
    const mainProp: object = {
        className: style.container
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('register-bill-success');
    }

    const onFormCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('menu');
    }    


    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp} >
            <h1 className={`${style.marginTitle} ${utils.title}`}>CADASTRAR NOVA CONTA</h1>
            <form onSubmit={onFormSubmit} onInvalid={(e) => console.log(e)}>
                <ul className={style.list}>
                    <li>
                        <label className={style.label} htmlFor="conta">Código de barras</label>
                        <br/>
                        <input type="text" id="conta" name="contaCadastrada" className={style.sizeBox} required/>
                    </li>
                    <li>
                        <label className={style.label} htmlFor="venc">Vencimento</label>
                        <br/>
                        <input type="text" id="venc" name="dataVencimento" className={style.sizeBox} required/>
                    </li>
                    <li>
                        <label className={style.label} htmlFor="valor">Valor da conta</label>
                        <br/>
                        <input type="text" id="valor" name="valorConta" className={style.sizeBox} required/>
                    </li>
                    <li>
                        <label className={style.label} htmlFor="mensagem">Mensagem ao doador</label>
                        <br/>
                        <textarea id="mensagem" name="mensagemAoDoador" className={style.messageBox} required/>
                    </li>
                    <li>
                        <div>
                            <button type="submit" className={`${utils.buttonContainer} ${style.buttonContent}`}>enviar</button>
                            <button onClick={onFormCancel} className={`${style.cancelContainer} ${style.buttonContent}`}>cancelar</button>
                        </div>
                    </li>

                </ul>
            </form>
            <BackgroundIcons bubbleClass={style.bubbleSize} lineClass={style.lineSize}/>
        </Layout>

    )
}