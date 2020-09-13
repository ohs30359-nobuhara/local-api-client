import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../../template/default";
import {CreateProjectButtonPresentation} from "../../component/CreateProjectButton/presentation";

/**
 * Project作成ページ
 * @param props
 * @constructor
 */
export const ProjectCreatePagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      NEW
      <CreateProjectButtonPresentation />
    </DefaultTemplatePresentation>
  );
};