export const changeDescription = (event) => {
  return {
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
  }
}