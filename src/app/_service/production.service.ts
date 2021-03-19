import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Artwork } from '../_model/artwork.model';
import { ConfigVarsService } from './config-vars.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  // api_v1_login = "pleguai";
  // api_v1_password = "Fresnoy2021!!";  // __Fre$NOY__20XX__
  // // url write
  // url_api = "http://"+ this.api_v1_login +":"+ this.api_v1_password +"@127.0.0.1:8000";
  constructor(
    private http : HttpClient,
    private configVar : ConfigVarsService,
    ) { }


//////////  GET
  //get artworks infos
  getArtworkInfos(keyup : string){
    let getArtworkInfos = this.http.get<Artwork[]>(this.configVar.urlV1ArtworkResearch+keyup,
                                                    {observe: 'body',}
                                                  )

    return getArtworkInfos
  }

  //get artwork info of a specific film
  getOneArtworkInfo(id: number){
    let getOneArtworkInfo = this.http.get<Artwork>(this.configVar.urlV1Artwork+id,
                                                    {observe: 'body',}
                                                  )
    return getOneArtworkInfo;
  }

//////////  PATCH

  patchArtworkInfo( artwokId: number, wichArtworkProperty: string, newValue : any, type: string){

    let patchArtworkInfo = this.http.patch(this.configVar.urlV2Artwork+ artwokId,
                                            {
                                              [wichArtworkProperty] : newValue,
                                              type: type
                                            },
                                            { observe: 'body'}
                                          );
    return patchArtworkInfo;
  }



}
