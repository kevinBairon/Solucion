function obtenerUltimasCuatroCifras() {
  const numerosIniciales = [2023, 2024, 2025];
  let ultimasCuatroCifras = [2023 % 10000, 2024 % 10000, 2025 % 10000];

  let iteraciones = 3;

  while (true) {
    const ultimaCifra = (ultimasCuatroCifras[iteraciones - 3] + ultimasCuatroCifras[iteraciones - 2] + ultimasCuatroCifras[iteraciones - 1]) % 10000;
    ultimasCuatroCifras.push(ultimaCifra);
    iteraciones++;

    if (ultimasCuatroCifras[iteraciones - 1] === ultimasCuatroCifras[2] && ultimasCuatroCifras[iteraciones - 2] === ultimasCuatroCifras[1]) {
      break; 
    }
  }

  const indiceFinal = 2023202320232023 % (iteraciones - 2);

  return ultimasCuatroCifras[indiceFinal];
}

const ultimasCuatroCifras = obtenerUltimasCuatroCifras();
console.log(`los ultimos 4 digitos del puesto 2023202320232023 son ${ultimasCuatroCifras}`);