//! .d.ts uzantısını typescript global alan olarak görüyor ve bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoru<

interface ITodoType {
    todo: string;
    isDone: boolean;
    id: string | number;
    task?: string; //!optional
  }

type AddFn = (text:string) => Promise<void>;

type ToggleFn =(todo:ITodoType) => Promise<void>
type DeleteFn =(id:string | number) => Promise<void>