// Components
import Layout from "@/components/Layout";
import { getData } from "@/lib/getData";

// Styles
import styles from './page.module.css';
import utilStyles from '@/app/utils.module.css';
import Link from "next/link";
import Image from "next/image";

export default function quiz({params}: {params: {[key: string]: any}}) {

    const   prop: object = {
        mainProp: {
            className: styles.mainContainer
        }
    };

    const   quizArr = getCourseData(decodeURI(params.name))['quiz'];

    return (
        <Layout {...prop}>
            <div className={styles.quizContainer}>
                <h1 className={utilStyles.title}>Quiz</h1>
                {
                    quizArr.map(
                        (test: any, idx: any) => (
                            <>
                                <div key={idx} className={styles.questionCard}>
                                    <p id="description">{test.question}</p>
                                    <QuizForm options={test.options}/>
                                </div>
                                <hr/>
                            </>
                        )

                    )
                }
                <div className={styles.button}>
                    <button className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize2} ${utilStyles.fontMedium}`}>Proximo</button>
                    <Link href={`./${params.name}/quiz`}>
                        <button name="cancelar" className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize2} ${utilStyles.fontMedium}`}>
                            cancelar
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

function    getCourseData(name: string) {
    const courseList = getData('/public/cursos.json', 'courses');

    for (let i in courseList) {
        if (courseList[i].name == name) {
            return (courseList[i]);
        }
    }
    return null;
}

function    QuizForm({options}: {options: string[]}) {
    return (
        <form className={styles.form}>
           {
                options.map(
                    (test: string, idx: any) => (
                        <>
                            <div key={idx} className={styles.opt}>
                                <input key={idx} type="radio" id={idx} name="fav_language" value={test}></input>
                                <div className={styles.img}></div>
                                <label className={styles.text} key={idx} htmlFor={idx}>{test}</label>
                                <br/>
                            </div>
                        </>
                    )
                )
           }
        </form>
    );
}


{/* {
                        quiz.options.map(
                            (opt: string, idx: any) => (
                                <div key={idx} className={styles.opt}>
                                    <input key={idx} type="radio" id={idx} name="fav_language" value={opt}></input>
                                    <div className={styles.img}></div>
                                    <label className={styles.text} key={idx} htmlFor={idx}>{opt}</label>
                                    <br/>
                                </div>
                            )
                        )
                    } */}