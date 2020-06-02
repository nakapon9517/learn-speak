import { ActionType } from "redux-actions-type";

export const ActionTypes = {
  CHANGE_TYPE: "speak/CHANGE_TYPE",
  CHANGE_SEARCH: "speak/CHANGE_SEARCH",
  CLICK_FOLDER: "speak/CLICK_FOLDER",
  CLICK_PLAY: "speak/CLICK_PLAY",
  CLICK_FILE: "speak/CLICK_FILE",
  CLICK_ALL: "speak/CLICK_ALL",

  FOLDER_ADD: "speak/FOLDER_ADD",
  FOLDER_DEL: "speak/FOLDER_DEL",

  FILE_ADD: "speak/FILE_ADD",
  FILE_DEL: "speak/FILE_DEL",

  MUSIC_START: "speak/MUSIC_START",
  MUSIC_STOP: "speak/MUSIC_STOP",
  MUSIC_END: "speak/MUSIC_END",
} as const;

const actions = {
  changeType(type: string) {
    return {
      type: ActionTypes.CHANGE_TYPE,
      payload: { type },
    };
  },
  changeSearch(text: string) {
    return {
      type: ActionTypes.CHANGE_SEARCH,
      payload: { text },
    };
  },
  clickFolder(id: string, opened: boolean) {
    return {
      type: ActionTypes.CLICK_FOLDER,
      payload: { id, opened },
    };
  },
  clickPlay(folderId: number, fileId: number, playBefore: boolean) {
    return {
      type: ActionTypes.CLICK_PLAY,
      payload: { folderId, fileId, playBefore },
    };
  },
  clickFile(folderId: number, fileId: number, checked: boolean) {
    return {
      type: ActionTypes.CLICK_FILE,
      payload: { folderId, fileId, checked },
    };
  },
  clickAll(checked: boolean) {
    return {
      type: ActionTypes.CLICK_ALL,
      payload: { checked },
    };
  },
  folderAdd(name: string, category: string) {
    return {
      type: ActionTypes.FOLDER_ADD,
      payload: { name, category },
    };
  },
  folderDel() {
    return {
      type: ActionTypes.FOLDER_DEL,
    };
  },
  fileAdd(folderId: number, name: string, text: string) {
    return {
      type: ActionTypes.FILE_ADD,
      payload: { folderId, name, text },
    };
  },
  fileDel(folderId: number, fileId: number) {
    return {
      type: ActionTypes.FILE_DEL,
      payload: { folderId, fileId },
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
