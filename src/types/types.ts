export type TBody={
    id:number,
    image:string,
    title:string,
    text:string,
    reverse:boolean
};
export type THeader={
        id:number,
        name:string
}
export type TAccordion ={
    id?:number,
    text:string,
    title:string,
}
export type TFooter={
    id:number,
    text:string,
}
export type TData={
    id:number,
    firstName:string,
    LastName:string,
    email:string,
    password:string,
    gender:"male" | "female"
}

