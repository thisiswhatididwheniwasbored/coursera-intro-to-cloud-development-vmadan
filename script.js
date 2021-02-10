function compute()
{
    //declare variables and source them from HTML dom
    principal = document.getElementById("principal").value;
    if (parseInt(principal,10) <= 0) {
        alert("Please enter a non-zero positive principal.");
        principal.focus();
    }

    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    
    //calculate interest formula
    interest = ((principal * years * rate)/100);
    amount = parseInt(principal,10) + parseInt(interest,10);
    
    //calculate future year by getting current year and adding number of years
    currentYear = new Date().getFullYear();
    futureYear = parseInt(currentYear,10) + parseInt(years,10);

    //get result element and update result by concatenating a lot of strings
    r = document.getElementById("result");
    r.innerHTML = 
        '<p> If you deposit <strong>' + principal + 
        '</strong>, at an interest rate of <strong>' + rate + 
        '%</strong>, You will receive an amount of <strong>' + amount + 
        '</strong>, in the year <strong>' + futureYear + 
        '</strong>.</p>';
//     r.innerText = interest + ' ' + years;

}


//function to update Rate range on span 
function updateRate() {
    //get rateValue element from HTML dom and update innerText value to the updated rate from slider.
    rateValue = document.getElementById("rate-value")
    rateValue.innerText = document.getElementById("rate").value;
}
