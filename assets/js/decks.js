const colors = {
  green: "#64D583",
  blue: "#91A8F9",
  pink: "#EE92D7",
  purple: "#AA8EF0",
  orange: "#EE955E",
  yellow: "#F5D770",
};

export const decks = [
  {
    id: "git-basics",
    name: "Git Basics",
    description: "Essential Git commands and concepts.",
    color: colors.yellow,
    cards: [
      {
        question: "What command initializes a new Git repository in a folder?",
        answer: "git init",
      },
      {
        question: "What command stages a specific file for the next commit?",
        answer: "git add <filename>",
      },
      {
        question: "What command creates a commit with a descriptive message?",
        answer: 'git commit -m "your message here"',
      },
      {
        question:
          "What command shows the current state of your working directory?",
        answer: "git status",
      },
      {
        question: "What command shows the history of commits?",
        answer: "git log",
      },
      {
        question: "What is a branch in Git?",
        answer:
          "An independent line of development that lets you work without affecting the main codebase",
      },
      {
        question: "What command creates and switches to a new branch?",
        answer: "git checkout -b branch-name",
      },
      {
        question: "What does git pull do?",
        answer:
          "Fetches changes from a remote repository and merges them into your current branch",
      },
      {
        question: "What does git push do?",
        answer: "Uploads your local commits to the remote repository",
      },
      {
        question: "What is a merge conflict?",
        answer:
          "When two branches have made different changes to the same part of a file and Git cannot auto-merge them",
      },
    ],
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    description: "Common browser developer tools and workflows.",
    color: colors.purple,
    cards: [
      {
        question: "How do you open browser Developer Tools in most browsers?",
        answer:
          "Press F12 (or Cmd+Option+I on Mac), or right-click the page and choose Inspect",
      },
      {
        question: "What DevTools tab shows the page's HTML structure?",
        answer: "Elements (Chrome) or Inspector (Firefox)",
      },
      {
        question:
          "What DevTools tab lets you run JavaScript expressions directly?",
        answer: "Console",
      },
      {
        question: "What DevTools tab shows CSS rules for a selected element?",
        answer: "The Styles panel inside the Elements (or Inspector) tab",
      },
      {
        question: "What DevTools tab shows network requests made by the page?",
        answer: "Network",
      },
      {
        question:
          "What does console.error() do differently from console.log()?",
        answer: "It prints the message in red and marks it as an error",
      },
      {
        question: "What is a breakpoint in DevTools?",
        answer:
          "A marker that pauses code execution at a specific line so you can inspect state",
      },
      {
        question: "What does 'responsive design mode' in DevTools let you do?",
        answer:
          "Preview and test how a page looks at different screen sizes and device types",
      },
      {
        question:
          "In the Elements tab, how can you temporarily change a CSS value to test it?",
        answer:
          "Click the value in the Styles panel and type a new one — changes are live but not saved",
      },
      {
        question:
          "What does a red message in the Console tab usually indicate?",
        answer: "A JavaScript runtime error has occurred",
      },
    ],
  },
  {
    id: "web-tech-terms",
    name: "Web Tech Terms",
    description: "Key terms used in web development.",
    color: colors.pink,
    cards: [
      {
        question: "What does URL stand for?",
        answer: "Uniform Resource Locator",
      },
      {
        question: "What does HTTP stand for?",
        answer: "HyperText Transfer Protocol",
      },
      {
        question: "What does HTTPS add over HTTP?",
        answer: "Encryption via SSL/TLS, making communication secure",
      },
      {
        question: "What is a web browser?",
        answer:
          "A program that retrieves, renders, and displays web pages (e.g., Chrome, Firefox)",
      },
      {
        question: "What is a web server?",
        answer: "A computer that stores files and responds to client requests",
      },
      {
        question: "What is the difference between a client and a server?",
        answer:
          "A client requests resources; a server responds with those resources",
      },
      {
        question: "What does DNS stand for, and what does it do?",
        answer:
          "Domain Name System — it translates domain names (e.g., google.com) into IP addresses",
      },
      {
        question: "What is an IP address?",
        answer:
          "A unique numerical label identifying each device on a network (e.g., 192.168.1.1)",
      },
      {
        question: "What does 'rendering' mean in the context of a browser?",
        answer:
          "The process of turning HTML, CSS, and JS into a visual, interactive web page",
      },
      {
        question: "What is localhost?",
        answer:
          "The loopback address (127.0.0.1) — it refers to your own computer",
      },
    ],
  },
  {
    id: "js-dom",
    name: "JavaScript DOM",
    description: "Selecting and updating elements with the DOM.",
    color: colors.orange,
    cards: [
      { question: "What does DOM stand for?", answer: "Document Object Model" },
      {
        question:
          "What method selects the first element that matches a CSS selector?",
        answer: "document.querySelector()",
      },
      {
        question: "What method selects all elements that match a CSS selector?",
        answer: "document.querySelectorAll()",
      },
      {
        question:
          "What property gets or sets the visible text content of an element?",
        answer: ".textContent",
      },
      {
        question:
          "What property gets or sets the HTML markup inside an element?",
        answer: ".innerHTML",
      },
      {
        question: "What method attaches an event handler to an element?",
        answer: ".addEventListener()",
      },
      {
        question: "What method creates a new HTML element in JavaScript?",
        answer: "document.createElement()",
      },
      {
        question: "What method appends a child node to a parent element?",
        answer: ".append() or .appendChild()",
      },
      {
        question:
          "What property provides access to the list of classes on an element?",
        answer: ".classList",
      },
      {
        question: "What method adds a class to an element's class list?",
        answer: ".classList.add()",
      },
    ],
  },
  {
    id: "js-arrays",
    name: "JavaScript Arrays",
    description: "Array indexing and useful array methods.",
    color: colors.blue,
    cards: [
      {
        question: "How do you access the first element of an array called arr?",
        answer: "arr[0] — arrays are zero-indexed",
      },
      {
        question: "What property returns the number of elements in an array?",
        answer: ".length",
      },
      {
        question:
          "What method adds one or more elements to the end of an array?",
        answer: ".push()",
      },
      {
        question:
          "What method removes and returns the last element of an array?",
        answer: ".pop()",
      },
      {
        question:
          "What method creates a new array by transforming each element with a callback?",
        answer: ".map()",
      },
      {
        question:
          "What method returns a new array containing only elements that pass a test?",
        answer: ".filter()",
      },
      {
        question:
          "What method calls a function once for each element without returning a new array?",
        answer: ".forEach()",
      },
      {
        question:
          "What method returns the first element that satisfies a condition?",
        answer: ".find()",
      },
      {
        question:
          "What method checks whether at least one element passes a test?",
        answer: ".some()",
      },
      {
        question: "What method checks whether every element passes a test?",
        answer: ".every()",
      },
    ],
  },
  {
    id: "js-functions",
    name: "JavaScript Functions",
    description: "Function syntax, parameters, and callbacks.",
    color: colors.green,
    cards: [
      {
        question: "What keyword declares a traditional named function?",
        answer: "function",
      },
      {
        question: "What is a parameter?",
        answer:
          "A named variable in the function definition that receives a value when the function is called",
      },
      {
        question: "What is an argument?",
        answer: "The actual value passed to a function when it is called",
      },
      {
        question: "What does the return keyword do?",
        answer: "Exits the function and sends a value back to the caller",
      },
      {
        question: "What is an arrow function?",
        answer:
          "A concise function syntax using => — e.g., const add = (a, b) => a + b",
      },
      {
        question: "What is a callback function?",
        answer:
          "A function passed as an argument to another function, to be executed later",
      },
      {
        question:
          "What is the difference between a function declaration and a function expression?",
        answer:
          "Declarations are hoisted to the top of their scope; expressions are not",
      },
      {
        question: "What happens if a function has no return statement?",
        answer: "It returns undefined by default",
      },
      {
        question:
          "What does writing a function name without parentheses (e.g., myFn) do?",
        answer: "References the function as a value without calling it",
      },
      {
        question: "What is a higher-order function?",
        answer:
          "A function that accepts another function as an argument or returns a function",
      },
    ],
  },
  {
    id: "js-basics",
    name: "JavaScript Basics",
    description: "Core JavaScript values, variables, and operators.",
    color: colors.yellow,
    cards: [
      {
        question:
          "What keyword declares a variable that can be reassigned later?",
        answer: "let",
      },
      {
        question: "What keyword declares a variable that cannot be reassigned?",
        answer: "const",
      },
      {
        question: "Name three primitive data types in JavaScript.",
        answer:
          "string, number, and boolean (also: null, undefined, symbol, bigint)",
      },
      {
        question: "What does typeof return when called on a string?",
        answer: '"string"',
      },
      {
        question: "What is the difference between == and === in JavaScript?",
        answer:
          "== checks value only (loose equality); === checks both value and type (strict equality)",
      },
      {
        question: 'What is the result of 5 + "3" in JavaScript?',
        answer: '"53" — the number is coerced to a string and concatenated',
      },
      {
        question: "What does console.log() do?",
        answer: "Prints a value to the browser developer console",
      },
      {
        question: "How do you write a single-line comment in JavaScript?",
        answer: "// followed by the comment text",
      },
      {
        question: "What does the ! operator do?",
        answer: "Negates a boolean value (logical NOT): !true === false",
      },
      {
        question: "What values are falsy in JavaScript?",
        answer: "false, 0, '' (empty string), null, undefined, and NaN",
      },
    ],
  },
  {
    id: "css-flexbox",
    name: "CSS Flexbox",
    description: "Flexbox containers, alignment, and sizing.",
    color: colors.purple,
    cards: [
      {
        question: "What declaration enables Flexbox on a container?",
        answer: "display: flex",
      },
      {
        question:
          "What property controls whether flex items are arranged in a row or column?",
        answer: "flex-direction",
      },
      {
        question: "What property aligns flex items along the main axis?",
        answer: "justify-content",
      },
      {
        question: "What property aligns flex items along the cross axis?",
        answer: "align-items",
      },
      {
        question: "What is the default value of flex-direction?",
        answer: "row",
      },
      {
        question:
          "What value of justify-content places equal space between items but none on the edges?",
        answer: "space-between",
      },
      {
        question:
          "What value of justify-content and align-items centers items?",
        answer: "center",
      },
      {
        question:
          "What property allows flex items to wrap onto multiple lines?",
        answer: "flex-wrap",
      },
      {
        question:
          "What property controls how much a flex item grows relative to its siblings?",
        answer: "flex-grow",
      },
      {
        question: "What CSS property sets the gap between flex items?",
        answer: "gap",
      },
    ],
  },
  {
    id: "css-box-model",
    name: "CSS Box Model",
    description: "The content, padding, border, and margin areas.",
    color: colors.pink,
    cards: [
      {
        question:
          "What are the four parts of the CSS box model, from inside out?",
        answer: "Content, padding, border, margin",
      },
      {
        question:
          "What CSS property controls the space between the content and the border?",
        answer: "padding",
      },
      {
        question:
          "What CSS property controls the space outside the border, between elements?",
        answer: "margin",
      },
      {
        question:
          "What value of box-sizing includes padding and border in an element's total width and height?",
        answer: "border-box",
      },
      {
        question: "What is the default value of box-sizing?",
        answer: "content-box",
      },
      {
        question:
          "What shorthand sets top, right, bottom, and left padding in one declaration?",
        answer:
          "padding: top right bottom left — e.g., padding: 10px 20px 10px 20px",
      },
      {
        question: "What does margin: auto do when applied to a block element?",
        answer: "Centers the element horizontally within its container",
      },
      {
        question: "What does overflow: hidden do?",
        answer: "Clips any content that extends beyond the element's box",
      },
      {
        question:
          "What shorthand declaration adds a 1px solid black border on all sides?",
        answer: "border: 1px solid black",
      },
      {
        question: "What CSS property sets the maximum width of an element?",
        answer: "max-width",
      },
    ],
  },
  {
    id: "css-fundamentals",
    name: "CSS Fundamentals",
    description: "CSS syntax, selectors, and common properties.",
    color: colors.orange,
    cards: [
      {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
      },
      {
        question: "What are the three parts of a CSS rule?",
        answer: "Selector, property, and value",
      },
      {
        question: "How do you select an element by its class in CSS?",
        answer: "Use a dot followed by the class name — e.g., .classname",
      },
      {
        question: "How do you select an element by its ID in CSS?",
        answer: "Use a hash followed by the ID — e.g., #idname",
      },
      { question: "What CSS property changes text color?", answer: "color" },
      {
        question: "What CSS property sets the background color?",
        answer: "background-color",
      },
      {
        question: "What CSS property controls the size of text?",
        answer: "font-size",
      },
      {
        question: "What does display: none do to an element?",
        answer:
          "Hides the element completely and removes it from the document flow",
      },
      {
        question:
          "In the cascade, which selector takes priority: a class or an element selector?",
        answer: "A class selector — it has higher specificity",
      },
      {
        question: "What does the * selector match?",
        answer: "Every element on the page (the universal selector)",
      },
    ],
  },
  {
    id: "html-semantic",
    name: "Semantic HTML",
    description: "Semantic elements that describe page structure.",
    color: colors.blue,
    cards: [
      {
        question: "What semantic tag represents the top section of a page?",
        answer: "<header>",
      },
      {
        question: "What semantic tag wraps the main navigation links?",
        answer: "<nav>",
      },
      {
        question:
          "What semantic tag represents the primary content of the page?",
        answer: "<main>",
      },
      {
        question:
          "What semantic tag represents a standalone piece of content, like a blog post?",
        answer: "<article>",
      },
      {
        question:
          "What semantic tag represents a thematic grouping of content?",
        answer: "<section>",
      },
      {
        question:
          "What semantic tag represents content tangentially related to the main content (e.g., a sidebar)?",
        answer: "<aside>",
      },
      {
        question:
          "What semantic tag represents the bottom of a page or section?",
        answer: "<footer>",
      },
      {
        question:
          "What is a key benefit of using semantic HTML over generic <div> tags?",
        answer:
          "It improves accessibility, SEO, and makes the code easier to read",
      },
      {
        question:
          "What non-semantic tag is commonly used as a generic container?",
        answer: "<div>",
      },
      {
        question:
          "What non-semantic inline tag is used to style or group inline content?",
        answer: "<span>",
      },
    ],
  },
  {
    id: "html-basics",
    name: "HTML Basics",
    description: "Common HTML elements and attributes.",
    color: colors.green,
    cards: [
      {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
      },
      {
        question: "What tag creates the largest heading on a page?",
        answer: "<h1>",
      },
      { question: "What tag is used to create a paragraph?", answer: "<p>" },
      { question: "What tag creates a hyperlink?", answer: "<a>" },
      {
        question: "What attribute is required on every <img> tag?",
        answer: "alt — it provides alternative text describing the image",
      },
      {
        question: "What tag creates an unordered (bulleted) list?",
        answer: "<ul>",
      },
      {
        question: "What tag creates an ordered (numbered) list?",
        answer: "<ol>",
      },
      {
        question: "What tag contains a single item in a list?",
        answer: "<li>",
      },
      {
        question: "What attribute makes a link open in a new tab?",
        answer: 'target="_blank"',
      },
      {
        question: "What is the root element of every HTML page?",
        answer: "<html>",
      },
    ],
  },
];

export function getDeckByID(id) {
  return decks.find((deck) => deck.id === id);
}
