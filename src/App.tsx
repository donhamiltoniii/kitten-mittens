import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
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
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/all-posts"}>All Posts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <div className="container">
                <section className="home">
                  <ul>
                    {posts
                      .filter((postUnused, index) => index >= posts.length - 3)
                      .map(post => (
                        <li className="underline">
                          <div className="post">
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
                </section>
              </div>
            </Route>
            <Route path="/all-posts">
              <div className="container">
                <section className="all-posts">
                  <ul>
                    {posts
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
                </section>
              </div>
            </Route>
          </Switch>
        </main>
        <footer>
          <small>&copy; {new Date().getFullYear()} Kitten Mittens</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;
