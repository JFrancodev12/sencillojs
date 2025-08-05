/* eslint-disable no-new-func, no-eval */
import { traducir } from './parser';

export function ejecutarCodigo(codigoSencillo) {
    const logs = [];

    const consoleBackup = console.log;
    console.log = (...args) => logs.push(args.join(' '));

    let error = null;

    try {
        const js = traducir(codigoSencillo);
        new Function(js)();  // Ejecuta el código traducido
    } catch (err) {
        error = "❌ Error: " + err.message;
    }

    console.log = consoleBackup;

    return {resultado: logs.join('\n'), error};
}