
const generateMesssage = () => {
    const messages = ['Act as if what you do makes a difference. It does. - Williams Jmaes',
     'Success is not final, failure is not fatal: it is the courage to continue that counts.-Winston Churchill', 'Never bend your head. Always hold it high. Look the world straight in the eye. - Helen Keller',
     'What you get by achieving your goals is not as important as what you become by achieving your goals.-Zig Ziglar', 'Believe you can and you are halfway there.- Theodore Roosevelt', "When you have a dream, you've got to grab it and never let go.- Carol Burnett", "When you have a dream, you've got to grab it and never let go. -Jimmy Dean", 
     "No matter what you're going through, there's a light at the end of the tunnel. -Demi Lovato", "No matter what you're going through, there's a light at the end of the tunnel. -Williams James", "Life is like riding a bicycle. To keep your balance, you must keep moving. -Albert Einstern", "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong. - Ella Fitzgerald", "Limit your 'always' and your 'nevers.' -Amy Poehler", 
     "Nothing is impossible. The word itself says 'I'm possible!' -Audrey Hepburn", 
     "You are never too old to set another goal or to dream a new dream. - C.S. Lewis", 
     "Try to be a rainbow in someone else's cloud. - Maya Angelou", 
     "You do not find the happy life. You make it. -Camilla Eyring Kimball", 
     "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen. -Deep Roy", 
     "Sometimes you will never know the value of a moment, until it becomes a memory. -Dr. Seuss", 
     "The most wasted of days is one without laughter. -E. E Cummings", 
     "You must do the things you think you cannot do. -Eleanor Roosevelt", 
     "You must do the things you think you cannot do. -Ella Fitzgerald", 
     "You must do the things you think you cannot do. -George Eliot"];
      
    let randMessage = Math.floor(Math.random() * messages.length);
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let day = today.toLocaleDateString("en-US", options);
    
      return `${day}, your motivational message for the day reads - ${messages[randMessage]}`;
    }
    
    console.log(generateMesssage());
    
    
    
    