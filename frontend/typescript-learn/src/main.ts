// I - Primitives Types
// 1 - Number

// 2 - any
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
//obj.foo(); génère une erreur au runtime parce que la méthode foo n'existe pas
//obj(); génère une erreur car obj() n'est pas une fonction
obj.bar = 100;
obj = "hello";
const n: number = obj; // change le type de l'objet qui reçoit
console.log(typeof(n));
// Enum
// Enum numeric, il commence par défaut à zero
// Si nous lui definissons une valeur initiale, il incrementera le reste des valeurs à partir de cette valeur initiale, en fonction de là ou e fait l'initialisation
enum Direction{
    Up,
    Down,
    Left=8,
    Right
}

const direction = Direction.Right;
console.log(direction);

// Enum chaîne de caractère
enum DirectionChaine{
    Up = 'Up',
    Donw = 'Down',
    Left = 'Left',
    Right = 'Right'
}
const directionChaine = DirectionChaine.Donw
console.log(directionChaine)

//Types Alias
type Color = 'blue' | 'red' | 'green';
const ponyColor: Color = 'blue';

// Interface
interface Product{
    label: string,
    description: string,
    color:Color
}
//duckTyping
let p = {
    label : "test",
    description:"test",
    color: 'blue' as Color
}
function showProductInfos(p:Product){
    console.log(p.label);
}
showProductInfos(p);