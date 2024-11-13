//@ts-ignore
import ShadertoyReact from "shadertoy-react";
//Above is like only JS, but it works with react.
//@ts-check

const fragmentShader = `
  void main(void) {
     vec2 uv = gl_FragCoord.xy/iResolution.xy;
     vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
     gl_FragColor = vec4(col*0.25 ,1.0);
  }
`;

export function Background(): JSX.Element {
    return <>
      <div className="-z-1 fixed top-0 left-0 w-full h-full">
        <ShadertoyReact fs={fragmentShader} />
      </div>
    </>;
  }