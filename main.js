console.log("hello");

  function close()
  {
    alert("comming soon");
  }
  
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
            "Transpose matrix": {
                description: "Program to Transpose matrix",
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
           
            
        },
            
        "Medium": {
            "Determine whether a given matrix is an identity matrix": {
                description: "Program to determine whether a given matrix is an identity matrix",
                code: `
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;

public class IdentityMatrix {
    
    public static boolean isIdentityMatrix(int[][] matrix, int size) {
        for (int i = 0; i &lt; size; i++) {
            for (int j = 0; j &lt; size; j++) {
                if (i == j && matrix[i][j] != 1) {
                    return false;  // Diagonal element is not 1
                }
                if (i != j && matrix[i][j] != 0) {
                    return false;  // Non-diagonal element is not 0
                }
            }
        }
        return true;
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter the size of the matrix: ");
        int size = Integer.parseInt(reader.readLine());
        int[][] matrix = new int[size][size];
        
        System.out.println("Enter the elements of the matrix:");
        for (int i = 0; i &lt; size; i++) {
            for (int j = 0; j &lt; size; j++) {
                matrix[i][j] = Integer.parseInt(reader.readLine());
            }
        }
        
        if (isIdentityMatrix(matrix, size)) {
            System.out.println("The matrix is an identity matrix.");
        } else {
            System.out.println("The matrix is not an identity matrix.");
        }
    }
}

`,
output: `
Enter the size of the matrix: 3
Enter the elements of the matrix:
1
0
0
0
1
0
0
0
1
The matrix is an identity matrix.

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
        },
        "Hard": {
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
            "Determine whether a given matrix is a sparse matrix": {
                description: "Program to determine whether a given matrix is a sparse matrix",
                code: `
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;

public class SparseMatrix {

    public static boolean isSparseMatrix(int[][] matrix, int rows, int cols) {
        int zeroCount = 0;
        int totalElements = rows * cols;

        // Counting the number of zeroes in the matrix
        for (int i = 0; i &lt; rows; i++) {
            for (int j = 0; j &lt; cols; j++) {
                if (matrix[i][j] == 0) {
                    zeroCount++;
                }
            }
        }
        
        // Check if more than half of the elements are zeros
        return zeroCount &gt; (totalElements / 2);
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter the number of rows: ");
        int rows = Integer.parseInt(reader.readLine());
        System.out.print("Enter the number of columns: ");
        int cols = Integer.parseInt(reader.readLine());
        
        int[][] matrix = new int[rows][cols];
        
        System.out.println("Enter the elements of the matrix:");
        for (int i = 0; i &lt; rows; i++) {
            for (int j = 0; j &lt; cols; j++) {
                matrix[i][j] = Integer.parseInt(reader.readLine());
            }
        }
        
        if (isSparseMatrix(matrix, rows, cols)) {
            System.out.println("The matrix is a sparse matrix.");
        } else {
            System.out.println("The matrix is not a sparse matrix.");
        }
    }
}

`,
output: `
Enter the number of rows: 3
Enter the number of columns: 3
Enter the elements of the matrix:
1
0
0
0
0
2
0
0
0
The matrix is a sparse matrix.

                `
            },
           
        }
        

    },
    // Add similar data for String, Inheritance, and OOP...
    "APPLETS": {
      "Easy": {
          "Create an applet showing the string \"Hello World\" which is embedded in the HTML page": {
              description: "Program to Create an applet showing the string \"Hello World\" which is embedded in the HTML page.",
              code: `
import java.applet.*;
import java.awt.*;
public class HelloWorld extends Applet{
    public void paint(Graphics g)
    {
        g.drawString("Hello World!", 100, 100);
    }
}
/*
 &lt;applet code = "HelloWorld.class" width = "300" height= "500">&lt;/applet>
 */

`,
 output: `
<img src="AppletImg/HW.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet showing the string \"Hello World\" which is executed by an appletviewer": {
              description: "Program to Create an applet showing the string \"Hello World\" which is executed by an appletviewer.",
              code: `
import java.applet.*;
import java.awt.*;
public class HelloWorld extends Applet{
    public void paint(Graphics g)
    {
        g.drawString("Hello World!", 100, 100);
    }
}
/*
 &lt;applet code = "HelloWorld.class" width = "300" height= "500">&lt;/applet>
 */

`,
 output: `
<img src="AppletImg/HW.png" alt="polygon" loading="lazy">
                `
          },
         "Create an applet in Java to draw a circle": {
              description: "Program to Create an applet in Java to draw a circle.",
              code: `
import java.applet.*;
import java.awt.*;
public class Circle extends Applet{
    public void paint(Graphics g)
    {
        g.drawOval(100, 100, 100, 100);
    }
}
/*
 &lt;applet code = "Circle.class" width = "300" height= "500">&lt;/applet>
 */

`,
 output: `
<img src="AppletImg/circle.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to draw a polygon": {
              description: "Program to Create an applet in Java to draw a polygon.",
              code: `
import java.applet.Applet;
import java.awt.*;
public class polygon extends Applet {
    public void paint(Graphics g)
    {
        int x[]={100,200,300,400};
        int y[]={200,200,300,400};
        g.drawPolygon(x, y,4);
    }
}
/*
 &lt;applet code = "polygon.class" width = "300" height= "500">&lt;/applet>
 */

`,
 output: `
<img src="AppletImg/polygon.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to draw a rectangle": {
              description: "Program to Create an applet in Java to draw a rectangle.",
              code: `
import java.applet.*;
import java.awt.*;
public class Rectangle extends Applet{
    public void paint(Graphics g)
    {
        g.drawRect(100, 100, 150, 100);
    }
}
/*
 &lt;applet code = "Rectangle.class" width = "300" height= "500">&lt;/applet>
 */


`,
 output: `
<img src="AppletImg/Rectangle.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to draw a square": {
              description: "Program to Create an applet in Java to draw a square.",
              code: `
import java.applet.*;
import java.awt.*;
public class Square extends Applet{
    
    public void paint(Graphics g)
    {
        g.drawRect(100, 100, 100, 100);
    }
}
/*
 &lt;applet code = "Square.class" width = "300" height= "500">&lt;/applet>
 */


`,
 output: `
<img src="AppletImg/square.png" alt="polygon" loading="lazy">
                `
          },
        "Create an applet in Java to draw a 4 concentric circles.": {
              description: "Create an applet in Java to draw a 4 concentric circles.",
              code: `
import java.applet.*;
import java.awt.*;
public class Circles extends Applet{
    public void paint(Graphics g)
    {
        g.drawOval(100, 100, 100, 100);
        g.drawOval(250, 100, 100, 100);
        g.drawOval(400, 100, 100, 100);
        g.drawOval(550, 100, 100, 100);
    }
}
/*
 &lt;applet code = "Circles.class" width = "300" height= "500">&lt;/applet>
 */
`,
                output: `
<img src="AppletImg/circles.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to draw a line.": {
              description: "Create an applet in Java to draw a line.",
              code: `
import java.applet.*;
import java.awt.*;
public class Line extends Applet{
    public void paint(Graphics g)
    {
        g.drawLine(100, 100, 100, 200);
    }
}
/*
 &lt;applet code = "Line.class" width = "300" height= "500">&lt;/applet>
 */
`,
                output: `
<img src="AppletImg/line.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to draw a oval.": {
              description: "Create an applet in Java to draw a oval.",
              code: `
import java.applet.Applet;
import java.awt.Graphics;

public class Oval extends Applet {
    public void paint(Graphics g)
    {
        g.drawOval(100, 100, 100, 50);
    }
}
/*
 &lt;applet code = "Oval.class" width = "300" height= "500">&lt;/applet>
 */
`,
                output: `
<img src="AppletImg/oval.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to draw a arc.": {
              description: "Create an applet in Java to draw a arc.",
              code: `
import java.applet.*;
import java.awt.*;
public class Arc extends Applet{
    public void paint(Graphics g)
    {
        g.drawArc(100, 100, 100, 100, 30, 180);
    }
}

/*
 &lt;applet code = "Arc.class" width = "300" height= "500">&lt;/applet>
 */
`,
                output: `
<img src="AppletImg/Arc.png" alt="polygon" loading="lazy">
                `
          },
          "Create an applet in Java to change the background color.": {
              description: "Create an applet in Java to change the background color.",
              code: `
            code//
`,
                output: `
                output//
                `
          },
          "Create an applet in Java to draw rounded rectangle.": {
              description: "Create an applet in Java to draw rounded rectangle.",
              code: `
import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;

public class RoundedRectangleApplet extends Applet {

    public void paint(Graphics g) {
        g.RoundRect(50, 50, 200, 100, 30, 30);  
}

`,
                output: `
                output//
                `
          },
          "Create an applet in Java to set font.": {
              description: "Create an applet in Java to set font.",
              code: `
            code//
`,
                output: `
                output//
                `
          },
          "Create an applet to display a digital clock.": {
              description: "Create an applet to display a digital clock.",
              code: `
            code//
`,
                output: `
                output//
                `
          },
          "Java Program to Draw a Smiling Face using Graphics Class Methods": {
              description: "Java Program to Draw a Smiling Face using Graphics Class Methods",
              code: `
import java.applet.Applet;
import java.awt.Graphics;

/**
 * SmileFace
 */
public class SmileFace extends Applet{
    public void paint(Graphics g)
    {
        g.drawOval(100, 100, 200, 200);
        g.drawOval(150, 150, 20, 20);
        g.drawOval(230, 150, 20, 20);
        g.drawArc(150, 200, 100, 50, 200, 150);
    }
}
/*
 &lt;applet code = "smileface.SmileFace.class" width = "300" height= "500">&lt;/applet>
 */
`,
                output: `
<img src="AppletImg/smile.png" alt="polygon" loading="lazy">
                `
          },
         
        },
      "Medium": {
         
      },
      "Hard": {
          
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
Average of 5 number is :- 5

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
			for(i=Binary.length-1;i&gt;=0;i--)
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
		for(i=binary.length-1;i&gt;=0;i--)
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
		else if(str.charAt(i)=='&bsol;n')
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
		System.out.println("No. of latters :-"+count_latter+"&bsol;nNo of Character :- "+count_character+"&bsol;nNo of Space :-"+count_space+"&bsol;nNo of Line :-"+count_number);
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
	else if(c &gt;='0' && c &lt;= '9')
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
	System.out.println("&bsol;nNo of Even elements :"+even+"&bsol;nNo of Odd elements:"+odd);
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
class AreaEquilateralTriangle {
    public static void main(String[] args) {
        double side = 5.0;
        double area = (Math.sqrt(3) / 4) * (side * side);
        System.out.println("Area of Equilateral Triangle: " + area);
    }
}


`,
                output: `
Area of Equilateral Triangle: 10.825317547305486

    
                `
        },
        "Area of rhombus": {
            description: "Java Program to find area of rhombus",
            code: `
class AreaRhombus {
    public static void main(String[] args) {
        double diagonal1 = 8.0, diagonal2 = 6.0;
        double area = (diagonal1 * diagonal2) / 2;
        System.out.println("Area of Rhombus: " + area);
    }
}
`,
                output: `
Area of Rhombus: 24.0
      `
        },
        "Area of parallelogram": {
            description: "Java Program to find area of parallelogram",
            code: `
class AreaParallelogram {
    public static void main(String[] args) {
        double base = 10.0, height = 5.0;
        double area = base * height;
        System.out.println("Area of Parallelogram: " + area);
    }
}

`,
                output: `
Area of Parallelogram: 50.0

    
                `
        },
        "Area of Prism": {
            description: "Java Program to find area of Prism",
            code: `
class AreaPrism {
    public static void main(String[] args) {
        double baseArea = 20.0, height = 10.0;
        double area = baseArea * height;
        System.out.println("Area of Prism: " + area);
    }
}


`,
                output: `
Area of Prism: 200.0

                `
        },
        "Volume of sphere": {
            description: "Java Program to find volume of sphere",
            code: `
class VolumeSphere {
    public static void main(String[] args) {
        double radius = 7.0;
        double volume = (4.0 / 3) * Math.PI * Math.pow(radius, 3);
        System.out.println("Volume of Sphere: " + volume);
    }
}


`,
                output: `
Volume of Sphere: 1436.7550402417319

    
                `
        },
        "Volume of cylinder": {
            description: "Java Program to find volume of cylinder",
            code: `
Volume of Sphere: 1436.7550402417319
class VolumeCylinder {
    public static void main(String[] args) {
        double radius = 5.0, height = 10.0;
        double volume = Math.PI * Math.pow(radius, 2) * height;
        System.out.println("Volume of Cylinder: " + volume);
    }
}


`,
                output: `
Volume of Cylinder: 785.3981633974483

    
                `
        },
        "Volume of cuboid": {
            description: "Java Program to find volume of cuboid",
            code: `
class VolumeCuboid {
    public static void main(String[] args) {
        double length = 10.0, width = 5.0, height = 4.0;
        double volume = length * width * height;
        System.out.println("Volume of Cuboid: " + volume);
    }
}


`,
                output: `
Volume of Cuboid: 200.0

    
                `
        },
        "Volume of cone": {
            description: "Java Program to find volume of cone",
            code: `
class VolumeCone {
    public static void main(String[] args) {
        double radius = 3.0, height = 9.0;
        double volume = (1.0 / 3) * Math.PI * Math.pow(radius, 2) * height;
        System.out.println("Volume of Cone: " + volume);
    }
}


`,
                output: `
Volume of Cone: 84.82300164692441

    
                `
        },
        "Surface area of cuboids": {
            description: " Java program to find surface area of cuboids",
            code: `
class SurfaceAreaCuboid {
    public static void main(String[] args) {
        double length = 10.0, width = 5.0, height = 4.0;
        double surfaceArea = 2 * (length * width + width * height + height * length);
        System.out.println("Surface Area of Cuboid: " + surfaceArea);
    }
}


`,
                output: `
Surface Area of Cuboid: 220.0
        `
        },
        "Surface area of cylinder": {
            description: "Java program to find surface area of cylinder",
            code: `
class SurfaceAreaCylinder {
    public static void main(String[] args) {
        double radius = 5.0, height = 10.0;
        double surfaceArea = 2 * Math.PI * radius * (radius + height);
        System.out.println("Surface Area of Cylinder: " + surfaceArea);
    }
}


`,
                output: `
Surface Area of Cylinder: 471.23889803846896

    
                `
        },
        "Surface area of cube": {
            description: "Java program to find surface area of cubes",
            code: `
class SurfaceAreaCube {
    public static void main(String[] args) {
        double side = 6.0;
        double surfaceArea = 6 * (side * side);
        System.out.println("Surface Area of Cube: " + surfaceArea);
    }
}


`,
                output: `
Surface Area of Cube: 216.0

    
                `
        },
        "Calculate average marks": {
            description: "Java program to calculate average marks",
            code: `
class AverageMarks {
    public static void main(String[] args) {
        double marks1 = 78.0, marks2 = 85.0, marks3 = 90.0;
        double average = (marks1 + marks2 + marks3) / 3;
        System.out.println("Average Marks: " + average);
    }
}


`,
                output: `
Average Marks: 84.33333333333333

    
                `
        },
        "Check vowel or consonant": {
            description: "Java program to check vowel or consonant",
            code: `
class VowelOrConsonant {
    public static void main(String[] args) {
        char ch = 'a';
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            System.out.println(ch + " is a vowel.");
        } else {
            System.out.println(ch + " is a consonant.");
        }
    }
}


`,
                output: `
a is a vowel.

    
                `
        },
        "Sum of N numbers": {
            description: "Java program to sum of N numbers",
            code: `
class SumOfNNumbers {
    public static void main(String[] args) {
        int n = 5;
        int sum = 0;
        for (int i = 1; i &lt;= n; i++) {
            sum += i;
        }
        System.out.println("Sum of first " + n + " numbers: " + sum);
    }
}


`,
                output: `
Sum of first 5 numbers: 15

    
                `
        },
        "Factorial of any number": {
            description: "Java program to find factorial of any number",
            code: `
class Factorial {
    public static void main(String[] args) {
        int number = 5;
        int factorial = 1;
        for (int i = 1; i &lt;= number; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + number + " is: " + factorial);
    }
}


`,
                output: `
Factorial of 5 is: 120

    
                `
        },
        "Calculate electricity bill": {
            description: "Java Program to calculate electricity bill",
            code: `
class ElectricityBill {
    public static void main(String[] args) {
        int units = 150;
        double bill;
        if (units &lt;= 100) {
            bill = units * 1.20;
        } else if (units &lt;= 300) {
            bill = 100 * 1.20 + (units - 100) * 2.00;
        } else {
            bill = 100 * 1.20 + 200 * 2.00 + (units - 300) * 3.00;
        }
        System.out.println("Electricity Bill: " + bill);
    }
}


`,
                output: `
Electricity Bill: 240.0

    
                `
        },
        "Calculate CGPA Percentage": {
            description: "Java Program To Calculate CGPA Percentage",
            code: `
class CGPAPercentage {
    public static void main(String[] args) {
        double cgpa = 8.5;
        double percentage = cgpa * 9.5;
        System.out.println("CGPA Percentage: " + percentage);
    }
}


`,
                output: `
CGPA Percentage: 80.75

    
                `
        },
        "Calculate compound interest": {
            description: "Java Program to calculate compound interestn",
            code: `
class CompoundInterest {
    public static void main(String[] args) {
        double principal = 10000, rate = 5, time = 2;
        double amount = principal * Math.pow((1 + rate / 100), time);
        double interest = amount - principal;
        System.out.println("Compound Interest: " + interest);
    }
}


`,
                output: `
Compound Interest: 1025.0000000000018

    
                `
        },
        "Calculate Batting Average": {
            description: "Java Program To Calculate Batting Average",
            code: `
class BattingAverage {
    public static void main(String[] args) {
        int runs = 800, innings = 10, notOut = 2;
        double average = (double) runs / (innings - notOut);
        System.out.println("Batting Average: " + average);
    }
}


`,
                output: `
Batting Average: 100.0

    
                `
        },
        "Calculate Commission Percentage": {
            description: "Java Pogram to Calculate Commission Percentage",
            code: `
class CommissionPercentage {
    public static void main(String[] args) {
        double salesAmount = 20000.0, commissionRate = 10.0;
        double commission = (salesAmount * commissionRate) / 100;
        System.out.println("Commission Percentage: " + commission);
    }
}


`,
                output: `
Commission Percentage: 2000.0

    
                `
        },
        "Find Distance Between Two Points": {
            description: "Java Pogram To Find Distance Between Two Points",
            code: `
class DistanceBetweenPoints {
    public static void main(String[] args) {
        double x1 = 3.0, y1 = 4.0, x2 = 7.0, y2 = 1.0;
        double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        System.out.println("Distance between the points: " + distance);
    }
}


`,
                output: `
Distance between the points: 5.0

    
                `
        },
        "Power Of Number": {
            description: "Java Program To Calculate Power Of Number",
            code: `
class PowerOfNumber {
    public static void main(String[] args) {
        double base = 2.0, exponent = 3.0;
        double result = Math.pow(base, exponent);
        System.out.println("Power of " + base + " raised to " + exponent + " is: " + result);
    }
}


`,
                output: `
Power of 2.0 raised to 3.0 is: 8.0

    
                `
        },
        "take three numbers from the user and print the greatest number": {
            description: "Write a Java program to take three numbers from the user and print the greatest number",
            code: `
import java.util.Scanner;

class GreatestOfThree {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = scanner.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = scanner.nextInt();
        
        System.out.print("Enter third number: ");
        int num3 = scanner.nextInt();
        
        int greatest = findGreatest(num1, num2, num3);
        System.out.println("The greatest number is: " + greatest);
        
        scanner.close();
    }

    static int findGreatest(int a, int b, int c) {
        if (a &gt;= b && a &gt;= c) {
            return a;
        } else if (b &gt;= a && b &gt;= c) {
            return b;
        } else {
            return c;
        }
    }
}
`,
                output: `
Enter first number: 12
Enter second number: 45
Enter third number: 30
The greatest number is: 45
            `
        },
        "find the number of days in a month": {
            description: "Write a Java program to find the number of days in a month",
            code: `
class DaysInMonth {
    public static void main(String[] args) {
        int month = 2, year = 2024;
        int days;
        if (month == 2) {
            days = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            days = 30;
        } else {
            days = 31;
        }
        System.out.println("Number of days: " + days);
    }
}

`,
                output: `
Number of days: 29

    
                `
        },
        "test a number is positive or negative": {
            description: "Write a Java program to test a number is positive or negative",
            code: `
class PositiveOrNegative {
    public static void main(String[] args) {
        int number = -5;
        if (number &gt; 0) {
            System.out.println(number + " is positive.");
        } else if (number &lt; 0) {
            System.out.println(number + " is negative.");
        } else {
            System.out.println(number + " is zero.");
        }
    }
}


`,
                output: `
-5 is negative.

    
                `
        },
        "print name of the day": {
            description: " Write a Java Program to accept number of week’s day (1-7) and print name of the day",
            code: `
class DayOfWeek {
    public static void main(String[] args) {
        int day = 3;
        String dayName;
        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid day"; break;
        }
        System.out.println("Day: " + dayName);
    }
}


`,
                output: `
Day: Wednesday

    
                `
        },
        "print whether that year is a leap year or not": {
            description: "Write a Java program that takes a year from user and print whether that year is a leap year or not",
            code: `
class LeapYearCheck {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(year + " is " + (isLeap ? "a leap year." : "not a leap year."));
    }
}


`,
                output: `
2024 is a leap year.

    
                `
        },
        "Input 5 numbers from keyboard and find their sum and average": {
            description: "Write a program in Java to display the Java program to input 5 numbers from keyboard and find their sum and average",
            code: `
class SumAndAverage {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        double average = sum / 5.0;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}


`,
                output: `
Sum: 150
Average: 30.0
                `
        },
        "first 5 natural numbersn": {
            description: "Write a program in Java to display the first 5 natural numbers",
            code: `
class First5NaturalNumbers {
    public static void main(String[] args) {
        for (int i = 1; i &lt;= 5; i++) {
            System.out.println(i);
        }
    }
}


`,
                output: `
1
2
3
4
5

    
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
class CubeOfNumbers {
    public static void main(String[] args) {
        int n = 4;
        for (int i = 1; i &lt;= n; i++) {
            System.out.println("Cube of " + i + " is: " + (i * i * i));
        }
    }
}


`,
                output: `
Cube of 1 is: 1
Cube of 2 is: 8
Cube of 3 is: 27
Cube of 4 is: 64

    
                `
        },
        "display the n terms of odd natural number and their sum": {
            description: "Write a Java program to display the n terms of odd natural number and their sum",
            code: `
class OddNaturalNumbers {
    public static void main(String[] args) {
        int n = 5;
        int sum = 0;
        for (int i = 1, count = 0; count &lt; n; i += 2) {
            System.out.println(i);
            sum += i;
            count++;
        }
        System.out.println("Sum: " + sum);
    }
}


`,
                output: `
1
3
5
7
9
Sum: 25

    
                `
        },
        "display the multiplication table of a given integer": {
            description: "Write a Java program to display the multiplication table of a given integer",
            code: `
class MultiplicationTable {
    public static void main(String[] args) {
        int number = 6;
        for (int i = 1; i &lt;= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}


`,
                output: `
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60

    
                `
        },
        "reads an integer and check whether it is negative, zero, or positive": {
            description: "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
            code: `
class CheckInteger {
    public static void main(String[] args) {
        int number = 0;
        if (number &gt; 0) {
            System.out.println(number + " is positive.");
        } else if (number &lt; 0) {
            System.out.println(number + " is negative.");
        } else {
            System.out.println(number + " is zero.");
        }
    }
}


`,
                output: `
0 is zero.

    
                `
        },
        "reads an positive integer and count the number of digits": {
            description: "Write a Java program that reads an positive integer and count the number of digits",
            code: `
class CountDigits {
    public static void main(String[] args) {
        int number = 12345;
        int count = 0;
        while (number != 0) {
            number /= 10;
            count++;
        }
        System.out.println("Number of digits: " + count);
    }
}


`,
                output: `
Number of digits: 5

    
                `
        },
        "three numbers and check All numbers are equal or not": {
            description: "Write a Java program that accepts three numbers and check All numbers are equal or not",
            code: `
class CheckEqualNumbers {
    public static void main(String[] args) {
        int num1 = 10, num2 = 10, num3 = 10;
        if (num1 == num2 && num2 == num3) {
            System.out.println("All numbers are equal.");
        } else {
            System.out.println("Numbers are not equal.");
        }
    }
}


`,
                output: `
All numbers are equal.

    
                `
        },
        "Accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.": {
            description: "Write a Java program to print ‘Hello World!’ on screen",
            code: `
class IncreasingOrDecreasing {
    public static void main(String[] args) {
        int num1 = 10, num2 = 20, num3 = 30;
        if (num1 &lt; num2 && num2 &lt; num3) {
            System.out.println("Numbers are in increasing order.");
        } else if (num1 &gt; num2 && num2 &gt; num3) {
            System.out.println("Numbers are in decreasing order.");
        } else {
            System.out.println("Numbers are neither in increasing nor decreasing order.");
        }
    }
}


`,
                output: `
Numbers are in increasing order.

    
                `
        },
        "determines a student’s grade": {
            description: "Write a Java program that determines a student’s grades",
            code: `
class StudentGrade {
    public static void main(String[] args) {
        int marks = 85;
        String grade;
        if (marks &gt;= 90) {
            grade = "A";
        } else if (marks &gt;= 80) {
            grade = "B";
        } else if (marks &gt;= 70) {
            grade = "C";
        } else if (marks &gt;= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        System.out.println("Grade: " + grade);
    }
}


`,
                output: `
Grade: B

    
                `
        },
        "create a simple calculator": {
            description: "Write a Java program to create a simple calculator",
            code: `
class Calculator {
    
    public static void main(String[] args) {
        double num1=0.0,num2=0.0,result;
        char ch=' ';
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        java.io.BufferedReader input1 = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.println("Opration Menu: ");
        System.out.println("Addition : +");
        System.out.println("Subtraction : -");
        System.out.println("Multiplication : *");
        System.out.println("Division : /");
        System.out.println("Enter Opration :");
        try {
            ch = (char)input.read();
        } catch (java.io.IOException e) {
            System.out.println(e.getMessage());
        }
        if (ch>'a') {
            System.out.println("Exit");
            return;
        }
        else
        {
        System.out.println("Enter 1st Number : ");
        try
        {
            num1 = Double.parseDouble(input1.readLine());
        }
        catch(NumberFormatException e)
        {
            System.out.println("Enter Number only!");
          
        }
        catch(java.io.IOException e)
        {
            System.out.println(e.getMessage());
        }
        System.out.println("Enter 2nd Number : ");
        try
        {
            num2 = Double.parseDouble(input1.readLine());
        }
        catch(NumberFormatException e)
        {
            System.out.println("Enter Number only!");

        }
        catch(java.io.IOException e)
        {
            System.out.println(e.getMessage());
        }
        
        switch (ch) {
            case '+':
                result = num1+num2;
                System.out.println("Result : "+result);
                break;
                case '-':
                result = num1-num2;
                System.out.println("Result : "+result);
                break;
                case '/':
                result = num1/num2;
                System.out.println("Result : "+result);
                break;
                case '*':
                result = num1*num2;
                System.out.println("Result : "+result);
                break;

            default:
            System.out.println("Invalied Opration!!");
                break;
        }
    }
    }

}



`,
                output: `
Opration Menu:
Addition : +
Subtraction : -
Multiplication : *
Division : /
Enter Opration :
+
Enter 1st Number :
6
Enter 2nd Number :
5
Result : 11.0

    
                `
        },
        "concatenate two string": {
            description: "Write a Java program to concatenate two string",
            code: `
class ConcatenateStrings {
    public static void main(String[] args) {
        String str1 = "Hello ", str2 = "World!";
        String result = str1 + str2;
        System.out.println("Concatenated String: " + result);
    }
}


`,
                output: `
Concatenated String: Hello World!

    
                `
        },
        "convert all characters in a string to lowercase": {
            description: "Write a Java program to convert all characters in a string to lowercase",
            code: `
class ToLowerCase {
    public static void main(String[] args) {
        String str = "HELLO WORLD";
        String lowerStr = str.toLowerCase();
        System.out.println("Lowercase: " + lowerStr);
    }
}


`,
                output: `
Lowercase: hello world

    
                `
        },
        "convert all characters in a string to uppercase": {
            description: "Write a Java program to convert all characters in a string to uppercase",
            code: `
class ToUpperCase {
    public static void main(String[] args) {
        String str = "hello world";
        String upperStr = str.toUpperCase();
        System.out.println("Uppercase: " + upperStr);
    }
}


`,
                output: `
Uppercase: HELLO WORLD

    
                `
        },
        "trim a string(remove whitespaces)": {
            description: "Write a Java program to trim a string(remove whitespaces)",
            code: `
class TrimString {
    public static void main(String[] args) {
        String str = "   Hello World!   ";
        String trimmedStr = str.trim();
        System.out.println("Trimmed String: '" + trimmedStr + "'");
    }
}


`,
                output: `
Trimmed String: 'Hello World!'

    
                `
        },
        "get a substring of a given string between two specified positions": {
            description: "Write a Java program to get a substring of a given string between two specified positions",
            code: `
class SubstringExample {
    public static void main(String[] args) {
        String str = "Hello World!";
        String substring = str.substring(0, 5); // From index 0 to 4
        System.out.println("Substring: " + substring);
    }
}


`,
                output: `
Substring: Hello

    
                `
        },
        "replace all the ‘d’ characters with ‘f’ characters": {
            description: "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
            code: `
class ReplaceCharacter {
    public static void main(String[] args) {
        String str = "Hello World!";
        String replacedStr = str.replace('d', 'f');
        System.out.println("Modified String: " + replacedStr);
    }
}


`,
                output: `
Modified String: Hello Worlf!

    
                `
        },
        "get the length of a given string": {
            description: "Write a Java program to get the length of a given string",
            code: `
class StringLength {
    public static void main(String[] args) {
        String str = "Hello World!";
        int length = str.length();
        System.out.println("Length of the String: " + length);
    }
}


`,
                output: `
Length of the String: 12

    
                `
        },
        "print current date and time in the specified format": {
            description: "Write a Java program to print current date and time in the specified format",
            code: `
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

class CurrentDateTime {
    public static void main(String[] args) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = currentDateTime.format(formatter);
        System.out.println("Current Date and Time: " + formattedDate);
    }
}


`,
                output: `
Current Date and Time: 03-10-2024 10:20:30 

    
                `
        },
        "get the character at the given index within the String": {
            description: "Write a Java program to get the character at the given index within the String",
            code: `
class CharacterAtIndex {
    public static void main(String[] args) {
        String str = "Hello World!";
        char charAt = str.charAt(6); // Get character at index 6
        System.out.println("Character at index 6: " + charAt);
    }
}


`,
                output: `
Character at index 6: W

    
                `
        },
        "remove a particular character from a string": {
            description: "Write a Java program to remove a particular character from a string",
            code: `
class RemoveCharacter {
    public static void main(String[] args) {
        String str = "Hello World!";
        String newStr = str.replace("o", ""); // Remove 'o'
        System.out.println("String after removing 'o': " + newStr);
    }
}


`,
                output: `
String after removing 'o': Hell Wrld!

    
                `
        },
        "reverse a String": {
            description: "Write a Java program to reverse a String",
            code: `
class ReverseString {
    public static void main(String[] args) {
        String str = "Hello World!";
        String reversedStr = new StringBuilder(str).reverse().toString();
        System.out.println("Reversed String: " + reversedStr);
    }
}


`,
                output: `
Reversed String: !dlroW olleH

    
                `
        },
        "remove html tags from a string": {
            description: "Write a Java program to remove html tags from a string",
            code: `
class RemoveHTMLTags {
    public static void main(String[] args) {
        String str = "&lt;h1&lt;Hello World!&lt;/h1&lt;";
        String cleanStr = str.replaceAll("&lt;.*?&lt;", ""); // Regex to remove HTML tags
        System.out.println("String after removing HTML tags: " + cleanStr);
    }
}


`,
                output: `
String after removing HTML tags: Hello World!

    
                `
        },
        "count total number of lines from a string": {
            description: "Write a Java program to count total number of lines from a string",
            code: `
class CountLines {
    public static void main(String[] args) {
        String str = "Hello&bsol;nWorld&bsol;nThis is a test";
        String[] lines = str.split("&bsol;n");
        System.out.println("Total number of lines: " + lines.length);
    }
}


`,
                output: `
Total number of lines: 3

    
                `
        },
        "sum values of an array!!":
        {
            description:"Write a Java program to sum values of an array",
            code : 
            `
 class SumArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        System.out.println("Sum of array elements: " + sum);
    }
}

            `,
            output:
            `
Sum of array elements: 15

            `
        },
        "find the index of an array element!!":
        {
            description:"Write a Java program to find the index of an array element",
            code : 
            `
class IndexOfElement {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        int element = 30;
        int index = -1;
        for (int i = 0; i &lt; array.length; i++) {
            if (array[i] == element) {
                index = i;
                break;
            }
        }
        System.out.println("Index of " + element + ": " + index);
    }
}

            `,
            output:
            `
 Index of 30: 2

            `
        },
        "calculate the average value of array elements!!":
        {
            description:"Write a Java program to calculate the average value of array elements",
            code : 
            `
