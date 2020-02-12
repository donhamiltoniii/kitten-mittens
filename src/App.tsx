import React from "react";

import "./App.css";

const App = () => {
  /**
   * Posts State
   */
  const [posts, setPosts] = React.useState<
    { body: string; imgUrl: string; title: string }[]
  >([
    {
      body: "Look at this cute little ball of fuzz",
      imgUrl: "http://placekitten.com/200/300",
      title: "Amazing Kitten 1"
    },
    {
      body: "Look at this cute little ball of fuzz",
      imgUrl: "http://placekitten.com/200/300",
      title: "Amazing Kitten 2"
    },
    {
      body: "Look at this cute little ball of fuzz",
      imgUrl: "http://placekitten.com/200/300",
      title: "Amazing Kitten 3"
    },
    {
      body: "Look at this cute little ball of fuzz",
      imgUrl: "http://placekitten.com/200/300",
      title: "Amazing Kitten 4"
    }
  ]);

  /**
   * Title State
   */
  const [isTitleEdit, setTitleEdit] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("Kitten Mittens");
  const [titleChange, setTitleChange] = React.useState<string>(title);

  const changeTitle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTitle(titleChange);
    toggleTitleEdit();
  };

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitleChange(event.currentTarget.value);
  };

  const toggleTitleEdit = () => {
    setTitleEdit(!isTitleEdit);
  };

  return (
    <div className="App">
      <header>
        {isTitleEdit ? (
          <form onSubmit={changeTitle}>
            <input
              type="text"
              onChange={handleTitleChange}
              value={titleChange}
            />
            <button>Save Title</button>
          </form>
        ) : (
          <h1 onClick={toggleTitleEdit}>{title}</h1>
        )}
      </header>
      <main>
        <div className="container">
          <ul>
            {posts
              .filter((post, index) => index >= posts.length - 3)
              .map(post => (
                <li>
                  <div>
                    <header>{post.title}</header>
                    <figure>
                      <img src={post.imgUrl} alt={post.title} />
                    </figure>
                    <p>{post.body}</p>
                  </div>
                </li>
              ))
              .reverse()}
          </ul>
        </div>
      </main>
      <footer>
        <small>&copy; {new Date().getFullYear()} Kitten Mittens</small>
      </footer>
    </div>
  );
};

export default App;
