/*<h1>To Do List Giammarco Girelli Angular</h1>
<input type="text" placeholder="Cose da fare" #lista>

<button (click)="aggiungiCosa(lista.value)">Aggiungi nuova cosa da fare</button>

<ul *ngFor="let item of listaArray">
  <li>{{item.name}}<button (click)="rimuovi(item.id)">x</button></li>
</ul>*/
import { Modelli } from "./models/modelli";

let listaArray: Modelli[];

export function aggiungiCosa(item:string){

  console.log(item);

  listaArray.push({
    id:listaArray.length+1,
    item:item,completed:false
  })

  console.log(listaArray);
  return listaArray;
}

export function stampaRiga(){
  aggiungiCosa;
}

export function rimuovi(i:number){

  listaArray.splice(i,1);

}
