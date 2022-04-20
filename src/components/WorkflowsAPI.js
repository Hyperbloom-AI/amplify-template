import { Amplify,  API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
API.configure(awsconfig);

function WorkflowsAPI() {

    /*
        Create API with `amplify add api` then use your parameters below
    */

    // Each function must correspond 1:1 with a path
    async function testAPI(postData) {
        try {
            const apiName = "WorkflowsAPI"; // Place API Friendly Name Here
            const path = "/test/";

            const data = { 
                // Put any data you'd like to send to the API path here in the body
                body: {
                    "data": postData,
                }
            };

            const res = await API.post(apiName, path, data);

            return res
        } catch(error) {
            console.log("Error calling API: ", error);
            return null;
        }
    }

    return {
        // Make API Paths accessible from this point by declaring them as returns which are then exported
        testAPI: testAPI
    }
}

export default WorkflowsAPI;