let btnSubmit = document.getElementById("submit");

let textAreaOrder = document.getElementById("order");
let directory = [];
textAreaOrder.addEventListener("click", submit);

function durationPrice(duration) {

switch (Number(duration)) {
    case 3: return 0;
    case 12: return 250;
    case 24: return 500;
    case 48: return 1000;

    default:
    return 0;
}    

}

    function durationValue() {
      const Duration = document.getElementById("Duration");
      const text = (Duration.options[Duration.selectedIndex].text);
      const total = durationPrice(Duration.value)
      return {
        duration: Duration.value,
        text: text,
        total: total,
        price: "LKR " + total
      }

    }
    function myFunction(){
        document.getElementById("myForm").reset();
    }
    function POrder(){
        document.getElementById("Newname").required=true;
        document.getElementById("submit").value=true;
        alert("Thank you for your Purchase")
    }
    

    function itemPriceCalculator(parent, eleAdult, aPrice, eleChild, cPrice, title) {
      if (!document.getElementById(parent).checked) {
        return { text: "", total: 0 }
 }

      const adults = document.getElementById(eleAdult).value;
      const children = document.getElementById(eleChild).value;

      const textAdults = "Adults    (" + adults + ") x LKR " + aPrice + "";
      const textChildren = "Children  (" + children + ") x LKR " + cPrice + "";

      return {
        total: (aPrice * Number(adults)) + (cPrice * Number(children)),
        text: (title + "\n" + textAdults + "\n" + textChildren + "\n\n")
      }
    }

    function submit(event) {
      event.preventDefault();

      const dpass = itemPriceCalculator("DPass", "DPAdults", 1000, "DPChildren", 500, "Daily Pass");
      const spass = itemPriceCalculator("SPass", "SPAdults", 500, "SPChildren", 250, "Student Pass");
      const fpass = itemPriceCalculator("FPass", "FPAdults", 5000, "FPChildren", 2500, "Foreign Pass");

      const duration = Number(document.getElementById("Duration").value)
      const d = durationValue();

      const annualPasses = Number(document.getElementById("APass").value);
      const annualPassTotal = (5000 * annualPasses)
      const aPassText = "Annual Passes (" + annualPasses + ") x LKR " + annualPassTotal;

      const foodTokens = Number(document.getElementById("Token").value);
      const foodTokensPassTotal = (500 * foodTokens)
      const ftText = "Food Tokens (" + foodTokens + ") x LKR " + foodTokensPassTotal

      const passTotal = (Number(dpass.total) + Number(spass.total) + Number(fpass.total))


      const passText = dpass.text + spass.text + fpass.text;
      const durationText = "Duration: " + d.text + " " + d.price + "\n";

      const total = "Total LKR " + (passTotal + d.total + annualPassTotal + foodTokensPassTotal)

       textAreaOrder.value = passText + " \n" + durationText + "\n" + aPassText + "\n" + ftText + "\n\n" + total;

    let Fpurchase = passText + " \n" + durationText + "\n" + aPassText + "\n" + ftText + "\n\n" + total;
    document.getElementById("order").innerText = Fpurchase;
    addToLocalStorage(Fpurchase);

}
function addToLocalStorage(newFinal){
    var Favourites = {newFinal};
    favos(Favourites);
}
function favos(Favourites){
    localStorage.clear();
    directory.push(Favourites);
    localStorage.setItem('directory', JSON.stringify(directory));
}

    btnSubmit.addEventListener("click", submit);

    //Donate button
    function Donate(){
        document.getElementById("Donate").required=true;
        alert("Our Zoo apreciates your Donations")
}



    
