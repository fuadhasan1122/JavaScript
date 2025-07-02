
const poll = new Map();

// Function to add a new option
function addOption(option) {
    if (!option || option.trim() === "") {
        return `Option cannot be empty.`;
    }

    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }

    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
}

// Function to vote for an option
function vote(option, voterId) {
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }

    const voters = poll.get(option);
    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }

    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
}

// Function to display poll results
function displayResults() {
    let result = "Poll Results:\n";
    for (const [option, voters] of poll.entries()) {
        result += `${option}: ${voters.size} votes\n`;
    }
    return result.trim(); // remove last newline
}
// Add options
console.log(addOption("Turkey"));   
console.log(addOption("Morocco"));    
console.log(addOption("Italy"));      

// Cast votes
console.log(vote("Turkey", "user1"));   
console.log(vote("Turkey", "user2"));   
console.log(vote("Morocco", "user3"));  

// Display results
console.log(displayResults());



