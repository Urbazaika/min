/// <reference types="vite/client" />

// Для SVG как React компонентов (SVGR)
declare module '*.svg?react' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}