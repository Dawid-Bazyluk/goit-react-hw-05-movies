import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default class Profile extends Component {
  static deafultProps = {};

  static propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  };

  render() {
    return (
      <div className={css.profile}>
        <div className={css.user}>
          <img
            src={this.props.avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{this.props.username}</p>
          <p className={css.descr}>{this.props.tag}</p>
          <p className={css.descr}>{this.props.location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{this.props.stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{this.props.stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}
