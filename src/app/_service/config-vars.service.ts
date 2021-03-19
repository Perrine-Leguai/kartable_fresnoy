import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigVarsService {

  constructor() { }

  //V1 var
  urlV1ArtworkResearch  = "http://127.0.0.1:8000/v1/production/artwork/search?q=";
  urlV1Artwork          = "http://127.0.0.1:8000/v1/production/artwork/";

  //V2 var
  urlAsset        = "http://localhost:8000/v2/assets/";
  urlV2Artwork    = "http://localhost:8000/v2/production/artwork/";
  urlV2People     = "http://127.0.0.1:8000/v2/people/";
  urlV2PeopleUser = "http://127.0.0.1:8000/v2/people/user";
  urlV2RestAuth   = "http://localhost:8000/v2/rest-auth/";
}
