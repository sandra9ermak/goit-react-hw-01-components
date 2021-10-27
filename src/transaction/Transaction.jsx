import styles from "./Transaction.module.css";

const Transaction = ({ items }) => {
    return (
    <table className={styles.transactionHistory}>
  <thead>
    <tr className={styles.titleList}>
      <th className={styles.titleItem}>Type</th>
      <th className={styles.titleItem}>Amount</th>
      <th className={styles.titleItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(item =>
    <tr key={ item.id} className={styles.tableList}>
      <td className={styles.tableItem}>{item.type}</td>
      <td className={styles.tableItem}>{item.amount}</td>
      <td className={styles.tableItem}>{item.currency}</td>
    </tr>
  )}
  </tbody>
    </table>
    )
}

export default Transaction;