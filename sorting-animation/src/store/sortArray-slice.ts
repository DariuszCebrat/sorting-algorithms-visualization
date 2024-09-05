import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {  SortItem, DataForAnimation } from "../models/Sort";
import { v4 as getId } from "uuid";

type sortArrayState={
    items:SortItem[];
    isFinished:boolean;
    animationData:DataForAnimation
}
const initialState:sortArrayState = {
    items:[],
    isFinished:true,
    animationData:{left:"",right:"",toLeft:false}
}
export const sortArraySlice = createSlice({
    name:"sortArray",
    initialState,
    reducers:{
        createNewArray(state,action:PayloadAction<number>){
            state.isFinished=false;
            const randomArray: SortItem[] = [];
            for (let i = 0; i < action.payload; i++) {
                const randomValue = Math.floor(Math.random() * 100) + 1;
                randomArray.push({value:randomValue,isSorting:false,id:getId()});
            }
            state.items= randomArray;
        },
        handleMergeSort(state,action:PayloadAction)
        {
          const result =  mergeSort(state.items,state.animationData);
          state.items=result;
          state.isFinished = true;
        }
    }
});

export const {createNewArray,handleMergeSort} = sortArraySlice.actions;

function mergeSort(array:SortItem[],aData:DataForAnimation):SortItem[] {
    const half = array.length / 2
    if (array.length < 2){
    return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left,aData),mergeSort(array,aData),aData)
}
  
function merge(left:SortItem[], right:SortItem[],aData:DataForAnimation):SortItem[] {
    let arr:(SortItem|undefined)[] = [];

    while (left.length && right.length) {
        if (left[0].value < right[0].value) {
            arr.push(left.shift())
        } else {
            aData.toLeft=true;
            aData.left = left[0].id;
            aData.right = right[0].id;
            arr.push(right.shift());
        }
    }

        return [ ...arr as SortItem[], ...left, ...right ] 
}

 