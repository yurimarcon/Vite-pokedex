<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import CardPokemons from '../components/CardPokemons.vue';
import CardPrincipalPokemon from '../components/CardPrincipalPokemon.vue';

let pokemons = reactive(ref());
let urlImgSvg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
let pokemonSelected = ref(null);
let search = ref('');
let loading = ref(true);
let loadingSelectPokemon = ref(true);

const pokemonsFilteredComputed = computed(()=>{
    if(pokemons.value && search.value){
        return pokemons.value.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(search.value.toLowerCase());
        });
    }else{
        return pokemons.value;
    }
})


async function getPokemons() {
    // loading.value = true;
    await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=648')
        .then(res=>res.json())
        .then(response => {
            pokemons.value = response.results;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            loading.value = false;
        });

}

function selectPokemon(pokemon) {
    loadingSelectPokemon.value = true;
    fetch(pokemon.url)
        .then(res=>res.json())
        .then(response => {
            pokemonSelected.value = response;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            loadingSelectPokemon.value = false;
        });
}

onMounted(() => {
    getPokemons();    
});
</script>

<template>
    <div class="container">

        <div class="row contudo-tela-pokemons">
            <div class="col-12 col-md-6">
                <CardPrincipalPokemon 
                :pokemonSelected=pokemonSelected
                :loading=loadingSelectPokemon
                />
            </div>

            <div class="col-12 col-md-6">
                <div class="card shadow mt-3 px-3">
                    
                    <input 
                    class="form-control form-control-sm mt-3" 
                    type="text" 
                    placeholder="Pesquisar..." 
                    aria-label=".form-control-sm example"
                    v-model="search"
                    >
                    <hr>

                    <div 
                    v-if="loading" 
                    class="spinner-border text-primary text-center mx-auto"
                    role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>

                    <div 
                    class="row listagem-pokemons">
                        <CardPokemons 
                        v-for="pokemon in pokemonsFilteredComputed"
                        :key="pokemon.name"
                        @click="selectPokemon(pokemon)"
                        :name=pokemon.name
                        :url=pokemon.url
                        :urlImgSvg=urlImgSvg
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contudo-tela-pokemons{
    margin-bottom: 100px;
}
.listagem-pokemons{
    max-height: 420px;
    overflow-y: scroll;
}
</style>