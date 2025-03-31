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
    const result=words.map(letter=> 
        letter.toUpperCase())
    console.log(result);
}
returnWordInUpperCase(["hola", "mundo"])

//4️⃣ Macarena está organizando una lista de ingredientes.
// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra. Debe funcionar con mayúsculas y minúsculas.
// Ejemplo: Si recibe (["Manzana", "Melón", "Pera", "Sandía"], "m"), deberá imprimir ["Manzana", "Melón"].

const filterWordByLetter=(words,letter)=>{
    const result=words.filter((word => { //el filter es SOLO para el array, aqui no hay que meter la m....la usara por que ya esta en la funcion
        return word.charAt(0).toLowerCase() === letter.toLowerCase();//luego filtra la primer letra
        //PLAN B return word.toUpperCase().startsWith(letter.toUpperCase());
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

//7️⃣ Sabrina quiere modificar un mensaje secreto.
// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
// Ejemplo: Si recibe "javascript", deberá imprimir "jAvAscrIpt"

const translateThisWord=(word)=>{
    const vowels="aeiou";
    //callbacks funcionan con arrays, asi que tengo que pasar la palbra a string
    const result=word.split('').map(letter=>{ //split('') convierte la palabra en un array de caracteres. 
        if (vowels.includes(letter)){ //map da un array con las letras modificadas
            return letter.toUpperCase();
        } else{
            return letter;
        }   
    }).join(''); //.join('') une todos los elementos del array en un solo string,solo funciona en arrays, por eso va después de map(), que retorna un array.

    //VERSION CON REDUCE
    // const joinMessage=splitMessage.reduce((acc,letter) =>{
    //     if (vowels.includes(letter)){
    //         return acc+letter.toUpperCase();
    //     }else{
    //         return acc+letter;
    //     }
    //     });

    // console.log(result);
}
translateThisWord("javascript");

//8️⃣ Macarena está buscando números importantes.
// Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.
// deberá mostrar:
// "Algún número es mayor de 5"
// "Ningún número es mayor de 5"

const areThisNumbersBiggerThan5=(numbers)=>{
    
    const result=numbers.some(number=> number>5);
    result ? console.log("Algún número es mayor a 5") : console.log("Ningún número es mayor de 5");
    
}
areThisNumbersBiggerThan5([1,2,3,4,3,2,3,4,3]);
areThisNumbersBiggerThan5([1,2,3,4,5,6,7,8,9]);

//9️⃣ Camila está filtrando resultados.
// Crea una función que reciba un array de 5 palabras y un número, y devuelva un array con las palabras que tienen esa longitud.
// Ejemplo: Si recibe ['hola', 'adios', 'gato', 'perro', 'casa'], 4, deberá imprimir ['hola', 'gato', 'casa'].

const wordWith4Letters=(words,number)=>{
    const result=words.filter((word=>{
        return word.length===number;
    }));
    console.log(result);
}
wordWith4Letters(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

//🔟 Bego quiere comprobar divisores.
// Crea una función que reciba un array de números y un número, y devuelva un array con los números que sean divisores de ese número.
// Ejemplo: Si recibe [1, 2, 3, 4, 5, 6] y 2, deberá imprimir [1, 2, 4, 6].

const isThisNumberDividable=(numbers,divisor)=>{
    const result=numbers.filter((number=>{
        return number%divisor===0;
    }));
    console.log(result);
}
isThisNumberDividable([1, 2, 3, 4, 5,6], 2);

//1️⃣1️⃣ Sabrina está seleccionando usuarios.
// Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30.

// const users = [
// { name: 'John', age: 25 },
// { name: 'Jane', age: 30 },
// { name: 'Bob', age: 20 }
// ];

// Ejemplo salida:
// Usuarios menores de 30: John, Bob

const isTheUserOver30=(users)=>{
    
    const result=users.filter(user => { //filtrar edades
        return user.age<30;
    });

   
   const usersUnder30 = result.map(user => { //guardar los nombres en un array
        return user.name;
   });
    
    console.log(`Usuarios menores de 30: ${usersUnder30}`);

};
isTheUserOver30([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
    ]);


//1️⃣2️⃣ Macarena quiere comprobar números pares.  
// Crea una función que reciba un array con 5 números y te diga si todos son pares o no.
// Ejemplo: Si recibe [2, 4, 6, 8, 10], deberá impimir Todos son pares.

const areThisEvenNumbers=(numbers)=>{
    const result=numbers.every(number =>number%2===0);
    
    result ? console.log ("Todos son pares") : console.log("No todos son pares"); //por default if empieza con positivo, asi que e true no es necesario
};
areThisEvenNumbers([2, 4, 6, 8, 10]);

//1️⃣3️⃣ Abby quiere ordenar palabras por longitud.  
// Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
// Ejemplo: Si recibe ["cielo", "sol", "estrella", "luz", "universo"], deberá imprimir ["sol", "luz", "cielo", "estrella", "universo"].

const wordsByLength=(words)=>{
    const result=words.sort((a,b)=> a.length-b.length);
    console.log(result);
    //una resta normal
};
wordsByLength(["cielo", "sol", "estrella", "luz", "universo"]);

//1️⃣4️⃣ Camila quiere invertir palabras.  
// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y minúsculas. A Camila no le gusta el método reverse(), así que quiere hacerlo de otra manera 😊.
// Ejemplo: Si recibe "Mariposas" deberá imprimir "sasopiraM"

const reverseWithNoReverse=(word)=>{
    const splitWord=word.split('');
    const result = splitWord.reduce((acc,letter) =>{
        return letter+acc; //que empiece a acumular, pero los acomode a la izquierda
    })

    console.log(result);
};
reverseWithNoReverse("Mariposa");

//💪 Desafío Extra 1:
// Bego quiere simplificar un array de números de dos dígitos sumando sus dígitos.
// Crea una función que reciba un array de 5 números de dos dígitos y devuelva un array con la suma de los dígitos.
// Ejemplo: Si recibe [21, 34, 87, 10, 28], deberá imprimir [3, 7, 15, 1, 10].

//VERSION LARGA
// const simplifyThisNumbers = (numbers) => {
//     const separatedNumber = numbers.map(number => {  
//         return String(number)//convierte el número a string para aplicar reduce
//             .split('')// Separamos los dígitos en el array por numero
//             .reduce((acc, digit) => acc + Number(digit), 0); //suma los digitos, pasa a numero//0 es que empieza a contar desde ahi
//     });

//     console.log(separatedNumber);
// };

const simplifyThisNumbers = (numbers) => {
    numbers.forEach(number => {
        const numberString=String(number);
        const firstDigit=Number(numberString.charAt(0));
        const secondDigit=Number(numberString.charAt(1));
        console.log(firstDigit+secondDigit);
    });
    };

simplifyThisNumbers([21, 34, 87, 10, 28]);


//💪 Desafío Extra 2:
// Macarena quiere borrar usuarios específicos.
// Crea una función que reciba un id y borre al usuario correspondiente del siguiente array:
// const users = [
// { id: "user001", name: "Juan", surname: "Pérez", age: 30 },
// { id: "user002", name: "María", surname: "González", age: 25 },
// { id: "user003", name: "Pedro", surname: "Sánchez", age: 35 },
// { id: "user004", name: "Ana", surname: "Martínez", age: 28 },
// { id: "user005", name: "Luis", surname: "López", age: 40 }
// ];

// Ejemplo: Si recibe "user003", el array quedará sin Pedro.

const deleteThisUser=(users, id)=>{

    const result=users.filter(user => {
        return user.id !== id;  //quiero que me regrese los que NO tengan ese id   
    });
    console.log(result);

};

deleteThisUser([
    { id: "user001", name: "Juan", surname: "Pérez", age: 30 },
    { id: "user002", name: "María", surname: "González", age: 25 },
    { id: "user003", name: "Pedro", surname: "Sánchez", age: 35 },
    { id: "user004", name: "Ana", surname: "Martínez", age: 28 },
    { id: "user005", name: "Luis", surname: "López", age: 40 }
    ],"user003")

