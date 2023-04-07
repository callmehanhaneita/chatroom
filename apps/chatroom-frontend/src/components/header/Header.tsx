import './Header.css'
import { DEFAULT_MEMBERS } from "../../constants/members";
import getQuery from "../../utils/urlUtil";
function Header() {
  const user = DEFAULT_MEMBERS[getQuery('user') || 'Jenny']
  return (
    <div className="header">
      <img className="avatar" src={user.avatar} alt="avatar" />
    </div>
  )
}
export default Header
