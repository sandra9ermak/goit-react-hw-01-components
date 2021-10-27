import styles from "./Transaction.module.css";

const Transaction = ({ items }) => {
    return (
    <table class={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.titleList}>Type</th>
      <th className={styles.titleList}>Amount</th>
      <th className={styles.titleList}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(item =>
    <tr className={styles.tableList}>
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