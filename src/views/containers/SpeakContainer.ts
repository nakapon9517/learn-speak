import { Dispatch } from "redux";
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clickFolder(id: string, opened: boolean) {
      dispatch(operations.clickFolder(id, opened));
    },
    folderAdd() {
      dispatch(operations.folderAdd());
    },
    folderDel() {
      dispatch(operations.folderDel());
    },
    fileAdd() {
      dispatch(operations.fileAdd());
    },
    fileDel() {
      dispatch(operations.fileDel());
    },
    musicStart() {
      dispatch(operations.musicStart());
    },
    musicStop() {
      dispatch(operations.musicStop());
    },
    musicEnd() {
      dispatch(operations.musicEnd());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
