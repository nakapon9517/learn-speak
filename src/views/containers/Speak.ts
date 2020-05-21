import { connect } from "react-redux";

import { AppState } from "../../state/store";
import { operations, selectors } from "../../state/speak";
import Component from "../pages/Speak";

const mapStateToProps = (state: AppState) => ({
  speak: {
    ...state.state.folders,
    speak: selectors.getVisibleFolders(state.state.folders, state.state.check),
  },
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
