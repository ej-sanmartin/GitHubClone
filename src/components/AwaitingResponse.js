import React from 'react';
import { GrEmoji } from 'react-icons/gr';
import '../styles/AwaitingResponse.css';

const AwaitingResponse = () => {
    return (
        <article className="awaiting-section">
            <div className="welcoming-smile">
                <GrEmoji size={60} />
            </div>
            <p className="awaiting-message">Submit your Github username to display your info in this space</p>
            <small className="small-message">This site is NOT affiliated with Github</small>
      </article>
    );
}

export default AwaitingResponse;