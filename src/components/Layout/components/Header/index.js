import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes'
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //dvk
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Danh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
            <Link to={routesConfig.home} className={cx('logo-link')}>
                <img src={images.logo} alt="tik tok"></img>
            </Link>
                <Search></Search>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/480687451_1037736148387537_230747523904068265_n.jpg?stp=c27.105.1500.1500a_cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHC341Yiv1Zymf2DCbbbe4CxCCw9qFB9_bEILD2oUH39uZgMF4rsrfmS-FpTAgEQpuMcVny0RW-el76dIJXKJno&_nc_ohc=GUQQpf2q6tkQ7kNvgEkcwsB&_nc_oc=AdjVD0l4WAoVxxuQgK_76z3n3X7zpKGTvE__dfZGSt29fRFBJDBY1p6eZKwsLwym5QqiZ8Z55A-VN45Fejs52sKg&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=APA9A2oggpaGda3BJnnIzTY&oh=00_AYEVkFUtFOI086N-ulOsPgGadqMzvv4GnD1tLr9ENsrfew&oe=67D8C390"
                                className={cx('user-avatar')}
                                alt="Vu Duc Anh"
                                fallback="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGRDrT7zbuTK43IGXOEifs1Wt9TLzuBU1Ba31MvO4FTUC8WSJhQzesBEyBF725czsTFZMH1qBmo6-X4oIUOzymP&_nc_ohc=wOXUzZhUIhAQ7kNvgG3TuY2&_nc_oc=AdieiwO_IxX61vPLpuufoXydKxD0tISogR8b6ZeAQEEIEo65a4Lq4I1efBoegCkxtX4ZGCMtMQkIz8_H1IFcP5Yg&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AG9w-HHq5WnJoqFve_yhsKG&oh=00_AYExPWTsPmO4Q6ysAqoUIi-KrIO3LQ2HDJoLedWt9giwDg&oe=67FA627A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
