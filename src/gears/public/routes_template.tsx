import React from 'react';
import {IRoute} from "../models/IRoute";
import {Page, RenderRoutes} from "../index";
import {ITemplate} from "../models/ITemplate";

const routes_template = (routers: IRoute[], templates?: ITemplate[]) => {
    const template = {
        templates: {
            body: templates !== undefined ? <Page templates={templates}/> : <></>
        },
        routers: {
            body: <RenderRoutes routers={routers}/>
        }
    }

    return [template.templates, template.routers];
}

export default routes_template;