/**
 * Api
 * @interface
 */
export interface Api {
  id: number | null;
  name: string | null;
  method: string | null;
  path: string | null;
  project_id: number | null;
}