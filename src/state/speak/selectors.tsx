import { Folder, File } from "speak";

const getVisibleFolders = (folder: Folder[], checked: boolean) =>
  checked ? folder.filter((v) => !v.opened) : folder;

export default {
  getVisibleFolders,
};
