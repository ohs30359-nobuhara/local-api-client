/**
 * Response
 * @interface
 */
export interface Response {
  id: number | null;
  label: string | null;
  status: number | null
  contentType: string | null;
  response: string | null;
  api_id: number | null ;
}