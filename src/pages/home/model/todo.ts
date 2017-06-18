export class Todo{
    
    public title:String;

    public description:String;
    

    constructor(title: String, description:String){
        this.title=title;
        this.description=description;
    }


    getTitle() :String {
        return this.title;
    }

    getDescription() :String{
        return this.description;
    }
}