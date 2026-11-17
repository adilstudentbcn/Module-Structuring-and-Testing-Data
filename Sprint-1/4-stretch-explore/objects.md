## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] } //f means it's a function

Now enter just `console` in the Console, what output do you get back?
A list of functions.

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
It stores an Object.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The `.` accesses a property (such as the `log` or `assert` method) inside the `console` object without running it. Adding parentheses `()` after the name is what actually calls (runs) the function.
When you type `console` and then `.`, you can access all the properties and methods inside the `console` object and choose the one you want.
