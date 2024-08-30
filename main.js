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
        "1. Write a Java program to print ‘Hello World!’ on screen": {
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
    } else {
        resultTitle.innerHTML = ""; // Clear result title
        result.innerHTML = ""; // Clear result
        code.innerHTML = ""; // Clear code
    }
});

  