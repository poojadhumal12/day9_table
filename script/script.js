document.addEventListener("DOMContentLoaded", function() {
    const addCustomerBtn = document.getElementById("addCustomerBtn");
    const searchInput = document.getElementById("searchInput");
    const orderTable = document.getElementById("orderTable");
    addCustomerBtn.addEventListener("click", function() {
        // Add customer functionality
    });

    // Search functionality
    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        const rows = orderTable.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("td");
            let found = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j]) {
                    const textValue = cells[j].textContent || cells[j].innerText;
                    if (textValue.toLowerCase().indexOf(filter) > -1) {
                        found = true;
                        break;
                    }
                }
            }
            if (found) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
});
