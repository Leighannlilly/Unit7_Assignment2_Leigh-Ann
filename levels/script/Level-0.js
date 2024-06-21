/* global number1 */

//Steps: I need to declare variables to store data from HTML document
var score=0;
var question_number=0;
const audio=document.getElementById("my-audio");
let correct_answer_button=0;

//the pseduo code is bellow
//Step: create all the structures

//Step: startime- to get the elements: title, the options 1,2,3,4
// activate the question numbers,
function startTime()
{
    //question number the last question is 10
     question_number= question_number + 1;
    let title=document.getElementById("instructions");
    title.innerHTML="Level 0 Question 1"+  question_number;
    document.getElementById("option 1").disabled=false;
    document.getElementById("option 2").disabled=false;
    document.getElementById("option 3").disabled=false;
    document.getElementById("option 4").disabled=false;
    
    //function to activate the mechanics of generating a mth question
    start_math_question();
    //A TIMER!!!! does not exist here but it will implement it in llevel 1 and 2
   //Function, maybe some javascript can be used as time function and then show time
// create modular sections or function to better maintanance
// Step 2 start math question - function
}

function start_math_question()
{
     //generate a number value that is used to generate an operator(-,+,*,/)
     //Random 4 values bacause they are 4 operators
     var operator= Math.ceil(Math.random()*4);
     
     //the first number will be generatered from 1 to 12 - random
     var number1= Math.ceil(Math.random()*12);
     document.getElementById('num1').innerHTML=number1;
     
          //the second number will be generatered from 1 to 12 - random
     var number2= Math.ceil(Math.random()*12);
     document.getElementById('num2').innerHTML=number2;
     
     //selection the operator 1/2/3/4
     //1=sum, 2=subtraction 3=multiplication 4=division
 
     
     //1 sum
     if(operator===1)
     {
          //first calculate the correct anser
          let correct_answer=number1+number2;
          document.getElementById('operator').innerHTML="+";
          
          // generate  dummy answers and show them on the screem- 4 variables wrong_answers 1,2,3,4
          let wrong_answer1=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          let wrong_answer2=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          let wrong_answer3=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          let wrong_answer4=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          
          
          // send the number back and show them
          document.getElementById('option1').innerHTML=wrong_answer1;
          document.getElementById('option2').innerHTML=wrong_answer2;
          document.getElementById('option3').innerHTML=wrong_answer3;
          document.getElementById('option4').innerHTML=wrong_answer4;
          
          
          //merge the correct answer into one button from the 4 possible options
          let correct_answer_button=Math.ceil(Math.random()*4);
           answer_option_id="option "+ correct_answer_button;
           document.getElementById(answer_option_id).innerHTML=correct_answer;
           
           //prevent the wrong answer being the correct answer
           if(wrong_answer1 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer2 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer3 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer4 ===correct_answer)
           {
               start_math_question();
           }
     }
     //2 subtraction
         if(operator===2)
     {
         //first calculate the correct anser
           correct_answer=number1-number2;
          document.getElementById('operator').innerHTML="-";
          
          //prevent negative numbers
          //validation
          if(correct_answer<=0)
          {
              start_math_question();
          }
          if(correct_answer>=1)
          {
          
          // generate  dummy answers and show them on the screem- 4 variables wrong_answers 1,2,3,4
          let wrong_answer1=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          let wrong_answer2=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          let wrong_answer3=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          let wrong_answer4=Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
          
          
          // send the number back and show them
          document.getElementById('option1').innerHTML=wrong_answer1;
          document.getElementById('option2').innerHTML=wrong_answer2;
          document.getElementById('option3').innerHTML=wrong_answer3;
          document.getElementById('option4').innerHTML=wrong_answer4;
          
          
          //merge the correct answer into one button from the 4 possible options
          let correct_answer_button=Math.ceil(Math.random()*4);
           answer_option_id="option "+ correct_answer_button;
           document.getElementById(answer_option_id).innerHTML=correct_answer;
           
           //prevent the wrong answer being the correct answer
           if(wrong_answer1 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer2 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer3 === correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer4 ===correct_answer)
           {
               start_math_question();
           }
     }
     //3 multiplication
          if(operator===3)
     {
         //first calculate the correct anser
          let correct_answer=number1*number2;
          document.getElementById('operator').innerHTML="*";
          
          // generate  dummy answers and show them on the screem- 4 variables wrong_answers 1,2,3,4
          let wrong_answer1 = Math.ceil(Math.random() * 12)*Math.ceil(Math.random() * 12);
          let wrong_answer2 = Math.ceil(Math.random() * 12)*Math.ceil(Math.random() * 12);
          let wrong_answer3 = Math.ceil(Math.random() * 12)*Math.ceil(Math.random() * 12);
          let wrong_answer4 = Math.ceil(Math.random() * 12)*Math.ceil(Math.random() * 12);
          
          
          // send the number back and show them
          document.getElementById('option1').innerHTML= wrong_answer1;
          document.getElementById('option2').innerHTML= wrong_answer2;
          document.getElementById('option3').innerHTML= wrong_answer3;
          document.getElementById('option4').innerHTML= wrong_answer4;
          
          
          //merge the correct answer into one button from the 4 possible options
          let correct_answer_button=Math.ceil(Math.random()*4);
           answer_option_id="option "+ correct_answer_button;
           document.getElementById(answer_option_id).innerHTML=correct_answer;
           
           //prevent the wrong answer being the correct answer
           if(wrong_answer1 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer2 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer3 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer4 ===correct_answer)
           {
               start_math_question();
           }
     }
     //4=division
          if(operator===4)
     {
         //first calculate the correct anser
          let correct_answer=number1/number2;
          document.getElementById('operator').innerHTML="/";
          
          // generate  dummy answers and show them on the screem- 4 variables wrong_answers 1,2,3,4
          let wrong_answer1=Math.ceil(Math.random() * 12)/Math.ceil(Math.random() * 12);
          let wrong_answer2=Math.ceil(Math.random() * 12)/Math.ceil(Math.random() * 12);
          let wrong_answer3=Math.ceil(Math.random() * 12)/Math.ceil(Math.random() * 12);
          let wrong_answer4=Math.ceil(Math.random() * 12)/Math.ceil(Math.random() * 12);
          
          
          // send the number back and show them
          document.getElementById('option1').innerHTML=wrong_answer1;
          document.getElementById('option2').innerHTML=wrong_answer2;
          document.getElementById('option3').innerHTML=wrong_answer3;
          document.getElementById('option4').innerHTML=wrong_answer4;
          
          
          //merge the correct answer into one button from the 4 possible options
          let correct_answer_button=Math.ceil(Math.random()*4);
           answer_option_id="option "+ correct_answer_button;
           document.getElementById(answer_option_id).innerHTML=correct_answer;
           
           //prevent the wrong answer being the correct answer
           if(wrong_answer1 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer2 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer3 ===correct_answer)
           {
               start_math_question();
           }
           if(wrong_answer4 ===correct_answer)
           {
               start_math_question();
           }
     }
 }   
//Step: 3 create a function when user select an answer and then compare answer
//compare answer
function compare_answer(button_id)
{
       //1:the user choose the correct answer, time to start is given 100 points
       //2:to play music
       //3:when is wrong answer
       
       //1- compare button selections
       if(correct_answer_button === button_id)
       {
           score=score+100;
           document.getElementById('score').innerHTML="Score: "+score;
           //2-play the audio
           audio.play();
           
           //2.1 disables the option and show the next button
           document.getAnimations("option 1").disabled=true;
           document.getAnimations("option 2").disabled=true;
           document.getAnimations("option 3").disabled=true;
           document.getAnimations("option 4").disabled=true;
           document.getAnimations("next-question").hidden=false;
           //when the game jas 10 questions- hide the next question button and show the finish button
           if(question_number === 10)
           {
               document.getElementById("question_number").hidden=true;
               document.getElementById("Completed").hidden=false;
           }
       }
       
       //3- the user choose the wrong answer, negative score or no points -0, time to stop??? -Level 1 Level 2
       else
       {
           //disable options and show the next button
           document.getAnimations("option 1").disabled=true;
           document.getAnimations("option 2").disabled=true;
           document.getAnimations("option 3").disabled=true;
           document.getAnimations("option 4").disabled=true;
           document.getAnimations("next-question").hidden=false;
           
           if(question_number === 10)
           {
               document.getElementById("question_number").hidden=true;
               document.getElementById("Completed").hidden=false;
           }
       }      
       