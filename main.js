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
            "1.Enter the Matrix of rows and columns entered by the user and print in matrix format": {
                description: "Program to Enter the Matrix of rows and columns entered by the user and print in matrix format",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "2.Add Two Matrices": {
                description: "Program to Add Two Matrices",
                code: `
                code//
`,
                output: `
                output//
                `
            },
"3.Multiply Two Matrices": {
                description: "Program to Multiply Two Matrices",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "4.subtract the two matrices": {
                description: "Program to subtract the two matrices",
                code: `
                code//
`,
                output: `
                output//
                `
            },
            "5.determine whether two matrices are equal": {
                description: "Program to determine whether two matrices are equal",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "6.display the lower triangular matrix": {
                description: "Program to display the lower triangular matrix",
                code: `
                code//
`,
                output: `
                output//
                `
            },
            "7.display the upper triangular matrix": {
                description: "Program to display the upper triangular matrix",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "8.find the frequency of odd & even numbers in the given matrix": {
                description: "Program to find the frequency of odd & even numbers in the given matrix",
                code: `
                code//
`,
                output: `
                output//
                `
            },
            "9.find the sum of each row and each column of a matrix": {
                description: "Program to find the sum of each row and each column of a matrix",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "10.find the transpose of a given matrix": {
                description: "Program to find the transpose of a given matrix",
                code: `
                code//
`,
                output: `
                output//
                `
            },
            "11.determine whether a given matrix is an identity matrix": {
                description: "Program to determine whether a given matrix is an identity matrix",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "12.Transpose matrix": {
                description: "Program to Transpose matrix",
                code: `
                code//
`,
                output: `
                output//
                `
            },
            "13.determine whether a given matrix is a sparse matrix": {
                description: "Program to determine whether a given matrix is a sparse matrix",
                code: `
               code//
`,
output: `
                output//
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
          "comming soon": {
              description: "Program to comming soon.",
              code: `
                code//

`,
 output: `
                output//
                `
          },
          "comming soon": {
              description: "Program to comming soon.",
              code: `
                code//

`,
 output: `
                output//
                `
          },
         "comming soon": {
              description: "Program to comming soon.",
              code: `
                code//

`,
 output: `
                output//
                `
          },
          "comming soon": {
              description: "Program to comming soon.",
              code: `
                code//

`,
 output: `
                output//
                `
          },
          "comming soon": {
              description: "Program to comming soon.",
              code: `
                code//

`,
 output: `
                output//
                `
          },
          "comming soon": {
              description: "Program to comming soon.",
              code: `
                code//

`,
 output: `
                output//
                `
          },
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
        "Power Of Number": {
            description: "Java Program To Calculate Power Of Number",
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
        "take three numbers from the user and print the greatest number": {
            description: "Write a Java program to take three numbers from the user and print the greatest number",
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
        "find the number of days in a month": {
            description: "Write a Java program to find the number of days in a month",
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
        "test a number is positive or negative": {
            description: "Write a Java program to test a number is positive or negative",
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
        "print name of the day": {
            description: " Write a Java Program to accept number of week’s day (1-7) and print name of the day",
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
        "print whether that year is a leap year or not": {
            description: "Write a Java program that takes a year from user and print whether that year is a leap year or not",
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
        "first 5 natural numbersn": {
            description: "Write a program in Java to display the first 5 natural numbers",
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
        "check vowel or consonant": {
            description: "Write a java program to check vowel or consonant",
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
        "Cube of the number upto given an integer": {
            description: " Write a Java program to display the cube of the number upto given an integer",
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
        "display the n terms of odd natural number and their sum": {
            description: "Write a Java program to display the n terms of odd natural number and their sum",
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
        "display the multiplication table of a given integer": {
            description: "Write a Java program to display the multiplication table of a given integer",
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
        "reads an integer and check whether it is negative, zero, or positive": {
            description: "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
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
        "reads an positive integer and count the number of digits": {
            description: "Write a Java program that reads an positive integer and count the number of digits",
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
        "three numbers and check All numbers are equal or not": {
            description: "Write a Java program that accepts three numbers and check All numbers are equal or not",
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
        "Accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.": {
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
        "determines a student’s grade": {
            description: "Write a Java program that determines a student’s grades",
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
        "create a simple calculator": {
            description: "Write a Java program to create a simple calculator",
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
        "concatenate two string": {
            description: "Write a Java program to concatenate two string",
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
        "convert all characters in a string to lowercase": {
            description: "Write a Java program to convert all characters in a string to lowercase",
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
        "convert all characters in a string to uppercase": {
            description: "Write a Java program to convert all characters in a string to uppercase",
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
        "trim a string(remove whitespaces)": {
            description: "Write a Java program to trim a string(remove whitespaces)",
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
        "get a substring of a given string between two specified positions": {
            description: "Write a Java program to get a substring of a given string between two specified positions",
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
        "replace all the ‘d’ characters with ‘f’ characters": {
            description: "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
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
        "get the length of a given string": {
            description: "Write a Java program to get the length of a given string",
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
        "print current date and time in the specified format": {
            description: "Write a Java program to print current date and time in the specified format",
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
        "get the character at the given index within the String": {
            description: "Write a Java program to get the character at the given index within the String",
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
        "remove a particular character from a string": {
            description: "Write a Java program to remove a particular character from a string",
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
        "reverse a String": {
            description: "Write a Java program to reverse a String",
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
        "remove html tags from a string": {
            description: "Write a Java program to remove html tags from a string",
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
        "count total number of lines from a string": {
            description: "Write a Java program to count total number of lines from a string",
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
        "sum values of an array!!":
        {
            description:"Write a Java program to sum values of an array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find the index of an array element!!":
        {
            description:"Write a Java program to find the index of an array element",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "calculate the average value of array elements!!":
        {
            description:"Write a Java program to calculate the average value of array elements",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "test if an array contains a specific value!!":
        {
            description:"Write a Java program to test if an array contains a specific value",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find the maximum and minimum value of an array!!":
        {
            description:"Write a Java program to find the maximum and minimum value of an array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "insert an element (specific position) into an array!!":
        {
            description:"Write a Java program to insert an element (specific position) into an array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "reverse an array of integer values!!":
        {
            description:"Write a Java program to reverse an array of integer values",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find the common elements between two arrays!!":
        {
            description:"Write a Java program to find the common elements between two arrays",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find the duplicate values of an array of integer values!!":
        {
            description:"Write a Java program to find the duplicate values of an array of integer values",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "convert an array to ArrayList!!":
        {
            description:"Write a Java program to convert an array to ArrayList",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "add two matrices of the same size!!":
        {
            description:"Write a Java program to add two matrices of the same size",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find second largest number from the array!!":
        {
            description:"Write a Java program to find second largest number from the array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find second lowest number from the array!!":
        {
            description:"Write a Java program to find second lowest number from the array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find the number of even and odd integers in a given array of integers!!":
        {
            description:"Write a Java program to find the number of even and odd integers in a given array of integers",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "get the difference between the largest and smallest values in an array of integers!!":
        {
            description:"Write a Java program to get the difference between the largest and smallest values in an array of integers",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "get the difsegregate all 0s on left side and all 1s on right side of a given array of 0s and 1sference between the largest and smallest values in an array of integers!!":
        {
            description:"Write a Java program to get the difsegregate all 0s on left side and all 1s on right side of a given array of 0s and 1sference between the largest and smallest values in an array of integers",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "cyclically rotate a given array clockwise by one!!":
        {
            description:"Write a Java program to cyclically rotate a given array clockwise by one",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "print all unique element in an array!!":
        {
            description:"Write a Java program to print all unique element in an array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Sort the Array in an Ascending Order!!":
        {
            description:"Write a Java program to Sort the Array in an Ascending Order",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Sort the Array in an Descending Order!!":
        {
            description:"Write a Java program to Sort the Array in an Descending Order",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Sort Names in an Alphabetical Order!!":
        {
            description:"Write a Java program to Sort Names in an Alphabetical Order",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Display Transpose Matrix!!":
        {
            description:"Write a Java program to Display Transpose Matrix",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Search Key Elements in an Array!!":
        {
            description:"Write a Java program to Search Key Elements in an Array",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Accept the Marks of a Student and find Total Marks and Percentage!!":
        {
            description:"Write a Java program to Accept the Marks of a Student and find Total Marks and Percentage",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "print numbers from 1 to 10 using loop!!":
        {
            description:"Write a Java program to print numbers from 1 to 10 using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "calculate the sum of first 10 natural number using loop!!":
        {
            description:"Write a Java program to calculate the sum of first 10 natural number using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "print multiplication table of given number!!":
        {
            description:"Write a Java program to print multiplication table of given number",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "find the factorial value of any number entered through the keyboard!!":
        {
            description:"Write a Java program to find the factorial value of any number entered through the keyboard",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "that prompts the user to input an integer and then outputs the number with the digits reversed order!!":
        {
            description:"Write a Java program to that prompts the user to input an integer and then outputs the number with the digits reversed order",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "that reads a set of integers, and then prints the sum of the even and odd integers using loop!!":
        {
            description:"Write a Java program to that reads a set of integers, and then prints the sum of the even and odd integers using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "to check whether the number is a prime number or not!!":
        {
            description:"Write a Java program to to check whether the number is a prime number or not",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "to calculate HCF of Two given numbers using loop!!":
        {
            description:"Write a Java program to to calculate HCF of Two given numbers using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros!!":
        {
            description:"Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered!!":
        {
            description:"Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "print out all Armstrong numbers between 1 to 600 using loop!!":
        {
            description:"Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "count total number of notes in entered amount using loop!!":
        {
            description:"Write a Java program to count total number of notes in entered amount using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "print Fibonacci series of n terms where n is input by user using loop!!":
        {
            description:"Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "calculate the sum of following series where n is input by user!!":
        {
            description:"Write a Java program to calculate the sum of following series where n is input by user",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to compute the average of three numbers!!":
        {
            description:"Write a Java method to compute the average of three numbers",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to find the smallest number among three numbers!!":
        {
            description:"Write a Java method to find the smallest number among three numbers",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to count all words in a string!!":
        {
            description:"Write a Java method to count all words in a string",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to count all vowels in a string!!":
        {
            description:"Write a Java method to count all vowels in a string",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to count all vowels in a string!!":
        {
            description:"Write a Java method to count all vowels in a string",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to check whether an year entered by the user is a leap year or not!!":
        {
            description:"Write a Java method to check whether an year entered by the user is a leap year or not",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to calculate the area of a triangle!!":
        {
            description:"Write a Java method to calculate the area of a triangle",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to find the area of a pentagon!!":
        {
            description:"Write a Java method to find the area of a pentagon",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to find number is even number or not!!":
        {
            description:"Write a Java method to find number is even number or not",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to check numbers is palindrome number or not!!":
        {
            description:"Write a Java method to check numbers is palindrome number or not",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to displays prime numbers between 1 to 20!!":
        {
            description:"Write a Java method to displays prime numbers between 1 to 20",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to find GCD and LCM of Two Numbers!!":
        {
            description:"Write a Java program to Java method to find GCD and LCM of Two Numbers",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "Java method to find factorial using recursion in java!!":
        {
            description:"Write a Java program to Java method to find factorial using recursion in java",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "reverse an integer number!!":
        {
            description:"Write a Java program to reverse an integer number",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "round a float number to specified decimals!!":
        {
            description:"Write a Java program to round a float number to specified decimals",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "test if a double number is an integer!!":
        {
            description:"Write a Java program to test if a double number is an integer",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "round up the result of integer division!!":
        {
            description:"Write a Java program to round up the result of integer division",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "convert Roman number to an integer number!!":
        {
            description:"Write a Java program to convert Roman number to an integer number",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "convert a float value to absolute value!!":
        {
            description:"Write a Java program to convert a float value to absolute value",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
        "accept a float value of number and return a rounded float value":
        {
            description:"Write a Java program to accept a float value of number and return a rounded float value",
            code : 
            `
            code//
            `,
            output:
            `
            Output//
            `
        },
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
      "to find the smallest number among three numbers.": {
          description: "Write a Java method to to find the smallest number among three numbers.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "compute the average of three numbers.": {
          description: "Write a Java method to compute the average of three numbers.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.": {
          description: "Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "count all the words in a string.": {
          description: "Write a Java method to count all the words in a string.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "compute the future investment value at a given interest rate for a specified number of years.": {
          description: "Write a Java method to compute the future investment value at a given interest rate for a specified number of years..",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "print characters between two characters (i.e. A to P)": {
          description: "Write a Java method to print characters between two characters (i.e. A to P).",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "check whether a string is a valid password": {
          description: "Write a Java method to check whether a string is a valid password.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "display the current date and time": {
          description: "Write a Java method to display the current date and time.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "find all twin prime numbers less than 100": {
          description: "Write a Java method to find all twin prime numbers less than 100.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative": {
          description: "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "accepts three integers and checks whether they are consecutive or not. Returns true or false": {
          description: "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false": {
          description: "Write a Java method to that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      "that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false": {
          description: "Write a Java method to that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false.",
          code: `
            code//
            `
    ,
                output: `
              output//
                `
      },
      
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
      "1.create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.": {
          description: "JAVA Program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "2.create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print Repairing a car.": {
          description: "JAVA Program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print Repairing a car.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "3.create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.": {
          description: "JAVA Program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "4.create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().": {
          description: "JAVA Program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "5.create a class known as BankAccount with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.": {
          description: "JAVA Program to create a class known as 'BankAccount' with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "6.create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.": {
          description: "JAVA Program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "7.create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title": {
          description: "JAVA Program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "8.create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.": {
          description: "JAVA Program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "9.create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.": {
          description: "JAVA Program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "10.creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.": {
          description: "JAVA Program to creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "11.showing an example of super keyword": {
          description: "JAVA Program to showing an example of super keyword",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "12.showing an example of super function": {
          description: "JAVA Program to showing an example of super function",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "13.showing an example of method overriding": {
          description: "JAVA Program to showing an example of method overriding",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "14.showing an example of dynamic method dispatch": {
          description: "JAVA Program to showing an example of dynamic method dispatch",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "15.create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.": {
          description: "JAVA Program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "16.create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.": {
          description: "JAVA Program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "17.create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.": {
          description: "JAVA Program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "18.create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.": {
          description: "JAVA Program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "19.create an abstracWrite a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.t class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape": {
          description: "JAVA Program to create an abstracWrite a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.t class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "20.create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape": {
          description: "JAVA Program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "21.create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.": {
          description: "JAVA Program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "22.create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.": {
          description: "JAVA Program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "23.create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.": {
          description: "JAVA Program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "24.create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.": {
          description: "JAVA Program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "25.create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.": {
          description: "JAVA Program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "26.create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape": {
          description: "JAVA Program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
          code: `
        code//

`,
                output: `
            output//
                `
      },
                 
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
    "comming soon": {
        description: "Program to comming soon.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "comming soon": {
        description: "Program to comming soon.",
        code: `
          code//

`,
output: `
          output//
          `
    },

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
      "1.create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.": {
          description: "Program to create a class called Person with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "2.create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.": {
          description: "Program to create a class called Dog with a name and breed attribute. Create two instances of the Dog class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
"comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "comming soon": {
          description: "Program to comming soon",
          code: `
        code//
`,
                output: `
   output//
                `
      },
     

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

  