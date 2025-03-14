import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import AccountItem from '~/components/Accountitem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)

    const inputRef = useRef();

    useEffect(() => {
        if(!searchValue.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then(res=>res.json())
        .then(res => {
            setSearchResult(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setLoading(false)
        })
        
    }, [searchValue]);

    const handleclear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    };

    const handleHideResult=()=>{
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                       {searchResult.map((result)=>(
                        <AccountItem key={result.id} data={result}></AccountItem>
                       ))}
                    </PropperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={()=>setShowResult(true)}
                ></input>
                {!!searchValue &&!loading && (
                    <button className={cx('clear')} onClick={handleclear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
