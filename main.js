console.log("hello");

function close() {
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
import java.util.Scanner;

public class MatrixEqualityChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input for the first matrix
        System.out.print("Enter the number of rows for the matrices: ");
        int rows = scanner.nextInt();
        System.out.print("Enter the number of columns for the matrices: ");
        int cols = scanner.nextInt();

        int[][] matrix1 = new int[rows][cols];
        int[][] matrix2 = new int[rows][cols];

        System.out.println("Enter elements of the first matrix:");
        fillMatrix(scanner, matrix1, rows, cols);

        System.out.println("Enter elements of the second matrix:");
        fillMatrix(scanner, matrix2, rows, cols);

        // Check if the matrices are equal
        boolean areEqual = areMatricesEqual(matrix1, matrix2);

        // Display the result
        if (areEqual) {
            System.out.println("The two matrices are equal.");
        } else {
            System.out.println("The two matrices are not equal.");
        }

        scanner.close();
    }

    // Method to fill a matrix with user input
    public static void fillMatrix(Scanner scanner, int[][] matrix, int rows, int cols) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print("Enter element [" + (i + 1) + "][" + (j + 1) + "]: ");
                matrix[i][j] = scanner.nextInt();
            }
        }
    }

    // Method to check if two matrices are equal
    public static boolean areMatricesEqual(int[][] matrix1, int[][] matrix2) {
        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[i].length; j++) {
                if (matrix1[i][j] != matrix2[i][j]) {
                    return false; // Found a mismatch
                }
            }
        }
        return true; // All elements are equal
    }
}

`,
                output: `
Enter the number of rows for the matrices: 2
Enter the number of columns for the matrices: 2
Enter elements of the first matrix:
Enter element [1][1]: 1
Enter element [1][2]: 2
Enter element [2][1]: 3
Enter element [2][2]: 4
Enter elements of the second matrix:
Enter element [1][1]: 1
Enter element [1][2]: 2
Enter element [2][1]: 3
Enter element [2][2]: 4
The two matrices are equal.

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
<img src="AppletImg/HW.png" alt="Hello World" loading="lazy">
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
<img src="AppletImg/HW.png" alt="Hello World" loading="lazy">
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
<img src="AppletImg/circle.png" alt="circle" loading="lazy">
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
<img src="AppletImg/Rectangle.png" alt="Rectangle" loading="lazy">
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
<img src="AppletImg/square.png" alt="square" loading="lazy">
                `
            },
            "Create an applet in Java to draw a 4 concentric circles.": {
                description: "Create an applet in Java to draw a 4 concentric circles.",
                code: `
import java.applet.*;
import java.awt.*;
public class Circles extends Applet{
  public void paint(Graphics g) {
        // Set the center of the circles
        int centerX = getWidth() / 2;
        int centerY = getHeight() / 2;

        // Set initial radius and radius increment
        int radiusIncrement = 20;

        // Draw four concentric circles
        for (int i = 1; i <= 4; i++) {
            int radius = i * radiusIncrement;
            g.drawOval(centerX - radius, centerY - radius, 2 * radius, 2 * radius);
        }
    }
}
/*
 &lt;applet code = "Circles.class" width = "300" height= "500">&lt;/applet>
 */
`,
                output: `
<img src="AppletImg/fourCircles.png" alt="circles" loading="lazy">
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
<img src="AppletImg/line.png" alt="line" loading="lazy">
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
<img src="AppletImg/oval.png" alt="oval" loading="lazy">
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
<img src="AppletImg/Arc.png" alt="Arc" loading="lazy">
                `
            },
           
            "Create an applet in Java to draw rounded rectangle.": {
                description: "Create an applet in Java to draw rounded rectangle.",
                code: `
import java.applet.Applet;
import java.awt.Graphics;

public class RoundedRect extends Applet {

    public void paint(Graphics g) {
        g.drawRoundRect(50, 50, 200, 100, 30, 30);  
}
}
/*
 &lt;applet code = "RoundedRect.class" width = "300" height= "300"&gt;&lt;/applet&gt;
 */

`,
                output: `
<img src="AppletImg/roundrect.png" alt="roundrect" loading="lazy">
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
<img src="AppletImg/smile.png" alt="smile" loading="lazy">
                `
            },

        },
        "Medium": {
            "Create an applet in Java to change the background color.": {
                description: "Create an applet in Java to change the background color.",
                code: `
import java.applet.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
public class BgColor extends Applet{
    public void init()
    {
        setBackground(Color.red);
        Button r = new Button("red");
        Button g = new Button("green");
        Button b = new Button("blue");
        add(b);
        add(g);
        add(r);
        r.addMouseListener(new MouseAdapter()
        {
            public void mouseClicked(MouseEvent e)
            {
                setBackground(Color.red);
            }
        });
        g.addMouseListener(new MouseAdapter()
        {
            public void mouseClicked(MouseEvent e)
            {
                setBackground(Color.green);
            }
        });
        b.addMouseListener(new MouseAdapter()
        {
            public void mouseClicked(MouseEvent e)
            {
                setBackground(Color.blue);
            }
        });
    }
}
/*
 &lt;applet code = "BgColor.class" width = "300" height= "300"&gt;&lt;/applet&gt;
 */

`,
                output: `
<img src="AppletImg/bgcolor.png" alt="bgcolor" loading="lazy">
                `
            },
        },
        "Hard": {
            "Create an applet in Java to set font.": {
                description: "Create an applet in Java to set font.",
                code: `
import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

public class FontApplet extends Applet implements ItemListener {
    private String fontName = "Serif";
    private int fontStyle = Font.PLAIN;
    private int fontSize = 20;

    private Label sampleText;
    private Choice fontNameChoice, fontStyleChoice, fontSizeChoice;

    public void init() {
        // Set layout
        setLayout(new FlowLayout());

        // Sample text label
        sampleText = new Label("Sample Text");
        sampleText.setFont(new Font(fontName, fontStyle, fontSize));
        add(sampleText);

        // Font name choice
        fontNameChoice = new Choice();
        fontNameChoice.add("Serif");
        fontNameChoice.add("SansSerif");
        fontNameChoice.add("Monospaced");
        fontNameChoice.add("Dialog");
        fontNameChoice.add("DialogInput");
        fontNameChoice.addItemListener(this);
        add(new Label("Font:"));
        add(fontNameChoice);

        // Font style choice
        fontStyleChoice = new Choice();
        fontStyleChoice.add("Plain");
        fontStyleChoice.add("Bold");
        fontStyleChoice.add("Italic");
        fontStyleChoice.addItemListener(this);
        add(new Label("Style:"));
        add(fontStyleChoice);

        // Font size choice
        fontSizeChoice = new Choice();
        for (int i = 12; i <= 36; i += 2) {
            fontSizeChoice.add(String.valueOf(i));
        }
        fontSizeChoice.select("20");  // Default selection
        fontSizeChoice.addItemListener(this);
        add(new Label("Size:"));
        add(fontSizeChoice);
    }

    public void itemStateChanged(ItemEvent e) {
        // Update font based on selections
        fontName = fontNameChoice.getSelectedItem();

        String style = fontStyleChoice.getSelectedItem();
        switch (style) {
            case "Bold":
                fontStyle = Font.BOLD;
                break;
            case "Italic":
                fontStyle = Font.ITALIC;
                break;
            default:
                fontStyle = Font.PLAIN;
                break;
        }

        fontSize = Integer.parseInt(fontSizeChoice.getSelectedItem());

        // Apply new font to sample text
        sampleText.setFont(new Font(fontName, fontStyle, fontSize));
        repaint();
    }
}

`,
                output: `
<applet code = "FontApplet.class" width = "300" height= "300"></applet>
                `
            },
"Create an applet to display a digital clock.": {
                description: "Create an applet to display a digital clock.",
                code: `
import java.applet.*;
import java.awt.*;
public class DigitalClock2 extends Applet implements Runnable{
Label hh;
Label mm;
Label ss;
Thread t;
    public void init()
    {
        int x=20,y=150;
        setLayout(null);
         hh = new Label("00");
         mm = new Label("00");
         ss = new Label("00");
         hh.setBounds(x, y, 30, 50);
         mm.setBounds(x += 40, y, 30, 50);
         ss.setBounds(x += 40, y, 30, 50);
        add(hh);
        add(mm);
        add(ss);
        t = new Thread(this);
        t.start();
       }
    public void paint(Graphics g)
    {
        g.drawRect(10, 130, 150, 70);
        
    }
    public void run()
    {
        int h=12,m=34,s=45;
        while (true) {
            s++;
            if (s==60) {
                s=0;
                m++;
            }
            if (m==60) {
                m=0;
                h++;
            }
            hh.setText(String.format("%02d", h));
            mm.setText(String.format("%02d", m));
            ss.setText(String.format("%02d", s));
            try
            {
                Thread.sleep(1000);
            }
            catch(InterruptedException e)
            {
                System.out.println(e.getMessage());
            }
        }
    }
}

/*
 <applet code = "digitalclock/DigitalClock2.class" width = "300" height= "300"></applet>
 */

`,
                output: `
<img src="AppletImg/clock.png" alt="clock" loading="lazy">
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
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CheckJavaInstallation {
    public static void main(String[] args) {
        try {
            // Create a process to execute the command
            ProcessBuilder processBuilder = new ProcessBuilder("java", "-version");
            processBuilder.redirectErrorStream(true); // Combine error stream with output stream
            Process process = processBuilder.start(); // Start the process

            // Read the output from the process
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            StringBuilder output = new StringBuilder();

            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            // Wait for the process to complete
            int exitCode = process.waitFor();

            // Check if Java is installed based on the exit code
            if (exitCode == 0) {
                System.out.println("Java is installed:");
                System.out.println(output);
            } else {
                System.out.println("Java is not installed.");
            }

        } catch (IOException e) {
            System.out.println("An error occurred while checking for Java installation: " + e.getMessage());
        } catch (InterruptedException e) {
            System.out.println("Process was interrupted: " + e.getMessage());
        }
    }
}

`,
                output: `
Java is installed:
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-39, mixed mode, sharing)

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
import java.util.Scanner;

public class AddTwoNumbersWithoutArithmetic {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input for the first number
        System.out.print("Enter first number: ");
        int num1 = scanner.nextInt();

        // Input for the second number
        System.out.print("Enter second number: ");
        int num2 = scanner.nextInt();

        // Call the method to add the numbers
        int sum = add(num1, num2);

        // Display the result
        System.out.println("Sum of " + num1 + " and " + num2 + " is: " + sum);

        // Close the scanner
        scanner.close();
    }

    // Method to add two numbers without using arithmetic operators
    public static int add(int a, int b) {
        while (b != 0) {
            // Calculate carry
            int carry = a & b;

            // Sum without carry
            a = a ^ b;

            // Shift carry left by one to add it to a
            b = carry << 1;
        }
        return a; // When b becomes 0, a contains the sum
    }
}

`,
                output: `
Enter first number: 5
Enter second number: 7
Sum of 5 and 7 is: 12

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
import java.util.Scanner;

public class VowelOrConsonant {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user for a character
        System.out.print("Enter a character: ");
        char ch = scanner.next().charAt(0); // Read the character input

        // Check if the input is a letter
        if (Character.isLetter(ch)) {
            // Convert character to lowercase to handle both cases
            char lowercaseChar = Character.toLowerCase(ch);

            // Check if the character is a vowel
            if (lowercaseChar == 'a' || lowercaseChar == 'e' || lowercaseChar == 'i' || 
                lowercaseChar == 'o' || lowercaseChar == 'u') {
                System.out.println(ch + " is a vowel.");
            } else {
                System.out.println(ch + " is a consonant.");
            }
        } else {
            System.out.println("Invalid input. Please enter a letter.");
        }

        // Close the scanner
        scanner.close();
    }
}


`,
                output: `
