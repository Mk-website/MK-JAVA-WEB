console.log("hello");
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  // const typelist = ["Array","Basic"];
  // let select = document.getElementById("selecttype");
  // select.style.color = "red";
  // for (let i=0;i<typelist.length;i++)
  // {
  //   select.innerHTML += `<option value="${typelist[i]}">${typelist[i]}</option>`; 
  // }
  const programData = {
    "2D ARRAYS": {
        "Easy": {
            "Sum of Elements": {
                description: "Program to sum elements of an array.",
                code: `
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
            },
            "Find Maximum": {
                description: "Program to find the maximum element in an array.",
                code: `
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
`,
  output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
     `
            }
        },
        "Medium": {
            "Reverse Array": {
                description: "Program to reverse an array.",
                code: `
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
            },
            "Find Second Largest": {
                description: "Program to find the second largest element in an array.",
                code: `
function findSecondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
            }
        },
        "Hard": {
            "Merge Sort": {
                description: "Program to sort an array using Merge Sort.",
                code: `
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
                `
            },
            "Quick Sort": {
                description: "Program to sort an array using Quick Sort.",
                code: `
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let array = [10, 7, 8, 9, 1, 5];
console.log(quickSort(array)); // Output: [1, 5, 7, 8, 9, 10]
                `
            }
        }
        

    },
    // Add similar data for String, Inheritance, and OOP...
    "APPLETS": {
      "Easy": {
          "Sum of Elements": {
              description: "Program to sum elements of an array.",
              code: `
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
          },
          "Find Maximum": {
              description: "Program to find the maximum element in an array.",
              code: `
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
          }
      },
      "Medium": {
          "Reverse Array": {
              description: "Program to reverse an array.",
              code: `
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
  }
  return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
          },
          "Find Second Largest": {
              description: "Program to find the second largest element in an array.",
              code: `
function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          secondMax = max;
          max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
          secondMax = arr[i];
      }
  }

  return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
          }
      },
      "Hard": {
          "Merge Sort": {
              description: "Program to sort an array using Merge Sort.",
              code: `
function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
          },
          "Quick Sort": {
              description: "Program to sort an array using Quick Sort.",
              code: `
function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
          }
      }
  },
  "BASIC PROGRAMMING CONSTRUCTS": {
    "Easy": {
        "Hello World!": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
package hello;
class hello
	{
	public static void main(String st[])
	{
		System.out.println("Hello World!");
	}
	}


`,
                output: `
                Hello World!
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
package Sum;
class Sum
            {
                public static void main(String st[])
                {
                    int a=5,b=10;
                    System.out.println("Sum of "+a +","+b+" = "+(a+b));
                }
            }
`,
                output: `
                Sum of 5,10 = 15`
        },
        "product of two numbers": {
            description: "Write a Java program that takes two numbers and display the product of two numbers",
            code: `
package product;
class product
            {
                public static void main(String st[])
                {
                    int a=5,b=10;
                    System.out.println("Product of "+a +","+b+"="+(a*b));
                }
            }
`,
                output: `
                Product of 5,10=50
                `
        }, 
        "Arithmetic Operators": {
            description: "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
            code: `
package multiop;
class multiop
	{
	public static void main(String[] st)
	{
	int a=5,b=10;
	System.out.println("Sum of " +a+"+"+b+"="+(a+b));
	System.out.println("multiply of  " +a+"*"+b+"="+(a*b));
	System.out.println("Subtraction of  " +b+"-"+a+"="+(b-a));
	System.out.println("Divisio of " +b+"/"+a+"="+(b/a));
	System.out.println("Reminder of " +b+"%"+a+"="+(b%a));
	}
	}

`,
                output: `
Sum of 5+10=15
multiply of  5*10=50
Subtraction of  10-5=5
Divisio of 10/5=2
Reminder of 10%5=0
                `
        },
        "Average of the numbers": {
            description: "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
            code: `
package avg;
class avg{
public static void main(String[] st)
{
int a=5,b=6,c=8,d=9,e=4;
int avg = (a+b+c+d+e)/5;
System.out.println("Average of 5 number is :-"+avg);
}
}

`,
                output: `
            package avg;
class avg{
public static void main(String[] st)
{
int a=5,b=6,c=8,d=9,e=4;
int avg = (a+b+c+d+e)/5;
System.out.println("Average of 5 number is :-"+avg);
}
}

                `
        },
        "swap two variables": {
            description: "Write a Java program to swap two variables",
            code: `
package swap;
class swap
{
public static void main(String[] st)
{
 int a = 45,b=50;
 int c;
 System.out.println("Before Swap : a = "+a+" b = "+b);
 c = a+b;
 a = c-a;
 b= c-b;
System.out.println("After Swap : a = "+a+" b = "+b);
}
}


`,
                output: `
Before Swap : a = 45 b = 50
After Swap : a = 50 b = 45
                `
        },
        "convert a decimal number to binary numbers": {
            description: "Write a Java program to convert a decimal number to binary numbers",
            code: `
package decimalToBinary;
class decimalToBinary
	{
	public static void main(String[] st)
	{
	int Decimal=12,i=0,temp;
	int Binary[] = new int[10];
	temp = Decimal;
	while(temp>0)
			{
			Binary[i]=temp%2;
			temp/=2;
			i++;
			}
			System.out.println("Binary no. of "+Decimal);
			for(i=Binary.length-1;i>=0;i--)
			{
				System.out.print(Binary[i]);
			}
			 
	}
	}


`,
                output: `
            Binary no. of 12
0000001100
                `
        },
        "convert a binary number to decimal number": {
            description: "Write a Java program to convert a binary number to decimal number",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "is Java installed ?": {
            description: "Write a Java program to check whether Java is installed on your computer or not",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of the digits of an integer": {
            description: "Write a Java program and compute the sum of the digits of an integer",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "compare two numbers": {
            description: "Write a Java program to compare two numbers",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "count the letters, spaces, numbers and other characters ": {
            description: "Write a Java program to count the letters, spaces, numbers and other characters of an input strings",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "ascii value": {
            description: "Write a Java program to print the ascii value of a given character",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "computes the value of n+nn+nnn": {
            description: "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "display the system time": {
            description: "Write a Java program to display the system time",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "odd numbers from 1 to 20": {
            description: "Write a Java program to print the odd numbers from 1 to 20",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "even numbers from 1 to 20": {
            description: "Write a Java program to print the even numbers from 1 to 20",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "convert a string to an integer": {
            description: "Write a Java program to convert a string to an integer",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "convert seconds to hour, minute and seconds": {
            description: "Write a Java program to convert seconds to hour, minute and seconds",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of the first 100 prime number": {
            description: "Write a Java program to compute the sum of the first 100 prime numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "swap the first and last elements of an array": {
            description: "Write a Java program to swap the first and last elements of an array and create a new array",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "count the number of even and odd elements in a given array": {
            description: "Write a Java program to count the number of even and odd elements in a given array",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "square root": {
            description: "Write a Java program to compute the square root of an given integer",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "palindrome or not": {
            description: "Write a Java program to check if a positive number is a palindrome or nots",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "add two numbers without using any arithmetic operators": {
            description: "Write a Java program to add two numbers without using any arithmetic operators",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Add all the digits of a given positive integer": {
            description: "Write a Java program to add all the digits of a given positive integer",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Area of circle": {
            description: "Java program to find area of circle",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Area of rectangle": {
            description: "Java Program to find area of rectangle",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "area of triangle": {
            description: "Java Program to find area of triangle",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Area of equilateral triangle": {
            description: "Java Program to find area of equilateral triangle",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Area of rhombus": {
            description: "Java Program to find area of rhombus",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Area of parallelogram": {
            description: "Java Program to find area of parallelogram",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Area of Prism": {
            description: "Java Program to find area of Prism",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Volume of sphere": {
            description: "Java Program to find volume of sphere",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Volume of cylinder": {
            description: "Java Program to find volume of cylinder",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Volume of cuboid": {
            description: "Java Program to find volume of cuboid",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Volume of cone": {
            description: "Java Program to find volume of cone",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Surface area of cuboids": {
            description: " Java program to find surface area of cuboids",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Surface area of cylinder": {
            description: "Java program to find surface area of cylinder",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Surface area of cube": {
            description: "Java program to find surface area of cubes",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Calculate average marks": {
            description: "Java program to calculate average marks",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Check vowel or consonant": {
            description: "Java program to check vowel or consonant",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Sum of N numbers": {
            description: "Java program to sum of N numbers",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Factorial of any number": {
            description: "Java program to find factorial of any number",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Calculate electricity bill": {
            description: "Java Program to calculate electricity bill",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Calculate CGPA Percentage": {
            description: "Java Program To Calculate CGPA Percentage",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Calculate compound interest": {
            description: "Java Program to calculate compound interestn",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Calculate Batting Average": {
            description: "Java Program To Calculate Batting Average",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Calculate Commission Percentage": {
            description: "Java Pogram to Calculate Commission Percentage",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Find Distance Between Two Points": {
            description: "Java Pogram To Find Distance Between Two Points",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "Write a Java program to print ‘Hello World!’ on screen": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        },
        "sum of two numbers": {
            description: "Write a Java program to print the sum of two numbers",
            code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
        }
    },
    "Medium": {
        "Reverse Array": {
            description: "Program to reverse an array.",
            code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
}
return arr;
}

// Example usage
let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]
            `
        },
        "Find Second Largest": {
            description: "Program to find the second largest element in an array.",
            code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}

return secondMax;
}

