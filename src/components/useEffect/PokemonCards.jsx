export const PokemonCards = ({ pokemonData }) => {
    return (
        <li className="pokemon-card">
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default}
                alt={pokemonData.name}
                className="pokemon-image"
                />
            </figure>

            <h1 className="pokemon-name">{pokemonData.name}</h1>

            <div className="pokemon-highlight pokemon-info">
                <p>
                    {pokemonData.types.map((curType) => curType.type.name).join(", ")}
                </p>
            </div>

            <div className="li-main-div">
            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span>Height:</span>{pokemonData.height}
                </p>

                <p className="pokemon-info">
                    <span>Weight:</span>{pokemonData.weight}
                </p>

                <p className="pokemon-info">
                    <span>Speed:</span>{pokemonData.stats[5].base_stat}
                </p>
            </div>

            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span>Experince:</span>{pokemonData.base_experience}
                </p>

                <p className="pokemon-info">
                    <span>Attack:</span>{pokemonData.stats[1].base_stat}
                </p>

                <p className="pokemon-info">
                    <span>Speed:</span>
                  {
                    pokemonData.abilities
                    .map((abilityInfo) => abilityInfo.ability.name)
                    .slice(0,1)
                    .join(", ")
                   }
                </p>
            </div>
            </div>
        </li>
    )
}