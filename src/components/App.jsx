import { Profile } from "./profile/Profile";
import {Statistics} from './statistics/Statistics'
import user from '../data/user.json';
import data from 'data/data.json';
import style from './utils/app.module.css';
export const App = () => {
  return (
    <div className={style.main}>
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
    </div>
  );
};
