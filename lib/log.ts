export function logFetchResponse(
  response: GoogleAppsScript.URL_Fetch.HTTPResponse
): void {
  console.log(`STATUS: `, response.getResponseCode())
  console.log(`RESPONSE: `, response.getContentText())
}
