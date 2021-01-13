// Destructered import from farm.js
const { getYieldForPlant, getYieldForCrop, getTotalYield } = require("./farm");

describe("getYieldForPlant", () => {
    // Each plant has a yield in kilos, influenced by enviromental factors(i.e. sun, wind)

    const corn = {
        name: "corn",
        yield: 30,
    };

    // Get yield for a certain plant without any influencial factors
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    // Crop is all plants of a certain kind. Yield is number of plants * yield per plant

    // Get yield for a whole crop of a plant without enviromental factors
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };

        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    // Total yield of several crops, without enviromental factors

    // Simple test of afformentioned
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];

        expect(getTotalYield({ crops })).toBe(23);
    });

    // Test if 0 crops returns 0
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };

        const crops = [{ crop: corn, numCrops: 0 }];

        expect(getTotalYield({ crops })).toBe(0);
    });
});