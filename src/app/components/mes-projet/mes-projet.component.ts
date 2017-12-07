import { Component, OnInit } from '@angular/core';
import {ProjetService} from 'app/services/index';
import{Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-mes-projet',
  templateUrl: './mes-projet.component.html',
  styleUrls: ['./mes-projet.component.css']
})
export class MesProjetComponent implements OnInit {

  //myprojects: File[]=[];
  model: any = {};
  currentUser:string;
  projet: Array<string>;
  //Allprojets: Observable<Projet[]>;

  constructor(private projetService: ProjetService) {
    this.load();
  }

  ngOnInit() {

  }
  //chargement de la liste de projets du courant utilisateur
  load() {
    this.model=this.projetService.oneSelf();
  }
  search(word:string){}
  edit(){ }
  IsAdmin(){}
  select(name: string){
    //creation d'un token courant projet
    //qui contient le projet qui sera consulter
    localStorage.setItem('currentProjet',JSON.stringify(name));
  }
  //generateArray converti une liste en object
  generateArray(obj){
    return Object.keys(obj)
      .map((key)=>{ return {key:key, value:obj[key]}});
  }
}
