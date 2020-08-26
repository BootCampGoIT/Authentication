import { createSelector } from 'reselect';

export const getTodoItemsSelector = (state) => state.tasks;

const getFilterValueSelector = (state) => {
    return state.filter
};
export const getFilteredArr = (state) =>
    state.tasks.length




// export const getFilterValue = createSelector(
//     getFilterValueSelector,
//     (filter) => filter
// )

// export const getFilteredArrSelector = createSelector(
//     getTodoItemsSelector,
//     getFilterValueSelector,
//     (list, filter) => list.filter(item => item.task.toLowerCase().includes(filter.toLowerCase()))
// )

// export const getNewTodoItemsSelector = createSelector(
//     getTodoItemsSelector,
//     (result) => result
// )

