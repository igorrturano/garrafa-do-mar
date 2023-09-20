import styles from './styles.module.css';

export default function CourseCard({className = '', border = true, name = "Course", description = "Description of course", status = false, statusFalse = ''}: {className?: string, border?: boolean, name?: string, description?: string, status?: boolean, statusFalse?: string}): React.ReactNode {
    return (
        <div className={`${styles.courseContainer} ${border ? styles.border : ''} ${className}`}>
            <div className={`${styles.statusContainer} ${status ? styles.statusTrue : statusFalse}`}></div>
            <div>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}