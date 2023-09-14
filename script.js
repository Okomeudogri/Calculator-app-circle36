
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    // compute() {
    //   let computation
    //   const prev = parseFloat(this.previousOperand)
    //   const current = parseFloat(this.currentOperand)
    //   if (isNaN(prev) || isNaN(current)) return
    //   switch (this.operation) {
    //     case '+':
    //       computation = prev + current
    //       break
    //     case '-':
    //       computation = prev - current
    //       break
    //     case '*':
    //       computation = prev * current
    //       break
    //     case '÷':
    //       computation = prev / current
    //       break
    //     default:
    //       return
    //   }
    //   this.currentOperand = computation
    //   this.operation = undefined
    //   this.previousOperand = ''
    // }
  

// const numberButtons= document.querySelectorAll('[data-number]') 
// const operationButtons= document.querySelectorAll('[data-operation]') 
// const equalsButton= document.querySelector('[data-equals]')
// const deleteButton= document.querySelector('[data-delete]')
// const allclearButton= document.querySelector('[data-all-clear]')
// const previousOperandTextElementButton= document.querySelector('[data-previous-operand]')
// const currentOperandTextElementButton= document.querySelector('[data-current-operand]')
