import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../template/default";
import {CreateProjectPresentation} from "../component/createProject/presentation";

/**
 * トップページ
 * @param props
 * @constructor
 */
export const TopPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      Home
      <CreateProjectPresentation />
    </DefaultTemplatePresentation>
  );
};