import { Reducer } from "redux";
import { Fold, File } from "speak";
import { Actions, ActionTypes } from "./actions";

export type SpeakState = {
  folders: Fold[];
  files: File[];
  // check: boolean;
};

export const initialState: SpeakState = {
  folders: [
    {
      folderId: 1,
      name: "果物",
      text: "A",
      opened: true,
    },
    {
      folderId: 2,
      name: "こってり系",
      text: "B",
      opened: true,
    },
    {
      folderId: 3,
      name: "飲み物",
      text: "C",
      opened: false,
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
};

const speakReducer: Reducer<SpeakState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH: {
      if (action.payload.text) {
        state.files
          .filter((file) => file.text.includes(action.payload.text))
          .forEach((file) => {
            file.indicate = false;
          });
      } else {
        state.files.forEach((file) => {
          file.indicate = true;
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
      alert("aaaaaaaa");
      return {
        ...state,
      };
    }

    case ActionTypes.FOLDER_DEL: {
      alert("folder.del");
      return {
        ...state,
      };
    }

    case ActionTypes.FILE_ADD: {
      alert("file.add");
      return {
        ...state,
      };
    }

    case ActionTypes.FILE_DEL: {
      alert("file.del");
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
