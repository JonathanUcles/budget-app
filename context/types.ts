export type Action = {
    type: "ADD_EXPENSE";
    payload: {
        id: number | any;
        label: string;
        amount: number;
        
    };

} | {
    type: "DELETE_EXPENSE";
    payload: number;

} | {
    type:'SET_INCOME';
    payload: {
        amount:number
    }
}