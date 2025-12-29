declare module "vanta/dist/vanta.cells.min" {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaCellsConfig {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color1?: number;
    color2?: number;
    size?: number;
    speed?: number;
  }

  function CELLS(config: VantaCellsConfig): VantaEffect;
  export default CELLS;
}

declare module "vanta/dist/vanta.net.min" {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaNetConfig {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  function NET(config: VantaNetConfig): VantaEffect;
  export default NET;
}

declare module "vanta/dist/vanta.waves.min" {
  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaWavesConfig {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
  }

  function WAVES(config: VantaWavesConfig): VantaEffect;
  export default WAVES;
}
