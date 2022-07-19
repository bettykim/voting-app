import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import VotingCard from "./VotingCard";
import secGensJson from "../lib/secgens.json";
import "bootstrap/dist/css/bootstrap.css";

function SecGens() {
  const navigate = useNavigate();
  let [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(secGensJson);
  }, []);

  function incrementVoteCount(candidateId) {
    candidates = candidates.map((candidate) => {
      if (candidate._id === candidateId) {
        candidate.votes = candidate.votes + 1;
      }
      return candidate;
    });
    setCandidates(candidates);
    navigate("/dpSecGen")
  }

  return (
    <Container className="app">
      <Row>
        <h1>Secretary General Candidates</h1>
        {candidates.map((candidate) => {
          return (
            <Col md={4}>
              <VotingCard
                candidate={candidate}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
                radioName="secGen"
                type="radio"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default SecGens;