class AverageArray {
    public static void main(String[] args) {
        int[] array = {5, 10, 15, 20, 25};
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        double average = (double) sum / array.length;
        System.out.println("Average value: " + average);
    }
}

            `,
            output:
            `
Average value: 15.0

            `
        },
        "test if an array contains a specific value!!":
        {
            description:"Write a Java program to test if an array contains a specific value",
            code : 
            `
class ContainsValue {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int value = 3;
        boolean found = false;
        for (int num : array) {
            if (num == value) {
                found = true;
                break;
            }
        }
        System.out.println("Array contains " + value + ": " + found);
    }
}

            `,
            output:
            `
Array contains 3: true

            `
        },
        "find the maximum and minimum value of an array!!":
        {
            description:"Write a Java program to find the maximum and minimum value of an array",
            code : 
            `
class MaxMinArray {
    public static void main(String[] args) {
        int[] array = {5, 2, 8, 1, 9};
        int max = array[0];
        int min = array[0];
        for (int num : array) {
            if (num &gt; max) {
                max = num;
            }
            if (num &lt; min) {
                min = num;
            }
        }
        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
    }
}

            `,
            output:
            `
Maximum: 9
Minimum: 1

            `
        },
        "insert an element (specific position) into an array!!":
        {
            description:"Write a Java program to insert an element (specific position) into an array",
            code : 
            `
import java.util.Arrays;

class InsertElement {
    public static void main(String[] args) {
        int[] array = {1, 2, 4, 5};
        int position = 2;
        int element = 3;
        int[] newArray = new int[array.length + 1];
        for (int i = 0, j = 0; i &lt; newArray.length; i++) {
            if (i == position) {
                newArray[i] = element;
            } else {
                newArray[i] = array[j++];
            }
        }
        System.out.println("Array after insertion: " + Arrays.toString(newArray));
    }
}

            `,
            output:
            `
 Array after insertion: [1, 2, 3, 4, 5]

            `
        },
        "reverse an array of integer values!!":
        {
            description:"Write a Java program to reverse an array of integer values",
            code : 
            `
import java.util.Arrays;

class ReverseArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        for (int i = 0; i &lt; array.length / 2; i++) {
            int temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
        System.out.println("Reversed array: " + Arrays.toString(array));
    }
}

            `,
            output:
            `
 Reversed array: [5, 4, 3, 2, 1]

            `
        },
        "find the common elements between two arrays!!":
        {
            description:"Write a Java program to find the common elements between two arrays",
            code : 
            `
import java.util.HashSet;

class CommonElements {
    public static void main(String[] args) {
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {4, 5, 6, 7, 8};
        HashSet&lt;Integer&lt; commonElements = new HashSet&lt;&lt;();
        for (int num1 : array1) {
            for (int num2 : array2) {
                if (num1 == num2) {
                    commonElements.add(num1);
                }
            }
        }
        System.out.println("Common elements: " + commonElements);
    }
}

            `,
            output:
            `
Common elements: [4, 5]

            `
        },
        "find the duplicate values of an array of integer values!!":
        {
            description:"Write a Java program to find the duplicate values of an array of integer values",
            code : 
            `
import java.util.HashSet;

class DuplicateValues {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 2, 4, 5, 4};
        HashSet&lt;Integer&lt; seen = new HashSet&lt;&lt;();
        HashSet&lt;Integer&lt; duplicates = new HashSet&lt;&lt;();
        for (int num : array) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        System.out.println("Duplicate values: " + duplicates);
    }
}

            `,
            output:
            `
Duplicate values: [2, 4]

            `
        },
        "convert an array to ArrayList!!":
        {
            description:"Write a Java program to convert an array to ArrayList",
            code : 
            `
import java.util.ArrayList;
import java.util.Arrays;

class ArrayToArrayList {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5};
        ArrayList&lt;Integer&lt; arrayList = new ArrayList&lt;&lt;(Arrays.asList(array));
        System.out.println("ArrayList: " + arrayList);
    }
}

            `,
            output:
            `
ArrayList: [1, 2, 3, 4, 5]

            `
        },
        "add two matrices of the same size!!":
        {
            description:"Write a Java program to add two matrices of the same size",
            code : 
            `
class AddMatrices {
    public static void main(String[] args) {
        int[][] matrix1 = { {1, 2}, {3, 4} };
        int[][] matrix2 = { {5, 6}, {7, 8} };
        int[][] result = new int[2][2];

        for (int i = 0; i &lt; 2; i++) {
            for (int j = 0; j &lt; 2; j++) {
                result[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

        System.out.println("Resultant Matrix:");
        for (int[] row : result) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}

            `,
            output:
            `
Resultant Matrix:
6 8 
10 12 

            `
        },
        "find second largest number from the array!!":
        {
            description:"Write a Java program to find second largest number from the array",
            code : 
            `
import java.util.Arrays;

class SecondLargest {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        Arrays.sort(array);
        int secondLargest = array[array.length - 2];
        System.out.println("Second Largest: " + secondLargest);
    }
}

            `,
            output:
            `
Second Largest: 4

            `
        },
        "find second lowest number from the array!!":
        {
            description:"Write a Java program to find second lowest number from the array",
            code : 
            `
import java.util.Arrays;

class SecondLowest {
    public static void main(String[] args) {
        int[] array = {5, 1, 4, 2, 3};
        Arrays.sort(array);
        int secondLowest = array[1];
        System.out.println("Second Lowest: " + secondLowest);
    }
}

            `,
            output:
            `
Second Lowest: 2

            `
        },
        "find the number of even and odd integers in a given array of integers!!":
        {
            description:"Write a Java program to find the number of even and odd integers in a given array of integers",
            code : 
            `
class CountEvenOdd {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6};
        int evenCount = 0, oddCount = 0;

        for (int num : array) {
            if (num % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        System.out.println("Even numbers: " + evenCount);
        System.out.println("Odd numbers: " + oddCount);
    }
}

            `,
            output:
            `
Even numbers: 3
Odd numbers: 3

            `
        },
        "get the difference between the largest and smallest values in an array of integers!!":
        {
            description:"Write a Java program to get the difference between the largest and smallest values in an array of integers",
            code : 
            `
class DifferenceMaxMin {
    public static void main(String[] args) {
        int[] array = {5, 1, 9, 2, 8};
        int max = array[0], min = array[0];

        for (int num : array) {
            if (num &lt; max) max = num;
            if (num &lt; min) min = num;
        }

        int difference = max - min;
        System.out.println("Difference: " + difference);
    }
}

            `,
            output:
            `
Difference: 8

            `
        },
        "get the difsegregate all 0s on left side and all 1s on right side of a given array of 0s and 1sference between the largest and smallest values in an array of integers!!":
        {
            description:"Write a Java program to get the difsegregate all 0s on left side and all 1s on right side of a given array of 0s and 1sference between the largest and smallest values in an array of integers",
            code : 
            `
import java.util.Arrays;

class SegregateZeroesOnes {
    public static void main(String[] args) {
        int[] array = {0, 1, 0, 1, 0, 1};
        Arrays.sort(array);
        System.out.println("Array after segregation: " + Arrays.toString(array));
    }
}

            `,
            output:
            `
Array after segregation: [0, 0, 0, 1, 1, 1]

            `
        },
        "cyclically rotate a given array clockwise by one!!":
        {
            description:"Write a Java program to cyclically rotate a given array clockwise by one",
            code : 
            `
import java.util.Arrays;

class RotateArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int last = array[array.length - 1];

        for (int i = array.length - 1; i &lt; 0; i--) {
            array[i] = array[i - 1];
        }
        array[0] = last;

        System.out.println("Array after rotation: " + Arrays.toString(array));
    }
}

            `,
            output:
            `
Array after rotation: [5, 1, 2, 3, 4]

            `
        },
        "print all unique element in an array!!":
        {
            description:"Write a Java program to print all unique element in an array",
            code : 
            `
import java.util.HashSet;

class UniqueElements {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 2, 4, 5, 4};
        HashSet&lt;Integer&lt; uniqueElements = new HashSet&lt;&lt;();

        for (int num : array) {
            uniqueElements.add(num);
        }

        System.out.println("Unique elements: " + uniqueElements);
    }
}

            `,
            output:
            `
Unique elements: [1, 2, 3, 4, 5]

            `
        },
        "Sort the Array in an Ascending Order!!":
        {
            description:"Write a Java program to Sort the Array in an Ascending Order",
            code : 
            `
import java.util.Arrays;

class SortArrayAscending {
    public static void main(String[] args) {
        int[] array = {5, 3, 8, 1, 2};
        Arrays.sort(array);
        System.out.println("Array in ascending order: " + Arrays.toString(array));
    }
}

            `,
            output:
            `
Array in ascending order: [1, 2, 3, 5, 8]

            `
        },
        "Sort the Array in an Descending Order!!":
        {
            description:"Write a Java program to Sort the Array in an Descending Order",
            code : 
            `
import java.util.Arrays;
import java.util.Collections;

class SortArrayDescending {
    public static void main(String[] args) {
        Integer[] array = {5, 3, 8, 1, 2};
        Arrays.sort(array, Collections.reverseOrder());
        System.out.println("Array in descending order: " + Arrays.toString(array));
    }
}

            `,
            output:
            `
Array in descending order: [8, 5, 3, 2, 1]

            `
        },
        "Sort Names in an Alphabetical Order!!":
        {
            description:"Write a Java program to Sort Names in an Alphabetical Order",
            code : 
            `
import java.util.Arrays;

class SortNames {
    public static void main(String[] args) {
        String[] names = {"Charlie", "Manjit", "Bob", "Eve", "David"};
        Arrays.sort(names);
        System.out.println("Names in alphabetical order: " + Arrays.toString(names));
    }
}

            `,
            output:
            `
Names in alphabetical order: [Manjit, Bob, Charlie, David, Eve]

            `
        },
        "Display Transpose Matrix!!":
        {
            description:"Write a Java program to Display Transpose Matrix",
            code : 
            `
