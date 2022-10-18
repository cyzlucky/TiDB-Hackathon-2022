export interface RouterObj {
  path: string;
  element: JSX.Element;
  children?: RouterObj[];
}

export type ErrorField<T> = {
  [P in keyof T]?: boolean;
}

export interface SuspenseLoadingProps {
  children?: React.ReactNode;
}
