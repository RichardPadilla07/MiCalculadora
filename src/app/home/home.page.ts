import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  operation: string = '';

  calculate(op: 'sum' | 'sub' | 'mul' | 'div' | 'sen' | 'cos' | 'tan' | 'sqrt') {
    const a = Number(this.num1);
    const b = Number(this.num2);

    if (isNaN(a) || isNaN(b)) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    if (op === 'sum') {
      this.result = a + b;
      this.operation = 'Suma';

    } else if (op === 'sub') {
      this.result = a - b;
      this.operation = 'Resta';

    } else if (op === 'mul') {
      this.result = a * b;
      this.operation = 'Multiplicación';

    } else if (op === 'div') {
      if (b === 0) {
        this.result = null;
        this.operation = 'No se puede dividir entre cero';
      } else {
        this.result = a / b;
        this.operation = 'División';
      }

    } else if (op === 'sen') {
      if (b === 0 || b === null) {
        this.result = Math.sin(a);
        this.operation = 'Seno';
      } else {
        this.operation = 'La función seno solo requiere un número';
        this.result = null;
        return;
      }
      

    } else if (op === 'cos') {
      if (b === 0 || b === null) {
        this.result = Math.cos(a);
        this.operation = 'Coseno';
      } else {
        this.operation = 'La función coseno solo requiere un número';
        this.result = null;
        return;
      }

    } else if (op === 'tan') {
      if (b === 0 || b === null) {
        this.result = Math.tan(a);
        this.operation = 'Tangente';
      } else {
        this.operation = 'La función tangente solo requiere un número';
        this.result = null;
        return;
      }

    } else if (op === 'sqrt') {
      if (b === 0 || b === null) {
        this.result = Math.sqrt(a);
        this.operation = 'Raíz cuadrada';
      } else {
        this.operation = 'La función raíz cuadrada solo requiere un número';
        this.result = null;
        return;
      }

    } else {
      this.result = null;
      this.operation = 'Operación desconocida';
    }
  }
}