class TransposeMatrix {
    public static void main(String[] args) {
        int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        int[][] transpose = new int[3][3];

        for (int i = 0; i &lt; 3; i++) {
            for (int j = 0; j &lt; 3; j++) {
                transpose[i][j] = matrix[j][i];
            }
        }

        System.out.println("Transpose of the matrix:");
        for (int[] row : transpose) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}

            `,
            output:
            `
Transpose of the matrix:
1 4 7 
2 5 8 
3 6 9 

            `
        },
        "Search Key Elements in an Array!!":
        {
            description:"Write a Java program to Search Key Elements in an Array",
            code : 
            `
class SearchElement {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int key = 3;
        boolean found = false;

        for (int num : array) {
            if (num == key) {
                found = true;
                break;
            }
        }

        System.out.println("Element " + key + " found: " + found);
    }
}

            `,
            output:
            `
Element 3 found: true

            `
        },
        "Accept the Marks of a Student and find Total Marks and Percentage!!":
        {
            description:"Write a Java program to Accept the Marks of a Student and find Total Marks and Percentage",
            code : 
            `
class TotalMarksPercentage {
    public static void main(String[] args) {
        int[] marks = {80, 90, 85, 75, 95};
        int total = 0;
        
        for (int mark : marks) {
            total += mark;
        }
        
        double percentage = (double) total / marks.length;
        System.out.println("Total Marks: " + total);
        System.out.println("Percentage: " + percentage + "%");
    }
}

            `,
            output:
            `
Total Marks: 425
Percentage: 85.0%

            `
        },
        "print numbers from 1 to 10 using loop!!":
        {
            description:"Write a Java program to print numbers from 1 to 10 using loop",
            code : 
            `
class PrintNumbers {
    public static void main(String[] args) {
        for (int i = 1; i &lt;= 10; i++) {
            System.out.println(i);
        }
    }
}

            `,
            output:
            `
1
2
3
4
5
6
7
8
9
10

            `
        },
        "calculate the sum of first 10 natural number using loop!!":
        {
            description:"Write a Java program to calculate the sum of first 10 natural number using loop",
            code : 
            `
class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i &lt;= 10; i++) {
            sum += i;
        }
        System.out.println("Sum of first 10 natural numbers: " + sum);
    }
}

            `,
            output:
            `
Sum of first 10 natural numbers: 55

            `
        },
        "print multiplication table of given number!!":
        {
            description:"Write a Java program to print multiplication table of given number",
            code : 
            `
class MultiplicationTable {
    public static void main(String[] args) {
        int number = 5;
        for (int i = 1; i &lt;= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}

            `,
            output:
            `
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

            `
        },
        "find the factorial value of any number entered through the keyboard!!":
        {
            description:"Write a Java program to find the factorial value of any number entered through the keyboard",
            code : 
            `
class Factorial {
    public static void main(String[] args) {
        int number = 5;
        int factorial = 1;
        for (int i = 1; i &lt;= number; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + number + " is: " + factorial);
    }
}

            `,
            output:
            `
Factorial of 5 is: 120

            `
        },
        "that prompts the user to input an integer and then outputs the number with the digits reversed order!!":
        {
            description:"Write a Java program to that prompts the user to input an integer and then outputs the number with the digits reversed order",
            code : 
            `
class ReverseDigits {
    public static void main(String[] args) {
        int number = 1234;
        int reversed = 0;

        while (number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }

        System.out.println("Reversed number: " + reversed);
    }
}

            `,
            output:
            `
Reversed number: 4321

            `
        },
        "that reads a set of integers, and then prints the sum of the even and odd integers using loop!!":
        {
            description:"Write a Java program to that reads a set of integers, and then prints the sum of the even and odd integers using loop",
            code : 
            `
class SumEvenOdd {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int sumEven = 0, sumOdd = 0;

        for (int num : numbers) {
            if (num % 2 == 0) {
                sumEven += num;
            } else {
                sumOdd += num;
            }
        }

        System.out.println("Sum of even numbers: " + sumEven);
        System.out.println("Sum of odd numbers: " + sumOdd);
    }
}

            `,
            output:
            `
Sum of even numbers: 30
Sum of odd numbers: 25

            `
        },
        "to check whether the number is a prime number or not!!":
        {
            description:"Write a Java program to to check whether the number is a prime number or not",
            code : 
            `
class PrimeNumber {
    public static void main(String[] args) {
        int number = 29;
        boolean isPrime = true;

        for (int i = 2; i &lt;= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        System.out.println(number + " is prime: " + isPrime);
    }
}

            `,
            output:
            `
29 is prime: true

            `
        },
        "to calculate HCF of Two given numbers using loop!!":
        {
            description:"Write a Java program to to calculate HCF of Two given numbers using loop",
            code : 
            `
class HCF {
    public static void main(String[] args) {
        int num1 = 12, num2 = 15;
        int hcf = 1;

        for (int i = 1; i &lt;= Math.min(num1, num2); i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                hcf = i;
            }
        }

        System.out.println("HCF of " + num1 + " and " + num2 + " is: " + hcf);
    }
}

            `,
            output:
            `
HCF of 12 and 15 is: 3

            `
        },
        "enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros!!":
        {
            description:"Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
            code : 
            `
import java.util.Scanner;

class CountPosNegZeros {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int countPositive = 0, countNegative = 0, countZero = 0;

        System.out.println("Enter numbers (0 to stop): ");
        while (true) {
            int number = scanner.nextInt();
            if (number == 0) {
                break;
            }
            if (number &lt; 0) {
                countPositive++;
            } else if (number &lt; 0) {
                countNegative++;
            } else {
                countZero++;
            }
        }

        System.out.println("Positive numbers: " + countPositive);
        System.out.println("Negative numbers: " + countNegative);
        System.out.println("Zeros: " + countZero);
        scanner.close();
    }
}

            `,
            output:
            `
Enter numbers (0 to stop):
5
-2
0
3
-1
0
Positive numbers: 3
Negative numbers: 2
Zeros: 0

            `
        },
        "enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered!!":
        {
            description:"Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
            code : 
            `
import java.util.Scanner;

class LargestSmallest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int largest = Integer.MIN_VALUE;
        int smallest = Integer.MAX_VALUE;

        System.out.println("Enter numbers (0 to stop): ");
        while (true) {
            int number = scanner.nextInt();
            if (number == 0) {
                break;
            }
            if (number &lt; largest) {
                largest = number;
            }
            if (number &lt; smallest) {
                smallest = number;
            }
        }

        System.out.println("Largest number: " + largest);
        System.out.println("Smallest number: " + smallest);
        scanner.close();
    }
}

            `,
            output:
            `
Enter numbers (0 to stop):
5
-2
0
3
-1
0
Largest number: 5
Smallest number: -2

            `
        },
        "print out all Armstrong numbers between 1 to 600 using loop!!":
        {
            description:"Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
            code : 
            `
class ArmstrongNumbers {
    public static void main(String[] args) {
        System.out.println("Armstrong numbers between 1 and 600:");
        for (int num = 1; num &lt;= 600; num++) {
            int sum = 0, temp = num, digits = String.valueOf(num).length();

            while (temp != 0) {
                int digit = temp % 10;
                sum += Math.pow(digit, digits);
                temp /= 10;
            }

            if (sum == num) {
                System.out.println(num);
            }
        }
    }
}

            `,
            output:
            `
Armstrong numbers between 1 and 600:
1
2
3
4
5
6
7
8
9
153
370
371
407

            `
        },
        "count total number of notes in entered amount using loop!!":
        {
            description:"Write a Java program to count total number of notes in entered amount using loop",
            code : 
            `
class CountNotes {
    public static void main(String[] args) {
        int amount = 567; // Example amount
        int[] notes = {200, 100, 50, 10, 5, 1};
        int[] noteCount = new int[notes.length];

        for (int i = 0; i &lt; notes.length; i++) {
            noteCount[i] = amount / notes[i];
            amount %= notes[i];
        }

        System.out.println("Count of notes:");
        for (int i = 0; i &lt; notes.length; i++) {
            System.out.println(notes[i] + " : " + noteCount[i]);
        }
    }
}

            `,
            output:
            `
Count of notes:
200 : 2
100 : 1
50 : 1
10 : 1
5 : 1
1 : 2

            `
        },
        "print Fibonacci series of n terms where n is input by user using loop!!":
        {
            description:"Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
            code : 
            `
import java.util.Scanner;

class FibonacciSeries {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = scanner.nextInt();
        int a = 0, b = 1;

        System.out.print("Fibonacci Series: " + a + " " + b);
        for (int i = 2; i &lt; n; i++) {
            int c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
        scanner.close();
    }
}

            `,
            output:
            `
Enter the number of terms: 5
Fibonacci Series: 0 1 1 2 3

            `
        },
        "calculate the sum of following series where n is input by user!!":
        {
            description:"Write a Java program to calculate the sum of following series where n is input by user",
            code : 
            `
import java.util.Scanner;

class SumOfSeries {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = scanner.nextInt();
        double sum = 0;

        for (int i = 1; i &lt;= n; i++) {
            sum += 1.0 / i;
        }

        System.out.println("Sum of the series: " + sum);
        scanner.close();
    }
}


            `,
            output:
            `
Enter the number of terms: 5
Sum of the series: 2.283333333333333


            `
        },
        "Java method to compute the average of three numbers!!":
        {
            description:"Write a Java method to compute the average of three numbers",
            code : 
            `
class AverageOfThree {
    public static void main(String[] args) {
        double avg = computeAverage(5, 10, 15);
        System.out.println("Average: " + avg);
    }

    static double computeAverage(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }
}
            `,
            output:
            `
Average: 10.0
            `
        },
        "Java method to find the smallest number among three numbers!!":
        {
            description:"Write a Java method to find the smallest number among three numbers",
            code : 
            `
class SmallestOfThree {
    public static void main(String[] args) {
        int smallest = findSmallest(10, 20, 5);
        System.out.println("Smallest number: " + smallest);
    }

    static int findSmallest(int a, int b, int c) {
        return Math.min(a, Math.min(b, c));
    }
}

            `,
            output:
            `
Smallest number: 5


            `
        },
        "Java method to count all words in a string!!":
        {
            description:"Write a Java method to count all words in a string",
            code : 
            `
class CountVowels {
    public static void main(String[] args) {
        String text = "Hello World!";
        int vowelCount = countVowels(text);
        System.out.println("Number of vowels: " + vowelCount);
    }

    static int countVowels(String str) {
        int count = 0;
        for (char ch : str.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(ch) != -1) {
                count++;
            }
        }
        return count;
    }
}

            `,
            output:
            `
Number of words: 7


            `
        },
        "Java method to count all vowels in a string!!":
        {
            description:"Write a Java method to count all vowels in a string",
            code : 
            `
class CountVowels {
    public static void main(String[] args) {
        String text = "Hello World!";
        int vowelCount = countVowels(text);
        System.out.println("Number of vowels: " + vowelCount);
    }

    static int countVowels(String str) {
        int count = 0;
        for (char ch : str.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(ch) != -1) {
                count++;
            }
        }
        return count;
    }
}

            `,
            output:
            `
Number of vowels: 3

            `
        },
        "Java method to compute the sum of the digits in an integer":
        {
            description:"Write a Java method to compute the sum of the digits in an integer",
            code : 
            `
class SumOfDigits {
    public static void main(String[] args) {
        int number = 12345;
        int sum = computeSumOfDigits(number);
        System.out.println("Sum of digits: " + sum);
    }

    static int computeSumOfDigits(int num) {
        int sum = 0;
        while (num != 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
}

            `,
            output:
            `
Sum of digits: 15

            `
        },
        "Java method to check whether an year entered by the user is a leap year or not!!":
        {
            description:"Write a Java method to check whether an year entered by the user is a leap year or not",
            code : 
            `
class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap = checkLeapYear(year);
        System.out.println(year + " is a leap year: " + isLeap);
    }

    static boolean checkLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }
}

            `,
            output:
            `
2024 is a leap year: true

            `
        },
        "Java method to calculate the area of a triangle!!":
        {
            description:"Write a Java method to calculate the area of a triangle",
            code : 
            `
class AreaOfTriangle {
    public static void main(String[] args) {
        double area = calculateArea(5, 10);
        System.out.println("Area of triangle: " + area);
    }

    static double calculateArea(double base, double height) {
        return 0.5 * base * height;
    }
}

            `,
            output:
            `
Area of triangle: 25.0

            `
        },
        "Java method to find the area of a pentagon!!":
        {
            description:"Write a Java method to find the area of a pentagon",
            code : 
            `
class AreaOfPentagon {
    public static void main(String[] args) {
        double area = calculateArea(5);
        System.out.println("Area of pentagon: " + area);
    }

    static double calculateArea(double side) {
        return (1.720477) * Math.pow(side, 2);
    }
}

            `,
            output:
            `
Area of pentagon: 43.011925

            `
        },
        "Java method to find number is even number or not!!":
        {
            description:"Write a Java method to find number is even number or not",
            code : 
            `
class EvenNumberCheck {
    public static void main(String[] args) {
        int number = 10;
        boolean isEven = isEvenNumber(number);
        System.out.println(number + " is even: " + isEven);
    }

    static boolean isEvenNumber(int num) {
        return num % 2 == 0;
    }
}

            `,
            output:
            `
10 is even: true

            `
        },
        "Java method to check numbers is palindrome number or not!!":
        {
            description:"Write a Java method to check numbers is palindrome number or not",
            code : 
            `
class PalindromeCheck {
    public static void main(String[] args) {
        int number = 121;
        boolean isPalindrome = checkPalindrome(number);
        System.out.println(number + " is a palindrome: " + isPalindrome);
    }

    static boolean checkPalindrome(int num) {
        int original = num, reversed = 0;
        while (num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        return original == reversed;
    }
}

            `,
            output:
            `
121 is a palindrome: true

            `
        },
        "Java method to displays prime numbers between 1 to 20!!":
        {
            description:"Write a Java method to displays prime numbers between 1 to 20",
            code : 
            `
class PrimeNumbersBetween {
    public static void main(String[] args) {
        System.out.println("Prime numbers between 1 and 20:");
        displayPrimeNumbers(20);
    }

    static void displayPrimeNumbers(int n) {
        for (int num = 2; num &lt;= n; num++) {
            boolean isPrime = true;
            for (int i = 2; i &lt;= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.print(num + " ");
            }
        }
    }
}

            `,
            output:
            `
Prime numbers between 1 and 20:
2 3 5 7 11 13 17 19 

            `
        },
        "Java method to find GCD and LCM of Two Numbers!!":
        {
            description:"Write a Java program to Java method to find GCD and LCM of Two Numbers",
            code : 
            `
class GCDLCM {
    public static void main(String[] args) {
        int a = 12, b = 18;
        int gcd = findGCD(a, b);
        int lcm = findLCM(a, b, gcd);
        System.out.println("GCD of " + a + " and " + b + " is: " + gcd);
        System.out.println("LCM of " + a + " and " + b + " is: " + lcm);
    }

    static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    static int findLCM(int a, int b, int gcd) {
        return (a * b) / gcd;
    }
}

            `,
            output:
            `
GCD of 12 and 18 is: 6
LCM of 12 and 18 is: 36

            `
        },
        "Java method to find factorial using recursion in java!!":
        {
            description:"Write a Java program to Java method to find factorial using recursion in java",
            code : 
            `
class FactorialRecursion {
    public static void main(String[] args) {
        int number = 5;
        int factorial = findFactorial(number);
        System.out.println("Factorial of " + number + " is: " + factorial);
    }

    static int findFactorial(int num) {
        if (num == 0) {
            return 1;
        }
        return num * findFactorial(num - 1);
    }
}

            `,
            output:
            `
Factorial of 5 is: 120

            `
        },
        "reverse an integer number!!":
        {
            description:"Write a Java program to reverse an integer number",
            code : 
            `
class ReverseInteger {
    public static void main(String[] args) {
        int number = 12345;
        int reversed = reverseNumber(number);
        System.out.println("Reversed number: " + reversed);
    }

    static int reverseNumber(int num) {
        int reversed = 0;
        while (num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        return reversed;
    }
}

            `,
            output:
            `
Reversed number: 54321

            `
        },
        "round a float number to specified decimals!!":
        {
            description:"Write a Java program to round a float number to specified decimals",
            code : 
            `
class RoundFloat {
    public static void main(String[] args) {
        float number = 12.34567f;
        float rounded = roundToDecimal(number, 2);
        System.out.println("Rounded number: " + rounded);
    }

    static float roundToDecimal(float num, int decimalPlaces) {
        return (float) (Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces));
    }
}

            `,
            output:
            `
Rounded number: 12.35

            `
        },
        "test if a double number is an integer!!":
        {
            description:"Write a Java program to test if a double number is an integer",
            code : 
            `
class TestDoubleInteger {
    public static void main(String[] args) {
        double number = 10.0;
        boolean isInteger = isInteger(number);
        System.out.println(number + " is an integer: " + isInteger);
    }

    static boolean isInteger(double num) {
        return num % 1 == 0;
    }
}

            `,
            output:
            `
10.0 is an integer: true

            `
        },
        "round up the result of integer division!!":
        {
            description:"Write a Java program to round up the result of integer division",
            code : 
            `
class RoundUpDivision {
    public static void main(String[] args) {
        int dividend = 7;
        int divisor = 3;
        int roundedUpResult = roundUpDivision(dividend, divisor);
        System.out.println("Rounded up result of " + dividend + " / " + divisor + " is: " + roundedUpResult);
    }

    static int roundUpDivision(int num1, int num2) {
        return (num1 + num2 - 1) / num2; // Equivalent to ceil(num1 / num2)
    }
}

            `,
            output:
            `
Rounded up result of 7 / 3 is: 3

            `
        },
        "convert Roman number to an integer number!!":
        {
            description:"Write a Java program to convert Roman number to an integer number",
            code : 
            `
 class RomanToInteger {
    public static void main(String[] args) {
        String roman = "XIV";
        int integer = romanToInt(roman);
        System.out.println("Roman numeral " + roman + " is equal to " + integer);
    }

    static int romanToInt(String s) {
        int total = 0;
        int prevValue = 0;
        for (char ch : s.toCharArray()) {
            int value = romanCharValue(ch);
            total += value;
            if (value &lt; prevValue) {
                total -= 2 * prevValue; // Adjust for previously added value
            }
            prevValue = value;
        }
        return total;
    }

    static int romanCharValue(char ch) {
        switch (ch) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}

            `,
            output:
            `
Roman numeral XIV is equal to 14

            `
        },
        "convert a float value to absolute value!!":
        {
            description:"Write a Java program to convert a float value to absolute value",
            code : 
            `
class AbsoluteValue {
    public static void main(String[] args) {
        float number = -15.5f;
        float absolute = absoluteValue(number);
        System.out.println("Absolute value of " + number + " is: " + absolute);
    }

    static float absoluteValue(float num) {
        return Math.abs(num);
    }
}

            `,
            output:
            `
Absolute value of -15.5 is: 15.5

            `
        },
        "accept a float value of number and return a rounded float value":
        {
            description:"Write a Java program to accept a float value of number and return a rounded float value",
            code : 
            `
class RoundedFloat {
    public static void main(String[] args) {
        float number = 12.6789f;
        float rounded = roundFloat(number);
        System.out.println("Rounded float: " + rounded);
    }

    static float roundFloat(float num) {
        return Math.round(num);
    }
}

