import React from 'react';
import { IconContext } from 'react-icons';
import { CgProfile } from 'react-icons/cg';

const MiniProfileImageItem = (props) => {
    return (
        <div style={{ display: "inline-block", margin: "0" }}>
            {props && props.user && props.user.avatarUrl ?
                <img
                    src={props.user.avatarUrl}
                    alt={`${props.user.name}'s Profile Pic`}
                    className="mini-profile-pic"
                />
                :
                <IconContext.Provider value={{ color: 'white' }}>
                    <CgProfile size={24} />
                </IconContext.Provider>
            }
        </div>
    );
}

export default MiniProfileImageItem;