import ItemError from './ErrorItem';



export default class DataHelper {

    public data: any;
    public errors: Array<any>;
    public hasError: boolean;


    constructor(item?: any) {
        if (!item) { item = {} }

        this.data = item.data || {};
        this.errors = item.errors || [];
        this.hasError = item.hasError || false;
    }


    llenarErrores(errors: any) {

        var er: Array<any> = [];

        errors.forEach((element: any) => {

            er.push(new ItemError(element));

        });

        this.hasError = true;
        this.errors = er;


    }



}