// Example usage
let array = [10, 20, 4, 45, 99];
console.log(findSecondLargest(array)); // Output: 45
            `
        }
    },
    "Hard": {
        "Merge Sort": {
            description: "Program to sort an array using Merge Sort.",
            code: `
function mergeSort(arr) {
if (arr.length <= 1) {
    return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
    } else {
        result.push(right[rightIndex]);
        rightIndex++;
    }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
            `
        },
        "Quick Sort": {
            description: "Program to sort an array using Quick Sort.",
            code: `
function quickSort(arr) {
if (arr.length <= 1) {
    return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let array = [10, 7, 8, 9, 1, 5];
console.log(quickSort(array)); // Output: [1, 5, 7, 8, 9, 10]
            `
        }
    }
},
"DATA CONVERSION": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
" DELEGATION EVENT MODEL": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"EXCEPTION HANDLING": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"FUNCTIONS": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"GRAPHICAL USER INTERFACE (AWT)": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"GRAPHICAL USER INTERFACE (SWINGS)": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"INHERITANCE": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"INPUT/OUTPUT": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"INTERFACES": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"JAVA DATABASE CONNECTIVITY": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
" MULTITHREADING": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"OBJECT ORIENTED PROGRAMMING": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
" PACKAGES": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"SINGLE DIMENSION ARRAYS": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
"STRINGS": {
  "Easy": {
      "Sum of Elements": {
          description: "Program to sum elements of an array.",
          code: `
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Maximum": {
          description: "Program to find the maximum element in an array.",
          code: `
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Medium": {
      "Reverse Array": {
          description: "Program to reverse an array.",
          code: `
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;
while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}
return arr;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
function findSecondLargest(arr) {
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
  }
}

return secondMax;
}

