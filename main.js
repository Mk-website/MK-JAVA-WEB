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
            "Enter the Matrix of rows and columns entered by the user and print in matrix format": {
                description: "Program to Enter the Matrix of rows and columns entered by the user and print in matrix format",
                code: `
package matrix1;
class matrix1
        {
            public static void main(String st[])
            {
                java.io.BufferedReader input= new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
                int rows=0,cols=0,i=0,j=0;
                 int matrixA[][];
                try
                {
                System.out.println("Enter rows : ");
                rows = Integer.parseInt(input.readLine());
                System.out.println("Enter columns : ");
                cols = Integer.parseInt(input.readLine());
                matrixA=new int[rows][cols];
                for(i=0;i&lt;rows;i++)
                {
                    for(j=0;j&lt;cols;j++)
                    {
                        System.out.println("Enter value at ["+i+"]["+j+"] position : ");
                        matrixA[i][j]=Integer.parseInt(input.readLine());
                    }
                }
                for(i=0;i&lt;rows;i++)
                {
                    for(j=0;j&lt;cols;j++)
                    {
                        System.out.print(matrixA[i][j]+" ");
                    }
                    System.out.println(" ");
                }
                }
                catch(java.io.IOException e)
                {
                    System.out.println("input not found!");
                }
                catch(NumberFormatException e)
                {
                    System.out.println("Please Enter Integer!");
                }
                catch(NegativeArraySizeException e)
                {
                    System.out.println("Please Enter Positive Value!");
                }
            }
        }
`,
output: `
Enter rows :
2
Enter columns :
2
Enter value at [0][0] position :
1
Enter value at [0][1] position :
2
Enter value at [1][0] position :
3
Enter value at [1][1] position :
4
1 2
3 4
                `
            },
            "Add Two Matrices": {
                description: "Program to Add Two Matrices",
                code: `
package addmatrix;
class AddMatrix
    {
        public static void main(String st[])
        {
            int matrixA[][]={{1,2},{3,4}};
            int matrixB[][]={{5,6},{7,8}};
            int i=0,j=0;
            int addMatrix[][]=new int[matrixA.length][matrixA[0].length];
            System.out.println("Matrix A");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixA[i][j]+" ");
                }
                System.out.println("  ");
            }
             System.out.println("Matrix B");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixB[i][j]+" ");
                }
                System.out.println("  ");
            }
             System.out.println("Addition of Matrix A and Matrix B : ");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    addMatrix[i][j]=matrixA[i][j]+matrixB[i][j];
                }
            }
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(addMatrix[i][j]+" ");
                }
                System.out.println("  ");
            }
        }
    }
`,
                output: `
Matrix A
1 2
3 4
Matrix B
5 6
7 8
Addition of Matrix A and Matrix B :
6 8
10 12
                `
            },
