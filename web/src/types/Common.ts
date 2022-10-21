export interface RouterObj {
  path: string;
  element: JSX.Element;
  children?: RouterObj[];
}

export interface CreateTaskParams {
  name: string;
  source:{
    client: string;
    datasource: string;
    database: string;
    table: string[];
    selectSql: string;
    taskSplitMode: number;
  };
  target:{
    datasource: string;
    database: string;
    importDataMode: number;
  };
  concurrent: number;
  isSyncSchema: boolean;
}

export interface CreateTaskInputParams {
  name: string;
  selectSql: string;
}

export type ErrorField<T> = {
  [P in keyof T]?: boolean;
}

export interface SuspenseLoadingProps {
  children?: React.ReactNode;
}
