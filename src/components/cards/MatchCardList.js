import React from 'react';
import Row from 'react-bootstrap/Row';
import MatchCard from './MatchCard';

const MatchCardList = ({ users }) => {
    return (
        <div>
            <Row className="py-4">
            {
                users.map((user, i) => {
                    // have to make key so react can keep track of dom elements 
                    return (  
                        <MatchCard 
                            key={i}
                            space={i*150} 
                            user={users[i].user}
                            title={users[i].title} 
                            experience={users[i].experience} 
                            offering={users[i].offering} 
                            description={users[i].description} 
                            skills={users[i].skills} 
                        />
                    );
                })
            }
            </Row>
        </div>
    );
}

export default MatchCardList;