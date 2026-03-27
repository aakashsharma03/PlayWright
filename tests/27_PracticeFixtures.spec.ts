import {test} from '../fixtures/CustomFixture';

test('Test using custom fixture', async ({fixture1, workerfixture1  }) => {
    console.log(fixture1);
    console.log(workerfixture1);
});

test('Another test using custom fixture', async ({fixture1  }) => {
    console.log(fixture1);

});