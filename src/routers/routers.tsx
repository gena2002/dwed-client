import React from "react";
import {getPages} from "../gears";
import {main} from "../components/templates/main";
import {error} from "../components/templates/error";

export const routers = () => {
    return getPages([
        ['/', main],
        ['*', error]
    ])
}