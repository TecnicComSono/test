var apiKey = "AIzaSyCr30K9HoTArlagS4udtIZ9jKmr7guKSe8";

var menu = Object.assign(
  document.body.appendChild(document.createElement("div")),
  {
     innerHTML: '<img src="https://i.ibb.co/9mQdpNKX/image-removebg-preview-1.png" alt="Imagem" style="max-width: 80%; max-height: 80%; height:auto; width:auto;">',
      style: "position:fixed;top:10px;right:5px;width:180px;padding:8px 12px;border-radius:12px;background:linear-gradient(135deg,rgba(15, 12, 41, 0.7),rgba(48, 43, 99, 0.7),rgba(36, 36, 62, 0.7));color:transparent;font-family:'Segoe UI',sans-serif;font-size:16px;font-weight:600;cursor:pointer;z-index:9999;text-align:left;box-shadow:0 0 2px rgba(0,0,0,0.6);backdrop-filter:blur(4px);transition:all 0.3s ease;opacity:0.6;display:flex;align-items:left;justify-content:center;"
  },
);

var versionText = Object.assign(
  menu.appendChild(document.createElement("span")),
  {
    innerText: `${version}`,
    style: "display:none;position:fixed;top:60px;right:5px;width:180px;padding:15px;border-radius:10px;background:linear-gradient(135deg,rgba(15, 12, 41, 0.7),rgba(48, 43, 99, 0.7),rgba(36, 36, 62, 0.7));box-shadow:0 0 2px rgba(0,0,0,0.6);backdrop-filter:blur(4px);color:#fff;font-family:'Segoe UI',sans-serif;font-size:13px;z-index:9998;transition:all 0.3s ease;"
  },
);

var dropdown = Object.assign(
  document.body.appendChild(document.createElement("div")),
  {
    style: "display:none;position:fixed;top:60px;right:5px;width:180px;padding:15px;border-radius:10px;background:rgba(15, 12, 41, 0.7);box-shadow:0 0 2px rgba(0,0,0,0.6);backdrop-filter:blur(8px);color:#fff;font-family:'Segoe UI',sans-serif;font-size:13px;z-index:9998;transition:all 0.4s ease;"
  },
);


// Abrir/Fechar o menu
menu.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Campo para alterar o nickname
var nicknameLabel = Object.assign(
  dropdown.appendChild(document.createElement("label")),
  {
    innerText: "Change nickname",
    style: "display:block;font-size:12px;margin-bottom:5px;",
  },
);
var nicknameInput = Object.assign(
  dropdown.appendChild(document.createElement("input")),
  {
    type: "text",
    style:
      "width:100%;margin-bottom:10px;padding:5px;border:white solid 2px;border-radius:3px;background:rgba(255,255,255,0.1);color:white;",
  },
);
nicknameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && nicknameInput.value.trim()) {
    const newText = nicknameInput.value.trim();
    const firstElement = document.querySelector(
      "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-ikws8e > div > div.MuiBox-root.css-zg1vud > h5 > span",
    );
    const secondElement = document.querySelector(
      "#root > div.MuiBox-root.css-z0hhne > header > div > div > button > h6",
    );
    if (firstElement) firstElement.innerText = newText;
    if (secondElement) secondElement.innerText = newText;
    nicknameInput.value = "";
  }
});

var temaLabel = Object.assign(
  dropdown.appendChild(document.createElement("label")),
  {
    innerText: "Escreva o tema da redação aqui abaixo!",
    style: "display:block;font-size:12px;margin-bottom:5px;",
  },
);
var temaInput = Object.assign(
  dropdown.appendChild(document.createElement("input")),
  {
    type: "text",
    value: "",
    style:
      "width:100%;margin-bottom:10px;padding:5px;border:white solid 2px;border-radius:3px;background:rgba(255,255,255,0.1);color:white;",
  },
);

var mincaraLabel = Object.assign(
  dropdown.appendChild(document.createElement("label")),
  {
    innerText: "Escreva a quantidade mínima de caracteres abaixo!",
    style: "display:block;font-size:12px;margin-bottom:5px;",
  },
);
var mincaraInput = Object.assign(
  dropdown.appendChild(document.createElement("input")),
  {
    type: "text",
    value: "",
    style:
      "width:100%;margin-bottom:10px;padding:5px;border:white solid 2px;border-radius:3px;background:rgba(255,255,255,0.1);color:white;",
  },
);

var caraLabel = Object.assign(
  dropdown.appendChild(document.createElement("label")),
  {
    innerText: "Escreva a quantidade máxima de caracteres abaixo!",
    style: "display:block;font-size:12px;margin-bottom:5px;",
  },
);
var caraInput = Object.assign(
  dropdown.appendChild(document.createElement("input")),
  {
    type: "text",
    value: "",
    style:
      "width:100%;margin-bottom:10px;padding:5px;border:white solid 2px;border-radius:3px;background:rgba(255,255,255,0.1);color:white;",
  },
);