            `,
            output:
            `
Rounded float: 13.0

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
      "How to convert String to int": {
          description: "Program to convert String to int",
          code: `
        code//
`,
                output: `
                output//
                `
      },
      "How to convert int to String": {
          description: "Program to convert int to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },

      "How to convert String to long": {
          description: "Program to convert String to long",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert long to String": {
          description: "Program to convert long to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert String to float": {
          description: "Program to convert String to float",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert float to String": {
          description: "Program to convert float to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert String to double": {
          description: "Program to convert String to double",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert double to String": {
          description: "Program to convert double to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert String to Date": {
          description: "Program to convert String to Date",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Date to String": {
          description: "Program to convert Date to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert String to char": {
          description: "Program to convert String to char",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert char to String": {
          description: "Program to convert char to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert String to Object": {
          description: "Program to convert String to Object",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Object to String": {
          description: "Program to convert Object to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert int to long": {
          description: "Program to convert int to long",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert long to int": {
          description: "Program to convert long to int",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert int to double": {
          description: "Program to convert int to double",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert double to int": {
          description: "Program to convert double to int",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert char to int": {
          description: "Program to convert char to int",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert int to char": {
          description: "Program to convert int to char",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert String to boolean": {
          description: "Program to convert String to boolean",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert boolean to String": {
          description: "Program to convert boolean to String",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Date to Timestamp": {
          description: "Program to convert Date to Timestamp",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Timestamp to Date": {
          description: "Program to convert Timestamp to Date",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Binary to Decimal": {
          description: "Program to convert Binary to Decimal",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Decimal to Binary": {
          description: "Program to convert Decimal to Binary",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Hex to Decimal": {
          description: "Program to convert Hex to Decimal",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Decimal to Hex": {
          description: "Program to convert Decimal to Hex",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Octal to Decimal": {
          description: "Program to convert Octal to Decimal",
          code: `
        code//
`,
                output: `
                output//
                `
      },
"How to convert Decimal to Octal": {
          description: "Program to convert Decimal to Octal",
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
      "Display Some Text in the Frame using Labels": {
          description: "Program to display Some Text in the Frame using Labels",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create Text Area and Password Field": {
          description: "Program to create Text Area and Password Field",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create a Button and Display Image in the Frame when Clicked": {
          description: "Program to Create a Button and Display Image in the Frame when Clicked",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create 2 Radio Buttons and Display Selected Button Label": {
          description: "Program to Create 2 Radio Buttons and Display Selected Button Label",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Handle KeyBoardEvent": {
          description: "Program to Handle KeyBoardEvent",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Handle MouseEvent": {
          description: "Program to Handle MouseEvent",
          code: `
code//

`,
                output: `
                output//
    
                `
      },

      "Get and Set State and Get Label of a Check Box": {
          description: "Program to Get and Set State and Get Label of a Check Box",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create Check Boxes and Radio Buttons": {
          description: "Program to Create Check Boxes and Radio Buttons",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create and Switch between Frames using Buttons": {
          description: "Program to Create and Switch between Frames using Buttons",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create and Set Border to Push Buttons": {
          description: "Program to Create and Set Border to Push Buttons",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Create a List Box to Select Multiple Items and Display it in the Frame": {
          description: "Program to Create a List Box to Select Multiple Items and Display it in the Frame",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Display a Message in a New Frame": {
          description: "Program to Display a Message in a New Frame",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Close the Frame using WindowAdapter Class": {
          description: "Program to Close the Frame using WindowAdapter Class",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Check Which Fonts are Available in a Local System": {
          description: "Program to Check Which Fonts are Available in a Local System",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Display Text in Different Fonts": {
          description: "Program to Display Text in Different Fonts",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Change Frame Background Color as Cyan": {
          description: "Program to Change Frame Background Color as Cyan",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Change the Applet Background Colour when Button Clicked": {
          description: "Program to Change the Applet Background Colour when Button Clicked",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Display Several Dots on the Screen Continuously": {
          description: "Program to Display Several Dots on the Screen Continuously",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Validate the TextField for only entering numbers using KeyListener": {
          description: "Program to Validate the TextField for only entering numbers using KeyListener",
          code: `
code//

`,
                output: `
                output//
    
                `
      },
      "Validate the TextField for only entering email id using KeyAdapter": {
          description: "Program to Validate the TextField for only entering email id using KeyAdapter",
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
          description: "Program to comming soon",
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
class Excep1
        {
        public static void main(String st[])
        {
        try{
        System.out.println(st[0]);
        }
        catch (ArrayIndexOutOfBoundsException e)
        {
        System.out.println("kindly please give some argument");
        }
        }
        }

`,
                output: `
kindly please give some argument
                `
      },
      "create a method that takes an integer as a parameter and throws an exception if the number is odd.": {
        description: "Program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
        code: `
// Custom exception class for Odd Number Exception
class OddNumberException extends Exception {
    public OddNumberException(String message) {
        super(message);
    }
}

public class OddNumberChecker {

    // Method that throws an exception if the number is odd
    public static void checkEvenNumber(int number) throws OddNumberException {
        if (number % 2 != 0) {
            throw new OddNumberException("The number " + number + " is odd.");
        } else {
            System.out.println("The number " + number + " is even.");
        }
    }

    public static void main(String[] args) {
        int numberToCheck = 5; // Change this value to test with different numbers
        
        try {
            // Call the method to check if the number is even
            checkEvenNumber(numberToCheck);
        } catch (OddNumberException e) {
            // Handle the exception and print the message
            System.out.println(e.getMessage());
        }
    }
}


`,
              output: `
The number 5 is odd.

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
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

// Custom exception for database connection failure
class DatabaseConnectionException extends Exception {
    public DatabaseConnectionException(String message) {
        super(message);
    }
}

public class DriverManagerExample {

    // Method to load driver and connect to the database
    public static void connectToDatabase(String driver, String url, String username, String password) throws DatabaseConnectionException {
        Connection connection = null;
        try {
            // Load the database driver
            Class.forName(driver);
            
            // Attempt to establish a connection
            connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connection established successfully!");
        } catch (ClassNotFoundException e) {
            // Handle the case where the driver class is not found
            throw new DatabaseConnectionException("Database driver not found: " + driver);
        } catch (SQLException e) {
            // Handle SQL errors related to connection
            throw new DatabaseConnectionException("Failed to connect to the database. Check your URL, username, or password.");
        } finally {
            // Close the connection if it was successfully created
            if (connection != null) {
                try {
                    connection.close();
                    System.out.println("Connection closed.");
                } catch (SQLException e) {
                    System.out.println("Failed to close the connection.");
                }
            }
        }
    }

    public static void main(String[] args) {
        String driver = "com.mysql.cj.jdbc.Driver";      // MySQL JDBC driver
        String url = "jdbc:mysql://localhost:3306/mydb"; // Database URL (adjust accordingly)
        String username = "root";                        // Database username
        String password = "manjit";                    // Database password

        try {
            // Attempt to connect to the database
            connectToDatabase(driver, url, username, password);
        } catch (DatabaseConnectionException e) {
            // Catch and handle the custom exception
            System.out.println("Error: " + e.getMessage());
        }
    }
}


`,
              output: `
Connection established successfully!
Connection closed.

              `
    },
    "throw the SQL Query, insert, delete, update, if not successful then throw an exception": {
        description: "Program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
        code: `
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

// Custom exception for SQL query failure
class SQLQueryException extends Exception {
    public SQLQueryException(String message) {
        super(message);
    }
}

public class SQLQueryHandler {

    // Method to establish database connection
    public static Connection connectToDatabase() throws SQLException {
        String url = "jdbc:mysql://localhost:3306/mydb"; // Database URL
        String username = "root";                        // Database username
        String password = "password";                    // Database password
        return DriverManager.getConnection(url, username, password);
    }

    // Method to insert data into a table
    public static void insertData(Connection connection, String query, String[] params) throws SQLQueryException {
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            for (int i = 0; i < params.length; i++) {
                preparedStatement.setString(i + 1, params[i]);
            }
            int rowsAffected = preparedStatement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Insert successful.");
            } else {
                throw new SQLQueryException("Insert failed.");
            }
        } catch (SQLException e) {
            throw new SQLQueryException("Insert operation failed: " + e.getMessage());
        }
    }

    // Method to update data in a table
    public static void updateData(Connection connection, String query, String[] params) throws SQLQueryException {
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            for (int i = 0; i < params.length; i++) {
                preparedStatement.setString(i + 1, params[i]);
            }
            int rowsAffected = preparedStatement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Update successful.");
            } else {
                throw new SQLQueryException("Update failed.");
            }
        } catch (SQLException e) {
            throw new SQLQueryException("Update operation failed: " + e.getMessage());
        }
    }

    // Method to delete data from a table
    public static void deleteData(Connection connection, String query, String[] params) throws SQLQueryException {
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            for (int i = 0; i < params.length; i++) {
                preparedStatement.setString(i + 1, params[i]);
            }
            int rowsAffected = preparedStatement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Delete successful.");
            } else {
                throw new SQLQueryException("Delete failed.");
            }
        } catch (SQLException e) {
            throw new SQLQueryException("Delete operation failed: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        try {
            // Connect to the database
            Connection connection = connectToDatabase();

            // Example 1: Insert Operation
            String insertQuery = "INSERT INTO users (name, email) VALUES (?, ?)";
            String[] insertParams = {"Manjit", "manjitit33@gmail.com"};
            insertData(connection, insertQuery, insertParams);

            // Example 2: Update Operation
            String updateQuery = "UPDATE users SET email = ? WHERE name = ?";
            String[] updateParams = {"newemail@example.com", "John Doe"};
            updateData(connection, updateQuery, updateParams);

            // Example 3: Delete Operation
            String deleteQuery = "DELETE FROM users WHERE name = ?";
            String[] deleteParams = {"Manjit"};
            deleteData(connection, deleteQuery, deleteParams);

            // Close the connection after operations
            connection.close();

        } catch (SQLException e) {
            System.out.println("Database connection failed: " + e.getMessage());
        } catch (SQLQueryException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}


`,
              output: `
Insert successful.
Update successful.
Delete successful.

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
C:\\&gt;java exception13.Exception13 a
Please Enter an Integer value!
              `
    },
      
  },
  "Medium": {
    
  },
  "Hard": {
     
  }
},
"FUNCTIONS": {
  "Easy": {
      "to find the smallest number among three numbers.": {
          description: "Write a Java method to to find the smallest number among three numbers.",
          code: `
 package findsmallest;
class FindSmallest 
        {
            private int num1,num2,num3;
            void setNum1(int num)
            {
                 num1=num;
            }
            void setNum2(int num)
            {
                 num2=num;
            }
            void setNum3(int num)
            {
                 num3=num;
            }
            int getNum1()
            {
                 return num1;
            }
            int getNum2()
            {
                 return num2;
            }
            int getNum3()
            {
                 return num3;
            }
            int findSmallest()
            {
    
                if(num1==num2 && num2==num3)
                {
                    System.out.println("Number are same !");
                    return num1;
                }
                if(num1&lt;num2)
                {
                    if(num1&lt;num3)
                    {
                        return num1;
                    }
                    else if(num3&lt;num2)
                    {
                        return num3;
                    }
                    else 
                    {
                        return num2;
                    }
                }
                else if(num2&lt;num3)
                    {
                        return num2;
                    }
                    else
                    return num3;
            }
            public static void main(String st[])
            {
                FindSmallest obj = new FindSmallest();
                obj.setNum1(4);
                obj.setNum2(5);
                obj.setNum3(2);
                int small =obj.findSmallest();
                System.out.println(obj.getNum1() + " "+obj.getNum2() + " "+obj.getNum3() + "&bsol;n Smallest Number is : "+ small);
            }
        }
            `
    ,
                output: `
 4 5 2
 Smallest Number is : 2
                `
      },
      "compute the average of three numbers.": {
          description: "Write a Java method to compute the average of three numbers.",
          code: `
package average;
class Average 
        {
            private int num1,num2,num3;
            void setNum1(int num)
            {
                 num1=num;
            }
            void setNum2(int num)
            {
                 num2=num;
            }
            void setNum3(int num)
            {
                 num3=num;
            }
            int getNum1()
            {
                 return num1;
            }
            int getNum2()
            {
                 return num2;
            }
            int getNum3()
            {
                 return num3;
            }
            float average()
            {
                return (num1+num2+num3)/3;
            }
            public static void main(String st[])
            {
                Average obj = new Average();
                obj.setNum1(4);
                obj.setNum2(5);
                obj.setNum3(6);
                System.out.println(obj.getNum1() + " "+obj.getNum2() + " "+obj.getNum3() + "&bsol;n Average is : "+ obj.average());
            }
        }
            `
    ,
                output: `
 4 5 6
 Average is : 5.0
                `
      },
      "display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.": {
          description: "Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.",
          code: `
public class MidChar {
   static void midChar(String s)
    {
        if ((s.length()%2)==0) {
                int mid1 = ((s.length())/2)-1;
                int mid2 = (s.length()/2);
            System.out.println(s.charAt(mid1));
            System.out.println(s.charAt(mid2));
        }
        else
        {
            int mid = ((s.length())/2);
            System.out.println(s.charAt(mid));
        }
    
    }
    public static void main(String[] args) {
        String str = "Manjit";
        midChar(str);
    }
}

            `
    ,
                output: `
 n
 j
                `
      },
      "count all the words in a string.": {
          description: "Write a Java method to count all the words in a string.",
          code: `
package countwords;
class CountWords 
        {
            private String str;
            void setStr(String Str)
            {
                str=Str;
            }
            String getStr()
            {
                return str;
            }
            int countWords()
            {
                int count=0;
                //int wordfound =0;
                for(int i=0; i&lt;str.length();i++)
                {
                    char c = str.charAt(i);
                    if (i==0 && c!= ' ')
                    {
                        count+=1;
                    }
                    if(c ==' ' || c == '&bsol;t' || c=='&bsol;n' ) 
                    {
                        if(str.charAt(i+1)!=' ')
                        {
                            count++;
                        }
                    }

                }
                return count;
            }
            public static void main(String st[])
            {
                CountWords obj=new CountWords();
                obj.setStr("My name is Manjit");
                System.out.println("No of word in sentance : "+obj.getStr()+"&bsol;n"+obj.countWords());
            }
        }
            `
    ,
                output: `
No of word in sentance : My name is Manjit
4
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
package printchar;
class PrintChar
{
    private char firstChar,lastChar;
    void setFirstChar(char c)
    {
        firstChar=c;
    }
    void setLastChar(char c)
    {
        lastChar=c;
    }
    char getFirstChar()
    {
        return firstChar;
    }
    char getLastChar()
    {
        return lastChar;
    }
    void printChar(char c1,char c2)
    {
        char i;
        for(i=c1;i&lt;c2;i++)
        {
            System.out.println(i);
        }
    }
    public static void  main(String st[])
    {
        PrintChar obj = new PrintChar();
        obj.setFirstChar('M');
        obj.setLastChar('Q');
        char a = obj.getFirstChar();
        char b = obj.getLastChar();
        obj.printChar(a,b);
    }
}
            `
    ,
                output: `
M
N
O
P
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
public class NumDigit {
   static void numDigit(int num)
    {
        int count=0,temp;
        while (num>0) {
            
            temp = num%10;
            if (temp==2) {
                count++;
            } 
            num/=10;

        }
        System.out.println("count "+count);
    }
    public static void main(String[] args) {
        numDigit(12322);
    }
}

            `
    ,
                output: `
count 3
                `
      },
      "accepts three integers and checks whether they are consecutive or not. Returns true or false": {
          description: "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
          code: `
public class ThreeInt {
    boolean consecutive(int a,int b,int c)
    {
        if (++a==b && ++b==c) {
            return true;
        }
        else
        {
            return false;
        }
        
    }
    public static void main(String[] args) {
        int num1=2,num2=3,num3=4;
        boolean cons = new ThreeInt().consecutive(num1, num2, num3);
        System.out.println(cons);
    }
}

            `
    ,
                output: `
true
                `
      },
      "that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false": {
          description: "Write a Java method to that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",
          code: `
public class MidPoint {
     boolean midPoint(int a,int b,int c)
    {
        if (++a==b && --c==b) {
            return true;
        }
        else
        {
            return false;
        }
        
    }
    public static void main(String[] args) {
        int num1=2,num2=3,num3=4;
        boolean mid = new MidPoint().midPoint(num1, num2, num3);
        System.out.println(mid);
    }
}

            `
    ,
                output: `
true
                `
      },
      "that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false": {
          description: "Write a Java method to that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false.",
          code: `
public class Vowel {
    boolean isVowel(String s)
    {
        boolean isVowel = false;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c=='a' || c =='A' || c=='i' || c == 'I' || c =='e' || c=='E' || c=='o' || c=='O' || c=='u' || c=='U') {
                isVowel =true;
            }
            else
            {
                isVowel = false;
                break;
            }
        }
        return isVowel;
    }
    public static void main(String[] args) {
        boolean vowel = new Vowel().isVowel("aio");
        System.out.println(vowel);
    }
}

            `
    ,
                output: `
true
                `
      },
      
  },
  "Medium": {
     
  },
  "Hard": {
     
  }
},
"GRAPHICAL USER INTERFACE (AWT)": {
  "Easy": {
      "Create a simple AWT application that displays a button with FlowLayout manager.": {
          description: "Program to Create a simple AWT application that displays a button with FlowLayout manager.",
          code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Button b1 = new Button("Click me");
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(new FlowLayout(FlowLayout.CENTER));
        add(b1);
        setVisible(true);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}


`,
                output: `
                output//
    
                `
      },
      "Create a simple AWT application that displays a button with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a button with Custom Layout.",
        code: `

import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Button b1 = new Button("Click me");
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(null);
        b1.setBounds(100,100,50,30);
        add(b1);
        
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).": {
        description: "Program to Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Button b1 = new Button("Click me");
    Button b2 = new Button("Click me");
    Button b3 = new Button("Click me");
    Button b4 = new Button("Click me");
    Button b5 = new Button("Click me");
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(new BorderLayout(10,10));
        
        //b1.setBounds(100,100,50,30);
        add(b1,BorderLayout.EAST);
        add(b2,BorderLayout.NORTH);
        add(b3,BorderLayout.WEST);
        add(b4,BorderLayout.SOUTH);
        add(b5,BorderLayout.CENTER);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a TextField with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a TextField with FlowLayout manager.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    TextField tf = new TextField();
    MyFrame()
    {
        setBounds(100,100,500,400);
        setLayout(new FlowLayout(FlowLayout.CENTER));
        tf.setBounds(100, 100, 500, 50);;
        add(tf);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}
`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a TextField with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a TextField with Custom Layout.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    TextField tf = new TextField();
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(null);
        tf.setBounds(100,100,500,100);
        add(tf);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}
`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a Checkbox with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a Checkbox with FlowLayout manager.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Checkbox cb = new Checkbox();
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(new FlowLayout(FlowLayout.LEFT));
        add(cb);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}


`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a Checkbox with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a Checkbox with Custom Layout.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Checkbox cb = new Checkbox();
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(null);
        cb.setBounds(100, 100, 50, 50);
        add(cb);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a Label with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a Label with FlowLayout manager.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Label l1 = new Label("This is Label");
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(new FlowLayout(FlowLayout.LEFT));
        add(l1);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}


`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a Label with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a Label with Custom Layout.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Label l1 = new Label("This is Label");
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(null);
        l1.setBounds(100,100,100,50);
        add(l1);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}


`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a Choice with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a Choice with FlowLayout manager.",
        code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Choice ch = new Choice();
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(new FlowLayout(FlowLayout.LEFT));
        ch.setBounds(100,100,100,50);
        ch.addItem("Apple");
        ch.addItem("Mango");
        ch.addItem("Orange");
        ch.addItem("Grapes");
        ch.addItem("Pear");
        ch.addItem("Coconut");
        add(ch);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}



`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a Choice with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a Choice with Custom Layout.",
        code: `
package awt10;
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Choice ch = new Choice();
    MyFrame()
    {
        setBounds(100,100,200,400);
        setLayout(null);
        ch.setBounds(100,100,100,50);
        ch.addItem("Apple");
        ch.addItem("Mango");
        ch.addItem("Orange");
        ch.addItem("Grapes");
        ch.addItem("Pear");
        ch.addItem("Coconut");
        add(ch);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e)
            {
                System.exit(1);
            }
        });
        setVisible(true);
    }
} 
 class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}



