import styles from "./Statistic.module.css";
import {getRandomHexColor} from "../getRandomHexColor"

const Statistic = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.staffList}>
            {stats.map(item => 
                <li key={ item.id } className={styles.listItem} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
                </li>
            )}
            </ul>
        </section>
    )
}

export default Statistic;