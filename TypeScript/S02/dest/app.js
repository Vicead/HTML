console.log('Hello World');
// //& Interfaces
// interface Calendar{
//     events:string[];
//     addEvents(event:string):void
// }
// class LMSCalendar implements Calendar{
//     constructor(public events:string[]){
//     }
//     addEvents(event: string): void {
//         this.events.push(event)
//     }
// }
// const de07 = new LMSCalendar(['HTML', 'JS', 'React'])
// de07.events.push('TS')
// console.log(de07)
// const de08 = new LMSCalendar(['HTML', 'JS', 'VueJS'])
// console.log(de08)
//////////////////////////////////////////////
// interface Color {
//     color: {r: number, g: number, b:number};
// }
// const red:Color={color: {r:255, g:0, b:0}}
// console.log(red)
// interface Shape {
//     area: number;
// }
// let shape1: Shape = {area:255}
// class Square implements Color, Shape {
//     constructor(public color: {r:number, g:number, b:number}, public area:number){
//     }
// }
// const sq1 = new Square({r:0,g:255,b:0},255)
// console.log(sq1)
/////////////////////////////////////////
// interface Sum {
//     (num1: number, num2: number):number;
// }
// function add(n1:number, n2:number):number{
//     return n1 + n2
// }
// function conC(n1:string, n2:string):string{
//     return n1 + n2
// }
// let mat:Sum = add 
// let str:Sum = conC
// console.log(mat(3,5)) 
// console.log(str('Hello ', 'World'))
//////////////////////////////////
// Class Modifiers
//? Private
// class Person{
//     name:string;
//     private age:number;
//     constructor(name:string, age:number){
//         this.name=name;
//         this.age=age;
//     }
//     getAge(){
//         console.log(this.age)
//     }
//     changeAge(newAge:number){
//         if(newAge>0 && newAge<130){
//             this.age=newAge
//             this.getAge()
//         }else{
//             console.log('Hatalı giriş yaptınız')
//         }
//     }
// }
// const Mark =new Person ('Mark', 45)
// console.log(Mark.name)
// Mark.getAge()
// Mark.changeAge(55)
// Mark.changeAge(145)
// Mark.changeAge(-21)
// Mark.changeAge(35)
//? Read only
//? Static
class Circle {
    static calcArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.13;
