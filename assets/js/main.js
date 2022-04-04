const API = [
    {
        id:1,
        title: "Pagos mayores a 30 en finanzas", 
        table: "finanzas",
        columns: "id, user, payment, cash", 
        key:"id", 
        description:"Aquí va la descripción", 
        query:"SELECT * FROM finanzas WHERE payment > 30"
    },
    {
        id:2,
        title: "Pagos menores a 1000 en marketing", 
        table: "finanzasMarketing",
        columns: "id, user, payment, money, cat", 
        key:"id", 
        description:"Aquí va la descripción", 
        query:"SELECT * FROM finanzas WHERE payment < 1000"
    },
]

const contenido = document.getElementById('contenido');
const formulario = document.querySelector('#formulario')

let loadFinanzas = () =>{
    contenido.innerHTML = ""
    const texto = formulario.value

    for(table of API){
        
        if(table.title.toLowerCase().indexOf(texto) !== -1 || 
        table.table.toLowerCase().indexOf(texto) !== -1 || 
        table.columns.toLowerCase().indexOf(texto) !== -1 || 
        table.description.toLowerCase().indexOf(texto) !== -1 ||
        table.query.toLowerCase().indexOf(texto) !== -1 ){
            contenido.innerHTML += `
            <div class="querys">
                <h3>${table.title}</h3>
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#a${table.id}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#b${table.id}" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="a${table.id}">
                            <div class="card card-body">
                                ${table.description}
                                <strong>Columns: </strong> ${table.columns}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-1">
                    <div class="col">
                        <div class="collapse multi-collapse" id="b${table.id}">
                            <div class="card card-body">
                                <pre>
        <code>
            ${table.query}
        </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}
let algo = () => {
    console.log(formulario.value)
}

formulario.addEventListener('keyup', loadFinanzas);
loadFinanzas()
