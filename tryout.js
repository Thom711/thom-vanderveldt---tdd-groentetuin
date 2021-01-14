const getYieldForPlant = (plant, environmentFactors = null) => {
    // Returns the yield for the given plant.
    if(environmentFactors) {
        let plantYield = plant.yield;

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

const corn = {
    name: "corn",
    yield: 30,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  const environmentFactors = {
    sun: "low",
  };

  console.log(getYieldForPlant(corn, environmentFactors));