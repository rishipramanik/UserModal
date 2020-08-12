import React from "react";
import Modal from "@material-ui/core/Modal";

const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};
// const body = ({ name, id, open }) => {
export default function mod({ name, id, open }) {
  return (
    <div>
      <Modal
        key={id}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div key={id} id={id}>
          <h2 id={id}>{id}</h2>
          <p id={id}>{name}</p>
        </div>
      </Modal>
    </div>
  );
}
