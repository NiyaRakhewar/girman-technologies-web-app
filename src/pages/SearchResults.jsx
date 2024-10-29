import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import {user_list} from './../data/userListData';
import { DetailsCard } from '../components/DetailsCard';
export const SearchResults = () => {
    const { search } = useContext(SearchContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to filter user list based on first and last name search
    const filterUserListBySearch = search === "" ? [...user_list]:user_list.filter((user) => {
        const { first_name, last_name } = user;
        return (
            (first_name.toLowerCase().includes(search.toLowerCase()) || 
             last_name.toLowerCase().includes(search.toLowerCase())) &&
            search.trim() !== ""
        );
    });

    const handleFetchDetails = (user) => {
        setSelectedUser(user);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedUser(null);
    };

    return (
        <div>
            {filterUserListBySearch.length > 0 ? (
                filterUserListBySearch.map((user, index) => (
                    <div key={index} className="user-card">
                        <DetailsCard/>
                        <img src={user.image} alt="User Placeholder" style={{borderRadius: "50%", width: "30px"}}/>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>City: {user.city}</p>
                        <p>Contact Number: {user.contact_number}</p>
                        <button onClick={() => handleFetchDetails(user)}>Fetch Details</button>
                    </div>
                ))
            ) : (
                <p>No results found for "{search}". Please try again with a different name.</p>
            )}

            {/* Dialog for displaying detailed user info */}
            {isDialogOpen && selectedUser && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                       
                        <h3>User Details</h3>
                        <img src={selectedUser?.image} alt='profile'/>
                        <p><strong>First Name:</strong> {selectedUser.first_name}</p>
                        <p><strong>Last Name:</strong> {selectedUser.last_name}</p>
                        <p><strong>City:</strong> {selectedUser.city}</p>
                        <p><strong>Contact Number:</strong> {selectedUser.contact_number}</p>
                        <button onClick={handleCloseDialog}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