Enter a character: a
a is a vowel.

    
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
                description: "Write a Java program to sum values of an array",
                code:
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
                description: "Write a Java program to find the index of an array element",
                code:
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
                description: "Write a Java program to calculate the average value of array elements",
                code:
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
                description: "Write a Java program to test if an array contains a specific value",
                code:
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
                description: "Write a Java program to find the maximum and minimum value of an array",
                code:
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
                description: "Write a Java program to insert an element (specific position) into an array",
                code:
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
                description: "Write a Java program to reverse an array of integer values",
                code:
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
                description: "Write a Java program to find the common elements between two arrays",
                code:
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
                description: "Write a Java program to find the duplicate values of an array of integer values",
                code:
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
                description: "Write a Java program to convert an array to ArrayList",
                code:
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
                description: "Write a Java program to add two matrices of the same size",
                code:
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
                description: "Write a Java program to find second largest number from the array",
                code:
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
                description: "Write a Java program to find second lowest number from the array",
                code:
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
                description: "Write a Java program to find the number of even and odd integers in a given array of integers",
                code:
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
                description: "Write a Java program to get the difference between the largest and smallest values in an array of integers",
                code:
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
                description: "Write a Java program to get the difsegregate all 0s on left side and all 1s on right side of a given array of 0s and 1sference between the largest and smallest values in an array of integers",
                code:
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
                description: "Write a Java program to cyclically rotate a given array clockwise by one",
                code:
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
                description: "Write a Java program to print all unique element in an array",
                code:
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
                description: "Write a Java program to Sort the Array in an Ascending Order",
                code:
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
                description: "Write a Java program to Sort the Array in an Descending Order",
                code:
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
                description: "Write a Java program to Sort Names in an Alphabetical Order",
                code:
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
                description: "Write a Java program to Display Transpose Matrix",
                code:
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
                description: "Write a Java program to Search Key Elements in an Array",
                code:
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
                description: "Write a Java program to Accept the Marks of a Student and find Total Marks and Percentage",
                code:
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
                description: "Write a Java program to print numbers from 1 to 10 using loop",
                code:
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
                description: "Write a Java program to calculate the sum of first 10 natural number using loop",
                code:
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
                description: "Write a Java program to print multiplication table of given number",
                code:
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
                description: "Write a Java program to find the factorial value of any number entered through the keyboard",
                code:
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
                description: "Write a Java program to that prompts the user to input an integer and then outputs the number with the digits reversed order",
                code:
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
                description: "Write a Java program to that reads a set of integers, and then prints the sum of the even and odd integers using loop",
                code:
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
                description: "Write a Java program to to check whether the number is a prime number or not",
                code:
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
                description: "Write a Java program to to calculate HCF of Two given numbers using loop",
                code:
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
                description: "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
                code:
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
                description: "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
                code:
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
                description: "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
                code:
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
                description: "Write a Java program to count total number of notes in entered amount using loop",
                code:
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
                description: "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
                code:
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
                description: "Write a Java program to calculate the sum of following series where n is input by user",
                code:
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
                description: "Write a Java method to compute the average of three numbers",
                code:
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
                description: "Write a Java method to find the smallest number among three numbers",
                code:
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
                description: "Write a Java method to count all words in a string",
                code:
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
                description: "Write a Java method to count all vowels in a string",
                code:
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
                description: "Write a Java method to compute the sum of the digits in an integer",
                code:
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
                description: "Write a Java method to check whether an year entered by the user is a leap year or not",
                code:
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
                description: "Write a Java method to calculate the area of a triangle",
                code:
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
                description: "Write a Java method to find the area of a pentagon",
                code:
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
                description: "Write a Java method to find number is even number or not",
                code:
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
                description: "Write a Java method to check numbers is palindrome number or not",
                code:
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
                description: "Write a Java method to displays prime numbers between 1 to 20",
                code:
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
                description: "Write a Java program to Java method to find GCD and LCM of Two Numbers",
                code:
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
                description: "Write a Java program to Java method to find factorial using recursion in java",
                code:
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
                description: "Write a Java program to reverse an integer number",
                code:
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
                description: "Write a Java program to round a float number to specified decimals",
                code:
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
                description: "Write a Java program to test if a double number is an integer",
                code:
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
                description: "Write a Java program to round up the result of integer division",
                code:
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
                description: "Write a Java program to convert Roman number to an integer number",
                code:
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
                description: "Write a Java program to convert a float value to absolute value",
                code:
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
                description: "Write a Java program to accept a float value of number and return a rounded float value",
                code:
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

        },
        "Hard": {

        }
    },
    "DATA CONVERSION": {
        "Easy": {
            "How to convert String to int": {
                description: "Program to convert String to int",
                code: `
public class StringToInt {
    public static void main(String[] args) {
       String str = "123";
int num = Integer.parseInt(str);
System.out.println(num);

    }
}

`,
                output: `
123
                `
            },
            "How to convert int to String": {
                description: "Program to convert int to String",
                code: `
public class IntToString {
    public static void main(String[] args) {
        int num = 123;
String str = Integer.toString(num);
System.out.println(str);

    }
}
`,
                output: `
123
                `
            },

            "How to convert String to long": {
                description: "Program to convert String to long",
                code: `
public class StringToLong {
    public static void main(String[] args) {
String str = "123456789";
long num = Long.parseLong(str);

System.out.println(num);

    }
}
`,
                output: `
123456789
                `
            },
            "How to convert long to String": {
                description: "Program to convert long to String",
                code: `
public class LongToString {
    public static void main(String[] args) {
long num = 123456789L;
String str = Long.toString(num);

System.out.println(str);

    }
}
`,
                output: `
123456789
                `
            },
            "How to convert String to float": {
                description: "Program to convert String to float",
                code: `
public class StringToFloat {
    public static void main(String[] args) {
  String str = "12.34";
float num = Float.parseFloat(str);
System.out.println(num);

    }
}

`,
                output: `
12.34
                `
            },
            "How to convert float to String": {
                description: "Program to convert float to String",
                code: `
public class FloatToString {
    public static void main(String[] args) {
 float num = 12.34f;
String str = Float.toString(num);
System.out.println(str);

    }
}

`,
                output: `
12.34
                `
            },
            "How to convert String to double": {
                description: "Program to convert String to double",
                code: `
public class StringToDouble {
    public static void main(String[] args) {
String str = "123.456";
double num = Double.parseDouble(str);

System.out.println(num);

    }
}

`,
                output: `
123.456
                `
            },
            "How to convert double to String": {
                description: "Program to convert double to String",
                code: `
public class DoubleToString {
    public static void main(String[] args) {
       double num = 123.456;
String str = Double.toString(num);

System.out.println(str);

    }
}

`,
                output: `
123.456
                `
            },
            "How to convert String to Date": {
                description: "Program to convert String to Date",
                code: `
import java.text.SimpleDateFormat;
import java.util.Date;
public class StringToDate {
    public static void main(String[] args) throws java.text.ParseException {
String str = "2024-10-23";
SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
Date date = formatter.parse(str);
System.out.println(date);
    }
}
`,
                output: `
Wed Oct 23 00:00:00 IST 2024
                `
            },
            "How to convert Date to String": {
                description: "Program to convert Date to String",
                code: `
import java.text.SimpleDateFormat;
import java.util.Date;
public class DateToString {
    public static void main(String[] args) {
        
SimpleDateFormat formatter = new SimpleDateFormat("2024-10-29");
String str = formatter.format(new Date());
System.out.println(str);

}
}
`,
                output: `
2024-10-29
                `
            },
            "How to convert String to char": {
                description: "Program to convert String to char",
                code: `
public class StringToChar {
    public static void main(String[] args) {
        String str = "Hello";
char ch = str.charAt(0);  // First character 'H'
System.out.println(ch);


    }
}
`,
                output: `
H
                `
            },
            "How to convert char to String": {
                description: "Program to convert char to String",
                code: `
public class CharToString {
    public static void main(String[] args) {
        char ch = 'H';
        String str = Character.toString(ch);        
        System.out.println(str);

    }
}
`,
                output: `
H
                `
            },
            "How to convert String to Object": {
                description: "Program to convert String to Object",
                code: `
public class StringToObject {
    public static void main(String[] args) {
        String str = "Some text";
Object obj = str;
System.out.println(obj);

    }
}
`,
                output: `
Some text
                `
            },
            "How to convert Object to String": {
                description: "Program to convert Object to String",
                code: `
public class ObjectToString {
   public static void main(String[] args) {
      Object obj = "Some text";
      String str = obj.toString();
      System.out.println(str);
      
   } 
}
`,
                output: `
Some text
                `
            },
            "How to convert int to long": {
                description: "Program to convert int to long",
                code: `
public class IntToLong {
public static void main(String[] args) {
        int num = 123;
        long lnum = num;  // Implicit casting
        System.out.println(lnum);
        
            }
        }
`,
                output: `
123
                `
            },
            "How to convert long to int": {
                description: "Program to convert long to int",
                code: `
public class LongToInt {
   public static void main(String[] args) {
      long lnum = 123456789L;
      int num = (int) lnum;  // Explicit casting
      System.out.println(num);
      
   } 
}
`,
                output: `
123456789
                `
            },
            "How to convert int to double": {
                description: "Program to convert int to double",
                code: `
public class IntToDouble {
    public static void main(String[] args) {
        int num = 123;
double dnum = num;  // Implicit casting
System.out.println(dnum);

    }
}

`,
                output: `
123
                `
            },
            "How to convert double to int": {
                description: "Program to convert double to int",
                code: `
public class DoubleToInt {
    public static void main(String[] args) {
        double dnum = 123.456;
int num = (int) dnum;  // Fraction part lost
System.out.println(num);

    }
}
`,
                output: `
123
                `
            },
            "How to convert char to int": {
                description: "Program to convert char to int",
                code: `
public class CharToInt {
    public static void main(String[] args) {
        char ch = 'A';
int num = ch;  // Implicit ASCII value conversion
System.out.println(num);

    }
}

`,
                output: `
65
                `
            },
            "How to convert int to char": {
                description: "Program to convert int to char",
                code: `
public class IntToChar {
    public static void main(String[] args) {
        int num = 65;
char ch = (char) num;
System.out.println(ch);

    }
}

`,
                output: `
A
                `
            },
            "How to convert String to boolean": {
                description: "Program to convert String to boolean",
                code: `
public class StringToBoolean {
    public static void main(String[] args) {
        String str = "true";
boolean bool = str.equalsIgnoreCase("true");
System.out.println(bool);

    }
}

`,
                output: `
true
                `
            },
            "How to convert boolean to String": {
                description: "Program to convert boolean to String",
                code: `
public class BooleanToString {
    public static void main(String[] args) {
        boolean bool = true;
String str = bool ? "true" : "false";
System.out.println(str);

    }
}
`,
                output: `
true
                `
            },
            "How to convert Date to Timestamp": {
                description: "Program to convert Date to Timestamp",
                code: `
public class DateToTimestamp {
    public static void main(String[] args) {
        long millis = System.currentTimeMillis();
System.out.println("Timestamp: " + millis);

    }
}
`,
                output: `
Timestamp: 1730205862689
                `
            },
            "How to convert Timestamp to Date": {
                description: "Program to convert Timestamp to Date",
                code: `
public class TimestampToDate {
    public static void main(String[] args) {
        long millis = System.currentTimeMillis();
java.util.Date date = new java.util.Date(millis);
System.out.println("Date: " + date);

    }
}

`,
                output: `
Date: Tue Oct 29 18:15:04 IST 2024
                `
            },
            "How to convert Binary to Decimal": {
                description: "Program to convert Binary to Decimal",
                code: `
public class BinaryToDecimal {
    public static void main(String[] args) {
        String binary = "1010";  // Binary representation of 10
        int decimal = Integer.parseInt(binary, 2);
        System.out.println(decimal);

    }
}
`,
                output: `
10
                `
            },
            "How to convert Decimal to Binary": {
                description: "Program to convert Decimal to Binary",
                code: `
public class DecimalToBinary {
    public static void main(String[] args) {
        int decimal = 10;
        StringBuilder binary = new StringBuilder();
        
        while (decimal > 0) {
            binary.insert(0, decimal % 2);
            decimal /= 2;
        }
        System.out.println(binary.toString());
         
    }
}
`,
                output: `
1010
                `
            },
            "How to convert Hex to Decimal": {
                description: "Program to convert Hex to Decimal",
                code: `
public class HexToDecimal {
    public static void main(String[] args) {
        String hex = "A";  // Hexadecimal representation of 10
        int decimal = Integer.parseInt(hex, 16);
System.out.println(decimal);

    }
}
`,
                output: `
10
                `
            },
            "How to convert Decimal to Hex": {
                description: "Program to convert Decimal to Hex",
                code: `

          public class DecimalToHex {
            public static void main(String[] args) {
                int decimal = 10;
                String hex = Integer.toHexString(decimal);
        System.out.println(hex);
        
            }
        }
`,
                output: `
A
                `
            },
            "How to convert Octal to Decimal": {
                description: "Program to convert Octal to Decimal",
                code: `
public class OctalToDecimal {
    public static void main(String[] args) {
        String octal = "12";  // Octal representation of 10
        int decimal = Integer.parseInt(octal, 8);
System.out.println(decimal);

    }
}
`,
                output: `
10
                `
            },
            "How to convert Decimal to Octal": {
                description: "Program to convert Decimal to Octal",
                code: `
public class DecimalToOctal {
  public static void main(String[] args) {
    int decimal = 10;
    String octal = Integer.toOctalString(decimal);
System.out.println(octal);

  }
}
`,
                output: `
12
                `
            },


        },
        "Medium": {


        },
        "Hard": {


        }
    },
    " DELEGATION EVENT MODEL": {
        "Easy": {
            "Display Some Text in the Frame using Labels": {
                description: "Program to display Some Text in the Frame using Labels",
                code: `
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

class MyLabel extends Frame{
    Label l= new Label("Hello AWT");
    Label l1= new Label("Name");
    Label l2= new Label("Class");
    Label l3= new Label("Roll No");
    MyLabel()
    {
        super("Label");
        setBounds(100,100,400,400);
        setLayout(new FlowLayout(FlowLayout.LEFT,10,10));
        add(l);
        add(l3);
        add(l1);
        add(l2);

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
        new MyLabel();
    }

}
`,
                output: `
<img src="DEMimg/Label.png" alt="Label" loading="lazy">
    
                `
            },
            "Create Text Area and Password Field": {
                description: "Program to create Text Area and Password Field",
                code: `
import java.awt.*;
import java.awt.event.*;

public class TextAreaPassword extends Frame {

    private TextArea textArea;
    private TextField passwordField;

    public TextAreaPassword() {
        setTitle("Text Area and Password Field");
        setSize(400, 400);
        setLayout(new FlowLayout(FlowLayout.LEFT));

        textArea = new TextArea("Enter text here...", 5, 30);
        add(textArea);

        passwordField = new TextField(20);
        passwordField.setEchoChar('*');  // Mask input with '*'
        add(passwordField);

        // Set up a window listener to close the application
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        // Create and show the frame
        TextAreaPassword app = new TextAreaPassword();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/textpass.png" alt="TextAreaAndPassword" loading="lazy">
    
                `
            },
            "Create a Button and Display Image in the Frame when Clicked": {
                description: "Program to Create a Button and Display Image in the Frame when Clicked",
                code: `
package image;

import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;


class MyLabel extends Frame{
    private Button btn = new Button("Show Image");
    private Image image;
    private boolean showImage = false;
   
    MyLabel()
    {
        super("Label");
        setBounds(100,100,400,400);
        setLayout(new FlowLayout(FlowLayout.LEFT,10,10));
        image = Toolkit.getDefaultToolkit().getImage("../../JAVAWEB/img/java.webp");
        add(btn);
        btn.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e)
            {
                showImage = true;
                repaint(); 
            }
        });
        
        addWindowListener(new WindowAdapter() {
           public void windowClosing(WindowEvent e)
           {
            System.exit(1);
           }
        });
        setVisible(true);
    }
    public void paint(Graphics g) {
        super.paint(g);
        // Draw the image if showImage is true
        if (showImage && image != null) {
            // Scale the image to fit the frame
            g.drawImage(image, 50, 100, getWidth() - 100, getHeight() - 150, this);
        }
    }
}

 class Main {

    public static void main(String[] args) {
        new MyLabel();
    }

}

`,
                output: `
<img src="DEMimg/img.png" alt="img" loading="lazy">
    
                `
            },
            "Create 2 Radio Buttons and Display Selected Button Label": {
                description: "Program to Create 2 Radio Buttons and Display Selected Button Label",
                code: `
package radio;
import java.awt.*;
import java.awt.event.*;
class Radio extends Frame
    {
        private Label l = new Label("Gender");
        private Checkbox cb1 = new Checkbox("Male");
        private Checkbox cb2 = new Checkbox("Female");
        private CheckboxGroup cbg = new CheckboxGroup();
        Radio()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(l);
            cb1.setCheckboxGroup(cbg);
            cb2.setCheckboxGroup(cbg);
            add(cb1);
            add(cb2);
            setVisible(true);
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
        }
    }
class Main
    {
        public static void main(String[] args) {
            new Radio();
        }
    }

`,
                output: `
<img src="DEMimg/radio.png" alt="radio" loading="lazy">
    
                `
            },
            "Handle KeyBoardEvent": {
                description: "Program to Handle KeyBoardEvent",
                code: `
import java.awt.*;
import java.awt.event.*;
class KeyBoardEvent extends Frame
    {
        TextField tf = new TextField(10);
        private Label l = new Label();
        KeyBoardEvent()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(tf);
            add(l);
            tf.addKeyListener(new KeyListener() {
                public  void keyTyped(java.awt.event.KeyEvent e)
                {
                    l.setText("Key Typed");
                }
                public  void keyPressed(java.awt.event.KeyEvent e)
                {
                    l.setText("Key Pressed");
                }
                public  void keyReleased(java.awt.event.KeyEvent e)
                {
                    l.setText("Key Released");
                }
            });
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
            setVisible(true);
        }
    }
class Main
    {
        public static void main(String[] args) {
            new KeyBoardEvent();
        }
    }

`,
                output: `
<img src="DEMimg/KeyboardEvent.png" alt="radio" loading="lazy">
    
                `
            },
            "Handle MouseEvent": {
                description: "Program to Handle MouseEvent",
                code: `
import java.awt.*;
import java.awt.event.*;
class DEM6 extends Frame
    {
        Button btn = new Button("Click me");
        Label l = new Label();
        DEM6()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(btn);
            l.setSize(100, 50);
            add(l);
            btn.addMouseListener(new MouseListener() {
  public  void mouseClicked(MouseEvent e)
                {
                    l.setText("Mouse Clicked");
                }
  public  void mousePressed(MouseEvent e)
                {
                    l.setText("MousePressed");
                }
  public  void mouseReleased(MouseEvent e)
                {
                    l.setText("Mouse Relased");
                }
  public  void mouseEntered(MouseEvent e)
                {
                    l.setText("Mouse Eneted");
                }
  public  void mouseExited(MouseEvent e)
                {
                    l.setText("Mouse Exited");
                }

            });
            setVisible(true);
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
        }
    }
class Main
    {
        public static void main(String[] args) {
            new DEM6();
        }
    }

`,
                output: `
<img src="DEMimg/MouseEvent.png" alt="radio" loading="lazy">
    
                `
            },

            "Get and Set State and Get Label of a Check Box": {
                description: "Program to Get and Set State and Get Label of a Check Box",
                code: `
package checkbox;
//Get and Set State and Get Label of a Check Box
import java.awt.*;
import java.awt.event.*;
class SetCheckbox extends Frame
    {
        TextField tf = new TextField(10);
        private Checkbox cb = new Checkbox();
        private Button btn = new Button("Set Label");
        SetCheckbox()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(tf);
            add(btn);
            add(cb);
            btn.addMouseListener(new MouseAdapter() {
                public void mouseClicked(MouseEvent e)
                {
                    String label = tf.getText();
                    cb.setLabel(label);
                }
            });
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
            setVisible(true);
        }
    }
class Main
    {
        public static void main(String[] args) {
            new SetCheckbox();
        }
    }

`,
                output: `
<img src="DEMimg/checkbox.png" alt="img" loading="lazy">
    
                `
            },
            "Create Check Boxes and Radio Buttons": {
                description: "Program to Create Check Boxes and Radio Buttons",
                code: `
//Get and Set State and Get Label of a Check Box
import java.awt.*;
import java.awt.event.*;
class CheckboxRadio extends Frame
    {
        private Label l = new Label("Select Subjects");
        private Label l2 = new Label("Confirm");
        private Checkbox cb = new Checkbox("C");
        private Checkbox cb1 = new Checkbox("C++");
        private Checkbox cb2 = new Checkbox("Java");
        private Checkbox cb3 = new Checkbox("Yes");
        private Checkbox cb4 = new Checkbox("No");
        private CheckboxGroup cbg = new CheckboxGroup();
        CheckboxRadio()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            cb3.setCheckboxGroup(cbg);
            cb4.setCheckboxGroup(cbg);
            add(l);
            add(cb);
            add(cb1);
            add(cb2);
            add(cb3);
            add(cb4);
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
            setVisible(true);
        }
    }
class Main
    {
        public static void main(String[] args) {
            new CheckboxRadio();
        }
    }

`,
                output: `
<img src="DEMimg/checkboxRadio.png" alt="img" loading="lazy">
    
                `
            },
            "Create and Switch between Frames using Buttons": {
                description: "Program to Create and Switch between Frames using Buttons",
                code: `
import java.awt.*;
import java.awt.event.*;
class Frame1 extends Frame
    {
        private Button btn = new Button("Change Frame");
        Label l = new Label("This is 1st Frame.");
        Frame1()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(l);
            add(btn);
            btn.addMouseListener(new MouseAdapter() {
                public void mouseClicked(MouseEvent e)
                {
                    new Frame2();
                }
            });
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
            setVisible(true);
        }
    }
    class Frame2 extends Frame
    {
        private Button btn = new Button("Change Frame");
        Label l = new Label("This is 2nd Frame.");
        Frame2()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(l);
            add(btn);
            btn.addMouseListener(new MouseAdapter() {
                public void mouseClicked(MouseEvent e)
                {
                    new Frame1();
                }
            });
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
            setVisible(true);
        }
    }
class Main
    {
        public static void main(String[] args) {
            new Frame1();
        }
    }

`,
                output: `
<img src="DEMimg/changeframe.png" alt="img" loading="lazy">
    
                `
            },
            
            "Create a List Box to Select Multiple Items and Display it in the Frame": {
                description: "Program to Create a List Box to Select Multiple Items and Display it in the Frame",
                code: `
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MultiSelectListBoxApp extends Frame {

    private List itemList;
    private TextArea displayArea;

    public MultiSelectListBoxApp() {
        // Set up the frame
        setTitle("Multi-Select List Box Example");
        setSize(400, 400);
        setLayout(new FlowLayout());

        // Initialize the List with multiple selection enabled
        itemList = new List(5, true); // 5 visible rows, multiple selection enabled
        itemList.add("Item 1");
        itemList.add("Item 2");
        itemList.add("Item 3");
        itemList.add("Item 4");
        itemList.add("Item 5");

        // Add a button to display selected items
        Button displayButton = new Button("Display Selected Items");
        displayButton.addActionListener(new ActionListener() {
            
            public void actionPerformed(ActionEvent e) {
                displaySelectedItems();
            }
        });

        // TextArea to show selected items
        displayArea = new TextArea(5, 30);
        displayArea.setEditable(false);

        // Add components to the frame
        add(itemList);
        add(displayButton);
        add(displayArea);

        // Set up close operation
        addWindowListener(new java.awt.event.WindowAdapter() {
            
            public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    private void displaySelectedItems() {
        // Get selected items and display them in the TextArea
        String[] selectedItems = itemList.getSelectedItems();
        StringBuilder sb = new StringBuilder("Selected Items:\n");
        for (String item : selectedItems) {
            sb.append(item).append("\n");
        }
        displayArea.setText(sb.toString());
    }

    public static void main(String[] args) {
        // Create and show the frame
        MultiSelectListBoxApp app = new MultiSelectListBoxApp();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/MultiList.png" alt="radio" loading="lazy">
    
                `
            },
            "Display a Message in a New Frame": {
                description: "Program to Display a Message in a New Frame",
                code: `
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MessageFrameApp extends Frame {

    public MessageFrameApp() {
        // Set up the main frame
        setTitle("Main Frame");
        setSize(300, 200);
        setLayout(new FlowLayout());

        // Button to open the message frame
        Button showMessageButton = new Button("Show Message");
        showMessageButton.addActionListener(new ActionListener() {
            
            public void actionPerformed(ActionEvent e) {
                openMessageFrame();
            }
        });

        // Add button to the main frame
        add(showMessageButton);

        // Set up close operation
        addWindowListener(new java.awt.event.WindowAdapter() {
            
            public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    private void openMessageFrame() {
        // Create a new frame to display the message
        Frame messageFrame = new Frame("Message Frame");
        messageFrame.setSize(250, 150);
        messageFrame.setLayout(new FlowLayout());

        // Label to display the message
        Label messageLabel = new Label("Hello, this is your message!");
        messageFrame.add(messageLabel);

        // Set up close operation for the message frame
        messageFrame.addWindowListener(new java.awt.event.WindowAdapter() {
            
            public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                messageFrame.dispose();  // Close only the message frame
            }
        });

        // Make the message frame visible
        messageFrame.setVisible(true);
    }

    public static void main(String[] args) {
        // Create and show the main frame
        MessageFrameApp app = new MessageFrameApp();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/message.png" alt="message" loading="lazy">
    
                `
            },
            "Close the Frame using WindowAdapter Class": {
                description: "Program to Close the Frame using WindowAdapter Class",
                code: `
package close;
//Get and Set State and Get Label of a Check Box
import java.awt.*;
import java.awt.event.*;
class Close extends Frame
    {
       Label l = new Label("Close frame using Window Adaptor!");
        Close()
        {
            setBounds(100,100,400,400);
            setLayout(new FlowLayout(FlowLayout.LEFT));
            add(l);
            addWindowListener(new WindowAdapter() {
                public void windowClosing(WindowEvent e)
                {
                    System.exit(0);
                }
            });
            setVisible(true);
        }
    }
class Main
    {
        public static void main(String[] args) {
            new Close();
        }
    }

`,
                output: `
<img src="DEMimg/close.png" alt="radio" loading="lazy">
    
                `
            },
            "Check Which Fonts are Available in a Local System": {
                description: "Program to Check Which Fonts are Available in a Local System",
                code: `
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.GraphicsEnvironment;

public class AvailableFontsApp extends Frame {

    public AvailableFontsApp() {
        // Set up the frame
        setTitle("Available Fonts");
        setSize(400, 300);
        setLayout(new BorderLayout());

        // TextArea to display the available fonts
        TextArea fontDisplayArea = new TextArea();
        fontDisplayArea.setEditable(false);

        // Retrieve available font family names
        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        String[] fontNames = ge.getAvailableFontFamilyNames();

        // Display font names in the TextArea
        for (String fontName : fontNames) {
            fontDisplayArea.append(fontName + "\n");
        }

        // Add TextArea to the frame
        add(fontDisplayArea, BorderLayout.CENTER);

        // Set up close operation
        addWindowListener(new WindowAdapter() {
            
            public void windowClosing(WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        // Create and show the frame
        AvailableFontsApp app = new AvailableFontsApp();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/AvlFont.png" alt="img" loading="lazy">
    
                `
            },
            "Display Text in Different Fonts": {
                description: "Program to Display Text in Different Fonts",
                code: `
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.GraphicsEnvironment;

public class FontDisplayApp extends Frame {

    private String[] fontNames;

    public FontDisplayApp() {
        // Set up the frame
        setTitle("Display Text in Different Fonts");
        setSize(500, 600);
        setLayout(new FlowLayout());

        // Retrieve available font family names
        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        fontNames = ge.getAvailableFontFamilyNames();

        // Set up close operation
        addWindowListener(new WindowAdapter() {
            
            public void windowClosing(WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    
    public void paint(Graphics g) {
        super.paint(g);

        // Starting coordinates for text
        int y = 60;
        String text = "Sample Text in Different Fonts";

        // Display the text in each available font
        for (int i = 0; i < fontNames.length && i < 10; i++) {  // Limiting to 10 fonts for display
            g.setFont(new Font(fontNames[i], Font.PLAIN, 16));
            g.drawString(text + " - " + fontNames[i], 50, y);
            y += 30;  // Move down for the next line
        }
    }

    public static void main(String[] args) {
        // Create and show the frame
        FontDisplayApp app = new FontDisplayApp();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/font.png" alt="img" loading="lazy">
    
                `
            },
            "Change Frame Background Color as Cyan": {
                description: "Program to Change Frame Background Color as Cyan",
                code: `
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class CyanBackgroundFrame extends Frame {

    public CyanBackgroundFrame() {
        // Set up the frame
        setTitle("Cyan Background Frame");
        setSize(400, 300);

        // Set the background color to cyan
        setBackground(Color.CYAN);

        // Set up close operation
        addWindowListener(new WindowAdapter() {
            
            public void windowClosing(WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        // Create and show the frame
        CyanBackgroundFrame app = new CyanBackgroundFrame();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/cyan.png" alt="cyan" loading="lazy">
    
                `
            },
            "Change the Applet Background Colour when Button Clicked": {
                description: "Program to Change the Applet Background Colour when Button Clicked",
                code: `
import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

/* 
<applet code="ColorChangeApplet" width=300 height=200>
</applet> 
*/

public class ColorChangeApplet extends Applet {

    private Button colorButton;
    private Random random;

    
    public void init() {
        // Initialize button and random generator
        colorButton = new Button("Change Background Color");
        random = new Random();

        // Set layout and add button
        setLayout(new FlowLayout());
        add(colorButton);

        // Add action listener to button
        colorButton.addActionListener(new ActionListener() {
            
            public void actionPerformed(ActionEvent e) {
                changeBackgroundColor();
            }
        });
    }

    private void changeBackgroundColor() {
        // Generate random color
        Color randomColor = new Color(random.nextInt(256), random.nextInt(256), random.nextInt(256));
        
        // Set the applet's background color
        setBackground(randomColor);

        // Repaint to apply the color change immediately
        repaint();
    }
}
/*<applet code="ColorChangeApplet.class" width="300" height="200"></applet> */

`,
                output: `
<img src="DEMimg/color.png" alt="radio" loading="lazy">
    
                `
            },
            
            


        },
        "Medium": {
"Create and Set Border to Push Buttons": {
                description: "Program to Create and Set Border to Push Buttons",
                code: `
import java.awt.*;
public class ButtonWithBorderApp extends Frame {

    public ButtonWithBorderApp() {
        // Set up the frame
        setTitle("Button with Border Example");
        setSize(300, 200);
        setLayout(new FlowLayout());

        // Create a Panel to act as a border for the button
        Panel buttonPanel = new Panel();
        buttonPanel.setLayout(new FlowLayout());
        buttonPanel.setBackground(Color.BLACK); // Border color
        buttonPanel.setSize(100, 50);

        // Create the Button
        Button button = new Button("Push Me");
        button.setBackground(Color.LIGHT_GRAY);
        button.setPreferredSize(new Dimension(80, 30)); // Inner button size

        // Add the button to the panel (creates a border effect)
        buttonPanel.add(button);

        // Add the panel (with button inside) to the frame
        add(buttonPanel);

        // Set up close operation
        addWindowListener(new java.awt.event.WindowAdapter() {
            public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        // Create and show the frame
        ButtonWithBorderApp app = new ButtonWithBorderApp();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/push.png" alt="img" loading="lazy">
    
                `
            },
"Validate the TextField for only entering numbers using KeyListener": {
                description: "Program to Validate the TextField for only entering numbers using KeyListener",
                code: `
import java.awt.*;
import java.awt.event.*;

public class NumericTextFieldApp extends Frame {

    private TextField numberField;

    public NumericTextFieldApp() {
        // Set up the frame
        setTitle("Numeric Text Field Validation");
        setSize(300, 150);
        setLayout(new FlowLayout());

        // Create a TextField
        numberField = new TextField(20);
        
        // Add KeyListener to the TextField
        numberField.addKeyListener(new KeyAdapter() {
            
            public void keyTyped(KeyEvent e) {
                char c = e.getKeyChar();
                // Check if the input is not a digit and is not a control character
                if (!Character.isDigit(c) && c != KeyEvent.VK_BACK_SPACE && c != KeyEvent.VK_DELETE) {
                    e.consume(); // Consume the event to prevent the character from being typed
                }
            }
        });

        // Add components to the frame
        add(new Label("Enter numbers only:"));
        add(numberField);

        // Set up close operation
        addWindowListener(new WindowAdapter() {
            
            public void windowClosing(WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        // Create and show the frame
        NumericTextFieldApp app = new NumericTextFieldApp();
        app.setVisible(true);
    }
}


`,
                output: `
<img src="DEMimg/number.png" alt="radio" loading="lazy">
    
                `
            },
            "Validate the TextField for only entering email id using KeyAdapter": {
                description: "Program to Validate the TextField for only entering email id using KeyAdapter",
                code: `
import java.awt.*;
import java.awt.event.*;

public class EmailTextFieldApp extends Frame {

    private TextField emailField;

    public EmailTextFieldApp() {
        // Set up the frame
        setTitle("Email Text Field Validation");
        setSize(300, 150);
        setLayout(new FlowLayout());

        // Create a TextField for email input
        emailField = new TextField(20);

        // Add KeyAdapter to validate email input
        emailField.addKeyListener(new KeyAdapter() {
            
            public void keyTyped(KeyEvent e) {
                char c = e.getKeyChar();
                // Allowed characters for email addresses
                if (!(Character.isLetterOrDigit(c) || c == '@' || c == '.' || c == '_' || c == '-')) {
                    e.consume(); // Consume the event to prevent the character from being typed
                }
            }
        });

        // Add components to the frame
        add(new Label("Enter your email:"));
        add(emailField);

        // Set up close operation
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        // Create and show the frame
        EmailTextFieldApp app = new EmailTextFieldApp();
        app.setVisible(true);
    }
}

`,
                output: `
<img src="DEMimg/email.png" alt="radio" loading="lazy">
    `
            }
        },
        "Hard": {
"Display Several Dots on the Screen Continuously": {
                description: "Program to Display Several Dots on the Screen Continuously",
                code: `
import java.applet.Applet;
import java.awt.*;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

/*
<applet code="ContinuousDotsApplet" width=400 height=300>
</applet>
*/

public class ContinuousDotsApplet extends Applet {

    private Random random;
    private int dotCount = 50; // Number of dots to display
    private int[][] dotPositions; // Array to store dot positions

    
    public void init() {
        // Initialize random generator and dot positions array
        random = new Random();
        dotPositions = new int[dotCount][2];

        // Set a timer to update dot positions and repaint periodically
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            
            public void run() {
                updateDots();
                repaint();
            }
        }, 0, 200); // Update every 200 milliseconds (5 times per second)
    }

    private void updateDots() {
        // Update positions of each dot to random coordinates within the applet
        for (int i = 0; i < dotCount; i++) {
            dotPositions[i][0] = random.nextInt(getWidth()); // X position
            dotPositions[i][1] = random.nextInt(getHeight()); // Y position
        }
    }

    
    public void paint(Graphics g) {
        // Draw each dot as a small filled circle at its random position
        g.setColor(Color.BLUE);
        for (int i = 0; i < dotCount; i++) {
            int x = dotPositions[i][0];
            int y = dotPositions[i][1];
            g.fillOval(x, y, 5, 5); // Draw dot with 5x5 size
        }
    }
}


`,
                output: `
<img src="DEMimg/dots.png" alt="dots" loading="lazy">
    
                `
            },
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
        },
        "Hard": {
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
public class InvestmentCalculator {

    public static double computeFutureInvestmentValue(double principal, double rate, int years) {
        double futureValue = principal * Math.pow((1 + rate / 100), years);
        return futureValue;
    }

    public static void main(String[] args) {
        double principal = 1000.0; // initial investment
        double rate = 5.0;         // annual interest rate in percentage
        int years = 10;            // investment period in years

        double futureValue = computeFutureInvestmentValue(principal, rate, years);
        System.out.printf("Future Investment Value: %.2f\n", futureValue);
    }
}

            `
                ,
                output: `
Future Investment Value: 1628.89

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
            
            "display the current date and time": {
                description: "Write a Java method to display the current date and time.",
                code: `
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeDisplay {

    public static void displayCurrentDateTime() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = currentDateTime.format(formatter);
        System.out.println("Current Date and Time: " + formattedDateTime);
    }

    public static void main(String[] args) {
        displayCurrentDateTime();
    }
}

            `
                ,
                output: `
Current Date and Time: 2024-10-23 15:30:45

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
            
            

        },
        "Medium": {
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
            "accepts three integers and returns true if one is the middle point between the other two integers, otherwise false": {
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
        "Hard": {
"check whether a string is a valid password": {
                description: "Write a Java method to check whether a string is a valid password.",
                code: `
public class PasswordValidator {

    public static boolean isValidPassword(String password) {
        if (password.length() < 8) {
            return false;
        }

        boolean hasUppercase = false;
        boolean hasLowercase = false;
        boolean hasDigit = false;
        boolean hasSpecialChar = false;

        for (char ch : password.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                hasUppercase = true;
            } else if (Character.isLowerCase(ch)) {
                hasLowercase = true;
            } else if (Character.isDigit(ch)) {
                hasDigit = true;
            } else if (!Character.isLetterOrDigit(ch)) {
                hasSpecialChar = true;
            }

            // If all conditions are met, no need to check further
            if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
                return true;
            }
        }

        return hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
    }

    public static void main(String[] args) {
        String password = "M@njit00";
        if (isValidPassword(password)) {
            System.out.println("Valid password");
        } else {
            System.out.println("Invalid password");
        }
    }
}

            `
                ,
                output: `
Valid password

                `
            },
"find all twin prime numbers less than 100": {
                description: "Write a Java method to find all twin prime numbers less than 100.",
                code: `
public class TwinPrimes {

    // Method to check if a number is prime
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // Method to find twin primes less than 100
    public static void findTwinPrimes(int limit) {
        for (int i = 2; i < limit - 2; i++) {
            if (isPrime(i) && isPrime(i + 2)) {
                System.out.println("(" + i + ", " + (i + 2) + ")");
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("Twin prime numbers less than 100:");
        findTwinPrimes(100);
    }
}

            `
                ,
                output: `
Twin prime numbers less than 100:
(3, 5)
(5, 7)
(11, 13)
(17, 19)
(29, 31)
(41, 43)
(59, 61)
(71, 73)

                `
            },
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/FButton.png" alt="FButton" loading="lazy">
    
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/CButton.png" alt="CButton" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).": {
                description: "Program to Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Button b1 = new Button("EAST");
    Button b2 = new Button("NORTH");
    Button b3 = new Button("WEST");
    Button b4 = new Button("SOUTH");
    Button b5 = new Button("CENTER");
    MyFrame()
    {
        setBounds(100,100,400,400);
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
<img src="AWTimg/Border.png" alt="Border" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/TextField.png" alt="TextField" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/TextFieldC.png" alt="TextFieldC" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/Checkbox.png" alt="Checkbox" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/CheckboxC.png" alt="Checkbox" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/Label.png" alt="Label" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/LabelC.png" alt="Label" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/Choice.png" alt="Choice" loading="lazy">
  
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
        setBounds(100,100,400,400);
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
<img src="AWTimg/ChoiceC.png" alt="Choice" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.": {
                description: "Program to Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Checkbox cb1 = new Checkbox();
    Checkbox cb2 = new Checkbox();
    CheckboxGroup cbg = new CheckboxGroup();
    MyFrame()
    {
        setBounds(100,100,400,400);
        setLayout(new FlowLayout(FlowLayout.LEFT));
        cb1.setLabel("Male");
        cb2.setLabel("Female");
        cb1.setCheckboxGroup(cbg);
        cb2.setCheckboxGroup(cbg);
        add(cb1);
        add(cb2);
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
<img src="AWTimg/Radio.png" alt="checkbox" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays a CheckboxGroup with Custom Layout.": {
                description: "Program to Create a simple AWT application that displays a CheckboxGroup with Custom Layout.",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    Checkbox cb1 = new Checkbox();
    Checkbox cb2 = new Checkbox();
    CheckboxGroup cbg = new CheckboxGroup();
    MyFrame()
    {
        setBounds(100,100,400,400);
        setLayout(null);
        cb1.setBounds(100,100,50,20);
        cb2.setBounds(150,100,50,20);
        cb1.setLabel("Male");
        cb2.setLabel("Female");
        cb1.setCheckboxGroup(cbg);
        cb2.setCheckboxGroup(cbg);
        add(cb1);
        add(cb2);
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
<img src="AWTimg/RadioC.png" alt="checkbox" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays a List with FlowLayout manager.": {
                description: "Program to Create a simple AWT application that displays a List with FlowLayout manager.",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    List li = new List();
    MyFrame()
    {
        setBounds(100,100,400,400);
        setLayout(new FlowLayout(FlowLayout.LEFT));
        
        li.add("Apple");
        li.add("Mango");
        li.add("Orange");
        li.add("Grapes");
        li.add("Pear");
        li.add("Coconut");
        add(li);
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
              <img src="AWTimg/List.png" alt="List" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays a List with Custom Layout": {
                description: "Program to Create a simple AWT application that displays a List with Custom Layout",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    List li = new List();
    MyFrame()
    {
        setBounds(100,100,400,400);
        setLayout(null);
        li.setBounds(100,100,100,50);
        li.add("Apple");
        li.add("Mango");
        li.add("Orange");
        li.add("Grapes");
        li.add("Pear");
        li.add("Coconut");
        add(li);
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
              <img src="AWTimg/ListC.png" alt="List" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays a TextArea with FlowLayout manager.": {
                description: "Program to Create a simple AWT application that displays a TextArea with FlowLayout manager.",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    TextArea ta = new TextArea(5, 20);
    MyFrame()
    {
        setBounds(100,100,400,400);
        setLayout(new FlowLayout(FlowLayout.LEFT));
        
        add(ta);
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
              <img src="AWTimg/TextArea.png" alt="TextArea" loading="lazy">
  
              `
            },
            "Create a simple AWT application that displays a TextArea with Custom Layout.": {
                description: "Program to Create a simple AWT application that displays a TextArea with Custom Layout.",
                code: `
import java.awt.*;
import java.awt.event.*;
class MyFrame extends Frame
{
    TextArea ta = new TextArea(5, 20);
    MyFrame()
    {
        setBounds(100,100,400,400);
        setLayout(null);
        ta.setBounds(100,100,100,50);
        add(ta);
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
              <img src="AWTimg/TextAreaC.png" alt="TextArea" loading="lazy">
  
              `
            },
            

        },
        "Medium": {

        },
        "Hard": {
"Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.": {
                description: "Program to Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.",
                code: `
import java.awt.*;
import java.awt.event.*;

class MyFrame extends Frame {
    TextField tf = new TextField();       
      TextField tf2 = new TextField();      
      TextField selectedTextField;          
    TextField display = new TextField();  
      double num1 = 0, num2 = 0, result = 0;
    char operator = ' ';

    MyFrame() {
        setBounds(100, 100, 400, 400);
        setLayout(null);
        int x=0,y=0,tfw=200,tfh=20;
        tf.setBounds((x+=50),(y+=100), tfw, tfh);
        //System.out.println(x +" "+y);
        tf2.setBounds((x+=250),(y), tfw, tfh);
        display.setBounds((x+=250), (y), tfw, tfh);
        // Set up independent text fields (tf and tf2)
        tf.setColumns(10);
        tf.setEditable(true);
        add(tf);

        tf2.setColumns(10);
        tf2.setEditable(true);
        add(tf2);

        // Set up calculator display field
        display.setColumns(20);
        display.setEditable(false);
        add(display);

        // Focus listener for text fields to detect selected text field
        tf.addFocusListener(new FocusAdapter() {
            public void focusGained(FocusEvent e) {
                selectedTextField = tf;
            }
        });

        tf2.addFocusListener(new FocusAdapter() {
            public void focusGained(FocusEvent e) {
                selectedTextField = tf2;
            }
        });

        // Create number buttons (0-9) and add them to the frame
        int bx=0,by=150,w=50,h=50;
        for (int i = 0; i <10; i++) {

            Button btn=new Button(" "+i);
            btn.setBounds((bx+=50), by, w, h);
            System.out.println(bx);
            add(btn);
             if (i%3==0) {
                by+=50;
                bx=0;
             }
            
            btn.addMouseListener(new MouseAdapter() {
                public void mouseClicked(MouseEvent e) {
                    if (selectedTextField != null) {
                        // Update the selected text field
                        selectedTextField.setText(selectedTextField.getText() + btn.getLabel().trim());
                    } else {
                        // Update the calculator display
                        display.setText(display.getText() + btn.getLabel().trim());
                    }
                }
            });
        }

        // Create operation buttons (+, -, *, /, ., =) and add them to the frame
     String[] operations = {"+", "-", "*", "/", ".", "="};
     int i=1;
     for (String op : operations) {
        
          Button btnop = new Button(op);
          btnop.setBounds((bx+=50), by, w, h);
         btnop.addActionListener(new ActionListener() {
             public void actionPerformed(ActionEvent e) {
                System.out.println(op);
                 handleOperation(op);
             }
         });
         add(btnop);
         System.out.println(i);
         
         if(i%3==0)
         {
            by+=50;
            bx=0;
         }
         i++;
     }

        // Close window on exit
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(1);
            }
        });

        setVisible(true);
    }

    // Handle operation and equals button clicks for calculator
    private void handleOperation(String op) {
        // System.out.println(op);
        // System.out.println(tf.getText());
        // System.out.println(tf2.getText());
        switch (op) {
            case "+": case "-": case "*": case "/":
                num1 = Double.parseDouble(tf.getText());
                operator = op.charAt(0);
                display.setText("");
                break;
            case ".":
                if (!display.getText().contains(".")) {
                    display.setText(display.getText() + ".");
                }
                break;
            case "=":
                num2 = Double.parseDouble(tf2.getText());
                calculateResult();
                display.setText(String.valueOf(result));
                break;
        }
    }
    private void calculateResult() {
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 != 0 ? num1 / num2 : Double.POSITIVE_INFINITY; break;
        }
    }
}

class Main {
    public static void main(String[] args) {
        new MyFrame();
    }
}


`,
                output: `
<img src="AWTimg/Calculator.png" alt="Calculator" loading="lazy">
  
              `
            },

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
            System.out.println("Withdrawal not allowed. Balance will fall below Rs100.");
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
Withdrawal not allowed. Balance will fall below Rs100.
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
class Shape
        {
            final double PI =3.14;
            private double radius;
            double getPerimeter()
            {
                return 0;
            }
            double getArea()
            {
                return 0;
            }
            
        }
class Circle extends Shape
        {
            private double radius;
            Circle(double r)
            {
                radius =r;
            }
            double getPerimeter()
            {
                return 2*PI*radius;
            }
            double getArea()
            {
                return PI*radius*radius;
            }
        }
class Main
        {
            public static void main(String st[])
                {
                    Shape obj = new Circle(7.0);
                    System.out.println("Perimeter of Circle : "+obj.getPerimeter());
                    System.out.println("Area of Circle : "+obj.getArea());
                }
        }
`,
                output: `
Perimeter of Circle : 43.96
Area of Circle : 153.86

                `
            },
            "Create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.": {
                description: "JAVA Program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
                code: `
abstract class Vehicle {
    protected String make;
    protected String model;
    protected int year;
    protected String fuelType;

    // Constructor for Vehicle
    public Vehicle(String m, String mdl, int y, String fType) {
        make = m;
        model = mdl;
        year = y;
        fuelType = fType;
    }

    
    abstract double calculateFuelEfficiency(); 
    abstract double calculateDistanceTraveled(double fuelAmount); 
    abstract double calculateMaximumSpeed(); 

    
    void displayInfo() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Fuel Type: " + fuelType);
        System.out.println("Fuel Efficiency: " + calculateFuelEfficiency() + " units");
        System.out.println("Distance Traveled (for 1 unit of fuel): " + calculateDistanceTraveled(1) + " units");
        System.out.println("Maximum Speed: " + calculateMaximumSpeed() + " km/h");
    }
}


class Truck extends Vehicle {
    private double cargoCapacity; 

    
    public Truck(String make, String model, int year, String fuelType, double cCap) {
        super(make, model, year, fuelType);
        cargoCapacity = cCap;
    }

    
    double calculateFuelEfficiency() {
        return 8; 
    }

    
    double calculateDistanceTraveled(double fuelAmount) {
        return calculateFuelEfficiency() * fuelAmount;
    }

    
    double calculateMaximumSpeed() {
        return 120; 
    }
}


class Car extends Vehicle {
    private boolean hasSunroof;

    
    public Car(String make, String model, int year, String fuelType, boolean hasSunroof) {
        super(make, model, year, fuelType);
        this.hasSunroof = hasSunroof;
    }

   
    double calculateFuelEfficiency() {
        return 30; 
    }

    
    double calculateDistanceTraveled(double fuelAmount) {
        return calculateFuelEfficiency() * fuelAmount;
    }

    
    double calculateMaximumSpeed() {
        return 200; 
    }
}


class Motorcycle extends Vehicle {
    private boolean hasSidecar;

    
    public Motorcycle(String make, String model, int year, String fuelType, boolean hasSidecar) {
        super(make, model, year, fuelType);
        this.hasSidecar = hasSidecar;
    }

   
    double calculateFuelEfficiency() {
        return 50; 
    }

    
    double calculateDistanceTraveled(double fuelAmount) {
        return calculateFuelEfficiency() * fuelAmount;
    }

   
    double calculateMaximumSpeed() {
        return 180; 
    }
}

class Main {
    public static void main(String[] args) {
        
        Vehicle truck = new Truck("Ford", "F-150", 2023, "Diesel", 3.5);
        truck.displayInfo();

        System.out.println(); 

       
        Vehicle car = new Car("Toyota", "Camry", 2024, "Gasoline", true);
        car.displayInfo();

        System.out.println(); 

       
        Vehicle motorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2022, "Gasoline", false);
        motorcycle.displayInfo();
    }
}


