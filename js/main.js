function ingresarProductos(){
    let lista = [];
    let continuar = true;

    while (continuar === true){
        const producto = prompt("Ingresa el producto");
        const precio = parseFloat(prompt("Ingresa el valor del producto"));

        if (isNaN(precio) || precio < 0){
            alert("Ingrese un precio valido.");
        }else{
            lista.push({producto: producto, precio: precio})
        }

        const terminar = prompt("Necesitas agregar mas productos? Si/No").toLowerCase();
        if(terminar === "si"){
            continuar = true;
        }else if(terminar === "no"){
            continuar = false;
        }else{
            alert("Elija Si o No");
            continuar = true;
        }
            
    }
    return lista;
}

function totalGastado(lista){
    const suma = lista.reduce((acc, producto) => acc + producto.precio, 0);
    return suma;
}

function productoMasCaro(lista){
    let masCaro = lista[0].precio;

    lista.forEach(producto => {
        if(producto.precio > masCaro){
            masCaro = producto.precio
        }
        
    });

    let caros = lista.filter((producto) => producto.precio === masCaro);

    return caros;
}

function listado(){

    const articulos = ingresarProductos();
    let dinero = parseFloat(prompt("¿Con cuanto dinero pagas?"));

    if( articulos.length === 0){
        console.log("No hay productos");
        return;
    }

    const total = totalGastado(articulos);
    const caros = productoMasCaro(articulos);
    
    while (isNaN(dinero) || dinero < 0 || dinero < total ){
        alert("Ingrese un monto valido.");
        dinero = parseFloat(prompt("¿Con cuanto dinero pagas?"));
    }

    let vuelto = dinero - total;

    console.log("%c*** TICKET FINAL ***", "color: red");
    articulos.forEach((producto) => console.log(producto.producto + " $" + producto.precio));

    console.log("Total Gastado: " + total);

    caros.forEach((producto) => console.log("El producto mas caro es " + producto.producto + " con un valor de $" + producto.precio));
    console.log("Abonaste con $" + dinero);
    console.log("Tu vuelto es $" + vuelto);
}

listado();

