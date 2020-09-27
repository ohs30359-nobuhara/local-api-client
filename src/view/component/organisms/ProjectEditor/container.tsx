import React, {FunctionComponent} from 'react';
import {ProjectEditorPresentation} from "./presentation";
import {useProject} from "@view/redux/hooks/useProject";
import {Project} from "@interface/project";

interface Props {
  project?: Project
}

export const ProjectEditorContainer: FunctionComponent<Props> = (props) => {
  const [, , create]: any = useProject();
  return (
    <ProjectEditorPresentation handleCreate={create} handleUpdate={create} project={props.project}/>
  )
}