"Multiply Two Matrices": {
                description: "Program to Multiply Two Matrices",
                code: `
package multiplymatrix;
class MultiplyMatrix 
    {
        public static void main(String st[])
        {
            int matrixA[][]={{1,2},{3,4}};
            int matrixB[][]={{5,6},{7,8}};
            int i=0,j=0,k=0;
            int multiplyMatrix[][]=new int[matrixA.length][matrixA[0].length];
             System.out.println("Matrix A");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixA[i][j]+" ");
                }
                System.out.println("  ");
            }
             System.out.println("Matrix B");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixB[i][j]+" ");
                }
                System.out.println("  ");
            }
             System.out.println("Multiplication of Matrix A and Matrix B : ");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    for(k=0;k&lt;matrixA[i].length;k++)
                    multiplyMatrix[i][j]+=matrixA[i][k]*matrixB[k][j];
                
                }
            }
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[0].length;j++)
                {
                    System.out.print(multiplyMatrix[i][j]+" ");
                }
                System.out.println("  ");
            }
        }
    }
`,
output: `
Matrix A
1 2
3 4
Matrix B
5 6
7 8
Multiplication of Matrix A and Matrix B :
19 22
43 50
                `
            },
            "Subtract the two matrices": {
                description: "Program to subtract the two matrices",
                code: `
package subtractmatrix;
class SubtractMatrix
    {
        public static void main(String st[])
        {
            int matrixA[][]={{1,2},{3,4}};
            int matrixB[][]={{5,6},{7,8}};
            int i=0,j=0;
            int subtractMatrix[][]=new int[matrixA.length][matrixA[0].length];
             System.out.println("Matrix A");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixA[i][j]+" ");
                }
                System.out.println("  ");
            }
             System.out.println("Matrix B");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixB[i][j]+" ");
                }
                System.out.println("  ");
            }
             System.out.println("Subtraction of Matrix A and Matrix B : ");
          
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    subtractMatrix[i][j]=matrixA[i][j]-matrixB[i][j];
                }
            }
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(subtractMatrix[i][j]+" ");
                }
                System.out.println("  ");
            }
        }
    }
`,
                output: `
Matrix A
1 2
3 4
Matrix B
5 6
7 8
Subtraction of Matrix A and Matrix B :
-4 -4
-4 -4
                `
            },
            "Determine whether two matrices are equal": {
                description: "Program to determine whether two matrices are equal",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "Display the lower triangular matrix": {
                description: "Program to display the lower triangular matrix",
                code: `
package lowertriangle;
class LowerTriangle
    {
        public static void main(String st[])
        {
            int matrixA[][]={{1,2,3},{4,5,6},{7,8,9}};
            int i,j;
            for(i=0;i&lt;matrixA.length;i++)
            {
               for(j=0;j&lt;=i;j++)
               {
                System.out.print(matrixA[i][j]+" ");
               }
                
                System.out.println();
            }
            
            
        }
    }
`,
                output: `
1
4 5
7 8 9
                `
            },
            "Display the upper triangular matrix": {
                description: "Program to display the upper triangular matrix",
                code: `
package uppertriangle;
class UpperTriangle
    {
        public static void main(String st[])
        {
            int matrixA[][]={{1,2,3},{4,5,6},{7,8,9}};
            int i,j;
            for(i=0;i&lt;matrixA.length;i++)
            {
               for(j=0;j&lt;i;j++)
               {
                System.out.print("  ");
               }
                for(j=i;j&lt;matrixA[i].length;j++)
               {
                System.out.print(matrixA[i][j]+" ");
               }
                System.out.println();
            }
            
            
        }
    }
`,
output: `
1 2 3
  5 6
    9
                `
            },
            "Find the frequency of odd & even numbers in the given matrix": {
                description: "Program to find the frequency of odd & even numbers in the given matrix",
                code: `
package frequencyoddeven;

class FrequencyOddEven
    {
        public static void main(String st[])
        {
            int arr[][]={{1,2,3},{4,5,6},{7,8,9}},i,j;
            int countEven=0,countOdd=0;
             System.out.println("Matrix");
            for(i=0;i&lt;arr.length;i++)
            {
                for(j=0;j&lt;arr[i].length;j++)
                {
                    System.out.print(arr[i][j]+" ");
                }
                System.out.println("  ");
            }
            for(i=0;i&lt;arr.length;i++)
            {
                for(j=0;j&lt;arr[0].length;j++)
                {
                    if(arr[i][j]%2==0)
                    {
                        countEven++;
                    }
                    else
                    {
                        countOdd++;
                    }
                }
            }
            System.out.println("Frequency of Even Number is : "+countEven);
            System.out.println("Frequency of Odd Number is : "+countOdd);
        }
    }
`,
                output: `
Matrix
1 2 3
4 5 6
7 8 9
Frequency of Even Number is : 4
Frequency of Odd Number is : 5
                `
            },
            "Find the sum of each row and each column of a matrix": {
                description: "Program to find the sum of each row and each column of a matrix",
                code: `
package sumrowcol;

class SumRowCol
    {
        public static void main(String st[])
        {
            int arr[][]={{1,2,3},
                         {4,5,6},
                         {7,8,9}};
            int sumRow,sumCol,i,j;
             System.out.println("Matrix");
            for(i=0;i&lt;arr.length;i++)
            {
                for(j=0;j&lt;arr[i].length;j++)
                {
                    System.out.print(arr[i][j]+" ");
                }
                System.out.println("  ");
            }
            for(i=0;i&lt;arr.length;i++)
            {
                sumRow=0;
                for(j=0;j&lt;arr[0].length;j++)
                {
                    sumRow+=arr[i][j];
                }
                 System.out.println("Sum of Row "+(i+1)+" "+sumRow);
            }
            for(j=0;j&lt;arr[0].length;j++) 
            {
                sumCol=0;
                for(i=0;i&lt;arr.length;i++)
                {
                    sumCol+=arr[i][j];
                }
                System.out.println("Sum of col "+(j+1)+" "+sumCol);
            }
           
        }
    }
`,
output: `
Matrix
1 2 3
4 5 6
7 8 9
Sum of Row 1 6
Sum of Row 2 15
Sum of Row 3 24
Sum of col 1 12
Sum of col 2 15
Sum of col 3 18
                `
            },
            "Find the transpose of a given matrix": {
                description: "Program to find the transpose of a given matrix",
                code: `
package transpose;
class transpose
    {
        public static void main(String st[])
        {
            int matrixA[][]={{1,2},{3,4}};
            int transpose[][]=new int[matrixA.length][matrixA[0].length];
            int i=0,j=0;
            System.out.println("Matrix A");
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    System.out.print(matrixA[i][j]+" ");
                }
                System.out.println("  ");
            }
            for(i=0;i&lt;matrixA.length;i++)
            {
                for(j=0;j&lt;matrixA[i].length;j++)
                {
                    transpose[j][i]=matrixA[i][j];
                }
            }
            System.out.println("Transpose of MatrixA : ");
             for(i=0;i&lt;transpose.length;i++)
            {
                for(j=0;j&lt;transpose[i].length;j++)
                {
                    System.out.print(transpose[i][j]+" ");
                }
                System.out.println("  ");
            }
        }
    }
`,
                output: `
Matrix A
1 2
3 4
Transpose of MatrixA :
1 3
2 4
                `
            },
            "Determine whether a given matrix is an identity matrix": {
                description: "Program to determine whether a given matrix is an identity matrix",
                code: `
               code//
`,
output: `
                output//
                `
            },
            "Transpose matrix": {
                description: "Program to Transpose matrix",
                code: `
                code//
`,
                output: `
                output//
                `
            },
            "Determine whether a given matrix is a sparse matrix": {
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
            "comming soon": {
                description: "comming soon",
                code: `
code//

`,
                output: `
                output//
    
                `
            },
            
        },
        "Hard": {
            "comming soon": {
                description: "comming soon",
                code: `
                code//
                `,
                output:
                `
                output//
                `
            },
            "comming soon": {
                description: "comming soon",
                code: `
            code//
                `,
                output:
                `
                output//
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
          "comming soon": {
              description: "comming soon",
              code: `
            code//
`,
                output: `
                output//
                `
          },
         
      },
      "Hard": {
          "comming soon": {
              description: "comming soon",
              code: `
            code//
`,
                output: `
                output//
    
                `
          },
          
      }
  },
  "BASIC PROGRAMMING CONSTRUCTS": {
    "Easy": {
        " Hello World!": {
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
        " Sum of two numbers": {
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
        " Product of two numbers": {
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
        " Arithmetic Operators": {
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
        " Average of the numbers": {
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
        " Swap two variables": {
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
        " convert a decimal number to binary numbers": {
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
	while(temp&gt;0)
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
        "8. Convert a binary number to decimal number": {
            description: "Write a Java program to convert a binary number to decimal number",
            code: `
package binaryToDecimal;
class  BinaryToDecimal
		{
		public static void main(String st[])
		{
		byte binary[] = {0,0,1,1};
		int decimal=0,power =0,i=0;
		for(i=binary.length-1;i>=0;i--)
		{
		 if(binary[i]==1)
		{
		decimal +=Math.pow(2,power);
		}
		power++;
		}
		System.out.println("Decimal number is :"+decimal);
		}
		}

`,
                output: `
                Decimal number is :3
                `
        },
        " is Java installed ?": {
            description: "Write a Java program to check whether Java is installed on your computer or not",
            code: `
            code//
`,
                output: `
               output//
                `
        },
        " Sum of the digits of an integer": {
            description: "Write a Java program and compute the sum of the digits of an integer",
            code: `
            package sumofdigit;
class SumOfDigit
		{
		public static void main(String st[])
		{
		int digit=5447,sum=0,rem;
		while(digit&gt;0)
		{
		rem=digit%10;
		sum+=rem;
		digit/=10;
		}
		System.out.println("Sum of digit "+sum);
		}
		}


`,
                output: `
                Sum of digit 20
                `
        },
        " Compare two numbers": {
            description: "Write a Java program to compare two numbers",
            code: `
package compare;
class Compare
	{
	public static void main(String st[])
	{
	int a=12,b=56;
	if(a==b)
	System.out.println("Number are equel");
	else
	System.out.println("Number are Not equel");
	}
	}


`,
                output: `
                Number are Not equel
                `
        },
        " Count the letters, spaces, numbers and other characters ": {
            description: "Write a Java program to count the letters, spaces, numbers and other characters of an input strings",
            code: `
package countstring;
class CountString
		{
		private int count_latter;
		private int count_space;
		private int count_number;
		private int count_character;

		void count(String str)
		{ int i;
		if(str=="")
		{
		System.out.println("Empty String");
		}
		else 
		{
		count_number++;
		for(i=0;i&lt;str.length();i++) 
		{
		 if(i==0 && str.charAt(i)!=' ')
			{
			count_latter++;
			} 
		else if(str.charAt(i)==' ')
			{
			count_space++;
			if(str.charAt(i+1)!=' ' && str.charAt(i+1)!=' ')
			{
			 count_latter++;
			}
			}
		else if(str.charAt(i)=='\n')
			{
			count_number++;
			if(str.charAt(i+1)!=' ' && str.charAt(i+1)!=' ')
			{
			 count_latter++;
			}
			}
		count_character++;
		}
		}
		}
		
		void display()
		{
		System.out.println("No. of latters :-"+count_latter+"\nNo of Character :- "+count_character+"\nNo of Space :-"+count_space+"\nNo of Line :-"+count_number);
		}
		
		public static void main(String st[])
		{
		CountString obj = new CountString();
		String sentance = "My name is Manjit";
		obj.count(sentance);
		obj.display();
		}
		}


`,
                output: `
No. of latters :-4
No of Character :- 17
No of Space :-3
No of Line :-1
                `
        },
        " Ascii value": {
            description: "Write a Java program to print the ascii value of a given character",
            code: `
package ascii;
class Ascii
	{
	public static void main(String st[])
	{
	char character = 'A';
        int asciiValue = character;
        System.out.println("ASCII value of " + character+" is " + asciiValue);
        }
        }


`,
                output: `
                ASCII value of A is 65
                `
        },
        " Computes the value of n+nn+nnn": {
            description: "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
            code: `
package computen;
class ComputeN
	{
	public static void main(String st[])
	{
	int n = 2;
	int N = n+(n*n)+(n*n*n);
	System.out.println("n = "+n+"Value of (n+(nn)+(nnn)) :- "+N);
	}
	}


`,
                output: `
              n = 2 Value of (n+(nn)+(nnn)) :- 14  
                `
        },
        " Display the system time": {
            description: "Write a Java program to display the system time",
            code: `
package systemtime;
class SystemTime
	{
	public static void main(String st[])
	{
	java.util.Date obj = new java.util.Date();
	System.out.println(obj);
	}
	}


`,
                output: `
Sun Sep 15 11:42:11 IST 2024
                `
        },
        " Odd numbers from 1 to 20": {
            description: "Write a Java program to print the odd numbers from 1 to 20",
            code: `
package odd;
class Odd
	{
	public static void main(String st[])
	{
	for(int i=1;i&lt;=20;i++)
	{
	if(i%2!=0)
	{
	System.out.println(i);
	}
	}
	}
	}



`,
                output: `
1
3
5
7
9
11
13
15
17
19
                `
        },
        " Even numbers from 1 to 20": {
            description: "Write a Java program to print the even numbers from 1 to 20",
            code: `
package even;
class Even
        {
        public static void main(String st[])
        {
        for(int i=1;i&lt;=20;i++)
        {
        if(i%2==0)
        {
        System.out.println(i);
        }
        }
        }
        }


`,
                output: `
2
4
6
8
10
12
14
16
18
20
                `
        },
        " Convert a string to an integer": {
            description: "Write a Java program to convert a string to an integer",
            code: `
package stringtoint;
class StringToInt
	{
	public static void main(String st[])
	{
	String num = "1234";
	int number=0,sign =1;
	for(int i=0;i&lt;num.length();i++)
	{
	char c = num.charAt(i);
	if(i==0 && c =='-')
	{
	 sign = -1;
	 
	}
	else if(c >='0' && c &lt;= '9')
	{
	number=number * 10 +(c-'0');
	
	}
	else 
	{
	System.out.println("Error");
	}
	}
		System.out.println("String to integer "+number*sign);
	}
	}
	

`,
                output: `
                String to integer 1234
                `
        },
        " Convert seconds to hour, minute and seconds": {
            description: "Write a Java program to convert seconds to hour, minute and seconds",
            code: `
package convertsecondtohhmmss;
class ConvertSecondToHhMmSs
		{
		public static void main(String st[])
		{
		int sec =3600,hh,mm,ss,temp;
		hh=sec/3600;
		temp=sec%3600;
		mm=temp/60;
		ss=temp%60;
		System.out.println("Seconds to hh:mm:ss "+hh+":"+mm+":"+ss);
		}
		}


`,
                output: `
               Seconds to hh:mm:ss 1:0:0
                `
        },
        " Sum of the first 100 prime number": {
            description: "Write a Java program to compute the sum of the first 100 prime numbers",
            code: `
package sumprimenum;
class SumPrimeNum
	{
	public static void main(String st[])
	{
	int num,sum=0,isPrime;
	for(num=2;num&lt;=100;num++)
	{
	isPrime=1;
	for(int i = 2; i&lt;=num/2;i++)
	{
	if(num%i==0)
	{
	isPrime =0;
	break;
	}
	}
	if(isPrime==1)
	{
		sum+=num;
	}
	}
	System.out.println("Sum of First 100 prime Number : "+sum);
	}
	}


`,
                output: `
                Sum of First 100 prime Number : 1060
                `
        },
        " Swap the first and last elements of an array": {
            description: "Write a Java program to swap the first and last elements of an array and create a new array",
            code: `
package swaparr;
class SwapArr
	{
	public static void main(String st[])
	{
	int arr[] = {1,2,3,4},i,f=arr[0],l=arr[arr.length-1];
	System.out.println("Before Swaping ");
	for(i=0;i&lt;arr.length;i++)
	{
	 System.out.print(" "+arr[i]);
	}
	System.out.println();
	for(i=0;i&lt;arr.length;i++)
	{
	if(i==0)
	{
	arr[i]=l;
	}
	else if(i==arr.length-1)
	{
	arr[i]=f;
	}
	else 
	{
	arr[i]=arr[i];
	}
	}
	
	System.out.println("After Swaping ");
	for(i=0;i&lt;arr.length;i++)
        {
         System.out.print(" "+arr[i]);
        }
	
	}
	}

`,
                output: `
Before Swaping
 1 2 3 4
After Swaping
 4 2 3 1
                `
        },
        " Count the number of even and odd elements in a given array": {
            description: "Write a Java program to count the number of even and odd elements in a given array",
            code: `
package countevenodd;
class CountEvenOdd
	{
	public static void main(String st[])
	{
	int arr[] = {1,2,3,4,5,6},i,even=0,odd=0;
	for(i=0;i&lt;arr.length-1;i++)
	{
	if(arr[i]%2==0)
	{
	even++;
	}
	else
	{
	odd++;
	}
	}
	for(i=0;i&lt;arr.length;i++)
        {
         System.out.print(" "+arr[i]);
        }
	System.out.println("\nNo of Even elements :"+even+"\nNo of Odd elements:"+odd);
	}
	}



`,
                output: `
1 2 3 4 5 6
No of Even elements :2
No of Odd elements:3
                `
        },
        "square root": {
            description: "Write a Java program to compute the square root of an given integer",
            code: `
package squreroot;
class Squreroot	
	{
	public static void main(String st[])
	{
	double num=36,squreroot;
	squreroot=Math.sqrt(num);
	System.out.println("Squreroot of "+num+ " is "+squreroot);
	}
	}

`,
                output: `
                Squreroot of 36 is 6
                `
        },
        "palindrome or not": {
            description: "Write a Java program to check if a positive number is a palindrome or nots",
            code: `
package palindromenum;

class PalindromeNum
        {
            public static void main(String st[])
            {
                int num = 121,digit,rev=0,temp =num;
                while(temp&gt;0)
                {
                    digit=temp%10;
                    rev=(digit*10)+rev;
                    temp/=10; 
                }
                if(rev == num)
                {
                    System.out.println("Number is Palindrome "+rev);
                }
                else
                {
                    System.out.println("Number is Palindrome "+num);
                }
            }
        }

`,
                output: `
                Number is Palindrome 121
                `
        },
        "add two numbers without using any arithmetic operators": {
            description: "Write a Java program to add two numbers without using any arithmetic operators",
            code: `
            code//
`,
                output: `
                output//
                `
        },
        "Add all the digits of a given positive integer": {
            description: "Write a Java program to add all the digits of a given positive integer",
            code: `
package addofdigit;
class AddOfDigit
		{
		public static void main(String st[])
		{
		int digit=5447,add=0,rem;
		while(digit&gt;0)
		{
		rem=digit%10;
		add+=rem;
		digit/=10;
		}
		System.out.println("Addition of digit "+sum);
		}
		}


`,
                output: `
                Sum of digit 20
                `
        },
        "Area of circle": {
            description: "Java program to find area of circle",
            code: `
package areaofcircle;
class AreaOfCircle
	{
	public static void main(String st[])
	{
	final float PI = 3.14f;
	float r = 7f,area;
	area = PI*r*r;
	System.out.println("Area of Circle is : "+area);
	}
	}


`,
                output: `
                Area of Circle is : 153.86002
                `
        },
        "Area of rectangle": {
            description: "Java Program to find area of rectangle",
            code: `
package areaofrectangle;
class AreaOfRectangle
		{
		public static void main(String st[])
		{
		float l=12f,b=5f,area;
		area = l*b;
		System.out.println("Area of Rectangle is :- "+area);
		}
		}


`,
                output: `
               Area of Rectangle is :- 60.0
                `
        },
        "area of triangle": {
            description: "Java Program to find area of triangle",
            code: `
package areaoftriangle;
class AreaOfTriangle
		{
		public static void main(String st[])
		{
		double a=6,b=4,c=8,s,area;
		s=(a+b+c)/2;
		area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
		System.out.println("Area of Triangle is :- "+area);
		}
		}

`,
                output: `
                output//
    
                `
        },
        "Area of equilateral triangle": {
            description: "Java Program to find area of equilateral triangle",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Area of rhombus": {
            description: "Java Program to find area of rhombus",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Area of parallelogram": {
            description: "Java Program to find area of parallelogram",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Area of Prism": {
            description: "Java Program to find area of Prism",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Volume of sphere": {
            description: "Java Program to find volume of sphere",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Volume of cylinder": {
            description: "Java Program to find volume of cylinder",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Volume of cuboid": {
            description: "Java Program to find volume of cuboid",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Volume of cone": {
            description: "Java Program to find volume of cone",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Surface area of cuboids": {
            description: " Java program to find surface area of cuboids",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Surface area of cylinder": {
            description: "Java program to find surface area of cylinder",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Surface area of cube": {
            description: "Java program to find surface area of cubes",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Calculate average marks": {
            description: "Java program to calculate average marks",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Check vowel or consonant": {
            description: "Java program to check vowel or consonant",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Sum of N numbers": {
            description: "Java program to sum of N numbers",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Factorial of any number": {
            description: "Java program to find factorial of any number",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Calculate electricity bill": {
            description: "Java Program to calculate electricity bill",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Calculate CGPA Percentage": {
            description: "Java Program To Calculate CGPA Percentage",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Calculate compound interest": {
            description: "Java Program to calculate compound interestn",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Calculate Batting Average": {
            description: "Java Program To Calculate Batting Average",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Calculate Commission Percentage": {
            description: "Java Pogram to Calculate Commission Percentage",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Find Distance Between Two Points": {
            description: "Java Pogram To Find Distance Between Two Points",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Power Of Number": {
            description: "Java Program To Calculate Power Of Number",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "take three numbers from the user and print the greatest number": {
            description: "Write a Java program to take three numbers from the user and print the greatest number",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "find the number of days in a month": {
            description: "Write a Java program to find the number of days in a month",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "test a number is positive or negative": {
            description: "Write a Java program to test a number is positive or negative",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "print name of the day": {
            description: " Write a Java Program to accept number of week’s day (1-7) and print name of the day",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "print whether that year is a leap year or not": {
            description: "Write a Java program that takes a year from user and print whether that year is a leap year or not",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "first 5 natural numbersn": {
            description: "Write a program in Java to display the first 5 natural numbers",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "check vowel or consonant": {
            description: "Write a java program to check vowel or consonant",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Cube of the number upto given an integer": {
            description: " Write a Java program to display the cube of the number upto given an integer",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "display the n terms of odd natural number and their sum": {
            description: "Write a Java program to display the n terms of odd natural number and their sum",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "display the multiplication table of a given integer": {
            description: "Write a Java program to display the multiplication table of a given integer",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "reads an integer and check whether it is negative, zero, or positive": {
            description: "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "reads an positive integer and count the number of digits": {
            description: "Write a Java program that reads an positive integer and count the number of digits",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "three numbers and check All numbers are equal or not": {
            description: "Write a Java program that accepts three numbers and check All numbers are equal or not",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "Accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "determines a student’s grade": {
            description: "Write a Java program that determines a student’s grades",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "create a simple calculator": {
            description: "Write a Java program to create a simple calculator",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "concatenate two string": {
            description: "Write a Java program to concatenate two string",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "convert all characters in a string to lowercase": {
            description: "Write a Java program to convert all characters in a string to lowercase",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "convert all characters in a string to uppercase": {
            description: "Write a Java program to convert all characters in a string to uppercase",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "trim a string(remove whitespaces)": {
            description: "Write a Java program to trim a string(remove whitespaces)",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "get a substring of a given string between two specified positions": {
            description: "Write a Java program to get a substring of a given string between two specified positions",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "replace all the ‘d’ characters with ‘f’ characters": {
            description: "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "get the length of a given string": {
            description: "Write a Java program to get the length of a given string",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "print current date and time in the specified format": {
            description: "Write a Java program to print current date and time in the specified format",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "get the character at the given index within the String": {
            description: "Write a Java program to get the character at the given index within the String",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "remove a particular character from a string": {
            description: "Write a Java program to remove a particular character from a string",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "reverse a String": {
            description: "Write a Java program to reverse a String",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "remove html tags from a string": {
            description: "Write a Java program to remove html tags from a string",
            code: `
code//

`,
                output: `
                output//
    
                `
        },
        "count total number of lines from a string": {
            description: "Write a Java program to count total number of lines from a string",
            code: `
code//

`,
                output: `
                output//
    
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
        "comming soon": {
            description: "comming soon",
            code: `
            code//
            `,
        output:
        `
        output//
        `
        },
    },
    "Hard": {
        "comming soon": {
            description: "comming soon",
            code: `
            code//
            `,
            output: `
            output//
            `
        }
    }
},
"DATA CONVERSION": {
  "Easy": {
      "comming soon": {
          description: "comming soon",
          code: `
        code//
`,
                output: `
                output//
                `
      },

  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
        code//

`,
                output: `
                output//
                `
      },

  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
        code//
`,
                output: `
                output//
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
" DELEGATION EVENT MODEL": {
  "Easy": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"EXCEPTION HANDLING": {
  "Easy": {
      "Java program that throws an exception and catch it using a try-catch block.": {
          description: "Java program that throws an exception and catch it using a try-catch block.",
          code: `
        code//

`,
                output: `
               output//
                `
      },
      "create a method that takes an integer as a parameter and throws an exception if the number is odd.": {
        description: "Program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
        code: `
      code//

`,
              output: `
             output//
              `
    },
    "create a method that reads a file and throws an exception if the file is not found": {
        description: "Program to create a method that reads a file and throws an exception if the file is not found",
        code: `
package exception3;
class Exception3 
    {
        void readFile(String file) throws java.io.FileNotFoundException
            {
                java.io.File fileName = new java.io.File(file);
                if(!fileName.exists())
                {
                    throw new java.io.FileNotFoundException();
                }
            }
        public static void  main(String st[])
        {
            Exception3 file=new Exception3();
            try
            {
                file.readFile("text.txt");
            }
            catch(java.io.FileNotFoundException e)
            {
                System.out.println("File Not Found!");
            }
        }
    }


`,
              output: `
File Found : text.txt
              `
    },
    "reads a list of numbers from a file and throws an exception if any of the numbers are positive": {
        description: "Program to reads a list of numbers from a file and throws an exception if any of the numbers are positive",
        code: `
      package exception4;
class NumberIsPositive extends Throwable
        {
            public String getMessage()
            {
                return "File contain positive number";
            }
        }
class Exception4
        {
            public static void main(String st[])
            {
                try
                {
                java.io.File file = new java.io.File("text.txt");
                java.util.Scanner input = new java.util.Scanner(file);
                int num;
                while(input.hasNextLine())
                {
                    while(input.hasNextInt())
                    {
                        num=input.nextInt();
                        if(num &gt; 0)
                        {
                            System.out.println(num);
                            throw new NumberIsPositive();
                        }
                    
                    }
                if(!input.hasNextInt())
                    {
                        System.out.println(input.next()+" is not integer");
                    }
                }
                }
                 catch(java.io.FileNotFoundException e)
                {
                    System.out.println(e.getMessage());
                }
                catch (java.util.InputMismatchException e)
                {
                    System.out.println("File not contain Integer!");
                }
                catch (NumberIsPositive e)
                {
                    System.out.println(e.getMessage());
                }
            }   
        }

`,
              output: `
File contain positive number
              `
    },
    "Reads a file and throws an exception if the file is empty.": {
        description: "Program that reads a file and throws an exception if the file is empty.",
        code: `
     package exception5;
class FileIsEmpty extends Throwable
        {
            public String getMessage()
            {
                return "File is Empty!";
            }
        }
class Exception5
        {
            public static void main(String st[])
            {
                try
                {
                java.io.File file = new java.io.File("text.txt");
                java.util.Scanner input = new java.util.Scanner(file);
                if(!input.hasNextLine())
                {
                    throw new FileIsEmpty();
                }
                else
                {
                    System.out.println("File is not Empty");
                }
                }
                catch (FileIsEmpty e)
                {
                    System.out.println(e.getMessage()); 
                }
                catch(java.io.FileNotFoundException e)
                {
                    System.out.println(e.getMessage());
                }
            }   
        }

`,
              output: `
File is not Empty
              `
    },
    "reads a list of integers from the user and throws an exception if any numbers are duplicates": {
        description: "Program to reads a list of integers from the user and throws an exception if any numbers are duplicates",
        code: `
      package exception6;
class NumberAreDuplicate extends Throwable
        {
            public String getMessage()
            {
                return "Number are Duplicate";
            }
        }
    class Exception6
            {
                public static void main(String st[])
                {
                     int arr[]=new int[5];
                    int i,j;
                    boolean isDuplicate = true;
                    try
                    {
                    java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
                    arr[0]=Integer.parseInt(input.readLine());
                    for(i=1;i&lt;arr.length;i++)
                    {
                        for(j=i-1;j&lt;i;j++)
                        {

                        arr[i]=Integer.parseInt(input.readLine());
                        if(arr[i]==arr[j])
                        {
                            throw new NumberAreDuplicate();
                        }
                        else
                        {
                            isDuplicate=false;
                        }
                        }
                        
                    }
                    if(!isDuplicate)
                    {
                        System.out.println("Number are not Duplicate");
                    }
                    }
                    catch(java.io.IOException e)
                    {
                        System.out.println(e.getMessage());
                    }
                    catch(NumberFormatException e)
                    {
                        System.out.println(e.getMessage());
                    }
                    catch(NumberAreDuplicate e)
                    {
                        System.out.println(e.getMessage());
                    }
                }
            }

`,
              output: `
1
2
3
3
Number are Duplicate
              `
    },
    "create a method that takes a string as input and throws an exception if the string does not contain vowels.": {
        description: "Program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
        code: `
package exception7;
class NotContainVowels extends Throwable
    {
        public String getMessage()
        {
            return "string does not contain vowels.";
        }
    }
class Exception7
    {
        static void getString(String str) throws NotContainVowels
        {
            int i;
            char ch;
            boolean isVowel=false;
            for(i=0;i&lt;str.length();i++)
            {
                ch = str.charAt(i);
                if(ch == 'a' || ch == 'o' || ch == 'e' || ch =='i' || ch == 'u' || ch == 'A' || ch == 'O' || ch == 'E' || ch =='I' || ch == 'U')
                {
                    isVowel=true;
                    break;
                }
                else
                {
                    isVowel=false;
                    
                }
            }
            if(!isVowel)
            {
                throw new NotContainVowels();
            }
            else
            {
                System.out.println("String contain vowel");
            }
        }
        public static void main(String st[])
        {
            try
            {
            java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
            String str = input.readLine();
            getString(str);
            }
            catch(java.io.IOException e)
            {
                System.out.println(e.getMessage());
            }
            catch(NotContainVowels e)
            {
                System.out.println(e.getMessage());
            }
        }
    }

` ,
              output: `
Manjit
String contain vowel
              `
    },
    "connect the Java API to Database, if connection not successful then throw an exception": {
        description: "Program to connect the Java API to Database, if connection not successful then throw an exception",
        code: `
      package exception8;
class NotConnected extends Throwable 
        {
            public String getMessage()
            {
                return "Connection not Successful!";
            }
        }
class Exception8
    {
        public static void main(String st[])
        {
            java.sql.Connection con =null;
            try
            {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/DB","root","java");
            System.out.println(con);
            if(con==null)
            {
                throw new NotConnected();
            }
            else
            {
                System.out.println("Database Connected Successfully");
            }
            }
            catch(ClassNotFoundException e)
            {
                System.out.println(e.getMessage());
            }
            catch(java.sql.SQLException e)
            {
                System.out.println(e.getMessage());
            }
            catch(NotConnected e)
            {
                System.out.println(e.getMessage());
            }
        }
    }

`,
              output: `
   Database Connected Successfully
              `
    },
    "manage the driver with path, username and password, if not successful then throw an exception": {
        description: "Program to manage the driver with path, username and password, if not successful then throw an exception",
        code: `
      code//

`,
              output: `
             output//
              `
    },
    "throw the SQL Query, insert, delete, update, if not successful then throw an exception": {
        description: "Program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
        code: `
      code//

`,
              output: `
             output//
              `
    },
    "show an example of throws Keyword.": {
        description: "Program to show an example of throws Keyword.",
        code: `
      package exception11;
class Exception11
        {
            public static void main(String st[]) throws java.io.IOException
            {
                java.io.InputStreamReader input = new java.io.InputStreamReader(System.in);
                System.out.println("The main function throw io exception to JVM using thorws Keyword!");
                System.out.println(input.read());
            }
        }

`,
              output: `
             The main function throw io exception to JVM using thorws Keyword!
             97
              `
    },
    "show an example of multiple catch": {
        description: "Program to show an example of multiple catch",
        code: `
package exception12;
class Exception12
    {
        public static void main(String st[])
        {
            try
            {
                System.out.println(Integer.parseInt(st[0]));
            }
            catch(ArrayIndexOutOfBoundsException e)
            {
                System.out.println("Please Enter at least one Argument!");
            }
            catch(NumberFormatException e)
            {
                System.out.println("Please Enter an Integer value!");
            }
        }
    }

`,
              output: `
C:\&gt;java exception12.Exception12
Please Enter at least one Argument!
              `
    },
    "show an example of nested try block.": {
        description: "Program to show an example of nested try block.",
        code: `
package exception13;

class Exception13 
    {
        public static void main(String st[])
        {
            try
            {
                System.out.println(st[0]); 
                try
                {
                    System.out.println(Integer.parseInt(st[0]));
                }
                catch(NumberFormatException e)
                {
                    System.out.println("Please Enter an Integer value!");
                }
            }
            catch(ArrayIndexOutOfBoundsException e)
            {
                System.out.println("Please Enter at least one Argument!");
            }
        }
    }

`,
              output: `
C:\&gt;java exception13.Exception13 a
Please Enter an Integer value!
              `
    },
      
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },

  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
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
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"GRAPHICAL USER INTERFACE (AWT)": {
  "Easy": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"GRAPHICAL USER INTERFACE (SWINGS)": {
  "Easy": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
    
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"INHERITANCE": {
  "Easy": {
      "Create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.": {
          description: "JAVA Program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
          code: `
package animal;
class  Animal
	{
	void makeSound()
	{
	System.out.println("Animal make Sounds");
	}
	}
class Cat extends Animal
	{
	void makeSound()
	{
	System.out.println("Meow Meow");
	}
	}
class  Main
	{
	public static void main(String st[])
	{
	Animal animal=new Animal();
	animal.makeSound();
	Animal cat=new Cat();
	cat.makeSound();
	}
	}


`,
                output: `
Animal make Sounds
Meow Meow
                `
      },
      "Create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print Repairing a car.": {
          description: "JAVA Program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print Repairing a car.",
          code: `
package vehicle;

class Vehicle
	{
	void drive()
	{
	System.out.println("Drive Vehicle");
	}
	}
	class Car extends Vehicle
	{
	void drive()
	{
	System.out.println("Repairing Car");
	}
	}
	class Main
	{
	public static void main(String st[])
	{
	Vehicle vehicle=new Vehicle();
	vehicle.drive();
	Vehicle car = new Car();
	car.drive();
	}
	}


`,
                output: `
Drive Vehicle
Repairing Car
                `
      },
      "Create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.": {
          description: "JAVA Program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
          code: `
package shape;

class Shape
	{
	double getArea()
	{
	System.out.println("Calculate Area");
	return 0;
	}
	}
	class Rectangle extends Shape
	{
	private double length;
	private double width;
	Rectangle(double l,double w)
	{
	length=l;
	width=w;
	}
	double getArea()
	{
	return length*width;
	}
	}
	class  Main
	{
	public static void main(String st[])
	{
	Shape rectangle=new Rectangle(4.0,5.0);
	double area = rectangle.getArea();
	System.out.println("Area of Rectangle is : " + area);
	}
	}


`,
                output: `
Area of Rectangle is : 20.0
                `
      },
      "Create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().": {
          description: "JAVA Program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
          code: `
package employee;

class Employee
	{
	private double salary;
	public Employee(double salary)
	{
	this.salary=salary;
	}
	void work()
	{
	System.out.println("Employee is working");
	}
	double getSalary()
	{
	return salary;
	}
	}
class HRManager extends Employee
	{
	public HRManager(double salary)
	{
	super(salary);
	}
	void work()
	{
	System.out.println("HRManager is managing employee");
	}
	void addEmployee()
	{
	System.out.println("HR Manager adding Employee");
	}
	}
class Main
	{
	public static void main(String st[])
	{
	Employee emp=new Employee(5000);
	emp.work();
	System.out.println("Salary : "+emp.getSalary());
	HRManager hrm=new HRManager(10000);
	hrm.work();
	System.out.println("Salary : "+hrm.getSalary());
	hrm.addEmployee();
	}
	}


`,
                output: `
Employee is working
Salary : 5000.0
HRManager is managing employee
Salary : 10000.0
HR Manager adding Employee
                `
      },
      "Create a class known as BankAccount with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.": {
          description: "JAVA Program to create a class known as 'BankAccount' with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
          code: `
package bankaccount;

class BankAccount {
    private double balance;

    public BankAccount(double bal) {
        balance = bal;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    public void withdraw(double amount) {
        balance -= amount;
        System.out.println("Withdrawn: " + amount);
    }

    public double getBalance() {
        return balance;
    }
}


class SavingsAccount extends BankAccount {
    public SavingsAccount(double balance) {
        super(balance);
    }

    
    public void withdraw(double amount) {
        if (getBalance() - amount &lt ;100) {
            System.out.println("Withdrawal not allowed. Balance will fall below $100.");
        } else {
            super.withdraw(amount);
        }
    }
}

 class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        account.deposit(500);
        account.withdraw(200);
        System.out.println("Balance: " + account.getBalance());

        SavingsAccount savingsAccount = new SavingsAccount(1000);
        savingsAccount.deposit(500);
        savingsAccount.withdraw(200);
        savingsAccount.withdraw(1300); 
        System.out.println("Balance: " + savingsAccount.getBalance());
    }
}


`,
                output: `
Deposited: 500.0
Withdrawn: 200.0
Balance: 1300.0
Deposited: 500.0
Withdrawn: 200.0
Withdrawal not allowed. Balance will fall below $100.
Balance: 1300.0
                `
      },
      "Create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.": {
          description: "JAVA Program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
          code: `
package animal2;

class Animal
	{
	void move()
	{
	System.out.println("Move");
	}
	}
class Cheetah extends Animal
	{
	void move()
	{
	System.out.println("Cheetah Run");
	}
	}
class Main
	{
	public static void main(String st[])
	{
	Animal a=new Animal();
	a.move();
	Cheetah c = new Cheetah();
	c.move();
	}
	}


`,
                output: `
Move
Cheetah Run
                `
      },
      "Create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title": {
          description: "JAVA Program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",
          code: `
package person;

class Person
    {
        private String firstName;
        private String lastName;
        private int employeeId;
         String jobTitle;
        Person(String fn,String ln)
        {
            firstName=fn;
            lastName=ln;
            
        }
        String getFirstName()
            {
                return firstName;
            }
            String getLastName()
            {
                return lastName;
            }
       
    }
    class Employee extends Person 
            {
                private int employeeId;
                private String jobTitle;
                Employee(String fn,String ln, int empId,String jt)
                {
                    super(fn,ln);
                    employeeId=empId;
                    jobTitle=jt;
                }
                int getEmployeeId()
                {
                    return employeeId;
                }
                String getLastName()
                {
                    System.out.println(super.getLastName());
                    return jobTitle;
                }
         
            }
    class Main
        {
            public static void main(String st[])
                {
                    Employee p1 = new Employee("Manjit","Kumar",1,"Manager");
                    System.out.println("Name : "+p1.getFirstName());
                    System.out.println("Job Title : "+p1.getLastName());
                    System.out.println("Employee Id : "+p1.getEmployeeId());

                }
        }

`,
                output: `
Name : Manjit
Last Name : Kumar
Job Title : Manager
Employee Id : 1
                `
      },
      "Create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.": {
          description: "JAVA Program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.": {
          description: "JAVA Program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.": {
          description: "JAVA Program to creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Showing an example of super keyword": {
          description: "JAVA Program to showing an example of super keyword",
          code: `
package superkeyword;
class Base
    {
        int x;
        void x()
        {
            x=5;
             System.out.println(x);
        }
       
    }
class Child extends Base
        {
            void display()
            {
            int x=10;
            super.x =20;
            System.out.println("Value of Child x : "+x);
            System.out.println("Value of Base x : "+super.x);
            }
            
        }
class Main
        {
            public static void main(String st[])
            {
                Child obj = new Child();
                obj.display();
                obj.x();
            }
        }

`,
                output: `
Value of Child x : 10
Value of Base x : 20
5
                `
      },
      "Showing an example of super function": {
          description: "JAVA Program to showing an example of super function",
          code: `
        package superfunction;

class A
    {
        private int num1;
        private int num2;
        A(int x,int y)
        {
            num1=x;
            num2=y;
            System.out.println(x+" + "+y+" = "+(num1+num2));
        }
    }
class B extends A
        {
            B()
            {
                super(4,5);
            }
            
        }
class Main
        {
            public static void main(String st[])
                {
                    B obj = new B();
                }
        }

`,
                output: `
            4 + 5 = 9
                `
      },
      "Showing an example of method overriding": {
          description: "JAVA Program to showing an example of method overriding",
          code: `
        package methodoverriding;

class A
        {
            String  display()
            {
                return "This is Class A";
            }
        }
class B extends A
        {
            String display()
            {
                return "This is Class B";
            }
        }
class Main
    {
        B obj=new B();
        System.out.println(obj.display());
    }

`,
                output: `
            This is Class B
                `
      },
      "Showing an example of dynamic method dispatch": {
          description: "JAVA Program to showing an example of dynamic method dispatch",
          code: `
package dynamicmethoddispatch;

class A {
    String display() {
        return "This is Class A";
    }
}

class B extends A {
    String display() {
        return "This is Class B";
    }
}

class C extends A {
    String display() {
        return "This is Class C";
    }
}

class Main {
    public static void main(String st[]) {
        A obj;  // reference of type A

        obj = new A();
        System.out.println(obj.display());  

        obj = new B();
        System.out.println(obj.display()); 

        obj = new C();
        System.out.println(obj.display()); 
    }
}


`,
                output: `
This is Class A
This is Class B
This is Class C
                `
      },
      "Create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.": {
          description: "JAVA Program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.": {
          description: "JAVA Program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.": {
          description: "JAVA Program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.": {
          description: "JAVA Program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstracWrite a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.": {
          description: "JAVA Program to create an abstracWrite a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape": {
          description: "JAVA Program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.": {
          description: "JAVA Program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.": {
          description: "JAVA Program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.": {
          description: "JAVA Program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.": {
          description: "JAVA Program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.": {
          description: "JAVA Program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
          code: `
        code//

`,
                output: `
            output//
                `
      },
      "Create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape": {
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
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"INPUT/OUTPUT": {
  "Easy": {
     "Enter the character from user using InputStreamReader": {
        description: "Program to Enter the character from user using InputStreamReader",
        code: `
      package input1;
class Input1
	{
	public static void main(String st[])  
		{
		char ch = ' ';
		java.io.InputStreamReader isr = new java.io.InputStreamReader(System.in);
			try 
			{
			System.out.println("Enter any character");
			 ch = (char)isr.read();
			System.out.println(ch);
			}
			catch( java.io.IOException ex)
				{
				System.out.println(ex.getMessage());
				}
			catch(Throwable th)
			{
				System.out.println(th.getMessage());

			}
		}
	}
`,
              output: `
Enter any character
a
You enter : a
              `
    },
    "Enter the string from user using BufferedStreamReader": {
        description: "Program to Enter the string from user using BufferedStreamReader",
        code: `
package input2;
class Input2
	{
	public static void main(String st[])  		{
		java.io.InputStreamReader isr = new java.io.InputStreamReader(System.in);
		java.io.BufferedReader  input = new java.io.BufferedReader(isr);
			//int x = isr.read();
			//System.out.println(x);

			try
			{
			System.out.println("Enter Somrthing");
			String inp=input.readLine();
			System.out.println("You enter : "+inp);
			}
		catch(java.io.IOException e)
			{
			System.out.println(e.getMessage());
			}

			catch(Throwable th)
			{
				System.out.println(th.getMessage());

			}

		}
	}

`,
              output: `
Enter Somrthing
manjit
manjit
              `
    },
    "Enter the integer from user using Scanner class": {
        description: "Program to Enter the integer from user using Scanner class",
        code: `
package input3;
class Input3
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		try{
        System.out.println("Enter Any Number : ");
		int x =sc.nextInt();
		System.out.println("You enter : "+x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter Integer value");
			}
		}
}

`,
              output: `
Enter Any Number : 
12
You enter : 12
              `
    },
    "Enter the float from user using Scanner class": {
        description: "Program to Enter the float from user using Scanner class",
        code: `
package input4;
class Input4
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		try{
        System.out.println("Enter Any Number : ");
		float x =sc.nextFloat();
		System.out.println("You enter : "+x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter float value");
			}
		}
}

