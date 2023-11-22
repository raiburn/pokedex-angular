import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  searchTerm = '';
  baseImageUrl = "../../assets/";
  imageType = ".png"

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemonDetails(1);
    // this.route.params.subscribe(params => {
    //   const pokemonId = +params['id'];
    // });
  }

  getPokemonDetails (id: number) {
    this.pokemonService.getPokemon(id).subscribe((data: any) => {
      this.pokemon = data;
    });
  }

  searchPokemon() {
    this.pokemonService.searchPokemon(this.searchTerm).subscribe((data) => {
      this.pokemon = data;
      console.log(data.id)
    });
  }

  SearchAbove(id: number){
    this.pokemonService.getPokemon(id+1).subscribe((data) => {
      this.pokemon = data;
      console.log(data.id)
    });
  }

}
