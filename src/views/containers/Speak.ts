import { connect } from "react-redux";

import { AppState } from "../../state/store";
import { operations } from "../../state/speak";
import Component from "../pages/Speak";
import { Fold } from "speak";

const mapStateToProps = (state: AppState) => ({
  // folders: {
  //   ...state.speak.folders,
  //   // speak: selectors.getVisibleFolders(state.speak.folders, state.speak.check),
  // },
  folders: [],
});

const mapDispatchToProps = {
  folderAdd: operations.folderAdd,
  folderDel: operations.folderDel,
  fileAdd: operations.fileAdd,
  fileDel: operations.fileDel,
  musicStart: operations.musicStart,
  musicStop: operations.musicStop,
  musicEnd: operations.musicEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
