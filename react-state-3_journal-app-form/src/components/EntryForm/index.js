import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    //  console.log(data, formdata);
    // const mottoValue = formData.motto.value;
    // const notesValue = formData.notes.value;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const mottoValue = formData.get("motto");
    const notesValue = formData.get("notes");

    const obj = { motto: mottoValue, notes: notesValue };
    onAddEntry(obj);

    //reset

    event.target.reset();
  }

  return (
    <form className="entry-form">
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button onSubmit={handleSubmit} type="submit">
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}