`,
                output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  },
  "Hard": {
      "Merge Sort": {
          description: "Program to sort an array using Merge Sort.",
          code: `
function mergeSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));

return merge(left, right);
}

function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
  } else {
      result.push(right[rightIndex]);
      rightIndex++;
  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

`,
output: `
         let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      },
      "Quick Sort": {
          description: "Program to sort an array using Quick Sort.",
          code: `
function quickSort(arr) {
if (arr.length <= 1) {
  return arr;
}

const pivot = arr[arr.length - 1];
const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
      left.push(arr[i]);
  } else {
      right.push(arr[i]);
  }
}

return [...quickSort(left), pivot, ...quickSort(right)];
}

`,
      output: `
                let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
    
                `
      }
  }
},
};
// Create "Mix" option by combining all difficulties
function createMixOption() {
  for (let type in programData) {
      let mixedPrograms = {};

      for (let difficulty in programData[type]) {
          Object.assign(mixedPrograms, programData[type][difficulty]);
      }

      programData[type]["Mix"] = mixedPrograms;
      //console.log(mixedPrograms[type]["Mix"].length);
  }
}

// Initialize the program data with "Mix" option
createMixOption();
let selectType = document.getElementById("selectType");
let selectDifficulty = document.getElementById("selectDifficulty");
let selectProgram = document.getElementById("selectProgram");
let resultTitle = document.getElementById("resultTitle");
let result = document.getElementById("result");
let code = document.getElementById("code");
let output = document.getElementById("output");

// Populate the first dropdown (Select Type)
for (let type in programData) {
    let option = document.createElement("option");
    option.value = type;
    option.text = type;
    selectType.appendChild(option);
}

// Event Listener for Type Selection
selectType.addEventListener("change", function() {
    selectDifficulty.innerHTML = `<option value="">Select Difficulty</option>`; // Reset second dropdown
    selectProgram.innerHTML = `<option value="">Select Program</option>`; // Reset third dropdown
    resultTitle.innerHTML = ""; // Clear result title
    result.innerHTML = ""; // Clear result
    code.innerHTML = ""; // Clear code
    output.innerHTML = ""; 

    if (selectType.value !== "") {
        selectDifficulty.disabled = false;

        for (let difficulty in programData[selectType.value]) {
            let option = document.createElement("option");
            option.value = difficulty;
            option.text = difficulty;
            selectDifficulty.appendChild(option);
        }
    } else {
        selectDifficulty.disabled = true;
        selectProgram.disabled = true;
    }
});

// Event Listener for Difficulty Selection
selectDifficulty.addEventListener("change", function() {
    selectProgram.innerHTML = `<option value="">Select Program</option>`; // Reset third dropdown
    resultTitle.innerHTML = ""; // Clear result title
    result.innerHTML = ""; // Clear result
    code.innerHTML = ""; // Clear code
    output.innerHTML = ""; 

    if (selectDifficulty.value !== "") {
        selectProgram.disabled = false;
        let programs = programData[selectType.value][selectDifficulty.value];

        for (let program in programs) {
            let option = document.createElement("option");
            option.value = program;
            option.text = program;
            selectProgram.appendChild(option);
        }
    } else {
        selectProgram.disabled = true;
    }
});

// Event Listener for Program Selection
selectProgram.addEventListener("change", function() {
    if (selectProgram.value !== "") {
        let selectedProgram = programData[selectType.value][selectDifficulty.value][selectProgram.value];
        resultTitle.innerHTML = `Selected Program: ${selectType.value} > ${selectDifficulty.value} > ${selectProgram.value}`;
        result.innerHTML = `<strong>Description:</strong> ${selectedProgram.description}`;
        code.innerHTML = selectedProgram.code.trim();
        output.innerHTML = selectedProgram.output.trim();
        console.log(selectProgram.length);
    } else {
        resultTitle.innerHTML = ""; // Clear result title
        result.innerHTML = ""; // Clear result
        code.innerHTML = ""; // Clear code
        output.innerHTML = ""; 
    }
});

  