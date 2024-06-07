// const heading = React.createElement("h1",
// {id : "heading"},
// "hello from React");
// // heading here is juust s object its not h1 tag yet

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// this convert object into a html element

const parent = React.createElement("div",
{id : "parent"},
React.createElement("div",{id : "child"},
[
React.createElement("h1",{}, "h1 tag"),
React.createElement("h1",{}, "h2 tag")
]
)

);
const par = React.createElement("div",
{id : "parent"},
React.createElement("div",{id : "child"},
[
React.createElement("h1",{}, "h1 tag"),
React.createElement("h1",{}, "h3 tag")
]
)

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(par);