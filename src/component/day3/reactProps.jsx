const ReactProps = (props) => {
    const { name, id } = props;
  return (
    <>
      <h2>Fruit Name: {name} </h2>
      <h2>Fruit Id: {id}</h2>
    </>
  );
};

export default ReactProps;