`,
                output: `
Make: Ford
Model: F-150
Year: 2023
Fuel Type: Diesel
Fuel Efficiency: 8.0 units
Distance Traveled (for 1 unit of fuel): 8.0 units
Maximum Speed: 120.0 km/h

Make: Toyota
Model: Camry
Year: 2024
Fuel Type: Gasoline
Fuel Efficiency: 30.0 units
Distance Traveled (for 1 unit of fuel): 30.0 units
Maximum Speed: 200.0 km/h

Make: Harley-Davidson
Model: Street 750
Year: 2022
Fuel Type: Gasoline
Fuel Efficiency: 50.0 units
Distance Traveled (for 1 unit of fuel): 50.0 units
Maximum Speed: 180.0 km/h
                `
            },
            "Creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.": {
                description: "JAVA Program to creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
                code: `
class Employee {
    protected String name;
    protected String address;
    protected double salary;
    protected String jobTitle;

    
    public Employee(String n, String adr, double sal, String jTitle) {
        name = n;
        address = adr;
        salary = sal;
        jobTitle = jTitle;
    }

    
    public double calculateBonus() {
        return salary * 0.05; 
    }

    
    public String generatePerformanceReport() {
        return "Employee " + name + " has been performing well in the role of " + jobTitle + ".";
    }

    
    public void manageProject(String projectName) {
        System.out.println(name + " is working on the project: " + projectName);
    }

   
    public void displayDetails() {
        System.out.println("Name: " + name + ", Address: " + address + ", Salary: $" + salary + ", Job Title: " + jobTitle);
    }
}


