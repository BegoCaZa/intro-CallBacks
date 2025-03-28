// Arrays métodos callback

// 1️⃣ Camila está organizando datos en su sistema.
// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array.
// Ejemplo: Si recibe [2, 5, 8], deberá mostrar:

// 0 - 0  
// 5 - 5  
// 16 - 8

const multiplyNumberByIndex=(names)=>{
    
    names.forEach((names,index)=>{
        console.log(`${names*index}`);
    });

}
multiplyNumberByIndex([2,5,8]);

//2️⃣ Bego quiere hacer cálculos avanzados.
// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1 (el +1 es para evitar que se divida por 0).
// Ejemplo: Si recibe [10, 20, 30], deberá imprimir [10, 10, 10].

const divideNumberByIndex=(numbers)=>{
    
    const result = numbers.map((number,index) => {
        return number/(index+1);
    });
    console.log(result);
}
divideNumberByIndex([10, 20, 30])

//3️⃣ Sabrina está trabajando con archivos de texto.
// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.
// Ejemplo: Si recibe ["hola", "mundo"], deberá imprimir ["HOLA", "MUNDO"].

const returnWordInUpperCase=(words)=>{
    const result=words.map(letter=> {
        return letter.toUpperCase();
    });
    console.log(result);
}
returnWordInUpperCase(["hola", "mundo"])

//4️⃣ Macarena está organizando una lista de ingredientes.
// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra. Debe funcionar con mayúsculas y minúsculas.
// Ejemplo: Si recibe (["Manzana", "Melón", "Pera", "Sandía"], "m"), deberá imprimir ["Manzana", "Melón"].

const filterWordByLetter=(words,letter)=>{
    const result=words.filter((word => { //el filter es SOLO para el array, aqui no hay que meter la m....la usara por que ya esta en la funcion
        return word.charAt(0).toLowerCase() === letter.toLowerCase();//luego filtra la primer letra
    }));
    console.log(result);

}
filterWordByLetter(["Manzana", "Melón", "Pera", "Sandía"], "m");


//5️⃣ Camila está recopilando datos numéricos.
// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
// Ejemplo: Si recibe [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], deberá mostrar 55.

const numberAddition=(numbers)=>{
    const result=numbers.reduce((acc,number)=>{
        return acc+number;
    });
    console.log(result);

}
numberAddition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//6️⃣ Bego está creando informes detallados.
// Investiga el método Math.pow() --- exponentes
// Crea una función que reciba un array de 10 números y muestre por consola cada número, su cuadrado y su cubo en este formato:
// "Número: 2 - Cuadrado: 4 - Cubo: 8".

const numberSquaredCubed=(numbers)=>{

    numbers.forEach((number)=>{
    const squaredNumber=Math.pow(number,2);
    const cubedNumber=Math.pow(number,3);

    console.log(`Número= ${number} - Cuadrado: ${squaredNumber} - Cubo: ${cubedNumber}`)
});

}
numberSquaredCubed([2,4,8]);
