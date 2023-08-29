import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from "../assets/style";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <View style={styles.searchBarContainer}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.searchIcon} />
            <TextInput
                placeholderTextColor={'#fff'}
                style={styles.searchBar}
                placeholder="Search..."
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
            ></TextInput>
        </View>
    );
};


export default SearchBar;