import actionCreatorFactory, {ActionCreator, ActionCreatorFactory} from "typescript-fsa";
import {Project} from "@interface/project";

const actionCreator: ActionCreatorFactory = actionCreatorFactory();

export namespace ProjectActions {
  export const fetch: ActionCreator<Project[]> = actionCreator('INDEX');
}
