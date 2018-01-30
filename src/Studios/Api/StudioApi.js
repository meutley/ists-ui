import IstsApi from "../../Common/Api/IstsApi";
import AuthenticatedFetch from "../../Common/Fetch/AuthenticatedFetch";

class StudioApi {
    static getByFriendlyUrl(context, friendlyUrl) {
        return AuthenticatedFetch.perform(context,
            `${IstsApi.StudioByFriendlyUrlUrl}?friendlyUrl=${encodeURI(friendlyUrl)}`);
    }
}

export default StudioApi;
