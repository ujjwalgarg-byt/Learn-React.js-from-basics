// now we write hello world using react

// here we create a h1 tag using react which is a core react thing
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react!"
);
//in above code {} is used to give the attributes to the tags.
//console.log(heading);//object
// here heading is a react element which is also a javascript object.

// now we create a root element using react dom which is used to render the react component into the html page.
// here we are using document.getElementById to get the root element from the html page.
const root = ReactDOM.createRoot(document.getElementById("root"));

// now rendering h1 tag into root
root.render(heading);
//(ReactElement or object)=> HTML(browser understand)
// this render method used to take heading as js object and convert it into html tag and put it into the root element.

/** now create a nested html structure using react like below
 *
 * <div id="parent">
 *    <div id="child">
 *        <h1>i am an h1 tag</h1>
 *        <h2>i am an h2 tag</h2>
 *    </div>
 * </div>
 *
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")]
     // if here we have more than one tag or children then we have to create an array of childrens
  )
);
const rooot = ReactDOM.createRoot(document.getElementById("root"));
rooot.render(parent);
