import {makeAutoObservable} from "mobx";
import {ILang} from "../../models/ILang";
import i18n from "../../public/i18n";

export default class LangStore {
    constructor() {
        makeAutoObservable(this);
    }

    private value: string = '';

    public set(value: string) {
        i18n.changeLanguage(value);
        this.value = value
    }

    public get() {
        return this.value
    }

    private values: ILang[] = [];

    public getAll() {
        return this.values
    }

    public setLanguages(values: ILang[]) {
        this.values = values;
        console.log(values);

        i18n.init({
                resources: this.getResources(),
                lng: JSON.parse(localStorage.getItem('language')!),
                fallbackLng: 'ru'
            }
        )
    }

    public getResources() {
        interface LooseObject {
            [key: string]: any
        }

        const resources: LooseObject = {}

        for (let i = 0; i < this.getAll().length; i++) {
            resources[this.getAll()[i].value] = {
                translation: this.getAll()[i].JSON
            }
        }

        return resources;
    }
}