`,
              output: `
Enter Any Number : 
12.86
You enter : 12.86
              `
    },
    "Enter the double from user using Scanner class": {
        description: "Program to Enter the double from user using Scanner class",
        code: `
package input5;
class Input5
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		try{
        System.out.println("Enter Any Number : ");
		double x =sc.nextDouble();
		System.out.println("You enter : "+x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter floating point value");
			}
		}
}

`,
              output: `
Enter Any Number : 
12.8754
You enter : 12.8754
              `
    },
    "Enter the boolean from user using Scanner class": {
        description: "Program to Enter the boolean from user using Scanner class",
        code: `
package input6;
class Input6
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		boolean x;
		try{
        System.out.println("Enter false/true : ");
		x =sc.nextBoolean();
		System.out.println("you enter : "+x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter true/false value");
			}
		}
}

`,
              output: `
Enter false/true : 
true
You enter : true
              `
    },
    /*"Enter the boolean from user using Scanner class": {
        description: "Program to Enter the boolean from user using Scanner class",
        code: `
      code//

`,
              output: `
             output//
              `
    },*/
    "Enter the long integer from user using Scanner class": {
        description: "Program to Enter the long integer from user using Scanner class",
        code: `
      code//

`,
              output: `
             output//
              `
    },
    "Get all characters from the file and display on the screen": {
        description: "Program to Get all characters from the file and display on the screen",
        code: `
      code//

