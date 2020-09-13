import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../../template/default";
import {CreateProjectButtonPresentation} from "../../component/CreateProjectButton/presentation";

/**
 * Project編集ページ
 * @param props
 * @constructor
 */
export const ProjectEditPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      EDIT
      <CreateProjectButtonPresentation />
    </DefaultTemplatePresentation>
  );
};