import React, { FunctionComponent } from 'react';
import {DefaultTemplatePresentation} from "../template/default";

/**
 * トップページ
 * @param props
 * @constructor
 */
export const TopPagePresentation: FunctionComponent<any> = (props) => {
  return (
    <DefaultTemplatePresentation>
      TOP
    </DefaultTemplatePresentation>
  );
};