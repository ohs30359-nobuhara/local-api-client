import React, {FunctionComponent} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {TopPagePresentation} from "./component/pages/top";
import {ProjectIndexPagePresentation} from "./component/pages/project";
import {ApiIndexPagePresentation} from "./component/pages/api";

export const App: FunctionComponent = () => {
  return (
    <HashRouter>
      <Route path={"/"} exact component={TopPagePresentation} />
      <Route path={"/project"} component={ProjectIndexPagePresentation} />
      <Route path={"/api"} component={ApiIndexPagePresentation} />
    </HashRouter>
  )
};