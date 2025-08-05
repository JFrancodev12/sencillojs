const reglas = [

    // Variables constantes
    {
        nombre: "constante",
        regex: /constante\s+(\w+)\s*=\s*(.*?);/g,
        reemplazo: 'const $1 = $2;'
    },

    // Variables modificables
    {
        nombre: "variable",
        regex: /variable\s+(\w+)\s*=\s*(.*?);/g,
        reemplazo: 'let $1 = $2;'
    },

    // Mostrar
    {
        nombre: "mostrar",
        regex: /mostrar\((.*?)\);?/g,
        reemplazo: 'console.log($1);'
    },

    // Condicionales
    { nombre: "si", regex: /si\s*\((.*?)\)/g, reemplazo: 'if ($1)' },
    { nombre: "sino", regex: /sino/g, reemplazo: 'else' },

    // Bucles
    { nombre: "mientras", regex: /mientras\s*\((.*?)\)/g, reemplazo: 'while ($1)' },

    // Funciones
    {
        nombre: "funcion",
        regex: /funcion\s+(\w+)\((.*?)\)/g,
        reemplazo: 'function $1($2)'
    },

    // Booleanos
    { nombre: "true", regex: /verdadero/g, reemplazo: 'true' },
    { nombre: "false", regex: /falso/g, reemplazo: 'false' },

    // PROMPT
    {
        nombre: "entrada",
        regex: /entrada\((.*?)\);?/g,
        reemplazo: 'prompt($1);'
    }
];

export function traducir(codigo) {

    let resultado = codigo;

    for (const regla of reglas) {
        resultado = resultado.replace(regla.regex, regla.reemplazo);
    }

    return resultado;
}