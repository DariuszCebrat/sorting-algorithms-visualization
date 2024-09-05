import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {  SortItem, DataForAnimation } from "../models/Sort";
import { v4 as getId } from "uuid";

type sortArrayState={
    items:SortItem[];
    isFinished:boolean;
    animationData:DataForAnimation;
}
const initialState:sortArrayState = {
    items:[],
    isFinished:true,
    animationData: { left: "", right: "",changePlaces:false }
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
                randomArray.push({value:randomValue,isComparing:false,id:getId()});
            }
            state.items= randomArray;
        },
        setComparing(state, action: PayloadAction<{ left: string; right: string,changePlaces:boolean }>) {
         state.animationData = action.payload;
        },
        setSortedItems(state, action: PayloadAction<SortItem[]>) {
            state.items = action.payload;
        },
        finishSorting(state) {
            state.isFinished = true;
            state.animationData={left:"",right:"",changePlaces:false};
        },
        startSorting(state){
            state.isFinished=false;
        }
    }
});

export const {createNewArray,setComparing,setSortedItems,finishSorting,startSorting} = sortArraySlice.actions;

