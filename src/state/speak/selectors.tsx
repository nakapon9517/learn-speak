import { Folders, File } from "speak";

const getVisibleFolders = (folder: Folders[], checked: boolean) =>
  checked ? folder.filter((v) => !v.opened) : folder;

export default {
  getVisibleFolders,
};
