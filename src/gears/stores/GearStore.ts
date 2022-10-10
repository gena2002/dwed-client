import {makeObservable, observable} from "mobx";
import {AlertStore} from "./@others/AlertStore";
import StringValueStore from "./@others/StringValueStore";
import LangStore from "./@others/LangStore";

export default class GearStore {
    constructor() {
        makeObservable(this);
    }

    /* sub stores */

    @observable
    public readonly alert = new AlertStore();

    @observable
    public readonly lang = new LangStore();

    @observable
    public readonly previous_page = new StringValueStore();

    /* THE END of sub stores */

}