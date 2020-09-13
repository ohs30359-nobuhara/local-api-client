import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../../template/default";
import {ProjectManagementPresentation} from "../../content/projectManagement";

/**
 * Project管理ページ
 * @param props
 * @constructor
 */
export const ProjectIndexPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <ProjectManagementPresentation/>
    </DefaultTemplatePresentation>
  );
};