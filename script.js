const quotesArray = [
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
["The only way to do great work is to love what you do.", "Steve Jobs"],
["In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost"],
["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
["Life is what happens when you're busy making other plans.", "John Lennon"],
["The only thing necessary for the triumph of evil is for good men to do nothing.", "Edmund Burke"],
["The only true wisdom is in knowing you know nothing.", "Socrates"],
["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
["The best way to predict the future is to create it.", "Peter Drucker"],
["To live is the rarest thing in the world. Most people exist, that is all.", "Oscar Wilde"],
["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
["In the end, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["The best way to predict the future is to create it.", "Peter Drucker"],
["To live is the rarest thing in the world. Most people exist, that is all.", "Oscar Wilde"],
["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
["In the end, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
["It is our choices, Harry, that show what we truly are, far more than our abilities.", "J.K. Rowling"],
["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
["Life is really simple, but we insist on making it complicated.", "Confucius"],
["The best revenge is massive success.", "Frank Sinatra"],
["I have not failed. I've just found 10,000 ways that won't work.", "Thomas A. Edison"],
["If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein"],
["In the middle of every difficulty lies opportunity.", "Albert Einstein"],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["The only way to do great work is to love what you do.", "Steve Jobs"],
["It always seems impossible until it's done.", "Nelson Mandela"],
["Life is what happens when you're busy making other plans.", "John Lennon"],
["The only thing necessary for the triumph of evil is for good men to do nothing.", "Edmund Burke"],
["To succeed in life, you need two things: ignorance and confidence.", "Mark Twain"],
["If you don't stand for something, you will fall for anything.", "Malcolm X"],
["The only true wisdom is in knowing you know nothing.", "Socrates"],
["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
["The best way to predict the future is to create it.", "Peter Drucker"],
["To live is the rarest thing in the world. Most people exist, that is all.", "Oscar Wilde"],
["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
["In the end, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
["It is our choices, Harry, that show what we truly are, far more than our abilities.", "J.K. Rowling"],
["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
["Life is really simple, but we insist on making it complicated.", "Confucius"],
["The best revenge is massive success.", "Frank Sinatra"],
["I have not failed. I've just found 10,000 ways that won't work.", "Thomas A. Edison"],
["If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein"],
["In the middle of every difficulty lies opportunity.", "Albert Einstein"],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"]];


const colors = [
"#0074D9", // Blue
"#FF4136", // Red
"#2ECC40", // Green
"#FF851B", // Orange
"#001F3F", // Navy
"#FFDC00", // Yellow
"#7FDBFF", // Light Blue
"#F012BE", // Magenta
"#3D9970", // Teal
"#B10DC9", // Purple
"#39CCCC", // Cyan
"#FFD700", // Gold
"#FF6A4E", // Salmon
"#2ECC71", // Emerald
"#FF5733" // Burnt Orange
];

const randomQuoteIndex = Math.floor(Math.random() * 51);
const randomColorIndex = Math.floor(Math.random() * 16);

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotesArray[randomQuoteIndex][0],
      author: quotesArray[randomQuoteIndex][1],
      color: { color: colors[randomColorIndex] },
      background: { backgroundColor: colors[randomColorIndex] } };

    this.randomQuote = this.randomQuote.bind(this);
    document.body.style.backgroundColor = colors[randomColorIndex];
  }

  randomQuote() {
    const newQuoteIndex = Math.floor(Math.random() * 51);
    const newColorIndex = Math.floor(Math.random() * 16);
    this.setState({
      quote: quotesArray[newQuoteIndex][0],
      author: quotesArray[newQuoteIndex][1],
      color: { color: colors[newColorIndex], transition: "1.0s" },
      background: { backgroundColor: colors[newColorIndex], transition: "1.0s" } });

    document.body.style.backgroundColor = colors[newColorIndex];
    document.body.style.transition = "1.0s";
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box", style: this.state.color }, /*#__PURE__*/
      React.createElement("div", { id: "text" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-quote-left quote" }), this.state.quote), /*#__PURE__*/
      React.createElement("div", { id: "author" }, "- ", this.state.author), /*#__PURE__*/
      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: `https://twitter.com/intent/tweet?text="${encodeURIComponent(this.state.quote)}" - ${encodeURIComponent(this.state.author)}`, target: "_blank", rel: "noopener noreferrer", style: this.state.background }, /*#__PURE__*/React.createElement("i", { class: "fa fa-twitter tweet" })), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.randomQuote, style: this.state.background }, "New Quote"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachine, null), document.getElementById("quote-machine"));