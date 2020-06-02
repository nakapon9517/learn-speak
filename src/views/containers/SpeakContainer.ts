import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../state/store";
import { operations } from "../../state/speak";
import Component from "../pages/Speak";

const mapStateToProps = (state: AppState) => ({
  folders: [...state.speak.folders],
  files: [...state.speak.files],
  type: state.speak.type,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeType(changeType: string) {
      dispatch(operations.changeType(changeType));
    },
    changeSearch(text: string) {
      dispatch(operations.changeSearch(text));
    },
    clickFolder(id: string, opened: boolean) {
      dispatch(operations.clickFolder(id, opened));
    },
    clickPlay(folderId: number, fileId: number, playBefore: boolean) {
      dispatch(operations.clickPlay(folderId, fileId, playBefore));
    },
    clickFile(folderId: number, fileId: number, checked: boolean) {
      dispatch(operations.clickFile(folderId, fileId, checked));
    },
    clickAll(checked: boolean) {
      dispatch(operations.clickAll(checked));
    },
    folderAdd(name: string, category: string) {
      dispatch(operations.folderAdd(name, category));
    },
    folderDel() {
      dispatch(operations.folderDel());
    },
    fileAdd(folderId: number, name: string, text: string) {
      dispatch(operations.fileAdd(folderId, name, text));
    },
    fileDel(folderId: number, fileId: number) {
      dispatch(operations.fileDel(folderId, fileId));
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
