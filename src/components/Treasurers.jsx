import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import VotingCard from "./VotingCard";
import candidatesJson from "../lib/treasurers.json";
import "bootstrap/dist/css/bootstrap.css";

function Treasurers() {
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
    navigate("/spokesperson")
  }

  return (
    <Container className="app">
      <Row>
        <h1>Treasurer Candidates</h1>
        {candidates.map((candidate) => {
          return (
            <Col md={4}>
              <VotingCard
                candidate={candidate}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
                radioName="treasurer"
                type="radio"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Treasurers;