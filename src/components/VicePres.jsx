import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import VotingCard from "./VotingCard";
import vpsJson from "../lib/vps.json";
import "bootstrap/dist/css/bootstrap.css";
import './vp.css'

function VicePres() {
  const navigate = useNavigate();
  let [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(vpsJson);
  }, []);

  function incrementVoteCount(candidateId) {
    candidates = candidates.map((candidate) => {
      if (candidate._id === candidateId) {
        candidate.votes = candidate.votes + 1;
      }
      return candidate;
    });
    setCandidates(candidates);
    navigate("/secGen")
  }

  return (
    
    <Container className="app">
      <Row>
        <h1>Vice Presidential Candidates</h1>
        {candidates.map((candidate) => {
          return (
            <Col md={4}>
              <VotingCard
                candidate={candidate}
                incrementVoteCount={(candidateId) => incrementVoteCount(candidateId)}
                radioName="vicePres"
                type="radio"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default VicePres;