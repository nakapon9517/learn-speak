import { Reducer } from "redux";
import { Fold } from "speak";
import { Actions, ActionTypes } from "./actions";
// import cuid from "cuid";

export type SpeakState = {
  folders: Fold[];
  // check: boolean;
};

export const initialState: SpeakState = {
  folders: [
    {
      id: "1",
      name: "HY & ORANGE RANGE",
      text: "A",
      opened: false,
      file: [
        { id: "1", name: "NAO", text: "AA", listening: false },
        { id: "2", name: "366日", text: "BB", listening: false },
        { id: "3", name: "隆福丸", text: "CC", listening: false },
        { id: "4", name: "ビタミン", text: "DD", listening: false },
      ],
    },
    {
      id: "2",
      name: "Official髭男dism",
      text: "B",
      opened: true,
      file: [
        { id: "1", name: "Pretender", text: "AA", listening: false },
        { id: "2", name: "I LOVE...", text: "BB", listening: false },
        { id: "3", name: "Stand By You", text: "CC", listening: false },
      ],
    },
    {
      id: "3",
      name: "YOASOBI",
      text: "C",
      opened: false,
      file: [
        { id: "1", name: "夜に歩く", text: "AA", listening: false },
        { id: "2", name: "夜に早歩く", text: "BB", listening: false },
        { id: "3", name: "夜に走る", text: "CC", listening: false },
        { id: "4", name: "夜にコケる", text: "DD", listening: false },
        { id: "5", name: "夜に駆ける", text: "EE", listening: false },
      ],
    },
  ],
};

const speakReducer: Reducer<SpeakState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.CLICK_FOLDER: {
      // alert(action.payload.opened);
      let target = action.payload.id;
      state.folders.map((folder) => {
        if (folder.id === target) {
          folder.opened = !folder.opened;
        }
      });
      return {
        ...state,
      };
    }
    case ActionTypes.FOLDER_ADD: {
      // alert(action);
      // alert(cuid());
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
