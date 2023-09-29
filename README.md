# Calc X
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


## Instructions

* Look through the starting files provided in this repository. You will find the logic of the calculator app in `modules/percentage.js` and `modules/aspect-ratio.js`. 
* Export the functions in the operations files.
* Import the functions to `modules/index.js` and add the functionality to the UI in the `index.js` file.
* The calculation result should update while the user is entering values, so no submit buttons are needed.
* Do not forget to add the `index.js` file at the end of the `index.html` file. Don't change anything else in `index.html`.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Export

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `percentage.js` has `modulo`, `percentage`, `percentagOf` and `difference` exports |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `aspect-ratio.js` has `calculateAspectRatio` export |

### Import

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `index.js` imports `modulo`, `percentage`, `percentagOf`, `difference` and  `calculateAspectRatio` functions |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `modules/index.js` should be included in `index.html` using script tag |

### Modulo Calculation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Page should display correct modulo result based on entered values |

### Percentage Calculation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Page should display correct percentage result based on entered values |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Page should display correct 'percentage of' result based on entered values |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Page should display correct difference percentage result based on entered values |

### Aspect Ratio Calculation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Page should display correct new height based on entered original width and height and new width |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-modules-imports-exports)


[//]: # (autograding info end)