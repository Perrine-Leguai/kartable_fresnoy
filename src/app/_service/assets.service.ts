import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigVarsService } from './config-vars.service';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(
    private http: HttpClient,
    private configVar : ConfigVarsService,
  ) { }


  //////////  POST

  //creat new gallery
  postNewGallery( label: string, description: string, ){

    let postGallery = this.http.post(this.configVar.urlAsset +"gallery",
                                      {
                                        label: label,
                                        description:  description
                                      },
                                      { observe: 'body'}
                                    );
    return postGallery;
  }


  //creat new medium
  postNewMedium (position: number, label: string, description: string, picture: string, medium: string, file: string, gallery: string ){
    let postMedium = this.http.post(this.configVar.urlAsset+"medium",
                                      {
                                        position : position,
                                        label: label,
                                        description: description,
                                        picture: picture,
                                        medium_url: medium,
                                        file: file,
                                        gallery: gallery
                                      },
                                      {observe: 'body'}
                                    );

    return postMedium;
  }
}
