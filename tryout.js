

const plantsDB = {
    corn: {
        yield: 30,
    },
};

const getYieldForPlant = (plant) => {
    return plantsDB[plant].yield;
};

getYieldForPlant('corn');