import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ReducerInterface} from "@view/redux/reducers/reducer";
import {ProjectActions} from "@view/redux/actions/project";
import {projectProxy} from "@view/proxy/project";
import {Project} from "@interface/project";

export const useProject = () => {
  const items = useSelector<ReducerInterface>(state=> state.project.projectList)
  const dispatch = useDispatch()

  const get = useCallback(() => {
    projectProxy.findIndex()
      .then(result => dispatch(ProjectActions.fetch(result)))
      .catch(e => console.error(e));
  }, [items]);

  const create = useCallback((project: Project) => {
    projectProxy.create(project)
      .then((state) => {
        // 成功したらデータを更新
        if (state) {
          get()
        } else {
          console.log('fail update')
        }
      })
      .catch(e => {console.error(e)})
  }, [])

  return [items, get, create];
}
