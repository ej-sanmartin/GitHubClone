import React from 'react';
import { IconContext } from 'react-icons';
import { CgProfile } from 'react-icons/cg';
import { GrEmoji } from 'react-icons/gr';
import '../styles/ProfileCard.css';

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <div className="profile-image">
            {props && props.user && props.user.avatarUrl ?
                <img className="profile-image profile-pic"
                    src={props.user.avatarUrl}
                    alt={`${props.user.name}'s Profile Pic`}
                />
            :
                <IconContext.Provider className="profile-image" value={{ color: '#cacaca' }}>
                <CgProfile size={256} />
                </IconContext.Provider>
            }
            <div className="happy-face">
                <GrEmoji size={16} />
            </div>
            </div>
            <h2>{props && props.user && props.user.name ? props.user.name : ``}</h2>
            <h3>{props && props.username ? props.username : ``}</h3>
            <p>{props && props.user ? props.user.bio : ``}</p>
        </div>
    );
}

export default ProfileCard;