import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigVarsService } from './config-vars.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(
    private http: HttpClient,
    private config : ConfigVarsService
  ) { }

  delete( type: string, id: number){
    console.log(type, id, this.config.urlAsset+type+"/"+id);
    this.http.delete(this.config.urlAsset+type+"/"+id);

  }
}
