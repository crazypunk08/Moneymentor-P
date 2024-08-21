
import { GoogleGenerativeAI } from "@google/generative-ai";
console.log(API_KEY);
const NEW_API_KEY = API_KEY;
const genAI = new GoogleGenerativeAI(NEW_API_KEY);


let form = document.forms["my-form"];
form.addEventListener("submit", getValues);
 
function getValues(event){
   event.preventDefault();
   let formData = {
      "emstatus": this['E-status'].value, 
      "age": this.age.value, 
      "income": this.incm.value,
      "Igoals": this.Igoals.value,
      "Target":this.Target.value,
      "Ihorizon": this.Ihorizon.value,
      "Rlevel": this.Rlevel.value,
  }
  document.getElementById("rimg").style.display='none';
  document.getElementById("resp").classList.add('Addbg');
  document.querySelector(".data-body").style.display='block';
  run(formData);
}

async function run(formData) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = `my age is ${formData.age} my employment status if ${formData.emstatus}
    my monthly income is ${formData.income} .My investment goals are ${formData.Igoals} 
    my Investment horizon is ${formData.Ihorizon} and my target i want to reach through 
    investment is ${formData.Target}.my Risk comfort level is ${formData.Rlevel}.
    So according to my requirements give me a sytematic investment plan in 10 points`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
     // Formatting the text
     let formattedText = text
     .replace(/\*/g, '')  // Remove all asterisks
     .replace(/<br>/g, '\n')  // Replace <br> tags with newlines
     .trim();  // Trim any leading/trailing whitespace

 document.getElementById("resp").classList.remove('Addbg');
 document.querySelector(".data-body").style.display='none';
 document.querySelector("#resp").innerText = formattedText;
  }

  function escapeHtml(unsafe) {
    return unsafe.replace(/[&<"']/g, function (match) {
        switch (match) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&#039;';
            default:
                return match;
        }
    });
}
  
 