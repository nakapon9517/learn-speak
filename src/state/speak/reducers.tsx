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
      name: "HY & ORANGE RANGE",
      text: "A",
      opened: true,
    },
    {
      folderId: 2,
      name: "Official髭男dism",
      text: "B",
      opened: true,
    },
    {
      folderId: 3,
      name: "YOASOBI",
      text: "C",
      opened: false,
    },
  ],
  files: [
    {
      folderId: 1,
      fileId: 1,
      name: "NAO",
      text: "AA",
      checked: true,
      listening: true,
    },
    {
      folderId: 1,
      fileId: 2,
      name: "366日",
      text: "BB",
      checked: true,
      listening: false,
    },
    {
      folderId: 1,
      fileId: 3,
      name: "隆福丸",
      text: "CC",
      checked: false,
      listening: true,
    },
    {
      folderId: 1,
      fileId: 4,
      name: "ビタミン",
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
