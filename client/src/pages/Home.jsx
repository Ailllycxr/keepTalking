import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";
import Auth from "../utils/auth";
import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Home() {
  let { state } = useLocation();

  return (
    <>
      <h1> Welcome to the Game</h1>
      <Row className={"justify-content-center"}>
        {state?.scoreSubmit && (
          <Alert variant="success" style={{ width: "50%" }}>
            Your Score has been Saved! Head to the{" "}
            <Link to="/scores">Scores tab</Link> to see how you ranked!
          </Alert>
        )}
        <LinkContainer to="/game">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            type="submit"
            disabled={!Auth.loggedIn()}
            className={"playButton"}
          >
            Play
          </motion.button>
        </LinkContainer>
      </Row>
      {!Auth.loggedIn() && (
        <p>
          Please log in to play the game. Viewing the manual can be done by
          anyone, though!
        </p>
      )}
      <LinkContainer to="/manual">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="submit"
          className={"manualButton"}
        >
          Manual
        </motion.button>
      </LinkContainer>
      <p style={{ textAlign: "left" }}>
        Welcome to our little ripoff of{" "}
        <a href="https://keeptalkinggame.com/">
          Keep Talking and Nobody Explodes,
        </a>{" "}
        made entirely in React! Here's how to play:
        <br />
        A round of the game has one driver and any number of teammates, each
        accessing this site via their own device. The game starts when the
        driver presses 'Play'.
        <br />
        On the game page, the driver will see a timer, a point counter, and
        several puzzles. While each puzzle exists, the points counter will
        increase based on its Triage level: <br />
        <span style={{ backgroundColor: "red", color: "black" }}>
          Red puzzles are your highest priority
        </span>
        <br />
        <span style={{ backgroundColor: "yellow", color: "black" }}>
          Yellow puzzles are your second highest priority
        </span>
        <br />
        <span style={{ backgroundColor: "green", color: "black" }}>
          Green puzzles are your lowest priority
        </span>
        <br />
        But they all matter!
        <br />
        <span style={{ fontSize: "50px" }}>
          Your goal is to get the lowest score possible!
        </span>
        <br />
        The bar below your points total tells you how fast your score is
        increasing. Keep that bar small and green.
        <br />
        <br />
        The puzzles all have their own set of cryptic clues. We won't tell you
        exactly how to solve them, but your teammates can: <br />
        Anyone assisting in the game should click the 'Manual' button on their
        own device. That manual contains all of the information you need to
        solve every puzzle - if you know how to read it. <br />
        Good Luck, and we hope to see you on the{" "}
        <Link to="/scores">Leaderboard!</Link>
      </p>
    </>
  );
}
