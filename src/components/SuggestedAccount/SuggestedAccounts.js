import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({isSeeAll=false, label, data = [], onViewChange}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account) => (
                <AccountItem key={account.id} data={account}></AccountItem>
            ))}

            {/* <AccountItem></AccountItem>
            <AccountItem></AccountItem> */}

            <p className={cx('more-btn')} onClick={()=>onViewChange(isSeeAll)}>{isSeeAll?'See less':'See all'}</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccount;
