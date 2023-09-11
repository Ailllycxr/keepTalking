import { LinkContainer } from "react-router-bootstrap";
import ParticleEffectButton from "react-particle-effect-button";

export default function Home() {
  return (
    <>
      <h1> Welcome to the Game</h1>
      <LinkContainer to="/game">
        <ParticleEffectButton color="#121019" hidden={this.state.hidden}>
          Play
        </ParticleEffectButton>
      </LinkContainer>
      <LinkContainer to="/manual">
        <ParticleEffectButton color="#121019" hidden={this.state.hidden}>
          Manual
        </ParticleEffectButton>
      </LinkContainer>
    </>
  );
}
