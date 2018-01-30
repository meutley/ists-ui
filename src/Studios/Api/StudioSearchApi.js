import { IstsApi } from '../../Common/Api';
import AuthenticatedFetch from "../../Common/Fetch/AuthenticatedFetch";

class StudioSearchApi {
    static search(context, postalCode, distance) {
        const requestBody = {
            postalCodeSearchCriteria: {
                fromPostalCode: postalCode,
                distance: distance
            }
        };
        
        return AuthenticatedFetch.perform(context,
            IstsApi.StudioSearchUrl, {
                method: 'POST',
                headers: new Headers({
                    'content-type': 'application/json'
                }),
                body: JSON.stringify(requestBody)
            });
    }
}

export default StudioSearchApi;
