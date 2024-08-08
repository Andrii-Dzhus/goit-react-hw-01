import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(item => (
        <li key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
