import React, {FunctionComponent} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {TopPagePresentation} from "./page/top";
import {ProjectIndexPagePresentation} from "./page/project";
import {ProjectCreatePagePresentation} from "./page/project/create";
import {ProjectEditPagePresentation} from "./page/project/edit";

export const App: FunctionComponent = () => {
  return (
    <HashRouter>
      <Route path={"/"} exact component={TopPagePresentation} />
      <Route path={"/project"} component={ProjectIndexPagePresentation} />
      <Route path={"/project/create"} component={ProjectCreatePagePresentation} />
      <Route path={"/project/edit"} component={ProjectEditPagePresentation} />
    </HashRouter>
  )
};