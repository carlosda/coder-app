const Data = [
    {
        id: 1,
        tipo: "remera",
        talle: "L",
        stock: 10,
        color: "rojo",
        foto: "https://http2.mlstatic.com/D_NQ_NP_629947-MLA48096395323_112021-O.webp"
    },
    {
        id: 2,
        tipo: "jean",
        talle: "42",
        stock: 5,
        color: "azul",
        foto: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/keugibyeonhwan_0233a_1630340573.png?itok=XYOsPtym"
    },
    {
        id: 3,
        tipo: "campera",
        talle: "M",
        stock: 2,
        color: "negro",
        foto: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/dsc_0071_1659125789.jpg?itok=oBxBsOU8"
    }
];

const getProducts = new Promise((res, rej) => {

    let condition = true;

    if (condition) {
        setTimeout(() => {
            res(Data);
        }, 2000);
    } else {
        rej("no hay productos");
    }
});

export default getProducts;