`,
              output: `
             output//
              `
    },
    "Get all characters from the file, count number of lines, words, characters and display on the screen": {
        description: "Program to Get all characters from the file, count number of lines, words, characters and display on the screen",
        code: `
      code//

`,
              output: `
             output//
              `
    }

  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"INTERFACES": {
  "Easy": {
    "create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.": {
        description: "Program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
        code: `
package shape;

interface Shape 
    {
         double getArea();
    }
class Rectangle implements Shape
    {
        private double length;
        private double width;
        Rectangle(double l,double w)
        {
            length=l;
            width=w;
        }
       public double getArea()
        {
            return length*width;
        }
    }
class Circle implements Shape
    {
        final double PI = 3.14;
        private double radius;
        Circle(double r)
        {
            radius=r;
        }
       public double getArea()
        {
            return PI*radius*radius;
        }
    }
class Triangle implements Shape
    {
        private double base;
        private double heigth;
        Triangle(double b,double h)
        {
            base = b;
            heigth =h;
        }
       public double getArea()
        {
            return (1.0/2.0*(base*heigth));
        }
    }
class Main
    {
        public static void main(String st[])
        {
        Shape obj;
        obj = new Rectangle(3.0,4.0);
        System.out.println("Area of Rectangle is : "+obj.getArea());
        obj = new Circle(7.0);
        System.out.println("Area of Circle is : "+obj.getArea());
        obj = new Triangle(7.0,8.0);
        System.out.println("Area of Triangle is : "+obj.getArea());
        }
    }

