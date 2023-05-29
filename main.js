class Typer {
    constructor(typedTextSpan, cursorSpan) {
      this.typedTextSpan = typedTextSpan;
      this.cursorSpan = cursorSpan;
      this.textArray = ["Hello, I'm Arnav Nanduri, a software developer with a strong background in Python, Java, SQL, C#, and web development!",
       "New here? Check out some of my projects.",
       "Need to commission something? Contact me!"
    ];
      this.typingDelay = 50;
      this.erasingDelay = 15;
      this.newTextDelay = 3000;
      this.textArrayIndex = 0;
      this.charIndex = 0;
      this.cursorInterval = null;
      this.blinkingCursor(true);
      this.type();
    }
  
    type() {
      if (this.charIndex < this.textArray[this.textArrayIndex].length) {
        this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.type(), this.typingDelay);
      } else {
        this.blinkingCursor(false);
        this.fadeOut();
      }
    }
  
    fadeOut() {
        this.typedTextSpan.style.transition = 'opacity 2s';
        this.typedTextSpan.style.opacity = '0';
        setTimeout(() => this.newText(), this.newTextDelay);
    }

    newText() {
        this.typedTextSpan.style.transition = 'none';
        this.typedTextSpan.style.opacity = '1';
        this.textArrayIndex++;
        if (this.textArrayIndex >= this.textArray.length) this.textArrayIndex = 0;
        this.typedTextSpan.textContent = '';
        this.charIndex = 0;
        this.blinkingCursor(true);
        this.type();
    }
  
    blinkingCursor(isBlinking) {
      if (isBlinking) {
        this.cursorSpan.style.opacity = '1';
        this.cursorInterval = setInterval(() => {
          this.cursorSpan.style.opacity = this.cursorSpan.style.opacity == '0' ? '1' : '0';
        }, 500);
      } else {
        clearInterval(this.cursorInterval);
        this.cursorSpan.style.opacity = '0';
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    setTimeout(() => new Typer(typedTextSpan, cursorSpan), 1000);
  });