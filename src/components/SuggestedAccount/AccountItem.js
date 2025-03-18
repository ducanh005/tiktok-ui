import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/472983568_1143331404246660_3815091069973641711_n.jpg?stp=c818.0.1335.1335a_dst-jpg_s160x160_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFGSetbg8Lpx9umdEOAUmcwaNjhlsDDOUxo2OGWwMM5TET5B__Z5mhMN1k-tHC_x304ioyfxzXqRL5JPe5byfkk&_nc_ohc=ZYDU5ea-uawQ7kNvgGoFK04&_nc_oc=AdiwmJ7sN5EpnUcNyt6WpA9yZCITnH4u-gUZeawhnxtW1fX_eP4GvL9Rle6lSSXxlvwVMnRuKfbkunpXwX9h1hgL&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=VoUUypcLsDWLPx7M7YnXtQ&oh=00_AYEZxx_Qh7xFiYqBpd_Q3AXwZ8XH2OSJgfIjYJl7pH9-4A&oe=67DF5357"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Vu DAnh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Vu Duc Anh</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