`,
output: `
Area of Rectangle is : 12.0
Area of Circle is : 153.86
Area of Triangle is : 28.0
          `
    },
    "create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\".": {
        description: "Program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\"..",
        code: `
package animal;

interface Animal
    {
        void bark();
    }
class Dog implements Animal
    {
        public void bark()
        {
            System.out.println("Dog is barking ");
        }
    }
class Main
    {
        public static void main(String st[])
            {
                Animal obj = new Dog();
                obj.bark();
            }
    }

`,
output: `
          Dog is barking
          `
    },
    "create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.": {
        description: "Program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.": {
        description: "Program to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.": {
        description: "Program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.": {
        description: "Program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.": {
        description: "Program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.": {
        description: "Program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.": {
        description: "Program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    " create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.": {
        description: "Program to  create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.": {
        description: "Program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method..",
        code: `
          code//

`,
output: `
          output//
          `
    },
   

  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Find Second Largest": {
          description: "Program to find the second largest element in an array.",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"JAVA DATABASE CONNECTIVITY": {
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
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
" MULTITHREADING": {
  "Easy": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
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
      "create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle": {
          description: "Program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.": {
          description: "Program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.": {
          description: "Program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.": {
          description: "Program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.": {
          description: "Program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.": {
          description: "Program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.": {
          description: "Program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.": {
          description: "Program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Library\" with a collection of books and methods to add and remove books.": {
          description: "Program to create a class called \"Library\" with a collection of books and methods to add and remove books.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.": {
          description: "Program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.": {
          description: "Program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.": {
          description: "Program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.": {
          description: "Program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".": {
          description: "Program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.": {
          description: "Program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.": {
          description: "Program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class with methods to search for flights and hotels, and to book and cancel reservations.": {
          description: "Program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a class showing an example of default constructor.": {
          description: "Program to Create a class showing an example of default constructor.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a class showing an example of parameterized constructor.": {
          description: "Program to Create a class showing an example of parameterized constructor.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a class showing an example of copy constructor.": {
          description: "Program to Create a class showing an example of copy constructor.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students": {
          description: "Program to Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",
          code: `
        code//
