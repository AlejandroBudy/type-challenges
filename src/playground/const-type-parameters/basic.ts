export type User = {name: string; age: number};

function getUsername<T extends User>(user: T): T['name'] {
  return user.name;
}

const username = getUsername({name: 'Alex', age: 31});
//     ^ string
const usernameWithConst = getUsername({name: 'Alex', age: 31} as const);
//    ^ Alex

// Con la forma anterior depende de como usamos la function
// Const type parameter lo define en la funcion
function getUserAge<const T extends User>(user: T): T['age'] {
  return user.age;
}

const userAge = getUserAge({name: 'Alex', age: 31});
//     ^ 31

// readonly es necesario para que el array sea inmutable
// si quitamos el readonly ya no es type parameter y no devuelve la constante
type HasNames = {names: readonly string[]};
function getNameExactly<const T extends HasNames>(args: T): T['names'] {
  return args.names;
}
const names = getNameExactly({names: ['Alex', 'Alejandra']});
