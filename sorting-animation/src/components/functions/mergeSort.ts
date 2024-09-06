import { AppDispatch, RootState } from "../../store/store";
import { SortItem } from "../../models/Sort";
import {
  finishSorting,
  setComparing,
  setMovedData,
  setSortedItems,
  startSorting,
} from "../../store/sortArray-slice";
////  

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
        let tempItem:SortItem;
        const changePlaces = !(left[i].value <= right[j].value);
        if (left[i].value <= right[j].value) {
            tempItem = right[j];
            result.push(left[i]);
            i++;
        } else {
            tempItem = left[i];
            result.push(right[j]);
            j++;
        }
         if(result.length>0 && changePlaces)
             dispatch(setMovedData({right:result[result.length-1].id, left:tempItem.id,newLeftValue:result[result.length-1].value,newRightValue:tempItem.value}))
         await new Promise((resolve) => setTimeout(resolve, delay)); 

    }

    // Remaining elements from left array
    while (i < left.length) {
        const tempItem = result[result.length-1];
        result.push(left[i]);
       dispatch(setMovedData({right:result[result.length-1].id, left:tempItem.id,newLeftValue:result[result.length-1].value,newRightValue:tempItem.value}))
        await new Promise((resolve) => setTimeout(resolve, delay)); 
        i++;

    }

    // Remaining elements from right array
    while (j < right.length) {

        const tempItem = result[result.length-1];
        result.push(right[j]);
        dispatch(setMovedData({right:result[result.length-1].id, left:tempItem.id,newLeftValue:result[result.length-1].value,newRightValue:tempItem.value}))
        await new Promise((resolve) => setTimeout(resolve, delay)); 
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