`,
                output: `
   output//
                `
      },
"Create a class showing the area of circle and rectangle by method overloading.": {
          description: "Program to Create a class showing the area of circle and rectangle by method overloading.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a class, entering the command line arguments from the user and show all the arguments as output..": {
          description: "Program to Create a class, entering the command line arguments from the user and show all the arguments as output..",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.": {
          description: "Program to Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.": {
          description: "Program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.": {
          description: "Program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.": {
          description: "Program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.": {
          description: "Program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.": {
          description: "Program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.": {
          description: "Program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
     
    },
                
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
" PACKAGES": {
  "Easy": {
      " Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.": {
          description: "Program to create a class called Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.",
          code: `
package currentdate;
import java.util.Date;

class CurrentDate extends Date {
    public static void main(String[] args) {
        // Create a CurrentDate object
        CurrentDate currentDate = new CurrentDate();

        // Print the current date
        System.out.println("Current Date: " + currentDate);
    }
}

`,
                output: `
Current Date: Thu Sep 19 20:25:38 IST 2024
                `
      },
      "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.": {
          description: "Program to Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.",
          code: `
package currentdate2;
class CurrentDate  {
    public static void main(String[] args) {
        // Create a CurrentDate object
        java.util.Date currentDate = new java.util.Date();

        // Print the current date
        System.out.println("Current Date: " + currentDate);
    }
}

