import { Profile } from './Profile/Profile';
import { FriendList } from './FreindList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import friends from 'data/friends.json';
import statisticalData from 'data/statistical-data.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
        <Statistics title="Upload stats" stats={statisticalData} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
