import React from "react";

export default function FriendProfile({ friend }) {
  return (
    <div>
      <ul className="profile-holder">
        <li className="profile">
          <strong>Name :</strong>
          {friend.results[0].name.first}
          {' '}
          {friend.results[0].name.last}
        </li>
        <li className="profile">
          <strong>Adress : </strong>
          {friend.results[0].location.street.name}
          {' '}
          {friend.results[0].location.street.number}
          {' '}
          {friend.results[0].location.country}
        </li>
        <li className="profile">
          <strong>E-mail : </strong>
          {friend.results[0].email}
        </li>
        <li className="profile">
          <strong>Phone : </strong>
          {friend.results[0].phone}
        </li>
      </ul>
    </div>
  );
}
