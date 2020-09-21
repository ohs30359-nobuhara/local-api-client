import {fetchProjectList} from "../action";
import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';

/**
 * State
 * @interface
 */
interface State {
  projectList: any
}

/**
 * projectReducer
 */
export const projectReducer: ReducerBuilder<any> = reducerWithInitialState({projectList: []})
  .case(fetchProjectList, (state: State, data: any) => {
    return Object.assign({}, state, { projectList: data })
  });
