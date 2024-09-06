import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {  SortItem, DataForAnimation, MovedData } from "../models/Sort";
import { v4 as getId } from "uuid";

type sortArrayState={
    items:SortItem[];
    isFinished:boolean;
    animationData:DataForAnimation;
    movedData:MovedData;
}
const initialState:sortArrayState = {
    items:[],
    isFinished:true,
    animationData: { left: "", right: "" },
    movedData:{right:"",left:"",newLeftValue:0,newRightValue:0}
}
export const sortArraySlice = createSlice({
    name:"sortArray",
    initialState,
    reducers:{
        createNewArray(state,action:PayloadAction<number>){
            state.isFinished=true;
            const randomArray: SortItem[] = [];
            for (let i = 0; i < action.payload; i++) {
                const randomValue = Math.floor(Math.random() * 100) + 1;
                randomArray.push({value:randomValue,id:getId()});
            }
            state.items= randomArray;
        },
        setComparing(state, action: PayloadAction<{ left: string; right: string }>) {
         state.animationData = action.payload;
        },
        setSortedItems(state, action: PayloadAction<SortItem[]>) {
            state.items = action.payload;
        },
        finishSorting(state) {
            state.isFinished = true;
            state.animationData={left:"",right:""};
        },
        startSorting(state){
            state.isFinished=false;
        },
        setMovedData(state,action:PayloadAction<{left:string,right:string,newLeftValue:number,newRightValue:number}>)
        {
            state.movedData = action.payload;
        }
    }
});

export const {createNewArray,setComparing,setSortedItems,finishSorting,startSorting,setMovedData} = sortArraySlice.actions;

