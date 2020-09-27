import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {ProjectState} from "@view/redux/states/project";
import {ProjectActions} from "@view/redux/actions/project";

/**
 * projectReducer
 */
export const projectReducer: ReducerBuilder<ProjectState> = reducerWithInitialState({projectList: []})
  .case(ProjectActions.fetch, (state, data) => {
    return Object.assign({}, state, { projectList: data })
  });