`,
                output: `
Current Date: Thu Sep 19 20:26:52 IST 2024
                `
      },
      "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.": {
          description: "Program to Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",
          code: `
 package currentdate2;
 import java.util.Date;
class CurrentDate extends Date {
    public static void main(String[] args) {
        // Create a CurrentDate object
        CurrentDate currentDate = new CurrentDate();

        // Print the current date
        System.out.println("Current Date: " + currentDate);
    }
}

`,
                output: `
Current Date: Thu Sep 19 20:26:52 IST 2024
                `
      },
      "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.": {
          description: "Program to Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.",
          code: `
package currentdate3;

class CurrentDate extends java.util.Date {
    public static void main(String[] args) {
        // Create a CurrentDate object
        CurrentDate currentDate = new CurrentDate();

        // Print the current date
        System.out.println("Current Date: " + currentDate);
    }
}
`,
                output: `
Current Date: Thu Sep 19 20:26:52 IST 2024
                `
      },
      "Create a Java program to create a package with multiple default classes.": {
          description: "Program to Create a Java program to create a package with multiple default classes.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      " Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.": {
          description: "Program to  Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.": {
          description: "Program to Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a Java program to create a package with public class and protected members to be accessed in another class.": {
          description: "Program to Create a Java program to create a package with public class and protected members to be accessed in another class.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.": {
          description: "Program to Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Create a Java program to create a package with public class and public members to be accessed in another class.": {
          description: "Program to Create a Java program to create a package with public class and public members to be accessed in another class.",
          code: `
        code//
`,
                output: `
   output//
                `
      },
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"SINGLE DIMENSION ARRAYS": {
  "Easy": {
      "Copy all elements of one array into another array": {
          description: "Program to copy all elements of one array into another array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Find the frequency of each element in the array": {
          description: "Program to find the frequency of each element in the array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Left rotate the elements of an array": {
          description: "Program to left rotate the elements of an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the duplicate elements of an array": {
          description: "Program to print the duplicate elements of an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the elements of an array": {
          description: "Program to print the elements of an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the elements of an array in reverse order": {
          description: "Program to print the elements of an array in reverse order",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the elements of an array present on even position": {
          description: "Program to  print the elements of an array present on even position",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the elements of an array present on odd position": {
          description: "Program to print the elements of an array present on odd position",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the largest element in an array": {
          description: "Program to print the largest element in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the smallest element in an array": {
          description: "Program to print the smallest element in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the number of elements present in an array": {
          description: "Program to print the number of elements present in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print the sum of all the items of the array": {
          description: "Program to print the sum of all the items of the array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Right rotate the elements of an array": {
          description: "Program to right rotate the elements of an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Sort the elements of an array in ascending order": {
          description: "Program to sort the elements of an array in ascending order",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Sort the elements of an array in descending order": {
          description: "Program to sort the elements of an array in descending order",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Find 3rd Largest Number in an array": {
          description: "Program to Find 3rd Largest Number in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Find 2nd Largest Number in an array": {
          description: "Program to Find 2nd Largest Number in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Find Largest Number in an array": {
          description: "Program to Find Largest Number in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Find 2nd Smallest Number in an array": {
          description: "Program to Find 2nd Smallest Number in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Find Smallest Number in an array": {
          description: "Program to Find Smallest Number in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Remove Duplicate Element in an array": {
          description: "Program to Remove Duplicate Element in an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "Print Odd and Even Numbers from an array": {
          description: "Program to Print Odd and Even Numbers from an array",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      "How to Sort an Array in Java": {
          description: "Program to How to Sort an Array in Java",
          code: `
        code//
