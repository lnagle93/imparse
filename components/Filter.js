import React, {Component} from "react";
import ReactDOM from "react-dom";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }
    }

    render() {
        return (
            <form id="filter">
                <input
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Filter Search Results"
                    type="text"
                    value={this.state.term} />
            </form>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default Filter;