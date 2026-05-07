// Solution of problems 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Solution of problems 2:
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
const reversed = reverseString("typescript");

// Solution of problems 3:
type StringOrNumber = string | number;
const checkType = (val: StringOrNumber): StringOrNumber => {
  if (typeof val === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Solution of problems 4:
type User = {
  id: number;
  name: string;
  age: number;
};
const getProperty = <T extends User>(user: T, key: keyof User) => {
  return user[key].toString();
};
const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");

// Solution of problems 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const updatedBook = toggleReadStatus(myBook);


// Solution of problems 6:
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");