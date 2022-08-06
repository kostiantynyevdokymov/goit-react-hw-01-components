import { Main } from "./utils/app.styled";
import { Profile } from "./profile/Profile";
import { Statistics } from './statistics/Statistics'
import { FriendList } from "./friendlist/Friendlist";
import { TransactionHistory } from './transaction/Transaction';
import user from '../data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Main>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  key={user.tag}
      />
      <Statistics
        props={data}
        title='Upload stats'
      />
      <FriendList
      props={friends}
      />
      <TransactionHistory props={transactions}/>
    </Main>
  
  );
};
