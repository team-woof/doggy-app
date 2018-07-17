import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Search by location" />
          <input placeholder="Search by breed" />
          <button>Search</button>
        </form>
        Search bar {this.props.title}
      </div>
    );
  }
}

export default Search;
