export class StringUtil{
    static empty(data:any):boolean{
        if(!(data===undefined||data===null||data==='')){
            return false;
        }
        
        return true;
    };

}