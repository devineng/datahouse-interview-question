const data = require('./input.json');

// Change these weights to fit DataHouse position
// Array order: intelligence, strength, endurance, spicy tolerance
// Current weights for software developer intern
let weights = [0.5, 0.2, 0.2, 0.1];

function TeamStats(data) {
    let teamIntelligence = 0;
    let teamStrength = 0;
    let teamEndurance = 0;
    let teamSpicyTol = 0;

    for (let i = 0; i < data.team.length; i++) {
        teamIntelligence += data.team[i].attributes.intelligence;
        teamStrength += data.team[i].attributes.strength;
        teamEndurance += data.team[i].attributes.endurance;
        teamSpicyTol += data.team[i].attributes.spicyFoodTolerance;
    }
    return [teamIntelligence, teamStrength, teamEndurance, teamSpicyTol];
}
console.log('Team Stats: ' + TeamStats(data));

function ApplicantStats(data, applicantNum) {
    const intelligence = data.applicants[applicantNum].attributes.intelligence;
    const strength = data.applicants[applicantNum].attributes.strength;
    const endurance = data.applicants[applicantNum].attributes.endurance;
    const spicyTol = data.applicants[applicantNum].attributes.spicyFoodTolerance;
    return [intelligence, strength, endurance, spicyTol];
}

// Create an array of just the applicant's trait values
const john = ApplicantStats(data, 0);
const jane = ApplicantStats(data, 1);
const joe = ApplicantStats(data, 2);

function WeightedAvg(person, weights) {
    let weightedProduct = 0;
    for (let i = 0; i < person.length; i++) {
        weightedProduct += person[i] * weights[i];
    }
    return weightedProduct / 10;
    // Divide by 10 to put number within [0,1]
}

console.log('Weights ' + weights);
console.log('John ' + WeightedAvg(john, weights));
console.log('Jane ' + WeightedAvg(jane, weights));
console.log('Joe ' + WeightedAvg(joe, weights));

// function to assess for how well rounded applicant is
// function to assess how well an applicant who joins the team keeps the team traits balanced

// Put results back into json format
// Make object in desired format, json.stringify it, write to file

const scoredApplicants = {
    "scoredApplicants" : [
        {
            "name" : data.applicants[0].name,
            "score" : WeightedAvg(john, weights)
        }, {
            "name" : data.applicants[1].name,
            "score" : WeightedAvg(jane, weights)
        }, {
            "name" : data.applicants[2].name,
            "score" : WeightedAvg(joe, weights)
        }
    ]
}

const fs = require('fs')

const saveData = (exportData) => {
    const finished = (error) => {
        if (error) {
            console.error(error)
            return;
        }
    }

    const jsonData = JSON.stringify(exportData)
    fs.writeFile('scoredApplicants.json', jsonData, finished)
}

saveData(scoredApplicants);