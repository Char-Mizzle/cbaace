import React from "react";
import { X, AlignCenter } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../Contexts/ModalProvider";
import Article from "./Article";

const Modal = () => {
  const url = "testurl2.url"

  return (
    <ModalContext.Consumer>
      {({ windowPosition, extensionId, getExtensionId }) => (
        <div
          id="modal"
          className="modal-window"
          style={{
            transform: windowPosition,
          }}
        >
          <div className="modal-window-inner-border">
            <>
              <div className="modal-body">
                <div className="modal-handle">
                  <div className="modal-close-button">
                    <X
                      style={{ margin: 5, paddingTop: 15 }}
                      color="#5d6484"
                      size="24"
                    />
                  </div>

                  {/* //close button div end */}
                </div>
                <p id="mainHeading">CBAACE</p>
                {/* // modal handle div end */}
                <div className="modal-content">
                  <h3>{extensionId}</h3>
                  <button onClick={getExtensionId} className="modal-button">
                    Get Extension ID
                  </button>
                  {/* ARTICLE INSERT */}
                  <Article url={url}/>
                </div>{" "}
                {/* modal content end div */}
              </div>{" "}
              {/* // modal body end div */}
            </>
          </div>{" "}
          {/* //modal window inner border div */}
        </div> // first div end
      )}
    </ModalContext.Consumer>
  );
};

export default Modal;
