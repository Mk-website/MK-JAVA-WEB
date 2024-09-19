package input3;
class Input3
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		try{
		int x =sc.nextInt();
		System.out.println(x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter Integer value");
			}
		}
}