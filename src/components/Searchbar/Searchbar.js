import React from 'react';
import { connect } from 'react-redux';
import { searchInput } from '../../redux/actions';

import './Searchbar.scss';

const Searchbar = ({ onInputSearch, searchQuery }) => {
    
    return (
        <div className="searchbar">
            <input value={searchQuery} onChange={(e) => onInputSearch(e.target.value)} placeholder="Поиск блюд..." type="text" className="searchbar__input"/>
        </div>
    )

};

const mapStateToProps = ({ searchQuery }) => ({
    searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    onInputSearch: (query) => dispatch(searchInput(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
