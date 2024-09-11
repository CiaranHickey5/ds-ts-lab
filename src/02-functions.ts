import { colleagues, friends } from "./01-basics";
import { Friend, Colleague, EmailContact } from "./myTypes";

function older(f: Friend) {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

// console.log(older(friends[0]));

function allOrder(friends: Friend[]) {
  let friendsList: string[] = [];
  for (let i = 0; i < friends.length; i++) {
    friends[i].age += 1;
    friendsList.push(`${friends[i].name} is now ${friends[i].age}`);
  }
  return friendsList;
}

// console.log(allOrder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
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

// addColleague(colleagues.current, "Ciaran Hickey", "HR", "123@test.com");
// console.log(colleagues.current.filter((c) => c.name === "Ciaran Hickey"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return result;
}

// console.log(
//   sortColleagues(
//     colleagues.current,
//     (a, b) => a.contact.extension - b.contact.extension
//   )
// );
// console.log(
//   sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)
// );

function findFriends(
  friends: Friend[],
  searcher: (friend: Friend) => boolean
): string[] {
  const result = friends.filter(searcher);
  const names = result.map((friend) => friend.name);
  return names;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

