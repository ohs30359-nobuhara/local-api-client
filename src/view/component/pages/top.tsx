import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../template/default";
import {RequestListPresentation} from "../organisms/RequestList/presentation";

/**
 * トップページ
 * @param props
 * @constructor
 */
export const TopPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      <RequestListPresentation />
    </DefaultTemplatePresentation>
  );
};