`,
                output: `
   output//
                `
      },
      
      
  },
  "Medium": {
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },

  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
                output: `
                output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      }
  }
},
"STRINGS": {
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
    " append the string using StringBuffer class": {
        description: "Program to  append the string using StringBuffer class.",
        code: `
public class StringBufferAppendExample {
    public static void main(String[] args) {
        // Create a StringBuffer object
        StringBuffer sb = new StringBuffer("Hello");

        // Append a string to the existing StringBuffer
        sb.append(" World");

        // Print the result
        System.out.println("Appended String: " + sb.toString());
    }
}


`,
output: `
Appended String: Hello World
          `
    },
    "insert the string using StringBuffer class": {
        description: "Program to insert the string using StringBuffer class.",
        code: `
  public class StringBufferInsertExample {
    public static void main(String[] args) {
        // Create a StringBuffer object
        StringBuffer sb = new StringBuffer("Hello World");

        // Insert a string at a specified index
        sb.insert(6, "Java ");

        // Print the result
        System.out.println("String after insertion: " + sb.toString());
    }
}


`,
output: `
 String after insertion: Hello Java World

          `
    },
    "add characters to a string.": {
        description: "Program to add characters to a string.",
        code: `
            public class AddCharacters {
                public static void main(String[] args) {
                    String str = "Hello";
                    str += "!";
                    System.out.println(str);
                }
            }
        `,
        output: `
Hello!
        `
    }
    ,
    "check if two strings are anagrams.": {
        description: "Program to check if two strings are anagrams.",
        code: `
            public class AnagramCheck {
                public static void main(String[] args) {
                    String str1 = "listen";
                    String str2 = "silent";
                    boolean isAnagram = true;
    
                    if (str1.length() != str2.length()) {
                        isAnagram = false;
                    } else {
                        char[] arr1 = str1.toCharArray();
                        char[] arr2 = str2.toCharArray();
    
                        for (int i = 0; i < arr1.length; i++) {
                            int count1 = 0, count2 = 0;
                            for (int j = 0; j < arr1.length; j++) {
                                if (arr1[i] == arr1[j]) count1++;
                                if (arr1[i] == arr2[j]) count2++;
                            }
                            if (count1 != count2) {
                                isAnagram = false;
                                break;
                            }
                        }
                    }
                    System.out.println(isAnagram ? "Anagram" : "Not Anagram");
                }
            }
        `,
        output: `
Anagram
        `
    }
    ,
   "check if a string is a palindrome": {
    description: "Program to check if a string is a palindrome ",
    code: `
        public class PalindromeCheck {
            public static void main(String[] args) {
                String str = "madam";
                boolean isPalindrome = true;
                
                int length = str.length();
                for (int i = 0; i < length / 2; i++) {
                    if (str.charAt(i) != str.charAt(length - 1 - i)) {
                        isPalindrome = false;
                        break;
                    }
                }

                System.out.println(isPalindrome ? "Palindrome" : "Not a Palindrome");
            }
        }
    `,
    output: `
Palindrome
    `
}
,
    "convert an enum to string.": {
        description: "Program to convert an enum to string.",
        code: `
            public class EnumToString {
                enum Day { SUNDAY, MONDAY, TUESDAY }
    
                public static void main(String[] args) {
                    Day day = Day.MONDAY;
                    String dayString = day.name();
                    System.out.println(dayString);
                }
            }
        `,
        output: `
MONDAY
        `
    }
    ,
    "convert String to String Array.": {
        description: "Program to convert String to String Array.",
        code: `
            public class StringToArray {
                public static void main(String[] args) {
                    String str = "Hello World";
                    char[] charArray = new char[str.length()];
    
                    for (int i = 0; i < str.length(); i++) {
                        charArray[i] = str.charAt(i);
                    }
    
                    for (char c : charArray) {
                        System.out.print(c + " ");
                    }
                }
            }
        `,
        output: `
H e l l o   W o r l d
        `
    }
    ,
    "count the number of words in a string.": {
        description: "Program to count the number of words in a string.",
        code: `
            public class CountWords {
                public static void main(String[] args) {
                    String str = "Hello World Program";
                    int wordCount = 1; // At least one word exists
    
                    for (int i = 0; i < str.length(); i++) {
                        if (str.charAt(i) == ' ') {
                            wordCount++;
                        }
                    }
    
                    System.out.println("Number of words: " + wordCount);
                }
            }
        `,
        output: `
Number of words: 3
        `
    }
    ,
   "count the total number of characters in a string.": {
    description: "Program to count the total number of characters in a string.",
    code: `
        public class CountCharacters {
            public static void main(String[] args) {
                String str = "Hello World";
                int count = 0;

                for (int i = 0; i < str.length(); i++) {
                    if (str.charAt(i) != ' ') {
                        count++;
                    }
                }

                System.out.println("Total characters: " + count);
            }
        }
    `,
    output: `
Total characters: 10
    `
}
,
    "count the total number of vowels and consonants in a string.": {
        description: "Program to count the total number of vowels and consonants in a string.",
        code: `
            public class VowelConsonantCount {
                public static void main(String[] args) {
                    String str = "Hello World";
                    int vowelCount = 0;
                    int consonantCount = 0;
                    str = str.toLowerCase();
    
                    for (int i = 0; i < str.length(); i++) {
                        char ch = str.charAt(i);
                        if (ch >= 'a' && ch <= 'z') {
                            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                                vowelCount++;
                            } else {
                                consonantCount++;
                            }
                        }
                    }
    
                    System.out.println("Vowels: " + vowelCount);
                    System.out.println("Consonants: " + consonantCount);
                }
            }
        `,
        output: `
Vowels: 3
Consonants: 7
        `
    }
    ,
    "determine whether one string is a rotation of another.": {
        description: "Program to determine whether one string is a rotation of another.",
        code: `
            public class StringRotation {
                public static void main(String[] args) {
                    String str1 = "abcde";
                    String str2 = "cdeab";
                    
                    if (str1.length() != str2.length()) {
                        System.out.println("Not a rotation");
                        return;
                    }
    
                    String combined = str1 + str1;
                    boolean isRotation = true;
    
                    for (int i = 0; i <= combined.length() - str2.length(); i++) {
                        boolean match = true;
                        for (int j = 0; j < str2.length(); j++) {
                            if (combined.charAt(i + j) != str2.charAt(j)) {
                                match = false;
                                break;
                            }
                        }
                        if (match) {
                            isRotation = true;
                            break;
                        }
                    }
    
                    System.out.println(isRotation ? "Rotation" : "Not a rotation");
                }
            }
        `,
        output: `
Rotation
        `
    }
    ,
    "divide a string into 'N' equal parts without using any built-in functions.": {
        description: "Program to divide a string into 'N' equal parts without using any built-in functions.",
        code: `
            public class DivideString {
                public static void main(String[] args) {
                    String str = "abcdefghij";
                    int n = 5;
    
                    if (str.length() % n != 0) {
                        System.out.println("Cannot divide string into equal parts.");
                    } else {
                        int partSize = str.length() / n;
                        for (int i = 0; i < str.length(); i++) {
                            System.out.print(str.charAt(i));
                            if ((i + 1) % partSize == 0) {
                                System.out.println();
                            }
                        }
                    }
                }
            }
        `,
        output: `
ab
cd
ef
gh
ij
        `
    }
    ,
   "find all subsets of a string.": {
    description: "Program to find all subsets of a string.",
    code: `
        public class SubsetsOfString {
            public static void main(String[] args) {
                String str = "abc";
                int n = str.length();
                System.out.println("Subsets are:");
                
                for (int i = 0; i < (1 << n); i++) {
                    String subset = "";
                    for (int j = 0; j < n; j++) {
                        if ((i & (1 << j)) != 0) {
                            subset += str.charAt(j);
                        }
                    }
                    System.out.println(subset);
                }
            }
        }
    `,
    output: `
Subsets are:

a
b
ab
c
ac
bc
abc
    `
}
,
    "find all the permutations of a string.": {
        description: "Program to find all the permutations of a string.",
        code: `
            public class PermutationsOfString {
                public static void main(String[] args) {
                    String str = "abc";
                    generatePermutations(str, "");
                }
    
                public static void generatePermutations(String str, String prefix) {
                    if (str.length() == 0) {
                        System.out.println(prefix);
                    } else {
                        for (int i = 0; i < str.length(); i++) {
                            char ch = str.charAt(i);
                            String remaining = "";
                            for (int j = 0; j < str.length(); j++) {
                                if (i != j) {
                                    remaining += str.charAt(j);
                                }
                            }
                            generatePermutations(remaining, prefix + ch);
                        }
                    }
                }
            }
        `,
        output: `
abc
acb
bac
bca
cab
cba
        `
    }
    ,
    "find maximum and minimum occurring character in a string.": {
        description: "Program to find maximum and minimum occurring character in a string.",
        code: `
            public class MaxMinChar {
                public static void main(String[] args) {
                    String str = "programming";
                    int[] charCount = new int[256];
    
                    for (int i = 0; i < str.length(); i++) {
                        charCount[str.charAt(i)]++;
                    }
    
                    char maxChar = ' ';
                    char minChar = ' ';
                    int maxCount = 0;
                    int minCount = Integer.MAX_VALUE;
    
                    for (int i = 0; i < charCount.length; i++) {
                        if (charCount[i] > 0) {
                            if (charCount[i] > maxCount) {
                                maxCount = charCount[i];
                                maxChar = (char) i;
                            }
                            if (charCount[i] < minCount) {
                                minCount = charCount[i];
                                minChar = (char) i;
                            }
                        }
                    }
    
                    System.out.println("Maximum occurring character: " + maxChar + " (" + maxCount + ")");
                    System.out.println("Minimum occurring character: " + minChar + " (" + minCount + ")");
                }
            }
        `,
        output: `
            Maximum occurring character: g (2)
            Minimum occurring character: a (1)
        `
    }
    ,
    "find the reverse of the string.": {
        description: "Program to find the reverse of the string.",
        code: `
            public class ReverseString {
                public static void main(String[] args) {
                    String str = "hello";
                    String reversed = "";
    
                    for (int i = str.length() - 1; i >= 0; i--) {
                        reversed += str.charAt(i);
                    }
    
                    System.out.println("Reversed string: " + reversed);
                }
            }
        `,
        output: `
            Reversed string: olleh
        `
    }
    ,
   "find the duplicate characters in a string.": {
    description: "Program to find the duplicate characters in a string.",
    code: `
        public class DuplicateCharacters {
            public static void main(String[] args) {
                String str = "programming";
                boolean[] visited = new boolean[256];

                System.out.println("Duplicate characters are:");
                for (int i = 0; i < str.length(); i++) {
                    char currentChar = str.charAt(i);
                    if (visited[currentChar]) {
                        System.out.println(currentChar);
                    } else {
                        visited[currentChar] = true;
                    }
                }
            }
        }
    `,
    output: `
        Duplicate characters are:
        r
        g
    `
}
,
    "find the duplicate words in a string.": {
        description: "Program to find the duplicate words in a string.",
        code: `
            public class DuplicateWords {
                public static void main(String[] args) {
                    String str = "this is a test this test is a demo demo demo";
                    String[] words = new String[256];
                    boolean[] visited = new boolean[256];
                    int wordCount = 0;
    
                    String currentWord = "";
                    for (int i = 0; i < str.length(); i++) {
                        char ch = str.charAt(i);
                        if (ch == ' ' || i == str.length() - 1) {
                            if (i == str.length() - 1 && ch != ' ') {
                                currentWord += ch;
                            }
                            boolean isDuplicate = false;
                            for (int j = 0; j < wordCount; j++) {
                                if (words[j].equals(currentWord)) {
                                    isDuplicate = true;
                                    break;
                                }
                            }
                            if (!isDuplicate) {
                                words[wordCount++] = currentWord;
                            }
                            currentWord = "";
                        } else {
                            currentWord += ch;
                        }
                    }
    
                    System.out.println("Duplicate words are:");
                    for (int i = 0; i < wordCount; i++) {
                        if (!visited[i]) {
                            String word = words[i];
                            int count = 0;
                            for (int j = 0; j < wordCount; j++) {
                                if (words[j].equals(word)) {
                                    count++;
                                }
                            }
                            if (count > 1) {
                                System.out.println(word);
                                visited[i] = true;
                            }
                        }
                    }
                }
            }
        `,
        output: `
            Duplicate words are:
            this
            test
            is
            demo
        `
    }
    ,
    "find the frequency of characters": {
        description: "Program to find the frequency of characters.",
        code: `
public class CharacterFrequency {
    public static void main(String[] args) {
        // Input string
        String str = "programming";

        // Array to track character frequencies
        int[] freq = new int[256]; // ASCII characters range from 0 to 255

        // Loop through the string to count frequencies
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            freq[ch]++;
        }

        // Print the frequencies of characters
        System.out.println("Character frequencies are:");
        for (int i = 0; i < freq.length; i++) {
            if (freq[i] > 0) {
                System.out.println((char) i + ": " + freq[i]);
            }
        }
    }
}


`,
output: `
Character frequencies are:
p: 2
r: 2
o: 1
g: 2
a: 1
m: 2
i: 1
n: 1

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
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
     
  },
  "Hard": {
      "comming soon": {
          description: "comming soon",
          code: `
code//
`,
output: `
         output//
    
                `
      },
      "comming soon": {
          description: "comming soon",
          code: `
code//

`,
      output: `
                output//
    
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
        let counter = 1; // Initialize a counter for numbering

        for (let program in programs) {
            let option = document.createElement("option");
            option.value = program;
            option.text = `${counter}. ${program}`; // Add numbering to the program text
            selectProgram.appendChild(option);
            counter++; // Increment counter
        }
    } else {
        selectProgram.disabled = true;
    }
});

// Event Listener for Program Selection
selectProgram.addEventListener("change", function() {
    if (selectProgram.value !== "") {
        let i=0;
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

  