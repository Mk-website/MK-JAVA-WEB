package input6;
class Input6
	{
	public static void main(String st[])
		{
		java.util.Scanner sc = new java.util.Scanner(System.in);
		boolean x;
		try{
		x =sc.nextBoolean();
		System.out.println(x);
		}
		catch(java.util.InputMismatchException e)
			{
				System.out.println("Please Enter true/false value");
			}
		}
}