document.addEventListener("DOMContentLoaded", () => {
    const noticias = [
        { titulo: "Promoção Relâmpago!", texto: "Aproveite descontos de até 50% esta semana." },
        { titulo: "Novos Produtos", texto: "Acabamos de adicionar novas categorias na loja." },
        { titulo: "Entrega Rápida", texto: "Agora entregamos em até 24 horas em capitais." }
    ];

    const container = document.getElementById("noticias");
    if (container) {
        noticias.forEach(noticia => {
            const card = document.createElement("div");
            card.className = "bg-gray-800 p-4 rounded shadow";
            card.innerHTML = `<h3 class="text-lg text-purple-300">${noticia.titulo}</h3>
                              <p class="text-gray-400">${noticia.texto}</p>`;
            container.appendChild(card);
        });
    }
});
