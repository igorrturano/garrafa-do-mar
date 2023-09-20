// Components
import Layout from '@/components/Layout/index';
import BackgroundIcons from '@/components/BackgroundIcons/index';

// Styles
import styles from './page.module.css';
import utilStyles from '@/app/utils.module.css';
import CourseCard from '@/components/CourseCard';
import Link from 'next/link';
import { getSortedData } from '@/lib/getData';


export default function MyCourses() {
    const   headerProp: object = {
        logo: true
    };

    const   footerProp: object = {
        mode: 2
    };
    
    const   mainProp: object = {
        className: styles.mainContainer
    };

    const courseList: any[] = GetCourseList('/public/cursos.json', 'key', 'courses'); 

    return (
        <Layout headerProp={headerProp} footerProp={footerProp} mainProp={mainProp}>
            <h1 className={utilStyles.title}>JORNADA DA TRANSFORMAÇÃO</h1>
            {
                courseList.map(
                    (course: {[key: string]: any}, idx: number) => {
                        let uri = encodeURI(course.name);
                        course.border=false;
                        course.statusFalse=styles.falseCourse;
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