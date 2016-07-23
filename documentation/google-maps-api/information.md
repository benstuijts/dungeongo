## Zoom Levels

The initial resolution at which to display the map is set by the zoom property, where zoom 0 corresponds to a map of the Earth fully zoomed out, and larger zoom levels zoom in at a higher resolution.

zoom: 8

Offering a map of the entire Earth as a single image would either require an immense map, or a small map with very low resolution. As a result, map images within Google Maps and the Maps JavaScript API are broken up into map "tiles" and "zoom levels." At low zoom levels, a small set of map tiles covers a wide area; at higher zoom levels, the tiles are of higher resolution and cover a smaller area. The following list shows the approximate level of detail you can expect to see at each zoom level:

* 1: World
* 5: Landmass/continent
* 10: City
* 15: Streets
* 20: Buildings

## Get a Key/Authentication

All Google Maps JavaScript API applications require authentication.

1. Standard API users: If you're using the API under the standard plan, you must use a browser key (a type of API key) set up in a project of your choice. See more about API keys for the standard API.
Including a key when loading the API allows you to monitor your application's API usage in the Google API Console, enables access to generous free daily quota, and ensures that Google can contact you about your application if necessary.
2. Premium Plan users: If you're using the API under the Google Maps APIs Premium Plan you have two authentication options:
Use a browser key (a type of API key) set up in the Google Maps APIs Premium Plan project created for you when you purchased the Premium Plan.
  or
Use your client ID instead of an API key.
See the Google Maps APIs Premium Plan section below for information on choosing the best authentication method.

### Authentication for the standard API — API keys

GET a KEY: https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&keyType=CLIENT_SIDE&reusekey=true

Alternatively, follow these steps to get an API key:
1. Go to the Google API Console.
2. Create or select a project.
3. Click Continue to enable the API and any related services.
4. On the Credentials page, get a Browser key (and set the API Credentials).
Note: If you have an existing Browser key, you may use that key.
5. To prevent quota theft, secure your API key following these best practices.
6. (Optional) Enable billing. See Usage Limits for more information.

### Google Maps JavaScript API Usage Limits

Standard Usage Limits
Free until exceeding 25,000 map loads per 24 hours

Premium Usage Limits
Pricing based on volume required

If your use of the standard Google Maps JavaScript API exceeds the free usage limits, you can purchase excess map loads online by enabling billing on the project. Once billing has been enabled, if you exceed the free usage limits, you will be billed at $0.50 USD / 1000 additional requests, up to 100,000 daily.
