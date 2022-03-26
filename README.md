# Datahouse-interview-question

## Goal: Datahouse is looking for new team members

Input:
    JSON file containing team members and applicants

Output:
	JSON file containing applicants' compatibility scores

This code computes applicants' compatibility scores for Datahouse's team by using
weighted averages. The weights for specific traits can be modified to Datahouse's preferences.
The team traits are also computed to provide additional information that can help with
specifying weights (see console, not the exported JSON file).

Weighted average computation summary

- Determine weight of traits
- Multiply trait value by weight
- Add the products
- Since compatibility score is between 0 and 1, divide by 100




## Thought process and approach:
Since the output is a compatibility score based on trait values, using weighted averages is appropriate and versatile
- Assign weights to traits

What kind of team are they looking to add a new member to?
- Don't know what kind of position is open so I cannot assume the weights on traits
- Thus, make program so that weights can be easily adjusted for any position type
- Since I know I'm applying for software developer intern position, set initial weights for software developer intern position

Example situations for assigning weights
- DH wants to have overall specific traits across its team.
  Ex. New member's strengths are the current team's weakness, new member keeps overall team stats balanced
  Current code computes team traits and requires a person to look at those traits to make a decision on
    how to weigh certain traits. If I had more time, I'd make a function that'd compute compatibility scores
    based on team stats.
  Approach (future work)
    Sum up the values of each team member's traits
    Find out worst team trait
    Find candidate with highest trait in the team's weak trait
    or
    Find candidate that keeps overall team stats balanced
  After computing team stats, I realized the team is somewhat balanced already.
- DH wants high (intelligence) across its team members
    (Intelligence) is weighted heavily
- DH wants a well rounded individual. All traits weighted equally.

Future work
- Automate computation of applicants' compatibility scores based on team stats
- Reorganize code so that it could take in any size of team members or applicants
