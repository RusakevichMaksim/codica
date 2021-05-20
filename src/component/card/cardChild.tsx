type MapStateToProps = {
  id: number | null;
};
type DispatchStateToProps = {
  getWeather: (id: number) => void;
};
type PropsType = MapStateToProps & DispatchStateToProps;
const CardChild: React.FC<PropsType> = (props) => {
  return (
    <div className="card">
      <div>Sity Name</div>
      <div>Temperature Value</div>
      <div></div>
    </div>
  );
};

export default CardChild;
