// Sample data for toilets (you would normally pull this from a real database or API)
const toilets = [
    { name: "Public Toilet A", location: "Ernakulam, Kerala", address: "Street 1, Ernakulam" },
    { name: "Public Toilet B", location: "Kochi, Kerala", address: "Street 2, Kochi" },
    { name: "Public Toilet C", location: "Trivandrum, Kerala", address: "Street 3, Trivandrum" }
];

function findToilets() {
    const location = document.getElementById('location').value.trim();
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';  // Clear previous results

    // Filter toilets based on location input
    const filteredToilets = toilets.filter(toilet => toilet.location.toLowerCase().includes(location.toLowerCase()));

    if (filteredToilets.length > 0) {
        filteredToilets.forEach(toilet => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${toilet.name}</strong><br>Location: ${toilet.location}<br>Address: ${toilet.address}`;
            resultsList.appendChild(li);
        });
    } else {
        resultsList.innerHTML = '<p>No toilets found for this location. Try a different city.</p>';
    }
}
