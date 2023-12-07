/* eslint-disable react/prop-types */
import "./delete-division-alert.scss";

const DeleteDivisionAlert = ({ group, setIsDeleteModalOpen }) => {
  const handleСonfirmClick = () => {
    fetch(`http://192.168.126.70:2004/api/v1/division/delete/${group?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: group?.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
    setIsDeleteModalOpen(false);
  };
  return (
    <div className="delete-division__alert">
      <h2>Вы действительно хотите удалить этот список?</h2>
      <button onClick={handleСonfirmClick}>Да</button>
      <button>Нет</button>
    </div>
  );
};

export default DeleteDivisionAlert;