`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a CheckboxGroup with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a CheckboxGroup with Custom Layout.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a List with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a List with FlowLayout manager.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a List with Custom": {
        description: "Program to Create a simple AWT application that displays a List with Custom",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a TextArea with FlowLayout manager.": {
        description: "Program to Create a simple AWT application that displays a TextArea with FlowLayout manager.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application that displays a TextArea with Custom Layout.": {
        description: "Program to Create a simple AWT application that displays a TextArea with Custom Layout.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.": {
        description: "Program to Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.",
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
 abstract class Animal
{
    abstract void sound();
}
class Tiger extends Animal
{
    public void sound()
    {
        System.out.println("Tiger sound");
    }
}
class Lion extends Animal
{
    public void sound()
    {
        System.out.println("Lion sound");
    }
}
class Main
{
    public static void main(String[] args) {
        Animal lion,tiger;
        lion = new Lion();
        lion.sound();
        tiger = new Tiger();
        tiger.sound();

    }
}

`,
                output: `
Lion sound
Tiger sound
                `
      },
      "Create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.": {
          description: "JAVA Program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
          code: `
abstract class Shape
        {
            abstract double calculatePerimeter();
            abstract double calculateArea();
        }
class Circle extends Shape
    {
         private double radius;

    public Circle(double r) {
        radius = r;
    }
    double calculateArea() {
        return Math.PI * radius * radius; // Area = π * r^2
    }
    double calculatePerimeter() {
        return 2 * Math.PI * radius; // Perimeter = 2 * π * r
    }
    }
class Triangle extends Shape
            {
                 private double side1;
    private double side2;
    private double side3;

    // Constructor for Triangle
    public Triangle(double s1, double s2, double s3) {
        side1 = s1;
        side2 = s2;
        side3 = s3;
    }

    
    double calculateArea() {
        double s = (side1 + side2 + side3) / 2; 
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); // Area using Heron's formula
    }

   
    double calculatePerimeter() {
        return side1 + side2 + side3; 
    }
            }
class Main
        {
            public static void main(String st[])
                {
        Shape circle = new Circle(5);
        System.out.println("Circle Area: " + circle.calculateArea());
        System.out.println("Circle Perimeter: " + circle.calculatePerimeter());

        System.out.println(); 

        
        Shape triangle = new Triangle(3, 4, 5);
        System.out.println("Triangle Area: " + triangle.calculateArea());
        System.out.println("Triangle Perimeter: " + triangle.calculatePerimeter());
                }
        }

`,
                output: `
Circle Area: 78.53981633974483
Circle Perimeter: 31.41592653589793

Triangle Area: 6.0
Triangle Perimeter: 12.0
                `
      },
      "Create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.": {
          description: "JAVA Program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
          code: `
abstract class BankAccount {
    protected double balance;
    public BankAccount(double balance) {
        this.balance = balance;
    }
    abstract void deposit(double amount);
    abstract void withdraw(double amount);

    public double getBalance() {
        return balance;
    }
}


class SavingsAccount extends BankAccount {
    private final double interestRate = 0.03; 

    // Constructor to initialize balance
    public SavingsAccount(double balance) {
        super(balance);
    }

    void deposit(double amount) {
        if (amount &gt; 0) {
            balance += amount;
            balance += balance * interestRate; 
            System.out.println("Deposited: " + amount + " into Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    void withdraw(double amount) {
        if (amount &gt; 0 && amount &lt;= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount + " from Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Insufficient balance or invalid amount.");
        }
    }
}


class CurrentAccount extends BankAccount {
    private final double overdraftLimit = 1000; 

    
    public CurrentAccount(double balance) {
        super(balance);
    }

    void deposit(double amount) {
        if (amount &gt; 0) {
            balance += amount;
            System.out.println("Deposited: " + amount + " into Current Account. New Balance: " + balance);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

   
    void withdraw(double amount) {
        if (amount &gt; 0 && (balance - amount) &gt;= -overdraftLimit) {
            balance -= amount;
            System.out.println("Withdrew: " + amount + " from Current Account. New Balance: " + balance);
        } else {
            System.out.println("Overdraft limit exceeded or invalid amount.");
        }
    }
}


public class Main {
    public static void main(String[] args) {
        BankAccount savings = new SavingsAccount(500);
        savings.deposit(200);
        savings.withdraw(100);

        BankAccount current = new CurrentAccount(1000);
        current.deposit(300);
        current.withdraw(1500); 
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
      "Create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.": {
          description: "JAVA Program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
          code: `
abstract class Animal
        {
            abstract void eat();
            abstract void sleep();
        }
class Lion extends Animal
    {
        void eat() 
                {
        System.out.println("Lion is eating meat.");
                }
        void sleep() 
                {
        System.out.println("Lion sleeps for about 20 hours a day.");
                }
    }
class Tiger extends Animal
        {
        void eat()
                {
        System.out.println("Tiger is eating meat.");
                }
        void sleep() 
                {
        System.out.println("Tiger sleeps for about 16 hours a day.");
                }
        }
class Deer extends Animal
        {
        void eat() 
                {
        System.out.println("Deer is eating meat.");
                }
        void sleep() 
                {
        System.out.println("Deer sleeps for about 4 hours a day.");
                }
        }
class Main
        {
            public static void main(String st[])
                    {
                        Animal lion = new Lion();
                        lion.eat();
                        lion.sleep();
                
                        Animal tiger = new Tiger();
                        tiger.eat();
                        tiger.sleep();
                
                        Animal deer = new Deer();
                        deer.eat();
                        deer.sleep();
                    }
        }


`,
                output: `
Lion is eating meat.
Lion sleeps for about 20 hours a day.
Tiger is eating meat.
Tiger sleeps for about 16 hours a day.
Deer is eating meat.
Deer sleeps for about 4 hours a day.
                `
      },
      "create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.": {
          description: "JAVA Program to create an abstracWrite a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
          code: `
abstract class Employee {
    protected String name;
    protected int employeeId;
    protected double baseSalary;

    
    public Employee(String n, int empId, double bSalary) {
        name = n;
        employeeId = empId;
        baseSalary = bSalary;
    }

    
    abstract double calculateSalary();
    abstract void displayInfo();
}


class Manager extends Employee {
    private double bonus;

    /
    public Manager(String name, int employeeId, double baseSalary, double b) {
        super(name, employeeId, baseSalary);
        bonus = b;
    }

    
    double calculateSalary() {
        return baseSalary + bonus; 
    }

    
    void displayInfo() {
        System.out.println("Manager Name: " + name);
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Base Salary: Rs" + baseSalary);
        System.out.println("Bonus: Rs" + bonus);
        System.out.println("Total Salary: Rs" + calculateSalary());
    }
}


class Programmer extends Employee {
    private double overtimeRate;
    private int overtimeHours;

    
    public Programmer(String name, int employeeId, double baseSalary, double otRate, int otHours) {
        super(name, employeeId, baseSalary);
        overtimeRate = otRate;
        overtimeHours = otHours;
    }

    
    double calculateSalary() {
        return baseSalary + (overtimeRate * overtimeHours); 
    }

    
    void displayInfo() {
        System.out.println("Programmer Name: " + name);
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Base Salary: Rs" + baseSalary);
        System.out.println("Overtime Rate: Rs" + overtimeRate + " per hour");
        System.out.println("Overtime Hours: " + overtimeHours);
        System.out.println("Total Salary: Rs" + calculateSalary());
    }
}


public class Main {
    public static void main(String[] args) {
        
        Manager manager = new Manager("Manjit", 101, 90000, 15000);
        manager.displayInfo();

        System.out.println(); 

        
        Programmer programmer = new Programmer("Sandeep", 102, 60000, 40, 10);
        programmer.displayInfo();
    }
}


`,
                output: `
Manager Name: Manjit
Employee ID: 101
Base Salary: Rs. 90000.0
Bonus: Rs. 15000.0
Total Salary: Rs. 105000.0

Programmer Name: Sandeep
Employee ID: 102
Base Salary: Rs. 60000.0
Overtime Rate: Rs. 40.0 per hour
Overtime Hours: 10
Total Salary: Rs. 60400.0
                `
      },
      "Create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape": {
          description: "JAVA Program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",
          code: `
abstract class Shape3D {
    
    abstract double calculateVolume();
    abstract double calculateSurfaceArea();
}


class Sphere extends Shape3D {
    private double radius;


    public Sphere(double r) {
        radius = r;
    }

    
    double calculateVolume() {
        return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3); 
    }

    
    double calculateSurfaceArea() {
        return 4 * Math.PI * Math.pow(radius, 2); 
    }
}

class Cube extends Shape3D {
    private double side;

    
    public Cube(double s) {
        side = s;
    }

   
    double calculateVolume() {
        return Math.pow(side, 3); // Volume = side^3
    }

    
    double calculateSurfaceArea() {
        return 6 * Math.pow(side, 2); // Surface Area = 6 * side^2
    }
}


class Main {
    public static void main(String[] args) {
        
        Shape3D sphere = new Sphere(5);
        System.out.println("Sphere Volume: " + sphere.calculateVolume());
        System.out.println("Sphere Surface Area: " + sphere.calculateSurfaceArea());

        System.out.println(); 

        
        Shape3D cube = new Cube(4);
        System.out.println("Cube Volume: " + cube.calculateVolume());
        System.out.println("Cube Surface Area: " + cube.calculateSurfaceArea());
    }
}


`,
                output: `
Sphere Volume: 523.5987755982989
Sphere Surface Area: 314.1592653589793

Cube Volume: 64.0
Cube Surface Area: 96.0
                `
      },
      "Create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.": {
          description: "JAVA Program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
          code: `
abstract class Vehicle
        {
            abstract String startEngine();
            abstract String stopEngine();
        }
class Car extends Vehicle
        {
            String startEngine()
            {
                return "Engine Started";
            }
            String stopEngine()
            {
                return "Engine Stoped";
            }
        }
class Motorcycle extends Vehicle
        {
             String startEngine()
            {
                return "Engine Started";
            }
            String stopEngine()
            {
                return "Engine Stoped";
            }
        }
class Main
        {
            public static void main(String st[])
                {
                    Vehicle obj = new Car();
                    System.out.println("Car "+obj.startEngine());
                    System.out.println("Car "+obj.stopEngine());
                    Vehicle obj2 = new Motorcycle();
                    System.out.println("Motorcycle "+obj2.startEngine());
                    System.out.println("Motorcycle "+obj2.stopEngine());
                }
        }
`,
                output: `
Car Engine Started
Car Engine Stoped
Motorcycle Engine Started
Motorcycle Engine Stoped
                `
      },
      "Create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.": {
          description: "JAVA Program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
          code: `
abstract class Person
        {
            abstract void eat();
            abstract void exercise();
        }
class Athlete extends Person
        {
                public void eat() {
        System.out.println("The Athlete eats a balanced diet with lots of protein, vegetables, and healthy carbs.");
    }
    public void exercise() {
        System.out.println("The Athlete exercises daily, with intense cardio, strength training, and endurance activities.");
    }

        }
class LazyPerson extends Person
        {
            public  void eat() {
        System.out.println("The LazyPerson prefers fast food and snacks while watching TV or lounging on the couch.");
    }
    public void exercise() {
        System.out.println("The LazyPerson rarely exercises, opting instead for naps and minimal physical activity.");
    }
        }
class Main
        {
            public static void main(String st[])
            {
        Person athlete = new Athlete();
        athlete.eat();
        athlete.exercise();

        System.out.println(); // Just for spacing

        
        Person lazyPerson = new LazyPerson();
        lazyPerson.eat();
        lazyPerson.exercise();
            }
        }

`,
                output: `
The Athlete eats a balanced diet with lots of protein, vegetables, and healthy carbs.
The Athlete exercises daily, with intense cardio, strength training, and endurance activities.

The LazyPerson prefers fast food and snacks while watching TV or lounging on the couch.
The LazyPerson rarely exercises, opting instead for naps and minimal physical activity.
                `
      },
      "Create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.": {
          description: "JAVA Program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
          code: `
abstract class Instrument
            {
                abstract void play();
                abstract void tune();
            }
class Glockenspiel extends Instrument
            {
                public  void play() {
        System.out.println("Playing the Glockenspiel with mallets, producing a bright, metallic sound.");
    }
    public  void tune() {
        System.out.println("Tuning the Glockenspiel by adjusting the bars to the correct pitch.");
    }
            }
class Violin extends Instrument 
            {
                public  void play() {
        System.out.println("Playing the Violin with a bow, producing smooth, melodious sounds.");
    }
    public  void tune() {
        System.out.println("Tuning the Violin by adjusting the tension of the strings.");
    }
            }
class Main
        {
            public static void main(String st[])
                {
        Instrument glockenspiel = new Glockenspiel();
        glockenspiel.play();
        glockenspiel.tune();

        System.out.println(); 

        
        Instrument violin = new Violin();
        violin.play();
        violin.tune();
                }
        }

`,
                output: `
Playing the Glockenspiel with mallets, producing a bright, metallic sound.
Tuning the Glockenspiel by adjusting the bars to the correct pitch.

Playing the Violin with a bow, producing smooth, melodious sounds.
Tuning the Violin by adjusting the tension of the strings.
                `
      },
      "Create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.": {
          description: "JAVA Program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
          code: `
abstract class Shape2D {
   
    abstract void draw();
    abstract void resize(double factor);
}


class Rectangle extends Shape2D {
    private double width;
    private double height;

    // Constructor for Rectangle
    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    
    void draw() {
        System.out.println("Drawing a Rectangle with width " + width + " and height " + height);
    }

    
    void resize(double factor) {
        width *= factor;
        height *= factor;
        System.out.println("Resized Rectangle to width " + width + " and height " + height);
    }
}


class Circle extends Shape2D {
    private double radius;

    
    public Circle(double radius) {
        this.radius = radius;
    }

   
    void draw() {
        System.out.println("Drawing a Circle with radius " + radius);
    }

    
    void resize(double factor) {
        radius *= factor;
        System.out.println("Resized Circle to radius " + radius);
    }
}

class Main {
    public static void main(String[] args) {
        
        Shape2D rectangle = new Rectangle(5, 10);
        rectangle.draw();
        rectangle.resize(1.5);

        System.out.println(); // Just for spacing

        
        Shape2D circle = new Circle(7);
        circle.draw();
        circle.resize(2);
    }
}


`,
                output: `
Drawing a Rectangle with width 5.0 and height 10.0
Resized Rectangle to width 7.5 and height 15.0

Drawing a Circle with radius 7.0
Resized Circle to radius 14.0
                `
      },
      "Create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.": {
          description: "JAVA Program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
          code: `
abstract class Bird
    {
        abstract void fly();
        abstract void makeSound();
    }
class Eagle extends Bird
    {
        public  void fly() {
        System.out.println("Eagle soars high in the sky, gliding with powerful wings.");
    }
    public void makeSound() {
        System.out.println("Eagle makes a sharp, high-pitched screech.");
    }
    }
class Hawk extends Bird
        {
            public   void fly() {
        System.out.println("Hawk flies swiftly, diving at great speed to catch prey.");
    }
    public void makeSound() {
        System.out.println("Hawk makes a loud, piercing call.");
    }
        }
class Main
        {
            public static void main(String st[])
            {
                Bird eagle,hawk;
                eagle = new Eagle();
                hawk = new Hawk();
                eagle.fly();
                eagle.makeSound();
                hawk.fly();
                hawk.makeSound();

            }
        }

`,
                output: `
Eagle soars high in the sky, gliding with powerful wings.
Eagle makes a sharp, high-pitched screech.
Hawk flies swiftly, diving at great speed to catch prey.
Hawk makes a loud, piercing call.
                `
      },
      "Create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape": {
          description: "JAVA Program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
          code: `
abstract class GeometricShape {
    
    abstract double area();
    abstract double perimeter();
}


class Triangle extends GeometricShape {
    private double side1, side2, side3;

    
    public Triangle(double s1, double s2, double s3) {
        side1 = s1;
        side2 = s2;
        side3 = s3;
    }

    
    double area() {
        double s = (side1 + side2 + side3) / 2; // Semi-perimeter
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); // Area using Heron's formula
    }

    
    double perimeter() {
        return side1 + side2 + side3;
    }
}


class Square extends GeometricShape {
    private double side;

    
    public Square(double s) {
        side = s;
    }

   
    double area() {
        return side * side; // Area = side^2
    }

    
    double perimeter() {
        return 4 * side; 
    }
}

 class Main {
    public static void main(String[] args) {
        
        Triangle triangle = new Triangle(3, 4, 5);
        System.out.println("Triangle Area: " + triangle.area());
        System.out.println("Triangle Perimeter: " + triangle.perimeter());

        System.out.println();

        Square square = new Square(5);
        System.out.println("Square Area: " + square.area());
        System.out.println("Square Perimeter: " + square.perimeter());
    }
}


`,
                output: `
Triangle Area: 6.0
Triangle Perimeter: 12.0

Square Area: 25.0
Square Perimeter: 20.0
                `
      },
                 
  },
  "Medium": {
      
     
  },
  "Hard": {
     
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
    "Enter the long integer from user using Scanner class": {
        description: "Program to Enter the long integer from user using Scanner class",
        code: `
class Input6
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		boolean x;
		try{
        System.out.println("Enter Long int : ");
		x =sc.nextLong();
		System.out.println("you enter : "+x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter Long int value");
			}
		}
}

`,
              output: `
123454
              `
    },
 
    
  },
  "Medium": {
    "Get all characters from the file and display on the screen": {
        description: "Program to Get all characters from the file and display on the screen",
        code: `
import java.io.FileReader;
import java.io.IOException;

public class FileCharacterReader {
    public static void main(String[] args) {
        // Replace with your file path
        String filePath = "sample.txt";

        try (FileReader fileReader = new FileReader(filePath)) {
            int character;
            System.out.println("File contents:");
            // Read file character by character
            while ((character = fileReader.read()) != -1) {
                // Print each character to the console
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
            e.printStackTrace();
        }
    }
}


`,
              output: `
File contents:
This is a sample file.
It contains multiple lines of text.

              `
    },
      
  },
  "Hard": {
    "Get all characters from the file, count number of lines, words, characters and display on the screen": {
        description: "Program to Get all characters from the file, count number of lines, words, characters and display on the screen",
        code: `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileStatistics {
    public static void main(String[] args) {
        String filePath = "sample.txt";

        // Initialize counters for lines, words, and characters
        int lineCount = 0;
        int wordCount = 0;
        int characterCount = 0;

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("File contents:");
            
            // Read each line from the file
            while ((line = bufferedReader.readLine()) != null) {
                // Print the current line
                System.out.println(line);
                
                // Count lines
                lineCount++;

                // Count characters (including spaces)
                characterCount += line.length();

                // Count words (splitting by spaces)
                String[] words = line.split("\\s+"); // Splits by spaces, tabs, or newlines
                wordCount += words.length;
            }

            // Display the results
            System.out.println("\nStatistics:");
            System.out.println("Number of lines: " + lineCount);
            System.out.println("Number of words: " + wordCount);
            System.out.println("Number of characters: " + characterCount);

        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
            e.printStackTrace();
        }
    }
}


`,
              output: `
File contents:
This is a sample file.
It contains multiple lines of text.

Statistics:
Number of lines: 2
Number of words: 8
Number of characters: 47

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
interface Flyable
    {
        void fly_obj();
    }
class Spacecraft implements Flyable
        {
            public void fly_obj()
            {
                System.out.println("Spacecraft is Flyable");
            }
        }
class Airplane implements Flyable
        {
             public void fly_obj()
            {
                System.out.println("Airplane is Flyable");
            }
        }
class Helicopter implements Flyable
        {
             public void fly_obj()
            {
                System.out.println("Helicopter is Flyable");
            }
        }
class Main
    {
        public static void main(String st[])
            {
                Flyable obj;
                obj=new Spacecraft();
                obj.fly_obj();
                obj=new Airplane();
                obj.fly_obj();
                obj=new Helicopter();
                obj.fly_obj();

            }
    }

`,
output: `
          output//
          `
    },
 
    "create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.": {
        description: "Program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods..",
        code: `
// Interface defining resizable behavior
interface Resizable {
    void resizeWidth(int width);
    void resizeHeight(int height);
}

// Rectangle class implementing Resizable interface
class Rectangle implements Resizable {
    private int width;
    private int height;

    // Constructor
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    // Method to resize the width
    @Override
    public void resizeWidth(int newWidth) {
        this.width = newWidth;
        System.out.println("Rectangle width resized to: " + newWidth);
    }

    // Method to resize the height
    @Override
    public void resizeHeight(int newHeight) {
        this.height = newHeight;
        System.out.println("Rectangle height resized to: " + newHeight);
    }

    // Method to display the current dimensions of the rectangle
    public void displayDimensions() {
        System.out.println("Rectangle dimensions -> Width: " + width + ", Height: " + height);
    }
}

// Main class to test the implementation
public class ResizableDemo {
    public static void main(String[] args) {
        // Create a Rectangle object
        Rectangle rectangle = new Rectangle(10, 5);

        // Display initial dimensions
        rectangle.displayDimensions();

        // Resize width and height
        rectangle.resizeWidth(15);
        rectangle.resizeHeight(10);

        // Display updated dimensions
        rectangle.displayDimensions();
    }
}


`,
output: `
Rectangle dimensions -> Width: 10, Height: 5
Rectangle width resized to: 15
Rectangle height resized to: 10
Rectangle dimensions -> Width: 15, Height: 10

          `
    },
    "create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.": {
        description: "Program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes..",
        code: `
// Interface defining drawable behavior
interface Drawable {
    void draw();
}

// Circle class implementing Drawable interface
class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

// Rectangle class implementing Drawable interface
class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

// Triangle class implementing Drawable interface
class Triangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a Triangle");
    }
}

// Main class to test the drawing functionality
public class DrawableDemo {
    public static void main(String[] args) {
        // Create instances of different shapes
        Drawable circle = new Circle();
        Drawable rectangle = new Rectangle();
        Drawable triangle = new Triangle();

        // Draw each shape
        circle.draw();
        rectangle.draw();
        triangle.draw();
    }
}


`,
output: `
Drawing a Circle
Drawing a Rectangle
Drawing a Triangle

          `
    },

    "create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.": {
        description: "Program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports..",
        code: `
interface Playable {
    void play();
}

class Football implements Playable {
    public void play() {
        System.out.println("Playing Football");
    }
}

class Volleyball implements Playable {
    public void play() {
        System.out.println("Playing Volleyball");
    }
}

class Basketball implements Playable {
    public void play() {
        System.out.println("Playing Basketball");
    }
}

public class PlayableDemo {
    public static void main(String[] args) {
        Playable football = new Football();
        Playable volleyball = new Volleyball();
        Playable basketball = new Basketball();

        // Play each sport
        football.play();
        volleyball.play();
        basketball.play();
    }
}


`,
output: `
Playing Football
Playing Volleyball
Playing Basketball

          `
    },
  },
  "Medium": {
    "create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.": {
        description: "Program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method..",
        code: `
interface Sortable {
    void sort(int[] arr);
}

class BubbleSort implements Sortable {
    
    public void sort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println("Array sorted using Bubble Sort: " + Arrays.toString(arr));
    }
}

class SelectionSort implements Sortable {
    public void sort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // Find the minimum element
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        System.out.println("Array sorted using Selection Sort: " + Arrays.toString(arr));
    }
}

public class Sorting {
    public static void main(String[] args) {
        int[] array1 = {64, 34, 25, 12, 22, 11, 90};
        int[] array2 = {64, 34, 25, 12, 22, 11, 90};

        // Sorting using BubbleSort
        Sortable bubbleSort = new BubbleSort();
        bubbleSort.sort(array1);

        // Sorting using SelectionSort
        Sortable selectionSort = new SelectionSort();
        selectionSort.sort(array2);
    }
}


`,
output: `
Array sorted using Bubble Sort: [11, 12, 22, 25, 34, 64, 90]
Array sorted using Selection Sort: [11, 12, 22, 25, 34, 64, 90]

          `
    },
    "create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.": {
        description: "Program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method..",
        code: `
interface Searchable {
    boolean search(String keyword);
}

class Document implements Searchable {
    private String content;

    public Document(String content) {
        this.content = content;
    }

    public boolean search(String keyword) {
        boolean found = content.contains(keyword);
        if (found) {
            System.out.println("Keyword '" + keyword + "' found in Document.");
        } else {
            System.out.println("Keyword '" + keyword + "' not found in Document.");
        }
        return found;
    }
}

class WebPage implements Searchable {
    private String htmlContent;

    public WebPage(String htmlContent) {
        this.htmlContent = htmlContent;
    }

 
    public boolean search(String keyword) {
        boolean found = htmlContent.contains(keyword);
        if (found) {
            System.out.println("Keyword '" + keyword + "' found in WebPage.");
        } else {
            System.out.println("Keyword '" + keyword + "' not found in WebPage.");
        }
        return found;
    }
}

// Main class to test the search functionality
public class SearchableDemo {
    public static void main(String[] args) {
        // Create a document and a webpage with some content
        Document document = new Document("This is a simple document containing some text.");
        WebPage webPage = new WebPage("<html><body>This is a simple webpage.</body></html>");

        // Search for a keyword in the document
        document.search("simple");

        // Search for a keyword in the webpage
        webPage.search("webpage");

        // Search for a keyword that doesn't exist
        document.search("missing");
        webPage.search("missing");
    }
}


