import * as actionType from "../Action-Type/SlideActionType";

export function setSlides(slides) {
  return (dispatch) => {
    dispatch({
      type: actionType.slides,
      payload: slides
    })
  }
}

