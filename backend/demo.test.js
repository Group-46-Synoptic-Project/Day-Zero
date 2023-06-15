/**
 * Test Suite for the Hypothetical Back-End of Govantage Website.
 *  
 * NOTE: This is a representative test suite showcasing what tests could look like for an actual backend. 
 * It doesn't connect to any real server, database, or API. Tests are simplified and responses 
 * are assumed to be in a predefined format. Actual tests would involve setting up a test database 
 * and a mock server, with more complex and comprehensive test scenarios.
 *  
 * Developed with Jest testing framework.
 */

const request = require('supertest');
const app = require('../app'); 

describe('GET /attractions', () => {
    it('responds with json containing a list of all attractions', async () => {
        const response = await request(app).get('/attractions');

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        expect(response.body).toBeInstanceOf(Array);
    });

    it('responds with specific known attraction', async () => {
        const response = await request(app).get('/attractions');
        
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: 'Fairfield Shipyard',
                    description: expect.any(String)
                })
            ])
        );
    });

    it('responds with 404 if the route does not exist', async () => {
        const response = await request(app).get('/attractions/non-existent-route');
        
        expect(response.statusCode).toBe(404);
    });
});
