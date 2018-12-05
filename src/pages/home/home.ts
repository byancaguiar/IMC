import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Altura:string;
  public  Peso:string;
  public calculo:string;
  public resultado:number;

  calculoIMC(){
    let altura = parseFloat(this.Altura)
    let peso = parseFloat(this.Peso);
    this.resultado = peso / (altura * altura);

    if (this.resultado < 18.5){
       this.calculo = "Você está abaixo do peso";
    }

      else if (this.resultado >= 18.5 && this.resultado < 24.9){
          this.calculo = "Você está no peso normal";
      }

        else if (this.resultado >= 24.9 && this.resultado <= 29.9){
            this.calculo = "Você está Sobrepeso";
        } 

          else if (this.resultado >= 30 && this.resultado <= 34.9){
              this.calculo = "Você está na Obesidade grau I";
          } 

            else if (this.resultado >= 35 && this.resultado <= 39.9){
                this.calculo = "Você está na Obesidade grau II";
            } 

              else {
                      this.calculo = "Você está na Obesidade mórbida";
              } 
    }
  }