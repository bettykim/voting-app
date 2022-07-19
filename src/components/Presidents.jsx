import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import VotingCard from "./VotingCard";
import candidatesJson from "../lib/candidates.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Presidents() {
  const navigate = useNavigate();
  let [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(candidatesJson);
  }, []);

  function incrementVoteCount(candidateId) {
    candidates = candidates.map((candidate) => {
      if (candidate._id === candidateId) {
        candidate.votes = candidate.votes + 1;
      }
      return candidate;
    });
    setCandidates(candidates);
    navigate("/vicePres");
  }

  return (
    <Container className="app">
      <Row>
        <h1>Presidential Candidates</h1>
        {candidates.map((candidate) => {
          return (
            <Col md={4}>
              <VotingCard
                candidate={candidate}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
                radioName="presidential"
                type="radio"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Presidents;