import React, {FunctionComponent, useEffect, useState} from 'react';
import {EditorDialogPresentation} from "@view/component/molecules/EditorDialog/presentation";
import {ApiEditorPresentation} from "@view/component/organisms/ApiEditor/presentation";

interface Props {
  open: boolean
}

export const ApiEditorContainer: FunctionComponent<Props> = (props: Props) => {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open)
  }, [props.open]);

  return (
    <EditorDialogPresentation
      openState={open}
      closeHandler={() => setOpen(false)}
      submitHandler={() => {
        console.log('登録 || 更新 処理');
      }}
    >
      <ApiEditorPresentation />
    </EditorDialogPresentation>
  )
};