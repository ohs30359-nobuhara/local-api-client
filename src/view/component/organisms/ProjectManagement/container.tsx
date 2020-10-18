import React, {FunctionComponent} from 'react';
import {useProject} from "@view/redux/hooks/useProject";
import {Project} from "@interface/project";
import {ProjectManagementPresentation} from "@view/component/organisms/ProjectManagement/presentation";

interface Props {
  project?: Project
}

export const ProjectManagementContainer: FunctionComponent<Props> = (props) => {
  const [items, , ]: any = useProject();

  return (
    <ProjectManagementPresentation records={items}/>
  )
}