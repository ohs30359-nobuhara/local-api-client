import React, {FunctionComponent, useEffect} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {TopPagePresentation} from "./component/pages/top";
import {ProjectIndexPagePresentation} from "./component/pages/project";
import {ApiIndexPagePresentation} from "./component/pages/api";
import {useProject} from "./redux/hooks/useProject";

export const App: FunctionComponent = () => {
  const [items, getResources, loading, error]: any = useProject()
  useEffect(() => {
    getResources();
  }, []);

  if (loading) {
    console.log('loading');
  }

  if (items) {
    console.log('data', items);
  }

  if (error) {
    console.log('error', error)
  }
  return (
    <HashRouter>
      <Route path={"/"} exact component={TopPagePresentation} />
      <Route path={"/project"} component={ProjectIndexPagePresentation} />
      <Route path={"/api"} component={ApiIndexPagePresentation} />
    </HashRouter>
  )
};