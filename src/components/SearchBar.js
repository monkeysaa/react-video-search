import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    // Make sure we call callback from parent component

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      // ui segment will draw a nice rectangle around everything inside it
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              // DON'T DO THIS! IT WILL NOT HANDLE CORRECTLY
              // onChange={this.setState(term)}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
