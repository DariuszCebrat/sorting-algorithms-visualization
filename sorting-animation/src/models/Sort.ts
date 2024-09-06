export const arrayLength=6;
export interface SortItem {
    id:string;
    value:number;
}
export type DataForAnimation = {
    left: string; 
    right: string;
   // changePlaces:boolean;
};
export type MovedData={
    left:string;
    right:string;
    newLeftValue:number;
    newRightValue:number;
}