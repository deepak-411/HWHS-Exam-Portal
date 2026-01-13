
export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  topic: 'Robotics' | 'AI' | 'HTML' | 'CSS' | 'JavaScript';
};

export const questions: Question[] = [
  // --- Robotics Questions ---
  {
    id: 1,
    question: "What identifies the positive terminal of an LED?",
    options: ["The shorter lead", "The longer lead", "The black-colored lead", "The flat side of the casing"],
    answer: "The longer lead",
    topic: "Robotics"
  },
  {
    id: 2,
    question: "What is the typical operating voltage range for a standard LED?",
    options: ["0.5V to 1.5V", "1.8V to 3.3V", "5V to 10V", "12V to 24V"],
    answer: "1.8V to 3.3V",
    topic: "Robotics"
  },
  {
    id: 3,
    question: "How do you make an LED glow using a battery?",
    options: ["Connect both leads to the positive terminal", "Connect the positive lead to the negative terminal and vice versa", "Connect the positive lead to the positive terminal and the negative lead to the negative terminal", "It depends on the color of the LED"],
    answer: "Connect the positive lead to the positive terminal and the negative lead to the negative terminal",
    topic: "Robotics"
  },
  {
    id: 4,
    question: "What component is used to supply the correct voltage to an LED if the battery voltage is too high?",
    options: ["Capacitor", "Diode", "Transistor", "Resistor"],
    answer: "Resistor",
    topic: "Robotics"
  },
  {
    id: 5,
    question: "An RGB LED can produce which three primary colors?",
    options: ["Red, Yellow, Blue", "Red, Green, Blue", "Cyan, Magenta, Yellow", "Orange, Purple, Green"],
    answer: "Red, Green, Blue",
    topic: "Robotics"
  },
  {
    id: 6,
    question: "How many leads does a standard RGB LED have?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    topic: "Robotics"
  },
  {
    id: 7,
    question: "What is the main purpose of a breadboard?",
    options: ["To permanently solder components", "To test circuits temporarily", "To supply power to circuits", "To amplify signals"],
    answer: "To test circuits temporarily",
    topic: "Robotics"
  },
  {
    id: 8,
    question: "How are the pins in the central part of a breadboard (not the power rails) typically connected?",
    options: ["Horizontally", "Vertically", "In pairs", "They are all separate"],
    answer: "Vertically",
    topic: "Robotics"
  },
  {
    id: 9,
    question: "What is a major advantage of a 'solderable board' (DOT PCB) over a breadboard?",
    options: ["It is cheaper", "It is easier to change components", "It creates semi-permanent, more reliable connections", "It requires no tools"],
    answer: "It creates semi-permanent, more reliable connections",
    topic: "Robotics"
  },
  {
    id: 10,
    question: "What energy conversion happens inside a battery?",
    options: ["Mechanical to Electrical", "Thermal to Electrical", "Chemical to Electrical", "Light to Electrical"],
    answer: "Chemical to Electrical",
    topic: "Robotics"
  },
  {
    id: 11,
    question: "Which type of battery cannot be recharged after being exhausted?",
    options: ["Li-ion batteries", "Rechargeable batteries", "Non-Rechargeable batteries", "All batteries can be recharged"],
    answer: "Non-Rechargeable batteries",
    topic: "Robotics"
  },
  {
    id: 12,
    question: "What is the main function of a resistor in an electronic circuit?",
    options: ["To store energy", "To amplify current", "To reduce current flow", "To act as a one-way switch"],
    answer: "To reduce current flow",
    topic: "Robotics"
  },
  {
    id: 13,
    question: "Do resistors have polarity?",
    options: ["Yes, they must be connected in a specific direction", "No, they can be connected either way", "Only high-value resistors have polarity", "Only low-value resistors have polarity"],
    answer: "No, they can be connected either way",
    topic: "Robotics"
  },
  {
    id: 14,
    question: "A capacitor stores energy in the form of:",
    options: ["A magnetic field", "An electric field", "Chemical energy", "Kinetic energy"],
    answer: "An electric field",
    topic: "Robotics"
  },
  {
    id: 15,
    question: "What happens to the equivalent capacitance when multiple capacitors are connected in series?",
    options: ["It increases", "It stays the same", "It becomes lesser", "It becomes zero"],
    answer: "It becomes lesser",
    topic: "Robotics"
  },
  {
    id: 16,
    question: "How do you reverse the direction of a simple DC motor?",
    options: ["Increase the voltage", "Add a capacitor", "Reverse the polarity of the power supply", "Decrease the current"],
    answer: "Reverse the polarity of the power supply",
    topic: "Robotics"
  },
  {
    id: 17,
    question: "What is the key advantage of a servo motor over a standard DC motor?",
    options: ["It is much faster", "It consumes less power", "It allows for precise control of position", "It is smaller in size"],
    answer: "It allows for precise control of position",
    topic: "Robotics"
  },
  {
    id: 18,
    question: "A DC Geared motor (BO motor) is designed to provide:",
    options: ["Higher speed and lower torque", "Lower speed and higher torque", "Higher speed and higher torque", "Variable speed and variable torque"],
    answer: "Lower speed and higher torque",
    topic: "Robotics"
  },
  {
    id: 19,
    question: "A diode acts as a:",
    options: ["Two-way switch", "Current amplifier", "Voltage regulator", "One-way switch"],
    answer: "One-way switch",
    topic: "Robotics"
  },
  {
    id: 20,
    question: "What are the two terminals of a diode called?",
    options: ["Positive and Negative", "Anode and Cathode", "Collector and Emitter", "Source and Drain"],
    answer: "Anode and Cathode",
    topic: "Robotics"
  },
  {
    id: 21,
    question: "A transistor can act as both a switch and an:",
    options: ["Amplifier", "Resistor", "Capacitor", "Inductor"],
    answer: "Amplifier",
    topic: "Robotics"
  },
  {
    id: 22,
    question: "Which terminal of a transistor is used to activate it or control the flow of current?",
    options: ["Collector", "Emitter", "Base", "Gate"],
    answer: "Base",
    topic: "Robotics"
  },
  {
    id: 23,
    question: "What is the 'brain' of an Arduino board called?",
    options: ["USB Port", "Microcontroller", "Voltage Regulator", "Capacitor Bank"],
    answer: "Microcontroller",
    topic: "Robotics"
  },
  {
    id: 24,
    question: "What type of pins on an Arduino board read values from 0-1023?",
    options: ["Digital pins", "Analog pins", "Power pins", "GND pins"],
    answer: "Analog pins",
    topic: "Robotics"
  },
  {
    id: 25,
    question: "Which Arduino board is most recommended for beginners?",
    options: ["Arduino Nano", "Arduino Mega", "Arduino UNO", "Arduino LilyPad"],
    answer: "Arduino UNO",
    topic: "Robotics"
  },
  {
    id: 26,
    question: "What is the primary function of hook-up wires?",
    options: ["To resist current flow", "To store charge", "To make internal wirings of electronic devices", "To amplify signals"],
    answer: "To make internal wirings of electronic devices",
    topic: "Robotics"
  },
  {
    id: 27,
    question: "What is a key advantage of jumper cables over normal hook-up wires for breadboarding?",
    options: ["They can handle more current", "They are better for permanent circuits", "They don't need to be stripped and can be plugged in directly", "They are insulated with a special material"],
    answer: "They don't need to be stripped and can be plugged in directly",
    topic: "Robotics"
  },
  {
    id: 28,
    question: "A berg strip is also known as a:",
    options: ["Jumper Cable", "Pin Header", "Alligator Clip", "DC Jack"],
    answer: "Pin Header",
    topic: "Robotics"
  },
  {
    id: 29,
    question: "What is a 'crocodile connector' also known as?",
    options: ["Alligator connector", "DC Jack", "Berg Strip", "Jumper cable"],
    answer: "Alligator connector",
    topic: "Robotics"
  },
  {
    id: 30,
    question: "The material 'phenolic' used in solderable boards is obtained from:",
    options: ["Petroleum products", "Synthetic polymers", "A variety of plant based foods", "Recycled metals"],
    answer: "A variety of plant based foods",
    topic: "Robotics"
  },
  // --- HTML/CSS Questions ---
  {
    id: 101,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language",
    topic: "HTML"
  },
  {
    id: 102,
    question: "Which HTML tag is used to define an unordered list (a bulleted list)?",
    options: ["<ol>", "<list>", "<li>", "<ul>"],
    answer: "<ul>",
    topic: "HTML"
  },
  {
    id: 103,
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    answer: "<br>",
    topic: "HTML"
  },
  {
    id: 104,
    question: "Which character is used to indicate an end tag in HTML?",
    options: ["^", "/", "*", "<"],
    answer: "/",
    topic: "HTML"
  },
  {
    id: 105,
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
    topic: "CSS"
  },
  {
    id: 106,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "styles", "font"],
    answer: "style",
    topic: "CSS"
  },
  {
    id: 107,
    question: "Which is the correct CSS syntax?",
    options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    answer: "body {color: black;}",
    topic: "CSS"
  },
  {
    id: 108,
    question: "How do you insert a comment in a CSS file?",
    options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "<!-- this is a comment -->"],
    answer: "/* this is a comment */",
    topic: "CSS"
  },
  {
    id: 113,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>",
    topic: "HTML"
  },
  {
    id: 114,
    question: "Which attribute specifies the URL of the page the link goes to?",
    options: ["src", "link", "href", "url"],
    answer: "href",
    topic: "HTML"
  },
  {
    id: 115,
    question: "How can you make a numbered list?",
    options: ["<ul>", "<dl>", "<ol>", "<list>"],
    answer: "<ol>",
    topic: "HTML"
  },
  {
    id: 116,
    question: "Which CSS property is used to change the background color of an element?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
    topic: "CSS"
  },
  {
    id: 117,
    question: "How do you select an element with id 'demo' in CSS?",
    options: [".demo", "#demo", "demo", "*demo"],
    answer: "#demo",
    topic: "CSS"
  },
  {
    id: 118,
    question: "How do you select elements with class name 'test' in CSS?",
    options: ["#test", "test", ".test", "*test"],
    answer: ".test",
    topic: "CSS"
  },
  {
    id: 121,
    question: "What is the correct HTML for creating a checkbox?",
    options: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
    answer: "<input type='checkbox'>",
    topic: "HTML"
  },
  {
    id: 122,
    question: "Which HTML tag is used to define a table?",
    options: ["<tab>", "<table>", "<tr>", "<td>"],
    answer: "<table>",
    topic: "HTML"
  },
  {
    id: 123,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
    topic: "CSS"
  },
  {
    id: 124,
    question: "What is the default value of the `position` property in CSS?",
    options: ["relative", "fixed", "absolute", "static"],
    answer: "static",
    topic: "CSS"
  },
  {
    id: 127,
    question: "Which HTML element is used to specify a header for a document or section?",
    options: ["<head>", "<header>", "<h1>", "<top>"],
    answer: "<header>",
    topic: "HTML"
  },
  {
    id: 128,
    question: "What is the correct HTML for adding a background color?",
    options: ["<body bg='yellow'>", "<background>yellow</background>", "<body style='background-color:yellow;'>", "<body color='yellow'>"],
    answer: "<body style='background-color:yellow;'>",
    topic: "HTML"
  },
  {
    id: 129,
    question: "How do you make text bold in CSS?",
    options: ["font-weight: bold;", "font-style: bold;", "text-decoration: bold;", "text-weight: bold;"],
    answer: "font-weight: bold;",
    topic: "CSS"
  },
  {
    id: 130,
    question: "Which property is used to change the font of an element?",
    options: ["font-style", "font-family", "font-weight", "font-variant"],
    answer: "font-family",
    topic: "CSS"
  },
  {
    id: 131,
    question: "Which HTML element defines the title of a document?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    answer: "<title>",
    topic: "HTML"
  },
  {
    id: 132,
    question: "Which HTML element is a container for all the visible contents of a webpage?",
    options: ["<body>", "<head>", "<main>", "<div>"],
    answer: "<body>",
    topic: "HTML"
  },
  {
    id: 133,
    question: "How do you add a background color for all <h1> elements in CSS?",
    options: ["h1 {background-color: #FFFFFF;}", "all.h1 {background-color: #FFFFFF;}", "h1.all {background-color: #FFFFFF;}", "h1 {bgcolor: #FFFFFF;}"],
    answer: "h1 {background-color: #FFFFFF;}",
    topic: "CSS"
  },
  {
    id: 134,
    question: "Which CSS property is used to change the left margin of an element?",
    options: ["padding-left", "margin-left", "indent-left", "spacing-left"],
    answer: "margin-left",
    topic: "CSS"
  },
  {
    id: 137,
    question: "Which tag is used to display an image in HTML?",
    options: ["<img>", "<pic>", "<image>", "<picture>"],
    answer: "<img>",
    topic: "HTML"
  },
  {
    id: 138,
    question: "What attribute is required for an <img> tag to display the image?",
    options: ["href", "alt", "src", "link"],
    answer: "src",
    topic: "HTML"
  },
  {
    id: 139,
    question: "Which tag defines the most important heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
    topic: "HTML"
  },
  {
    id: 140,
    question: "Which tag is used to define a paragraph?",
    options: ["<paragraph>", "<p>", "<para>", "<text>"],
    answer: "<p>",
    topic: "HTML"
  }
];

    