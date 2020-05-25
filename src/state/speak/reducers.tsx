import { Reducer } from "redux";
import { Fold, File } from "speak";
import { Actions, ActionTypes } from "./actions";
// import cuid from "cuid";

export type SpeakState = {
  folders: Fold[];
  files: File[];
  // check: boolean;
};

export const initialState: SpeakState = {
  folders: [
    {
      folderId: 1,
      name: "I LOVE RA-MEN",
      text: "A",
      opened: true,
    },
    {
      folderId: 2,
      name: "髭男 IS LIFE",
      text: "B",
      opened: true,
    },
    {
      folderId: 3,
      name: "YOASOBI MO IIYONE!",
      text: "C",
      opened: false,
    },
  ],
  files: [
    {
      folderId: 1,
      fileId: 1,
      name: "魚介とんこつ最強説",
      text: "AA",
      checked: true,
      listening: true,
    },
    {
      folderId: 1,
      fileId: 2,
      name: "あああああああああああああああいいいいいいいいいいいいいい",
      text: "明日はつけ麺食べたい",
      checked: true,
      listening: false,
    },
    {
      folderId: 1,
      fileId: 3,
      name: "明後日は豚骨ラーメン食べたい",
      text: "012345678901234567890123456789012345678901234567890123456789",
      checked: false,
      listening: true,
    },
    {
      folderId: 1,
      fileId: 4,
      name: "しょうゆ・塩・豚骨・鶏・酸辣湯麺",
      text: "DD",
      checked: false,
      listening: false,
    },
    {
      folderId: 2,
      fileId: 1,
      name: "Pretender",
      text: "AA",
      checked: false,
      listening: false,
    },
    {
      folderId: 2,
      fileId: 2,
      name: "I LOVE...",
      text: "BB",
      checked: false,
      listening: true,
    },
    {
      folderId: 2,
      fileId: 3,
      name: "Stand By You",
      text: "CC",
      checked: false,
      listening: false,
    },
    {
      folderId: 3,
      fileId: 1,
      name: "夜に歩く",
      text: "AA",
      checked: false,
      listening: true,
    },
    {
      folderId: 3,
      fileId: 2,
      name: "夜に早歩く",
      text: "BB",
      checked: false,
      listening: false,
    },
    {
      folderId: 3,
      fileId: 3,
      name: "夜に走る",
      text: "CC",
      checked: false,
      listening: false,
    },
    {
      folderId: 3,
      fileId: 4,
      name: "夜にコケる",
      text: "DD",
      checked: false,
      listening: true,
    },
    {
      folderId: 3,
      fileId: 5,
      name: "夜に駆ける",
      text: "EE",
      checked: false,
      listening: false,
    },
  ],
};

const speakReducer: Reducer<SpeakState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.CLICK_FOLDER: {
      state.folders.map((folder) => {
        if (folder.folderId === action.payload.id) {
          folder.opened = !folder.opened;
        }
      });
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
      state.files.map((file) => {
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
