import {test as basetest} from "@playwright/test";

type CustomFixture = {
    fixture1: any;
}

type CustomWorkerFixtures = {
    workerfixture1: any;
};


export const test = basetest.extend<CustomFixture, CustomWorkerFixtures>({
    fixture1: async ({}, use) => {
        // Setup code for fixture1
        const fixture1 = "This is fixture1";    
        console.log("Setting up fixture1");
        await use(fixture1);
        // Teardown code for fixture1 (if needed)
        console.log("Tearing down fixture1");
    }
,
    workerfixture1: [async ({}, use) => {
        // Setup code for customWorkerFixture1
        const workerfixture1 = "This is customWorkerFixture1";
        console.log("Setting up customWorkerFixture1");
        await use(workerfixture1);
        // Teardown code for customWorkerFixture1 (if needed)
        console.log("Tearing down customWorkerFixture1")}, {scope: 'worker'}]
});