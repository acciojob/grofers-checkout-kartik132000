function calculateTotal() {
            let total = 0;
            // Select all price elements
            let priceElements = document.querySelectorAll(".prices");

            // Calculate the sum of prices
            priceElements.forEach(priceElement => {
                total += parseFloat(priceElement.textContent);
            });

            // Create a new row
            let totalRow = document.createElement("tr");
            let totalCell = document.createElement("td");

            // Set attributes and values
            totalCell.colSpan = 2; 
            totalCell.textContent = "Total Price: $" + total.toFixed(2);
            totalRow.appendChild(totalCell);

            // Append the total row to the table
            document.getElementById("grocery-table").appendChild(totalRow);
        }

        calculateTotal();