import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {projectFetcher} from "../../fetcher/project";
import {fetchProjectList} from "../action";

export const useProject = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const items = useSelector<{projectList: any}>(state=> { console.log('state',state); state.projectList})
  const dispatch = useDispatch()

  const getResources = useCallback(() => {
    setLoading(true);

    projectFetcher.findIndex()
      .then(result => dispatch(fetchProjectList(result)))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [loading, error, items]);
  return [items, getResources, loading, error];
}
