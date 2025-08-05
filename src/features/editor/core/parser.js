const reglas = [

    // 📌 Variables
    {
        nombre: "declaracion_variable",
        regex: /variable\s+(\w+)\s*=\s*(.*?);/g,
        reemplazo: 'const $1 = $2;'
    },

    // 📌 Funciones
    {
        nombre: "declaracion_funcion",
        regex: /funcion\s+(\w+)\((.*?)\)/g,
        reemplazo: 'function $1($2)'
    },

    // 📌 Condicionales
    {
        nombre: "si",
        regex: /si\s*\((.*?)\)/g,
        reemplazo: 'if ($1)'
    },
    {
        nombre: "sino",
        regex: /sino/g,
        reemplazo: 'else'
    },

    // 📌 Bucles
    {
        nombre: "mientras",
        regex: /mientras\s*\((.*?)\)/g,
        reemplazo: 'while ($1)'
    },

    // 📌 Mostrar
    {
        nombre: "mostrar",
        regex: /mostrar\((.*?)\);?/g,
        reemplazo: 'console.log($1);'
    },

    // 📌 Booleanos
    {
        nombre: "booleano_verdadero",
        regex: /verdadero/g,
        reemplazo: 'true'
    },
    {
        nombre: "booleano_falso",
        regex: /falso/g,
        reemplazo: 'false'
    }

];

export function traducir(codigo) {
    let resultado = codigo;

    for (const regla of reglas) {
        resultado = resultado.replace(regla.regex, regla.reemplazo);
    }

    return resultado;
}