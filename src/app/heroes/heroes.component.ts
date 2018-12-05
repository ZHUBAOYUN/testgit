import { Component, OnInit } from '@angular/core';
import{ Hero } from '../Hero'
import{ HeroService} from '../hero.service'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros:Hero[];
  getHeroes():void{
    this.heroService.getHeroes()
        .subscribe(heros=>this.heros=heros)
  };
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  add(name:string):void{
    name=name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero)
     .subscribe(hero=>{this.heros.push(hero)});
  }
  delete(hero:Hero):void{
    this.heros=this.heros.filter(h=>h!=hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  constructor(private heroService:HeroService) { }

  
  ngOnInit() {
    this.getHeroes();
    console.log(this.heros)
  }

}
