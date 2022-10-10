import React, {useContext} from 'react';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {observer} from "mobx-react-lite";
import {Context} from "../../context";
import {useLocalStorage} from "../../gears";
import {useTranslation} from "react-i18next";


const TranslationButton = () => {
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    const {store} = useContext(Context);
    const {t} = useTranslation();

    return (
        <div>
            {t('Test')}
            <h1> {store.demo.toString()}</h1>
            <button onClick={() => store.changeDemo()}>change demo</button>
            <br/>
            <TextField
                select
                variant="standard"
                InputProps={{disableUnderline: true}}
                value={language}
                onChange={(e) => {
                    setLanguage(e.target.value);
                    store.lang.set(e.target.value)
                }}
            >
                {store.lang.getAll().map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

export default observer(TranslationButton);