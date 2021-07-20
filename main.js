const stockPrice = document.getElementById("users-stock-price");
const quantityOfStock = document.getElementById("quantity-of-stock");
const currentStockPrice = document.getElementById("current-stock-price");
const btnCheck = document.getElementById("btn-check");
const output = document.getElementById("output");
const outputImg = document.getElementById("stock-img");

function calProfitAndLoss() {
  const quantity = Number(quantityOfStock.value);
  const costPrice = Number(stockPrice.value) * quantity;
  const sellPrice = Number(currentStockPrice.value) * quantity;

  if (
    quantity === "" ||
    stockPrice.value === "" ||
    currentStockPrice.value === ""
  ) {
    output.innerHTML =
      "All the fields are mandatory, please enter all the values!";
  } else {
    const absolute = (sellPrice - costPrice).toFixed(2);
    const percentage = ((absolute / costPrice) * 100).toFixed(2);

    if (absolute > 0) {
      output.innerText = `Congratulations! You gained ${percentage}%. Your total profit is ₹${absolute}`;
      outputImg.src = "images/profit.png";
    } else if (absolute == 0) {
      output.innerHTML = "No profit or loss";
    } else {
      output.innerHTML = `Ohh no! You have lost ${-percentage}%. You total loss is ₹${-absolute}`;
      outputImg.src = "images/loss.png";
    }
  }
}

btnCheck.addEventListener("click", calProfitAndLoss);
