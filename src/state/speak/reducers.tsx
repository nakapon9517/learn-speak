import { Reducer } from "redux";
import { Folder, File } from "speak";
import { Actions, ActionTypes } from "./actions";
import cuid from "cuid";

export type State = {
  folders: Folder[];
  check: boolean;
};

export const initialState: State = {
  folders: [],
  check: false,
};

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FOLDER_ADD: {
      alert(cuid());
    }

    case ActionTypes.FOLDER_DEL: {
      alert("folder.del");
    }

    case ActionTypes.FILE_ADD: {
      alert("file.add");
    }

    case ActionTypes.FILE_DEL: {
      alert("file.del");
    }

    case ActionTypes.MUSIC_START: {
      alert("music.start");
    }
    case ActionTypes.MUSIC_STOP: {
      alert("music.stop");
    }
    case ActionTypes.MUSIC_END: {
      alert("music.end");
    }

    default: {
      return state;
    }
  }
};

export default reducer;
