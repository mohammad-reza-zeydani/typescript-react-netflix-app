export type TBody={
    id:number,
    image:string,
    title:string,
    text:string,
    reverse:boolean
};
import { FieldErrors, UseFormRegister } from "react-hook-form";
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
export type TUserData={
    id:number,
    firstName:string,
    LastName:string,
    email:string,
    password:string,
    gender:"male" | "female"
}
export type TSignInAndSignOut={
    text:string
    link:string
    linkText:string
    title:string
    errors:FieldErrors<TUserData>,
    register:UseFormRegister<TUserData>
}
type Object ={
    name:string
    avatar: string
}
export type TMovies ={
        id: number,
        name:string,
        cast:Object[],
        genre: string
        type:string,
        text:string,
        image:string,
        color:string,
        btnColor:string
}
export type TGetMoviesDataProps={
    data:TMovies[]
    isLoading:boolean,
    isError:boolean,
    error:Error | null
}