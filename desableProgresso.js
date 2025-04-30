document.addEventListener("DOMContentLoaded", () => {
        // Aplica os estilos dinamicamente para desabilitar links
        const style = document.createElement("style");
        style.textContent = `
            .progressEventInfo a {
                pointer-events: none;
            }
         `;
        document.head.appendChild(style);

        // Função para desativar o data-haslink
        const disableHasLink = (selector) => {
            document.querySelectorAll(selector).forEach(el => {
                el.setAttribute('data-haslink', 'false');
            });
        };

        // Desativa links para os elementos com classes específicas
        disableHasLink('.progressBarCell.futureNotCompleted');
        disableHasLink('.progressBarCell.completed');
    });
