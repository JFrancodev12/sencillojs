export const docSections = [
    {
        titulo: "1. Variables",
        descripcion: "Usa 'variable' para declarar una constante.",
        ejemplos: [
            { codigo: "variable edad = 21;", traduccion: "const edad = 21;" },
            { codigo: 'variable nombre = "Franco";', traduccion: 'const nombre = "Franco";' }
        ]
    },
    {
        titulo: "2. Mostrar en pantalla",
        descripcion: "Usa 'mostrar()' para imprimir un valor.",
        ejemplos: [
            { codigo: 'mostrar("Hola mundo");', traduccion: 'console.log("Hola mundo");' },
            { codigo: "mostrar(edad);", traduccion: "console.log(edad);" }
        ]
    },
    {
        titulo: "3. Condicionales",
        descripcion: "Usa 'si' y 'sino' para tomar decisiones.",
        ejemplos: [
        {
            codigo:
            `si (edad >= 18) {
            mostrar("Eres mayor de edad");
            } sino {
            mostrar("Eres menor de edad");
            }`, 
                    traduccion:
            `if (edad >= 18) {
            console.log("Eres mayor de edad");
            } else {
            console.log("Eres menor de edad");
            }`
        }
        ]
    },
    {
        titulo: "4. Bucles",
        descripcion: "Usa 'mientras()' para repetir código.",
        ejemplos: [
        {
            codigo:
    `variable i = 0;
    mientras(i < 5) {
    mostrar(i);
    i = i + 1;
    }`,
            traduccion:
    `const i = 0;
    while(i < 5) {
    console.log(i);
    i = i + 1;
    }`
        }
        ]
    },
    {
        titulo: "5. Funciones",
        descripcion: "Usa 'funcion' para definir funciones propias.",
        ejemplos: [
        {
            codigo:
    `funcion saludar(nombre) {
    mostrar("Hola " + nombre);
    }
    saludar("Franco");`,
            traduccion:
    `function saludar(nombre) {
    console.log("Hola " + nombre);
    }
    saludar("Franco");`
        }
        ]
    },
    {
        titulo: "6. Booleanos",
        descripcion: "Usa 'verdadero' y 'falso' como valores lógicos.",
        ejemplos: [
        {
            codigo:
    `variable activo = verdadero;
    si (activo) {
    mostrar("Está activo");
    }`,
            traduccion:
    `const activo = true;
    if (activo) {
    console.log("Está activo");
    }`
        }
        ]
    },
    {
        titulo: "7. Operaciones",
        descripcion: "Puedes usar todas las operaciones comunes: +, -, *, /, %",
        ejemplos: [
        {
            codigo:
    `variable total = 10 + 5 * 2;
    mostrar(total);`,
            traduccion:
    `const total = 10 + 5 * 2;
    console.log(total);`
        }
        ]
    },
    {
        titulo: "Próximamente...",
        descripcion: "Características que se implementarán en futuras versiones.",
        ejemplos: [
        { codigo: "para (variable i = 0; i < 10; i++) { ... }", traduccion: "for (let i = 0; i < 10; i++) { ... }" },
        { codigo: "esperar(1000);", traduccion: "await new Promise(r => setTimeout(r, 1000));" },
        { codigo: "entrada('¿Tu nombre?');", traduccion: 'prompt("¿Tu nombre?");' }
        ]
    }
];
