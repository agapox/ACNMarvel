import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from './classes/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private protocol = 'https:';
  private ApiUrl = '//gateway.marvel.com:443/v1/public/';
  private APIKEY = '56d2cc44b1c84eb7c6c9673565a9eb4b';
  public heroes: Array<Heroe> = [];
  public page = 0;
  public step = 20;
  public total = 0;
  public group_colors = {
    "azul" : "#1f8ff7",
    "violeta":"#a43de3",
    "naranjo":"#df5c0f",
    "verde":"#0ea521"
  }
  public teams = new Map();

  constructor(private http: HttpClient) { }

  getHeroe(id) {
    const url = `${this.protocol}${this.ApiUrl}characters/${id}?apikey=${this.APIKEY}`;
    return this.http.get<any>(url);
  }

  getHeroes (nameStartsWith?: string, page?: number) {
    if (page || page === 0) {
      this.page = page;
    }
    const url = `${this.protocol}${this.ApiUrl}characters?apikey=${this.APIKEY}&offset=${this.page * this.step}${nameStartsWith ? ('&nameStartsWith=' + nameStartsWith) : ''}`;
    this.http.get<any>(url).subscribe((data) => {
        this.heroes = [];
        this.total = Math.ceil(data.data.total / this.step);
      data.data.results.forEach( result => {
          this.heroes.push(new Heroe(
            result.id,
            result.name,
            result.description,
            result.modified,
            result.thumbnail,
            result.resourceURI,
            this.getTeamColor(result.id)
          ));
        }
      );
    });
  }

  resetPager() {
    this.page = 0;
  }

  getTeamColor(id):string{
    if(this.teams.get(id)!=undefined){
    return this.teams.get(id);
    }
    else{
    return "";
    }
  }
}
