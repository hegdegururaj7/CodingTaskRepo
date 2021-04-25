export interface DataAdapter<TData, TModel>{
    map(item:TData):TModel
}