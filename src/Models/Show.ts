

export type Show={
    id:string;
    image?:{
        medium:string;
        original:string;
    };
    name:string;
    genres:string[];
    rating:{avverage?:number};
    summary?:string;

}