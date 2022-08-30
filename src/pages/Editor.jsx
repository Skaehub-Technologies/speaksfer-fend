import { Link } from 'react-router-dom';

function Editor() {
  return (
    <section>
      <h1>Editors Page</h1>
      <br />
      <p>You must be a Editor.</p>
      <div className="Editor">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
}

export default Editor;
