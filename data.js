const phrasalVerbs = [

    {
      verb: "give up",
      meaning: "to stop trying",
      example: "She never gives up.",
      synonyms: ["quit", "abandon"],
      dialogue: "A: I can't do it. B: Don't give up!"
    },
    
    {
      verb: "look after",
      meaning: "to take care of someone",
      example: "She looks after her brother.",
      synonyms: ["care for", "take care of"],
      dialogue: 'A: Can you help? B: I’ll look after it.'
    },
    
    {
      verb: "turn off",
      meaning: "to stop a machine",
      example: "Turn off the lights.",
      synonyms: ["switch off"],
      dialogue: 'A: TV is on. B: I’ll turn it off.'
    },
    
    {
      verb: "turn on",
      meaning: "to start a machine",
      example: "Turn on the computer.",
      synonyms: ["switch on"],
      dialogue: 'A: It’s dark. B: I’ll turn on the light.'
    },
    
    {
      verb: "wake up",
      meaning: "to stop sleeping",
      example: "I wake up early.",
      synonyms: ["get up"],
      dialogue: 'A: Wake up! B: I’m awake.'
    },
    
    {
      verb: "get up",
      meaning: "to rise from bed",
      example: "I get up at 7.",
      synonyms: ["wake up"],
      dialogue: 'A: You’re late. B: I just got up.'
    },
    
    {
      verb: "go on",
      meaning: "to continue",
      example: "Go on talking.",
      synonyms: ["continue"],
      dialogue: 'A: I stopped. B: Go on!'
    },
    
    {
      verb: "put off",
      meaning: "to delay",
      example: "Don’t put off homework.",
      synonyms: ["delay"],
      dialogue: 'A: I’ll do it later. B: Don’t put it off.'
    },
    
    {
      verb: "set up",
      meaning: "to start something",
      example: "They set up a company.",
      synonyms: ["establish"],
      dialogue: 'A: Let’s start. B: Let’s set it up.'
    },
    
    {
      verb: "find out",
      meaning: "to discover",
      example: "I found out the truth.",
      synonyms: ["discover"],
      dialogue: 'A: What happened? B: I’ll find out.'
    },
    
    {
      verb: "pick up",
      meaning: "to collect",
      example: "I’ll pick you up.",
      synonyms: ["collect"],
      dialogue: 'A: Can you come? B: I’ll pick you up.'
    },
    
    {
      verb: "run out of",
      meaning: "to have none left",
      example: "We ran out of milk.",
      synonyms: ["finish"],
      dialogue: 'A: No milk. B: We ran out.'
    },
    
    {
      verb: "come back",
      meaning: "to return",
      example: "She came back home.",
      synonyms: ["return"],
      dialogue: 'A: Where were you? B: I came back.'
    },
    
    {
      verb: "take off",
      meaning: "to remove / plane leaves",
      example: "Take off your shoes.",
      synonyms: ["remove", "depart"],
      dialogue: 'A: Shoes please. B: I’ll take them off.'
    },
    
    {
      verb: "break down",
      meaning: "to stop working",
      example: "Car broke down.",
      synonyms: ["fail"],
      dialogue: 'A: Why late? B: Car broke down.'
    },
    
    {
      verb: "carry on",
      meaning: "to continue",
      example: "Carry on working.",
      synonyms: ["continue"],
      dialogue: 'A: Hard. B: Carry on.'
    },
    
    {
      verb: "give in",
      meaning: "to agree finally",
      example: "He gave in.",
      synonyms: ["surrender"],
      dialogue: 'A: Please. B: Fine, I give in.'
    },
    
    {
      verb: "check out",
      meaning: "to look at",
      example: "Check out this site.",
      synonyms: ["look at"],
      dialogue: 'A: Look! B: Let’s check it out.'
    },
    
    {
      verb: "hold on",
      meaning: "to wait",
      example: "Hold on a second.",
      synonyms: ["wait"],
      dialogue: 'A: Wait! B: Hold on.'
    },
    
    {
      verb: "make up",
      meaning: "to invent / reconcile",
      example: "They made up.",
      synonyms: ["invent", "reconcile"],
      dialogue: 'A: Still mad? B: No, we made up.'
    },
    
    {
      verb: "turn up",
      meaning: "to arrive / increase",
      example: "He turned up late.",
      synonyms: ["appear"],
      dialogue: 'A: Where were you? B: I turned up.'
    },
    
    {
      verb: "look for",
      meaning: "to search",
      example: "I’m looking for my keys.",
      synonyms: ["search"],
      dialogue: 'A: Keys missing. B: I’ll look for them.'
    },
    
    {
      verb: "work out",
      meaning: "to exercise / solve",
      example: "It worked out.",
      synonyms: ["solve"],
      dialogue: 'A: Problem? B: We’ll work it out.'
    },
    
    {
      verb: "back up",
      meaning: "to support / save data",
      example: "Back up your files.",
      synonyms: ["support"],
      dialogue: 'A: Help me. B: I’ll back you up.'
    },
    
    {
      verb: "bring up",
      meaning: "to mention / raise",
      example: "He brought it up.",
      synonyms: ["mention"],
      dialogue: 'A: Talk about it? B: Don’t bring it up.'
    },
    
    {
      verb: "call off",meaning: "to cancel",
      example: "They called off the meeting.",
      synonyms: ["cancel"],
      dialogue: 'A: Meeting? B: It’s called off.'
    },
    
    {
      verb: "fill in",
      meaning: "to complete form",
      example: "Fill in the form.",
      synonyms: ["complete"],
      dialogue: 'A: What to do? B: Fill it in.'
    },
    
    {
      verb: "get along",
      meaning: "to have good relationship",
      example: "They get along well.",
      synonyms: ["be friendly"],
      dialogue: 'A: Friends? B: Yes, we get along.'
    },
    
    {
      verb: "hand in",
      meaning: "to submit",
      example: "Hand in homework.",
      synonyms: ["submit"],
      dialogue: 'A: Homework? B: I’ll hand it in.'
    },
    
    {
      verb: "keep on",
      meaning: "to continue",
      example: "Keep on trying.",
      synonyms: ["continue"],
      dialogue: 'A: Hard. B: Keep on.'
    },
    
    {
      verb: "let down",
      meaning: "to disappoint",
      example: "Don’t let me down.",
      synonyms: ["disappoint"],
      dialogue: 'A: I need you. B: I won’t let you down.'
    },
    
    {
      verb: "pass out",
      meaning: "to faint",
      example: "He passed out.",
      synonyms: ["faint"],
      dialogue: 'A: Are you okay? B: I almost passed out.'
    },
    
    {
      verb: "show up",
      meaning: "to appear",
      example: "She showed up late.",
      synonyms: ["arrive"],
      dialogue: 'A: Where is she? B: She showed up.'
    },
    
    {
      verb: "throw away",
      meaning: "to discard",
      example: "Throw away trash.",
      synonyms: ["discard"],
      dialogue: 'A: What about this? B: Throw it away.'
    },
    
    {
      verb: "call back",
      meaning: "to return a phone call",
      example: "I will call you back later.",
      synonyms: ["return call"],
      dialogue: "A: Call me. B: I’ll call you back."
    },
    
    {
      verb: "calm down",
      meaning: "to become relaxed",
      example: "Calm down, everything is fine.",
      synonyms: ["relax"],
      dialogue: "A: I’m stressed. B: Calm down."
    },
    
    {
      verb: "come in",
      meaning: "to enter",
      example: "Come in the room.",
      synonyms: ["enter"],
      dialogue: "A: May I come in? B: Come in."
    },
    
    {
      verb: "come out",
      meaning: "to appear / be released",
      example: "The book came out.",
      synonyms: ["appear"],
      dialogue: "A: New movie? B: It came out."
    },
    
    {
      verb: "cut down",
      meaning: "to reduce",
      example: "Cut down sugar.",
      synonyms: ["reduce"],
      dialogue: "A: Too much sugar. B: I’ll cut down."
    },
    
    {
      verb: "drop off",
      meaning: "to leave someone somewhere",
      example: "I’ll drop you off.",
      synonyms: ["deliver"],
      dialogue: "A: Can you help? B: I’ll drop you off."
    },
    
    {
      verb: "eat out",
      meaning: "to eat in a restaurant",
      example: "We eat out on weekends.",
      synonyms: ["dine out"],
      dialogue: "A: Dinner? B: Let’s eat out."
    },
    
    {
      verb: "end up",
      meaning: "to finally be in a situation",
      example: "I ended up tired.",
      synonyms: ["finish"],
      dialogue: "A: What happened? B: I ended up there."
    },
    
    {
      verb: "fall apart",
      meaning: "to break emotionally or physically",
      example: "Everything fell apart.",
      synonyms: ["collapse"],
      dialogue: "A: Are you okay? B: I’m falling apart."
    },
    
    {
      verb: "fill out",
      meaning: "to complete a form",
      example: "Fill out the form.",
      synonyms: ["complete"],
      dialogue: "A: What do I do? B: Fill it out."
    },
    
    {
      verb: "get back",
      meaning: "to return",
      example: "I got back home.",
      synonyms: ["return"],
      dialogue: "A: Where were you? B: I got back."
    },
    
    {
      verb: "get in",
      meaning: "to enter",
      example: "Get in the car.",
      synonyms: ["enter"],
      dialogue: "A: Hurry! B: I got in."
    },
    
    {
      verb: "get out",
      meaning: "to leave",
      example: "Get out of the room.",
      synonyms: ["leave"],
      dialogue: "A: Go! B: I got out."
    },
    
    {
      verb: "give away",
      meaning: "to donate",
      example: "Give away clothes.",
      synonyms: ["donate"],
      dialogue: "A: Old clothes? B: I give them away."
    },
    
    {
      verb: "go away",
      meaning: "to leave",
      example: "Go away now.",
      synonyms: ["leave"],
      dialogue: "A: Leave. B: I’m going away."
    },
    
    {
      verb: "grow up",
      meaning: "to become adult",
      example: "He grew up fast.",
      synonyms: ["mature"],
      dialogue: "A: You changed. B: I grew up."
    },
    
    {
      verb: "hang out",
      meaning: "to spend time casually",
      example: "We hang out together.",
      synonyms: ["spend time"],
      dialogue: "A: What now? B: Let’s hang out."
    },
    
    {
      verb: "hurry up",
      meaning: "to move faster",
      example: "Hurry up!",
      synonyms: ["rush"],
      dialogue: "A: We’re late! B: I’m hurrying up."
    },
    
    {
      verb: "join in",
      meaning: "to participate",
      example: "Join in the game.",
      synonyms: ["participate"],
      dialogue: "A: Play with us. B: I’ll join in."
    },
    
    {
      verb: "keep up",
      meaning: "to stay at same level",
      example: "Keep up the pace.",
      synonyms: ["maintain"],
      dialogue: "A: Too fast! B: I’m keeping up."
    },
    
    {
      verb: "knock down",
      meaning: "to destroy",
      example: "The building was knocked down.",
      synonyms: ["destroy"],
      dialogue: "A: What happened? B: It got knocked down."
    },
    
    {
      verb: "let in",
      meaning: "to allow to enter",
      example: "Let him in.",
      synonyms: ["allow"],
      dialogue: "A: Door is closed. B: Let him in."
    },
    
    {
      verb: "look up",
      meaning: "to search information",
      example: "Look up the word.",
      synonyms: ["search"],
      dialogue: "A: Meaning? B: I’ll look it up."
    },
    
    {
      verb: "make out",
      meaning: "to understand / see clearly",
      example: "I can’t make it out.",
      synonyms: ["understand"],
      dialogue: "A: What is it? B: I can’t make it out."
    },
    
    {
      verb: "pay off",
      meaning: "to succeed / finish debt",
      example: "Hard work paid off.",
      synonyms: ["succeed"],
      dialogue: "A: Worth it? B: It paid off."
    },
    
    {
      verb: "pull over",
      meaning: "to stop a car",
      example: "The car pulled over.",
      synonyms: ["stop"],
      dialogue: "A: Stop here. B: Pulling over."
    },
    
    {
      verb: "put on",
      meaning: "to wear",
      example: "Put on jacket.",
      synonyms: ["wear"],
      dialogue: "A: Cold. B: I put it on."
    },
    
    {
      verb: "set in",
      meaning: "to begin (weather/emotion)",
      example: "Rain set in.",
      synonyms: ["begin"],
      dialogue: "A: It’s raining. B: It set in."
    },
    
    {
      verb: "show off",
      meaning: "to try to impress",
      example: "He shows off a lot.",
      synonyms: ["boast"],
      dialogue: "A: Why? B: He’s showing off."
    },
    
    {
      verb: "shut up",
      meaning: "to stop talking",
      example: "Shut up!",
      synonyms: ["be quiet"],
      dialogue: "A: Be quiet! B: I shut up."
    },
    
    {
      verb: "slow down",
      meaning: "to reduce speed",
      example: "Slow down the car.",
      synonyms: ["reduce speed"],
      dialogue: "A: Too fast! B: Slowing down."
    },
    
    {
      verb: "sort out",
      meaning: "to solve a problem",
      example: "Sort out the issue.",
      synonyms: ["solve"],
      dialogue: "A: Problem. B: I’ll sort it out."
    },
    
    {
      verb: "stick to",
      meaning: "to follow something",
      example: "Stick to the plan.",
      synonyms: ["follow"],
      dialogue: "A: Plan? B: I’ll stick to it."
    },
    
    {
      verb: "take back",
      meaning: "to return / retract",
      example: "Take back your words.",
      synonyms: ["retract"],
      dialogue: "A: Sorry. B: I take it back."
    },
    
    {
      verb: "talk over",
      meaning: "to discuss",
      example: "Talk it over.",
      synonyms: ["discuss"],
      dialogue: "A: Problem? B: Let’s talk it over."
    },
    
    {
      verb: "try on",
      meaning: "to test clothes",
      example: "Try on this jacket.",
      synonyms: ["test wear"],
      dialogue: "A: Fit? B: I’ll try it on."
    },
    
    {
      verb: "use up",
      meaning: "to finish completely",
      example: "Use up energy.",
      synonyms: ["finish"],
      dialogue: "A: Done? B: I used it up."
    },
    
    {
      verb: "warm up",
      meaning: "to prepare body / heat",
      example: "Warm up before exercise.",
      synonyms: ["prepare"],
      dialogue: "A: Ready? B: I’m warming up."
    },
    
    {
      verb: "wear out",
      meaning: "to become old / tired",
      example: "Shoes wore out.",
      synonyms: ["damage"],
      dialogue: "A: Old shoes? B: They wore out."
    },
    
    {
      verb: "work on",
      meaning: "to focus on",
      example: "Work on project.",
      synonyms: ["focus"],
      dialogue: "A: Busy? B: Working on it."
    },
    
    {
      verb: "write down",
      meaning: "to note",
      example: "Write it down.",
      synonyms: ["note"],
      dialogue: "A: Remember. B: I wrote it down."
    }
    
    ];