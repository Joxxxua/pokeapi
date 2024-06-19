
const url = 'https://pokeapi.co/api/v2/pokemon/1'; 


async function buscarDadosPokemon(url) {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro HTTP! status: ${resposta.status}`);
        }
        const dados = await resposta.json(); 
        
       
        const dadosFiltrados = {
            nome: dados.name,
            id: dados.id,
            altura: dados.height,
            peso: dados.weight,
            habilidades: dados.abilities.map(habilidade => habilidade.ability.name),
            tipos: dados.types.map(tipo => tipo.type.name),
        };
        
        console.log(dadosFiltrados); 
        return dadosFiltrados; 
    } catch (erro) {
        console.error('Erro ao buscar dados do Pokémon:', erro);
    }
}
""
buscarDadosPokemon(url);
