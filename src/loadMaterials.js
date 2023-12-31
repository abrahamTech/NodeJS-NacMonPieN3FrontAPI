import Materials from "./models/materials.model.js";
import { materialsSchema } from "./schemas/materials.schema.js";

const materialsList = {
    '001': { nombre: 'Oro puro 24k', precioGramo: 1500.00 },
    '002': { nombre: 'Oro alto 18k', precioGramo: 1000.00 },
    '003': { nombre: 'Oro medio 14k', precioGramo: 800.00 },
    '004': { nombre: 'Oro bajo 10k', precioGramo: 500.00 },
    '005': { nombre: 'Plata ley .925', precioGramo: 300.00 },
    '006': { nombre: 'Titanio', precioGramo: 200.00 },
    '007': { nombre: 'Rodio', precioGramo: 100.00 }
};

const validateData = async (data) => {

    const resultArray = [true, []];

    data.map((material, index) => {
        try {
            materialsSchema.parse(material);
        } catch (error) {
            if (error.errors) {
                //Indica que hay error
                resultArray[0] = false;
                // Agrega los mensajes de error al array
                resultArray[1].push({index, message: error.errors.map(err => err.message)});
            }
        }
    })

    return resultArray;
    
}

export const loadMaterialsList = async () => {
    try {
        //Guardar los materiales en un array
        const materialsArray = Object.entries(materialsList)
        .map(([codeMaterial, {nombre, precioGramo} ]) => ({
            codeMaterial,
            name: nombre,
            pricePerGram: precioGramo,
        }));
    
        const valid = await validateData(materialsArray);

        if(valid[0]) {
            //Eliminar materiales existentes
            await Materials.deleteMany({});
            
            //Guardar los materiales en la base de datoa
            await Materials.insertMany(materialsArray);
            console.log("Materiales almacenados en la Base de Datos correctamente");
        } else {
            console.log("La información que se intenta cargar a la base de datos es incorrecta, favor de validar")
            valid[1].forEach((error) => {
                const numMat = error.index + 1;
                console.log(`Error en el material ${numMat}: ${error.message}`);
            });
        }
        
    } catch (error) {
        console.log("Error al guardar los materiales en la Base de Datos");
    }
}
