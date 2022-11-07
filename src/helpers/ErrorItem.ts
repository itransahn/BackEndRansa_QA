export default class ItemError {

    private codigo: number;
    private descripcion: string;
    private criticidad: string;


    constructor(item: any) {

        if (Object.keys(item).length === 0) { item = {} }
        this.codigo = item.codigo || 0;
        this.descripcion = item.descripcion || "";
        this.criticidad = item.criticidad || "";

    }


}


interface errorItem {

    codigo: number,
    descripcion: string,
    criticidad: string

}