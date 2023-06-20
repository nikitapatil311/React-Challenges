export default function Section() {
  return (
    <>
      <h3 className="Main-entry">NEW ENTRY</h3>
      <label id="motto">Motto</label>
      <br />
      <textarea
        className="text"
        htmlFor="motto"
        rows="10"
        columns="10"
      ></textarea>
      <br />
      <br />
      <label id="notes">Notes</label>
      <br />
      <textarea
        className="text"
        htmlFor="notes"
        rows="10"
        columns="20"
      ></textarea>
      <br />
      <>
        <br />
        <button type="submit" className="create-button">
          Create
        </button>
        <br />
      </>
    </>
  );
}
