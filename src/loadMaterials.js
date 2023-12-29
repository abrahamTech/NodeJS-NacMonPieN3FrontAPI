import Materials from "./models/materials.model.js";

const materialsList = {
    '001': { nombre: 'Oro puro 24k', precioGramo: 1500.00 },
    '002': { nombre: 'Oro alto 18k', precioGramo: 1000.00 },
    '003': { nombre: 'Oro medio 14k', precioGramo: 800.00 },
    '004': { nombre: 'Oro bajo 10k', precioGramo: 500.00 },
    '005': { nombre: 'Plata ley .925', precioGramo: 300.00 },
    '006': { nombre: 'Titanio', precioGramo: 200.00 },
    '007': { nombre: 'Rodio', precioGramo: 100.00 }
};

export const loadMaterialsList = async () => {
    try {
        //Eliminar materiales existentes
        await Materials.deleteMany({});

        //Guardar los materiales
        const materialsArray = Object.entries(materialsList)
            .map(([codeMaterial, {nombre, precioGramo} ]) => ({
                codeMaterial,
                name: nombre,
                pricePerGram: precioGramo,
            }));
        
        await Materials.insertMany(materialsArray);
        console.log("Materiales almacenados en la Base de Datos correctamente");

    } catch (error) {
        console.log("Error al guardar los materiales en la Base de Datos", error);
    }
}
