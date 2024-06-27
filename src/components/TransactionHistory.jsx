import { Component } from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default class TransactionHistory extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string,
      }),
    ),
  };

  render() {
    const { items } = this.props;
    return (
      <table className={css.transactionHistory}>
        <thead className={css.firstRow}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.cell}>{type}</td>
              <td className={css.cell}>{amount}</td>
              <td className={css.cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
