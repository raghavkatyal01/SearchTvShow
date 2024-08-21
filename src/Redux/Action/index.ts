export type Action<T=any>={
    type:string,
    payload:T,
}
// Action Creator Showing we have have to return action of same type as above
export type ActionCreat<T=undefined>=(...args:any)=> Action<T>
