document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById('loanAmount').value); 
    const interestRate = parseFloat(document.getElementById('interestRateInput').value); 
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value); 

    
    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Please enter a valid number for all the fields."); 
        return; 
    }

    const monthlyInterest = interestRate / 100 / 12; 
    const totalPayments = loanTerm; 
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest){ 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p> <!-- Corrected HTML tags and typo -->
        <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p> <!-- Corrected typo -->
    `;
}
