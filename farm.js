const getYieldForPlant = (plant, environmentFactors = null) => {
    // Returns the yield for the given plant.
    let plantYield = plant.yield;

    if (environmentFactors) {
        // Checks every entry of enviromental factors if it's of influence on the plant. If so,
        // plantyield is modified, as to keep a running tally.
        Object.entries(environmentFactors).forEach((entry) => {
            if (entry[0] in plant.factors) {
                let multiplication = plant.factors[entry[0]][entry[1]];
                plantYield = plantYield + ((multiplication / 100) * plantYield);
            };
        });     
    };

    return plantYield;
};

const getYieldForCrop = (input) => {
    // Returns the yield per plant time the amount of crops.
    // Rounded to two decimals to avoid numbers such as "18.00000000004" (yes that happened)
    return +(getYieldForPlant(input.crop, input.environmentFactors) * input.numCrops).toFixed(2);
};

const getTotalYield = ({ crops }) => {
    // Map over each entry to get the yield per crop, then add them all together.
    return crops.map((crop) => {
        return crop.crop.yield * crop.numCrops;
    }).reduce((prev, curr) => {
        return prev + curr;
    }, 0);
};

const getCostForCrop = (input) => {
    // The cost is set at €1 per plant, so no multiplication neccesary. Just return the number of plants.
    return input.numCrops;
};

const getRevenueForCrop = (input) => {
    return input.crop.revenue * input.crop.yield * input.numCrops;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
};