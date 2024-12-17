interface Props {
    children?: React.ReactNode;
  }
  
  export function Paragraph( { children }: Props ){
    return <p className="my-2">{ children }</p>;
  }