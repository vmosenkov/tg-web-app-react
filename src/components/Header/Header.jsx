import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть окно</Button>
            <div className={'username'}>
               {/* {user?.username} */}
               {user?.photo_url}
               {user?.first_name}
               {user?.last_name}
            </div>
        </div>
    );
};

export default Header;