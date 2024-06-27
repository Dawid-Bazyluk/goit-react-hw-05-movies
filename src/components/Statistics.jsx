import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export default class Statistics extends Component {
  static deafultProps = {
    title: "Upload stats",
  };

  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      }),
    ),
  };

  render() {
    return (
      <section className={css.stats}>
        <h2 className={css.title}>{this.props.title}</h2>
        <ul className={css.list}>
          {this.props.stats.map((item) => {
            return (
              <li
                className={css.item}
                key={item.id}
                style={{ backgroundColor: randomColor() }}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
