import services from "../../../services/services";
export default async function callVibeIt(
  loadingBarRef,
  searchParams,
  currentPage,
  setSearchResults,
  setIsLoading,
  searchResults,
  selectedBrands,
  noMoreResults,
  setBrands
) {
  loadingBarRef.current.continuousStart(); // Start the loading bar
  let search = searchParams.get("query");
  let imageSearch = searchParams.get("imageSearch");
  let image = localStorage.getItem("image-file");
  services.history.saveToHistory(search);
  let access_token = await services.authentication.getAccessToken();
  services.vibesearch.vibeIt(
    imageSearch ? image : search || "",
    "",
    currentPage,
    20,
    (results) => {
      setSearchResults(results);
      console.log("Search Results:", searchResults);
      loadingBarRef.current.complete(); // Complete the loading bar
      setIsLoading(false); // Set loading to false when data is fetched
    },
    access_token,
    searchResults,
    selectedBrands,
    noMoreResults,
    setBrands
  );
}
