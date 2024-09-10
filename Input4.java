package input4;
class Input4
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		try{
		float x =sc.nextFloat();
		System.out.println(x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter float value");
			}
		}
}