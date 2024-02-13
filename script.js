function searchDisease() {
    var diseaseName = document.getElementById("diseaseName").value.toLowerCase();

    var result = {};

   
    switch (diseaseName) {
        case "covid-19":
            result = {
                discoveredBy: "Unknown",
                firstInfected: "Unknown",
                yearOfDiscovery: "2019",
                preventionMethod: "Wearing masks, social distancing, vaccination",
                symptoms: "Fever, cough, shortness of breath, fatigue, body aches",
                summary: "COVID-19 is caused by the SARS-CoV-2 virus and primarily spreads through respiratory droplets.",
                medications: "Vaccines (Pfizer-BioNTech, Moderna, Johnson & Johnson)"
            };
            break;
        case "cancer":
            result = {
                discoveredBy: "Unknown",
                firstInfected: "Unknown",
                yearOfDiscovery: "Ancient",
                preventionMethod: "Healthy lifestyle, regular screenings",
                symptoms: "Depends on cancer type",
                summary: "Cancer is a group of diseases characterized by abnormal cell growth.",
                medications: "Chemotherapy, radiation therapy, surgery, targeted therapy, immunotherapy"
            };
            break;
        default:
            result = {
                discoveredBy: "Not Found",
                firstInfected: "Not Found",
                yearOfDiscovery: "Not Found",
                preventionMethod: "Not Found",
                symptoms: "Not Found",
                summary: "Disease information not available.",
                medications: "Not Found"
            };
    }

    displayResults(result);
}

function displayResults(result) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<h2>Search Results</h2>" +
        "<p><strong>Discovered By:</strong> " + result.discoveredBy + "</p>" +
        "<p><strong>First Infected:</strong> " + result.firstInfected + "</p>" +
        "<p><strong>Year of Discovery:</strong> " + result.yearOfDiscovery + "</p>" +
        "<p><strong>Prevention Method:</strong> " + result.preventionMethod + "</p>" +
        "<p><strong>Symptoms:</strong> " + result.symptoms + "</p>" +
        "<p><strong>Summary:</strong> " + result.summary + "</p>" +
        "<p><strong>Medications:</strong> " + result.medications + "</p>";
}
