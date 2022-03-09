export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';

export const selectActivity = (id) => ({
  type: SELECT_ACTIVITY,
  activityID: id,
})