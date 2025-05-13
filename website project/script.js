const apiUrl = "https://script.google.com/macros/s/AKfycbx7gXhXftSn5a9b0IBekqDAK1w5yiQagsM8mt-w1HohecQlyVWL7fTQaAaXajTuDJAF/exec";

function cleanKeys(entry) {
    let cleanedEntry = {};
    for (let key in entry) {
      cleanedEntry[key.trim()] = entry[key];
    }
    return cleanedEntry;
  }
  
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("data");
      data.forEach(entry => {
        // Clean the keys in each entry
        const cleanedEntry = cleanKeys(entry);
  
        const studentId = cleanedEntry["Student ID"] || 'No ID';
        const courseName = cleanedEntry["Course Name"] || 'No Course Name';
        const activityType = cleanedEntry["Activity Type"] || 'No Activity';
        const timeSpent = cleanedEntry["Time Spent (Minutes)"] || 'No Time';
        const quizScore = cleanedEntry["Quiz Score (Optional, only for Quiz)"] || 'N/A';
  
        // Combine these pieces of information into one string
        const fullInfo = `Student ID: ${studentId} - Course: ${courseName} - Activity: ${activityType} - Time Spent: ${timeSpent} mins - Quiz Score: ${quizScore}`;
  
        const div = document.createElement("div");
        div.innerHTML = fullInfo;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      document.getElementById("data").innerHTML = "<p>Sorry, there was an error fetching the data.</p>";
    });
  