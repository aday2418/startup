# January 27th Notes

### Major Purposes of HTML
+ **Structure**: Providing structure to web applications
+ **Content**: Delivering content

### Common HTML Structural Elements
+ `body`: The top-level content container
+ `header`: Contains introductory content or navigational links
+ `footer`: Represents the footer for its nearest sectioning content
+ `main`: Specifies the main content of a document
+ `section`: Defines sections in a document
+ `aside`: Used for content indirectly related to the main content
+ `p`: Represents a paragraph
+ `table`: For tabular data
+ `ol`/`ul`: Ordered/Unordered lists
+ `div`: A generic container for flow content
+ `span`: A generic inline container

### Example HTML Document Structure
```html
<body>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <ul>
        <li>List</li>
      </ul>
    </section>
    <section>
      <table>
        <tr>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>

### Importance of Block vs Inline Elements in HTML
+ Understanding the difference between block and inline elements in HTML is crucial for creating well-structured and visually coherent web pages

### Block Elements
+ **Definition**: Block elements create a visible block on a page — they will start on a new line and take up the full width available
+ **Characteristics**:
    + Start on a new line.
    + Occupy the full width available, stretching out to the left and right as far as they can
    + Can contain other block elements and inline elements
+ **Examples**: `div`, `p`, `header`, `footer`, `section`

### Inline Elements
+ **Definition**: Inline elements do not start on a new line and only take up as much width as necessary
+ **Characteristics**:
    + Do not start on a new line
    + Occupy only the necessary width
    + Cannot contain block elements
    + Commonly used for small chunks of HTML inside a block-level element
+ **Examples**: `span`, `a`, `strong`, `img`

### Why the Distinction Matters
+ **Layout Control**: Block elements are essential for creating the main structure of a webpage, while inline elements are used for styling smaller portions of text or content within those blocks
+ **Semantic Clarity**: Using the correct type of element helps communicate the meaning and structure of your content, which is important for accessibility and SEO
+ **Styling**: CSS treats block and inline elements differently. Understanding this helps in applying styles more effectively

### Example
+ Consider a paragraph with emphasized text:
<p>This is a <strong>significant</strong> word in the sentence.</p>
+ 'p' is a block element, creating a new line and containing the whole sentence
+ 'strong' is an inline element, emphasizing a word without breaking the flow of the sentence