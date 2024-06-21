import React from "react";

interface RequestACallProps {
  request: boolean;
  requestCallSubmit: () => void;
}

const RequestACall: React.FC<RequestACallProps> = ({ request, requestCallSubmit }) => {
  return (
    <>
      {!request && (
        <>
          <div className="requestaCall__box__right__text">
            <h2>REQUEST A CALL</h2>
            <span>Leave your phone number and we will call you back see you soon</span>
          </div>
          <form onSubmit={requestCallSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Surname" required />
            <input type="text" placeholder="+998 ( __ ) - ___-__-__" required />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </>
      )}
      {request && (
        <div className="requestaCall__box__right__text">
          <h2>THANK YOU FOR APPLICATION</h2>
          <span className={`requestaCall__box__right__text ${request ? "submit" : ""}`}>Our specialist will contact you Please wait</span>
        </div>
      )}
    </>
  );
};

export default RequestACall;