// Botão para criar redação
var redacaoButton = Object.assign(
  dropdown.appendChild(document.createElement("button")),
  {
    innerText: "Criar Redação",
    style:
      "display:block;width:100%;padding:5px;margin-top:10px;background:none;color:white;border:0.5px solid white;border-radius:3px;cursor:pointer;",
  },
);
redacaoButton.addEventListener("click", function() {
    abrirRedacao();
    sendToast("⏳ Sua redação está sendo gerada, aguarde!");
});

var redacaoModal = Object.assign(
  document.body.appendChild(document.createElement("div")),
  {
    style:
      "display:none;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:white;padding:20px;border-radius:12px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.2);text-align:center;z-index:10000;",
  },
);
redacaoModal.innerHTML =
  "<h2>Redação Abaixo:</h2><p>Copie e cole a redação!</p>";
var redacaoTexto = Object.assign(
  redacaoModal.appendChild(document.createElement("textarea")),
  {
    readonly: true,
    style:
      "width:100%;height:150px;margin-top:10px;padding:10px;border:1px solid #ccc;border-radius:8px;resize:none;",
  },
);

var closeRedacaoButton = Object.assign(
  redacaoModal.appendChild(document.createElement("button")),
  {
    innerText: "Fechar",
    style:
      "margin-top:10px;padding:8px 16px;background-color:#f44336;color:white;border:none;border-radius:8px;cursor:pointer;",
  },
);
closeRedacaoButton.addEventListener("click", () => {
  redacaoModal.style.display = "none"; // Fecha o modal ao clicar
});

var copyButton = Object.assign(
  redacaoModal.appendChild(document.createElement("button")),
  {
    innerText: "Copiar",
    style:
      "margin-top:10px;padding:8px 16px;background-color:#4CAF50;color:white;border:none;border-radius:8px;cursor:pointer;",
  },
);
copyButton.addEventListener("click", copiarRedacao);

async function gerarRedacao(tema) {
  const mincaracteres = mincaraInput.value.trim() || "Mínimo de caracteres";
  const caracteres = caraInput.value.trim() || "Máximo Cáracteres da redação";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  const data = {
    contents: [
      {
        parts: [
          {
            text: `Preciso que você escreva uma redação com este tema: ${tema}.

      **Você deve formatar sua redação exatamente assim:**
      TITULO: [Título da redação]
      TEXTO: [Texto da redação]

      A redação deve ter no máximo ${caracteres} caracteres e no minimo ${mincaracteres}, não ultrapasse!
      Lembre-se que você só deve escrever o título e o texto da redação, nada a mais.
      `,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao gerar a redação");
    }

    const result = await response.json();
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return "Erro ao gerar a redação. Tente novamente.";
  }
}

async function humanizarRedacao() {
  const mincaracteres = mincaraInput.value.trim() || "Mínimo de caracteres";
  const caracteres = caraInput.value.trim() || "Cáracteres da redação";
  const tema = temaInput.value.trim() || "Tema genérico";
  const redacao = await gerarRedacao(tema);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  const data = {
    contents: [
      {
        parts: [
          {
            text: `      Reescreva a seguinte redação em Português, PORÉM escreva de uma forma que um estudante escreveria, algo que de em torno de 20% de utilização de IA.

      Regras importantes:
      1. Mantenha o conteúdo e os argumentos principais intactos
      2. Adicione pequenas imperfeições naturais como ocasionais repetições de palavras ou construções frasais variadas
      3. Use linguagem mais natural e menos robótica, com algumas expressões coloquiais
      4. Varie o comprimento das frases para criar um ritmo mais natural
      5. Preserve os parágrafos e a estrutura geral
      6. Mantenha todas as referências e exemplos usados, apenas reescrevendo-os de forma mais natural
      7. Evite linguagem artificial ou muito técnica que um estudante normalmente não usaria

      Texto para reescrever: ${redacao}
      Máximo de caracteres: ${caracteres} caracteres, mínimo de caracteres: ${mincaracteres}!

      Lembre-se: devolva APENAS o texto reescrito, sem comentários ou explicações adicionais.`,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao gerar a redação");
    }

    const result = await response.json();
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return "Erro ao gerar a redação. Tente novamente.";
  }
}

async function abrirRedacao() {
  const text = await humanizarRedacao();
  redacaoTexto.value = text;
  redacaoModal.style.display = "block";
}

function copiarRedacao() {
  redacaoTexto.select();
  document.execCommand("copy");
  alert("Redação copiada!");
}
