import { getData } from "@/lib/getData";

import Layout from "@/components/Layout";

// Styles
import utilStyles from '@/app/utils.module.css';
import styles from './page.module.css';
import BackgroundIcons from "@/components/BackgroundIcons";
import Link from "next/link";

export default function Page({params}: {params: {[key: string]: any}}) {

    const name = decodeURI(params.name);
    const course = getCourseData(name);

    const   prop = {
        mainProp: {
            className: styles.mainContainer
        }
    }
    return (
        <Layout {...prop}>
            <div className={styles.courseContainer}>
                <div className={styles.header}>
                    <div className={`${styles.statusContainer} ${course.status ? styles.statusTrue : ''}`}></div>
                    <h1 className={utilStyles.title}>{course.name}</h1>
                </div>
                <p>{course.description}</p>
                <br/>
                <hr/>
                <p>{course.content}</p>
                                
                <div className={styles.button}>
                    <button className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize2} ${utilStyles.fontMedium}`}>Proximo</button>
                    <Link href={`./${params.name}/quiz`}>
                        <button name="quiz" className={`${utilStyles.buttonContainer} ${utilStyles.buttonSize2} ${utilStyles.fontMedium}`}>
                            quiz
                        </button>
                    </Link>
                </div>
            </div>
            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
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