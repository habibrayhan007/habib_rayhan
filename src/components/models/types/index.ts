export type TypeModelProps = {
  model: {
    modelPath: string;
    name: string;
    scale: [number, number, number];
    rotation: [number, number, number];
  };
}

export type ParticlesProps = {
  count?: number;
};

export type Particle = {
  position: [number, number, number];
  speed: number;
};