const HomePage = () => (
  <>
    <main>
      <section>
        <article>
          <h2>The Hunger Games</h2>
          <p>Suzanne Collins</p>
        </article>
        <article>
          <h2>Capital in the Twenty-First Century</h2>
          <p>Suzanne Collins</p>
        </article>
        <article>
          <h2>Dune</h2>
          <p>Frank Herbert</p>
        </article>
      </section>
      <div>
        <h2>ADD NEW BOOK</h2>
        <form>
          <input type="text" placeholder="Book title" />
          <select>
            <option>Action</option>
            <option>Economy</option>
            <option>Sciences</option>
          </select>
          <button type="button">ADD BOOK</button>
        </form>
      </div>
    </main>
  </>
);

export default HomePage;
