
const crypto = require("crypto");
const algoritimo = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);
const mensagem = "AC do IgorVAC";
const chave = crypto.randomBytes(32);
const criptar = crypto.createCipheriv(algoritimo, chave, initVector);
let DadosCrypto = criptar.update(mensagem, "utf-8", "hex");
DadosCrypto += criptar.final("hex");
console.log("Encrypted message: " + DadosCrypto);
const descrypto = crypto.createDecipheriv(algoritimo, chave, initVector);
let DadosNaoCrypto = descrypto.update(DadosCrypto, "hex", "utf-8");
DadosNaoCrypto += descrypto.final("utf8");
console.log("Decrypted mensagem: " + DadosNaoCrypto);