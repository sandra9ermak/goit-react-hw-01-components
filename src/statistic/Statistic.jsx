import styles from "./Statistic.module.css";


const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistic = ({ title, stats }) => {
    return (
        <section class={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul class={styles.staffList}>
            {stats.map(item => 
                <li className={styles.listItem} styles={{backgroundColor: getRandomHexColor}}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}%</span>
                </li>
            )}
            </ul>
        </section>
    )
}

export default Statistic;