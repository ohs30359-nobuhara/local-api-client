import {combineReducers, Reducer} from 'redux'
import {projectReducer} from "./project";
import {ProjectState} from "@view/redux/states/project";

/**
 * @interface
 */
export interface ReducerInterface {
  project: ProjectState
}

export const reducer: Reducer<ReducerInterface> = combineReducers({
  project: projectReducer
})