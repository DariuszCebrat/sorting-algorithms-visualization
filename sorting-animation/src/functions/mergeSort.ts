import { AppDispatch, RootState } from "../store/store";
import { SortItem } from "../models/Sort";
import {
  finishSorting,
  setComparing,
  setMovedData,
  setSortedItems,
  startSorting,
} from "../store/sortArray-slice";


async function mergeSort(dispatch:AppDispatch, arr: SortItem[], delay:number): Promise<SortItem[]> {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(dispatch,arr.slice(0, mid),delay);
    const right = await mergeSort(dispatch,arr.slice(mid),delay);

    return await merge(left, right, dispatch,delay);
}

async function merge(left: SortItem[], right: SortItem[], dispatch: AppDispatch,delay:number): Promise<SortItem[]> {
    const result: SortItem[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        dispatch(setComparing({left:left[i].id, right:right[j].id}));
        await new Promise((resolve) => setTimeout(resolve, delay)); 
        const changePlaces = !(left[i].value <= right[j].value);
        if(changePlaces)
        {
            dispatch(setMovedData({right:right[j].id, left:left[i].id}))
            await new Promise((resolve) => setTimeout(resolve, delay)); 
        }
        if (left[i].value <= right[j].value) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;

    }

    while (j < right.length) {

        result.push(right[j]);
        j++;

    }

    return result;
}
export const startMergeSort = (delay: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { items } = getState().sortArray;
    dispatch(startSorting());
    const sortedArray = await mergeSort(dispatch,[...items], delay);
    dispatch(setSortedItems(sortedArray));
    dispatch(finishSorting());
  };
};
