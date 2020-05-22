import { Fold } from "speak";

const getVisibleFolders = (folder: Fold[], checked: boolean) =>
  checked ? folder.filter((v) => !v.opened) : folder;

export default {
  getVisibleFolders,
};
