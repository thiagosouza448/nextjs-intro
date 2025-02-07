// JSX
import { Carro } from "../poo/carro"; 

export class CarroEletrico extends Carro{
    constructor(marca,modelo,ano, autonomia){
        super(marca,modelo,ano);
        this.autonomia = autonomia
    }
    carregar(){
        console.log('carregando a bateria')
    }
}


export default function primeira() {
    const tesla = new CarroEletrico("Tesla", "Model S", 2023, 500);
    tesla.carregar(); // "Carregando a bateria..."
    tesla.buzinar(); // "Bii Bii!"
    console.log(tesla.autonomia); // 500
  
    return (
      <div>
        <h1>{tesla.marsca}</h1>
        <h1>{tesla.modelo}</h1>
        <h1>{tesla.ano}</h1>
        <h1>{tesla.autonomia}</h1>
        <h1>{tesla.modelo}</h1>



      </div>
    );
  
}