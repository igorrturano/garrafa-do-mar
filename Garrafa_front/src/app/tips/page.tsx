// Components
import  Layout from '@/components/Layout';

// Styles
import styles from './page.module.css';
import utilStyles from '@/app/utils.module.css';

export default function Tips() {
    
    const headerProp: object = {
        logo: true
    };
    const footerProp: object = {
        mode: 2
    };
    const mainProp: object = {
        className: styles.mainContainer
    };
    
    const   data = [
        {
            title: "Sobre Ganhos",
            tip: "Nunca depende de uma única fonte de renda. Faça investimentos para criar sua fonte de renda extra."
        },
        {
            title: "Sobre Gastos",
            tip: "Se você comprar coisas que não precisa, logo terá que vender coisas que você precisa."
        },
        {
            title: "Sobre Economia",
            tip: "Não economize o que resta de seus gastos, mas gaste o que sobra das suas economias"
        },
        {
            title: "Sobre Correr Riscos",
            tip: "Nunca tests a profundidade do rio com os dois pés"
        },
        {
            title: "Sobre Investimentos",
            tip: "Não coloque todos os ovos na mesma cesta"
        },
        {
            title: "Sobre Investimentos",
            tip: "Não coloque todos os ovos na mesma cesta"
        }
    ]

    return (
        <Layout headerProp={headerProp} footerProp={footerProp} mainProp={mainProp}>
            <h1>Dicas</h1>
            <div className={styles.container}>
                {
                    data.map(
                        (tip, idx) => {
                            return (
                                <div key={idx} className={`${styles.cardContainer} ${styles.cardContent}`}>
                                    <h2 className={styles.title}>{tip.title}</h2>
                                    <hr/>
                                    <p>{tip.tip}</p>
                                </div>
                            );
                        }
                    )
                }
            </div>
        </Layout>
    );
}