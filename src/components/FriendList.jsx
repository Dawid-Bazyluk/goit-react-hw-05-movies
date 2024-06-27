import React, { Component } from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

export default class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool,
      }),
    ),
  };

  render() {
    
    return (
      <ul className={css.friend}>
        {this.props.friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </ul>
    );
  }
}
