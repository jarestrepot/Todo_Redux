export class EntityTodo{

  id: number;
  text: string;
  completed: boolean;
  constructor( text: string ){
    this.id = Math.random();
    this.text = text;
    this.completed = false;
  }

  getText():string{
    return this.text;
  }
  getComplete():boolean{
    return this.completed;
  }
  getId(): number{
    return this.id;
  }
  setText(text:string):void{
    this.text = text;
  }
  setComplete(complete:boolean):void{
    this.completed = complete;
  }

}
