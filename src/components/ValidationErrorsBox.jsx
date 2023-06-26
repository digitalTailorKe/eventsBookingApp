import { BiXCircle } from "react-icons/bi";

const ValidationErrorsBox = ({ validationErrors, setValidationErrors }) => {
  return (
    <div className="">
      {validationErrors.email && (
        <div className="text-red-500 test-small bg-red-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
          {validationErrors.email}{" "}
          <BiXCircle
            onClick={() =>
              setValidationErrors({ ...validationErrors, email: "" })
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {validationErrors.phone && (
        <div className="text-red-500 test-small bg-red-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
          {validationErrors.phone}{" "}
          <BiXCircle
            onClick={() =>
              setValidationErrors({ ...validationErrors, phone: "" })
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {validationErrors.id_number && (
        <div className="text-red-500 test-small bg-red-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
          {validationErrors.id_number}{" "}
          <BiXCircle
            onClick={() =>
              setValidationErrors({ ...validationErrors, id_number: "" })
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {validationErrors.error && (
        <div className="text-red-500 test-small bg-red-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
          {validationErrors.error}{" "}
          <BiXCircle
            onClick={() =>
              setValidationErrors({ ...validationErrors, error: "" })
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </div>
  );
};

export default ValidationErrorsBox;
