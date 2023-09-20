// Standard Next Libs
import Link from 'next/link';

// Libs
import { getSortedData } from '@/lib/getData';

// Components
import Layout from '@/components/Layout/index';
import BackgroundIcons from '@/components/BackgroundIcons/index';
import CourseCard from '@/components/CourseCard';

// Styles
import styles from './page.module.css';
import utilStyles from '@/app/utils.module.css';

export default async function Transform() {
    const headerProp: object = {
        logo: true
    };

    const footerProp: object = {
        mode: 2,
        home: '/beneficiary-path/begin'
    };

    const mainProp: object = {
        className: utilStyles.container
    };

    const courseList: any[] = GetCourseList('/public/cursos.json', 'key', 'courses'); 
    return (
        <Layout headerProp={headerProp} mainProp={mainProp} footerProp={footerProp}>
            <h1 className={`${utilStyles.title} ${styles.title}`}>JORNADA DA TRANSFORMAÇÃO</h1>
            {
                courseList.map(
                    (course: {[key: string]: any}, idx: number) => {
                        let uri = encodeURI(course.name);
                        return (
                            <Link href={`/courses/${uri}`} key={idx}>
                                <CourseCard {...course} key={idx}/>
                            </Link>
                        );
                    }
                )
            }
            <BackgroundIcons bubbleClass={styles.bubbleIcon} lineClass={styles.lineIcon}/>
        </Layout>
    );
}

function  GetCourseList(href: string, filter: string, key?: string | undefined): any {
    return getSortedData(href, filter, key);
}