import { Profile } from './Profile/Profile';
import { FriendList } from './Friends/FreindList/FriendList';
import { Statistics } from './UploadStats/Statistics/Statistics';
import { TransactionHistory } from './Transactions/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import friends from 'data/friends.json';
import statisticalData from 'data/statistical-data.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
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
    </>
  );
};
