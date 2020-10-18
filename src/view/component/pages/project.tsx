import React, {FunctionComponent} from 'react';
import {DefaultTemplatePresentation} from "../template/default";
import {ProjectManagementContainer} from "@view/component/organisms/ProjectManagement/container";

/**
 * Project管理ページ
 * @param props
 * @constructor
 */
export const ProjectIndexPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <ProjectManagementContainer/>
    </DefaultTemplatePresentation>
  );
};