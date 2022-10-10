import React from "react";
import {ITemplate} from "../../gears/models/ITemplate";
import TranslationButton from "../UI/TranslationButton";

const template: ITemplate = {
    body: <>Dwed Client Main</>,
    footer: <TranslationButton/>
}

export const main = [template]