import { useState, useEffect, use } from 'react';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, UserGroupIcon, HomeActiveIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => (page === INIT_PAGE ? data : [...prevUsers, ...data]));
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleViewChange = (isSeeAll) => {
        setIsSeeAll((prevState)=>!prevState);
        if (isSeeAll) {
            setPage(page + 1);
        } else {

        }
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon></HomeIcon>}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon></UserGroupIcon>}
                ></MenuItem>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />}></MenuItem>
            </Menu>
            <SuggestedAccount
                label={'Suggested account'}
                data={suggestedUsers}
                onViewChange={handleViewChange}
                isSeeAll={isSeeAll}
            ></SuggestedAccount>
            <SuggestedAccount label={'Following account'}></SuggestedAccount>
        </aside>
    );
}

export default Sidebar;
