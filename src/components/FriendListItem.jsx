import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default class FriendListItem extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  };

  render() {
    const { avatar, name, isOnline } = this.props;
    return (
      <li className={css.item}>
        <span
          className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  }
}
