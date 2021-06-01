export interface ITask {
  id?: string;
  description: string;
  completed: boolean;
}

export interface IDeleteTaskResponse {
  ok?: number;
  n?: number;
  deletedCount?: number;
}
