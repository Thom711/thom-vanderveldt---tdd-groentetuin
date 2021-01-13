

const getYieldForPlant = (plant) => {
    return plant.yield;
};

const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
};

const getTotalYield = ({crops}) => {
    return crops.map((crop) => {
        return crop.crop.yield * crop.numCrops;
    }).reduce((prev, curr) => {
        return prev + curr;
    }, 0);
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
};