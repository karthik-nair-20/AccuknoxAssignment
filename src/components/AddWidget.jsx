import { useRecoilState } from 'recoil';
import { modelState, widgetValueState } from "../store/data";

export default function AddWidget({ onSave }) {

  const [inputs, setInputs] = useRecoilState(widgetValueState);
  const [showModal, setShowModal] = useRecoilState(modelState);

  function handleTitleChange(e) {
    setInputs((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  }

  function handleDataChange(e) {
    setInputs((prevState) => ({
      ...prevState,
      data: e.target.value,
    }));
  }

  function handleSave() {
    onSave();
    setInputs({ title: '', data: '' })
    setShowModal(false)
  }

  function handleClose() {
    setInputs({ title: '', data: '' })
    setShowModal(false)
  }

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className='heading'>+ Add Widget</h2>
          <input
            type="text"
            placeholder="Widget Title"
            value={inputs.title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Widget Data"
            value={inputs.data}
            onChange={handleDataChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    )
  );

}