import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ReducerInterface} from "@view/redux/reducers/reducer";
import {ProjectActions} from "@view/redux/actions/project";
import {projectProxy} from "@view/proxy/project";

export const useProject = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const items = useSelector<ReducerInterface>(state=> state.project.projectList)
  const dispatch = useDispatch()

  const getResources = useCallback(() => {
    setLoading(true);

    projectProxy.findIndex()
      .then((result) => dispatch(ProjectActions.fetch(result)))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [loading, error, items]);
  return [items, getResources, loading, error];
}
