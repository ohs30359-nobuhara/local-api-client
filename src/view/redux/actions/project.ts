import actionCreatorFactory, {ActionCreator, ActionCreatorFactory} from "typescript-fsa";
import {Project} from "@interface/project";

const actionCreator: ActionCreatorFactory = actionCreatorFactory();

export namespace ProjectActions {
  export const fetch: ActionCreator<Project[]> = actionCreator('INDEX');
  export const create: ActionCreator<Project> = actionCreator('CREATE');
  export const update: ActionCreator<Project> = actionCreator('UPDATE');
  export const destroy: ActionCreator<number> = actionCreator('DELETE');
}
