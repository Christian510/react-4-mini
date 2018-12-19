import React from 'react';
import { Link } from 'react-router-dom';


export default function Route3() {
    return (
            <div>
                <h1>Climbing Topics</h1>
    
                <ul>
                    <li>
                        <Link to="/rock" path="/routes/rockclimbing.js">Rock Climbing</Link>
                    </li>
                    <li>
                        <Link to="/ice" path="iceclimbing.js">Ice Climbing</Link>
                    </li>
                    <li>
                        <Link to="/aid" path="aidclimbing.js">Aid Climbing</Link>
                    </li>
                </ul>
            </div>
        );
}