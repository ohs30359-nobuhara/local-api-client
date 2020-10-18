import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../template/default";
import {ApiManagementPresentation} from "@view/component/organisms/ApiManagement/presentation";

/**
 * API管理ページ
 * @param props
 * @constructor
 */
export const ApiIndexPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <ApiManagementPresentation/>
    </DefaultTemplatePresentation>
  );
};