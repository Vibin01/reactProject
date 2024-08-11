const SearchBar = ({ query, loading, handleSubmit, setQuery }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          className="form-control"
          placeholder="Search Recipes"
          disabled={loading}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input
          type="submit"
          className="btn"
          value="search"
          disabled={loading || !query}
        />
      </form>
    </>
  );
};
export default SearchBar;
