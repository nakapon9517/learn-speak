import { ActionType } from "redux-actions-type";

export const ActionTypes = {
  CLICK_FOLDER: "speak/CLICK_FOLDER",
  CLICK_FILE: "speak/CLICK_FILE",

  FOLDER_ADD: "speak/FOLDER_ADD",
  FOLDER_DEL: "speak/FOLDER_DEL",

  FILE_ADD: "speak/FILE_ADD",
  FILE_DEL: "speak/FILE_DEL",

  MUSIC_START: "speak/MUSIC_START",
  MUSIC_STOP: "speak/MUSIC_STOP",
  MUSIC_END: "speak/MUSIC_END",
} as const;

const actions = {
  clickFolder(id: string, opened: boolean) {
    return {
      type: ActionTypes.CLICK_FOLDER,
      payload: { id, opened },
    };
  },
  clickFile(folderId: number, fileId: number, checked: boolean) {
    return {
      type: ActionTypes.CLICK_FILE,
      payload: { folderId, fileId, checked },
    };
  },
  folderAdd() {
    return {
      type: ActionTypes.FOLDER_ADD,
    };
  },
  folderDel() {
    return {
      type: ActionTypes.FOLDER_DEL,
    };
  },
  fileAdd() {
    return {
      type: ActionTypes.FILE_ADD,
    };
  },
  fileDel() {
    return {
      type: ActionTypes.FILE_DEL,
    };
  },
  musicStart() {
    return {
      type: ActionTypes.MUSIC_START,
    };
  },
  musicStop() {
    return {
      type: ActionTypes.MUSIC_STOP,
    };
  },
  musicEnd() {
    return {
      type: ActionTypes.MUSIC_END,
    };
  },
};

export type Actions = ActionType<typeof actions>;
export default actions;