class Manager extends Employee {
    private int numberOfTeams;

    public Manager(String n, String adr, double sal, int noOfTeams) {
        super(n, adr, sal, "Manager");
        numberOfTeams = noOfTeams;
    }

    
    public double calculateBonus() {
        return salary * 0.1; 
    }

   
    public String generatePerformanceReport() {
        return "Manager " + name + " is leading " + numberOfTeams + " teams effectively.";
    }

    
    public void manageProject(String projectName) {
        System.out.println(name + " is managing the project: " + projectName + " with a team of " + numberOfTeams + " teams.");
    }
}


class Developer extends Employee {
    private String[] programmingLanguages;

    
    public Developer(String name, String address, double salary, String[] Languages) {
        super(name, address, salary, "Developer");
        programmingLanguages = Languages;
    }

   
    public double calculateBonus() {
        return salary * 0.08; 
    }

    
    public String generatePerformanceReport() {
        return "Developer " + name + " is proficient in " + String.join(", ", programmingLanguages) + ".";
    }

    
    public void manageProject(String projectName) {
        System.out.println(name + " is developing the project: " + projectName + " using " + String.join(", ", programmingLanguages) + ".");
    }
}


class Programmer extends Employee {
    private String primaryLanguage;

    
    public Programmer(String name, String address, double salary, String Language) {
        super(name, address, salary, "Programmer");
        primaryLanguage = Language;
    }

    
    public double calculateBonus() {
        return salary * 0.07; 
    }

    
    public String generatePerformanceReport() {
        return "Programmer " + name + " is proficient in " + primaryLanguage + ".";
    }

    
    public void manageProject(String projectName) {
        System.out.println(name + " is programming the project: " + projectName + " using " + primaryLanguage + ".");
    }
}


public class Main {
    public static void main(String[] args) {
        
        Manager manager = new Manager("Manjit", "1515B hallomajra ", 90000, 3);
        manager.displayDetails();
        System.out.println("Bonus: Rs." + manager.calculateBonus());
        System.out.println(manager.generatePerformanceReport());
        manager.manageProject("Enterprise Project");

       
        String[] languages = {"Java", "Python", "JavaScript"};
        Developer developer = new Developer("Abhishek", "1313 Ram darbar", 80000, languages);
        developer.displayDetails();
        System.out.println("Bonus: Rs." + developer.calculateBonus());
        System.out.println(developer.generatePerformanceReport());
        developer.manageProject("Mobile App Development");

        
        Programmer programmer = new Programmer("Sandeep", "1515 chd", 70000, "C++");
        programmer.displayDetails();
        System.out.println("Bonus: Rs." + programmer.calculateBonus());
        System.out.println(programmer.generatePerformanceReport());
        programmer.manageProject("Embedded System Development");
    }
}


`,
                output: `