`,
output: `
Keyword 'simple' found in Document.
Keyword 'webpage' found in WebPage.
Keyword 'missing' not found in Document.
Keyword 'missing' not found in WebPage.

          `
    },
    
  },
  "Hard": {
    "create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.": {
        description: "Program to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods..",
        code: `
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

interface Account {
    void deposit(double amount);
    void withdraw(double amount);
    void calculateInterest();
    void viewBalance();
}

class Bank {
    private List<Account> accounts;

    public Bank() {
        accounts = new ArrayList<>();
    }

    public void addAccount(Account account) {
        accounts.add(account);
    }

    public void displayAccounts() {
        System.out.println("Bank Accounts:");
        for (Account account : accounts) {
            account.viewBalance();
        }
    }
}

class SavingsAccount implements Account {
    private double balance;
    private double interestRate;

    public SavingsAccount(double initialDeposit, double interestRate) {
        this.balance = initialDeposit;
        this.interestRate = interestRate;
    }
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited " + amount + " to SavingsAccount. New balance: " + balance);
    }

    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from SavingsAccount. New balance: " + balance);
        } else {
            System.out.println("Insufficient balance in SavingsAccount.");
        }
    }

    public void calculateInterest() {
        double interest = balance * (interestRate / 100);
        balance += interest;
        System.out.println("Interest added to SavingsAccount. New balance: " + balance);
    }

    public void viewBalance() {
        System.out.println("SavingsAccount Balance: " + balance);
    }
}

class CurrentAccount implements Account {
    private double balance;
    private double overdraftLimit;

    public CurrentAccount(double initialDeposit, double overdraftLimit) {
        this.balance = initialDeposit;
        this.overdraftLimit = overdraftLimit;
    }
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited " + amount + " to CurrentAccount. New balance: " + balance);
    }

    public void withdraw(double amount) {
        if (balance + overdraftLimit >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from CurrentAccount. New balance: " + balance);
        } else {
            System.out.println("Overdraft limit exceeded in CurrentAccount.");
        }
    }

    public void calculateInterest() {
        System.out.println("No interest for CurrentAccount.");
    }


    public void viewBalance() {
        System.out.println("CurrentAccount Balance: " + balance);
    }
}

public class BankingSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        Bank bank = new Bank();
        
        SavingsAccount savingsAccount = new SavingsAccount(1000.0, 5.0); // Initial deposit 1000, interest rate 5%
        bank.addAccount(savingsAccount);
        
        CurrentAccount currentAccount = new CurrentAccount(500.0, 200.0); // Initial deposit 500, overdraft limit 200
        bank.addAccount(currentAccount);

        savingsAccount.deposit(200);
        savingsAccount.calculateInterest();
        savingsAccount.withdraw(300);
        
        currentAccount.deposit(150);
        currentAccount.withdraw(600);
        
        bank.displayAccounts();
        
        scanner.close();
    }
}


`,
output: `
Deposited 200.0 to SavingsAccount. New balance: 1200.0
Interest added to SavingsAccount. New balance: 1260.0
Withdrew 300.0 from SavingsAccount. New balance: 960.0
Deposited 150.0 to CurrentAccount. New balance: 650.0
Withdrew 600.0 from CurrentAccount. New balance: 50.0
Bank Accounts:
SavingsAccount Balance: 960.0
CurrentAccount Balance: 50.0

          `
    },
    " create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.": {
        description: "Program to  create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms..",
        code: `

interface Encryptable {
    String encrypt(String data);
    String decrypt(String encryptedData);
}

class AES implements Encryptable {

    public String encrypt(String data) {
        // Simulated AES encryption (reverse the string)
        String encrypted = new StringBuilder(data).reverse().toString();
        System.out.println("AES Encrypted Data: " + encrypted);
        return encrypted;
    }


    public String decrypt(String encryptedData) {
        // Simulated AES decryption (reverse the string back)
        String decrypted = new StringBuilder(encryptedData).reverse().toString();
        System.out.println("AES Decrypted Data: " + decrypted);
        return decrypted;
    }
}

class RSA implements Encryptable {
    public String encrypt(String data) {
        // Simulated RSA encryption (shift each character by 3)
        StringBuilder encrypted = new StringBuilder();
        for (char c : data.toCharArray()) {
            encrypted.append((char) (c + 3));
        }
        System.out.println("RSA Encrypted Data: " + encrypted.toString());
        return encrypted.toString();
    }

    public String decrypt(String encryptedData) {
        // Simulated RSA decryption (shift each character back by 3)
        StringBuilder decrypted = new StringBuilder();
        for (char c : encryptedData.toCharArray()) {
            decrypted.append((char) (c - 3));
        }
        System.out.println("RSA Decrypted Data: " + decrypted.toString());
        return decrypted.toString();
    }
}

// Main class to test the encryption and decryption
public class EncryptionDemo {
    public static void main(String[] args) {
        // Create instances of AES and RSA
        Encryptable aesEncryption = new AES();
        Encryptable rsaEncryption = new RSA();

        // Test AES encryption and decryption
        String aesEncrypted = aesEncryption.encrypt("HelloAES");
        aesEncryption.decrypt(aesEncrypted);

        // Test RSA encryption and decryption
        String rsaEncrypted = rsaEncryption.encrypt("HelloRSA");
        rsaEncryption.decrypt(rsaEncrypted);
    }
}


`,
output: `
AES Encrypted Data: SEAolleH
AES Decrypted Data: HelloAES
RSA Encrypted Data: KhoorUVD
RSA Decrypted Data: HelloRSA

          `
    },
    "create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.": {
        description: "Program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method..",
        code: `
// Interface defining sorting behavior
interface Sortable {
    void sort(int[] array);
}

// QuickSort class implementing Sortable interface
class QuickSort implements Sortable {


    public void sort(int[] array) {
        quickSort(array, 0, array.length - 1);
        System.out.println("QuickSorted Array (Descending): ");
        printArray(array);
    }

    // QuickSort implementation
    private void quickSort(int[] array, int low, int high) {
        if (low < high) {
            int partitionIndex = partition(array, low, high);
            quickSort(array, low, partitionIndex - 1);
            quickSort(array, partitionIndex + 1, high);
        }
    }

    // Partition method for QuickSort
    private int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (array[j] > pivot) { // For descending order
                i++;
                swap(array, i, j);
            }
        }
        swap(array, i + 1, high);
        return i + 1;
    }

    // Swap elements
    private void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// MergeSort class implementing Sortable interface
class MergeSort implements Sortable {

    public void sort(int[] array) {
        mergeSort(array, 0, array.length - 1);
        System.out.println("MergeSorted Array (Descending): ");
        printArray(array);
    }

    // MergeSort implementation
    private void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            int middle = (left + right) / 2;
            mergeSort(array, left, middle);
            mergeSort(array, middle + 1, right);
            merge(array, left, middle, right);
        }
    }

    // Merge method for MergeSort
    private void merge(int[] array, int left, int middle, int right) {
        int n1 = middle - left + 1;
        int n2 = right - middle;

        int[] leftArray = new int[n1];
        int[] rightArray = new int[n2];

        for (int i = 0; i < n1; i++) {
            leftArray[i] = array[left + i];
        }
        for (int j = 0; j < n2; j++) {
            rightArray[j] = array[middle + 1 + j];
        }

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (leftArray[i] > rightArray[j]) { // For descending order
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            array[k] = leftArray[i];
            i++;
            k++;
        }

        while (j < n2) {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }
}

// Utility method to print the array
public class SortableDemo {
    public static void printArray(int[] array) {
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Main method to test QuickSort and MergeSort
    public static void main(String[] args) {
        int[] array1 = {34, 7, 23, 32, 5, 62};
        int[] array2 = {29, 10, 14, 37, 13};

        // QuickSort
        Sortable quickSort = new QuickSort();
        quickSort.sort(array1);

        // MergeSort
        Sortable mergeSort = new MergeSort();
        mergeSort.sort(array2);
    }
}


`,
output: `
QuickSorted Array (Descending): 
62 34 32 23 7 5 
MergeSorted Array (Descending): 
37 29 14 13 10 

          `
    },
  }
},
"JAVA DATABASE CONNECTIVITY": {
  "Easy": {
    "Create the connection with MySQL Database and manage the driver.": {
        description: "Program to Create the connection with MySQL Database and manage the driver..",
        code: `
import java.sql.DriverManager;

public class Jdbc1 {
    public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/java", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connected");
        }
    }
}


`,
output: `
Conection successful
          `
    },
    "Create the table in the database from Java API.": {
        description: "Program to Create the table in the database from Java API..",
        code: `
public class Jdbc2 {
  
        public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        int r=-1;
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/Myjava", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connected");
        }
        java.sql.Statement st = con.createStatement();
        try
        {
            r =st.executeUpdate("Create table student(Roll_no int(5),Name varchar(30),Marks int(5))");
        }
        catch(java.sql.SQLSyntaxErrorException e)
        {
            System.out.println("Table exists!");
        }
    
        //System.out.println(r);
        if (r==0) {
            System.out.println("Table created!");
        }
        else
        {
            System.out.println("Table not created!");
        }
    }
    }

`,
output: `
Conection successful
Table created!
          `
    },
    "Insert the row in the table in the database from Java API.": {
        description: "Program to Insert the row in the table in the database from Java API..",
        code: `
public class Jdbc3 {
    public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        int r=0;
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/Myjava", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connected");
        }
        java.sql.Statement st = con.createStatement();
        try
        {
            r =st.executeUpdate("insert into student values(3,'Abhishek',96)");
        }
        catch(java.sql.SQLSyntaxErrorException e)
        {
            System.out.println(e.getMessage());
        }
        if (r!=0) {
            System.out.println("Row inserted!");
        }
        else
        {
            System.out.println("Row not inserted!");
        }
    }
}

`,
output: `
Conection successful
Row inserted!
          `
    },
    "Update the row in the table in the database from Java API.": {
        description: "Program to Update the row in the table in the database from Java API..",
        code: `
public class Jdbc4 {
    public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        int r=0;
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/Myjava", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connectedc");
        }
        java.sql.Statement st = con.createStatement();
        try
        {
            r =st.executeUpdate("Update student set Name = 'Manjit Kumar' where Roll_no = 1");
        }
        catch(java.sql.SQLSyntaxErrorException e)
        {
            System.out.println(e.getMessage());
        }
        if (r!=0) {
            System.out.println("Row Updated!");
        }
        else
        {
            System.out.println("Row not Updated!");
        }
    }
}

`,
output: `
Conection successful
          `
    },
    "Delete the row in the table in the database from Java API.": {
        description: "Program to Delete the row in the table in the database from Java API..",
        code: `
public class Jdbc5 {
    public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        int r=0;
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/Myjava", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connectedc");
        }
        java.sql.Statement st = con.createStatement();
        try
        {
            r =st.executeUpdate("delete from student where Roll_no = 1");
        }
        catch(java.sql.SQLSyntaxErrorException e)
        {
            System.out.println(e.getMessage());
        }
        if (r!=0) {
            System.out.println("Row Deleted!");
        }
        else
        {
            System.out.println("Row not Deleted!");
        }
    }
}


`,
output: `
Conection successful
Row Deleted!
          `
    },
    "Select multiple rows from the database table in Java API and show the result on the screen.": {
        description: "Program to Select multiple rows from the database table in Java API and show the result on the screen..",
        code: `
public class Jdbc6 {
    public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        java.sql.ResultSet res=null;
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/Myjava", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connectedc");
        }
        java.sql.Statement st = con.createStatement();
        try
        {
            res =st.executeQuery("select * from student ");
        }
        catch(java.sql.SQLSyntaxErrorException e)
        {
            System.out.println(e.getMessage());
        }
            //System.out.println("Rows "+res.next());
            int i=0;
            while (res.next()) {
                //System.out.println("Rows "+res.next());
                int Roll_no = res.getInt("Roll_no");
                String Name = res.getString("Name");
                int marks = res.getInt("Marks");
                System.out.println("Roll No : "+Roll_no);
                System.out.println("Name : "+Name);
                System.out.println("Marks : "+marks);
            }
        }

    }


`,
output: `
Conection successful
Roll No : 1
Name : Manjit
Marks : 98
Roll No : 2
Name : Manjit
Marks : 96
Roll No : 3
Name : Abhishek
Marks : 96
          `
    },
    "Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen.": {
        description: "Program to Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen..",
        code: `
public class Jdbc7 {
    public static void main(String[] args) throws ClassNotFoundException,java.sql.SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        java.sql.ResultSet res=null;
        int rowNum =0;
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:/Myjava", "root", "java");
        if (con!=null) {
            System.out.println("Conection successful");
        }
        else
        {
            System.out.println("Not connectedc");
        }
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.println("Enter Row Number: ");
        try
        {
            rowNum = Integer.parseInt(input.readLine());
        }
        catch(java.io.IOException e)
        {
            System.out.println(e.getMessage());
        }
        catch(NumberFormatException e)
        {
            System.out.println(e.getMessage());
        }
        java.sql.Statement st = con.createStatement(java.sql.ResultSet.CONCUR_READ_ONLY,java.sql.ResultSet.TYPE_SCROLL_INSENSITIVE);
        try
        {
            res =st.executeQuery("select * from student ");
        }
        catch(java.sql.SQLSyntaxErrorException e)
        {
            System.out.println(e.getMessage());
        }
           
            int i=1;
            while (res.next()) {
                if (i==rowNum) {
                    int Roll_no = res.getInt("Roll_no");
                    String Name = res.getString("Name");
                    int marks = res.getInt("Marks");
                    System.out.println("Roll No : "+Roll_no);
                    System.out.println("Name : "+Name);
                    System.out.println("Marks : "+marks);
                }
               i++;
            }
        }

    }


`,
output: `
Enter Row Number:
2
Roll No : 2
Name : Manjit
Marks : 96
          `
    },
    "Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also. The values should be inserted, updated and deleted by the user only.": {
        description: "Program to Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also. The values should be inserted, updated and deleted by the user only..",
        code: `
import java.sql.*;
import java.util.Scanner;

public class ScrollableUpdateableResultSet {
    private static final String URL = "jdbc:mysql://localhost:3306/school"; 
    private static final String USERNAME = "root"; 
    private static final String PASSWORD = "java"; 

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD)) {
            // Create a statement for scrollable and updatable ResultSet
            String query = "SELECT * FROM students";
            Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            ResultSet rs = stmt.executeQuery(query);

            Scanner scanner = new Scanner(System.in);
            boolean exit = false;

            while (!exit) {
                System.out.println("\nOptions:");
                System.out.println("1. Insert a new student");
                System.out.println("2. Update an existing student");
                System.out.println("3. Delete a student");
                System.out.println("4. Display all students");
                System.out.println("5. Exit");
                System.out.print("Choose an option: ");
                int choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        // Insert a new student
                        System.out.print("Enter student name: ");
                        String name = scanner.next();
                        System.out.print("Enter student age: ");
                        int age = scanner.nextInt();
                        rs.moveToInsertRow();
                        rs.updateString("name", name);
                        rs.updateInt("age", age);
                        rs.insertRow();
                        System.out.println("Inserted new student: " + name);
                        break;

                    case 2:
                        // Update an existing student
                        System.out.print("Enter student ID to update: ");
                        int updateId = scanner.nextInt();
                        boolean found = false;

                        while (rs.next()) {
                            if (rs.getInt("id") == updateId) {
                                found = true;
                                System.out.print("Enter new name: ");
                                String newName = scanner.next();
                                System.out.print("Enter new age: ");
                                int newAge = scanner.nextInt();
                                rs.updateString("name", newName);
                                rs.updateInt("age", newAge);
                                rs.updateRow();
                                System.out.println("Updated student ID " + updateId);
                                break;
                            }
                        }

                        if (!found) {
                            System.out.println("Student ID " + updateId + " not found.");
                        }
                        rs.beforeFirst(); // Reset cursor position
                        break;

                    case 3:
                        // Delete a student
                        System.out.print("Enter student ID to delete: ");
                        int deleteId = scanner.nextInt();
                        found = false;

                        while (rs.next()) {
                            if (rs.getInt("id") == deleteId) {
                                found = true;
                                rs.deleteRow();
                                System.out.println("Deleted student ID " + deleteId);
                                break;
                            }
                        }

                        if (!found) {
                            System.out.println("Student ID " + deleteId + " not found.");
                        }
                        rs.beforeFirst(); // Reset cursor position
                        break;

                    case 4:
                        // Display all students
                        System.out.println("Students List:");
                        rs.beforeFirst(); // Move cursor to the beginning
                        while (rs.next()) {
                            System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name") + ", Age: " + rs.getInt("age"));
                        }
                        break;

                    case 5:
                        exit = true;
                        break;

                    default:
                        System.out.println("Invalid option. Please try again.");
                }
            }
        } catch (SQLException e) {
           System.out.println(e.getMessage());
        }
    }
}


`,
output: `
Options:
1. Insert a new student
2. Update an existing student
3. Delete a student
4. Display all students
5. Exit
Choose an option: 1
Enter student name: Manjit
Enter student age: 20
Inserted new student: Manjit

Options:
1. Insert a new student
2. Update an existing student
3. Delete a student
4. Display all students
5. Exit
Choose an option: 4
Students List:
ID: 1, Name: Manjit kumar, Age: 21
ID: 2, Name: Sandeep, Age: 22
ID: 3, Name: Manjit, Age: 20

Options:
1. Insert a new student
2. Update an existing student
3. Delete a student
4. Display all students
5. Exit
Choose an option: 2
Enter student ID to update: 3
Enter new name: Manjit kumar
Enter new age: 21
Updated student ID 3

Options:
1. Insert a new student
2. Update an existing student
3. Delete a student
4. Display all students
5. Exit
Choose an option: 4
Students List:
ID: 1, Name: Manjit kumar, Age: 21
ID: 2, Name: Sandeep, Age: 22
ID: 3, Name: Manjit kumar, Age: 21

          `
    },
    "Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement": {
        description: "Program to Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement.",
        code: `
package jdbc9;
class Database
	{
	java.sql.Connection con;
    java.sql.PreparedStatement pstm;
	//java.sql.Statement stm;
	public Database(String url,String user,String pwd)
		{
		try
		{
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = java.sql.DriverManager.getConnection(url,user,pwd);
		}
		catch(ClassNotFoundException e)
		{
			System.out.println(e.getMessage());
		}
		catch(java.sql.SQLException e)
		{
			System.out.println(e.getMessage());
		}
		}
		int insert_DB(String q,String rno,String n,String c,int a,String dob) throws java.sql.SQLException
		{
            pstm = con.prepareStatement(q);
            pstm.setString(1, rno);
            pstm.setString(2, n);
            pstm.setString(3, c);
            pstm.setInt(4, a);
            pstm.setString(5, dob);
			return pstm.executeUpdate();
		}
		int 	update_DB(String q,String rno,String n,String c,int a,String dob,String cond) throws java.sql.SQLException
		{
            pstm = con.prepareStatement(q);
            pstm.setString(1, rno);
            pstm.setString(2, n);
            pstm.setString(3, c);
            pstm.setInt(4, a);
            pstm.setString(5, dob);
			pstm.setString(6, cond);
			return pstm.executeUpdate();
		}

		int delete_DB(String q,String wrn) throws java.sql.SQLException
		{
            pstm = con.prepareStatement(q);
            pstm.setString(1, wrn);
			return pstm.executeUpdate();
		}
		void close() throws java.sql.SQLException
		{
		con.close();
		}

	}

class Main
	{
		private String rollNo;
		private String name;
		private String course;
		private int Age;
		private String DoB;
		void setRollNo(String r)
		{
			rollNo = r;
		}
		void setName(String n)
		{
			name = n;
		}
		void setCourse(String c)
		{
			course = c;
		}
		void setAge(int age)
		{
			Age = age;
		}
		void setDoB(String d)
		{
			DoB = d;
		}
		String getRollNo()
		{
			return rollNo;		
		}
		String getName()
		{
			return name;
		}
		String getCourse()
		{
			return course;		
		}
		int getAge()
		{
			return Age;
		}
		String getDoB()
		{
			return DoB;	
		}
		void insert(Database db)
        {
            try
				{
				java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
				System.out.println("Enter Roll no : ");
				setRollNo(input.readLine());
				System.out.println("Enter your Name : ");
				setName(input.readLine());
				System.out.println("Enter Course : ");
				setCourse(input.readLine());
				System.out.println("Enter Age: ");
				setAge(Integer.parseInt(input.readLine()));
				System.out.println("Enter Date of Birth : ");
				setDoB(input.readLine());
				int ok =db.insert_DB("insert into student value(?,?,?,?,?)",getRollNo(),getName(),getCourse(),getAge(),getDoB());
                    if (ok!=0) {
                        System.out.println("Row Inserted Successfully!");
                    }
                    else
                    {
                        System.out.println("Row Not Inserted!"); 
                    }
            }
				catch(java.io.IOException e)
				{
					System.out.println(e.getMessage());
				}
				catch(NumberFormatException e)
				{
					System.out.println("Please Enter Positive value ");
				}
				catch(java.sql.SQLException e)
				{
				System.out.println(e.getMessage());
				}
        }
        void update(Database db)
        {
            String query = "update student set Roll_no = ? , Name = ? ,course = ? ,Age = ?,DoB = ? where Roll_no = ?";
            String wrn=" ";
            try
				{
				java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
				System.out.println("Enter Roll no : ");
				setRollNo(input.readLine());
				System.out.println("Enter your Name : ");
				setName(input.readLine());
				System.out.println("Enter Course : ");
				setCourse(input.readLine());
				System.out.println("Enter Age: ");
				setAge(Integer.parseInt(input.readLine()));
				System.out.println("Enter Date of Birth : ");
				setDoB(input.readLine());
                System.out.println("Where :");
                wrn = input.readLine();
                int ok =db.update_DB(query,getRollNo(),getName(),getCourse(),getAge(),getDoB(),wrn);
                if (ok!=0) {
                    System.out.println("Row Updated Successfully!");
                }
                else
                {
                    System.out.println("Row Not Updated!"); 
                } 
            }
				catch(java.io.IOException e)
				{
					System.out.println(e.getMessage());
				}
				catch(NumberFormatException e)
				{
					System.out.println("Please Enter Positive value ");
				}
				catch(java.sql.SQLException e)
				{
				System.out.println(e.getMessage());
				}
             }
        void delete(Database db)
        {
            String query = "delete from student where Roll_no = ?";
            String wrn=" ";
            try
            {
            java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
            System.out.println("Where :");
            wrn = input.readLine();
           int ok= db.delete_DB(query,wrn);
            if (ok!=0) {
            System.out.println("Row deleted Successfully!");
            }
            else
            {
            System.out.println("Row Not Deleted!"); 
            }
            }
            catch(java.io.IOException e)
				{
					System.out.println(e.getMessage());
				}
				catch(java.sql.SQLException e)
				{
				System.out.println(e.getMessage());
				}
        }
		public static void main(String st[])
			{
				Database db = new Database("jdbc:mysql://localhost:/mydb","root","java");
				Main obj = new Main();
                int select=0;
				java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
				while (select!=4) {
                    try
                    {
                        select = Integer.parseInt(input.readLine());
                    }
                    catch(java.io.IOException e)
                    {
                        System.out.println(e.getMessage());
                    }
                    if (select==1) {
                        obj.insert(db);
                    }
                    else if (select == 2) {
                        obj.update(db);
                    }
                    else if (select == 3) {
                        obj.delete(db);
                    }
                    else
                    {
                        System.out.println("Invalied!");
                    }
                }
               
			}
	}

