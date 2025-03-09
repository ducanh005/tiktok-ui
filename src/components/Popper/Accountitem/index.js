import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/bb19580887ab85faa657634b882b2981~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=2da3e843&x-expires=1741676400&x-signature=pyoPq%2Fjmd%2BA0wYZpQo%2Fuwg5ekQg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my" alt="Danh"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Vu Duc Danh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('usernmae')}> Danh</span>
            </div>
        </div>
     );
}

export default AccountItem;