Name: Manjit, Address: 1515B hallomajra , Salary: $90000.0, Job Title: Manager
Bonus: Rs.9000.0
Manager Manjit is leading 3 teams effectively.
Manjit is managing the project: Enterprise Project with a team of 3 teams.
Name: Abhishek, Address: 1313 Ram darbar, Salary: $80000.0, Job Title: Developer
Bonus: Rs.6400.0
Developer Abhishek is proficient in Java, Python, JavaScript.
Abhishek is developing the project: Mobile App Development using Java, Python, JavaScript.
Name: Sandeep, Address: 1515 chd, Salary: $70000.0, Job Title: Programmer
Bonus: Rs.4900.000000000001
Programmer Sandeep is proficient in C++.
Sandeep is programming the project: Embedded System Development using C++.
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
Withdrawal not allowed. Balance will fall below Rs100.
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
            
            
            

        },
        "Medium": {
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

        },
        "Hard": {
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
package thread7; 

class BankAccount {
        private int balance;
    
        public BankAccount(int initialBalance) {
            this.balance = initialBalance;
        }
    
        // Synchronized method for deposit
        public synchronized void deposit(int amount) {
            if (amount > 0) {
                balance += amount;
                System.out.println(Thread.currentThread().getName() + " deposited: Rs" + amount + ", New Balance: Rs" + balance);
            }
        }
    
        // Synchronized method for withdrawal
        public synchronized void withdraw(int amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                System.out.println(Thread.currentThread().getName() + " withdrew: Rs" + amount + ", New Balance: Rs" + balance);
            } else {
                System.out.println(Thread.currentThread().getName() + " tried to withdraw: Rs" + amount + " (Insufficient funds)");
            }
        }
    
        public int getBalance() {
            return balance;
        }
    }
    
    class DepositTask implements Runnable {
        private final BankAccount account;
        private final int amount;
    
        public DepositTask(BankAccount account, int amount) {
            this.account = account;
            this.amount = amount;
        }

        public void run() {
            account.deposit(amount);
        }
    }
    
    class WithdrawTask implements Runnable {
        private final BankAccount account;
        private final int amount;
    
        public WithdrawTask(BankAccount account, int amount) {
            this.account = account;
            this.amount = amount;
        }
    
        public void run() {
            account.withdraw(amount);
        }
    }
    
    public class BankSimulation {
        public static void main(String[] args) {
            BankAccount account = new BankAccount(1000); // Initial balance of Rs1000
    
            // Create a thread pool
            Thread[] threads = new Thread[6];
    
            // Create deposit tasks
            threads[0] = new Thread(new DepositTask(account, 500), "Thread-Deposit-1");
            threads[1] = new Thread(new DepositTask(account, 300), "Thread-Deposit-2");
    
            // Create withdrawal tasks
            threads[2] = new Thread(new WithdrawTask(account, 400), "Thread-Withdraw-1");
            threads[3] = new Thread(new WithdrawTask(account, 200), "Thread-Withdraw-2");
            threads[4] = new Thread(new WithdrawTask(account, 700), "Thread-Withdraw-3");
            threads[5] = new Thread(new WithdrawTask(account, 600), "Thread-Withdraw-4");
    
            // Start all threads
            for (Thread thread : threads) {
                thread.start();
            }
    
            // Wait for all threads to finish
            for (Thread thread : threads) {
                try {
                    thread.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
    
            // Final account balance
            System.out.println("Final Balance: Rs" + account.getBalance());
        }
    }
    


`,
                output: `
Thread-Deposit-1 deposited: Rs500, New Balance: Rs1500
Thread-Withdraw-4 withdrew: Rs600, New Balance: Rs900
Thread-Withdraw-3 withdrew: Rs700, New Balance: Rs200
Thread-Deposit-2 deposited: Rs300, New Balance: Rs500
Thread-Withdraw-1 withdrew: Rs400, New Balance: Rs100
Thread-Withdraw-2 tried to withdraw: Rs200 (Insufficient funds)
Final Balance: Rs100
  
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
class MyThread extends Thread
    {
        MyThread(String name , int prior)
        {
            setName(name);
            setPriority(prior);
        }
        public void run()
        {
            System.out.println("Thread Name : "+getName());
            System.out.println("Thread Priority : "+getPriority());
        }
    }
 class Main {
    public static void main(String[] args) {
    MyThread t1 = new MyThread("Thread 1",2);
    MyThread t2 = new MyThread("Thread 2",2);
    MyThread t3 = new MyThread("Thread 3",2);
    MyThread t4 = new MyThread("Thread 4",2);
    t1.start();
    t2.start();
    t3.start();
    t4.start();
    }
    
    
}


`,
                output: `
Thread Name : Thread 2
Thread Priority : 2
Thread Name : Thread 1
Thread Priority : 2
Thread Name : Thread 4
Thread Priority : 2
Thread Name : Thread 3
Thread Priority : 2
  
              `
            },
            "create multiple threads, show an example of synchronization keyword.": {
                description: "Program to create multiple threads, show an example of synchronization keyword.",
                code: `
class Display
    {
       synchronized void display()
        {
            for (int i = 1; i <= 10; i++) {
                System.out.println(i);
            }
        }
    }
class MyThread extends Thread
{
    Display obj=new Display();
    MyThread(String n)
    {
        super(n);
    }
    public void run()
    {
        System.out.println("Start :"+getName());
        obj.display();
        System.out.println("End :"+getName());
    }
}
 class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("T1");
        MyThread t2 = new MyThread("T2");
        MyThread t3 = new MyThread("T3");
        MyThread t4 = new MyThread("T4");
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}


`,
                output: `
Start :T1
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
Start :T3
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
End :T3
Start :T2
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
End :T1
Start :T4
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
End :T4
End :T2
  
              `
            },
            "create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.": {
                description: "Program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.",
                code: `
package thread12;

class Display {
    private boolean isAvailable = true; // Indicates if display() can be called

    synchronized void display() throws InterruptedException {
        // Wait if display is being used by another thread
        while (!isAvailable) {
            wait(); // Thread goes into waiting state
        }

        // Mark display as in use
        isAvailable = false;

        System.out.println(Thread.currentThread().getName() + " started display");

        for (int i = 1; i <= 10; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            Thread.sleep(200); // Simulate work with sleep
        }

        // Mark display as available again
        System.out.println(Thread.currentThread().getName() + " finished display");
        isAvailable = true;
        notifyAll(); // Notify all waiting threads
    }
}

class MyThread extends Thread {
    private final Display obj; // Shared Display instance

    public MyThread(String name, Display obj) {
        super(name);
        this.obj = obj;
    }

    public void run() {
        try {
            System.out.println("Start: " + getName());
            obj.display(); // Call the synchronized display method
            System.out.println("End: " + getName());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

 class Main {
    public static void main(String[] args) {
        Display display = new Display(); // Shared Display object

        // Create multiple threads with the same Display instance
        MyThread t1 = new MyThread("T1", display);
        MyThread t2 = new MyThread("T2", display);
        MyThread t3 = new MyThread("T3", display);
        MyThread t4 = new MyThread("T4", display);

        // Start all threads
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}


`,
                output: `
Start: T1
Start: T4
Start: T3
Start: T2
T1 started display
T1: 1
T1: 2
T1: 3
T1: 4
T1: 5
T1: 6
T1: 7
T1: 8
T1: 9
T1: 10
T1 finished display
End: T1
T2 started display
T2: 1
T2: 2
T2: 3
T2: 4
T2: 5
T2: 6
T2: 7
T2: 8
T2: 9
T2: 10
T2 finished display
End: T2
T3 started display
T3: 1
T3: 2
T3: 3
T3: 4
T3: 5
T3: 6
T3: 7
T3: 8
T3: 9
T3: 10
T3 finished display
End: T3
T4 started display
T4: 1
T4: 2
T4: 3
T4: 4
T4: 5
T4: 6
T4: 7
T4: 8
T4: 9
T4: 10
T4 finished display
End: T4
  
              `
            },
            "create multiple threads, show an example of join and yield methods.": {
                description: "Program to create multiple threads, show an example of join and yield methods.",
                code: `
class Display
    {
        
        void display()
        {
            for (int i = 1; i <= 10; i++) {
                System.out.println(i);
            }
        }
    }
class MyThread extends Thread
{
    Display obj=new Display();
    MyThread(String n)
    {
        super(n);
    }
    public void run()
    {
        yield();
        System.out.println("Start :"+getName());
        obj.display();
        System.out.println("End :"+getName());
    }
}
 class Main {
    public static void main(String[] args) throws InterruptedException{
        MyThread t1 = new MyThread("T1");
        MyThread t2 = new MyThread("T2");
        MyThread t3 = new MyThread("T3");
        MyThread t4 = new MyThread("T4");
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t3.join();
        t4.join();
    }
}


`,
                output: `
Start :T1
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
End :T1
Start :T3
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
Start :T2
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
End :T3
Start :T4
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
End :T2
End :T4
  
              `
            },

        },
        "Medium": {
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
        System.out.println("New Salary after 10% increment: Rs" + newSalary);

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
New Salary after 10% increment: Rs66000.0
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
            System.out.println("Deposited: Rs" + amount + " | New Balance: Rs" + balance);
        } else {
            System.out.println("Deposit amount must be positive!");
        }
    }

    // Method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: Rs" + amount + " | New Balance: Rs" + balance);
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
import java.util.ArrayList;
import java.util.List;

class Library {
    private List<String> books;

    public Library() {
        books = new ArrayList<>();
    }

    // Method to add a book to the library
    public void addBook(String book) {
        books.add(book);
        System.out.println("Book added: " + book);
    }

    // Method to remove a book from the library
    public void removeBook(String book) {
        if (books.contains(book)) {
            books.remove(book);
            System.out.println("Book removed: " + book);
        } else {
            System.out.println("Book not found: " + book);
        }
    }

    // Method to display all books in the library
    public void displayBooks() {
        if (books.isEmpty()) {
            System.out.println("No books in the library.");
        } else {
            System.out.println("Books in the library:");
            for (String book : books) {
                System.out.println("- " + book);
            }
        }
    }
}

public class LibraryManagement {
    public static void main(String[] args) {
        Library library = new Library();

        // Adding books to the library
        library.addBook("The Great Gatsby");
        library.addBook("To Kill a Mockingbird");
        library.addBook("1984");

        // Displaying all books
        library.displayBooks();

        // Removing a book from the library
        library.removeBook("1984");

        // Displaying all books after removal
        library.displayBooks();

        // Trying to remove a book that doesn't exist
        library.removeBook("Moby Dick");
    }
}

`,
                output: `
Book added: The Great Gatsby
Book added: To Kill a Mockingbird
Book added: 1984
Books in the library:
- The Great Gatsby
- To Kill a Mockingbird
- 1984
Book removed: 1984
Books in the library:
- The Great Gatsby
- To Kill a Mockingbird
Book not found: Moby Dick

                `
            },
            "create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.": {
                description: "Program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
                code: `
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

class Airplane {
    private String flightNumber;
    private String destination;
    private LocalTime departureTime;
    private boolean delayed;
    private LocalTime delayedTime;

    // Constructor to initialize the flight details
    public Airplane(String flightNumber, String destination, String departureTime) {
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.departureTime = LocalTime.parse(departureTime, DateTimeFormatter.ofPattern("HH:mm"));
        this.delayed = false;
        this.delayedTime = this.departureTime;
    }

    // Method to set a delay in minutes
    public void delayFlight(int delayMinutes) {
        delayed = true;
        delayedTime = departureTime.plusMinutes(delayMinutes);
        System.out.println("Flight " + flightNumber + " delayed by " + delayMinutes + " minutes.");
    }

    // Method to check the flight status
    public void checkFlightStatus() {
        LocalTime currentTime = LocalTime.now();
        System.out.println("Flight Number: " + flightNumber);
        System.out.println("Destination: " + destination);
        System.out.println("Scheduled Departure Time: " + departureTime.format(DateTimeFormatter.ofPattern("HH:mm")));
        if (delayed) {
            System.out.println("Delayed Departure Time: " + delayedTime.format(DateTimeFormatter.ofPattern("HH:mm")));
        }
        System.out.println("Flight Status: " + (currentTime.isBefore(delayedTime) ? "Scheduled" : "Departed"));
    }
}

public class AirplaneManagement {
    public static void main(String[] args) {
        // Creating a new flight
        Airplane flight = new Airplane("AI101", "New York", "15:30");

        // Checking initial flight status
        flight.checkFlightStatus();

        // Setting a delay of 45 minutes
        flight.delayFlight(45);

        // Checking the status again after delay
        flight.checkFlightStatus();
    }
}

`,
                output: `
Flight Number: AI101
Destination: New York
Scheduled Departure Time: 15:30
Flight Status: Scheduled
Flight AI101 delayed by 45 minutes.
Flight Number: AI101
Destination: New York
Scheduled Departure Time: 15:30
Delayed Departure Time: 16:15
Flight Status: Scheduled

                `
            },
            "create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.": {
                description: "Program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
                code: `
import java.util.HashMap;
import java.util.Map;

class Product {
    private String name;
    private int quantity;

    public Product(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void addQuantity(int amount) {
        quantity += amount;
    }

    public void removeQuantity(int amount) {
        if (quantity >= amount) {
            quantity -= amount;
        } else {
            System.out.println("Insufficient quantity for product: " + name);
        }
    }
}

class Inventory {
    private Map<String, Product> products;

    public Inventory() {
        products = new HashMap<>();
    }

    // Method to add a new product or increase quantity of an existing product
    public void addProduct(String name, int quantity) {
        if (products.containsKey(name)) {
            products.get(name).addQuantity(quantity);
            System.out.println("Added " + quantity + " more of " + name + " to inventory.");
        } else {
            products.put(name, new Product(name, quantity));
            System.out.println("Product " + name + " added with quantity " + quantity);
        }
    }

    // Method to remove quantity of a product
    public void removeProduct(String name, int quantity) {
        if (products.containsKey(name)) {
            products.get(name).removeQuantity(quantity);
            System.out.println("Removed " + quantity + " of " + name + " from inventory.");
            if (products.get(name).getQuantity() == 0) {
                products.remove(name);
                System.out.println("Product " + name + " is now out of stock and removed from inventory.");
            }
        } else {
            System.out.println("Product " + name + " not found in inventory.");
        }
    }

    // Method to check for low inventory products
    public void checkLowInventory(int threshold) {
        System.out.println("Products with quantity below " + threshold + ":");
        boolean lowInventoryFound = false;
        for (Product product : products.values()) {
            if (product.getQuantity() < threshold) {
                System.out.println("- " + product.getName() + ": " + product.getQuantity());
                lowInventoryFound = true;
            }
        }
        if (!lowInventoryFound) {
            System.out.println("No products with low inventory.");
        }
    }

    // Method to display all products and their quantities
    public void displayInventory() {
        System.out.println("Current Inventory:");
        for (Product product : products.values()) {
            System.out.println("- " + product.getName() + ": " + product.getQuantity());
        }
    }
}

public class InventoryManagement {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        // Adding products to the inventory
        inventory.addProduct("Apples", 50);
        inventory.addProduct("Bananas", 20);
        inventory.addProduct("Oranges", 5);

        // Displaying all products in the inventory
        inventory.displayInventory();

        // Removing products from the inventory
        inventory.removeProduct("Bananas", 5);
        inventory.removeProduct("Oranges", 5);

        // Displaying inventory after removal
        inventory.displayInventory();

        // Checking for low inventory (threshold set to 10)
        inventory.checkLowInventory(10);

        // Adding more of an existing product
        inventory.addProduct("Apples", 30);

        // Displaying final inventory
        inventory.displayInventory();
    }
}

`,
                output: `
Product Apples added with quantity 50
Product Bananas added with quantity 20
Product Oranges added with quantity 5
Current Inventory:
- Apples: 50
- Bananas: 20
- Oranges: 5
Removed 5 of Bananas from inventory.
Removed 5 of Oranges from inventory.
Product Oranges is now out of stock and removed from inventory.
Current Inventory:
- Apples: 50
- Bananas: 15
Products with quantity below 10:
- Bananas: 15
Added 30 more of Apples to inventory.
Current Inventory:
- Apples: 80
- Bananas: 15

                `
            },
            "create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.": {
                description: "Program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
                code: `
import java.util.ArrayList;
import java.util.List;

class Person {
    private String name;
    
    public Person(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
}

class Student extends Person {
    public Student(String name) {
        super(name);
    }
}

class Teacher extends Person {
    public Teacher(String name) {
        super(name);
    }
}

class SchoolClass {
    private String className;
    private Teacher teacher;
    private List<Student> students;
    
    public SchoolClass(String className, Teacher teacher) {
        this.className = className;
        this.teacher = teacher;
        this.students = new ArrayList<>();
    }

    public String getClassName() {
        return className;
    }

    public void addStudent(Student student) {
        students.add(student);
        System.out.println("Student " + student.getName() + " added to class " + className);
    }

    public void removeStudent(Student student) {
        if (students.remove(student)) {
            System.out.println("Student " + student.getName() + " removed from class " + className);
        } else {
            System.out.println("Student " + student.getName() + " not found in class " + className);
        }
    }

    public void displayClassInfo() {
        System.out.println("Class: " + className);
        System.out.println("Teacher: " + teacher.getName());
        System.out.println("Students:");
        for (Student student : students) {
            System.out.println("- " + student.getName());
        }
    }
}

class School {
    private List<Student> students;
    private List<Teacher> teachers;
    private List<SchoolClass> classes;

    public School() {
        students = new ArrayList<>();
        teachers = new ArrayList<>();
        classes = new ArrayList<>();
    }

    // Add a student to the school
    public void addStudent(String name) {
        Student student = new Student(name);
        students.add(student);
        System.out.println("Student " + name + " added to the school.");
    }

    // Remove a student from the school
    public void removeStudent(String name) {
        Student student = findStudentByName(name);
        if (student != null) {
            students.remove(student);
            System.out.println("Student " + name + " removed from the school.");
        } else {
            System.out.println("Student " + name + " not found.");
        }
    }

    // Add a teacher to the school
    public void addTeacher(String name) {
        Teacher teacher = new Teacher(name);
        teachers.add(teacher);
        System.out.println("Teacher " + name + " added to the school.");
    }

    // Remove a teacher from the school
    public void removeTeacher(String name) {
        Teacher teacher = findTeacherByName(name);
        if (teacher != null) {
            teachers.remove(teacher);
            System.out.println("Teacher " + name + " removed from the school.");
        } else {
            System.out.println("Teacher " + name + " not found.");
        }
    }

    // Create a new class
    public void createClass(String className, String teacherName) {
        Teacher teacher = findTeacherByName(teacherName);
        if (teacher != null) {
            SchoolClass schoolClass = new SchoolClass(className, teacher);
            classes.add(schoolClass);
            System.out.println("Class " + className + " created with teacher " + teacherName);
        } else {
            System.out.println("Teacher " + teacherName + " not found. Cannot create class.");
        }
    }

    // Enroll a student into a specific class
    public void enrollStudentInClass(String studentName, String className) {
        Student student = findStudentByName(studentName);
        SchoolClass schoolClass = findClassByName(className);
        
        if (student != null && schoolClass != null) {
            schoolClass.addStudent(student);
        } else {
            System.out.println("Cannot enroll student. Either student or class not found.");
        }
    }

    // Find a student by name
    private Student findStudentByName(String name) {
        for (Student student : students) {
            if (student.getName().equals(name)) {
                return student;
            }
        }
        return null;
    }

    // Find a teacher by name
    private Teacher findTeacherByName(String name) {
        for (Teacher teacher : teachers) {
            if (teacher.getName().equals(name)) {
                return teacher;
            }
        }
        return null;
    }

    // Find a class by name
    private SchoolClass findClassByName(String className) {
        for (SchoolClass schoolClass : classes) {
            if (schoolClass.getClassName().equals(className)) {
                return schoolClass;
            }
        }
        return null;
    }

    // Display all classes and their details
    public void displaySchoolInfo() {
        System.out.println("School Information:");
        for (SchoolClass schoolClass : classes) {
            schoolClass.displayClassInfo();
        }
    }
}

public class SchoolManagement {
    public static void main(String[] args) {
        School school = new School();

        // Add students to the school
        school.addStudent("Alice");
        school.addStudent("Bob");

        // Add teachers to the school
        school.addTeacher("Mr. Smith");
        school.addTeacher("Ms. Johnson");

        // Create a class and assign a teacher
        school.createClass("Math 101", "Mr. Smith");

        // Enroll students in the class
        school.enrollStudentInClass("Alice", "Math 101");
        school.enrollStudentInClass("Bob", "Math 101");

        // Display information about the school
        school.displaySchoolInfo();
    }
}

`,
                output: `
Student Alice added to the school.
Student Bob added to the school.
Teacher Mr. Smith added to the school.
Teacher Ms. Johnson added to the school.
Class Math 101 created with teacher Mr. Smith
Student Alice added to class Math 101
Student Bob added to class Math 101
School Information:
Class: Math 101
Teacher: Mr. Smith
Students:
- Alice
- Bob

                `
            },
            "create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.": {
                description: "Program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
                code: `
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class Song {
    private String title;
    private String artist;

    public Song(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public void play() {
        System.out.println("Now playing: " + title + " by " + artist);
    }
}

class MusicLibrary {
    private List<Song> songs;

    public MusicLibrary() {
        songs = new ArrayList<>();
    }

    // Method to add a song to the library
    public void addSong(String title, String artist) {
        songs.add(new Song(title, artist));
        System.out.println("Song \"" + title + "\" by " + artist + " added to the library.");
    }

    // Method to remove a song from the library by title
    public void removeSong(String title) {
        Song songToRemove = null;
        for (Song song : songs) {
            if (song.getTitle().equalsIgnoreCase(title)) {
                songToRemove = song;
                break;
            }
        }
        if (songToRemove != null) {
            songs.remove(songToRemove);
            System.out.println("Song \"" + title + "\" removed from the library.");
        } else {
            System.out.println("Song \"" + title + "\" not found in the library.");
        }
    }

    // Method to play a random song from the library
    public void playRandomSong() {
        if (songs.isEmpty()) {
            System.out.println("The library is empty. Add some songs to play.");
            return;
        }
        Random random = new Random();
        Song randomSong = songs.get(random.nextInt(songs.size()));
        randomSong.play();
    }

    // Method to display all songs in the library
    public void displaySongs() {
        if (songs.isEmpty()) {
            System.out.println("The library is empty.");
        } else {
            System.out.println("Songs in the library:");
            for (Song song : songs) {
                System.out.println("- " + song.getTitle() + " by " + song.getArtist());
            }
        }
    }
}

public class MusicLibraryManager {
    public static void main(String[] args) {
        MusicLibrary musicLibrary = new MusicLibrary();

        // Adding songs to the library
        musicLibrary.addSong("Bohemian Rhapsody", "Queen");
        musicLibrary.addSong("Imagine", "John Lennon");
        musicLibrary.addSong("Hotel California", "Eagles");

        // Displaying all songs in the library
        musicLibrary.displaySongs();

        // Playing a random song
        musicLibrary.playRandomSong();

        // Removing a song from the library
        musicLibrary.removeSong("Imagine");

        // Displaying the library after removal
        musicLibrary.displaySongs();

        // Trying to play a random song again
        musicLibrary.playRandomSong();
    }
}

`,
                output: `
Song "Bohemian Rhapsody" by Queen added to the library.
Song "Imagine" by John Lennon added to the library.
Song "Hotel California" by Eagles added to the library.
Songs in the library:
- Bohemian Rhapsody by Queen
- Imagine by John Lennon
- Hotel California by Eagles
Now playing: Hotel California by Eagles
Song "Imagine" removed from the library.
Songs in the library:
- Bohemian Rhapsody by Queen
- Hotel California by Eagles
Now playing: Bohemian Rhapsody by Queen

                `
            },
            "create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".": {
                description: "Program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
                code: `
abstract class Shape {
    // Abstract methods for calculating area and perimeter
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Triangle extends Shape {
    private double sideA;
    private double sideB;
    private double sideC;

    public Triangle(double sideA, double sideB, double sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    @Override
    public double calculateArea() {
        double s = (sideA + sideB + sideC) / 2; // semi-perimeter
        return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    }

    @Override
    public double calculatePerimeter() {
        return sideA + sideB + sideC;
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(5, 3);
        System.out.println("Rectangle Area: " + rectangle.calculateArea());
        System.out.println("Rectangle Perimeter: " + rectangle.calculatePerimeter());

        Shape circle = new Circle(4);
        System.out.println("Circle Area: " + circle.calculateArea());
        System.out.println("Circle Perimeter: " + circle.calculatePerimeter());

        Shape triangle = new Triangle(3, 4, 5);
        System.out.println("Triangle Area: " + triangle.calculateArea());
        System.out.println("Triangle Perimeter: " + triangle.calculatePerimeter());
    }
}
 
`,
                output: `
Rectangle Area: 15.0
Rectangle Perimeter: 16.0
Circle Area: 50.26548245743669
Circle Perimeter: 25.132741228718345
Triangle Area: 6.0
Triangle Perimeter: 12.0

                `
            },
            "create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.": {
                description: "Program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
                code: `
import java.util.ArrayList;
import java.util.List;

class Review {
    private String reviewer;
    private String reviewText;
    private int rating; // rating out of 5

    public Review(String reviewer, String reviewText, int rating) {
        this.reviewer = reviewer;
        this.reviewText = reviewText;
        this.rating = rating;
    }

    public String getReviewer() {
        return reviewer;
    }

    public String getReviewText() {
        return reviewText;
    }

    public int getRating() {
        return rating;
    }

    @Override
    public String toString() {
        return "Reviewer: " + reviewer + "\nRating: " + rating + "/5\nReview: " + reviewText + "\n";
    }
}

class Movie {
    private String title;
    private String director;
    private List<String> actors;
    private List<Review> reviews;

    public Movie(String title, String director, List<String> actors) {
        this.title = title;
        this.director = director;
        this.actors = new ArrayList<>(actors);
        this.reviews = new ArrayList<>();
    }

    public String getTitle() {
        return title;
    }

    public String getDirector() {
        return director;
    }

    public List<String> getActors() {
        return actors;
    }

    // Method to add a review
    public void addReview(String reviewer, String reviewText, int rating) {
        reviews.add(new Review(reviewer, reviewText, rating));
        System.out.println("Review added by " + reviewer);
    }

    // Method to retrieve all reviews
    public List<Review> getReviews() {
        return reviews;
    }

    // Method to display all information about the movie
    public void displayMovieInfo() {
        System.out.println("Title: " + title);
        System.out.println("Director: " + director);
        System.out.print("Actors: ");
        for (String actor : actors) {
            System.out.print(actor + " ");
        }
        System.out.println("\nReviews:");
        if (reviews.isEmpty()) {
            System.out.println("No reviews yet.");
        } else {
            for (Review review : reviews) {
                System.out.println(review);
            }
        }
    }
}

public class MovieApp {
    public static void main(String[] args) {
        // List of actors for the movie
        List<String> actors = new ArrayList<>();
        actors.add("Leonardo DiCaprio");
        actors.add("Kate Winslet");

        // Create a movie instance
        Movie movie = new Movie("Titanic", "James Cameron", actors);

        // Display movie information
        movie.displayMovieInfo();

        // Add reviews
        movie.addReview("Alice", "An amazing love story with stunning visuals.", 5);
        movie.addReview("Bob", "A timeless classic, though a bit too long.", 4);

        // Display movie information again with reviews
        System.out.println("\nUpdated Movie Info:");
        movie.displayMovieInfo();
    }
}

`,
                output: `
Title: Titanic
Director: James Cameron
Actors: Leonardo DiCaprio Kate Winslet 
Reviews:
No reviews yet.
Review added by Alice
Review added by Bob

Updated Movie Info:
Title: Titanic
Director: James Cameron
Actors: Leonardo DiCaprio Kate Winslet 
Reviews:
Reviewer: Alice
Rating: 5/5
Review: An amazing love story with stunning visuals.

Reviewer: Bob
Rating: 4/5
Review: A timeless classic, though a bit too long.

                `
            },
            "create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.": {
                description: "Program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
                code: `
import java.util.ArrayList;
import java.util.List;

class MenuItem {
    private String name;
    private double price;
    private List<Integer> ratings;

    public MenuItem(String name, double price) {
        this.name = name;
        this.price = price;
        this.ratings = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public void addRating(int rating) {
        if (rating >= 1 && rating <= 5) {
            ratings.add(rating);
        } else {
            System.out.println("Invalid rating. Please enter a rating between 1 and 5.");
        }
    }

    public double getAverageRating() {
        if (ratings.isEmpty()) {
            return 0;
        }
        double sum = 0;
        for (int rating : ratings) {
            sum += rating;
        }
        return sum / ratings.size();
    }

    @Override
    public String toString() {
        return name + " - $" + price + " (Average Rating: " + String.format("%.2f", getAverageRating()) + ")";
    }
}

class Restaurant {
    private List<MenuItem> menu;

    public Restaurant() {
        this.menu = new ArrayList<>();
    }

    // Method to add a menu item
    public void addMenuItem(String name, double price) {
        menu.add(new MenuItem(name, price));
        System.out.println("Added item: " + name + " - $" + price);
    }

    // Method to remove a menu item by name
    public void removeMenuItem(String name) {
        MenuItem itemToRemove = null;
        for (MenuItem item : menu) {
            if (item.getName().equalsIgnoreCase(name)) {
                itemToRemove = item;
                break;
            }
        }
        if (itemToRemove != null) {
            menu.remove(itemToRemove);
            System.out.println("Removed item: " + name);
        } else {
            System.out.println("Item not found: " + name);
        }
    }

    // Method to add a rating to a menu item by name
    public void addRating(String name, int rating) {
        for (MenuItem item : menu) {
            if (item.getName().equalsIgnoreCase(name)) {
                item.addRating(rating);
                System.out.println("Added rating of " + rating + " to " + name);
                return;
            }
        }
        System.out.println("Item not found: " + name);
    }

    // Method to calculate the average rating of all items
    public double calculateAverageRating() {
        if (menu.isEmpty()) {
            return 0;
        }
        double totalRating = 0;
        int count = 0;
        for (MenuItem item : menu) {
            totalRating += item.getAverageRating();
            if (item.getAverageRating() > 0) {
                count++;
            }
        }
        return count == 0 ? 0 : totalRating / count;
    }

    // Method to display the menu
    public void displayMenu() {
        System.out.println("Menu:");
        for (MenuItem item : menu) {
            System.out.println(item);
        }
    }
}

public class RestaurantApp {
    public static void main(String[] args) {
        Restaurant restaurant = new Restaurant();

        // Adding menu items
        restaurant.addMenuItem("Pasta", 12.99);
        restaurant.addMenuItem("Pizza", 15.49);
        restaurant.addMenuItem("Burger", 8.99);

        // Displaying the menu
        restaurant.displayMenu();

        // Adding ratings
        restaurant.addRating("Pasta", 5);
        restaurant.addRating("Pasta", 4);
        restaurant.addRating("Pizza", 3);
        restaurant.addRating("Burger", 5);
        restaurant.addRating("Burger", 4);

        // Displaying the menu with ratings
        System.out.println("\nUpdated Menu:");
        restaurant.displayMenu();

        // Calculating and displaying the average rating of all items
        System.out.println("\nAverage Rating of All Items: " + String.format("%.2f", restaurant.calculateAverageRating()));

        // Removing a menu item
        restaurant.removeMenuItem("Pizza");

        // Displaying the menu after removal
        System.out.println("\nMenu After Removal:");
        restaurant.displayMenu();
    }
}

`,
                output: `
Added item: Pasta - $12.99
Added item: Pizza - $15.49
Added item: Burger - $8.99
Menu:
Pasta - $12.99 (Average Rating: 0.00)
Pizza - $15.49 (Average Rating: 0.00)
Burger - $8.99 (Average Rating: 0.00)
Added rating of 5 to Pasta
Added rating of 4 to Pasta
Added rating of 3 to Pizza
Added rating of 5 to Burger
Added rating of 4 to Burger

Updated Menu:
Pasta - $12.99 (Average Rating: 4.50)
Pizza - $15.49 (Average Rating: 3.00)
Burger - $8.99 (Average Rating: 4.50)

Average Rating of All Items: 4.00
Removed item: Pizza

Menu After Removal:
Pasta - $12.99 (Average Rating: 4.50)
Burger - $8.99 (Average Rating: 4.50)

                `
            },
            "create a class with methods to search for flights and hotels, and to book and cancel reservations.": {
                description: "Program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
                code: `
import java.util.ArrayList;
import java.util.List;

class Flight {
    private String flightNumber;
    private String origin;
    private String destination;
    private String departureTime;

    public Flight(String flightNumber, String origin, String destination, String departureTime) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public String getOrigin() {
        return origin;
    }

    public String getDestination() {
        return destination;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    @Override
    public String toString() {
        return "Flight " + flightNumber + " from " + origin + " to " + destination + " at " + departureTime;
    }
}

class Hotel {
    private String name;
    private String location;
    private double pricePerNight;

    public Hotel(String name, String location, double pricePerNight) {
        this.name = name;
        this.location = location;
        this.pricePerNight = pricePerNight;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public double getPricePerNight() {
        return pricePerNight;
    }

    @Override
    public String toString() {
        return name + " in " + location + " - $" + pricePerNight + " per night";
    }
}

class Reservation {
    private String type; // "Flight" or "Hotel"
    private String details;

    public Reservation(String type, String details) {
        this.type = type;
        this.details = details;
    }

    public String getType() {
        return type;
    }

    public String getDetails() {
        return details;
    }

    @Override
    public String toString() {
        return type + " Reservation: " + details;
    }
}

class TravelBooking {
    private List<Flight> flights;
    private List<Hotel> hotels;
    private List<Reservation> reservations;

    public TravelBooking() {
        flights = new ArrayList<>();
        hotels = new ArrayList<>();
        reservations = new ArrayList<>();

        // Adding sample data for flights and hotels
        flights.add(new Flight("AA101", "New York", "Los Angeles", "10:00 AM"));
        flights.add(new Flight("UA202", "Chicago", "Miami", "12:30 PM"));
        flights.add(new Flight("DL303", "San Francisco", "Seattle", "3:45 PM"));

        hotels.add(new Hotel("Grand Hotel", "Los Angeles", 150.00));
        hotels.add(new Hotel("Beach Resort", "Miami", 200.00));
        hotels.add(new Hotel("Mountain Inn", "Seattle", 120.00));
    }

    // Method to search for flights by destination
    public List<Flight> searchFlights(String destination) {
        List<Flight> result = new ArrayList<>();
        for (Flight flight : flights) {
            if (flight.getDestination().equalsIgnoreCase(destination)) {
                result.add(flight);
            }
        }
        return result;
    }

    // Method to search for hotels by location
    public List<Hotel> searchHotels(String location) {
        List<Hotel> result = new ArrayList<>();
        for (Hotel hotel : hotels) {
            if (hotel.getLocation().equalsIgnoreCase(location)) {
                result.add(hotel);
            }
        }
        return result;
    }

    // Method to book a reservation
    public void bookReservation(String type, String details) {
        reservations.add(new Reservation(type, details));
        System.out.println(type + " reservation booked: " + details);
    }

    // Method to cancel a reservation by details
    public void cancelReservation(String type, String details) {
        Reservation toRemove = null;
        for (Reservation reservation : reservations) {
            if (reservation.getType().equalsIgnoreCase(type) && reservation.getDetails().equalsIgnoreCase(details)) {
                toRemove = reservation;
                break;
            }
        }
        if (toRemove != null) {
            reservations.remove(toRemove);
            System.out.println(type + " reservation canceled: " + details);
        } else {
            System.out.println(type + " reservation not found: " + details);
        }
    }

    // Method to display all reservations
    public void displayReservations() {
        System.out.println("Current Reservations:");
        if (reservations.isEmpty()) {
            System.out.println("No reservations found.");
        } else {
            for (Reservation reservation : reservations) {
                System.out.println(reservation);
            }
        }
    }
}

public class TravelBookingApp {
    public static void main(String[] args) {
        TravelBooking travelBooking = new TravelBooking();

        // Search for flights to Los Angeles
        System.out.println("Flights to Los Angeles:");
        List<Flight> flightsToLA = travelBooking.searchFlights("Los Angeles");
        for (Flight flight : flightsToLA) {
            System.out.println(flight);
        }

        // Search for hotels in Miami
        System.out.println("\nHotels in Miami:");
        List<Hotel> hotelsInMiami = travelBooking.searchHotels("Miami");
        for (Hotel hotel : hotelsInMiami) {
            System.out.println(hotel);
        }

        // Book a flight reservation
        if (!flightsToLA.isEmpty()) {
            travelBooking.bookReservation("Flight", flightsToLA.get(0).toString());
        }

        // Book a hotel reservation
        if (!hotelsInMiami.isEmpty()) {
            travelBooking.bookReservation("Hotel", hotelsInMiami.get(0).toString());
        }

        // Display all reservations
        System.out.println("\nAll Reservations:");
        travelBooking.displayReservations();

        // Cancel a flight reservation
        if (!flightsToLA.isEmpty()) {
            travelBooking.cancelReservation("Flight", flightsToLA.get(0).toString());
        }

        // Display all reservations after cancellation
        System.out.println("\nReservations After Cancellation:");
        travelBooking.displayReservations();
    }
}

`,
                output: `
Flights to Los Angeles:
Flight AA101 from New York to Los Angeles at 10:00 AM

Hotels in Miami:
Beach Resort in Miami - $200.0 per night

Flight reservation booked: Flight AA101 from New York to Los Angeles at 10:00 AM
Hotel reservation booked: Beach Resort in Miami - $200.0 per night

All Reservations:
Flight Reservation: Flight AA101 from New York to Los Angeles at 10:00 AM
Hotel Reservation: Beach Resort in Miami - $200.0 per night

Flight reservation canceled: Flight AA101 from New York to Los Angeles at 10:00 AM

Reservations After Cancellation:
Hotel Reservation: Beach Resort in Miami - $200.0 per night

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
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Student {
    private int rollNo;
    private String name;
    private String studentClass;

    public Student(int rollNo, String name, String studentClass) {
        this.rollNo = rollNo;
        this.name = name;
        this.studentClass = studentClass;
    }

    public int getRollNo() {
        return rollNo;
    }

    public String getName() {
        return name;
    }

    public String getStudentClass() {
        return studentClass;
    }

    @Override
    public String toString() {
        return "Roll No: " + rollNo + ", Name: " + name + ", Class: " + studentClass;
    }
}

public class StudentApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Student> students = new ArrayList<>();

        System.out.println("Enter details for 10 students:");

        for (int i = 0; i < 10; i++) {
            System.out.print("Enter name of student " + (i + 1) + ": ");
            String name = scanner.nextLine();

            System.out.print("Enter class of student " + (i + 1) + ": ");
            String studentClass = scanner.nextLine();

            // Automatically generate roll number (starting from 1)
            int rollNo = i + 1;

            // Create a new Student object
            Student student = new Student(rollNo, name, studentClass);
            students.add(student);
        }

        // Display all students
        System.out.println("\nStudent Details:");
        for (Student student : students) {
            System.out.println(student);
        }

        scanner.close();
    }
}

`,
                output: `
Enter details for 10 students:
Enter name of student 1: Alice
Enter class of student 1: 10A
Enter name of student 2: Bob
Enter class of student 2: 10B
Enter name of student 3: Charlie
Enter class of student 3: 10C
Enter name of student 4: David
Enter class of student 4: 10A
Enter name of student 5: Eva
Enter class of student 5: 10B
Enter name of student 6: Frank
Enter class of student 6: 10C
Enter name of student 7: Grace
Enter class of student 7: 10A
Enter name of student 8: Harry
Enter class of student 8: 10B
Enter name of student 9: Ivy
Enter class of student 9: 10C
Enter name of student 10: Jack
Enter class of student 10: 10A

Student Details:
Roll No: 1, Name: Alice, Class: 10A
Roll No: 2, Name: Bob, Class: 10B
Roll No: 3, Name: Charlie, Class: 10C
Roll No: 4, Name: David, Class: 10A
Roll No: 5, Name: Eva, Class: 10B
Roll No: 6, Name: Frank, Class: 10C
Roll No: 7, Name: Grace, Class: 10A
Roll No: 8, Name: Harry, Class: 10B
Roll No: 9, Name: Ivy, Class: 10C
Roll No: 10, Name: Jack, Class: 10A

                `
            },
            "Create a class showing the area of circle and rectangle by method overloading.": {
                description: "Program to Create a class showing the area of circle and rectangle by method overloading.",
                code: `
import java.util.Scanner;

class AreaCalculator {
    
    // Method to calculate the area of a circle
    public double area(double radius) {
        return Math.PI * radius * radius; // Area = π * r²
    }

    // Method to calculate the area of a rectangle
    public double area(double length, double width) {
        return length * width; // Area = length * width
    }
}

public class AreaApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        AreaCalculator calculator = new AreaCalculator();

        // Calculate area of a circle
        System.out.print("Enter the radius of the circle: ");
        double radius = scanner.nextDouble();
        double circleArea = calculator.area(radius);
        System.out.println("Area of the circle: " + circleArea);

        // Calculate area of a rectangle
        System.out.print("Enter the length of the rectangle: ");
        double length = scanner.nextDouble();
        System.out.print("Enter the width of the rectangle: ");
        double width = scanner.nextDouble();
        double rectangleArea = calculator.area(length, width);
        System.out.println("Area of the rectangle: " + rectangleArea);

        scanner.close();
    }
}

`,
                output: `
Enter the radius of the circle: 5
Area of the circle: 78.53981633974483
Enter the length of the rectangle: 4
Enter the width of the rectangle: 6
Area of the rectangle: 24.0

                `
            },
            "Create a class, entering the command line arguments from the user and show all the arguments as output..": {
                description: "Program to Create a class, entering the command line arguments from the user and show all the arguments as output..",
                code: `
class CmdLineArg
        {
        public static void main(String st[])
        {
        for(int i =0;i&lt;st.length();i++)
      {
        System.out.println(st[i]);
        }
        }
        }
`,
                output: `
C:/&gt;java CmdLineArg Manjit Sandeep Abhishek
Manjit 
Sandeep 
Abhishek
                `
            },
            "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.": {
                description: "Program to Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
                code: `
class Person {
    // Private instance variables
    private String name;
    private int age;
    private String country;

    // Constructor
    public Person(String name, int age, String country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Setter for age
    public void setAge(int age) {
        if (age > 0) { // Validate age
            this.age = age;
        } else {
            System.out.println("Age must be positive.");
        }
    }

    // Getter for country
    public String getCountry() {
        return country;
    }

    // Setter for country
    public void setCountry(String country) {
        this.country = country;
    }

    // Method to display person details
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Country: " + country);
    }
}

public class PersonApp {
    public static void main(String[] args) {
        // Creating a Person object
        Person person = new Person("Alice", 30, "USA");

        // Displaying initial details
        System.out.println("Initial Person Details:");
        person.displayInfo();

        // Modifying the person's details
        person.setName("Bob");
        person.setAge(25);
        person.setCountry("Canada");

        // Displaying updated details
        System.out.println("\nUpdated Person Details:");
        person.displayInfo();

        // Attempting to set an invalid age
        person.setAge(-5); // Should print an error message
    }
}

`,
                output: `
Initial Person Details:
Name: Alice
Age: 30
Country: USA

Updated Person Details:
Name: Bob
Age: 25
Country: Canada
Age must be positive.

                `
            },
            "create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.": {
                description: "Program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
                code: `
class BankAccount {
    // Private instance variables
    private String accountNumber;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Getter for accountNumber
    public String getAccountNumber() {
        return accountNumber;
    }

    // Setter for accountNumber
    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    // Getter for balance
    public double getBalance() {
        return balance;
    }

    // Setter for balance (with validation)
    public void setBalance(double balance) {
        if (balance >= 0) { // Validate balance
            this.balance = balance;
        } else {
            System.out.println("Balance cannot be negative.");
        }
    }

    // Method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else if (amount > balance) {
            System.out.println("Insufficient balance for withdrawal.");
        } else {
            System.out.println("Withdrawal amount must be positive.");
        }
    }

    // Method to display account details
    public void displayAccountInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }
}

public class BankAccountApp {
    public static void main(String[] args) {
        // Creating a BankAccount object
        BankAccount account = new BankAccount("123456789", 1000.0);

        // Displaying account details
        System.out.println("Initial Account Details:");
        account.displayAccountInfo();

        // Modifying account details
        account.setAccountNumber("987654321");
        account.setBalance(1500.0);

        // Displaying updated account details
        System.out.println("\nUpdated Account Details:");
        account.displayAccountInfo();

        // Testing deposit and withdraw methods
        account.deposit(500.0); // Depositing money
        account.withdraw(300.0); // Withdrawing money

        // Displaying final account details
        System.out.println("\nFinal Account Details:");
        account.displayAccountInfo();

        // Attempting to set a negative balance
        account.setBalance(-100.0); // Should print an error message
    }
}

`,
                output: `
Initial Account Details:
Account Number: 123456789
Balance: 1000.0

Updated Account Details:
Account Number: 987654321
Balance: 1500.0
Deposited: 500.0
Withdrew: 300.0

Final Account Details:
Account Number: 987654321
Balance: 1700.0
Balance cannot be negative.

                `
            },
            "create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.": {
                description: "Program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
                code: `
class Rectangle {
    // Private instance variables
    private double length;
    private double width;

    // Constructor
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Getter for length
    public double getLength() {
        return length;
    }

    // Setter for length
    public void setLength(double length) {
        if (length > 0) { // Validate length
            this.length = length;
        } else {
            System.out.println("Length must be positive.");
        }
    }

    // Getter for width
    public double getWidth() {
        return width;
    }

    // Setter for width
    public void setWidth(double width) {
        if (width > 0) { // Validate width
            this.width = width;
        } else {
            System.out.println("Width must be positive.");
        }
    }

    // Method to calculate area of the rectangle
    public double calculateArea() {
        return length * width;
    }

    // Method to calculate perimeter of the rectangle
    public double calculatePerimeter() {
        return 2 * (length + width);
    }

    // Method to display rectangle details
    public void displayRectangleInfo() {
        System.out.println("Rectangle Length: " + length);
        System.out.println("Rectangle Width: " + width);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

public class RectangleApp {
    public static void main(String[] args) {
        // Creating a Rectangle object
        Rectangle rectangle = new Rectangle(5.0, 3.0);

        // Displaying initial rectangle details
        System.out.println("Initial Rectangle Details:");
        rectangle.displayRectangleInfo();

        // Modifying rectangle dimensions
        rectangle.setLength(7.0);
        rectangle.setWidth(4.0);

        // Displaying updated rectangle details
        System.out.println("\nUpdated Rectangle Details:");
        rectangle.displayRectangleInfo();

        // Attempting to set a negative length
        rectangle.setLength(-2.0); // Should print an error message
    }
}

`,
                output: `
Initial Rectangle Details:
Rectangle Length: 5.0
Rectangle Width: 3.0
Area: 15.0
Perimeter: 16.0

Updated Rectangle Details:
Rectangle Length: 7.0
Rectangle Width: 4.0
Area: 28.0
Perimeter: 22.0
Length must be positive.

                `
            },
            "create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.": {
                description: "Program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
                code: `
class Employee {
    // Private instance variables
    private int employee_id;
    private String employee_name;
    private double employee_salary;

    // Constructor
    public Employee(int employee_id, String employee_name, double employee_salary) {
        this.employee_id = employee_id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
    }

    // Getter for employee_id
    public int getEmployeeId() {
        return employee_id;
    }

    // Setter for employee_id
    public void setEmployeeId(int employee_id) {
        this.employee_id = employee_id;
    }

    // Getter for employee_name
    public String getEmployeeName() {
        return employee_name;
    }

    // Setter for employee_name
    public void setEmployeeName(String employee_name) {
        this.employee_name = employee_name;
    }

    // Getter for employee_salary (formatted as a string)
    public String getEmployeeSalary() {
        return String.format("$%.2f", employee_salary); // Format salary as currency
    }

    // Method to display employee details
    public void displayEmployeeInfo() {
        System.out.println("Employee ID: " + employee_id);
        System.out.println("Employee Name: " + employee_name);
        System.out.println("Employee Salary: " + getEmployeeSalary());
    }
}

public class EmployeeApp {
    public static void main(String[] args) {
        // Creating an Employee object
        Employee employee = new Employee(1, "John Doe", 75000.50);

        // Displaying initial employee details
        System.out.println("Initial Employee Details:");
        employee.displayEmployeeInfo();

        // Modifying employee details
        employee.setEmployeeId(2);
        employee.setEmployeeName("Jane Smith");

        // Displaying updated employee details
        System.out.println("\nUpdated Employee Details:");
        employee.displayEmployeeInfo();
    }
}

`,
                output: `
Initial Employee Details:
Employee ID: 1
Employee Name: John Doe
Employee Salary: $75000.50

Updated Employee Details:
Employee ID: 2
Employee Name: Jane Smith
Employee Salary: $75000.50

                `
            },
            "create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.": {
                description: "Program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
                code: `
class Circle {
    // Private instance variable
    private double radius;

    // Constructor
    public Circle(double radius) {
        setRadius(radius); // Use setter for validation
    }

    // Getter for radius
    public double getRadius() {
        return radius;
    }

    // Setter for radius
    public void setRadius(double radius) {
        if (radius > 0) { // Validate radius
            this.radius = radius;
        } else {
            System.out.println("Radius must be positive.");
        }
    }

    // Method to calculate area of the circle
    public double calculateArea() {
        return Math.PI * radius * radius; // Area = π * r²
    }

    // Method to calculate perimeter (circumference) of the circle
    public double calculatePerimeter() {
        return 2 * Math.PI * radius; // Perimeter = 2 * π * r
    }

    // Method to display circle details
    public void displayCircleInfo() {
        System.out.println("Circle Radius: " + radius);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

public class CircleApp {
    public static void main(String[] args) {
        // Creating a Circle object
        Circle circle = new Circle(5.0);

        // Displaying initial circle details
        System.out.println("Initial Circle Details:");
        circle.displayCircleInfo();

        // Modifying the radius
        circle.setRadius(7.0);

        // Displaying updated circle details
        System.out.println("\nUpdated Circle Details:");
        circle.displayCircleInfo();

        // Attempting to set a negative radius
        circle.setRadius(-3.0); // Should print an error message
    }
}

`,
                output: `
Initial Circle Details:
Circle Radius: 5.0
Area: 78.53981633974483
Perimeter: 31.41592653589793

Updated Circle Details:
Circle Radius: 7.0
Area: 153.93804002589985
Perimeter: 43.982297150257104
Radius must be positive.

                `
            },
            "create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.": {
                description: "Program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
                code: `
class Car {
    // Private instance variables
    private String company_name;
    private String model_name;
    private int year;
    private double mileage;

    // Constructor
    public Car(String company_name, String model_name, int year, double mileage) {
        this.company_name = company_name;
        this.model_name = model_name;
        this.year = year;
        this.mileage = mileage; // Mileage is set once during initialization
    }

    // Getter for company_name
    public String getCompanyName() {
        return company_name;
    }

    // Setter for company_name
    public void setCompanyName(String company_name) {
        this.company_name = company_name;
    }

    // Getter for model_name
    public String getModelName() {
        return model_name;
    }

    // Setter for model_name
    public void setModelName(String model_name) {
        this.model_name = model_name;
    }

    // Getter for year
    public int getYear() {
        return year;
    }

    // Setter for year
    public void setYear(int year) {
        this.year = year;
    }

    // Getter for mileage
    public double getMileage() {
        return mileage; // No setter for mileage
    }

    // Method to display car details
    public void displayCarInfo() {
        System.out.println("Car Company: " + company_name);
        System.out.println("Car Model: " + model_name);
        System.out.println("Year: " + year);
        System.out.println("Mileage: " + mileage);
    }
}

public class CarApp {
    public static void main(String[] args) {
        // Creating a Car object
        Car car = new Car("Toyota", "Camry", 2020, 15000.5);

        // Displaying initial car details
        System.out.println("Initial Car Details:");
        car.displayCarInfo();

        // Modifying car details
        car.setCompanyName("Honda");
        car.setModelName("Accord");
        car.setYear(2021);

        // Displaying updated car details
        System.out.println("\nUpdated Car Details:");
        car.displayCarInfo();

        // Attempting to set mileage (not allowed)
        // car.setMileage(20000.0); // Uncommenting this line would cause a compilation error
    }
}

`,
                output: `
Initial Car Details:
Car Company: Toyota
Car Model: Camry
Year: 2020
Mileage: 15000.5

Updated Car Details:
Car Company: Honda
Car Model: Accord
Year: 2021
Mileage: 15000.5

                `
            },
            "create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.": {
                description: "Program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
                code: `
import java.util.ArrayList;
import java.util.List;

class Student {
    // Private instance variables
    private int student_id;
    private String student_name;
    private List<Double> grades;

    // Constructor
    public Student(int student_id, String student_name) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.grades = new ArrayList<>(); // Initialize the grades list
    }

    // Getter for student_id
    public int getStudentId() {
        return student_id;
    }

    // Setter for student_id
    public void setStudentId(int student_id) {
        this.student_id = student_id;
    }

    // Getter for student_name
    public String getStudentName() {
        return student_name;
    }

    // Setter for student_name
    public void setStudentName(String student_name) {
        this.student_name = student_name;
    }

    // Method to add a grade with validation
    public void addGrade(double grade) {
        if (grade >= 0 && grade <= 100) { // Validate that the grade is between 0 and 100
            grades.add(grade);
            System.out.println("Grade " + grade + " added for student " + student_name);
        } else {
            System.out.println("Invalid grade. Please enter a grade between 0 and 100.");
        }
    }

    // Method to display student details and grades
    public void displayStudentInfo() {
        System.out.println("Student ID: " + student_id);
        System.out.println("Student Name: " + student_name);
        System.out.println("Grades: " + grades);
    }
}

public class StudentApp {
    public static void main(String[] args) {
        // Creating a Student object
        Student student = new Student(1, "Alice");

        // Displaying initial student details
        System.out.println("Initial Student Details:");
        student.displayStudentInfo();

        // Adding grades
        student.addGrade(85.5); // Valid grade
        student.addGrade(92.0);  // Valid grade
        student.addGrade(150.0); // Invalid grade
        student.addGrade(-10.0); // Invalid grade

        // Displaying updated student details
        System.out.println("\nUpdated Student Details:");
        student.displayStudentInfo();
    }
}

`,
                output: `
Initial Student Details:
Student ID: 1
Student Name: Alice
Grades: []

Grade 85.5 added for student Alice
Grade 92.0 added for student Alice
Invalid grade. Please enter a grade between 0 and 100.
Invalid grade. Please enter a grade between 0 and 100.

Updated Student Details:
Student ID: 1
Student Name: Alice
Grades: [85.5, 92.0]

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
package pack1;
public class ClassA
    {
       public void display()
        {
            System.out.println("This is Class A!");
        }
    }
--------------------------------------------------
package pack1;
public class ClassB
    {
        public void display()
        {
            System.out.println("This is Class B!");
        }
    }
---------------------------------------------------
package pack1;
public class ClassC
    {
        public void display()
        {
            System.out.println("This is Class C!");
        }
    }
--------------------------------------------------
package pack1;
public class ClassD
    {
        public void display()
        {
            System.out.println("This is Class D!");
        }
    }
--------------------------------------------------

import pack1.*;
public class MainPackage
{
    public static void main(String st[])
    {
        ClassA objA = new ClassA();
        objA.display();
        ClassB objB = new ClassB();
        objB.display();
        ClassC objC = new ClassC();
        objC.display();
        ClassD objD = new ClassD();
        objD.display();
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
           
            "Create a Java program to create a package with public class and protected members to be accessed in another class.": {
                description: "Program to Create a Java program to create a package with public class and protected members to be accessed in another class.",
                code: `
package protect1;
public class Protect1
    {
        protected String name = "Manjit";
        protected void display()
        {
            System.out.println("Hello " +name +" This is Protecte1.diplay()");
        }
    }
--------------------------------------------------
import protect1.*;

public class ProtectMain extends Protect1
        {
            public static void main(String st[])
            {
                ProtectMain obj = new ProtectMain();
                obj.display();
            }
        }
`,
                output: `
Hello Manjit This is Protecte1.diplay()
                `
            },
            "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.": {
                description: "Program to Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
                code: `
--------------------------------------------------
import pack1.pack.*;
public class NastedPack extends ClassA {
    public static void main(String[] args) {
    
    NastedPack obj = new NastedPack();
    obj.display();
    obj.display2();
    }
}
--------------------------------------------------
package pack1.pack;
public class ClassA
    {
       public void display()
        {
            System.out.println("This is public class!");
        }
        protected void display2()
        {
            System.out.println("This is protected Class");
        }
    }
`,
                output: `
This is public class!
This is protected Class
                `
            },
            "Create a Java program to create a package with public class and public members to be accessed in another class.": {
                description: "Program to Create a Java program to create a package with public class and public members to be accessed in another class.",
                code: `
package pack1;
public class ClassA
    {
       public void display()
        {
            System.out.println("This is Class A!");
        }
    }
--------------------------------------------------
package pack1;
public class ClassB
    {
       public static void main(String st[])
       {
       new ClassA.display();
       }
    }
`,
                output: `
This is Class A!
                `
            },
        },
        "Medium": {


        },
        "Hard": {
            "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.": {
                description: "Program to Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",
                code: `
package employee;

public class Emp {
    // Instance variables
    private String name;
    private int empid;
    private String category;
    private double bpay; // Basic pay
    private double hra;  // House Rent Allowance
    private double da;   // Dearness Allowance
    private double npay; // Net Pay
    private double pf;   // Provident Fund
    private double grosspay; // Gross Pay
    private double incometax; // Income Tax
    private double allowance; // Other allowances

    // Constructor
    public Emp(String name, int empid, String category, double bpay) {
        this.name = name;
        this.empid = empid;
        this.category = category;
        this.bpay = bpay;
        calculatePay();
    }

    // Method to calculate various pays
    private void calculatePay() {
        hra = bpay * 0.15; // 15% of basic pay
        da = bpay * 0.10;  // 10% of basic pay
        grosspay = bpay + hra + da; // Gross Pay
        pf = grosspay * 0.12; // 12% of gross pay
        incometax = (grosspay - pf) * 0.1; // 10% of amount after PF
        allowance = 0.05 * grosspay; // 5% of gross pay
        npay = grosspay - (pf + incometax); // Net Pay
    }

    // Method to display employee payroll details
    public void displayPayroll() {
        System.out.println("Employee Name: " + name);
        System.out.println("Employee ID: " + empid);
        System.out.println("Category: " + category);
        System.out.println("Basic Pay: " + bpay);
        System.out.println("House Rent Allowance: " + hra);
        System.out.println("Dearness Allowance: " + da);
        System.out.println("Gross Pay: " + grosspay);
        System.out.println("Provident Fund: " + pf);
        System.out.println("Income Tax: " + incometax);
        System.out.println("Net Pay: " + npay);
        System.out.println("Allowances: " + allowance);
    }
}

`,
                output: `
Employee Name: John Doe
Employee ID: 101
Category: Manager
Basic Pay: 50000.0
House Rent Allowance: 7500.0
Dearness Allowance: 5000.0
Gross Pay: 62500.0
Provident Fund: 7500.0
Income Tax: 5500.0
Net Pay: 49500.0
Allowances: 3125.0

                `
            },
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
 Duplicate elements:
2
3
3
4
4
4
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
1
2
3
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
public class ArrayElementCount {
    public static void main(String[] args) {
        // Define an array
        int[] numbers = {10, 20, 30, 40, 50};

        // Calculate the number of elements in the array
        int numberOfElements = numbers.length;

        // Print the number of elements
        System.out.println("The number of elements in the array is: " + numberOfElements);
    }
}

`,
                output: `
The number of elements in the array is: 5

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
public class ArrayRightRotate {
    // Method to right rotate the array
    public static void rightRotate(int[] arr, int d) {
        int n = arr.length;
        // Handle cases where d >= n
        d = d % n; 
        if (d == 0) return; // No rotation needed if d is 0

        // Create a temporary array to hold the rotated elements
        int[] temp = new int[d];

        // Store the last d elements in the temporary array
        for (int i = 0; i < d; i++) {
            temp[i] = arr[n - d + i];
        }

        // Shift the remaining elements in the original array
        for (int i = n - 1; i >= d; i--) {
            arr[i] = arr[i - d];
        }

        // Copy the temporary array back to the original array
        for (int i = 0; i < d; i++) {
            arr[i] = temp[i];
        }
    }

    public static void main(String[] args) {
        // Define an array
        int[] arr = {1, 2, 3, 4, 5};

        // Number of positions to rotate
        int d = 2;

        // Print original array
        System.out.println("Original Array:");
        printArray(arr);

        // Right rotate the array
        rightRotate(arr, d);

        // Print rotated array
        System.out.println("Array after right rotation by " + d + " positions:");
        printArray(arr);
    }

    // Method to print the array
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println(); // New line for better output formatting
    }
}

`,
                output: `
Original Array:
1 2 3 4 5 
Array after right rotation by 2 positions:
4 5 1 2 3 

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
import java.util.Arrays;

public class ThirdLargestInArray {
    public static void main(String[] args) {
        // Define an array
        int[] arr = {12, 35, 1, 10, 34, 1};

        // Find the third largest number
        int thirdLargest = findThirdLargest(arr);

        // Print the result
        if (thirdLargest != Integer.MIN_VALUE) {
            System.out.println("The third largest number in the array is: " + thirdLargest);
        } else {
            System.out.println("The array does not contain enough distinct elements.");
        }
    }

    public static int findThirdLargest(int[] arr) {
        // Create a new array with unique elements
        int[] uniqueArr = Arrays.stream(arr).distinct().toArray();

        // Check if there are at least 3 unique elements
        if (uniqueArr.length < 3) {
            return Integer.MIN_VALUE; // Not enough distinct elements
        }

        // Sort the unique array in descending order
        Arrays.sort(uniqueArr);
        
        // Return the third largest element
        return uniqueArr[uniqueArr.length - 3];
    }
}

`,
                output: `
The third largest number in the array is: 12

                `
            },
            "Find 2nd Largest Number in an array": {
                description: "Program to Find 2nd Largest Number in an array",
                code: `
import java.util.Arrays;

public class SecondLargestInArray {
    public static void main(String[] args) {
        // Define an array
        int[] arr = {12, 35, 1, 10, 34, 1};

        // Find the second largest number
        int secondLargest = findSecondLargest(arr);

        // Print the result
        if (secondLargest != Integer.MIN_VALUE) {
            System.out.println("The second largest number in the array is: " + secondLargest);
        } else {
            System.out.println("The array does not contain enough distinct elements.");
        }
    }

    public static int findSecondLargest(int[] arr) {
        // Create a new array with unique elements
        int[] uniqueArr = Arrays.stream(arr).distinct().toArray();

        // Check if there are at least 2 unique elements
        if (uniqueArr.length < 2) {
            return Integer.MIN_VALUE; // Not enough distinct elements
        }

        // Sort the unique array in descending order
        Arrays.sort(uniqueArr);
        
        // Return the second largest element
        return uniqueArr[uniqueArr.length - 2];
    }
}

`,
                output: `
The second largest number in the array is: 34

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
            
            "Find Smallest Number in an array": {
                description: "Program to Find Smallest Number in an array",
                code: `
public class SmallestNumberInArray {
    public static void main(String[] args) {
        // Define an array
        int[] arr = {12, 35, 1, 10, 34, 1};

        // Find the smallest number
        int smallest = findSmallest(arr);

        // Print the result
        System.out.println("The smallest number in the array is: " + smallest);
    }

    public static int findSmallest(int[] arr) {
        // Assume the first element is the smallest
        int smallest = arr[0];

        // Iterate through the array to find the smallest number
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }

        return smallest;
    }
}

`,
                output: `
The smallest number in the array is: 1

                `
            },
            
            "Print Odd and Even Numbers from an array": {
                description: "Program to Print Odd and Even Numbers from an array",
                code: `
public class OddEvenNumbersInArray {
    public static void main(String[] args) {
        // Define an array
        int[] arr = {12, 35, 1, 10, 34, 21, 7, 42, 18};

        // Print odd and even numbers
        printOddAndEvenNumbers(arr);
    }

    public static void printOddAndEvenNumbers(int[] arr) {
        System.out.print("Even numbers: ");
        for (int num : arr) {
            if (num % 2 == 0) { // Check if the number is even
                System.out.print(num + " ");
            }
        }

        System.out.println(); // Move to the next line

        System.out.print("Odd numbers: ");
        for (int num : arr) {
            if (num % 2 != 0) { // Check if the number is odd
                System.out.print(num + " ");
            }
        }
    }
}

`,
                output: `
Even numbers: 12 10 34 42 18 
Odd numbers: 35 1 21 7 

                `
            },
            "How to Sort an Array in Java": {
                description: "Program to How to Sort an Array in Java",
                code: `
import java.util.Arrays;

public class SortArrayExample {
    public static void main(String[] args) {
        // Integer array to be sorted
        int[] intArray = {12, 35, 1, 10, 34, 7};

        // Sorting the integer array
        Arrays.sort(intArray);
        System.out.println("Sorted integer array: " + Arrays.toString(intArray));

        // String array to be sorted
        String[] strArray = {"Banana", "Apple", "Orange", "Mango"};

        // Sorting the string array
        Arrays.sort(strArray);
        System.out.println("Sorted string array: " + Arrays.toString(strArray));
    }
}

`,
                output: `
Sorted integer array: [1, 7, 10, 12, 34, 35]
Sorted string array: [Apple, Banana, Mango, Orange]

                `
            },


        },
        "Medium": {
"Remove Duplicate Element in an array": {
                description: "Program to Remove Duplicate Element in an array",
                code: `
import java.util.Arrays;
import java.util.HashSet;

public class RemoveDuplicatesInArray {
    public static void main(String[] args) {
        // Define an array with duplicate elements
        int[] arr = {12, 35, 1, 10, 35, 1, 34, 1};

        // Remove duplicates
        int[] uniqueArr = removeDuplicates(arr);

        // Print the result
        System.out.println("Array after removing duplicates: " + Arrays.toString(uniqueArr));
    }

    public static int[] removeDuplicates(int[] arr) {
        // Create a HashSet to store unique elements
        HashSet<Integer> uniqueElements = new HashSet<>();

        // Add each element to the HashSet (duplicates will be ignored)
        for (int num : arr) {
            uniqueElements.add(num);
        }

        // Convert the HashSet back to an array
        int[] result = new int[uniqueElements.size()];
        int index = 0;
        for (int num : uniqueElements) {
            result[index++] = num;
        }

        return result;
    }
}

`,
                output: `
Array after removing duplicates: [1, 34, 10, 35, 12]

                `
            },

        },
        "Hard": {
"Find 2nd Smallest Number in an array": {
                description: "Program to Find 2nd Smallest Number in an array",
                code: `
import java.util.Arrays;

public class SecondSmallestInArray {
    public static void main(String[] args) {
        // Define an array
        int[] arr = {12, 35, 1, 10, 34, 1};

        // Find the second smallest number
        int secondSmallest = findSecondSmallest(arr);

        // Print the result
        if (secondSmallest != Integer.MAX_VALUE) {
            System.out.println("The second smallest number in the array is: " + secondSmallest);
        } else {
            System.out.println("The array does not contain enough distinct elements.");
        }
    }

    public static int findSecondSmallest(int[] arr) {
        // Create a new array with unique elements
        int[] uniqueArr = Arrays.stream(arr).distinct().toArray();

        // Check if there are at least 2 unique elements
        if (uniqueArr.length < 2) {
            return Integer.MAX_VALUE; // Not enough distinct elements
        }

        // Sort the unique array in ascending order
        Arrays.sort(uniqueArr);
        
        // Return the second smallest element
        return uniqueArr[1];
    }
}

`,
                output: `
The second smallest number in the array is: 10

                `
            },
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
public class StringImmutability {
    public static void main(String[] args) {
        // Create a string
        String originalString = "Hello, World!";
        
        // Print original string
        System.out.println("Original String: " + originalString);
        
        // Attempt to modify the string
        String modifiedString = originalString.replace("World", "Java");
        
        // Print the modified string
        System.out.println("Modified String: " + modifiedString);
        
        // Print the original string again to show it hasn't changed
        System.out.println("Original String after modification attempt: " + originalString);
    }
}


`,
                output: `
Original String: Hello, World!
Modified String: Hello, Java!
Original String after modification attempt: Hello, World!

          `
            },
            "remove all occurrences of a given character from input String?": {
                description: "Program to remove all occurrences of a given character from input String?.",
                code: `
import java.util.Scanner;

public class RemoveCharacterFromString {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input string
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Prompt the user for the character to remove
        System.out.print("Enter the character to remove: ");
        char charToRemove = scanner.next().charAt(0);

        // Call the method to remove the character
        String resultString = removeCharacter(inputString, charToRemove);

        // Display the result
        System.out.println("String after removing '" + charToRemove + "': " + resultString);

        // Close the scanner
        scanner.close();
    }

    // Method to remove all occurrences of a given character from the string
    public static String removeCharacter(String str, char ch) {
        return str.replaceAll(Character.toString(ch), ""); // Use replaceAll to remove all occurrences
    }
}


`,
                output: `
Enter a string: Hello, World!
Enter the character to remove: o
String after removing 'o': Hell, Wrld!

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
                code: `
import java.util.Scanner;

public class CountPunctuationInString {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input string
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Call the method to count punctuation characters
        int punctuationCount = countPunctuation(inputString);

        // Display the result
        System.out.println("Total number of punctuation characters: " + punctuationCount);

        // Close the scanner
        scanner.close();
    }

    // Method to count punctuation characters in the string
    public static int countPunctuation(String str) {
        int count = 0;

        // Iterate through each character in the string
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            // Check if the character is a punctuation character
            if (isPunctuation(ch)) {
                count++;
            }
        }
        return count;
    }

    // Helper method to determine if a character is punctuation
    public static boolean isPunctuation(char ch) {
        return !Character.isLetterOrDigit(ch) && !Character.isWhitespace(ch);
    }
}

 `,
                output:
                    `
Enter a string: Hello, World! How's it going? (Hope you are well.)
Total number of punctuation characters: 7

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
                code: `
import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input string
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Call the method to check if the string is a palindrome
        boolean isPalindrome = isPalindrome(inputString);

        // Display the result
        if (isPalindrome) {
            System.out.println("The string is a palindrome.");
        } else {
            System.out.println("The string is not a palindrome.");
        }

        // Close the scanner
        scanner.close();
    }

    // Method to check if a string is a palindrome
    public static boolean isPalindrome(String str) {
        // Remove spaces and convert to lower case
        String cleanedString = str.replaceAll("[\\W]", "").toLowerCase();

        // Get the length of the cleaned string
        int len = cleanedString.length();

        // Check characters from the beginning and end of the string
        for (int i = 0; i < len / 2; i++) {
            if (cleanedString.charAt(i) != cleanedString.charAt(len - 1 - i)) {
                return false; // Not a palindrome
            }
        }
        return true; // It's a palindrome
    }
}

 `,
                output:
                    `
Enter a string: A man, a plan, a canal, Panama
The string is a palindrome.

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
import java.util.Scanner;

public class LargestAndSmallestWord {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input string
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Call the method to find largest and smallest words
        String[] result = findLargestAndSmallestWord(inputString);

        // Display the results
        System.out.println("Largest word: " + result[0]);
        System.out.println("Smallest word: " + result[1]);

        // Close the scanner
        scanner.close();
    }

    // Method to find the largest and smallest words in a string
    public static String[] findLargestAndSmallestWord(String str) {
        // Split the string into words using space as a delimiter
        String[] words = str.split("\\s+");
        
        String largestWord = "";
        String smallestWord = words[0]; // Assume the first word is the smallest initially

        // Iterate through the words to find largest and smallest
        for (String word : words) {
            // Update largest word if current word is longer
            if (word.length() > largestWord.length()) {
                largestWord = word;
            }
            // Update smallest word if current word is shorter
            if (word.length() < smallestWord.length()) {
                smallestWord = word;
            }
        }
        
        return new String[]{largestWord, smallestWord}; // Return the largest and smallest words
    }
}


`,
                output: `
Enter a string: The quick brown fox jumps over the lazy dog
Largest word: jumps
Smallest word: The

          `
            },
            "find the longest repeating sequence in a string": {
                description: "Program to find the longest repeating sequence in a string.",
                code: `
import java.util.Scanner;

public class LongestRepeatingSequence {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input string
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Call the method to find the longest repeating sequence
        String longestSequence = findLongestRepeatingSequence(inputString);

        // Display the result
        if (longestSequence.isEmpty()) {
            System.out.println("No repeating sequence found.");
        } else {
            System.out.println("Longest repeating sequence: " + longestSequence);
        }

        // Close the scanner
        scanner.close();
    }

    // Method to find the longest repeating sequence in a string
    public static String findLongestRepeatingSequence(String str) {
        int n = str.length();
        String longestRepeating = "";

        // Use a nested loop to compare substrings
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int len = 0;

                // Compare characters while they are the same
                while (j + len < n && str.charAt(i + len) == str.charAt(j + len)) {
                    len++;
                }

                // Update the longest repeating substring if found
                if (len > longestRepeating.length() && len > 0) {
                    longestRepeating = str.substring(i, i + len);
                }
            }
        }

        return longestRepeating; // Return the longest repeating substring
    }
}


`,
                output: `
Enter a string: abcabcabcd
Longest repeating sequence: abc

          `
            },
            "find the most repeated word in a text file": {
                description: "Program to find the most repeated word in a text file.",
                code: `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class MostRepeatedWord {
    public static void main(String[] args) {
        String filePath = "sample.txt"; // Specify the path to your text file here
        findMostRepeatedWord(filePath);
    }

    public static void findMostRepeatedWord(String filePath) {
        Map<String, Integer> wordCountMap = new HashMap<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] words = line.toLowerCase().split("\\W+"); // Split line into words, ignoring punctuation
                for (String word : words) {
                    if (word.isEmpty()) continue;
                    wordCountMap.put(word, wordCountMap.getOrDefault(word, 0) + 1);
                }
            }

            // Find the most repeated word
            String mostRepeatedWord = null;
            int maxCount = 0;

            for (Map.Entry<String, Integer> entry : wordCountMap.entrySet()) {
                if (entry.getValue() > maxCount) {
                    mostRepeatedWord = entry.getKey();
                    maxCount = entry.getValue();
                }
            }

            if (mostRepeatedWord != null) {
                System.out.println("Most repeated word: " + mostRepeatedWord);
                System.out.println("Frequency: " + maxCount);
            } else {
                System.out.println("No words found in the file.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        }
    }
}


`,
                output: `
Most repeated word: java
Frequency: 3

          `
            },
            "find the number of the words in the given text file": {
                description: "Program to find the number of the words in the given text file.",
                code: `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class WordCount {
    public static void main(String[] args) {
        String filePath = "sample.txt"; // Specify the path to your text file here
        int wordCount = countWordsInFile(filePath);
        System.out.println("Total number of words in the file: " + wordCount);
    }

    public static int countWordsInFile(String filePath) {
        int wordCount = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] words = line.trim().split("\\s+"); // Split by whitespace
                wordCount += words.length; // Add the number of words in this line to the total count
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        }

        return wordCount;
    }
}


`,
                output: `
Total number of words in the file: 9

          `
            },
            " Get a Character From the Given String": {
                description: "Program to  Get a Character From the Given String.",
                code: `
import java.util.Scanner;

public class GetCharacterFromString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Get the index from the user
        System.out.print("Enter the index of the character you want to retrieve: ");
        int index = scanner.nextInt();

        // Check if the index is within the valid range
        if (index >= 0 && index < inputString.length()) {
            char character = inputString.charAt(index);
            System.out.println("Character at index " + index + " is: " + character);
        } else {
            System.out.println("Invalid index. Please enter an index between 0 and " + (inputString.length() - 1));
        }

        scanner.close();
    }
}


`,
                output: `
Enter a string: Hello, World!
Enter the index of the character you want to retrieve: 7
Character at index 7 is: W

          `
            },
            "insert a string into another string": {
                description: "Program to insert a string into another string.",
                code: `
import java.util.Scanner;

public class InsertString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the main string from the user
        System.out.print("Enter the main string: ");
        String mainString = scanner.nextLine();

        // Get the string to insert from the user
        System.out.print("Enter the string to insert: ");
        String stringToInsert = scanner.nextLine();

        // Get the position from the user
        System.out.print("Enter the position to insert the string at: ");
        int position = scanner.nextInt();

        // Check if the position is within the valid range
        if (position >= 0 && position <= mainString.length()) {
            // Insert the string
            String result = mainString.substring(0, position) + stringToInsert + mainString.substring(position);
            System.out.println("Resulting string: " + result);
        } else {
            System.out.println("Invalid position. Please enter a position between 0 and " + mainString.length());
        }

        scanner.close();
    }
}


`,
                output: `
Enter the main string: Kumar
Enter the string to insert: Manjit
Enter the position to insert the string at: 0
Resulting string: ManjitKumar

          `
            },
            "Iterate Over Characters in String": {
                description: "Program to Iterate Over Characters in String.",
                code: `
import java.util.Scanner;

public class IterateCharacters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Method 1: Using a for loop with charAt()
        System.out.println("Using charAt() method:");
        for (int i = 0; i < inputString.length(); i++) {
            System.out.print(inputString.charAt(i) + " ");
        }

        System.out.println(); // New line for separation

        // Method 2: Using a for-each loop with toCharArray()
        System.out.println("Using toCharArray() method:");
        for (char ch : inputString.toCharArray()) {
            System.out.print(ch + " ");
        }

        scanner.close();
    }
}


`,
                output: `
Enter a string: Hello
Using charAt() method:
H e l l o 
Using toCharArray() method:
H e l l o 

          `
            },
            "Print a New Line in String": {
                description: "Program to Print a New Line in String.",
                code: `
import java.util.Scanner;

public class PrintNewLineInString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string with \\n to indicate new lines: ");
        String inputString = scanner.nextLine();

        // Replace occurrences of "\n" with actual new line characters
        String formattedString = inputString.replace("\\n", "\n");

        System.out.println("Formatted string with new lines:");
        System.out.println(formattedString);

        scanner.close();
    }
}


`,
                output: `
Enter a string with \n to indicate new lines: Hello\nWorld\nWelcome to Java
Formatted string with new lines:
Hello
World
Welcome to Java

          `
            },
            "Print even length words": {
                description: "Program to Print even length words.",
                code: `
import java.util.Scanner;

public class EvenLengthWords {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get a sentence from the user
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        // Split the sentence into words
        String[] words = sentence.split("\\s+");

        System.out.println("Even length words:");
        for (String word : words) {
            // Check if the word has an even length
            if (word.length() % 2 == 0) {
                System.out.println(word);
            }
        }

        scanner.close();
    }
}


`,
                output: `
Enter a sentence: Java is fun to learn
Even length words:
Java
is
to
learn

          `
            },
            "print smallest and biggest possible palindrome word in a given string": {
                description: "Program to print smallest and biggest possible palindrome word in a given string.",
                code: `
import java.util.Scanner;

public class SmallestAndLargestPalindrome {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        // Split the sentence into words
        String[] words = sentence.split("\\s+");

        String smallestPalindrome = null;
        String largestPalindrome = null;

        for (String word : words) {
            if (isPalindrome(word)) {
                if (smallestPalindrome == null || word.length() < smallestPalindrome.length()) {
                    smallestPalindrome = word;
                }
                if (largestPalindrome == null || word.length() > largestPalindrome.length()) {
                    largestPalindrome = word;
                }
            }
        }

        // Display the results
        if (smallestPalindrome != null) {
            System.out.println("Smallest palindrome: " + smallestPalindrome);
        } else {
            System.out.println("No palindromes found.");
        }

        if (largestPalindrome != null) {
            System.out.println("Largest palindrome: " + largestPalindrome);
        }

        scanner.close();
    }

    // Helper method to check if a word is a palindrome
    public static boolean isPalindrome(String word) {
        int left = 0;
        int right = word.length() - 1;
        while (left < right) {
            if (word.charAt(left) != word.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}


`,
                output: `
Enter a sentence: Anna went to civic center to see her mom and dad
Smallest palindrome: mom
Largest palindrome: civic

          `
            },
            "remove all the white spaces from a string": {
                description: "Program to remove all the white spaces from a string.",
                code: `
import java.util.Scanner;

public class RemoveWhitespace {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Remove all whitespace characters
        String stringWithoutSpaces = inputString.replaceAll("\\s+", "");

        // Display the result
        System.out.println("String without whitespace: " + stringWithoutSpaces);

        scanner.close();
    }
}


`,
                output: `
Enter a string: Hello World! This is a test.
String without whitespace: HelloWorld!Thisisatest.

          `
            },
            "replace lower-case characters with upper-case and vice-versa": {
                description: "Program to replace lower-case characters with upper-case and vice-versa.",
                code: `
import java.util.Scanner;

public class ReplaceCase {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // StringBuilder to hold the modified string
        StringBuilder modifiedString = new StringBuilder();

        // Iterate over each character in the input string
        for (char ch : inputString.toCharArray()) {
            // Check if the character is lowercase
            if (Character.isLowerCase(ch)) {
                // Convert to uppercase
                modifiedString.append(Character.toUpperCase(ch));
            } else if (Character.isUpperCase(ch)) {
                // Convert to lowercase
                modifiedString.append(Character.toLowerCase(ch));
            } else {
                // If it's not a letter, keep it unchanged
                modifiedString.append(ch);
            }
        }

        // Display the result
        System.out.println("Modified string: " + modifiedString.toString());

        scanner.close();
    }
}


`,
                output: `
Enter a string: Hello World!
Modified string: hELLO wORLD!

          `
            },
            "replace the spaces of a string with a specific character": {
                description: "Program to replace the spaces of a string with a specific character.",
                code: `
import java.util.Scanner;

public class ReplaceSpacesWithCharacter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Get the character to replace spaces with
        System.out.print("Enter a character to replace spaces: ");
        char replacementChar = scanner.next().charAt(0);

        // Replace spaces with the specified character
        String modifiedString = inputString.replace(' ', replacementChar);

        // Display the result
        System.out.println("Modified string: " + modifiedString);

        scanner.close();
    }
}


`,
                output: `
Enter a string: Hello World! This is Java.
Enter a character to replace spaces: _
Modified string: Hello_World!_This_is_Java.

          `
            },
            " separate the Individual Characters from a String": {
                description: "Program to  separate the Individual Characters from a String.",
                code: `
import java.util.Scanner;

public class SeparateCharacters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Separate and print individual characters
        System.out.println("Individual characters in the string:");
        for (char ch : inputString.toCharArray()) {
            System.out.println(ch);
        }

        scanner.close();
    }
}


`,
                output: `
Enter a string: Java Programming
Individual characters in the string:
J
a
v
a

P
r
o
g
r
a
m
m
i
n
g

          `
            },
            "Splitting into a number of sub-strings": {
                description: "Program to Splitting into a number of sub-strings.",
                code: `
import java.util.Scanner;

public class SplitStringIntoSubstrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Get the delimiter for splitting
        System.out.print("Enter a delimiter (e.g., space, comma): ");
        String delimiter = scanner.nextLine();

        // Split the string into substrings based on the delimiter
        String[] substrings = inputString.split(delimiter);

        // Display the resulting substrings
        System.out.println("Substrings:");
        for (String substring : substrings) {
            System.out.println(substring.trim()); // trim to remove leading/trailing spaces
        }

        scanner.close();
    }
}


`,
                output: `
Enter a string: Apple, Banana, Cherry, Date
Enter a delimiter (e.g., space, comma): ,
Substrings:
Apple
Banana
Cherry
Date

          `
            },
            " swap two string variables without using third or temp variable.": {
                description: "Program to  swap two string variables without using third or temp variable..",
                code: `
import java.util.Scanner;

public class SwapStrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input strings from the user
        System.out.print("Enter the first string: ");
        String str1 = scanner.nextLine();
        
        System.out.print("Enter the second string: ");
        String str2 = scanner.nextLine();

        // Display original strings
        System.out.println("Before swapping: ");
        System.out.println("String 1: " + str1);
        System.out.println("String 2: " + str2);

        // Swap the strings
        str1 = str1 + str2; // Concatenate both strings
        str2 = str1.substring(0, str1.length() - str2.length()); // Extract the first string
        str1 = str1.substring(str2.length()); // Extract the second string

        // Display swapped strings
        System.out.println("After swapping: ");
        System.out.println("String 1: " + str1);
        System.out.println("String 2: " + str2);

        scanner.close();
    }
}

`,
                output: `
Enter the first string: Hello
Enter the second string: World
Before swapping: 
String 1: Hello
String 2: World
After swapping: 
String 1: World
String 2: Hello

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


        },
        "Hard": {


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
selectType.addEventListener("change", function () {
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
selectDifficulty.addEventListener("change", function () {
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
selectProgram.addEventListener("change", function () {
    if (selectProgram.value !== "") {
        let i = 0;
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

