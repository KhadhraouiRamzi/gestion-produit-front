import { DetailPlateformeComponent } from '../pages/layout/palteforme-mgmnt/detail-plateforme/detail-plateforme.component';
import { album } from './album';
 import { plateforme } from './plateforme';
import { user } from './user';

export class chanson {
    id: Number;
    nom: String;
    datec: Date;
    featuring: String;
    genre: string;
    rbt_src: String;
    type: String;
    user : user;
    plateforme : plateforme;
    album : album;
   }