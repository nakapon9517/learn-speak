import { connect } from "react-redux";

import { AppState } from "../../state/store";
import { operations } from "../../state/speak";
import Component from "../pages/Speak";

const mapStateToProps = (state: AppState) => ({
  folders: [
    ...state.speak.folders,
    // {
    //   id: "2",
    //   name: "Official髭男dism",
    //   text: "B",
    //   opened: false,
    //   file: [
    //     { id: "1", name: "Pretender", text: "AA", listening: false },
    //     { id: "2", name: "I LOVE...", text: "BB", listening: false },
    //     { id: "3", name: "Stand By You", text: "CC", listening: false },
    //   ],
    // },
  ],
});

const mapDispatchToProps = {
  clickFolder: operations.clickFolder,
  folderAdd: operations.folderAdd,
  folderDel: operations.folderDel,
  fileAdd: operations.fileAdd,
  fileDel: operations.fileDel,
  musicStart: operations.musicStart,
  musicStop: operations.musicStop,
  musicEnd: operations.musicEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
