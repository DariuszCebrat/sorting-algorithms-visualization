import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
type DispatchFunction= ()=>AppDispatch;
export const useSortArrayDispatch : DispatchFunction = useDispatch;
export const useSortArraySelector : TypedUseSelectorHook<RootState> = useSelector;
