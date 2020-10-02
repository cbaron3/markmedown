import { LESSONS } from "../Lessons/";
// Evaluate any actions that were submitted
import {
  PROGRESS_BACK_BTN_CLICKED,
  PROGRESS_FORWARD_BTN_CLICKED,
  MD_REQS_MET,
  MD_REQS_NOT_MET,
  SETTINGS_MODIFIED,
  ACTIVE_FILE_CHANGED,
  MD_TEXT_MODIFIED,
} from "./Actions";

const initialStore = {
  editorText: Array(LESSONS.length)
    .fill()
    .map(() => ""),
  lessonIndex: 0,
  previousText: "",
  activeText: "",
  reqsMet: false,
  settings: {
    color: "",
    font: "",
    theme: "",
  },
  activeFile: "",
};

export default function (state = initialStore, action) {
  switch (action.type) {
    case PROGRESS_BACK_BTN_CLICKED: {
      // Update index if within range
      let newLessonIndex = state.lessonIndex;
      if (newLessonIndex > 0) {
        newLessonIndex--;
      }

      console.log(
        "Back button clicked. Old: ",
        state.lessonIndex,
        " New: ",
        newLessonIndex
      );

      return {
        ...state,
        lessonIndex: newLessonIndex,
        activeText: state.editorText[newLessonIndex],
      };
    }

    case PROGRESS_FORWARD_BTN_CLICKED: {
      // Update index if within range
      let newLessonIndex = state.lessonIndex;
      if (newLessonIndex >= 0 && newLessonIndex < LESSONS.length - 1) {
        newLessonIndex++;
      }

      console.log(
        "Forward button clicked. Old: ",
        state.lessonIndex,
        " New: ",
        newLessonIndex
      );

      let newActiveText = state.activeText;
      if (state.editorText[newLessonIndex] !== "") {
        newActiveText = state.editorText[newLessonIndex];
      }
      return {
        ...state,
        lessonIndex: newLessonIndex,

        activeText: newActiveText,
      };
    }

    case MD_REQS_MET:
      return {
        ...state,
        reqsMet: true,
      };

    case MD_REQS_NOT_MET:
      return {
        ...state,
        reqsMet: false,
      };

    case SETTINGS_MODIFIED:
      // TODO: Update settings that are new?
      return {
        ...state,
        settings: action.payload,
      };

    case ACTIVE_FILE_CHANGED:
      // TODO: validate file?
      return {
        ...state,
        activeFile: action.payload,
      };

    case MD_TEXT_MODIFIED:
      // TODO: Push only text changes?
      let newEditorText = state.editorText;
      newEditorText[state.lessonIndex] = action.payload;

      console.log();
      console.log(newEditorText[state.lessonIndex]);
      return {
        ...state,
        editorText: newEditorText,
        activeText: newEditorText[state.lessonIndex],
      };

    default:
      return state;
  }
}