import { useEffect, useState } from "react"
import "./pokemon.css"
import { PokemonCards } from "./PokemonCards"

// fetch api 
export const FetchApi = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState("")

    const API = ("https://pokeapi.co/api/v2/pokemon?limit=500")

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()

            const detailPokemonPromise = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            })

            const detailPokemonData = await Promise.all(detailPokemonPromise)
            console.log(detailPokemonData);
            setPokemon(detailPokemonData)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    // input functionility
    const pokemonSearch = pokemon.filter((curSearch) =>
        curSearch.name.toLowerCase().includes(search.toLowerCase())
    )

    // server loading
    if (loading)
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )

    // server error
    if (error)
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )


    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>

            {/* input */}
            <div className="pokemon-search">
                <input type="text" placeholder="Search Pokemon"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            {/* cards */}
          <div className="card-div">
          <ul className="cards">
                {
                    pokemonSearch.map((curPokemon) => {
                        return (
                            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                        )
                    })
                }
            </ul>
          </div>
        </section>
    )
}
