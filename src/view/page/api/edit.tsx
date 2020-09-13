import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../../template/default";
import {CreateProjectButtonPresentation} from "../../component/CreateProjectButton/presentation";

/**
 * API管理ページ
 * @param props
 * @constructor
 */
export const ApiEditPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <CreateProjectButtonPresentation />
    </DefaultTemplatePresentation>
  );
};