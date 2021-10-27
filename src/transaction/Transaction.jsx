import PropTypes from 'prop-types';
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

Transaction.propTypes = {
  items:
    PropTypes.arrayOf(
      PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })).isRequired
}