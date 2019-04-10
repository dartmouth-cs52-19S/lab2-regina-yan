# lab2-regina-yan
lab2-regina-yan created by GitHub Classroom

In this lab, I created a Buzzfeed-style quiz that takes the user's inputs and calculates a hex color value. The quiz is framed as a "palette", and the user adds certain amounts of cyan, magenta, and yellow to create their final color mix. The background and option boxes also update their colors in response to the user's inputs. I talked with Sheppard Somers about the assignment and we both tested each other's quizzes. 

# What worked
I'm really proud of how I got the background to update based on the user's clicks, and I think I found a clever way to convert cyan, magenta, and yellow values to RGB values, which were then converted to hex color. I like how the borders of the option boxes also turn into a darker shade of the background. 

I also intentionally used a soft error message reminder that pops up in the modal - I don't like it when a quiz forces you to answer every question, so I had this quiz still calculate the result if a user didn't answer every question, but remind them when they submit that they are lacking at least one response. This choice means there are more options for final colors!

# What didn't work
I struggled a lot with animating the modal box, and eventually decided that a fade-in would look very sleek and consistent with the rest of the quiz's design. In the future, I'd like to figure out how to do more "fancy" animations.

# Screencaps

Hover feature when choosing options </br>
<img width="500" alt="Screen Shot 2019-04-09 at 10 00 11 PM" src="https://user-images.githubusercontent.com/38498065/55847662-2e8f5980-5b18-11e9-81d0-20b5b6cc2981.png">

Background changes after choosing an option </br>
<img width="500" alt="Screen Shot 2019-04-09 at 11 07 52 PM" src="https://user-images.githubusercontent.com/38498065/55880217-3e398d00-5b6e-11e9-8d48-de4ca4682329.png">

Error message if not all questions were answered </br>
<img width="500" alt="Screen Shot 2019-04-09 at 10 00 53 PM" src="https://user-images.githubusercontent.com/38498065/55847657-26371e80-5b18-11e9-8b4b-ce8f27512e08.png">

Message if all questions were answered </br>
<img width="500" alt="Screen Shot 2019-04-09 at 10 01 16 PM" src="https://user-images.githubusercontent.com/38498065/55847652-23d4c480-5b18-11e9-911e-798a822f0b4e.png">

Mobile-friendly sizing! </br>
<img width="500" alt="Screen Shot 2019-04-09 at 10 31 09 PM" src="https://user-images.githubusercontent.com/38498065/55847645-1b7c8980-5b18-11e9-9eb3-f1ef60a75ed0.png">




