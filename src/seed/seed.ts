interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  imageUrl: string;
}

interface SeedData {
  monsters: Monster[];
}

export const initialData: SeedData = {
  monsters: [
    {
      id: "monster-1",
      name: "Dead Unicorn",
      attack: 60,
      defense: 40,
      hp: 10,
      speed: 80,
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
    },
    {
      id: "monster-2",
      name: "Old Shark",
      attack: 50,
      defense: 20,
      hp: 80,
      speed: 90,
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png",
    },
    {
      id: "monster-3",
      name: "Red Dragon",
      attack: 90,
      defense: 80,
      hp: 90,
      speed: 70,
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png",
    },
    {
      id: "monster-4",
      name: "Robot Bear",
      attack: 50,
      defense: 40,
      hp: 80,
      speed: 60,
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/robot-bear.png",
    },
    {
      id: "monster-5",
      name: "Angry Snake",
      attack: 80,
      defense: 20,
      hp: 70,
      speed: 80,
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/angry-snake.png",
    },
  ],
};
