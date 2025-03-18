import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu,{ MenuItem } from './Menu'
import config from '~/config';
import { HomeIcon,UserGroupIcon,HomeActiveIcon,LiveIcon } from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon></HomeIcon>} activeIcon={<HomeActiveIcon/>}></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon></UserGroupIcon>}></MenuItem>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>}></MenuItem>
            </Menu>
            <SuggestedAccount label={'Suggested account'}></SuggestedAccount>
            <SuggestedAccount label={'Following account'}></SuggestedAccount>
        </aside>
    );
}

export default Sidebar;
