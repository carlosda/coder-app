class DataApi {

    static Data = [
        {
            id: 1,
            tipo: "remera",
            talle: "L",
            stock: 10,
            color: "rojo",
            precio: "1500",
            foto: "https://http2.mlstatic.com/D_NQ_NP_629947-MLA48096395323_112021-O.webp"
        },
        {
            id: 2,
            tipo: "jean",
            talle: "42",
            stock: 5,
            color: "azul",
            precio: "7000",
            foto: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/keugibyeonhwan_0233a_1630340573.png?itok=XYOsPtym"
        },
        {
            id: 3,
            tipo: "campera",
            talle: "M",
            stock: 2,
            color: "negro",
            precio: "12000",
            foto: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/dsc_0071_1659125789.jpg?itok=oBxBsOU8"
        }
    ];

    static getProducts() {

        return new Promise((res, rej) => {

            let condition = true;

            if (condition) {
                setTimeout(() => {
                    res(this.Data);
                }, 2000);
            } else {
                rej("no hay productos");
            }

        });
    }
    static getDetailProd(id) {

        return new Promise((res, rej) => {

            let condition = true;

            if (condition) {
                setTimeout(() => {                    
                    const item = this.Data.find(item => item.id === parseInt(id));
		    res(item);
                }, 2000);
            } else {
                rej("no hay productos");
            }
        });


    }

}

export default DataApi;
