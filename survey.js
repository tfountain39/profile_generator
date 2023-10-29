// Sources : GPT, GitHub
// Would have liked to add a filter in case of periods to make it all come out nice at the end 
// but i guess users would just redo it if they thought the formatting looked bad with extra puntuction.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('If you could dinner with 3 historical figures, who would they be and why? ', (answer1) => {
  console.log(`Thank you for your valuable feedback! `);

  rl.question('If you could instantly master any skill, what would it be and why?? ', (answer2) => {
  console.log(`Thank you for your valuable feedback! `);

  rl.question('If you could be part of a mission to Mars but you would never come back, would you go?', (answer3) => {
    console.log(`Thank you for your valuable feedback! `);

    rl.question('What is a book, movie or TV show that has had a significant impact on you, what influence did it have? ', (answer4) => {
      console.log(`Thank you for your valuable feedback! `);

      rl.question('If you could enact one law or policy for the whole world, what would it be? ', (answer5) => {
        console.log(`Thank you for your valuable feedback! `);

        rl.question('What do you think of Node.js? ', (answer6) => {
          console.log(`Thank you for your valuable feedback! `);
          const profileMessage = `
          ${answer1}. ${answer2}. ${answer3}. ${answer4}. ${answer5}. ${answer6}.`

          console.log(`Here's your customized profile page! You're sure to have a lot of 'Internet Happiness' once you upload it to your profile.`);
          console.log(profileMessage);
          rl.close();
        });
      });
    });
  });
  });
});