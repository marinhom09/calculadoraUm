import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CalculadoraUm extends LightningElement {
    firstNumber;
    secondNumber;
    result;
    visivel = false;
    handleNumberFChange(event) {
        this.firstNumber = parseFloat(event.target.value);
    }
    handleNumberSChange(event) {
        this.secondNumber = parseFloat(event.target.value);
    }
    adi() {
        this.result = this.firstNumber + this.secondNumber;
    }
    mult() {
        this.result = this.firstNumber * this.secondNumber;
    }
    sub() {
        this.result = this.firstNumber - this.secondNumber;
    }
    div() { if(this.secondNumber== 0){
        const xxx = new ShowToastEvent({
            title: 'Erro!',
            message: 'Não é possivel dividir por 0',
            variant: 'error',           
        });
        this.dispatchEvent(xxx);
    }else{
        this.result = this.firstNumber / this.secondNumber;
    }
    }
    igual() {
        this.visivel = true;
    }
    limpar() {
        this.visivel = false;
        this.firstNumber = null;
        this.secondNumber = null;
        this.result = null;
    }
}
