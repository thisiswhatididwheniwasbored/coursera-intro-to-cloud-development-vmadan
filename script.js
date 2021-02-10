function compute()
{
    //declare variables and source them from HTML dom
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    
    //calculate interest formula
    interest = ((principal * years * rate)/100);
    
    //calculate future year by getting current year and adding number of years
    currentYear = new Date().getFullYear();
    futureYear = currentYear + years;

    r = document.getElementById("result");
    r.innerText = 
        'If you deposit ' + 1000000 + ' \n'
        'at an interest rate of ' + 3.5 + '%' + ' \n' +
        'You will receive an amount of ' + 175000 + '\n' +
        'in the year' + + ' \n';

}


//function to update Rate range on span 
function updateRate() {
    rateValue = document.getElementById("rate-value")
    rateValue.innerText = document.getElementById("rate").value;
}
        