import React, { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { useAuth } from '../../hooks/useAuth.ts';

import { TOKEN } from '../../data/constants.data.ts';

import ButtonNav from '../ButtonNav/ButtonNav.tsx';
import ButtonSquare from '../ButtonSquare/ButtonSquare.tsx';
import Button from '../Button/Button.tsx';
import NavHeader from '../NavHeader/NavHeader.tsx';

import IconHome from '../../assets/images/icon_home.svg?react';
import IconProfile from '../../assets/images/icon_profile.svg?react';
import IconLogOut from '../../assets/images/icon_logout.svg?react';

import styles from './Header.module.scss';

function Header() {
    const [navIsActive, setNavIsActive] = useState<boolean>(false);

    const match = useMatch('/login');
    const navigate = useNavigate();

    const { isAuth, setIsAuth } = useAuth();

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        if (
            navIsActive &&
            (
                e.target instanceof HTMLAnchorElement ||
                e.target instanceof SVGElement
            )
        ) {
            setNavIsActive(!navIsActive);
        }
    }

    function handleLogOut() {
        Cookies.remove(TOKEN);
        setIsAuth(false);
        navigate('/');
    }

    return (
        <header className={styles.Header} onClick={handleClick}>
            <div className={styles.Header__content}>
                <ButtonNav
                    className={styles.Header__ButtonNav}
                    onClick={() => setNavIsActive(!navIsActive)}
                    isActive={navIsActive}
                >
                    Open Navigation
                </ButtonNav>
                <ButtonSquare
                    className={styles.Header__ButtonSquare}
                    to="/"
                >
                    Home
                    <IconHome />
                </ButtonSquare>
                {
                    isAuth ?
                    <>
                        <ButtonSquare
                            className={styles.Header__ButtonSquare}
                            to="/profile"
                        >
                            Profile
                            <IconProfile />
                        </ButtonSquare>
                        <ButtonSquare
                            className={styles.Header__ButtonSquare}
                            onClick={handleLogOut}
                        >
                            Log Out
                            <IconLogOut />
                        </ButtonSquare>
                    </> :
                    <Button
                        className={styles.Header__Button}
                        to="/login"
                        color={match ? 'black' : 'red'}
                    >
                        Sign In
                    </Button>
                }
            </div>
            <NavHeader
                className={styles.Header__NavHeader}
                isActive={navIsActive}
            />
        </header>
    );
}

export default Header;
