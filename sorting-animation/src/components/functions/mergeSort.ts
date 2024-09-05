import { AppDispatch, RootState } from "../../store/store";
import { SortItem } from "../../models/Sort";
import {
  finishSorting,
  setComparing,
  setSortedItems,
  startSorting,
} from "../../store/sortArray-slice";

async function mergeSort(
  dispatch: AppDispatch,
  array: SortItem[],
  delay: number
): Promise<SortItem[]> {
  if (array.length < 2) return array;

  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);

  return await merge(
    dispatch,
    await mergeSort(dispatch, left, delay),
    await mergeSort(dispatch, right, delay),
    delay
  );
}

async function merge(
  dispatch: AppDispatch,
  left: SortItem[],
  right: SortItem[],
  delay: number
): Promise<SortItem[]> {
  let result: SortItem[] = [];

  while (left.length && right.length) {
    dispatch(
      setComparing({
        left: left[0].id,
        right: right[0].id,
        changePlaces: !(left[0].value < right[0].value),
      })
    );

    if (left[0].value < right[0].value) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
    await new Promise((resolve) => setTimeout(resolve, delay)); 
  }

  return [...result, ...left, ...right];
}

export const startMergeSort = (delay: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { items } = getState().sortArray;
    dispatch(startSorting());
    const sortedArray = await mergeSort(dispatch, items, delay);
    dispatch(setSortedItems(sortedArray));
    dispatch(finishSorting());
  };
};
