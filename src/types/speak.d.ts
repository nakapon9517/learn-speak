declare module "speak" {
  export interface Fold {
    folderId: int;
    name: string;
    text: string;
    opened: boolean;
  }
  export interface File {
    folderId: int;
    fileId: int;
    name: string;
    text: string;
    checked: boolean;
    listening: boolean;
  }
}
