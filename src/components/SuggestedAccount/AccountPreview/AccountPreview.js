import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccoutPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/452948028_801330695515368_7143260928997530211_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEN_N3Fwox4PAHVnscG-WLUIEkMq0WRU-4gSQyrRZFT7qDZ3DhllXhdMSB-UPX_al_P0VyGWHv-Ya3OnjsjMpb9&_nc_ohc=GZasqPr87GsQ7kNvgFjI4sM&_nc_oc=AdkwLwFARRXMbLAzzR2osO5MjZD1vGsDZYl_Re_QLlekwCuXPVoNqMGTNQLuEOV847A&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=YWbuPoMk10nygWdyR1-r3w&oh=00_AYHNe7FFmY4pHAI1qzn0jj0K_51ULrL1xwLj4WOIxF-jCA&oe=67E1435A"
                    alt=""
                ></img>
                <div ><Button className={cx('follow-btn')} primary>Follow</Button></div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Vu DAnh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Vu Duc Anh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>
    );
}

export default AccoutPreview;
