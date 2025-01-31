  const getSumBtn = document.getElementById("get-sum-btn");

    const getSum = () => {
      const prices = document.querySelectorAll(".price");
      let total = 0;

      prices.forEach(price => {
        total += Number(price.textContent);
      });

      let totalRow = document.getElementById("total-row");
      if (!totalRow) {
        totalRow = document.createElement("tr");
        totalRow.id = "total-row";

        const totalCell = document.createElement("td");
        totalCell.setAttribute("colspan", "2");
        totalCell.id = "ans";

        totalRow.appendChild(totalCell);
        document.querySelector("table").appendChild(totalRow);
      }

      document.getElementById("ans").textContent = Total Price: Rs ${total};
    };

    getSumBtn.addEventListener("click", getSum);