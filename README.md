# 🚀 SencilloJS

**SencilloJS** es un lenguaje de programación educativo escrito en español y basado en JavaScript. Está diseñado para que cualquier persona, sin experiencia previa, pueda aprender a programar de forma clara, directa y divertida desde el navegador.

## 🧠 ¿Qué hace especial a SencilloJS?

- ✅ Sintaxis simple y en español
- ✅ Editor web tipo VSCode
- ✅ Traducción automática a JavaScript
- ✅ Ideal para estudiantes, docentes y autodidactas
- ✅ 100% ejecutable desde el navegador

---

## 🌐 Ejemplo de código

```sencillojs
variable nombre = "Franco";
variable edad = 21;

mostrar(`Hola, soy ${nombre}`);
mostrar(`Tengo ${edad} años`);

si (edad >= 18) {
  mostrar("Eres mayor de edad");
} sino {
  mostrar("Eres menor de edad");
}

---

## 📦 Instalación (modo desarrollo)

```git clone https://github.com/JFrancodev12/sencillojs.git
cd sencillojs
npm install
npm start

---

## 🛠️ Estructura del Proyecto

bash
Copiar
Editar
src/
├── features/
│   └── editor/         # Componente del editor
│       ├── core/       # Traducción y ejecución
│       │   ├── parser.js
│       │   └── runtime.js
├── pages/
│   └── Docs.jsx        # Documentación interactiva
├── App.js
└── index.js

