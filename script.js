// Define an array of questions and their answers
const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false },
        { text: "Berlin", correct: false },
      ],
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: [
        { text: "K2", correct: false },
        { text: "Everest", correct: true },
        { text: "Denali", correct: false },
        { text: "Kilimanjaro", correct: false },
      ],
    },
    {
      question: "What is the largest continent by land area?",
      answers: [
        { text: "Europe", correct: false },
        { text: "Asia", correct: true },
        { text: "South America", correct: false },
        { text: "Africa", correct: false },
      ],
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
          { text: "Vatican City", correct: true },
          { text: "Monaco", correct: false },
          { text: "San Marino", correct: false },
          { text: "Nauru", correct: false },
        ],
      },
      {
        question: "What is the currency of Japan?",
        answers: [
          { text: "Dollar", correct: false },
          { text: "Euro", correct: false },
          { text: "Yen", correct: true },
          { text: "Pound", correct: false },
        ],
      },
      {
        question: "What is the capital of Australia?",
        answers: [
          { text: "Sydney", correct: false },
          { text: "Melbourne", correct: false },
          { text: "Canberra", correct: true },
          { text: "Perth", correct: false },
        ],
      },
      {
        question: "What is the largest country in the world by land area?",
        answers: [
          { text: "Russia", correct: true },
          { text: "Canada", correct: false },
          { text: "China", correct: false },
          { text: "United States", correct: false },
        ],
      },
      {
        question: "What is the deepest ocean in the world?",
        answers: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Arctic Ocean", correct: false },
          { text: "Indian Ocean", correct: false },
          { text: "Pacific Ocean", correct: true },
        ],
      },
      {
        question: "What is the largest desert in the world?",
        answers: [
          { text: "Sahara", correct: true },
          { text: "Gobi", correct: false },
          { text: "Kalahari", correct: false },
          { text: "Arabian", correct: false },
        ],
      },
      {
        question: "What is the most populous country in the world?",
        answers: [
          { text: "India", correct: false },
          { text: "China", correct: true },
          { text: "United States", correct: false },
          { text: "Brazil", correct: false },
        ],
      },
      {
        question: "What is the largest river in the world by volume?",
        answers: [
          { text: "Amazon", correct: true },
          { text: "Nile", correct: false },
          { text: "Yangtze", correct: false },
          { text: "Mississippi", correct: false },
        ],
      },
      {
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Jupiter", correct: true },
          { text: "Mars", correct: false },
          { text: "Venus", correct: false },
          { text: "Earth", correct: false },
        ],
      },
      {
        question: "What is the highest waterfall in the world?",
        answers: [
          { text: "Niagara Falls", correct: false },
          { text: "Iguazu Falls", correct: false },
          { text: "Victoria Falls", correct: false },
          { text: "Angel Falls", correct: true },
        ],
      },
      {
        question: "What is the largest animal on earth?",
        answers: [
          { text: "Elephant", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Giraffe", correct: false },
          { text: "Hippopotamus", correct: false },
        ],
      },
      {
        question: "What is the hottest planet in our solar system?",
        answers: [
          { text: "Mercury", correct: false },
          { text: "Venus", correct: true },
          { text: "Mars", correct: false },
          { text: "Jupiter", correct: false },
        ],
      },
      {
        question: "What is the smallest planet in our solar system?",
        answers: [
          { text: "Mercury", correct: true },
          { text: "Venus", correct: false },
          { text: "Mars", correct: false },
          { text: "Neptune", correct: false },
        ],
      },
      {
        question: "What is the longest river in Africa?",
        answers: [
          { text: "Nile", correct: true },
          { text: "Congo", correct: false },
          { text: "Zambezi", correct: false },
          { text: "Niger", correct: false },
        ],
      },
      {
        question: "What is the largest tree species in the world?",
        answers: [
          { text: "Coast Redwood", correct: false },
          { text: "Sequoia", correct: true },
          { text: "Douglas Fir", correct: false },
          { text: "Banyan", correct: false },
        ],
      },
      {
        question: "What is the smallest mammal in the world?",
        answers: [
          { text: "Pygmy Shrew", correct: false },
          { text: "Bumblebee Bat", correct: true },
          { text: "Kitti's Hog-Nosed Bat", correct: false },
          { text: "Pygmy Mouse Lemur", correct: false },
        ],
      },
      {
        question: "What is the only continent with no bees?",
        answers: [
          { text: "Africa", correct: false },
          { text: "Europe", correct: false },
          { text: "Antarctica", correct: true },
          { text: "South America", correct: false },
        ],
      },
      {
        question: "What is the deepest part of the ocean?",
        answers: [
          { text: "Mariana Trench", correct: true },
          { text: "Puerto Rico Trench", correct: false },
          { text: "Java Trench", correct: false },
          { text: "South Sandwich Trench", correct: false },
        ],
      },
      {
        question: "What is the capital city of love?",
        answers: [
          { text: "Barcelona", correct: false },
          { text: "Florence", correct: false },
          { text: "Paris", correct: true },
          { text: "Venice", correct: false },
        ],
      },
      {
        question: "In what country did the tradition of giving engagement rings originate?",
        answers: [
          { text: "France", correct: false },
          { text: "Germany", correct: false },
          { text: "Italy", correct: false },
          { text: "Egypt", correct: true },
        ],
      },
      {
        question: "What is the most popular romantic destination in the world?",
        answers: [
          { text: "Paris", correct: false },
          { text: "Venice", correct: false },
          { text: "Santorini", correct: true },
          { text: "Bali", correct: false },
        ],
      },
      {
        question: "What is the most popular flower associated with love?",
        answers: [
          { text: "Lily", correct: false },
          { text: "Rose", correct: true },
          { text: "Sunflower", correct: false },
          { text: "Daisy", correct: false },
        ],
      },
      {
        question: "What is the name of the Italian city known for its romantic canals?",
        answers: [
          { text: "Rome", correct: false },
          { text: "Venice", correct: true },
          { text: "Naples", correct: false },
          { text: "Milan", correct: false },
        ],
      },
      {
        question: "What is the most popular day for marriage proposals?",
        answers: [
          { text: "Valentine's Day", correct: false },
          { text: "Christmas Day", correct: false },
          { text: "New Year's Day", correct: false },
          { text: "Christmas Eve", correct: true },
        ],
      },
      {
        question: "What is the traditional symbol for a 50th wedding anniversary?",
        answers: [
          { text: "Gold", correct: true },
          { text: "Silver", correct: false },
          { text: "Diamond", correct: false },
          { text: "Platinum", correct: false },
        ],
      },
      {
        question: "What is the name of the famous balcony scene in Romeo and Juliet?",
        answers: [
          { text: "The Garden Scene", correct: false },
          { text: "The Courtyard Scene", correct: false },
          { text: "The Balcony Scene", correct: true },
          { text: "The Ballroom Scene", correct: false },
        ],
      },
      {
        question: "What is the name of the river that flows through the city of love?",
        answers: [
          { text: "Seine", correct: true },
          { text: "Thames", correct: false },
          { text: "Danube", correct: false },
          { text: "Rhine", correct: false },
        ],
      },
      {
        question: "What is the name of the love story between Jack and Rose in the movie Titanic?",
        answers: [
          { text: "Love Story on a Ship", correct: false },
          { text: "The Voyage of Love", correct: false },
          { text: "A Love to Remember", correct: false },
          { text: "The Heart Will Go On", correct: true },
        ],
      },
      {
        question: "What is the traditional gift for a first wedding anniversary?",
        answers: [
          { text: "Paper", correct: true },
          { text: "Cotton", correct: false },
          { text: "Wood", correct: false },
          { text: "Leather", correct: false },
        ],
      },
      {
        question: "What is the name of the romantic drama film starring Ryan Gosling and Rachel McAdams?",
        answers: [
          { text: "The Vow", correct: false },
          { text: "A Walk to Remember", correct: false },
          { text: "The Notebook", correct: true },
          { text: "Dear John", correct: false },
        ],
      },
      {
        question: "What is the name of the love story between Bella and Edward in the Twilight series?",
        answers: [
          { text: "Moonlight", correct: false },
          { text: "Eclipse", correct: false },
          { text: "Breaking Dawn", correct: false },
          { text: "Twilight", correct: true },
        ],
      },
      {
        question: "What is the name of the fictional character who famously said 'You complete me' in a movie?",
        answers: [
          { text: "Harry Potter", correct: false },
          { text: "Forrest Gump", correct: false },
          { text: "Jerry Maguire", correct: true },
          { text: "Indiana Jones", correct: false },
        ],
      },
      {
        question: "What is the name of the American holiday that celebrates love and friendship?",
        answers: [
          { text: "Thanksgiving", correct: false },
          { text: "Independence Day", correct: false },
          { text: "Christmas", correct: false },
          { text: "Valentine's Day", correct: true },
        ],
      },
      {
        question: "What is the name of the famous Italian city where Shakespeare's Romeo and Juliet is set?",
        answers: [
          { text: "Rome", correct: false },
          { text: "Venice", correct: false },
          { text: "Florence", correct: false },
          { text: "Verona", correct: true },
        ],
      },
      {
        question: "What is the name of the monster in Mary Shelley's novel?",
        answers: [
          { text: "The Mummy", correct: false },
          { text: "The Vampire", correct: false },
          { text: "The Werewolf", correct: false },
          { text: "Frankenstein's Monster", correct: true },
        ],
      },
      {
        question: "What is the name of the protagonist in J.D. Salinger's The Catcher in the Rye?",
        answers: [
          { text: "Holden Caulfield", correct: true },
          { text: "Jay Gatsby", correct: false },
          { text: "Tom Sawyer", correct: false },
          { text: "Atticus Finch", correct: false },
        ],
      },
      {
        question: "What is the name of the classic novel about the adventures of a young girl named Alice?",
        answers: [
          { text: "Alice in Wonderland", correct: true },
          { text: "The Secret Garden", correct: false },
          { text: "The Wind in the Willows", correct: false },
          { text: "Charlotte's Web", correct: false },
        ],
      },
      {
        question: "What is the name of the Greek epic poem about the Trojan War?",
        answers: [
          { text: "The Iliad", correct: true },
          { text: "The Odyssey", correct: false },
          { text: "The Aeneid", correct: false },
          { text: "The Divine Comedy", correct: false },
        ],
      },
      {
        question: "What is the title of the Chinese web novel about a transmigrated gamer who becomes a powerful martial artist in a fantasy world?",
        answers: [
          { text: "Coiling Dragon", correct: false },
          { text: "Desolate Era", correct: false },
          { text: "I Shall Seal the Heavens", correct: false },
          { text: "Against the Gods", correct: true },
        ],
      },
      {
        question: "What is the name of the protagonist in the Chinese web novel 'The Legend of the Dragon King'?",
        answers: [
          { text: "Tang Wulin", correct: true },
          { text: "Xiao Yan", correct: false },
          { text: "Linley Baruch", correct: false },
          { text: "Chen Changsheng", correct: false },
        ],
      },
      {
        question: "What is the name of the Chinese web novel that features a protagonist named Meng Hao who cultivates the Dao of alchemy and seeks immortality?",
        answers: [
          { text: "A Will Eternal", correct: false },
          { text: "Renegade Immortal", correct: false },
          { text: "I Shall Seal the Heavens", correct: true },
          { text: "Against the Gods", correct: false },
        ],
      },
      {
        question: "What is the name of the protagonist in the Chinese web novel 'The King's Avatar'?",
        answers: [
          { text: "Linley Baruch", correct: false },
          { text: "Ye Xiu", correct: true },
          { text: "Tang Wulin", correct: false },
          { text: "Chen Changsheng", correct: false },
        ],
      },
      {
        question: "What does HTML stand for?",
        answers: [
          { text: "HyperText Markup Language", correct: true },
          { text: "HyperText Transfer Protocol", correct: false },
          { text: "High Tech Markup Language", correct: false },
          { text: "High Tech Transfer Protocol", correct: false },
        ],
      },
      {
        question: "What is the name of the programming language created by Google?",
        answers: [
          { text: "Java", correct: false },
          { text: "Python", correct: false },
          { text: "Go", correct: true },
          { text: "C#", correct: false },
        ],
      },
      {
        question: "What is the name of the cloud storage service offered by Amazon?",
        answers: [
          { text: "OneDrive", correct: false },
          { text: "Google Drive", correct: false },
          { text: "iCloud", correct: false },
          { text: "Amazon S3", correct: true },
        ],
      },
      {
        question: "What is the name of the programming language used to build iOS apps?",
        answers: [
          { text: "Java", correct: false },
          { text: "Objective-C", correct: true },
          { text: "Python", correct: false },
          { text: "Ruby", correct: false },
        ],
      },
      {
        question: "What is the name of the mobile operating system developed by Google?",
        answers: [
          { text: "iOS", correct: false },
          { text: "Android", correct: true },
          { text: "Windows Phone", correct: false },
          { text: "BlackBerry OS", correct: false },
        ],
      },
      {
        question: "What is the name of the popular text editor created by Microsoft?",
        answers: [
          { text: "Notepad", correct: false },
          { text: "Atom", correct: false },
          { text: "Sublime Text", correct: false },
          { text: "Visual Studio Code", correct: true },
        ],
      },
      {
        question: "What is the name of the database management system created by Oracle Corporation?",
        answers: [
          { text: "MySQL", correct: false },
          { text: "PostgreSQL", correct: false },
          { text: "MongoDB", correct: false },
          { text: "Oracle Database", correct: true },
        ],
      },
      {
        question: "What is the name of the web browser developed by Mozilla?",
        answers: [
          { text: "Internet Explorer", correct: false },
          { text: "Safari", correct: false },
          { text: "Firefox", correct: true },
          { text: "Chrome", correct: false },
        ],
      },
    ];

  // Define variables
  let currentQuestion = 0;
  let score = 0;
  
  // Shuffle questions randomly
