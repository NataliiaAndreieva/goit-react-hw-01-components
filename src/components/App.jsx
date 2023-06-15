import { Profile } from './profile/Profile';
import user from '../components/profile/user.json';
// import { Statistics } from './statistics/Statistics';
// import data from '../components/statistics/data.json';
// import { FriendList } from './friendList/FriendList';
// import friends from '../components/friendList/friends.json';
// import { TransactionHistory } from './transactionHistory/TransactionHistory';
// import transactions from '../components/transactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
          />
      
    </>
  );
};
