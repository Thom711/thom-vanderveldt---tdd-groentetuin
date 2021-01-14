const getYieldForPlant = (plant, environmentFactors = null) => {
    // Returns the yield for the given plant.
    if (environmentFactors) {
        let plantYield = plant.yield;

        // Checks every entry of enviromental factors if it's of influence on the plant. If so,
        // plantyield is modified, as to keep a running tally.
        Object.entries(environmentFactors).forEach((entry) => {
            if (entry[0] in plant.factors) {
                let multiplication = plant.factors[entry[0]][entry[1]];
                plantYield = plantYield + ((multiplication / 100) * plantYield);
            };
        });

        return plantYield;
    };

    return plant.yield;
};

const getYieldForCrop = (input) => {
    // Returns the yield per plant time the amount of crops.
    return input.crop.yield * input.numCrops;
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