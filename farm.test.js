// Destructered import from farm.js
const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostForCrop, 
    getRevenueForCrop 
} = require("./farm");

describe("getYieldForPlant", () => {
    // Each plant has a yield in kilos, influenced by environmental factors(i.e. sun, wind)

    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
          soil: {
            bad: -40,
            standard: 0,
            good: 40,
          },
        },
      };

    // Get yield for a certain plant without any influencial factors.
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });

    // 3 tests for getting the yield with increasingly complicated environmental factors.
    test("Get yield for plant with a low sun environment", () => {
        const environmentFactors = {
            sun: "low",
          };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Get yield for plant with two enviromental factors", () => {
        const environmentFactors = {
            sun: "high",
            wind: "medium",
          };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(31.5);
    });

    test("Get yield for plant with three enviromental factors", () => {
        const environmentFactors = {
            sun: "medium",
            wind: "medium",
            soil: "good",
          };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(29.4);
    });
});

describe("getYieldForCrop", () => {
    // Crop is all plants of a certain kind. Yield is number of plants * yield per plant

    // Get yield for a whole crop of a plant without environmental factors
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
    // Total yield of several crops, without environmental factors

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

describe('getCostForCrop', () => {
    // Total cost of a certain crop

    test("Get cost for one crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
    
        const input = {
            crop: corn,
            numCrops: 10,
        };
    
        expect(getCostForCrop(input)).toBe(10);
    });
});

describe('getRevenueForCrop', () => {
    // Total revenue for a crop, without environmental factors.

    test("Get revenue for one crop without environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            revenue: 5,
        };
    
        const input = {
            crop: corn,
            numCrops: 10,
        };
    
        expect(getRevenueForCrop(input)).toBe(150);
    });
});;