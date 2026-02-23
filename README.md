<h1>Hello, I'm Fardin </h1>
<p>I have completed my Diploma in Engineering, finishing my 8th semester, with a degree in Computer Science and Technology. In the future, I aspire to become a skilled and successful Web Developer.</p>
<br>
<br>
<hr>
<h1>Here are some Answer of Questions Releted to the Assignment</h1>

<h3>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h3>
<p>Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is getElementById is used to select a single element by its unique ID and always returns one element. getElementsByClassName selects all elements that have a specific class and returns an HTMLCollection, which you can loop through. querySelector selects the first element that matches any CSS selector, while querySelectorAll selects all elements that match a CSS selector and returns a NodeList. In short, getElementById and querySelector are for one element, whereas getElementsByClassName and querySelectorAll are for multiple elements.</p>

<h3>2. How do you create and insert a new element into the DOM?</h3>
<p>To create a new element, use document.createElement("tagName"), set its content or attributes, and then insert it into the DOM using methods like appendChild(), insertBefore(), or append(). For example, you can create a new <p> element, set its text with textContent, and add it to a parent element using parent.appendChild(newElement).</p>

<h3>3. What is Event Bubbling? And how does it work?</h3>
<p>Event Bubbling is a process in JavaScript where an event triggered on a child element bubbles up through its parent elements in the DOM tree. For example, if you click a button inside a div, the click event first happens on the button, then moves up to the div, and then to higher ancestors, unless it is stopped.</p>

<h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>
<p>Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements. The parent listens for events that bubble up from its children, and you can check which child triggered the event using event.target. It is useful because it reduces memory usage, simplifies code, and allows handling dynamic elements added after the page loads.</p>

<h3>5. What is the difference between preventDefault() and stopPropagation() methods?</h3>
<p>preventDefault() stops the browser’s default action for an event, like preventing a link from opening or a form from submitting. stopPropagation() stops the event from bubbling up to parent elements, so ancestor event listeners don’t run. They are often used together to control event behavior carefully.</p>
