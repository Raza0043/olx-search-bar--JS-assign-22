document.addEventListener("DOMContentLoaded", function () {
    var items = {
        mobiles: [
            {
                name: "VIVO",
                model: "Y20",
                price: 30000,
                location: "Saddar, Rawalpindi",
                image: "Pictures/vivo.png",
            },
            {
                name: "Samsung",
                model: "Galaxy S21",
                price: 80000,
                location: "M.A. Jinnah Road, Karachi",
                image: "Pictures/samgsumg.png",
            },
            {
                name: "Oppo",
                model: "F17",
                price: 25000,
                location: "Bahadurabad, Karachi",
                image: "Pictures/opppo.png",
            },
        ],
        cars: [
            {
                name: "Suzuki",
                model: "Cultus",
                price: 1500000,
                location: "Islamabad",
                image: "Pictures/suzuki.png",
            },
            {
                name: "Toyota",
                model: "Corolla",
                price: 3500000,
                location: "Lahore",
                image: "Pictures/cultus.png",
            },
            {
                name: "Honda",
                model: "Civic",
                price: 4000000,
                location: "Karachi",
                image: "Pictures/toyota.png",
            },
        ],
    };

    var searchBar = document.querySelector(".search-bar");
    var searchButton = document.querySelector(".search-button");
    var resultsContainer = document.createElement("div");
    resultsContainer.className = "search-results";
    document.body.appendChild(resultsContainer);

    function displayResults(category) {
        resultsContainer.innerHTML = ""; // Clear previous results
        items[category].forEach((item) => {
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" />
                <div class="card-text">
                    <h3>Rs ${item.price}</h3>
                    <p>${item.name} ${item.model}</p>
                    <p>${item.location}</p>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    }

    searchButton.addEventListener("click", function () {
        var query = searchBar.value.toLowerCase();
        if (query.includes("car")) {
            displayResults("cars");
        } else if (query.includes("mobile")) {
            displayResults("mobiles");
        } else {
            resultsContainer.innerHTML = `<p>No results found for "${query}"</p>`;
        }
    });
});