`,
output: `
Insert : 1
Update : 2
Delete : 3
1
Enter Roll no :
4298/22
Enter your Name :
Manjit
Enter Course :
BCA
Enter Age:
20
Enter Date of Birth :
2005-01-02
Row Inserted Successfully!
Insert : 1
Update : 2
Delete : 3
1
Enter Roll no :
4204/22
Enter your Name :
Abhishek
Enter Course :
BCA
Enter Age:
20
Enter Date of Birth :
2004-06-21
Row Inserted Successfully!
Insert : 1
Update : 2
Delete : 3
1
Enter Roll no :
4231/22
Enter your Name :
Pawan
Enter Course :
BCA
Enter Age:
20
Enter Date of Birth :
2004-09-18
Row Inserted Successfully!
Insert : 1
Update : 2
Delete : 3
1
Enter Roll no :
4201/22
Enter your Name :
Kartik
Enter Course :
BCA
Enter Age:
22
Enter Date of Birth :
2002-01-01
Row Inserted Successfully!
Insert : 1
Update : 2
Delete : 3
2
Enter Roll no :
4298/22
Enter your Name :
Manjit kumar
Enter Course :
BCA
Enter Age:
20
Enter Date of Birth :
2005-01-02
Where :
4298/22
Row Updated Successfully!
Insert : 1
Update : 2
Delete : 3
3
Where :
4231/22
Row deleted Successfully!
Insert : 1
Update : 2
Delete : 3
4
Invalied!
          `
    },
   
  },
  "Medium": {
     
      
  },
  "Hard": {
     
  }
},
" MULTITHREADING": {
  "Easy": {
      "create a basic Java thread that prints \"Hello, World!\" when executed.": {
          description: "Program to create a basic Java thread that prints \"Hello, World!\" when executed.",
          code: `
class Mythread extends Thread
{
    public void run()
    {
        System.out.println(getName()+" Hello World!");
    }
}
 class Thread1 {
    public static void main(String[] args) {
        Mythread t1 = new Mythread();
        Mythread t2 = new Mythread();
        Mythread t3 = new Mythread();
        Mythread t4 = new Mythread();
        t1.setName("T1");
        t2.setName("T2");
        t3.setName("T3");
        t4.setName("T4");
        t2.start();
        t1.start();
        t3.start();
        t4.start();
    }
    
}


`,
                output: `
T2 Hello World!
T3 Hello World!
T1 Hello World!
T4 Hello World!
    
                `
      },
      "creates two threads to find and print even and odd numbers from 1 to 20.": {
        description: "Program to creates two threads to find and print even and odd numbers from 1 to 20.",
        code: `
class Mythread extends Thread
{
    public void run()
    {
        for(int i=1;i<=20;i++)
        {
            System.out.println(i);
        }
    }
}
 class Thread2 {
    public static void main(String[] args) {
        Mythread t1 = new Mythread();
        Mythread t2 = new Mythread();
        t1.start();
        t2.start();
    }
   
    
}

`,
              output: `
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20

  
              `
    },
    "sorts an array of integers using multiple threads.": {
        description: "Program to sorts an array of integers using multiple threads.",
        code: `
package thread3;
class Sort
{
    void sortArr(int arr[])
    {
        int temp;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < arr.length; j++) {
                if (arr[i]>arr[j]) {
                    temp = arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
    }
}
class Mythread extends Thread
{
    Sort s=new Sort();
    public void run()
    {
        int array[] = {1,4,3,5,6,7};
        System.out.println(getName()+" Unsorted Array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
        s.sortArr(array);
        System.out.println(getName()+" Sorted Array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
}
public class Thread3 {
    public static void main(String[] args) {
        Mythread t1 = new Mythread();
        Mythread t2 = new Mythread();
        Mythread t3 = new Mythread();
        Mythread t4 = new Mythread();
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}


`,
              output: `
Thread-0 Unsorted Array:
1
4
3
5
6
7
Thread-3 Unsorted Array:
1
4
3
5
6
Thread-2 Unsorted Array:
1
4
3
5
6
7
Thread-2 Sorted Array:
1
3
4
5
6
7
Thread-1 Unsorted Array:
1
4
3
5
6
7
7
Thread-0 Sorted Array:
1
3
4
5
6
7
Thread-3 Sorted Array:
1
3
4
5
6
7
Thread-1 Sorted Array:
1
3
4
5
6
7
  
              `
    },
    "performs matrix multiplication using multiple threads.": {
        description: "Program to performs matrix multiplication using multiple threads.",
        code: `
class MatrixMulti
{
    void matrixMulti(int arr1[][],int arr2[][],int multi[][])
    {
        int temp;
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr1[i].length; j++) {
                for (int k = 0; k < arr1[i].length; k++) {
                    multi[i][j]+=arr1[i][k]*arr2[k][j];
                }
            }
        }
    }
}
class Mythread extends Thread
{
    MatrixMulti matrix = new MatrixMulti();
    public void run()
    {
        int array1[][] = {{1,2,3},{4,5,1},{6,8,4}};
        int array2[][] = {{4,6,7},{8,3,1},{2,6,2}};
        int multi[][] = new int[array1.length][array1[0].length];
        System.out.println(getName()+" Matrix 1: ");
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array1[0].length; j++) {
                System.out.print(array1[i][j]+" ");
            }
            System.out.println();
        }
        
        System.out.println(getName()+" Matrix 2: ");
        for (int i = 0; i < array2.length; i++) {
            for (int j = 0; j < array2[0].length; j++) {
                System.out.print(array2[i][j]+" ");
            }
            System.out.println();
        }
        matrix.matrixMulti(array1, array2, multi);
        for (int i = 0; i < multi.length; i++) {
            for (int j = 0; j < multi[0].length; j++) {
                System.out.print(multi[i][j]+" ");
            }
            System.out.println();
        }
    }
}
class Main {
    public static void main(String[] args) {
        Mythread t1= new Mythread();
        t1.start();
        
    }
    
}


`,
              output: `
Thread-0 Matrix 1:
1 2 3
4 5 1
6 8 4
Thread-0 Matrix 2:
4 6 7
8 3 1
2 6 2
26 30 15
58 45 35
96 84 58
  
              `
    },
    "calculates the sum of all prime numbers up to a given limit using multiple threads.": {
        description: "Program to calculates the sum of all prime numbers up to a given limit using multiple threads.",
        code: `
class PrimeNum
{
    int num,sum,isPrime;
    void primeNum(int s,int l)
    {
        
        for(num=s;num<=l;num++)
        {
        isPrime=1;
        for(int i = 2; i<=num/2;i++)
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
        System.out.println("Sum of "+s+" to "+l+" prime Number : "+sum);
        }
    }
    class Mythread extends Thread
    {
        PrimeNum obj = new PrimeNum();
        public void run()
        {
            obj.primeNum(5, 7);
        }
    }
 class Main{
    public static void main(String[] args) {
        Mythread t1 = new Mythread();
        t1.start();
        
    }
    
}


`,
              output: `
Sum of 5 to 7 prime Number : 12
  
              `
    },
    "implement a concurrent web crawler that crawls multiple websites simultaneously using threads.": {
        description: "Program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "creates a bank account with concurrent deposits and withdrawals using threads.": {
        description: "Program to creates a bank account with concurrent deposits and withdrawals using threads.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "create multiple threads by using Runnbale interface": {
        description: "Program to create multiple threads by using Runnbale interface",
        code: `
class MyThread implements Runnable
{
    public void run()
    {
        System.out.println("Hello I am Thread!");
    }
}
 class Main {
    public static void main(String[] args) {
        MyThread t2 = new MyThread();
        Thread t1 = new Thread(new MyThread());
        t1.start();
    
    }
    
}

`,
              output: `
Hello I am Thread!
  
              `
    },
    "create multiple threads by using Thread class": {
        description: "Program to create multiple threads by using Thread class",
        code: `
class MyThread extends Thread
{
    public void run()
    {
        System.out.println("I am "+getName());
    }
}
 class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.setName("Thread 1");
        MyThread t2 = new MyThread();
        t2.setName("Thread 2");
        MyThread t3 = new MyThread();
        t3.setName("Thread 3");
        MyThread t4 = new MyThread();
        t4.setName("Thread 4");
        MyThread t5 = new MyThread();
        t5.setName("Thread 5");
        MyThread t6 = new MyThread();
        t6.setName("Thread 6");
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
        t6.start();

    }
}


`,
              output: `
I am Thread 1
I am Thread 6
I am Thread 5
I am Thread 4
I am Thread 2
I am Thread 3
  
              `
    },
    "create multiple threads, set its name and its priority.": {
        description: "Program to create multiple threads, set its name and its priority.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "create multiple threads, show an example of synchronization keyword.": {
        description: "Program to create multiple threads, show an example of synchronization keyword.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.": {
        description: "Program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
    "create multiple threads, show an example of join and yield methods.": {
        description: "Program to create multiple threads, show an example of join and yield methods.",
        code: `
code//

`,
              output: `
              output//
  
              `
    },
   
  },
  "Medium": {
     
  },
  "Hard": {
     
  }
},
"OBJECT ORIENTED PROGRAMMING": {
  "Easy": {
      "1.create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.": {
          description: "Program to create a class called Person with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
          code: `
class Person{
    private String name;
    private int age;
    Person(String pName , int pAge)
    {
        name = pName;
        age = pAge;
    }
    void display()
    {
        System.out.println("Name : "+name+"\nAge : "+age);
    }
    public static void main(String st[])
    {
        Person obj1=new Person("Manjit",18);
        obj1.display();
        Person obj2=new Person("Sandeep",24);
        obj2.display();
    }
}
`,
                output: `
Name : Manjit
Age : 18
Name : Sandeep
Age : 24
                `
      },
      "2.create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.": {
          description: "Program to create a class called Dog with a name and breed attribute. Create two instances of the Dog class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
          code: `
class Dog
    {
        private String name,breed;
        Dog(String dName,String dBreed)
        {
            name=dName;
            breed=dBreed;
        }
        String setName(String dName)
        {
            name=dName;
            return name;
        }
        String setBreed(String dBreed)
        {
            breed=dBreed;
            return breed;
        }
        void display()
        {
            System.out.println("Dog Name : "+name+"\nDog Breed : "+breed);
        }
        public static void main(String st[])
        {
            Dog obj = new Dog("Tiger","Boxer");
                obj.setName("Sheru");
                obj.setBreed("Bulldog");
                obj.display();
        }
    }
`,
                output: `
Dog Name : Sheru
Dog Breed : Bulldog

                `
      },
      "create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle": {
          description: "Program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle",
          code: `
class Rectangle 
    {
        private float width,height;
        float setWidth(float rWidth)
        {
            width=rWidth;
            return width;
        }
        float setHeigth(float rHeigth)
        {
            height=rHeigth;
            return height;
        }
        float area()
        {
            return width*height;
        }
        float perimeter()
        {
            return (2*(width+height));
        }
        void display()
        {
            System.out.println("Perimeter of Rectangle : "+perimeter()+"\nArea of Rectangle : "+area());
        }
        public static void main(String st[])
        {
            Rectangle obj = new Rectangle();
            obj.setWidth(15f);
            obj.setHeigth(20f);
            obj.perimeter();
            obj.area();
            obj.display();
        }
    }
`,
                output: `
Perimeter of Rectangle : 70.0
Area of Rectangle : 300.0
                `
      },
      "create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.": {
          description: "Program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
          code: `
class Circle
        {
            final private float PI = 3.14f;
            private float radius;
            Circle(float cRadius)
            {
                radius=cRadius;
            }
            float getRadius()
            {
                return radius;
            }
            void setRadius(float cRadius)
            {
                radius=cRadius;
            }
            float area()
            {
                return PI*(radius*radius);
            }
            float circumference()
            {
                return 2*PI*radius;
            }
            public static void main (String st[])
            {
                Circle obj = new Circle(7.0f);
                System.out.println("Radius : "+obj.getRadius());
                System.out.println("Perimeter of Circle : "+obj.circumference());
                System.out.println("Area of Circle : "+obj.area());
                obj.setRadius(14f);
                System.out.println("New Radius : "+obj.getRadius());
                System.out.println("New Perimeter of Circle : "+obj.circumference());
                System.out.println("New Area of Circle : "+obj.area());
                
            }
        }
`,
                output: `
Radius : 7.0
Perimeter of Circle : 43.960003
Area of Circle : 153.86
New Radius : 14.0
New Perimeter of Circle : 87.920006
New Area of Circle : 615.44
                `
      },
      "create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.": {
          description: "Program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
          code: `
import java.util.ArrayList;
import java.util.List;

class Book {
    private String title;
    private String author;
    private String isbn;

    // Constructor
    public Book(String title, String author, String isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // Getters
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getIsbn() {
        return isbn;
    }
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", isbn='" + isbn + '\'' +
                '}';
    }
}

class BookCollection {
    private List<Book> books;

    // Constructor
    public BookCollection() {
        books = new ArrayList<>();
    }

    // Method to add a book
    public void addBook(Book book) {
        books.add(book);
        System.out.println("Book added: " + book);
    }

    // Method to remove a book by ISBN
    public void removeBook(String isbn) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getIsbn().equals(isbn)) {
                System.out.println("Book removed: " + books.get(i));
                books.remove(i);
                return;
            }
        }
        System.out.println("Book with ISBN " + isbn + " not found.");
    }

    // Method to display all books
    public void displayBooks() {
        if (books.isEmpty()) {
            System.out.println("No books in the collection.");
            return;
        }
        System.out.println("Books in the collection:");
        for (Book book : books) {
            System.out.println(book);
        }
    }
}

public class BookManagementSystem {
    public static void main(String[] args) {
        BookCollection collection = new BookCollection();

        // Create some books
        Book book1 = new Book("Java Programming", "Manjit", "1234567890");
        Book book2 = new Book("Python Programming", "Sandeep", "0987654321");
        Book book3 = new Book("C++ Programming", "Abhishek", "1122334455");

        // Add books to the collection
        collection.addBook(book1);
        collection.addBook(book2);
        collection.addBook(book3);

        // Display all books
        collection.displayBooks();

        // Remove a book
        collection.removeBook("0987654321");

        // Display all books again
        collection.displayBooks();
    }
}

`,
                output: `
Book added: Book{title='Java Programming', author='Manjit', isbn='1234567890'}
Book added: Book{title='Python Programming', author='Sandeep', isbn='0987654321'}
Book added: Book{title='C++ Programming', author='Abhishek', isbn='1122334455'}
Books in the collection:
Book{title='Java Programming', author='Manjit', isbn='1234567890'}
Book{title='Python Programming', author='Sandeep', isbn='0987654321'}
Book{title='C++ Programming', author='Abhishek', isbn='1122334455'}
Book removed: Book{title='Python Programming', author='Jane Doe', isbn='0987654321'}
Books in the collection:
Book{title='Java Programming', author='Manjit', isbn='1234567890'}
Book{title='C++ Programming', author='Abhishek', isbn='1122334455'}

                `
      },
      "create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.": {
          description: "Program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
          code: `
class Employee 
    {
        private String name;
        private String jobTitle;
        private double salary;
        public Employee(String name, String jobTitle, double salary) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayEmployeeDetails() {
        System.out.println("Employee Name: " + name);
        System.out.println("Job Title: " + jobTitle);
        System.out.println("Current Salary: Rs " + salary);
    }

    // Method to calculate salary after increment
    public double calculateSalary(double percentageIncrease) {
        return salary + (salary * percentageIncrease / 100);
    }

    // Method to update salary
    public void updateSalary(double newSalary) {
        this.salary = newSalary;
        System.out.println("Salary updated successfully!");
    }

    // Main method for testing
    public static void main(String[] args) {
        // Create an Employee object
        Employee emp = new Employee("Manjit", "Software Engineer", 60000);

        // Display employee details
        emp.displayEmployeeDetails();

        // Calculate new salary with a 10% increase
        double newSalary = emp.calculateSalary(10);
        System.out.println("New Salary after 10% increment: $" + newSalary);

        // Update the salary
        emp.updateSalary(newSalary);

        // Display updated employee details
        emp.displayEmployeeDetails();
    }
}
`,
                output: `
Employee Name: Manjit
Job Title: Software Engineer
Current Salary: Rs 60000.0
New Salary after 10% increment: $66000.0
Salary updated successfully!
Employee Name: Manjit
Job Title: Software Engineer
Current Salary: Rs 66000.0
                `
      },
      "create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.": {
          description: "Program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",
          code: `
import java.util.ArrayList;
import java.util.List;

class Account {
    private String accountNumber;
    private String accountHolder;
    private double balance;

    // Constructor
    public Account(String accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0; // Initial balance is 0
    }

    // Getters
    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // Method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount + " | New Balance: $" + balance);
        } else {
            System.out.println("Deposit amount must be positive!");
        }
    }

    // Method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount + " | New Balance: $" + balance);
        } else {
            System.out.println("Invalid withdrawal amount!");
        }
    }
}

class Bank {
    private List<Account> accounts;

    // Constructor
    public Bank() {
        accounts = new ArrayList<>();
    }

    // Method to add an account
    public void addAccount(Account account) {
        accounts.add(account);
        System.out.println("Account added: " + account.getAccountHolder());
    }

    // Method to remove an account by account number
    public void removeAccount(String accountNumber) {
        for (int i = 0; i < accounts.size(); i++) {
            if (accounts.get(i).getAccountNumber().equals(accountNumber)) {
                System.out.println("Account removed: " + accounts.get(i).getAccountHolder());
                accounts.remove(i);
                return;
            }
        }
        System.out.println("Account with account number " + accountNumber + " not found.");
    }

    // Method to get account by account number
    public Account getAccount(String accountNumber) {
        for (Account account : accounts) {
            if (account.getAccountNumber().equals(accountNumber)) {
                return account;
            }
        }
        return null;
    }
}

public class BankManagementSystem {
    public static void main(String[] args) {
        Bank bank = new Bank();

        // Create some accounts
        Account account1 = new Account("12345", "Manjit");
        Account account2 = new Account("67890", "Sandeep");

        // Add accounts to the bank
        bank.addAccount(account1);
        bank.addAccount(account2);

        // Perform some transactions
        account1.deposit(500);
        account1.withdraw(200);

        account2.deposit(1000);
        account2.withdraw(1500); // This should show an invalid withdrawal message

        // Remove an account
        bank.removeAccount("12345");
        
        // Try to remove a non-existing account
        bank.removeAccount("11111");
    }
}

`,
                output: `
Account added: Manjit
Account added: Sandeep
Deposited: Rs. 5000.0 | New Balance: Rs. 5000.0
Withdrawn: Rs. 200.0 | New Balance: Rs. 300.0
Deposited: Rs. 1000.0 | New Balance: Rs. 1000.0
Invalid withdrawal amount!
Account removed: Manjit
Account with account number 11111 not found.

                `
      },
      "create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.": {
          description: "Program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
          code: `
class TrafficLight {
    private String color;    // Current color of the traffic light
    private int duration;    // Duration for which the color is displayed in seconds

    // Constructor
    public TrafficLight(String color, int duration) {
        this.color = color;
        this.duration = duration;
    }

    // Method to change the color of the traffic light
    public void changeColor(String newColor, int newDuration) {
        this.color = newColor;
        this.duration = newDuration;
        System.out.println("Traffic light changed to: " + color + " for " + duration + " seconds.");
    }

    // Method to check if the light is red
    public boolean isRed() {
        return color.equalsIgnoreCase("red");
    }

    // Method to check if the light is green
    public boolean isGreen() {
        return color.equalsIgnoreCase("green");
    }

    // Method to display current status
    public void displayStatus() {
        System.out.println("Current color: " + color + ", Duration: " + duration + " seconds.");
    }
}

