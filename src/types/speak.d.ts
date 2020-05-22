declare module "speak" {
  export interface Fold {
    id: string;
    name: string;
    text: string;
    opened: boolean;
    file: File[];
  }
  export interface File {
    id: string;
    name: string;
    text: string;
    listening: boolean;
  }
}
