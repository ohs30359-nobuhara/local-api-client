import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../../template/default";
import {CreateProjectButtonPresentation} from "../../component/CreateProjectButton/presentation";

/**
 * API作成ページ
 * @param props
 * @constructor
 */
export const ApiCreatePagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <CreateProjectButtonPresentation />
    </DefaultTemplatePresentation>
  );
};