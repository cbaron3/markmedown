/* ACTION TYPES FOR REDUX */

// Back button clicked, return to previous lesson item
export const PROGRESS_BACK_BTN_CLICKED = "PROGRESS_BACK_BTN_CLICKED";

// Forward button clicked, progress to next lesson item if requirements met
export const PROGRESS_FORWARD_BTN_CLICKED = "PROGRESS_FORWARD_BTN_CLICKED";

// Text in markdown code editor satisfies requirements, make forward button active
export const MD_REQS_MET = "MD_REQS_MET";

// Text in markdown code editor does not satisfy requirements, make forward button inactive
export const MD_REQS_NOT_MET = "MD_REQS_NOT_MET";

// Theme has been changed
export const THEME_MODIFIED = "THEME_MODIFIED";

// The active file in the editor has changed
export const ACTIVE_FILE_CHANGED = "ACTIVE_FILE_CHANGED";

// Markdown editor text contents has changed, store for previewing
export const MD_TEXT_MODIFIED = "MD_TEXT_MODIFIED";

export const goToPreviousLesson = () => (dispatch) => {
  // Dispatch a back button clicked action
  dispatch({
    type: PROGRESS_BACK_BTN_CLICKED,
  });
};

export const goToNextLesson = () => (dispatch) => {
  // Dispatch a forward button clicked action
  dispatch({
    type: PROGRESS_FORWARD_BTN_CLICKED,
  });
};

export const lessonReqsMet = () => (dispatch) => {
  // Dispatch a message notifying that the lesson requirements have been met
  dispatch({
    type: MD_REQS_MET,
  });
};

export const lessonReqsNotMet = () => (dispatch) => {
  // Dispatch a message notifying that the lesson requirements have not been met
  dispatch({
    type: MD_REQS_NOT_MET,
  });
};

export const themeModified = (data) => (dispatch) => {
  // Dispatch a settings modified message with the new setting state as the payload
  dispatch({
    type: THEME_MODIFIED,
    payload: data,
  });
};

// if file is README.md, change to editor area. If file is logo or demo, show previewer
export const fileChanged = (file) => (dispatch) => {
  // Dispatch a file changed message with the new file path that is active
  dispatch({
    type: ACTIVE_FILE_CHANGED,
    payload: file,
  });
};

export const mdTextModified = (text) => (dispatch) => {
  dispatch({
    type: MD_TEXT_MODIFIED,
    payload: text,
  });
};