questions.sort(() => Math.random() - 0.5);

// Display shuffled questions
questions.forEach((question) => {
  console.log(question.question);
  question.answers.forEach((answer) => {
    console.log(answer.text);
  });
});

  // Get HTML elements
  const questionElement = document.getElementById("question");
  const answersContainer = document.getElementById("answers-container");
  const nextButton = document.getElementById("next-button");
  
  // Define event listeners
  nextButton.addEventListener("click", showNextQuestion);
  answersContainer.addEventListener("click", selectAnswer);
  
  // Show the first question
  showQuestion();
  
  // Function to show a question
  function showQuestion() {
    // Get the current question object
    const question = questions[currentQuestion];
  
    // Set the question text
    questionElement.innerText = question.question;

    // Clear the answers container
    answersContainer.innerHTML = "";
    
    // Loop through the answers and create HTML elements for each one
    for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    const answerElement = document.createElement("div");
    answerElement.innerText = answer.text;
    answerElement.classList.add("answer");
    answersContainer.appendChild(answerElement);
    }
    }
    
    // Function to select an answer
    function selectAnswer(event) {
    const selectedAnswer = event.target;
    const isCorrect = questions[currentQuestion].answers.find(
    (answer) => answer.text === selectedAnswer.innerText
    ).correct;
    
    // Update the score and the answer color
    if (isCorrect) {
    selectedAnswer.classList.add("correct-answer");
    score++;
    } else {
    selectedAnswer.classList.add("incorrect-answer");
    }
    
    // Disable all the answer buttons
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => (button.disabled = true));
    
    // Show the next button
    nextButton.disabled = false;
    }
    
    // Function to show the next question
    function showNextQuestion() {
    // Move to the next question
    currentQuestion++;
    
    // If there are no more questions, show the score and disable the buttons
if (currentQuestion === questions.length) {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    answersContainer.innerHTML = "";
    nextButton.disabled = true;
  } else {
    // Otherwise, show the next question
    showQuestion();
  
    // Enable the answer buttons and disable the next button
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("correct-answer", "incorrect-answer");
    });
    nextButton.disabled = true;
  }
    }  