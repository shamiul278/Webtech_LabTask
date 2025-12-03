        document.getElementById("addBookBtn").addEventListener("click", function() 
        {

            let bookTitle = document.getElementById("bookTitle").value.trim();
            let publicationYear = document.getElementById("publicationYear").value.trim();


            let titleValid = /^[A-Za-z]+$/.test(bookTitle); 
            
            let yearValid = /^[0-9]{4}$/.test(publicationYear) && publicationYear >= 1900 && publicationYear <= new Date().getFullYear();


            document.getElementById("bookTitle").classList.remove("invalid");
            document.getElementById("publicationYear").classList.remove("invalid");

            

            if (!titleValid || !yearValid) 
            {
                if (!titleValid) 
                {
                    document.getElementById("bookTitle").classList.add("invalid");
                }
                if (!yearValid) 
                {
                    document.getElementById("publicationYear").classList.add("invalid");
                }
                alert("Please enter valid data. The title should contain only alphabetic characters, and the year should be a valid 4-digit number between 1900 and the current year.");
                return;
            }

            
            let newRow = document.createElement("tr");



            let titleCell = document.createElement("td");
            titleCell.textContent = bookTitle;
            newRow.appendChild(titleCell);


            
            let yearCell = document.createElement("td");
            yearCell.textContent = publicationYear;
            newRow.appendChild(yearCell);


            
            if (publicationYear < 2000) 
            {
                newRow.style.backgroundColor = "#d3d3d3";
                
            } 
            else 
            {
                newRow.style.backgroundColor = "#d4edda"; 

            }

            
            document.querySelector("#bookTable tbody").appendChild(newRow);

            
            document.getElementById("bookTitle").value = "";
            document.getElementById("publicationYear").value = "";
        }
    );