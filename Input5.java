package input5;
class Input5
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		try{
		double x =sc.nextDouble();
		System.out.println(x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter floating point value");
			}
		}
}