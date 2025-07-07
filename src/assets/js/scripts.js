// GLOBAL constants
const SERVER_URL = 'http://localhost:5002'

// GLOBAL variables
let dataFromExternalApi = []

export const getAllDataFromNotion = (async) => {
  console.log("getAllDataFromNotion >>");

  getNotionData()
    .then(data => {
      dataFromExternalApi = data;
      console.log("Resposta Completa da API do Notion: ", data);
      data.forEach(item => {
        console.log("Item:", item);
        return
      });
      console.log("getAllDataFromNotion <<");
    })
    .catch(error => console.error('Erro ao acessar a API externa', error));
}

export const getItemFromNotion = (async) => {
  console.log("getItemFromNotion: Tamanho da lista atual disponivel ", dataFromExternalApi.length);
  if (dataFromExternalApi.length > 0) {
    // Exibindo as propriedades de cada item retornado
    let item = dataFromExternalApi.pop(0);
    console.log("Item:", item);
    return item;
  } else {
    getAllDataFromNotion();
  }
}

async function getNotionData() {
  try {
    const response = await fetch('http://localhost:4000/notion', {
        method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Erro ao acessar a API do Notion');
    }

    const data = await response.json();

    if (!data.results) return [];

    const notionPages = data.results.map(page => {
        const props = page.properties || {};

        return {
            id: page.id,
            nome: props.Nome?.title?.[0]?.plain_text || '',
            produto: props.Produto?.rich_text?.[0]?.plain_text || '',
            prioridade: props.Prioridade?.number ?? '',
            dataInicio: props['Data inicio']?.date?.start || '',
            dataFim: props['Data Fim']?.date?.start || '',
            tipo: props.Tipo?.select?.name || '',
            url: page.url
        };
    });
    console.log("getNotionData: Notion Pages: ", notionPages);
    return notionPages;
  } catch (e) {
    return { error: e.message };
  }
}

export function mapPrioridadeToString(prioridade) {
    switch (prioridade) {
        case 1: return "High";
        case 2: return "Medium";
        case 3: return "Low";
        default: return "";
    }
}

