import { Reducer } from "redux";
import { Fold, File } from "speak";
import { Actions, ActionTypes } from "./actions";

export type SpeakState = {
  folders: Fold[];
  files: File[];
  type: string;
  loginAuth: boolean;
};

export const initialState: SpeakState = {
  folders: [
    {
      folderId: 1,
      name: "果物",
      opened: true,
      count: 0,
      category: "secondary",
    },
    {
      folderId: 2,
      name: "こってり系",
      opened: true,
      count: 0,
      category: "action",
    },
    {
      folderId: 3,
      name: "飲み物",
      opened: false,
      count: 0,
      category: "disabled",
    },
    {
      folderId: 4,
      name: "パスタ",
      opened: false,
      count: 0,
      category: "primary",
    },
    {
      folderId: 5,
      name: "ラーメン",
      opened: false,
      count: 0,
      category: "secondary",
    },
    {
      folderId: 6,
      name: "国名",
      opened: false,
      count: 0,
      category: "error",
    },
  ],
  files: [
    {
      folderId: 1,
      fileId: 1,
      name: "りんご",
      text: "apple",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 1,
      fileId: 2,
      name: "ぶどう",
      text: "grape",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 1,
      fileId: 3,
      name: "シャンパン",
      text: "Champagne",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 1,
      fileId: 4,
      name: "しょうゆ",
      text: "Soy sauce",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 2,
      fileId: 1,
      name: "塩",
      text: "salt",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 2,
      fileId: 2,
      name: "豚骨",
      text: "pork bone",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 2,
      fileId: 3,
      name: "鶏",
      text: "chicken",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 3,
      fileId: 1,
      name: "酸辣湯麺",
      text: "hot and sour noodles",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 3,
      fileId: 2,
      name: "トンカツ",
      text: "pork cutlet",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 3,
      fileId: 3,
      name: "ラーメン",
      text: "ramen",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 3,
      fileId: 4,
      name: "日本酒",
      text: "Japanese sake",
      checked: false,
      listening: false,
      indicate: true,
    },
    {
      folderId: 3,
      fileId: 5,
      name: "ワイン",
      text: "Wine",
      checked: false,
      listening: false,
      indicate: true,
    },
  ],
  type: "dark",
  loginAuth: false,
};

const speakReducer: Reducer<SpeakState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_ACTION: {
      if (action.payload.id && action.payload.pw) {
        state.loginAuth = true;
      } else {
        state.loginAuth = false;
      }
      return {
        ...state,
      };
    }
    case ActionTypes.CHANGE_TYPE: {
      state.type = action.payload.type;
      return {
        ...state,
      };
    }
    case ActionTypes.CHANGE_SEARCH: {
      state.files.forEach((file) => {
        file.indicate = true;
      });
      if (action.payload.text) {
        state.files
          .filter((file) => !file.text.includes(action.payload.text))
          .forEach((file) => {
            file.indicate = false;
          });
      }
      return {
        ...state,
      };
    }
    case ActionTypes.CLICK_FOLDER: {
      state.folders.forEach((folder) => {
        if (folder.folderId === action.payload.id) {
          folder.opened = !folder.opened;
        }
      });
      return {
        ...state,
      };
    }
    case ActionTypes.CLICK_PLAY: {
      const folderId = action.payload.folderId;
      const fileId = action.payload.folderId;
      const playBefore = action.payload.playBefore;
      if (folderId && fileId) {
        // 単独
        state.files
          .filter(
            (file) => file.folderId === folderId && file.fileId === fileId
          )
          .forEach((file) => {
            file.listening = playBefore;
          });
      }
      return {
        ...state,
      };
    }
    case ActionTypes.CLICK_FILE: {
      // チェック対象ファイル
      const target = state.files.filter(
        (file) =>
          file.folderId === action.payload.folderId &&
          file.fileId === action.payload.fileId
      );
      target[0].checked = !action.payload.checked;
      return {
        ...state,
      };
    }
    case ActionTypes.CLICK_ALL: {
      // チェック対象フォルダ
      const targetFolders = state.folders.filter(
        (fold) => fold.opened === true
      );
      // チェック対象ファイル
      const targetFoldId = [
        targetFolders.map((fold) => {
          return fold.folderId;
        }),
      ];
      state.files.forEach((file) => {
        if (targetFoldId[0].includes(file.folderId)) {
          file.checked = action.payload.checked;
        }
      });

      return {
        ...state,
      };
    }
    case ActionTypes.FOLDER_ADD: {
      const newFolders: Fold = {
        folderId: state.folders.length + 1,
        name: action.payload.name,
        opened: false,
        count: 0,
        category: action.payload.category,
      };
      return {
        ...state,
        folders: [...state.folders, newFolders],
      };
    }

    case ActionTypes.FOLDER_DEL: {
      alert("folder.del");
      return {
        ...state,
      };
    }

    case ActionTypes.FILE_ADD: {
      const targetFiles = state.files.filter(
        (file) => file.folderId === action.payload.folderId
      );
      const newFiles: File = {
        folderId: action.payload.folderId,
        fileId: targetFiles.length + 1,
        name: action.payload.name,
        text: action.payload.text,
        checked: false,
        listening: false,
        indicate: true,
      };
      return {
        ...state,
        files: [...state.files, newFiles],
      };
    }

    case ActionTypes.FILE_DEL: {
      state.files = state.files.filter(
        (file) =>
          !(
            file.folderId === action.payload.folderId &&
            file.fileId === action.payload.fileId
          )
      );
      return {
        ...state,
      };
    }

    case ActionTypes.MUSIC_START: {
      alert("music.start");
      return {
        ...state,
      };
    }
    case ActionTypes.MUSIC_STOP: {
      alert("music.stop");
      return {
        ...state,
      };
    }
    case ActionTypes.MUSIC_END: {
      alert("music.end");
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default speakReducer;
