console.log("Você toca algum instrumento musical?");

let resposta;
let instrumento;

process.stdin.on("data", function(data) {
    let entrada = data.toString().trim().toLowerCase();

    if (!resposta) {
        resposta = entrada;
        if (resposta === "sim" || resposta === "s") {
            console.log("Que ótimo!");
            console.log("Digite o nome do instrumento que você toca:");
        } else if (resposta === "n" || resposta === "não" || resposta === "nao") {
            console.log("Que pena!");
            process.exit();
        } else {
            console.log("Escreva uma resposta válida: sim(s) ou não(n)");
            resposta = undefined;
        }
    } else {
        // Neste ponto, a resposta já foi dada e estamos esperando pelo nome do instrumento
        instrumento = entrada;
        switch (instrumento) {
            case "violão":
            case "violao":
                console.log("Adoro violão. Toca alguma música diferente para mim?");
                console.log("Toca algum outro instrumento?");
                break;
            case "violino":
                console.log("Que chique!");
                console.log("Toca algum outro instrumento?");
                break;
            case "pandeiro":
                console.log("Aposto que gosta de um pagodinho!");
                console.log("Toca algum outro instrumento?");
                break;
            case "não":
            case "n":
            case "nao":
                console.log("Que pena!");
                process.exit();
                break;
            default:
                console.log("Não conheço esse instrumento.");
                console.log("Toca algum outro instrumento?");
                break;
        }
        instrumento = undefined;
    }
});
