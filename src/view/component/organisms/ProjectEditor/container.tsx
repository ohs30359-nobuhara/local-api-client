import React, {FunctionComponent, useEffect, useState} from 'react';
import {ProjectEditorPresentation} from "./presentation";
import {useProject} from "@view/redux/hooks/useProject";
import {Project} from "@interface/project";
import {EditorDialogPresentation} from "@view/component/molecules/EditorDialog/presentation";

interface Props {
  project?: Project
  open: boolean
}

export const ProjectEditorContainer: FunctionComponent<Props> = (props: Props) => {
  const [open, setOpen] = useState(props.open);
  const [project, setProject] = useState(props.project);
  const [, , create]: any = useProject();

  useEffect(() => {
    setOpen(props.open)
  }, [props.open]);

  return (
    <EditorDialogPresentation
      openState={open}
      closeHandler={() => setOpen(false)}
      submitHandler={() => create(project)}
    >
      <ProjectEditorPresentation handleChange={setProject} project={project}/>
    </EditorDialogPresentation>
  )
}