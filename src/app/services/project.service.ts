import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import{Observable} from 'rxjs/Observable';


@Injectable()

export class ProjetService {
  Project:any={};


  constructor() {

  }

  //Obtention de la liste de tous les projets
  getAll(){

  }
  //Obtention du modèle du projet à partir de son id
  getModel(id:number){

  }

  //Création d'un nouveau projet
  create(titre:string, adminId?:number, userList?:[number]){

  }
  //suppression d'un projet
  //a modifier: au lieu de id avoir le modele Project...donne des erreurs...
  delete(projectId:number){

  }

  //Modification des données d'un projet
  //meme probleme qu'avec delete
  edit(projectId: number){

  }

}