import { colleagues, friends } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

// console.log(older(friends[0]));

function allOrder(friends: Friend[]): string[] {
  let friendsList: string[] = [];
  for (let i = 0; i < friends.length; i++) {
    friends[i].age += 1;
    friendsList.push(`${friends[i].name} is now ${friends[i].age}`);
  }
  return friendsList;
}

// console.log(allOrder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
// console.log(highestExtension(colleagues.current));

function addColleague(
  arr: Colleague[],
  name: string,
  department: string,
  email: string
) {
  const colleagueWithHighestExtension = highestExtension(arr);
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: colleagueWithHighestExtension.contact.extension + 1,
    },
  };
  arr.push(newColleague);
}

addColleague(colleagues.current,"Ciaran Hickey", "HR", "123@test.com")
console.log(colleagues.current.filter((c) => c.name === "Ciaran Hickey"))

