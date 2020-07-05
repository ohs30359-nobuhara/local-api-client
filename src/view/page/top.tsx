import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../template/default";
import {CreateProjectButtonPresentation} from "../component/CreateProjectButton/presentation";

/**
 * トップページ
 * @param props
 * @constructor
 */
export const TopPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <CreateProjectButtonPresentation />
    </DefaultTemplatePresentation>
  );
};