const questions = [
  {
    id: 1,
    question: "What is 15 + 27?",
    options: ["32", "42", "52", "40"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 2,
    question: "What is 20% of 250?",
    options: ["25", "40", "50", "60"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 3,
    question: "If a pen costs Rs. 10, how much do 8 pens cost?",
    options: ["Rs. 60", "Rs. 70", "Rs. 80", "Rs. 90"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 4,
    question: "A number is increased from 100 to 120. What is the percentage increase?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 5,
    question: "What is the average of 10, 20, 30, and 40?",
    options: ["20", "25", "30", "35"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 6,
    question: "If 5 workers finish a job in 10 days, how many worker-days are needed?",
    options: ["15", "25", "50", "100"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 7,
    question: "A shopkeeper buys an item for Rs. 100 and sells it for Rs. 120. What is the profit?",
    options: ["Rs. 10", "Rs. 15", "Rs. 20", "Rs. 25"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 8,
    question: "What is 12 multiplied by 9?",
    options: ["98", "108", "118", "128"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 9,
    question: "If 3 pencils cost Rs. 15, what is the cost of 1 pencil?",
    options: ["Rs. 3", "Rs. 4", "Rs. 5", "Rs. 6"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 10,
    question: "What is 75% of 80?",
    options: ["50", "55", "60", "65"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 11,
    question: "A man saves Rs. 200 from Rs. 1000. What percentage does he save?",
    options: ["10%", "20%", "25%", "30%"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 12,
    question: "If the cost price is Rs. 500 and loss is Rs. 50, what is the selling price?",
    options: ["Rs. 450", "Rs. 500", "Rs. 550", "Rs. 600"],
    answer: 0,
    topic: "Aptitude"
  },
  {
    id: 13,
    question: "What is the next number in the series: 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 14,
    question: "A train travels 60 km in 1 hour. How far will it travel in 3 hours?",
    options: ["120 km", "150 km", "180 km", "200 km"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 15,
    question: "What is 9 squared?",
    options: ["72", "81", "90", "99"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 16,
    question: "If 10% of a number is 30, what is the number?",
    options: ["100", "200", "300", "400"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 17,
    question: "A product is sold for Rs. 900 after a discount of Rs. 100. What was its marked price?",
    options: ["Rs. 800", "Rs. 900", "Rs. 1000", "Rs. 1100"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 18,
    question: "What is the average of 5, 10, and 15?",
    options: ["8", "10", "12", "15"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 19,
    question: "If 4 people share Rs. 200 equally, how much does each person get?",
    options: ["Rs. 25", "Rs. 40", "Rs. 50", "Rs. 60"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 20,
    question: "A person earns Rs. 500 and spends Rs. 350. How much is saved?",
    options: ["Rs. 100", "Rs. 150", "Rs. 200", "Rs. 250"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 21,
    question: "What is 144 divided by 12?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 22,
    question: "If the profit is Rs. 30 on a cost price of Rs. 150, what is the profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 23,
    question: "Two workers complete a task in 6 days. How many worker-days are required?",
    options: ["8", "10", "12", "14"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 24,
    question: "What is 50% of 360?",
    options: ["160", "170", "180", "190"],
    answer: 2,
    topic: "Aptitude"
  },
  {
    id: 25,
    question: "A bag has 20 balls. 5 are red. What percentage of balls are red?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    topic: "Aptitude"
  },
  {
    id: 26,
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Control Processing User"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 27,
    question: "Which language is commonly used to create web page structure?",
    options: ["HTML", "CSS", "SQL", "C"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 28,
    question: "Which device is used to store data permanently?",
    options: ["RAM", "Hard Disk", "Keyboard", "Monitor"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 29,
    question: "What is the binary value of decimal number 2?",
    options: ["00", "01", "10", "11"],
    answer: 2,
    topic: "Engineering"
  },
  {
    id: 30,
    question: "Which component supplies power to a computer?",
    options: ["SMPS", "Mouse", "Printer", "Speaker"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 31,
    question: "Which electronic component resists the flow of current?",
    options: ["Capacitor", "Resistor", "Diode", "Transistor"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 32,
    question: "Which unit is used to measure electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    answer: 2,
    topic: "Engineering"
  },
  {
    id: 33,
    question: "Which component allows current to flow in one direction only?",
    options: ["Diode", "Resistor", "Switch", "Fuse"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 34,
    question: "What is the full form of RAM?",
    options: ["Random Access Memory", "Read Access Machine", "Run Active Memory", "Rapid Action Module"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 35,
    question: "Which device is used to input text into a computer?",
    options: ["Monitor", "Keyboard", "Printer", "Projector"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 36,
    question: "Which metal is commonly used for electrical wiring?",
    options: ["Wood", "Copper", "Plastic", "Glass"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 37,
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 38,
    question: "Which simple machine is used to lift heavy loads with a wheel and rope?",
    options: ["Pulley", "Screwdriver", "Hammer", "Wedge"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 39,
    question: "Which part of an engine converts heat energy into mechanical energy?",
    options: ["Piston", "Headlight", "Battery", "Radiator cap"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 40,
    question: "What does CSS mainly control in a web page?",
    options: ["Database", "Page style", "Server speed", "File size"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 41,
    question: "Which database language is used to query data?",
    options: ["HTML", "SQL", "CSS", "XML"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 42,
    question: "Which number system uses only 0 and 1?",
    options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 43,
    question: "Which part of a computer displays output?",
    options: ["Monitor", "Keyboard", "Mouse", "Scanner"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 44,
    question: "What is the unit of resistance?",
    options: ["Ohm", "Ampere", "Volt", "Hertz"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 45,
    question: "Which tool is used to tighten or loosen screws?",
    options: ["Screwdriver", "Pliers", "Spanner", "Saw"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 46,
    question: "Which device converts mechanical energy into electrical energy?",
    options: ["Motor", "Generator", "Battery", "Switch"],
    answer: 1,
    topic: "Engineering"
  },
  {
    id: 47,
    question: "What does OS stand for in computers?",
    options: ["Operating System", "Open Source", "Output Signal", "Optical Storage"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 48,
    question: "Which cooling device is commonly used in a computer cabinet?",
    options: ["Fan", "Bulb", "Sensor", "Relay"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 49,
    question: "Which mechanical part reduces friction between moving parts?",
    options: ["Bearing", "Bolt", "Nut", "Washer"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 50,
    question: "Which electrical device protects a circuit from excess current?",
    options: ["Fuse", "Lamp", "Capacitor", "Connector"],
    answer: 0,
    topic: "Engineering"
  },
  {
    id: 51,
    question: "Choose the correct sentence.",
    options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."],
    answer: 1,
    topic: "English"
  },
  {
    id: 52,
    question: "What is the synonym of happy?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    answer: 2,
    topic: "English"
  },
  {
    id: 53,
    question: "What is the antonym of hot?",
    options: ["Warm", "Cold", "Heat", "Fire"],
    answer: 1,
    topic: "English"
  },
  {
    id: 54,
    question: "Fill in the blank: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    answer: 1,
    topic: "English"
  },
  {
    id: 55,
    question: "Choose the correct spelling.",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    answer: 1,
    topic: "English"
  },
  {
    id: 56,
    question: "What is the plural of child?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: 1,
    topic: "English"
  },
  {
    id: 57,
    question: "Choose the correct verb: They ___ playing cricket.",
    options: ["is", "am", "are", "be"],
    answer: 2,
    topic: "English"
  },
  {
    id: 58,
    question: "What is the antonym of begin?",
    options: ["Start", "Open", "End", "Move"],
    answer: 2,
    topic: "English"
  },
  {
    id: 59,
    question: "What is the synonym of quick?",
    options: ["Fast", "Slow", "Late", "Weak"],
    answer: 0,
    topic: "English"
  },
  {
    id: 60,
    question: "Choose the correct sentence.",
    options: ["I has a book.", "I have a book.", "I having a book.", "I had has a book."],
    answer: 1,
    topic: "English"
  },
  {
    id: 61,
    question: "Fill in the blank: The book is ___ the table.",
    options: ["on", "at", "by", "to"],
    answer: 0,
    topic: "English"
  },
  {
    id: 62,
    question: "What is the past tense of eat?",
    options: ["Eated", "Ate", "Eating", "Eats"],
    answer: 1,
    topic: "English"
  },
  {
    id: 63,
    question: "What is the antonym of large?",
    options: ["Huge", "Big", "Small", "Wide"],
    answer: 2,
    topic: "English"
  },
  {
    id: 64,
    question: "Choose the correct pronoun: Rina is my friend. ___ is kind.",
    options: ["He", "She", "It", "They"],
    answer: 1,
    topic: "English"
  },
  {
    id: 65,
    question: "What is the synonym of smart?",
    options: ["Clever", "Dull", "Lazy", "Weak"],
    answer: 0,
    topic: "English"
  },
  {
    id: 66,
    question: "Choose the correct article: I saw ___ elephant.",
    options: ["a", "an", "the", "no article"],
    answer: 1,
    topic: "English"
  },
  {
    id: 67,
    question: "What is the plural of box?",
    options: ["Boxs", "Boxies", "Boxes", "Boxen"],
    answer: 2,
    topic: "English"
  },
  {
    id: 68,
    question: "Choose the correct sentence.",
    options: ["He do his work.", "He does his work.", "He doing his work.", "He done his work."],
    answer: 1,
    topic: "English"
  },
  {
    id: 69,
    question: "What is the antonym of strong?",
    options: ["Powerful", "Weak", "Heavy", "Hard"],
    answer: 1,
    topic: "English"
  },
  {
    id: 70,
    question: "Fill in the blank: We go to school ___ Monday.",
    options: ["in", "on", "at", "by"],
    answer: 1,
    topic: "English"
  },
  {
    id: 71,
    question: "What is the synonym of difficult?",
    options: ["Easy", "Hard", "Simple", "Clear"],
    answer: 1,
    topic: "English"
  },
  {
    id: 72,
    question: "Choose the correct spelling.",
    options: ["Beautiful", "Beutiful", "Beautifull", "Butiful"],
    answer: 0,
    topic: "English"
  },
  {
    id: 73,
    question: "What is the past tense of go?",
    options: ["Goed", "Went", "Gone", "Going"],
    answer: 1,
    topic: "English"
  },
  {
    id: 74,
    question: "Choose the correct verb: She ___ a song.",
    options: ["sing", "sings", "singing", "sang"],
    answer: 1,
    topic: "English"
  },
  {
    id: 75,
    question: "What is the antonym of clean?",
    options: ["Neat", "Fresh", "Dirty", "Pure"],
    answer: 2,
    topic: "English"
  },
  {
    id: 76,
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. B. R. Ambedkar"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 77,
    question: "What is the capital of India?",
    options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
    answer: 2,
    topic: "GK"
  },
  {
    id: 78,
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 2,
    topic: "GK"
  },
  {
    id: 79,
    question: "Which river is known as the Ganga of South India?",
    options: ["Godavari", "Yamuna", "Narmada", "Krishna"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 80,
    question: "Who wrote the Indian national anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 81,
    question: "Which gas do plants take in for photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 82,
    question: "Which state is known as the Land of Five Rivers?",
    options: ["Punjab", "Kerala", "Rajasthan", "Assam"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 83,
    question: "Which is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Peacock"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 84,
    question: "Which organ pumps blood in the human body?",
    options: ["Lungs", "Brain", "Heart", "Kidney"],
    answer: 2,
    topic: "GK"
  },
  {
    id: 85,
    question: "Which ocean is the largest in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2,
    topic: "GK"
  },
  {
    id: 86,
    question: "Who is known as the Father of the Nation in India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh", "Subhas Chandra Bose"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 87,
    question: "Which is the smallest state in India by area?",
    options: ["Goa", "Sikkim", "Tripura", "Manipur"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 88,
    question: "What is the boiling point of water at sea level?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    answer: 2,
    topic: "GK"
  },
  {
    id: 89,
    question: "Which festival is known as the festival of lights?",
    options: ["Holi", "Diwali", "Eid", "Pongal"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 90,
    question: "Which city is called the Pink City of India?",
    options: ["Jaipur", "Delhi", "Agra", "Bhopal"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 91,
    question: "Which vitamin is produced when sunlight falls on skin?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 3,
    topic: "GK"
  },
  {
    id: 92,
    question: "Which is the national bird of India?",
    options: ["Sparrow", "Peacock", "Parrot", "Eagle"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 93,
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. A. P. J. Abdul Kalam", "Zakir Husain", "V. V. Giri"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 94,
    question: "Which planet is known as the Red Planet?",
    options: ["Mercury", "Mars", "Saturn", "Neptune"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 95,
    question: "Which mountain range is in northern India?",
    options: ["Himalayas", "Andes", "Alps", "Rockies"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 96,
    question: "How many states are there in India?",
    options: ["26", "27", "28", "29"],
    answer: 2,
    topic: "GK"
  },
  {
    id: 97,
    question: "Which is the main source of energy for Earth?",
    options: ["Moon", "Sun", "Wind", "Coal"],
    answer: 1,
    topic: "GK"
  },
  {
    id: 98,
    question: "Which Indian city is known as the Silicon Valley of India?",
    options: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 99,
    question: "Which is the longest river in India?",
    options: ["Ganga", "Yamuna", "Godavari", "Kaveri"],
    answer: 0,
    topic: "GK"
  },
  {
    id: 100,
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Speedometer", "Ammeter"],
    answer: 1,
    topic: "GK"
  }
];

module.exports = questions;
