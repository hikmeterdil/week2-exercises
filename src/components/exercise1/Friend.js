import React, {useEffect, useState} from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

export function Friend() {
    const [friend, setFriend] = useState (null);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const getFriend =() => {
        setLoading(true);
        fetch("https://www.randomuser.me/api?results=1")
            .then(res => res.json())
            .then(data => {
                setFriend(data);
                setLoading(false);
                console.log(friend);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setLoading(false);
            });

        };

        useEffect(getFriend, []);

        if(isLoading) {
            return <p>Loading...</p>;
        }

        if(hasError) {
            return <p>Error!</p>;
        }

        if(friend) {
            return (
                <div className="friend">
                <Button onClick={getFriend}/>
                <FriendProfile friend={friend}/>
                </div>

            );
        }


    }
