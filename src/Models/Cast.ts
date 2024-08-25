export interface Cast {
    id:       number;
    
    name?:     string;
   
   
    image?:    Image;  
}
export interface Image {
    medium:   string;
    original: string;
}