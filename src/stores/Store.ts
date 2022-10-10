import {action, makeObservable, observable} from "mobx";
import GearStore from "../gears/stores/GearStore";
import en from "../translations/en.json";
import ru from "../translations/ru.json";

export default class Store extends GearStore {
    constructor() {
        super()
        makeObservable(this);
        this.lang.setLanguages([
            {value: 'en', label: 'English', JSON: en},
            {value: 'ru', label: 'Русский', JSON: ru}
        ]);
    }


    @observable
    isAuth = true;
    @observable
    demo = false;

    @action
    changeDemo() {
        this.demo = !this.demo;
    }

    @observable
    //demo test allow locations
    public readonly allow_locations = [
        {
            id: 1,
            locations: [
                {location: '/', id: 1},
            ]
        },
    ]
}