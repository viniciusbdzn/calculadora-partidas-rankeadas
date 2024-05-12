
const saldoPartidasRankeadas = function(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
    
    if(saldoVitorias <= 10) {nivel = "Ferro"} 
    else if (saldoVitorias > 10 && saldoVitorias <= 20) {nivel = "Bronze"} 
    else if (saldoVitorias > 20 && saldoVitorias <= 50) {nivel = "Prata"} 
    else if (saldoVitorias > 50 && saldoVitorias <= 80) {nivel = "Ouro"} 
    else if (saldoVitorias > 80 && saldoVitorias <= 90) {nivel = "Diamante"} 
    else if (saldoVitorias > 90 && saldoVitorias <= 100) {nivel = "Lendário"} 
    else if (saldoVitorias >= 101) {nivel = "Imortal"}
    
    const mensagemResultado = console.log(`O Herói tem saldo de ${saldoVitorias} vitórias, e está no nível de ${nivel}`);
    return mensagemResultado;
}

saldoPartidasRankeadas(100, 37);
saldoPartidasRankeadas(90, 70);
saldoPartidasRankeadas(50, 42);
saldoPartidasRankeadas(130, 29);
saldoPartidasRankeadas(50, 28);
saldoPartidasRankeadas(94, 2);
saldoPartidasRankeadas(90, 9);