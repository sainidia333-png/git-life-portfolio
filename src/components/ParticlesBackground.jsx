import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 60,
          },
          links: {
            enable: true,
            color: "#22c55e",
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}