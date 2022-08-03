import { Profile } from "./profile/Profile";
import user from '../data/user.json';
import style from './utils/app.module.css'
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
    </div>
  );
};
