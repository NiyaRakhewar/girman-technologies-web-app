// src/components/SearchResults.js
import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { user_list } from "./../data/userListData";
import { UserCard } from "../components/UserCard";
import "./../styles/SearchResults.css";
import { UserDetailsDialog } from "../components/UserDetailsDialog";
import no_data from "./../assets/no_data.png";

export const SearchResults = () => {
  const { search } = useContext(SearchContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filterUserListBySearch =
    search === ""
      ? [...user_list]
      : user_list.filter((user) => {
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
    <div style={{ marginTop: "110px" }} className="main-search-result">
      {filterUserListBySearch.length > 0 ? (
        <div className="main-search-result-b">
          {filterUserListBySearch.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              onFetchDetails={handleFetchDetails}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={no_data}
            alt="no data"
            style={{ width: "470px", height: "450px" }}
          />
        </div>
      )}

      {isDialogOpen && selectedUser && (
        <UserDetailsDialog
          selectedUser={selectedUser}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default SearchResults;
