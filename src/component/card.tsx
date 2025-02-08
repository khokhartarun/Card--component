type EmployeeProps = {
  name: string;
  age: number;
  gender: string;
  location: string;
  profileImage: string;
};

const Card: React.FC<{ employee: EmployeeProps }> = ({ employee }) => {
  return (
    <div className="card">
      <img src={employee.profileImage} alt={employee.name} className="card-image" />
      <h3 className="card-name">{employee.name}</h3>
      <p className="card-detail">Age: {employee.age}</p>
      <p className="card-detail">Gender: {employee.gender}</p>
      <p className="card-detail">Location: {employee.location}</p>
    </div>
  );
};

export default Card;