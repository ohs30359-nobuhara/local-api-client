import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../../template/default";
import {ProjectManagementPresentation} from "../../content/projectManagement";

/**
 * API管理ページ
 * @param props
 * @constructor
 */
export const ApiIndexPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <ProjectManagementPresentation/>
    </DefaultTemplatePresentation>
  );
};