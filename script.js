const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
          function calculateTotal() {
            let priceElements = document.querySelectorAll(".prices");
            let total = 0;

            priceElements.forEach(price => {
                total += parseFloat(price.textContent);
            });

            // Remove existing total row if it exists
            let existingTotalRow = document.getElementById("totalRow");
            if (existingTotalRow) {
                existingTotalRow.remove();
            }

            // Create a new row for the total price
            let table = document.getElementById("groceryTable");
            let totalRow = document.createElement("tr");
            totalRow.id = "totalRow";  // Assign ID to prevent duplicates

            let totalCell = document.createElement("td");
            totalCell.colSpan = 2; // Span across both columns
            totalCell.style.fontWeight = "bold";
            totalCell.textContent = "Total Price: $" + total.toFixed(2);

            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        }

};

getSumBtn.addEventListener("click", getSum);

