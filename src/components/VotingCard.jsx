import React from "react";
import { Card, InputGroup } from "react-bootstrap";

function VotingCard(props) {
  let { candidate, incrementVoteCount, radioName, type } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${candidate.image}`} />
      <Card.Body>
        {/* <Button variant="success" onClick={() => incrementVoteCount(candidate._id)}>
          Vote
        </Button> */}
        <Card.Title>
          <InputGroup>
          {candidate.name}
            <InputGroup.Radio onClick={() => {
              const confirmBox = window.confirm(
                "Confirm vote for " + candidate.name
              )
              if (confirmBox === true) {
                incrementVoteCount(candidate._id)
              }
            }}
              inline
              label="1"
              name={radioName}
              type={type}
              id={`inline-${type}-1`}
            />
          </InputGroup>
        </Card.Title>
      </Card.Body>
      {/* <Card.Footer>Vote count: {candidate.votes}</Card.Footer> */}
    </Card>
  );
}
export default VotingCard;