class Typer {
    constructor(typedTextSpan, cursorSpan) {
      this.typedTextSpan = typedTextSpan;
      this.cursorSpan = cursorSpan;
      this.textArray = ["Hello, I'm Arnav Nanduri, a miscellaneous software developer with a strong background in Python, Java, SQL, C#, and web development!",
       "New here? Check out some of my projects.",
       "Need to commission something? Contact me!"
    ];
      this.typingDelay = 50;
      this.erasingDelay = 20;
      this.newTextDelay = 2000;
      this.textArrayIndex = 0;
      this.charIndex = 0;
      this.typing = true;
      this.blinkingCursor();
      this.type();
    }
  
    type() {
      if (this.charIndex < this.textArray[this.textArrayIndex].length) {
        this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.type(), this.typingDelay);
      } else {
        this.typing = false;
        setTimeout(() => this.erase(), this.newTextDelay);
      }
    }
  
    erase() {
      if (this.charIndex > 0) {
        this.typedTextSpan.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.erase(), this.erasingDelay);
      } else {
        this.typing = true;
        this.textArrayIndex++;
        if (this.textArrayIndex >= this.textArray.length) this.textArrayIndex = 0;
        setTimeout(() => this.type(), this.typingDelay + 1100);
      }
    }
  
    blinkingCursor() {
      setInterval(() => {
        this.cursorSpan.style.opacity = this.cursorSpan.style.opacity == '0' ? '1' : '0';
      }, 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    setTimeout(() => new Typer(typedTextSpan, cursorSpan), 1000);
  });