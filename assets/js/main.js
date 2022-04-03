const contenido = document.getElementById('contenido');

let loadFinanzas = () =>{
    contenido.innerHTML = `

    <div class="querys">
        <h3>Finanzas y Growth</h3>
        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
        </p>
        <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                        Las tabla contiene Bla bla bla <br> llave primaria bla bla bla
                    </div>
                </div>
            </div>
            
        </div>
        <div class="row py-1">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                    <div class="card card-body">
                        <pre>
<code>
    SELECT *
    FROM finanzas.table.e
    WHERE id >= 12
</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>



        <h3>Ventas Semanales</h3>
        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#asd" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#dsa" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
        </p>
        <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="asd">
                    <div class="card card-body">
                        Las tabla contiene Bla bla bla <br> llave primaria bla bla bla
                    </div>
                </div>
            </div>
            
        </div>
        <div class="row py-1">
            <div class="col">
                <div class="collapse multi-collapse" id="dsa">
                    <div class="card card-body">
                        <pre>
<code>
    SELECT *
    FROM finanzas.table.e
    WHERE id >= 12
</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
    `
}

contenido.innerHTML += `<h2> Hola, soy el contenido</h2>`