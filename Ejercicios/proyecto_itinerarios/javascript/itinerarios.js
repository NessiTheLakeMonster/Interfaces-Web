$(document).ready(function () {
    var comunidad = localStorage.getItem('comunidad');

    switch (comunidad) {
        case 'CAT':
            comunidad = 'Cataluña';
            $('#itinerariosCAT').html(htmlCAT());
            break;
        case 'MAD':
            comunidad = 'Madrid';
            $('#itinerariosMAD').html(htmlMAD());
            break;
        case 'VAL':
            comunidad = 'Valencia';
            $('#itinerariosVAL').html(htmlVAL());
            break;
        case 'CLM':
            comunidad = 'Castilla-La Mancha';
            $('#itinerariosCLM').html(htmlCLM());
            break;
        case 'AND':
            comunidad = 'Andalucía';
            $('#itinerariosAND').html(htmlAND());
            break;
        case 'CAN':
            comunidad = 'Canarias';
            $('#itinerariosCAN').html(htmlCAN());
            break
        case 'AST':
            comunidad = 'Asturias';
            $('#itinerariosAST').html(htmlAST());
            break;
        case 'VAS':
            comunidad = 'País Vasco';
            $('#itinerariosVAS').html(htmlVAS());
            break;
        case 'CNB':
            comunidad = 'Cantabria';
            $('#itinerariosCNB').html(htmlCNB());
            break;
        default:
            comunidad = 'Error';
    }

});

function htmlCAT() {
    var html = `
        <h1 class="display-4 text-center m-5" style="color: azure;">Itinerarios por Cataluña</h1>
        
        <div class="container card mb-3">
            <div class="card-body">
                <h2 class="card-title">Itinerario por el centro de Barcelona</h2>
                <div class="d-flex p-3">
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/parc-guell.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class="card-text"><b>Dirección:</b> calle calleEjemplo, numero 123</p>
                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/parc-guell.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class="card-text"><b>Dirección:</b> calle calleEjemplo, numero 123</p>
                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/parc-guell.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class="card-text"><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        Valoración media de los usuarios: <span class="badge badge-pill badge-success" style="color: black;">4.5</span>
                        
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn-lg">
                        <img src="../assets/bookmark_10207537.png" width="50"></img>
                    </button>
                    <button type="button" class="btn btn-primary btn-lg">Apuntarme al itinerario</button>

                </div>
            </div>
        </div>

        <div class="container card mb-3">
            <div class="card-body">
                <h2 class="card-title">Itinerario por el centro de Barcelona</h2>
                <div class="d-flex p-3">
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/parc-guell.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class="card-text"><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>
                        
                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/parc-guell.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class="card-text"><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/parc-guell.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class="card-text"><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        Valoración media de los usuarios: <span class="badge badge-pill badge-success" style="color: black;">4.5</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg">
                        <img src="../assets/bookmark_10207537.png" width="50"></img>
                    </button>
                    
                    <button type="button" class="btn btn-primary btn-lg">Apuntarme al itinerario</button>

                </div>
            </div>
        </div>
    `;

    return html;
}

function htmlMAD() {
    var html = `
        <h1 class="display-4 text-center m-5" style="color: azure;">Itinerarios por la Comunidad de Madrid</h1>
        
        <div class="container card mb-3">
            <div class="card-body">
                <h2 class="card-title">Itinerario por el centro de Madrid</h2>
                <div class="d-flex p-3">
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/el padro.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>
                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/el padro.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>
                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/el padro.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        Valoración media de los usuarios: <span class="badge badge-pill badge-success" style="color: black;">4.5</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg">
                        <img src="../assets/bookmark_10207537.png" width="50"></img>
                    </button>
                    
                    <button type="button" class="btn btn-primary btn-lg">Apuntarme al itinerario</button>

                </div>
            </div>
        </div>

        <div class="container card mb-3">
            <div class="card-body">
                <h2 class="card-title">Itinerario por el centro de Fuenlabrada</h2>
                <div class="d-flex p-3">
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/el padro.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/el padro.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/el padro.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        Valoración media de los usuarios: <span class="badge badge-pill badge-success" style="color: black;">4.5</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg">
                        <img src="../assets/bookmark_10207537.png" width="50"></img>
                    </button>
                    
                    <button type="button" class="btn btn-primary btn-lg">Apuntarme al itinerario</button>

                </div>
            </div>
        </div>
    `;

    return html;
}

function htmlAND() {
    var html = `
        <h1 class="display-4 text-center m-5" style="color: azure;">Itinerarios por Andalucía</h1>
        
        <div class="container card mb-3">
            <div class="card-body">
                <h2 class="card-title">Itinerario por el centro de Cádiz</h2>
                <div class="d-flex p-3">
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/p-cadiz.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>
                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/p-cadiz.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>
                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/p-cadiz.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        Valoración media de los usuarios: <span class="badge badge-pill badge-success" style="color: black;">4.5</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn-lg">
                        <img src="../assets/bookmark_10207537.png" width="50"></img>
                    </button>
                    
                    <button type="button" class="btn btn-primary btn-lg">Apuntarme al itinerario</button>

                </div>
            </div>
        </div>

        <div class="container card mb-3">
            <div class="card-body">
                <h2 class="card-title">Itinerario por el centro de Jaén</h2>
                <div class="d-flex p-3">
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/p-cadiz.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/p-cadiz.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                    <div class="container card m-3 p-3 cardCustom">
                        <h4 class="card-title d-flex justify-content-between">Primera Parada <img src="../assets/pin_10262932.png" width="50"></img></h5>
                        <h5 class="card-subtitle mb-3">Nombre del lugar</h5>
                        <img class="card-img mb-3" src="../assets/p-cadiz.jpg" alt="Card image cap">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate finibus augue. Etiam scelerisque sapien semper, pellentesque leo sit amet, consequat ante</p>
                        <p class=""><b>Dirección:</b> calle calleEjemplo, numero 123</p>

                        <hr>
                        <h5>Comentarios de otros usuarios</h5>
                        <div class="mb-1 comment-box">Usuario 1: <span>Me encantó este lugar!</span></div>
                        <div class="mb-1 comment-box">Usuario 2: <span>Un lugar que no puedes dejar de visitar.</span></div>
                        <div class="mb-1 comment-box">Usuario 3: <span>Increíble experiencia!</span></div>

                        <div class="mb-1">
                            <input type="text" placeholder="Escriba aqui su comentario" class="styled-input">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        Valoración media de los usuarios: <span class="badge badge-pill badge-success" style="color: black;">4.5</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg">
                        <img src="../assets/bookmark_10207537.png" width="50"></img>
                    </button>
                    
                    <button type="button" class="btn btn-primary btn-lg">Apuntarme al itinerario</button>

                </div>
            </div>
        </div>
    `;

    return html;
}