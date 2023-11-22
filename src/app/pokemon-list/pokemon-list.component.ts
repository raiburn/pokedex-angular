import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.getPokemonList("battle-armor");
  }

  getPokemonList(id: string) {
    this.pokemonService.getPokemonList(id).subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  viewPokemonDetails(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}