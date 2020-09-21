import actionCreatorFactory, {ActionCreator, ActionCreatorFactory} from "typescript-fsa";
/**
 * ActionType
 * @enum
 */
export enum ActionType {
  FETCH_PROJECT_LIST = 'FETCH_PROJECT_LIST',
  FETCH_API_LIST = 'FETCH_API_LIST',
}

const actionCreator: ActionCreatorFactory = actionCreatorFactory();

/**
 * Project一覧取得
 * @param data
 */
export const fetchProjectList: ActionCreator<any> = actionCreator(ActionType.FETCH_PROJECT_LIST);