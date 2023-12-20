import { useContext, useState } from "react";
import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import TableTitle from "../table-title/TableTitle";
import { DivisionsContext } from "../../DatabaseOperators";

import "./table.scss";
import EditWorkerModal from "../edit-worker-modal/EditWorkerModal";
import Curtain from "../../../../components/curtain/Curtain";
import MoreInfoWorkerModal from "../more-info-worker-modal/MoreInfoWorkerModal";

const Table = () => {
  const { workers } = useContext(DivisionsContext);
  const departments = workers?.map((i) => i.departments)[0];
  const { setTargetDepartmentId } = useContext(DivisionsContext);
  const [tableData, setTableData] = useState();
  const [isMoreBtnModalOpen, setIsMoreBtnModalOpen] = useState(false);
  const [isEditBtnModalOpen, setIsEditBtnModalOpen] = useState(false);

  return departments?.map((item) => {
    setTargetDepartmentId(item?.id);
    console.log(item?.id);
    return (
      <>
        <div className="database-operators__group" key={item?.id}>
          <TableTitle title={item?.title} id={item?.id} />
          <table className="database-operators__table">
            <TableHead />
            {item?.workers?.map((worker) => {
              return (
                <TableBody
                  key={worker?.id}
                  tableData={worker}
                  setTableData={setTableData}
                  setIsMoreBtnModalOpen={setIsMoreBtnModalOpen}
                  setIsEditBtnModalOpen={setIsEditBtnModalOpen}
                />
              );
            })}
          </table>
        </div>
        {isEditBtnModalOpen ? (
          <>
            <EditWorkerModal
              setIsEditBtnModalOpen={setIsEditBtnModalOpen}
              tableData={tableData}
            />
            <Curtain />
          </>
        ) : (
          ""
        )}

        {isMoreBtnModalOpen ? (
          <>
            <MoreInfoWorkerModal
              setIsMoreBtnModalOpen={setIsMoreBtnModalOpen}
            />
            <Curtain />
          </>
        ) : (
          ""
        )}
      </>
    );
  });
};

export default Table;
