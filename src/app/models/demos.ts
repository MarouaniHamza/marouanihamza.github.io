class Demo {
    private _path: string=""
    private _title: string ="";
    private _description: string ="";
    private _link="";

    constructor(_path: string, _title: string, _description: string, _link: string){
        this._path = _path;
        this._title = _title;
        this._description = _description;
        this._link = _link;
    }

    get path(){
        return this._path;
    }

    get title(){
        return this._title;
    }

    get description(){
        return this._description;
    }

    get link(){
        return this._link;
    }
}

export class DEMOS {

    static randomQuotes = new Demo("random-quotes","Random Quotes","","Open"); 
    static markdownPreviewer = new Demo("markdown-previewer","Markdown Previewer","","Open");
    static drumMachine = new Demo("drum-machine","Drum Machine","","Open");
    static javaScriptCalculator = new Demo("calculator","JavaScript Calculator","","Open"); 
    static a25Clock = new Demo("clock-25-5","A 25 + 5 Clock","","Open");

    static values(): Demo[]{
        return [this.randomQuotes, 
            this.markdownPreviewer,
            this.drumMachine,
            this.javaScriptCalculator,
            this.a25Clock
        ];
    }

}