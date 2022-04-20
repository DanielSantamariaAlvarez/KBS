const API = [
    {
        id:1,
        title: "GLOBAL_FINANCES.GLOBAL_ORDERS", 
        table: "GLOBAL_FINANCES.GLOBAL_ORDERS",
        columns: "order_id, user, payment, cash", 
        key:"order_id", 
        description:"Cada Fila es cada orden realizada en la app y sus carácteristicas principales. Usuario, hora de creación, hora de cierre, tienda, valor del pedido entre otras, en total son 67 Columnas que describen la orden en terminos generales", 
        query:" <br> SELECT  COUNTRY, VERTICAL, COUNT(DISTINCT ORDER_ID) AS ORDERS ,SUM(GMV_USD) AS GMV_DOLARS <br> FROM GLOBAL_FINANCES.GLOBAL_ORDERS <br> WHERE DATE_ORDER_CREATED BETWEEN '2022-01-01' AND CURRENT_DATE AND COUNT_TO_GMV <br> GROUP BY 1,2;",
        tags: "orders,gmv,brand,prime,mz",
    },
    {
        id:2,
        title: "GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1", 
        table: "GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1",
        columns: "order_id, user, payment, cash", 
        key:"SK_GEOGRAPHY", 
        description:"Contiene la descripción de Cada Microzona activa en la app", 
        query:" <br> SELECT  CITY_NAME, COUNT(DISTINCT ORDER_ID) AS ORDERS ,SUM(GMV_USD) AS GMV_DOLARS  <br> FROM GLOBAL_FINANCES.GLOBAL_ORDERS O LEFT JOIN GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1 G ON O.MICROZONE_ID = G.MICROZONE_CODE  <br> AND G.COUNTRY_INDEX=O.COUNTRY <br> WHERE DATE_ORDER_CREATED BETWEEN '2022-01-01' AND CURRENT_DATE AND COUNT_TO_GMV  <br> GROUP BY 1;", 
        tags: "orders,gmv,brand,prime,mz",
    },
    {
        id:3,
        title: "GLOBAL_GROWTH.USERS_PARAMETRS", 
        table: "GLOBAL_GROWTH.USERS_PARAMETRS",
        columns: "order_id, user, payment, cash", 
        key:"USER_ID", 
        description:"Cada fila describe las carácteristicas principes de todos los usuarios registrado en la app.", 
        query:" <br> SELECT PAIS, STATE_TURBO,TURBO_COVERAGE,COUNT(DISTINCT  USER_ID) AS USERS <br> FROM global_growth.users_parameters  <br> GROUP BY 1,2,3;",
        tags: "mz,city,country",
    },
    {
        id:4,
        title: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2", 
        table: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2",
        columns: "order_id, user, payment, cash", 
        key:"ID", 
        description:"Cada fila describe las características principales de todos los usuarios registrado en la app.", 
        query:" <br> SELECT COUNTRY, IS_STUDENT, HAS_CHILDREN, COUNT(DISTINCT ID)  AS USERS  <br> FROM GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2  <br> GROUP BY 1,2,3;",
        tags: "all_users,user_level,segmentation,quality",
    },
]

const contenido = document.getElementById('contenido');
const formulario = document.querySelector('#formulario')

let loadFinanzas = () =>{
    contenido.innerHTML = ""
    const texto = formulario.value.toLowerCase()

    for(table of API){
        
        if(table.title.toLowerCase().indexOf(texto) !== -1 || 
        table.table.toLowerCase().indexOf(texto) !== -1 || 
        table.columns.toLowerCase().indexOf(texto) !== -1 || 
        table.description.toLowerCase().indexOf(texto) !== -1 ||
        table.query.toLowerCase().indexOf(texto) !== -1 ||
        table.tags.toLowerCase().indexOf(texto) !== -1 ){
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
                                <strong>Number of Columns: </strong> ${table.columns.split(',').length}
                                <strong>Primary Key: </strong> ${table.key}
                                <strong>Tags: </strong> ${table.tags}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-1">
                    <div class="col">
                        <div class="collapse multi-collapse" id="b${table.id}">
                            <div class="card card-body">
                                <pre>
        <code class="w-100">
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

formulario.addEventListener('keyup', loadFinanzas);
loadFinanzas()
