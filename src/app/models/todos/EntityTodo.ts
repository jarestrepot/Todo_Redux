export class EntityTodo{

  #id: number;
  #text: string;
  #complete: boolean;
  constructor( text: string ){
    this.#id = new Date().getTime();
    this.#text = text;
    this.#complete = false;
  }

}
