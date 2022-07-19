import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Presidents from "./components/Presidents";
import VicePres from "./components/VicePres";
import SecGens from "./components/SecGens";
import DpSecGens from "./components/DpSecGens";
import Treasurers from "./components/Treasurers";
import Spokespersons from "./components/Spokespersons";
import End from "./components/End";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/presidents"
                element={
                  <ProtectedRoute>
                    <Presidents />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/vicePres"
                element={
                  <ProtectedRoute>
                    <VicePres />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/secGen"
                element={
                  <ProtectedRoute>
                    <SecGens />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dpSecGen"
                element={
                  <ProtectedRoute>
                    <DpSecGens />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/treasurer"
                element={
                  <ProtectedRoute>
                    <Treasurers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/spokesperson"
                element={
                  <ProtectedRoute>
                    <Spokespersons />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/end"
                element={
                  <ProtectedRoute>
                    <End />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