public class TrafficLightSystem {
    public static void main(String[] args) {
        // Create a TrafficLight object
        TrafficLight trafficLight = new TrafficLight("Red", 30);

        // Display current status
        trafficLight.displayStatus();

        // Check if the light is red or green
        System.out.println("Is the light red? " + trafficLight.isRed());
        System.out.println("Is the light green? " + trafficLight.isGreen());

        // Change the color to green
        trafficLight.changeColor("Green", 45);

        // Display current status again
        trafficLight.displayStatus();

        // Check again if the light is red or green
        System.out.println("Is the light red? " + trafficLight.isRed());
        System.out.println("Is the light green? " + trafficLight.isGreen());
    }
}

`,
                output: `
Current color: Red, Duration: 30 seconds.
Is the light red? true
Is the light green? false
Traffic light changed to: Green for 45 seconds.
Current color: Green, Duration: 45 seconds.
Is the light red? false
Is the light green? true

                `
      },
      "create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.": {
          description: "Program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
          code: `
import java.time.LocalDate;
import java.time.Period;

class Employee {
    private String name;          // Employee name
    private double salary;        // Employee salary
    private LocalDate hireDate;   // Employee hire date

    // Constructor
    public Employee(String name, double salary, LocalDate hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    // Method to calculate years of service
    public int calculateYearsOfService() {
        LocalDate currentDate = LocalDate.now(); // Get the current date
        Period period = Period.between(hireDate, currentDate); // Calculate the period
        return period.getYears(); // Return the number of years
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Salary: Rs." + salary);
        System.out.println("Hire Date: " + hireDate);
        System.out.println("Years of Service: " + calculateYearsOfService());
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
        // Create an Employee object
        Employee employee = new Employee("Manjit", 50000, LocalDate.of(2015, 9, 15));

        // Display employee details
        employee.displayDetails();
    }
}

`,
                output: `
Name: Manjit
Salary: Rs. 50000.0
Hire Date: 2015-09-15
Years of Service: 9

                `
      },
      "create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.": {
          description: "Program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
          code: `
import java.util.ArrayList;
import java.util.List;

class Student {
    private String name;                  // Student's name
    private String grade;                 // Student's grade
    private List<String> courses;         // List of courses

    // Constructor
    public Student(String name, String grade) {
        this.name = name;
        this.grade = grade;
        this.courses = new ArrayList<>(); // Initialize the courses list
    }

    // Method to add a course
    public void addCourse(String course) {
        if (!courses.contains(course)) {
            courses.add(course);
            System.out.println("Course " + course + " added for " + name);
        } else {
            System.out.println("Course " + course + " already exists for " + name);
        }
    }

    // Method to remove a course
    public void removeCourse(String course) {
        if (courses.contains(course)) {
            courses.remove(course);
            System.out.println("Course " + course + " removed for " + name);
        } else {
            System.out.println("Course " + course + " not found for " + name);
        }
    }

    // Method to display student details
    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Grade: " + grade);
        System.out.println("Courses: " + courses);
    }
}

public class StudentManagement {
    public static void main(String[] args) {
        // Create a Student object
        Student student = new Student("Manjit", "10th Grade");

        // Display student details
        student.displayDetails();

        // Add courses
        student.addCourse("Mathematics");
        student.addCourse("Science");
        student.addCourse("English");

        // Display student details after adding courses
        student.displayDetails();

        // Remove a course
        student.removeCourse("Science");

        // Display student details after removing a course
        student.displayDetails();

        // Attempt to remove a course that doesn't exist
        student.removeCourse("History");
    }
}

`,
                output: `
Name: Manjit
Grade: 10th Grade
Courses: []
Course Mathematics added for Manjit
Course Science added for Manjit
Course English added for Manjit
Name: Manjit
Grade: 10th Grade
Courses: [Mathematics, Science, English]
Course Science removed for Manjit
Name: Manjit
Grade: 10th Grade
Courses: [Mathematics, English]
Course History not found for Manjit

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
class Default
        {
        Default()
        {
        System.println("Hello, I am Default Constructor!");
        }
        public static void main(String st[])
        {
        new Default();
        }
        }
`,
                output: `
Hello, I am Default Constructor!
                `
      },
      "Create a class showing an example of parameterized constructor.": {
          description: "Program to Create a class showing an example of parameterized constructor.",
          code: `
class Parameterized
        {
        Parameterized(String n)
        {
        System.println("Hello,"+n+" I am Parameterized Constructor!");
        }
        public static void main(String st[])
        {
        new Parameterized("Manjit");
        }
        }
`,
                output: `
Hello,Manjit I am Parameterized Constructor
                `
      },
      "Create a class showing an example of copy constructor.": {
          description: "Program to Create a class showing an example of copy constructor.",
          code: `
class Copy
        {
        Copy()
        {
        }
        Copy(Copy obj)
        {
        System.println("Hello, I am Copy Constructor!");
        }
        public static void main(String st[])
        {
        Copy obj =new Copy();
        Copy copyObj = new Copy(obj);
        }
        }
`,
                output: `
Hello, I am Copy Constructor!
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
class CmdLineArg
        {
        public static void main(String st[])
        {
        for(int i =0;i<st.length();i++)
      {
        System.out.println(st[i]);
        }
        }
        }
`,
                output: `
C:/>java CmdLineArg Manjit Sandeep Abhishek
Manjit 
Sandeep 
Abhishek
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
      
  },
  "Hard": {
      
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
class A
    {
        A()
        {
            System.out.println("I am Class A");
        }
    }
class B
    {
        B()
        {
            System.out.println("I am Class B");
        }
    }
class C
    {
        C()
        {
            System.out.println("I am Class C");
        }
    }
    class Main
        {
            public static void main(String[] args) {
                new A();
                new B();
                new C();
            }
        }
`,
                output: `
 I am Class A
 I am Class B
 I am Class C
                `
      },
      " Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.": {
          description: "Program to  Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",
          code: `
package pack1.pack;
public class ClassA
    {
       public void display()
        {
            System.out.println("This is Class A!");
        }
    }
--------------------------------------------------
package pack1.pack;
public class ClassB
    {
        public void display()
        {
            System.out.println("This is Class B!");
        }
    }
---------------------------------------------------
package pack1.pack;
public class ClassC
    {
        public void display()
        {
            System.out.println("This is Class C!");
        }
    }
--------------------------------------------------
package pack1.pack;
public class ClassD
    {
        public void display()
        {
            System.out.println("This is Class D!");
        }
    }
`,
                output: `
 This is Class A!
 This is Class B!
 This is Class C!
 This is Class D!
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
      
      
  },
  "Hard": {
      
  }
},
"SINGLE DIMENSION ARRAYS": {
  "Easy": {
      "Copy all elements of one array into another array": {
          description: "Program to copy all elements of one array into another array",
          code: `
class CopyArray
	{
	public static void main(String st[])
	{
	int arr[]={1,2,3,4},i;
	int arr2[] = new int[arr.length];
	for(i=0;i&lt;arr.length;i++)
	{
	arr2[i]=arr[i];
	
	}
	System.out.println("Orignel Array");
	for(i=0;i&lt;arr.length;i++)
	{
	System.out.println(arr[i]);
	}
	System.out.println("Copy Array");
        for(i=0;i&lt;arr.length;i++)
        {
        System.out.println(arr2[i]);
        }
	}
	}

`,
                output: `
Orignel Array
1
2
3
4
Copy Array
1
2
3
4               `
      },
      "Find the frequency of each element in the array": {
          description: "Program to find the frequency of each element in the array",
          code: `
class Frequency {
    public static void main(String[] args) {
        int[] array = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
        int[] frequency = new int[array.length];

        for (int i = 0; i &lt; array.length; i++) {
            int count = 0;
            for (int j = 0; j &lt; array.length; j++) {
                if (array[i] == array[j]) {
                    count++;
                }
            }
            frequency[i] = count;
        }

        for (int i = 0; i &lt; array.length; i++) {
            boolean isDuplicate = false;
            for (int j = 0; j &lt; i; j++) {
                if (array[i] == array[j]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                System.out.println("Number " + array[i] + " appears " + frequency[i] + " times");
            }
        }
    }
}
`,
                output: `
Number 1 appears 1 times
Number 2 appears 2 times
Number 3 appears 3 times
Number 4 appears 4 times

                `
      },
      "Left rotate the elements of an array": {
          description: "Program to left rotate the elements of an array",
          code: `
class LeftRotate {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int rotations = 2;

        System.out.println("Original array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Left rotate
        for (int i = 0; i &lt; rotations; i++) {
            int temp = array[0];
            for (int j = 0; j &lt; array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array[array.length - 1] = temp;
        }

        System.out.println("Rotated array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

`,
                output: `
Original array:
1 2 3 4 5
Rotated array:
3 4 5 1 2
                `
      },
      "Print the duplicate elements of an array": {
          description: "Program to print the duplicate elements of an array",
          code: `
 class Duplicate {
    public static void main(String[] args) {
        int[] array = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};

        System.out.println("Duplicate elements:");
        for (int i = 0; i &lt; array.length; i++) {
            int count = 0;
            for (int j = 0; j &lt; array.length; j++) {
                if (array[i] == array[j]) {
                    count++;
                }
            }
            if (count &gt; 1 && array[i] != -1) {
                System.out.println(array[i]);
                array[i] = -1;
            }
        }
    }
}
`,
                output: `
   output//
                `
      },
      "Print the elements of an array": {
          description: "Program to print the elements of an array",
          code: `
class PrintArray
	{
	public static void main(String st[])
	{
	int arr[]={1,2,3,4},i;
	for(i=0;i&lt;arr.length;i++)
	{
	System.out.println(arr[i]);
	}
	}
	}

`,
                output: `
Duplicate elements:
2
3
3
4
4
4
                `
      },
      "Print the elements of an array in reverse order": {
          description: "Program to print the elements of an array in reverse order",
          code: `
class PrintReverseArray
        {
        public static void main(String st[])
        {
        int arr[]={1,2,3,4},i;
        for(i=arr.length-1;i&gt=;0;i--)
        {
        System.out.println(arr[i]);
        }
        }
        }

`,
                output: `
4
3
2
1                `
      },
      "Print the elements of an array present on even position": {
          description: "Program to  print the elements of an array present on even position",
          code: `
class PrintEvenPosition
		{
		public static void main(String st[])
		{
		int arr[]={1,2,3,4},i;
		for(i=0;i&lt;arr.length;i++)
		{
		if(i%2==0)
		{
		System.out.println(arr[i]);
		}
		}
		}
		}
`,
                output: `
1
3
                `
      },
      "Print the elements of an array present on odd position": {
          description: "Program to print the elements of an array present on odd position",
          code: `
class PrintOddPosition
                {
                public static void main(String st[])
                {
                int arr[]={1,2,3,4},i;
                for(i=0;i&lt;arr.length;i++)
                {
                if(i%2!=0)
                {
                System.out.println(arr[i]);
                }
                }
                }
                }
`,
                output: `
2 4
                `
      },
      "Print the largest element in an array": {
          description: "Program to print the largest element in an array",
          code: `
class Largest
	{
	public static void main(String st[])
	{
	int arr[]={1,20,30,4,5},i,temp,max=0;
	temp=arr[0];
	for(i=0;i&lt;arr.length;i++)
	{
	if(arr[i]&gt;temp)
	{
	temp=arr[i];
	max=temp;
	}
	else
	{
	max=temp;
	}
	}
	System.out.println("Largest element is :- "+max);
	
	}
	}

`,
                output: `
Largest element is :- 30
                `
      },
      "Print the smallest element in an array": {
          description: "Program to print the smallest element in an array",
          code: `
class Smallest
        {
        public static void main(String st[])
        {
        int arr[]={1,20,30,4,5},i,temp,min=0;
        temp=arr[0];
        for(i=0;i&lt;arr.length;i++)
        {
        if(arr[i]&lt;temp)
        {
        temp=arr[i];
        min=temp;
        }
        else
        {
        min=temp;
        }
        }
        System.out.println("Smallest element is :- "+min);

        }
        }

`,
                output: `
Smallest element is :- 1
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
class SumOfElements
	{
	public static void main(String st[])
	{
	int arr[]={1,2,3,4},sum=0,i;
	for(i=0;i&lt;arr.length;i++)
	{
	sum+=arr[i];
	}
	System.out.println("Sum Of Element :- "+sum);
	}
	}
`,
                output: `
Sum Of Element :- 10
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
class Sort
	{
	public static void main(String st[])
	{
	int arr[]={4,3,5,1,6},i,j,temp;
	for(i=0;i&lt;arr.length;i++)
	{
	for(j=i+1;j&lt;arr.length;j++)
	{
	if(arr[j]&gt;arr[i])
	{
	temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
	}
	}
	}
	for(i=0;i&lt;arr.length;i++)
	{
	System.out.println(arr[i]);
	}
	}
	}
`,
                output: `
1
3
4
5
6
                `
      },
      "Sort the elements of an array in descending order": {
          description: "Program to sort the elements of an array in descending order",
          code: `
class Sort
	{
	public static void main(String st[])
	{
	int arr[]={4,3,5,1,6},i,j,temp;
	for(i=0;i&lt;arr.length;i++)
	{
	for(j=i+1;j&lt;arr.length;j++)
	{
	if(arr[j]&lt;arr[i])
	{
	temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
	}
	}
	}
	for(i=0;i&lt;arr.length;i++)
	{
	System.out.println(arr[i]);
	}
	}
	}
`,
                output: `
6
5
4
3
1
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
class Largest
	{
	public static void main(String st[])
	{
	int arr[]={1,20,30,4,5},i,temp,max=0;
	temp=arr[0];
	for(i=0;i&lt;arr.length;i++)
	{
	if(arr[i]&gt;temp)
	{
	temp=arr[i];
	max=temp;
	}
	else
	{
	max=temp;
	}
	}
	System.out.println("Largest element is :- "+max);
	
	}
	}

`,
                output: `
Largest element is :- 30
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
     

  },
  "Hard": {
     
  }
},
"STRINGS": {
  "Easy": {
    "Check if a String contains only digits?": {
        description: "Program to Check if a String contains only digits?.",
        code: `
class Digit
	{
	public static void main(String st[])
	{
	String str="768";
	boolean isDigit=false;
	int i;
	for(i=0;i &lt; str.length();i++)
	{
	if(str.charAt(i) &gt; '0' && str.charAt(i) &lt; '9')
	{
	isDigit=true;
	}
	else{
	isDigit=false;
	break;
	}
	}
	if(isDigit)
	{
	System.out.println("Only digit");
	}
	else
	{
	System.out.println("Mix");
	}
	}
	}


`,
output: `
Only digit
          `
    },
    " perform Deep Copy for String?": {
        description: "Program to  perform Deep Copy for String?.",
        code: `
class DeepCopy {
    public static void main(String[] args) {
        String original = "Hello";
        StringBuffer sb = new StringBuffer(original);
        String copy = sb.toString();

        System.out.println("Original: " + original);
        System.out.println("Copy: " + copy);

        // Modify the original string
        original = "World";

        System.out.println("After modification:");
        System.out.println("Original: " + original);
        System.out.println("Copy: " + copy);
    }
}

`,
output: `
Original: Hello
Copy: Hello
After modification:
Original: World
Copy: Hello
          `
    },
   "prove String is immutable programmatically?": {
        description: "Program to prove String is immutable programmatically?.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "remove all occurrences of a given character from input String?": {
        description: "Program to remove all occurrences of a given character from input String?.",
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
    
                        for (int i = 0; i &lt; arr1.length; i++) {
                            int count1 = 0, count2 = 0;
                            for (int j = 0; j &lt; arr1.length; j++) {
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
                for (int i = 0; i &lt; length / 2; i++) {
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
    
                    for (int i = 0; i &lt; str.length(); i++) {
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
    
                    for (int i = 0; i &lt; str.length(); i++) {
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

                for (int i = 0; i &lt; str.length(); i++) {
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
"count the total number of punctuation characters exists in a String":
{
 description: "Program to count the total number of punctuation characters exists in a String."
 ,
 code : `
 code//
 `,
 output:
 `
 output//
 `
},
    "count the total number of vowels and consonants in a string.": {
        description: "Program to count the total number of vowels and consonants in a string.",
        code: `
            public class VowelConsonantCount {
                public static void main(String[] args) {
                    String str = "Hello World";
                    int vowelCount = 0;
                    int consonantCount = 0;
                    str = str.toLowerCase();
    
                    for (int i = 0; i &lt; str.length(); i++) {
                        char ch = str.charAt(i);
                        if (ch &gt;= 'a' && ch &lt;= 'z') {
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
    },
"determine whether a given string is palindrome":
{
 description: "Program to determine whether a given string is palindrome."
 ,
 code : `
 code//
 `,
 output:
 `
 output//
 `
},
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
    
                    for (int i = 0; i &lt;= combined.length() - str2.length(); i++) {
                        boolean match = true;
                        for (int j = 0; j &lt; str2.length(); j++) {
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
                        for (int i = 0; i &lt; str.length(); i++) {
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
                
                for (int i = 0; i &lt; (1 &lt;&lt; n); i++) {
                    String subset = "";
                    for (int j = 0; j &lt; n; j++) {
                        if ((i & (1 &lt;&lt; j)) != 0) {
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
                        for (int i = 0; i &lt; str.length(); i++) {
                            char ch = str.charAt(i);
                            String remaining = "";
                            for (int j = 0; j &lt; str.length(); j++) {
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
    
                    for (int i = 0; i &lt; str.length(); i++) {
                        charCount[str.charAt(i)]++;
                    }
    
                    char maxChar = ' ';
                    char minChar = ' ';
                    int maxCount = 0;
                    int minCount = Integer.MAX_VALUE;
    
                    for (int i = 0; i &lt; charCount.length; i++) {
                        if (charCount[i] &gt; 0) {
                            if (charCount[i] &gt; maxCount) {
                                maxCount = charCount[i];
                                maxChar = (char) i;
                            }
                            if (charCount[i] &lt; minCount) {
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
    
                    for (int i = str.length() - 1; i &gt;= 0; i--) {
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
                for (int i = 0; i &lt; str.length(); i++) {
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
                    for (int i = 0; i &lt; str.length(); i++) {
                        char ch = str.charAt(i);
                        if (ch == ' ' || i == str.length() - 1) {
                            if (i == str.length() - 1 && ch != ' ') {
                                currentWord += ch;
                            }
                            boolean isDuplicate = false;
                            for (int j = 0; j &lt; wordCount; j++) {
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
                    for (int i = 0; i &lt; wordCount; i++) {
                        if (!visited[i]) {
                            String word = words[i];
                            int count = 0;
                            for (int j = 0; j &lt; wordCount; j++) {
                                if (words[j].equals(word)) {
                                    count++;
                                }
                            }
                            if (count &gt; 1) {
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
        for (int i = 0; i &lt; str.length(); i++) {
            char ch = str.charAt(i);
            freq[ch]++;
        }

        // Print the frequencies of characters
        System.out.println("Character frequencies are:");
        for (int i = 0; i &lt; freq.length; i++) {
            if (freq[i] &gt; 0) {
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
    "find the largest and smallest word in a string": {
        description: "Program to find the largest and smallest word in a string.",
        code: `
          code//

`,
output: `
          output//
          `
    },
   "find the longest repeating sequence in a string": {
        description: "Program to find the longest repeating sequence in a string.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "find the most repeated word in a text file": {
        description: "Program to find the most repeated word in a text file.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "find the number of the words in the given text file": {
        description: "Program to find the number of the words in the given text file.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    " Get a Character From the Given String": {
        description: "Program to  Get a Character From the Given String.",
        code: `
          code//

`,
output: `
          output//
          `
    },
   "nsert a string into another string": {
        description: "Program to nsert a string into another string.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "Iterate Over Characters in String": {
        description: "Program to Iterate Over Characters in String.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "Print a New Line in String": {
        description: "Program to Print a New Line in String.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "Print even length words": {
        description: "Program to Print even length words.",
        code: `
          code//

`,
output: `
          output//
          `
    },
   "print smallest and biggest possible palindrome word in a given string": {
        description: "Program to print smallest and biggest possible palindrome word in a given string.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "remove all the white spaces from a string": {
        description: "Program to remove all the white spaces from a string.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "replace lower-case characters with upper-case and vice-versa": {
        description: "Program to replace lower-case characters with upper-case and vice-versa.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "replace the spaces of a string with a specific character": {
        description: "Program to replace the spaces of a string with a specific character.",
        code: `
          code//

`,
output: `
          output//
          `
    },
   " separate the Individual Characters from a String": {
        description: "Program to  separate the Individual Characters from a String.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "Splitting into a number of sub-strings": {
        description: "Program to Splitting into a number of sub-strings.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    " swap two string variables without using third or temp variable.": {
        description: "Program to  swap two string variables without using third or temp variable..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "Swapping Pair of Characters": {
        description: "Program to Swapping Pair of Characters.",
        code: `
          code//

`,
output: `
          output//
          `
    },
   "Read two String user input and check if first contains second?": {
        description: "Program to Read two String user input and check if first contains second?.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    " Reserve String without reverse() function": {
        description: "Program to  Reserve String without reverse() function.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    " Reverse String Word by Word": {
        description: "Program to  Reverse String Word by Word.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "check if two Strings are created with same characters?": {
        description: "Program to check if two Strings are created with same characters?.",
        code: `
          code//

`,
output: `
          output//
          `
    },
   "find out first non repeated character from input String?": {
        description: "Program to find out first non repeated character from input String?.",
        code: `
          code//

`,
output: `
          output//
          `
    },
    "Create an object StringBuffer class to reverse the string.": {
        description: "Program to Create an object StringBuffer class to reverse the string..",
        code: `
          code//

`,
output: `
          output//
          `
    },
    " Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.": {
        description: "Program to  Create an object StringBuffer class to show functionality of insert, append, delete and replace functions..",
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

  