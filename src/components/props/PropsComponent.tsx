interface PropTypes {
  input: string;
}

export default function PropsComponent({ input }: PropTypes) {
  return (
    <>
      <h1>Props Component</h1>

      <p>The prop of name "input" is: {input}</p>
    </>
  );
}
